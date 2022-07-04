const { Task, User } = require('../database/models');

const getTasksService = async () => {
  const tasks = await Task.findAll({ include: [{ model: User, as: 'user' }] });

  if (!tasks) return { message: 'Algo deu errado' };

  return { tasks };
};

const createTaskService = async (description, userId) => {
  const createdTask = await Task.create({ description, status: 'Pendente', userId });

  return createdTask;
};

module.exports = {
  getTasksService,
  createTaskService,
};
