import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME || "bookstore-admin",
  process.env.DB_USER || "root",
  process.env.MYSQL_PASSWORD || "Experte001$",
  {
    dialect: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    logging: process.env.NODE_ENV === "development" ? console.log : false,
  }
);

export default sequelize;
