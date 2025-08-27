import { DataTypes} from 'sequelize';
import sequelize from '../config/database.js';

export const UsersModel = sequelize.define('Users', {
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
}, {
  timestamps: false
});

//relaciones uno a uno
