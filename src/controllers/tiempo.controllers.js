import { TiempoModel } from "../models/tiempo.models.js";
import { TaskModel } from "../models/task.models.js";

/// Crear un tiempo u horario para una tarea
export const createTiempo = async (req, res) => {
  try {
    const { task_id, fecha_asignacion, fecha_vencimiento } = req.body;

    // Verificar que la tarea exista
    const task = await TaskModel.findByPk(task_id);
    if (!task) return res.status(404).json({ message: "Tarea no encontrada" });

    const tiempo = await TiempoModel.create({ task_id, fecha_asignacion, fecha_vencimiento });
    res.status(201).json(tiempo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todos los tiempos con la tarea asociada
export const getTiempos = async (req, res) => {
  try {
    const tiempos = await TiempoModel.findAll({
      include: {
        model: TaskModel,  
        attributes: ["id", "fecha_asignacion", "fecha_vencimiento"],
      },
    });
    res.json(tiempos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
