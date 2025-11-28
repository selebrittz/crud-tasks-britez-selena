import {TaskModel} from '../models/task.models.js';

export const createTask = async (req, res) => {
  try {
    const { title, description, isComplete } = req.body;

    if (
      !title ||
      !description ||
      title.length > 100 ||
      description.length > 100 ||
      (isComplete !== undefined && typeof isComplete !== "boolean")
    ) {
      return res.status(400).json({ message: "Datos inválidos" });
    }

    const existingTask = await TaskModel.findOne({ where: { title } });
    if (existingTask) {
      return res.status(400).json({ message: "El título ya está registrado" });
    }

    const task = await TaskModel.create({ title, description, isComplete });
    res.status(201).json({ message: "Tarea creada con éxito", task });
  } catch (error) {
    res.status(500).json({ message: "Error al crear tarea", error: error.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener tareas" });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TaskModel.findByPk(id);
    if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener tarea" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, isComplete } = req.body;

    const task = await TaskModel.findByPk(id);
    if (!task) return res.status(404).json({ message: "Tarea no encontrada" });

    if (
      !title ||
      !description ||
      title.length > 100 ||
      description.length > 100 ||
      (isComplete !== undefined && typeof isComplete !== "boolean")
    ) {
      return res.status(400).json({ message: "Datos inválidos" });
    }

    const titleExists = await TaskModel.findOne({ where: { title, id: { $ne: id } } });
    if (titleExists) {
      return res.status(400).json({ message: "El título ya está registrado" });
    }

    await TaskModel.update({ title, description, isComplete });
    res.status(200).json({ message: "Tarea actualizada con éxito", task });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar tarea" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TaskModel.findByPk(id);
    if (!task) return res.status(404).json({ message: "Tarea no encontrada" });

    await task.destroy();
    res.status(200).json({ message: "Tarea eliminada con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar tarea" });
  }
};

