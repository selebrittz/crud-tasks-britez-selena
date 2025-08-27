import { DataTypes } from 'sequelize';
import  sequelize  from "../config/database.js";

export const TaskToolsModel = sequelize.define("task_tools", {
  task_id: {
     type: DataTypes.INTEGER, 
     primaryKey: true 
  },
  tool_id: {
    type: DataTypes.INTEGER,
    primaryKey: true 
  },
  cantidad: { 
    type: DataTypes.INTEGER, 
    defaultValue: 1 
  },
  fecha_asignacion: {
     type: DataTypes.DATE,
    defaultValue: DataTypes.NOW }
});
