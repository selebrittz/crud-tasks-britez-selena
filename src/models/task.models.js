import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; 
import User from './user.models.js';


export const Task = sequelize.define ('Task', {
  
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
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

export default Task;

//Relacion de uno a muchos entre task y user.
Task.belongsTo(User,{
  foreignKey: 'user_id'
});

User.hasMany(Task, {
  foreignKey: 'user_id' 
});