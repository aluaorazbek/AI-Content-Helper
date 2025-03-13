import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.ts",
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_S6todTQXRm1a@ep-summer-wildflower-a8etecv2-pooler.eastus2.azure.neon.tech/AI-content-generator?sslmode=require'
  }
});
