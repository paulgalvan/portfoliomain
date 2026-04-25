import fs from "fs/promises";
import path from "path";
import heicConvert from "heic-convert";

const contentDir = path.resolve(process.cwd(), "content");

// 🪄 Recursive function to find ALL files in ALL sub-folders
async function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = await fs.readdir(dirPath, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dirPath, file.name);
    if (file.isDirectory()) {
      // If it's a folder, dive into it!
      arrayOfFiles = await getAllFiles(fullPath, arrayOfFiles);
    } else {
      // If it's a file, add it to our list
      arrayOfFiles.push(fullPath);
    }
  }

  return arrayOfFiles;
}

async function convertHeicAndPatchMarkdown() {
  try {
    console.log("🔍 Scanning for HEIC and Markdown files in ALL folders...");

    // Get EVERY file inside the content directory, no matter how deep
    const allFiles = await getAllFiles(contentDir);
    
    // Filter out just the ones we care about
    const heicFiles = allFiles.filter(f => f.toLowerCase().endsWith('.heic'));
    const mdFiles = allFiles.filter(f => f.toLowerCase().endsWith('.md'));

    if (heicFiles.length === 0) {
      console.log("✨ No HEIC files found! You are good to go.");
    } else {
      console.log(`📸 Found ${heicFiles.length} HEIC files to convert...`);
      
      // 1. Convert all HEIC files to JPG
      for (const filePath of heicFiles) {
        // Get the specific folder this file lives in so we save the JPG right next to it
        const fileDir = path.dirname(filePath);
        const fileName = path.basename(filePath);
        const newFileName = fileName.replace(/\.heic$/i, '.jpg');
        const newFilePath = path.join(fileDir, newFileName);

        console.log(`⏳ Converting ${fileName}...`);
        
        const inputBuffer = await fs.readFile(filePath);
        const outputBuffer = await heicConvert({
          buffer: inputBuffer,
          format: 'JPEG',      // Convert to JPEG
          quality: 0.8         // 80% quality to keep file size low for the web
        });

        await fs.writeFile(newFilePath, outputBuffer);
        await fs.unlink(filePath); // Delete the old HEIC file
        
        console.log(`✅ Saved as ${newFileName}`);
      }
    }

    // 2. Find and replace .heic with .jpg in all Markdown files
    console.log("\n📝 Updating Markdown files...");
    let updatedCount = 0;

    for (const mdPath of mdFiles) {
      let content = await fs.readFile(mdPath, "utf-8");
      const originalContent = content;
      
      // Case-insensitive replace of .heic with .jpg
      content = content.replace(/\.heic/gi, '.jpg');

      if (content !== originalContent) {
        await fs.writeFile(mdPath, content, "utf-8");
        // Print just the filename, not the giant path, to keep the terminal clean
        console.log(`✅ Updated image links in ${path.basename(mdPath)}`);
        updatedCount++;
      }
    }

    if (updatedCount === 0) {
      console.log("👍 No markdown files needed updating.");
    }

    console.log("\n🎉 All done! You can now run your process-markdown script.");

  } catch (error) {
    console.error("❌ Error:", error);
  }
}

convertHeicAndPatchMarkdown();