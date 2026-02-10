const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(express.json());

// Configuração do Pool de conexão (usando a URL do Session Pooler)
const pool = new Pool({
  connectionString: process.backend.env.DATABASE_URL // URL do Session Pooler fornecida pelo Supabase
});

// Rota de teste para verificar se o banco responde
app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ 
      message: 'Conectado ao Supabase com sucesso!', 
      time: result.rows[0].now 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao conectar no banco de dados' });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});