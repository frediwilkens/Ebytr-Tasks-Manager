const route = require('express').Router();
const {
  getTasksController,
  createTaskController,
  finishTaskController,
  deleteTaskController,
} = require('../controllers/tasks.controller');

const { authMiddleware } = require('../middlewares/auth.middleware');

route.get('/', getTasksController);
route.post('/', authMiddleware, createTaskController);
route.patch('/:id/finish', finishTaskController);
route.delete('/:id', deleteTaskController);

module.exports = route;
