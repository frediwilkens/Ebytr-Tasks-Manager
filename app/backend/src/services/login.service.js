const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const loginService = async (email, password) => {
  const validate = await User.findOne({ where: { email, password } });

  if (!validate) return { message: 'Email ou senha incorretos' };

  const token = jwt.sign(
    { userId: validate.id, email },
    process.env.JWT_SECRET,
    { expiresIn: '7d', algorithm: 'HS256' },
  );

  return { token };
};

module.exports = { loginService };
