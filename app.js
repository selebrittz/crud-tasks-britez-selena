import express from 'express';
import dotenv from 'dotenv';
import taskRoutes from './src/routes/task.routes.js';
import userRoutes from './src/routes/user.routes.js';   
import { User } from './src/models/user.models.js';
import { Task } from './src/models/task.models.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);


const startServer = async () => {
  await User.sync(); 
  await Task.sync();
  console.log('Tablas user y task creada');
  console.log('Conexión a la base de datos establecida correctamente.');
 

app.listen(PORT, () => {
    console.log(`El server está corriendo en:  http://localhost:${PORT}`);
});
}

startServer();
