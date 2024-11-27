import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.routes";
import projectRoutes from "./routes/project.routes";
import clientRoutes from "./routes/client.routes";
import employeeRoutes from './routes/employee.routes';

const app = express();

app.use(bodyParser.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/clients", clientRoutes);
app.use("/api/v1/employee", employeeRoutes);

export default app;