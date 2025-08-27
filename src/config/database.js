import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME,
     process.env.DB_USER,
     process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
});

export const startDB = async () => {
    try {
        await sequelize.sync({force:true})
        await sequelize.authenticate();
        console.log('Conexion exitosa.');
    } catch (error) {
        console.error('no se pudo establecer conexion', error);
    }
};

export default sequelize;