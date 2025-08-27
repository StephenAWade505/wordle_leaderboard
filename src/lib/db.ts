// lib/db.ts
import pkg from "pg";
const { Pool } = pkg;
import type { QueryResultRow } from "pg";

// Define a Player type matching your database table
export type Player = {
  id: string;
  name: string;
  score: number;
  completed: boolean;
};

// Create a single pool instance
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Generic query helper with typed rows
export const query = async <T extends QueryResultRow = any>(
  text: string,
  params?: any[]
): Promise<T[]> => {
  const start = Date.now();
  const res = await pool.query<T>(text, params);
  const duration = Date.now() - start;
  console.log("executed query", { text, duration, rows: res.rowCount });
  return res.rows; // rows is now typed as T[]
};

export default pool;
