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

const getById = async (id) => {
  const error = new Error('User does not exist');
  error.status = 404;

  const getUser = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });

  if (!getUser) throw error;

  return getUser;
};

module.exports = {
  addUser,
  getAll,
  getById,
};