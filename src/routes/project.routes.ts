import { Router } from "express";
import { getProjects, createProject } from "../controllers/project.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", authMiddleware, getProjects);
router.post("/create", authMiddleware, createProject);

export default router;
