/**
 * download-notion-images.mjs
 *
 * Run from your project root:
 *   node scripts/download-notion-images.mjs
 *
 * What it does:
 *   1. Scans every .md file in /content
 *   2. Finds all Notion S3 image/video URLs → downloads them to /public/notion-images/<slug>/
 *   3. Finds all relative local paths (from Notion exports) → copies them from
 *      /content/<slug>/ or a staging folder to /public/notion-images/<slug>/
 *   4. Rewrites all paths in the .md files to local /notion-images/... public URLs
 *
 * STAGING FOLDER:
 *   Drop your raw Notion export folders into /content/staging/ before running.
 *   The script will find any images/videos referenced in the .md files and copy them.
 *   Example structure:
 *     content/staging/Robotic Arm/Arm_Fast_Video.mp4
 *     content/staging/Robotic Arm/Our Progress/image.png
 *
 * Safe to re-run — already-processed files are skipped.
 */

import fs   from "fs";
import path from "path";
import https from "https";
import http  from "http";
import crypto from "crypto";
import { URL } from "url";

const CONTENT_DIR = path.resolve(process.cwd(), "content");
const STAGING_DIR = path.resolve(process.cwd(), "content/staging");
const OUTPUT_DIR  = path.resolve(process.cwd(), "public/notion-images");

// Matches Notion S3 URLs including long pre-signed query strings
const S3_REGEX = /https:\/\/prod-files-secure\.s3\.amazonaws\.com\/[^\s"')>\]]+/g;

// Matches relative image/video/pdf paths in markdown — catches both
// ![alt](path) and [text](path) syntax, excluding http(s) links
const LOCAL_PATH_REGEX = /(?:!\[[^\]]*\]|(?<!\!)\[[^\]]*\])\((?!https?:\/\/)([^)]+)\)/g;

// File extensions we care about
const MEDIA_EXTS = /\.(png|jpg|jpeg|gif|webp|svg|heic|mp4|webm|mov|ogg|pdf)$/i;

// ─── helpers ────────────────────────────────────────────────────────────────

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function urlToFilename(rawUrl) {
  let pathname;
  try { pathname = new URL(rawUrl).pathname; }
  catch { pathname = rawUrl.split("?")[0]; }
  const original = path.basename(decodeURIComponent(pathname));
  const ext      = path.extname(original) || ".jpg";
  const base     = path.basename(original, ext).replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 60);
  const hash     = crypto.createHash("md5").update(rawUrl).digest("hex").slice(0, 8);
  return `${base}_${hash}${ext}`;
}

function mdToSlug(filename) {
  return path.basename(filename, ".md");
}

function download(url, destPath) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith("https") ? https : http;
    const file  = fs.createWriteStream(destPath);
    const req   = proto.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
        download(res.headers.location, destPath).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        file.close();
        if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      res.pipe(file);
      file.on("finish", () => file.close(resolve));
    });
    req.on("error", (err) => {
      file.close();
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      reject(err);
    });
    req.setTimeout(30_000, () => { req.destroy(); reject(new Error("Timeout")); });
  });
}

/**
 * Search for a file by name recursively under a root directory.
 * Returns the first match found, or null.
 */
function findFile(filename, searchRoot) {
  if (!fs.existsSync(searchRoot)) return null;
  const entries = fs.readdirSync(searchRoot, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(searchRoot, entry.name);
    if (entry.isDirectory()) {
      const found = findFile(filename, fullPath);
      if (found) return found;
    } else if (entry.name === filename) {
      return fullPath;
    }
  }
  return null;
}

/**
 * Given a relative path from a .md file, try to resolve it to an actual file.
 * Searches in order:
 *   1. Relative to the .md file itself
 *   2. In content/staging/ recursively
 *   3. In content/ recursively
 */
function resolveLocalPath(relativePath, mdFilePath) {
  // Decode URL encoding (%20 → space etc.)
  const decoded = decodeURIComponent(relativePath);
  const filename = path.basename(decoded);

  // 1. Relative to the .md file
  const relToMd = path.resolve(path.dirname(mdFilePath), decoded);
  if (fs.existsSync(relToMd)) return relToMd;

  // 2. Search staging folder
  if (fs.existsSync(STAGING_DIR)) {
    const inStaging = findFile(filename, STAGING_DIR);
    if (inStaging) return inStaging;
  }

  // 3. Search content folder
  const inContent = findFile(filename, CONTENT_DIR);
  if (inContent) return inContent;

  return null;
}

// ─── main ───────────────────────────────────────────────────────────────────

