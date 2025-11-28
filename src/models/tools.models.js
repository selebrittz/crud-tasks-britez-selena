import { DataTypes } from "sequelize";
import  sequelize  from "../config/database.js";

export const ToolModel = sequelize.define("Tool", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
}, {timestamps: false
});

