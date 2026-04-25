import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

console.log("Token loaded?", !!process.env.NOTION_TOKEN);
console.log("DB loaded?", !!process.env.NOTION_DATABASE_ID);

const notion = new Client({ auth: process.env.NOTION_TOKEN });

async function getDataSourceId() {
  try {
    const db = await notion.databases.retrieve({
      database_id: process.env.NOTION_DATABASE_ID,
    });

    console.log("Database title:", db.title?.[0]?.plain_text || "Untitled");
    console.log("Data sources:", db.data_sources);
  } catch (err) {
    console.error("Failed:", err.body || err.message || err);
  }
}

getDataSourceId();