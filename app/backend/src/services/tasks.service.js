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

const finishTaskService = async (id) => {
  await Task.update(
    { status: 'Concluído' },
    { where: { id } },
  );

  return { message: 'Tarefa concluída' };
};

const deleteTaskService = async (id) => {
  await Task.destroy({ where: { id } });
};

module.exports = {
  getTasksService,
  createTaskService,
  finishTaskService,
  deleteTaskService,
};
