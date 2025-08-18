import { DataTypes } from "sequelize";
import sequelize from "../database.js";

export const Estado = sequelize.define("Estado", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
});

//con nombre me refiero a estado pero no queria que sea confuso
//porque nos encontramos en estados. "nombre:pendiente,en progreso o completada"
