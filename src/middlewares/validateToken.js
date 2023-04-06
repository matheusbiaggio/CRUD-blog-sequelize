const { validateToken } = require('../utils/token');

const validateToke = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization.token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const verify = validateToken(authorization.token);
  console.log(verify);

  next();
};

module.exports = validateToke;