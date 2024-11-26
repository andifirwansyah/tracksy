import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.routes";
import projectRoutes from "./routes/project.routes";
import clientRoutes from "./routes/client.routes";

const app = express();

app.use(bodyParser.json());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/clients", clientRoutes);

export default app;