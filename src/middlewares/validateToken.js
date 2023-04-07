const { validateToken } = require('../utils/token');

const validateToke = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const verify = validateToken(token);
    req.user = verify;
    
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToke;