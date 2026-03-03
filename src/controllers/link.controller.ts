import { Request, Response } from "express";

interface ShortenRequestBody {
  url: string;
}

export const shortenUrl = async (
  req: Request<{}, {}, ShortenRequestBody>,
  res: Response,
) => {};
