import { Router } from "express";
import { shortenUrl } from "../controllers/link.controller";

const router = Router();
router.post("/shrink", shortenUrl);
