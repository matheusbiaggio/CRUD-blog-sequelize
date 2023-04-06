const userRouter = require('express').Router();
const userController = require('../controller/user.controller');
const validateNewUser = require('../middlewares/validateNewUser');

userRouter.post(
'/',
validateNewUser.validateDisplayName,
validateNewUser.validateEmail,
validateNewUser.validatePassword,
userController.addUser,
);

module.exports = userRouter;