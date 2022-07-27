const { Task, User } = require('../database/models');

const getAll = async () => {
  const tasks = await Task.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    }],
  });

  if (!tasks) return { message: 'Algo deu errado' };

  return { tasks };
};

const getOne = async (id) => {
  const task = await Task.findOne({
    where: { id },
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    }],
  });

  if (!task) return { message: 'Tarefa não encontrada' };

  return task;
};

const create = async (description, userId) => {
  const createdTask = await Task.create({ description, status: 'Pendente', userId });

  return createdTask;
};

const finish = async (id) => {
  await Task.update(
    { status: 'Concluído' },
    { where: { id } },
  );

  return { message: 'Tarefa concluída' };
};

const exclude = async (id) => {
  await Task.destroy({ where: { id } });
};

module.exports = {
  getAll,
  getOne,
  create,
  finish,
  exclude,
};
