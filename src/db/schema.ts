import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
export const links = pgTable("links", {
  id: serial("id").primaryKey(),
  url: text("url").notNull(),
  slug: text("slug").unique().notNull(),
  clicks: integer("clicks").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});
