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

module.exports = {
  addUser,
};