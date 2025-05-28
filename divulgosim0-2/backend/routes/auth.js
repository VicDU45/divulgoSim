const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Registro de usuário
router.post('/register', async (req, res) => {
  try {
    const { nome, email, senha, tipoUser } = req.body;

    // Validações básicas
    if (!nome || !email || !senha || !tipoUser) {
      return res.status(400).json({ 
        success: false,
        error: 'Todos os campos são obrigatórios' 
      });
    }

    // Validar formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false,
        error: 'Formato de email inválido' 
      });
    }

    // Validar tipo de usuário
    if (!['organizador', 'divulgador'].includes(tipoUser)) {
      return res.status(400).json({ 
        success: false,
        error: 'Tipo de usuário deve ser "organizador" ou "divulgador"' 
      });
    }

    // Validar força da senha
    if (senha.length < 6) {
      return res.status(400).json({ 
        success: false,
        error: 'Senha deve ter pelo menos 6 caracteres' 
      });
    }

    // Verificar se email já existe
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ 
        success: false,
        error: 'Este email já está cadastrado' 
      });
    }

    // Criar novo usuário
    const user = new User({ 
      nome: nome.trim(),
      email: email.toLowerCase(),
      senha,
      tipoUser 
    });

    await user.save();

    // Retornar dados do usuário (sem a senha)
    res.status(201).json({ 
      success: true,
      message: 'Usuário criado com sucesso!',
      user: { 
        id: user._id, 
        nome: user.nome, 
        email: user.email,
        tipoUser: user.tipoUser,
        dataCriacao: user.dataCriacao
      }
    });

  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    
    // Tratar erro de duplicação do MongoDB
    if (error.code === 11000) {
      return res.status(400).json({ 
        success: false,
        error: 'Este email já está cadastrado' 
      });
    }
    
    res.status(500).json({ 
      success: false,
      error: 'Erro interno do servidor' 
    });
  }
});

// Login de usuário
router.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Validações básicas
    if (!email || !senha) {
      return res.status(400).json({ 
        success: false,
        error: 'Email e senha são obrigatórios' 
      });
    }

    // Buscar usuário
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ 
        success: false,
        error: 'Email ou senha incorretos' 
      });
    }

    // Verificar senha
    const isPasswordValid = await user.comparePassword(senha);
    if (!isPasswordValid) {
      return res.status(401).json({ 
        success: false,
        error: 'Email ou senha incorretos' 
      });
    }

    // Login bem-sucedido
    res.json({ 
      success: true,
      message: 'Login realizado com sucesso!',
      user: { 
        id: user._id, 
        nome: user.nome, 
        email: user.email,
        tipoUser: user.tipoUser,
        dataCriacao: user.dataCriacao
      }
    });

  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ 
      success: false,
      error: 'Erro interno do servidor' 
    });
  }
});

// Rota para verificar se email já existe (útil para validação em tempo real)
router.post('/check-email', async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    
    res.json({ 
      success: true,
      exists: !!existingUser 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: 'Erro interno do servidor' 
    });
  }
});

module.exports = router;