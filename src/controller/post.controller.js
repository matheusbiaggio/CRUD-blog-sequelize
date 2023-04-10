const postService = require('../services/post.service');

const addPost = async (req, res) => {
  try {
    const infPost = req.body;
    const userId = req.user.id;
    const newPost = await postService.addPost(infPost, userId);
    return res.status(201).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(err.status).json({ message: err.message });
  }
};

module.exports = {
  addPost,
};