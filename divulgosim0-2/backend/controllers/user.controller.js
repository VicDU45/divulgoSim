const User = require('../models/User');

exports.register = async (req, res) => {
  const { nome, email, senha, tipoUser } = req.body;
  const novoUsuario = new User({ nome, email, senha, tipoUser });
  await novoUsuario.save();
  res.status(201).json(novoUsuario);
};
