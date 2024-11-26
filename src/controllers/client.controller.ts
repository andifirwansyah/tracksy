import { Request, Response } from "express";
import Client from "../models/client.model";

export const getClient = async (req: Request, res: Response): Promise<any> => {
  try {
    const clients = await Client.findAll();
    return res.json({
      message: 'success',
      data: clients
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export const createClient = async (req: Request, res: Response): Promise<any> => {
  const { name, email, phone, company, address } = req.body;

  try {
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }
    const newClient = await Client.create({ name, email, phone, company, address });

    return res.status(201).json({
      message: "success",
      data: newClient,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
