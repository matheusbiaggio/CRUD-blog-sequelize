const postRouter = require('express').Router();
const postController = require('../controller/post.controller');
const validateToken = require('../middlewares/validateToken');
const validateNewPost = require('../middlewares/validateNewPost');

postRouter.post('/', validateToken, validateNewPost, postController.addPost);

module.exports = postRouter;