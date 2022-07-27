const route = require('express').Router();
const userController = require('../controllers/user.controller');
const {
  emailMiddleware,
  passwordMiddleware,
} = require('../middlewares/user.middleware');

route
  .post('/register', emailMiddleware, passwordMiddleware, userController.register);
route
  .post('/login', emailMiddleware, passwordMiddleware, userController.login);
route
  .put('/:id', emailMiddleware, passwordMiddleware, userController.update);
route
  .delete('/:id', userController.exclude);

module.exports = route;
