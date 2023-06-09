const { userService } = require('../services');
const { generateToken } = require('../utils/token');

const addUser = async (req, res) => {
  try {
    const user = req.body;
    await userService.addUser(user);
    const token = generateToken(user);
    req.headers.authorization = token;
    return res.status(201).json({ token });
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
};

const getAll = async (_req, res) => {
  const allUser = await userService.getAll();
  return res.status(200).json(allUser);
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const getUser = await userService.getById(id);
    return res.status(200).json(getUser);
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
};

module.exports = {
  addUser,
  getAll,
  getById,
};