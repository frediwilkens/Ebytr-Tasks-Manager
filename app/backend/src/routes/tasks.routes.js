const route = require('express').Router();
const {
  getTasksController,
  createTaskController,
} = require('../controllers/tasks.controller');

const { authMiddleware } = require('../middlewares/auth.middleware');

route.get('/', getTasksController);
route.post('/', authMiddleware, createTaskController);

module.exports = route;
