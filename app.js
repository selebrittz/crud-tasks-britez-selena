import express from 'express';
import dotenv from 'dotenv';
import taskRoutes from './src/routes/task.routes.js';
import userRoutes from './src/routes/user.routes.js';   
import { UsersModel } from './src/models/user.models.js';
import { TaskModel } from './src/models/task.models.js';
import { ToolModel } from './src/models/tools.models.js';
import { TiempoModel } from './src/models/tiempo.models.js';
import { TaskToolsModel } from './src/models/taskTools.models.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);


const startServer = async () => {
  await TaskToolsModel.sync();
  await ToolModel.sync();
  await TiempoModel.sync();
  await UsersModel.sync(); 
  await TaskModel.sync();
  console.log('Tablas creadas');
  console.log('Conexión a la base de datos establecida correctamente.');
 

app.listen(PORT, () => {
    console.log(`El server está corriendo en:  http://localhost:${PORT}`);
});
}

startServer();
