import { Request, Response } from "express";
import { nanoid } from "nanoid";
import { db } from "../db";
import { links } from "../db/schema";
import { eq } from "drizzle-orm";

interface ShortenRequestBody {
  url: string;
}

export const shortenUrl = async (
  req: Request<{}, {}, ShortenRequestBody>,
  res: Response,
) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required!" });
  }

  try {
    const slug = nanoid(6);
    const [newLink] = await db.insert(links).values({ url, slug }).returning();
    const PORT = process.env.PORT || 3000;

    res.status(200).json({
      shortUrl: `http://localhost:${PORT}/${slug}`,
      original: newLink.url,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const redirectUrl = async (req: Request, res: Response) => {
  const { slug } = req.params;
  try {
    const [link] = await db.select().from(links).where(eq(links.slug, slug));
    if (!link) {
      return res.status(404).json({ error: "Link not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};
