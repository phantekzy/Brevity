import { Request, Response } from "express";
import { nanoid } from "nanoid";
import { db } from "../db";
import { links } from "../db/schema";

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
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
