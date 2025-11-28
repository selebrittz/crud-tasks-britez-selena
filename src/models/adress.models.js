// models/address.models.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

export const AddressModel = sequelize.define("addresses", {
  id: { 
    type: DataTypes.INTEGER,
    primaryKey: true, 
    autoIncrement: true
},
  calle: { 
    type: DataTypes.STRING,
    allowNull: false
},
  ciudad: {
    type: DataTypes.STRING, 
    allowNull: false 
},
    codigo_postal: { 
    type: DataTypes.STRING,
    allowNull: false 
}
});
