const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files (the HTML bot)
app.use(express.static(path.join(__dirname, 'public')));

// Load knowledge base
function loadKnowledge() {
  try {
    const full = fs.readFileSync(path.join(__dirname, 'knowledge.md'), 'utf8');
    // Limit to ~20000 chars to stay within token limits
    return full.length > 20000 ? full.substring(0, 20000) + '

[Base truncada por limite de tokens]' : full;
  } catch (e) {
    console.error('Erro ao carregar base de conhecimento:', e.message);
    return '';
  }
}

// Chat endpoint
app.post('/chat', async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages inválidas' });
  }

  const knowledge = loadKnowledge();

  const systemMessage = {
    role: 'system',
    content: `Você é um assistente interno da Intelipost para o time de CS e Presales. 
Responda sempre em português, de forma direta e objetiva, como um analista de Presales experiente.
Use a base de conhecimento abaixo para responder:

${knowledge}`
  };

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.GROQ_API_KEY
      },
      body: JSON.stringify({
        model: 'qwen/qwen3.8-27b',
        max_tokens: 1000,
        messages: [systemMessage, ...messages]
      })
    });

    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    res.json({ reply: data.choices[0].message.content });

  } catch (err) {
    console.error('Erro:', err.message);
    res.status(500).json({ error: 'Erro ao conectar com a API' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
