import { DataTypes } from "sequelize";  
import sequelize from "../config/database.js";
import { TaskModel } from "./task.models.js";

export const TiempoModel = sequelize.define ( "Tiempo", {
    id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true 
    },
    fecha_asignacion: {
         type: DataTypes.DATE,
         allowNull: false
    },
    fecha_vencimiento: {
         type: DataTypes.DATE,
         allowNull: false
    }

 });

//relacion de uno a uno 
TaskModel.hasOne(TiempoModel, { foreignKey: "task_id" });
TiempoModel.belongsTo(TaskModel, { foreignKey: "task_id" });
