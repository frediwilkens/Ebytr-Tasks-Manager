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

module.exports = route;
