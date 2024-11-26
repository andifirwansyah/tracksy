import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.utils";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).json({ message: "No token provided" });
    return;
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    res.status(401).json({ message: "Invalid token" });
    return
  }

  req.user = decoded;

  next();
};
