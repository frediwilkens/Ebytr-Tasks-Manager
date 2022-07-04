const { getTasksService } = require('../services/tasks.service');

const getTasksController = async (req, res) => {
  const tasks = await getTasksService();

  if (tasks.message) return res.status(400).json(tasks);

  return res.status(200).json(tasks);
};

module.exports = { getTasksController };
