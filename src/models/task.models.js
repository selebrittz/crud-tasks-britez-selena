import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import { UsersModel } from './user.models.js'; 
import { ToolModel } from './tools.models.js';
import { TaskToolsModel } from './taskTools.models.js';

export const TaskModel = sequelize.define ('Tasks', {
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
},{
  timestamps: false
});




//relaciones : UN USUARIO TIENE MUCHAS TAREAS
UsersModel.hasMany(TaskModel, {
  foreignKey: "user_id"
})

TaskModel.belongsTo(UsersModel, {
  foreignKey: "user_id"
})

//relaciones de muchos a muchos
//cada tarea puede tener muchas herramientas y cada herramienta puede tener muchas tareas, mediante la tabla tasktools
//n:m
TaskModel.belongsToMany(ToolModel, { through: TaskToolsModel, foreignKey: "task_id" });
ToolModel.belongsToMany(TaskModel, { through: TaskToolsModel, foreignKey: "tool_id" });





