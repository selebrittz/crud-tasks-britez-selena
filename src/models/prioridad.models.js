import { DataTypes } from "sequelize";
import sequelize from "../database.js";

export const Prioridad = sequelize.define("Prioridad", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nivel: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
});
//nivel de prioridad: baja,media o alta.