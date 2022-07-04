const { Task, User } = require('../database/models');

const getTasksService = async () => {
  const tasks = await Task.findAll({ include: [{ model: User, as: 'user' }] });

  if (!tasks) return { message: 'Algo deu errado' };

  return { tasks };
};

module.exports = { getTasksService };
