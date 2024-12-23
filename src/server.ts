import app from "./app";
import sequelize from "./config/database";

const PORT = process.env.PORT || 9001;

sequelize.sync().then(() => {
  console.log("Database connected!");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});