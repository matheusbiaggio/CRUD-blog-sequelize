const validateDisplayName = (req, res, next) => {
  const user = req.body;

  if (!user) {
    return res.status(400).json({ message: 'A user with all fields needs to be passed' });
  }

  if (!user.displayName) {
    return res.status(400)
    .json({ message: '"displayName" needs to be filled' });
  }

  if (user.displayName.length < 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  next();
};

const isValidEmail = (email) => {
  const correctEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return correctEmail.test(email);
};

const validateEmail = (req, res, next) => {
  const user = req.body;

  if (!user.email) {
    return res.status(400)
    .json({ message: '"email" needs to be filled' });
  }

  const verifyEmail = isValidEmail(user.email);

  if (!verifyEmail) {
    return res.status(400)
    .json({ message: '"email" must be a valid email' });
  }

  next();
};

const validatePassword = (req, res, next) => {
  const user = req.body;

  if (!user.password) {
    return res.status(400)
    .json({ message: '"password" needs to be filled' });
  }

  if (user.password.length < 6) {
    return res.status(400)
    .json({ message: '"password" length must be at least 6 characters long' });
  }

  next();
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
};