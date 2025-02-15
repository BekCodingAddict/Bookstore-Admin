import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME || "bookstore-admin",
  process.env.DB_USER || "root",
  process.env.MYSQL_PASSWORD || "Mypassword",
  {
    dialect: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    logging: process.env.NODE_ENV === "development" ? console.log : false,
    pool: {
      max: 5, // Maximum number of connections in pool
      min: 0, // Minimum number of connections in pool
      acquire: 30000, // Maximum time (ms) to wait for a connection
      idle: 10000, // Maximum time (ms) before an unused connection is released
    },
  }
);

export default sequelize;
