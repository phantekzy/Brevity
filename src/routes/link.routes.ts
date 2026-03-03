import { Router } from "express";
import { redirectUrl, shortenUrl } from "../controllers/link.controller";

const router = Router();
router.post("/shrink", shortenUrl);
router.get("/:slug", redirectUrl);

export default router;
