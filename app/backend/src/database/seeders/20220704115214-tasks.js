module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert(
    'Tasks',
    [
      {
        description: 'Crie sua própria tarefa',
        status: 'Pendente',
        userId: 1,
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Tasks', null, {}),
};
