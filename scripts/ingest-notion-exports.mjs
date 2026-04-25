/**
 * ingest-notion-exports.mjs
 *
 * Run from your project root:
 *   node scripts/ingest-notion-exports.mjs
 *
 * What it does:
 *   1. Scans content/staging/ for all .md files recursively
 *   2. Auto-slugifies and renames them (e.g. "Part 1 - Creating Elles abc123.md" → "part-1-creating-elles-instructions.md")
 *   3. Moves renamed .md files to content/
 *   4. Moves all image/video folders alongside each .md into content/staging/ root
 *      so download-notion-images.mjs can find them
 *   5. Then automatically runs download-notion-images.mjs to copy all media
 *      and rewrite paths
 *
 * USAGE:
 *   1. Drop your raw Notion export folders into content/staging/
 *   2. Run: node scripts/ingest-notion-exports.mjs
 *   3. Done — check content/ for .md files and public/notion-images/ for media
 *
 * SAFE TO RE-RUN — skips files that already exist in content/
 */

import fs   from "fs";
import path from "path";
import { execSync } from "child_process";

const CONTENT_DIR = path.resolve(process.cwd(), "content");
const STAGING_DIR = path.resolve(process.cwd(), "content/staging");

// ─── helpers ────────────────────────────────────────────────────────────────

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

/**
 * Convert any filename to a clean slug.
 * "Part 1 - Creating Elles' Instructions abc123def.md"
 * → "part-1-creating-elles-instructions.md"
 */
function slugify(filename) {
  const ext  = path.extname(filename);
  const base = path.basename(filename, ext);

  return base
    .toLowerCase()
    // Remove hex IDs that Notion appends (32-char hex strings)
    .replace(/\s+[a-f0-9]{8,}$/i, "")
    // Remove apostrophes and quotes
    .replace(/['''""]/g, "")
    // Replace spaces and underscores with hyphens
    .replace(/[\s_]+/g, "-")
    // Remove any character that isn't alphanumeric or hyphen
    .replace(/[^a-z0-9-]/g, "")
    // Collapse multiple hyphens
    .replace(/-{2,}/g, "--")
    // Remove leading/trailing hyphens
    .replace(/^-+|-+$/g, "")
    + ext;
}

/**
 * Recursively find all files matching an extension under a directory.
 */
function findFiles(dir, ext) {
  if (!fs.existsSync(dir)) return [];
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findFiles(full, ext));
    } else if (entry.name.endsWith(ext)) {
      results.push(full);
    }
  }
  return results;
}

/**
 * Recursively find all directories under a root.
 */
function findDirs(dir) {
  if (!fs.existsSync(dir)) return [];
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      const full = path.join(dir, entry.name);
      results.push(full);
      results.push(...findDirs(full));
    }
  }
  return results;
}

/**
 * Copy a directory recursively.
 */
function copyDir(src, dest) {
  ensureDir(dest);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath  = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      if (!fs.existsSync(destPath)) {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
}

// ─── main ───────────────────────────────────────────────────────────────────

async function run() {
  ensureDir(CONTENT_DIR);
  ensureDir(STAGING_DIR);

  console.log("🔍 Scanning content/staging/ for Notion exports...\n");

  // Find all .md files anywhere in staging
  const mdFiles = findFiles(STAGING_DIR, ".md");

  // Filter out unwanted files (Untitled, CSV-related, _all)
  const filtered = mdFiles.filter(f => {
    const name = path.basename(f).toLowerCase();
    return !name.startsWith("untitled") && !name.includes("_all");
  });

  if (filtered.length === 0) {
    console.log("⚠️  No .md files found in content/staging/");
    console.log("    Drop your Notion export folders into content/staging/ and re-run.\n");
    return;
  }

  console.log(`Found ${filtered.length} .md file(s) to process:\n`);

  let moved    = 0;
  let skipped  = 0;
  let failed   = 0;

  for (const mdPath of filtered) {
    const originalName = path.basename(mdPath);
    const slug         = slugify(originalName);
    const destPath     = path.join(CONTENT_DIR, slug);
    const srcDir       = path.dirname(mdPath);

    console.log(`📄 ${originalName}`);
    console.log(`   → ${slug}`);

    // Skip if already in content/
    if (fs.existsSync(destPath)) {
      console.log(`   ⏭  already exists in content/ — skipping\n`);
      skipped++;
      continue;
    }

    // Move the .md file to content/
    try {
      fs.copyFileSync(mdPath, destPath);
      fs.unlinkSync(mdPath);
      console.log(`   ✓ moved to content/${slug}`);
      moved++;
    } catch (err) {
      console.log(`   ✗ failed to move: ${err.message}\n`);
      failed++;
      continue;
    }

    // Move any sibling image/asset folders to content/staging/ root
    // so download-notion-images.mjs can find them
    if (srcDir !== STAGING_DIR) {
      try {
        const siblings = fs.readdirSync(srcDir, { withFileTypes: true });
        for (const sibling of siblings) {
          if (!sibling.isDirectory()) continue;
          const sibSrc  = path.join(srcDir, sibling.name);
          const sibDest = path.join(STAGING_DIR, sibling.name);
          if (!fs.existsSync(sibDest)) {
            copyDir(sibSrc, sibDest);
            console.log(`   📁 copied asset folder: ${sibling.name}`);
          } else {
            console.log(`   📁 asset folder already exists: ${sibling.name}`);
          }
        }
      } catch (err) {
        console.log(`   ⚠️  Could not copy asset folders: ${err.message}`);
      }
    }

    console.log();
  }

  // Also flatten any deeply nested asset folders to staging root
  // (handles cases like elles/Our Progress/Part 1 - Creating Elles/)
  console.log("📁 Flattening nested asset folders to staging root...");
  const allDirs = findDirs(STAGING_DIR);
  for (const dir of allDirs) {
    // Skip if already at staging root level
    if (path.dirname(dir) === STAGING_DIR) continue;

    const name = path.basename(dir);
    const dest = path.join(STAGING_DIR, name);

    // Only move dirs that look like asset folders (contain media files)
    const hasMedia = fs.readdirSync(dir).some(f =>
      /\.(png|jpg|jpeg|gif|webp|svg|heic|mp4|webm|mov|ogg|pdf)$/i.test(f)
    );

    if (hasMedia && !fs.existsSync(dest)) {
      copyDir(dir, dest);
      console.log(`   📁 flattened: ${name}`);
    }
  }

  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 Ingest complete
   Moved   : ${moved}
   Skipped : ${skipped}  (already in content/)
   Failed  : ${failed}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

▶️  Now running download-notion-images.mjs...
`);

  // Auto-run the download script
  try {
    execSync("node scripts/download-notion-images.mjs", { stdio: "inherit" });
  } catch (err) {
    console.error("❌ download-notion-images.mjs failed:", err.message);
  }
}

run().catch(err => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
