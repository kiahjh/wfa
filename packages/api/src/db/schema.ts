import { pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";

const userTypeEnum = pgEnum(`text`, [`parent`, `student`]);

export const usersTable = pgTable(`users`, {
  id: uuid(`id`).primaryKey().defaultRandom(),
  name: text(`name`),
  password: text(`password`).notNull(),
  email: text(`email`).notNull().unique(),
  type: userTypeEnum(`type`),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
