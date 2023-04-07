const userRouter = require('express').Router();
const userController = require('../controller/user.controller');
const validateNewUser = require('../middlewares/validateNewUser');
const validateToken = require('../middlewares/validateToken');

userRouter.post(
'/',
validateNewUser.validateDisplayName,
validateNewUser.validateEmail,
validateNewUser.validatePassword,
userController.addUser,
);

userRouter.get('/', validateToken, userController.getAll);

module.exports = userRouter;