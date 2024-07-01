import { sql } from "@vercel/postgres";
import postgres from "postgres";
import {
  drizzle as VercelDrizzle,
  type VercelPgDatabase,
} from "drizzle-orm/vercel-postgres";
import {
  drizzle as LocalDrizzle,
  type PostgresJsDatabase,
} from "drizzle-orm/postgres-js";

// TODO: replace with env vars
const postgresUrl = `postgresql://miciah@localhost/wfa_dev`;
const env = `development`;

if (!postgresUrl || !env) {
  throw new Error(`Missing env vars: got ${postgresUrl} and ${env}`);
}

let db: VercelPgDatabase | PostgresJsDatabase;
if (process.env.ENV === `production`) {
  db = VercelDrizzle(sql);
} else {
  const migrationClient = postgres(postgresUrl);
  db = LocalDrizzle(migrationClient);
}

export { db };
