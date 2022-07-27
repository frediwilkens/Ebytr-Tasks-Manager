const route = require('express').Router();
const taskControllers = require('../controllers/tasks.controller');

const { authMiddleware } = require('../middlewares/auth.middleware');

route.get('/', taskControllers.getAll);
route.post('/', authMiddleware, taskControllers.create);
route.patch('/:id/finish', taskControllers.finish);
route.delete('/:id', taskControllers.exclude);

module.exports = route;
