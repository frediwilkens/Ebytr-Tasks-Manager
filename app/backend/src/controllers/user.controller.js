const userService = require('../services/user.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  const validation = await userService.login(email, password);

  if (validation.message) return res.status(400).json(validation);

  return res.status(200).json(validation);
};

const register = async (req, res) => {
  const { email, password } = req.body;

  const newUserToken = await userService.register(email, password);

  if (newUserToken.message) return res.status(400).json(newUserToken);

  return res.status(201).json(newUserToken);
};

const update = async (req, res) => {
  const { email, password } = req.body;
  const { id } = req.params;

  const updatedUser = await userService.update(id, email, password);

  if (updatedUser.message) return res.status(400).json(updatedUser);

  return res.status(200).json(updatedUser);
};

module.exports = {
  login,
  register,
  update,
};
