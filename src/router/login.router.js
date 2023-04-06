const loginRouter = require('express').Router();
const loginController = require('../controller/login.controller');
const validateLogin = require('../middlewares/validadeLogin');

loginRouter.post('/', validateLogin, loginController.login);

module.exports = loginRouter;