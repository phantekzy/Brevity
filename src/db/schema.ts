import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";
import { type InferSelectModel, type InferInsertModel } from "drizzle-orm";

export const links = pgTable("links", {
  id: serial("id").primaryKey(),
  url: text("url").notNull(),
  slug: text("slug").unique().notNull(),
  clicks: integer("clicks").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export type Link = InferSelectModel<typeof links>;
export type NewLink = InferInsertModel<typeof links>;
