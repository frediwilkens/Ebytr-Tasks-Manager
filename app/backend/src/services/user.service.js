const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const login = async (email, password) => {
  const validate = await User.findOne({ where: { email, password } });

  if (!validate) return { message: 'Email ou senha incorretos' };

  const token = jwt.sign(
    { userId: validate.id, email },
    process.env.JWT_SECRET,
    { expiresIn: '7d', algorithm: 'HS256' },
  );

  return { token };
};

const register = async (email, password) => {
  const validate = await User.findOne({ where: { email } });

  if (validate) return { message: 'Email já cadastrado' };

  const newUser = await User.create({ email, password });

  const token = jwt.sign(
    { userId: newUser.id, email },
    process.env.JWT_SECRET,
    { expiresIn: '7d', algorithm: 'HS256' },
  );

  return { token };
};

const update = async (id, email, password) => {
  const validate = await User.findOne({ where: { id } });

  if (!validate) return { message: 'Usuário não encontrado' };

  const updatedUser = await User.update(
    { email, password },
    { where: { id } },
  );

  return updatedUser;
};

module.exports = {
  login,
  register,
  update,
};
