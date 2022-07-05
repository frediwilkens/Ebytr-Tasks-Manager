const {
  getTasksService,
  createTaskService,
  finishTaskService,
  deleteTaskService,
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

const finishTaskController = async (req, res) => {
  const { id } = req.params;

  const finishedTask = await finishTaskService(id);

  return res.status(200).json(finishedTask);
};

const deleteTaskController = async (req, res) => {
  const { id } = req.params;

  await deleteTaskService(id);

  return res.status(204).json('');
};

module.exports = {
  getTasksController,
  createTaskController,
  finishTaskController,
  deleteTaskController,
};
