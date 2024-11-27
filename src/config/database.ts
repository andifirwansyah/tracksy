import { Sequelize } from "sequelize-typescript";
import { config } from "dotenv";
import { readdirSync } from "fs";
import { resolve } from "path";

const modelsPath = resolve(__dirname, "../models");
const modelFiles = readdirSync(modelsPath).filter((file) =>
  file.endsWith(".model.ts") || file.endsWith(".model.js")
);

config();

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const models = modelFiles.map((file) => require(resolve(modelsPath, file)).default);

sequelize.addModels(models);

export default sequelize;
