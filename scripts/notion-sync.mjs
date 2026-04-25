import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { remark } from 'remark';
import html from 'remark-html';

dotenv.config({ path: "../.env" });

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

const sources = [
  {
    type: "dataSource",
    name: "My Progress",
    id: process.env.NOTION_DATA_SOURCE_ID,
  },
  {
    type: "page",
    name: "The Hand",
    id: "4bc8bda364364681be665b87bdda50e6",
  },
  {
    type: "page",
    name: "Robotic Arm",
    id: "310fab6ae4964f76a97f469aeb2018bf",
  },
  {
    type: "dataSource",
    name: "Elles Database",
    id: process.env.ELLES_DATA_SOURCE_ID,
  },
  {
    type: "dataSource",
    name: "Robotic Arm Database",
    id: process.env.ROBOTIC_ARM_DATA_SOURCE_ID,
  },
];

const projectsJsonPath = path.resolve(process.cwd(), "../src/data/projects.json");

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function ensureContentDir() {
  const dir = path.resolve(process.cwd(), "../content");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  return dir;
}

function getPageTitle(page, fallbackTitle = "Untitled Project") {
  if (!page.properties) return fallbackTitle;

  const titleProp = Object.values(page.properties).find(
    (prop) => prop && prop.type === "title"
  );

  return titleProp?.title?.[0]?.plain_text || fallbackTitle;
}

async function writePage(pageId, fallbackTitle = "Untitled Project") {
  const page = await notion.pages.retrieve({ page_id: pageId });
  const title = getPageTitle(page, fallbackTitle);

  console.log(`⏳ Converting: ${title}...`);

  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);
  const htmlContent = String(await remark().use(html).process(mdString.parent || ""));

  const dir = ensureContentDir();
  const slug = slugify(title);

  fs.writeFileSync(path.join(dir, `${slug}.md`), mdString.parent || "");

  // Update projects.json
  let projects = [];
  if (fs.existsSync(projectsJsonPath)) {
    projects = JSON.parse(fs.readFileSync(projectsJsonPath, "utf-8"));
  }

  const projectIndex = projects.findIndex(p => slugify(p.title) === slug);

  if (projectIndex !== -1) {
    projects[projectIndex].content = [{ type: "text", value: htmlContent }];
    delete projects[projectIndex].notion_url; // Remove notion_url
    fs.writeFileSync(projectsJsonPath, JSON.stringify(projects, null, 3));
    console.log(`✅ Successfully synced and updated projects.json for: ${title}`);
  } else {
    console.log(`⚠️ Project with title "${title}" not found in projects.json. Markdown saved to file, but projects.json not updated.`);
  }
}

async function sync() {
  try {
    console.log("🚀 Starting Notion sync...");

    for (const source of sources) {
      if (source.type === "page") {
        await writePage(source.id, source.name);
      }

      if (source.type === "dataSource") {
        console.log(`📚 Querying data source: ${source.name}...`);

        const response = await notion.dataSources.query({
          data_source_id: source.id,
        });

        for (const page of response.results) {
          if (page.object !== "page") continue;
          await writePage(page.id, source.name);
        }
      }
    }

    console.log("\n🎉 Everything synced successfully!");
  } catch (error) {
    console.error("❌ Sync Error:", error.body || error.message || error);
  }
}

sync();
