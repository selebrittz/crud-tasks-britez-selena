import { TaskToolsModel } from "../models/taskTools.models";

export const addToolToTask = async (req, res) => {
  try {
    const { task_id, tool_id } = req.body;
    const relation = await TaskToolsModel.create({ task_id, tool_id });
    res.status(201).json(relation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getToolsByTask = async (req, res) => {
  try {
    const { task_id } = req.params;
    const tools = await TaskToolsModel.findAll({
      where: { task_id },
      include: [{ model: ToolModel }]
    });
    res.json(tools);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
