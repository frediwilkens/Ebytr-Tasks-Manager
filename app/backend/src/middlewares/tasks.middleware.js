const taskValidation = (req, res, next) => {
  const bodyKeys = Object.keys(req.body);
  const haveDescription = bodyKeys.find((key) => key === 'description');
  const { description } = req.body;

  if (!haveDescription) {
    return res.status(400).json({ message: 'Descrição não encontrada' });
  }

  if (description.length === 0) {
    return res.status(400).json({ message: 'A descrição não pode estar vazia' });
  }

  if (typeof description !== 'string') {
    return res.status(400).json({ message: 'A descrição precisa ser uma string' });
  }

  next();
};

module.exports = { taskValidation };
