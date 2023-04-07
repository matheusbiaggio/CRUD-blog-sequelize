const { categoryService } = require('../services');
// const { generateToken } = require('../utils/token');

const addCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = await categoryService.addCategory(name);
  return res.status(201).json(newCategory);
};

module.exports = {
  addCategory,
};