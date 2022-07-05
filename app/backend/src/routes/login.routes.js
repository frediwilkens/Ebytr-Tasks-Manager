const route = require('express').Router();
const { loginController } = require('../controllers/login.controller');
const {
  emailMiddleware,
  passwordMiddleware,
} = require('../middlewares/login.middleware');

route.post('/', emailMiddleware, passwordMiddleware, loginController);

module.exports = route;
