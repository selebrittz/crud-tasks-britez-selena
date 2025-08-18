import { DataTypes} from 'sequelize';
import sequelize from '../config/database.js';
import Task from './task.models.js';

export const User = sequelize.define('User', {
  
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
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});
export default User;

//relacion de uno a uno

Task.belongsTo (User)
