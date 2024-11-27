import { Request, Response } from "express";
import Project from "../models/project.model";
import Client from "../models/client.model";

export const getProjects = async (req: Request, res: Response): Promise<any> => {
  try {
    const projects = await Project.findAll({
      include: [
        {
          model: Client
        }
      ]
    });
    return res.json({
      success: true,
      message: "success",
      code: 200,
      data: projects
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createProject = async (req: Request, res: Response): Promise<any> => {
  const {
    name,
    description,
    client_id,
    status,
    budget,
    start_date,
    end_date,
  } = req.body;

  try {
    if (!name || !client_id || !status || !budget || !start_date) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const client = await Client.findByPk(client_id);
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    const newProject = await Project.create({
      name,
      description,
      client_id,
      status,
      budget,
      start_date,
      end_date,
    });

    return res.status(201).json({
      success: true,
      message: "success",
      code: 201,
      data: newProject
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};