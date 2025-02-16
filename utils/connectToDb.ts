import sequelize from "../config/mySQL";
let isConnected = false;

export const connectDB = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected!");
    return;
  }

  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");
    await sequelize.sync();

    isConnected = true;
    console.log("MySQL is Connected!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
