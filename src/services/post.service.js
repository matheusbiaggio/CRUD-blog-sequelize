const { BlogPost } = require('../models');
const { Category } = require('../models');
const { PostCategory } = require('../models');

const addPost = async ({ title, content, categoryIds }, userId) => {
  const error = new Error('one or more "categoryIds" not found');
  error.status = 400;

  const promisesId = categoryIds.map((id) => Category.findOne({
    where: { id },
  }));
  const findCategoryById = await Promise.all(promisesId);

  if (findCategoryById.some((category) => (!category))) {
    throw error;
  }

  const newPost = await BlogPost.create({
    title, content, userId, published: new Date(), updated: new Date(),
  });

  const promisesCategories = categoryIds.map((id) => PostCategory.create({
    postId: newPost.id,
    categoryId: id,
  }));

  await Promise.all(promisesCategories);

  return newPost;
};

module.exports = {
  addPost,
};