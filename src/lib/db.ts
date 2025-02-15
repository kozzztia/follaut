import { neon } from "@neondatabase/serverless";

if (!process.env.NEXT_DATABASE_URL) {
  throw new Error("NEXT_DATABASE_URL is not set in .env");
}

const sql = neon(process.env.NEXT_DATABASE_URL);

export default sql;
