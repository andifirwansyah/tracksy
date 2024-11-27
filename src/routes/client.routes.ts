import { Router } from "express";
import { createClient, getClient } from "../controllers/client.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.use(authMiddleware);

router.get("/", getClient);
router.post("/", createClient);

export default router;