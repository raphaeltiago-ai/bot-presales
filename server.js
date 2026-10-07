const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

function loadKnowledge() {
  try {
    const full = fs.readFileSync(path.join(__dirname, 'knowledge.md'), 'utf8');
    return full.length > 20000 ? full.substring(0, 20000) : full;
  } catch (e) {
    console.error('Erro ao carregar base de conhecimento:', e.message);
    return '';
  }
}

app.post('/chat', async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages invalidas' });
  }

  const knowledge = loadKnowledge();

  const systemMessage = {
    role: 'system',
    content: 'Voce e um assistente interno da Intelipost para o time de CS e Presales. Responda sempre em portugues, de forma direta e objetiva, como um analista de Presales experiente. Use a base de conhecimento abaixo para responder:\n\n' + knowledge
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
  console.log('Servidor rodando na porta ' + PORT);
});
