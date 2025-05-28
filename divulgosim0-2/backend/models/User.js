const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  senha: { type: String, required: true },
  tipoUser: { type: String, enum: ['organizador', 'divulgador'], required: true },
  dataCriacao: { type: Date, default: Date.now }
});

// Hash da senha antes de salvar
UserSchema.pre('save', async function(next) {
  if (!this.isModified('senha')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.senha = await bcrypt.hash(this.senha, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Método para comparar senhas
UserSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.senha);
};

module.exports = mongoose.model('User', UserSchema);

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nome: {String, required: true},
  email: { type: String, unique: true, required: true },
  senha: {String, required: true},
  tipoUser: {type: String, enum: ['organizador', 'divulgador'], required: true},
  dataCriacao: {type: Date, default: Date.now}
});

module.exports = mongoose.model('User', UserSchema);
