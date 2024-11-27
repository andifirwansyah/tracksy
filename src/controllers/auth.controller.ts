import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.utils";

export const register = async (req: Request, res: Response): Promise<any> => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ name, email, password: hashedPassword });
  return res.status(201).json({
    success: true,
    message: "success",
    code: 200,
    data: user
  });
};

export const login = async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user) return res.status(404).json({ message: "User not found" });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return res.status(401).json({ message: "Invalid password" });

  const token = generateToken({ id: user.id, email: user.email });
  return res.json({
    success: true,
    message: "success",
    code: 200,
    data: {
        token: token,
    }
  });
};