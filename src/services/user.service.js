const { User } = require('../models');

const addUser = async (user) => {
  const error = new Error('User already registered');
  error.status = 409;

  const { email } = user;

  const verifyEmail = await User.findOne({
    where: { email },
  });

  if (verifyEmail) throw error;

  const newUser = await User.create(user);

  return newUser;
};

const getAll = async () => {
  const getAllUsers = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return getAllUsers;
};

module.exports = {
  addUser,
  getAll,
};