import { Router } from "express";
import { createClient, getClient } from "../controllers/client.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", authMiddleware, getClient);
router.post("/create", authMiddleware, createClient);

export default router;