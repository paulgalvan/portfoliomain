import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

async function testDatabase() {
  try {
    const response = await notion.databases.retrieve({
      database_id: process.env.NOTION_DATABASE_ID,
    });
    console.log("Found database:");
    console.log(response.title?.[0]?.plain_text || "Untitled");
  } catch (err) {
    console.error("Database lookup failed:", err.body || err.message || err);
  }
}

testDatabase();