import { Sequelize, DataTypes, BOOLEAN } from 'sequelize';


export const User = Sequelize.define('User', {
  
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoincrement: true
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  descrption: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  isComplete: {
    type: DataTypes.STRING, BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});

