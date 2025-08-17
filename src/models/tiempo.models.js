import { DataTypes } from "sequelize";  
import sequelize from "../config/database";

export const Tiempo = sequelize.define ( "Tiempo", {
    fechaAsignacion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fechaVencimiento: {
        type: DataTypes.DATE,
        allowNull: false
    }

 });

