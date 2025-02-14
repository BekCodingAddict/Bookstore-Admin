import { DataTypes } from "sequelize";
import sequelize from "../config/mySQL";

const Book = sequelize.define("books", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING, // Store image URL as a string
    allowNull: true,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT, // Float is better for prices
    allowNull: false,
  },
  category: {
    type: DataTypes.JSON, // Store array as JSON
    allowNull: false,
  },
  inStock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0, // Default stock to 0 if not provided
  },
  description: {
    type: DataTypes.TEXT, // Text type for long descriptions
    allowNull: true,
  },
});

export default Book;
