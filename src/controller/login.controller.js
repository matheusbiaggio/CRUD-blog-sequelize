const { loginService } = require('../services');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginService.authenticate(email, password);
    req.headers.authorization = token;
    return res.status(200).json(token);
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
};

module.exports = {
  login,
};