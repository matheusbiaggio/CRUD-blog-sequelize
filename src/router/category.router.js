const categoryRouter = require('express').Router();
const categoryController = require('../controller/category.controller');
const validateNewCategory = require('../middlewares/validateNewCategory');
const validateToken = require('../middlewares/validateToken');

categoryRouter.post(
'/',
validateToken,
validateNewCategory.validateName,
categoryController.addCategory,
);

categoryRouter.get('/', validateToken, categoryController.getAll);

module.exports = categoryRouter;