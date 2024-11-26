import { Sequelize } from "sequelize-typescript";
import { config } from "dotenv";
import User from "../models/user.model";
import Project from "../models/project.model";
import Client from "../models/client.model";

config();

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  models: [User, Project, Client],
});

export default sequelize;
