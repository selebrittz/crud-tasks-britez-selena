import { Sequelize, DataTypes } from 'sequelize';


export const User = Sequelize.define('User', {
  
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoincrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING (100),
    allowNull: false,
  }
});

