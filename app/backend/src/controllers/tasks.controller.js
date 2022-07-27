const taskService = require('../services/tasks.service');

const getAll = async (req, res) => {
  const tasks = await taskService.getAll();

  if (tasks.message) return res.status(400).json(tasks);

  return res.status(200).json(tasks);
};

const create = async (req, res) => {
  const { description } = req.body;
  const { userId } = req.user;

  const createdTask = await taskService.create(description, userId);

  if (createdTask.message) return res.status(400).json(createdTask);

  return res.status(201).json(createdTask);
};

const finish = async (req, res) => {
  const { id } = req.params;

  const finishedTask = await taskService.finish(id);

  return res.status(200).json(finishedTask);
};

const exclude = async (req, res) => {
  const { id } = req.params;

  await taskService.exclude(id);

  return res.status(204).json('');
};

module.exports = {
  getAll,
  create,
  finish,
  exclude,
};
