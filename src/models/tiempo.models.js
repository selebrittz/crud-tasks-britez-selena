import { DataTypes } from "sequelize";  
import sequelize from "../config/database";

export const Tiempo = sequelize.define ( "Tiempo", {
    id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true 
    },
    fechaAsignacion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fechaVencimiento: {
        type: DataTypes.DATE,
        allowNull: false
    }

 });

