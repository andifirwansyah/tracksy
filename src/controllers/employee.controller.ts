import { Request, Response } from "express";
import Employee from "../models/employee.model";
import Team from '../models/team.model';
import Project from "../models/project.model";
import employeeSchema from "../validation/employee.schema";

export const createEmployee = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { error } = employeeSchema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      success: false,
      message: "failed",
      code: 400,
      data: error.details.map((detail) => detail.message),
    });
  }

  const { name, email, position, hourly_rate, availability } = req.body;

  try {
    const newEmployee = await Employee.create({
      name,
      email,
      position,
      hourly_rate,
      availability,
    });
    return res.status(201).json({
      success: true,
      message: "success",
      code: 201,
      data: newEmployee,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getEmployee = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const offset = (page - 1) * limit;

    const { count, rows: employees } = await Employee.findAndCountAll({
      limit,
      offset,
    });

    const totalPages = Math.ceil(count / limit);

    return res.json({
      success: true,
      message: "success",
      code: 200,
      data: employees,
      meta: {
        totalItems: count,
        totalPages,
        currentPage: page,
        itemsPerPage: limit,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const detailEmployee = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params;

    const employee = await Employee.findOne({
      where: { employee_id: id },
      include: [
        {
          model: Team,
          through: { attributes: [] }
        }
      ]
    });

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "failed",
        code: 404,
        data: null
      });
    }

    return res.json({
      success: true,
      message: "success",
      code: 200,
      data: employee,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}