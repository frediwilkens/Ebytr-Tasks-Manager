const {
  getTasksService,
  createTaskService,
} = require('../services/tasks.service');

const getTasksController = async (req, res) => {
  const tasks = await getTasksService();

  if (tasks.message) return res.status(400).json(tasks);

  return res.status(200).json(tasks);
};

const createTaskController = async (req, res) => {
  const { description } = req.body;
  const { userId } = req.user;

  const createdTask = await createTaskService(description, userId);

  if (createdTask.message) return res.status(400).json(createdTask);

  return res.status(201).json(createdTask);
};

module.exports = {
  getTasksController,
  createTaskController,
};
