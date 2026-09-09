import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const url = process.env.DATABASE_URL;

if (!url) {
  throw new Error("DATABASE_URL is not set");
}

const sql = neon(url);

// Server-only: import this from API routes, never from screens or components.
export const db = drizzle({
  client: sql,
  schema,
  casing: "snake_case",
});

export * from "./schema";
