const { loginService } = require('../services/login.service');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const validation = await loginService(email, password);

  if (validation.message) return res.status(400).json(validation);

  return res.status(200).json(validation);
};

module.exports = { loginController };
