import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME || "railway",
  process.env.DB_USER || "root",
  process.env.MYSQL_PASSWORD || "ADLBbkuMJgGHmhZyFGaKzKqrJRpFmmHy",
  {
    dialect: "mysql",
    host: process.env.DB_HOST || "trolley.proxy.rlwy.net",
    port: Number(process.env.DB_PORT) || 23701,
  }
);

export default sequelize;
