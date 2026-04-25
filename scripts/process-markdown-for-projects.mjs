import fs from "fs";
import path from "path";
import { remark } from 'remark';
import html from 'remark-html';
import { visit } from 'unist-util-visit';

const projectsJsonPath = path.resolve(process.cwd(), "src/data/projects.json");
const contentDirPath = path.resolve(process.cwd(), "content");
const processedContentBaseDir = path.resolve(process.cwd(), "public/processed-content");

function generateTabLabel(filename) {
  const customLabels = {
    "part-1-creating-elles-instructions.md": "Creating Instructions",
    "part-2-constructing-elles.md": "Constructing Elles",
    "part-3-building-the-joystick.md": "Building the Joystick",
    "part-4-programming-ellesjoystick-ble.md": "Programming BLE",
    "part-5-reflection.md": "Reflection",
    "part-6-do-it-yourself.md": "Do It Yourself",
    "building-a-guitar.md": "Overview",
    "neck-and-fretboard.md": "Neck & Fretboard"
  };

  if (customLabels[filename]) return customLabels[filename];

  let name = filename.replace(/\.md$/, "");
  name = name.replace(/^(project-\d+--|part-\d+-)/, "");
  name = name.replace(/-/g, " ");
  return name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function remarkAdjustAssetPaths() {
  return (tree) => {
    visit(tree, ['image', 'link'], (node, index, parent) => {
      if (node.url && !node.url.startsWith('http')) {
        
        // 1. Extract JUST the filename, ignoring whatever folders Notion added
        const fileName = node.url.split('/').pop();
        
        // 2. Decode it in case Notion added %20 for spaces, then re-encode it safely
        const cleanName = decodeURIComponent(fileName);
        
        // 3. Force the path to look in our new flattened folder
        node.url = '/notion-images/' + encodeURIComponent(cleanName);

        if (node.type === 'link' && /\.(mp4|webm|ogg)$/i.test(node.url)) {
          const videoTag = `<video controls src="${node.url}" class="w-full h-auto rounded-lg"></video>`;
          parent.children.splice(index, 1, { type: 'html', value: videoTag });
          return visit.SKIP;
        }
        if (node.type === 'link' && /\.pdf$/i.test(node.url)) {
            const pdfLink = `<a href="${node.url}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">Download PDF: ${node.children[0]?.value || node.url}</a>`;
            parent.children.splice(index, 1, { type: 'html', value: pdfLink });
            return visit.SKIP;
        }
      }
    });
  };
}

function remarkCodeToAccordion() {
  return (tree) => {
    visit(tree, 'code', (node, index, parent) => {
      const lang = node.lang || 'text';
      const title = `Code (${lang})`;
      parent.children.splice(index, 1, {
        type: 'html',
        value: `<div data-accordion-code-block="true" data-code-lang="${lang}" data-code-title="${title}"><pre><code class="language-${lang}">${node.value}</code></pre></div>`,
      });
    });
  };
}

function remarkImageFormatting() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      const sideBySideImages = ['palm.jpg', 'fist.jpg', 'thumb.jpg'];
      const imagesInParagraph = node.children.filter(child => child.type === 'image' && sideBySideImages.includes(child.url.replace(/^\//, '')));

      if (imagesInParagraph.length >= 2 && imagesInParagraph.length <= 3) {
        const imageHtml = imagesInParagraph.map(img => `<img src="${img.url}" alt="${img.alt}" class="w-1/3 object-contain">`).join('');
        parent.children.splice(index, 1, {
          type: 'html',
          value: `<div class="flex justify-around items-center my-4">${imageHtml}</div>`,
        });
        return visit.SKIP;
      }

      const describedImages = {
        'hand-without-spike.png': 'Hand without SPIKE Hub and motors',
        'hand-with-spike.png': 'Hand with SPIKE Hub and motors',
      };

      node.children.forEach((child, childIndex) => {
        if (child.type === 'image' && describedImages[child.url.replace(/^\//, '')]) {
          const caption = describedImages[child.url.replace(/^\//, '')];
          const figureHtml = `<figure class="my-4"><img src="${child.url}" alt="${child.alt}" class="w-full h-auto rounded-lg"><figcaption class="text-center text-sm text-gray-500 mt-2">${caption}</figcaption></figure>`;
          node.children.splice(childIndex, 1, { type: 'html', value: figureHtml });
        }
      });
    });
  };
}

async function processMarkdownForProjects() {
  try {
    console.log("🚀 Starting to process Markdown for projects.json...");

    if (!fs.existsSync(processedContentBaseDir)) {
      fs.mkdirSync(processedContentBaseDir, { recursive: true });
    }

    let projects = [];
    if (fs.existsSync(projectsJsonPath)) {
      projects = JSON.parse(fs.readFileSync(projectsJsonPath, "utf-8"));
    } else {
      console.error(`❌ Error: ${projectsJsonPath} not found.`);
      return;
    }

    const projectsToUpdateConfig = [
      {
        id: "project-elles",
        markdownFiles: [
          "project-elles.md",
          "part-1-creating-elles-instructions.md",
          "part-2-constructing-elles.md",
          "part-3-building-the-joystick.md",
          "part-4-programming-ellesjoystick-ble.md",
          "part-5-reflection.md",
          "part-6-do-it-yourself.md",
        ],
      },
      { 
        id: "the-hand", 
        markdownFiles: ["the-hand.md"] 
      },
      {
        id: "me-35",
        markdownFiles: [
          "me-35.md",
          "project-1--double-jump.md",
          "project-2--linkages.md",
          "project-3--star-road.md",
          "project-4--rainbow-road.md",
          "project-5--pit-stop.md",
          "project-6--mushroom-kingdom-raceway.md",
          "project-7--super-mario-bos-cafe.md",
        ],
      },
      {
        id: "guitar",
        markdownFiles: [
          "building-a-guitar.md",
          "bracing.md",
          "neck-and-fretboard.md",
          "soundboard.md",
          "sidewalls.md",
          "final-assembly.md",
          "onshape.md",
        ],
      },
      { 
        id: "Low-Cost-Robotic-Arm", 
        markdownFiles: [
          "design-process.md",
          "printing.md",
          "robot-assembly.md",
          "code.md",
          "bills-of-materials-bom.md"
        ] 
      }
    ];

    for (const projectConfig of projectsToUpdateConfig) {
      const projectIndex = projects.findIndex(p => p.id === projectConfig.id);

      if (projectIndex !== -1) {
        let processedFilesArray = [];
        let allFilesFound = true;

        for (const mdFile of projectConfig.markdownFiles) {
          const markdownFilePath = path.join(contentDirPath, mdFile);
          
          if (fs.existsSync(markdownFilePath)) {
            const fileContent = fs.readFileSync(markdownFilePath, "utf-8");
            
            if (fileContent.trim().length === 0) continue;

            // Extract thumbnail logic adapted for the new flattened structure
            const imageMatch = fileContent.match(/!\[.*?\]\((.*?)\)|<img[^>]+src="([^">]+)"/i);
            let thumbnail = null;
            if (imageMatch) {
              let rawUrl = imageMatch[1] || imageMatch[2];
              if (rawUrl && !rawUrl.startsWith('http')) {
                const fileName = decodeURIComponent(rawUrl.split('/').pop());
                thumbnail = '/notion-images/' + encodeURIComponent(fileName);
              }
            }

            const processedMarkdown = await remark()
              .use(remarkAdjustAssetPaths)
              .use(remarkCodeToAccordion)
              .use(remarkImageFormatting)
              .use(html, { sanitize: false })
              .process(fileContent);
            
            const htmlContent = String(processedMarkdown);
            const htmlFileName = mdFile.replace('.md', '.html');
            const projectProcessedDir = path.join(processedContentBaseDir, projectConfig.id);
            
            if (!fs.existsSync(projectProcessedDir)) {
              fs.mkdirSync(projectProcessedDir, { recursive: true });
            }
            
            const processedHtmlFilePath = path.join(projectProcessedDir, htmlFileName);
            fs.writeFileSync(processedHtmlFilePath, htmlContent);

            let relativePath = path.relative(process.cwd(), processedHtmlFilePath);
            if (relativePath.startsWith('public/')) relativePath = relativePath.substring('public/'.length);

            processedFilesArray.push({
              label: generateTabLabel(mdFile),
              path: relativePath,
              thumbnail: thumbnail
            });

          } else {
            console.warn(`⚠️ Warning: Markdown file "${mdFile}" not found for project "${projects[projectIndex].title}".`);
            allFilesFound = false;
          }
        }

        if (processedFilesArray.length > 0) {
          projects[projectIndex].processedContent = processedFilesArray;
          delete projects[projectIndex].processedContentPath; 
          delete projects[projectIndex].content; 
          
          console.log(`✅ Processed ${processedFilesArray.length} files for "${projects[projectIndex].title}".`);
        }
      }
    }

    fs.writeFileSync(projectsJsonPath, JSON.stringify(projects, null, 3));
    console.log("\n🎉 projects.json updated successfully!");

  } catch (error) {
    console.error("❌ Error processing Markdown for projects.json:", error);
  }
}

processMarkdownForProjects();