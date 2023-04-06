const { User } = require('../models');

const addUser = async (newUser) => {
  const error = new Error('User already registered');
  error.status = 409;

  const { email } = newUser;

  const verifyEmail = await User.findOne({
    where: { email },
  });

  if (verifyEmail) throw error;

  const newUser2 = await User.create(newUser);

  console.log(newUser2);

  // await User.create(newUser);

  return newUser2;
};

module.exports = {
  addUser,
};