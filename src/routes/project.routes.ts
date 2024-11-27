import { Router } from "express";
import { getProjects, createProject } from "../controllers/project.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.use(authMiddleware);

router.get("/", getProjects);
router.post("/", createProject);

export default router;
