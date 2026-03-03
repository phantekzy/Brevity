import { Request, Response } from "express";

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
};
