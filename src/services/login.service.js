const { User } = require('../models');
const { generateToken } = require('../utils/token');

const authenticate = async (email, password) => {
  const error = new Error('invalid fields');
  error.status = 400;

  const user = await User.findOne({
    where: { email, password },
  });

  if (!user) throw error;

  const token = generateToken(user.dataValues);
  console.log(token);

  return { token };
};

module.exports = {
  authenticate,
};