async function run() {
  if (!fs.existsSync(CONTENT_DIR)) {
    console.error(`❌  /content directory not found at ${CONTENT_DIR}`);
    process.exit(1);
  }

  ensureDir(OUTPUT_DIR);
  ensureDir(STAGING_DIR);

  const mdFiles = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));

  if (mdFiles.length === 0) {
    console.log("⚠️  No .md files found in /content");
    return;
  }

  let totalS3Downloaded  = 0;
  let totalLocalCopied   = 0;
  let totalSkipped       = 0;
  let totalFailed        = 0;
  let totalRewrites      = 0;

  for (const mdFile of mdFiles) {
    const slug       = mdToSlug(mdFile);
    const projectDir = path.join(OUTPUT_DIR, slug);
    const mdPath     = path.join(CONTENT_DIR, mdFile);
    let   content    = fs.readFileSync(mdPath, "utf-8");
    let   newContent = content;
    let   changed    = false;

    console.log(`\n📄 ${mdFile}`);
    ensureDir(projectDir);

    // ── 1. S3 URLs ──────────────────────────────────────────────────────────
    const s3Urls = [...new Set(content.match(S3_REGEX) || [])];

    if (s3Urls.length > 0) {
      console.log(`   ${s3Urls.length} S3 URL(s)`);
    }

    for (const rawUrl of s3Urls) {
      const filename   = urlToFilename(rawUrl);
      const localPath  = path.join(projectDir, filename);
      const publicPath = `/notion-images/${slug}/${filename}`;

      if (fs.existsSync(localPath)) {
        console.log(`   ✓ skip  ${filename}`);
        totalSkipped++;
      } else {
        process.stdout.write(`   ⬇  ${filename} ... `);
        try {
          await download(rawUrl, localPath);
          const kb = (fs.statSync(localPath).size / 1024).toFixed(0);
          console.log(`done (${kb} KB)`);
          totalS3Downloaded++;
        } catch (err) {
          console.log(`FAILED — ${err.message}`);
          console.log(`         URL likely expired. Re-export from Notion and re-run.`);
          totalFailed++;
          continue; // Don't rewrite this URL
        }
      }

      // Rewrite URL in content
      const escaped = rawUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const before  = newContent;
      newContent    = newContent.replace(new RegExp(escaped, "g"), publicPath);
      if (newContent !== before) { totalRewrites++; changed = true; }
    }

    // ── 2. Local relative paths ─────────────────────────────────────────────
    const localMatches = [...content.matchAll(LOCAL_PATH_REGEX)];
    const localPaths   = [...new Set(
      localMatches
        .map((m) => m[1].trim())
        .filter((p) => MEDIA_EXTS.test(p) && !p.startsWith("/"))
    )];

    if (localPaths.length > 0) {
      console.log(`   ${localPaths.length} local path(s)`);
    }

    for (const relativePath of localPaths) {
      const filename   = path.basename(decodeURIComponent(relativePath)).replace(/\s+/g, "_");
      const destPath   = path.join(projectDir, filename);
      const publicPath = `/notion-images/${slug}/${filename}`;

      if (fs.existsSync(destPath)) {
        console.log(`   ✓ skip  ${filename}`);
        totalSkipped++;
      } else {
        const sourcePath = resolveLocalPath(relativePath, mdPath);
        if (!sourcePath) {
          console.log(`   ✗ not found: ${relativePath}`);
          console.log(`     Drop the export folder into content/staging/ and re-run`);
          totalFailed++;
          continue;
        }
        process.stdout.write(`   📋 copy  ${filename} ... `);
        try {
          fs.copyFileSync(sourcePath, destPath);
          const kb = (fs.statSync(destPath).size / 1024).toFixed(0);
          console.log(`done (${kb} KB)`);
          totalLocalCopied++;
        } catch (err) {
          console.log(`FAILED — ${err.message}`);
          totalFailed++;
          continue;
        }
      }

      // Rewrite path in content — escape for regex, handle URL-encoded spaces
      const escapedRel  = relativePath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const before      = newContent;
      newContent        = newContent.replace(new RegExp(escapedRel, "g"), publicPath);
      if (newContent !== before) { totalRewrites++; changed = true; }
    }

    // ── Save rewritten .md ──────────────────────────────────────────────────
    if (changed) {
      fs.writeFileSync(mdPath, newContent, "utf-8");
      console.log(`   ✏️  rewrote paths in ${mdFile}`);
    } else if (s3Urls.length === 0 && localPaths.length === 0) {
      console.log(`   ⏭  no media URLs found`);
    }
  }

  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅  Done!
   S3 downloaded  : ${totalS3Downloaded}
   Local copied   : ${totalLocalCopied}
   Skipped        : ${totalSkipped}  (already local)
   Failed         : ${totalFailed}
   Path rewrites  : ${totalRewrites}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Next steps:
  1. Run: node scripts/process-markdown-for-projects.mjs
     to regenerate HTML with the new local paths
  2. Commit /public/notion-images/ to your repo
  3. Any "not found" files → drop the Notion export folder
     into content/staging/ and re-run this script
`);
}

run().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
