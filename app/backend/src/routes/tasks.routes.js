const route = require('express').Router();
const {
  getTasksController,
} = require('../controllers/tasks.controller');

route.get('/', getTasksController);

module.exports = route;
