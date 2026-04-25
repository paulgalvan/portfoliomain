import fs from 'fs/promises';
import path from 'path';

const contentDir = path.resolve(process.cwd(), 'content');
const notionImagesDir = path.resolve(process.cwd(), 'public/notion-images');

async function copyAndFlatten(src) {
  // Create the clean destination folder
  await fs.mkdir(notionImagesDir, { recursive: true });
  
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);

    if (entry.isDirectory()) {
      // Dive into sub-folders
      await copyAndFlatten(srcPath);
    } else {
      // If it's media, flatten it! Copy directly to /public/notion-images
      if (/\.(jpg|jpeg|png|gif|webp|mp4|webm|svg)$/i.test(entry.name)) {
        const destPath = path.join(notionImagesDir, entry.name);
        await fs.copyFile(srcPath, destPath);
        console.log(`🖼️ Copied: ${entry.name} -> /public/notion-images/`);
      }
    }
  }
}

async function run() {
  try {
    console.log("🚚 Syncing and flattening images to /public/notion-images/...");
    await copyAndFlatten(contentDir);
    console.log("🎉 All images synced successfully!");
  } catch (err) {
    console.error("❌ Error copying images:", err);
  }
}

run();