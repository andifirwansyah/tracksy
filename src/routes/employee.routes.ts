import { Router } from "express";
import { createEmployee, getEmployee, detailEmployee } from "../controllers/employee.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.use(authMiddleware);

router.get('/', getEmployee);
router.get('/:id', detailEmployee);
router.post('/', createEmployee);

export default router