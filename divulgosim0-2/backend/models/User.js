const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  nome: { 
    type: String, 
    required: true,
    trim: true
  },
  email: { 
    type: String, 
    unique: true, 
    required: true,
    lowercase: true,
    trim: true
  },
  senha: { 
    type: String, 
    required: true,
    minlength: 6
  },
  tipoUser: { 
    type: String, 
    enum: ['organizador', 'divulgador'], 
    required: true 
  },
  dataCriacao: { 
    type: Date, 
    default: Date.now 
  }
});

// Hash da senha antes de salvar
UserSchema.pre('save', async function(next) {
  // Só faz hash se a senha foi modificada
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

// Método para retornar dados públicos do usuário
UserSchema.methods.toPublicJSON = function() {
  return {
    id: this._id,
    nome: this.nome,
    email: this.email,
    tipoUser: this.tipoUser,
    dataCriacao: this.dataCriacao
  };
};

module.exports = mongoose.model('User', UserSchema);