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
    return fs.readFileSync(path.join(__dirname, 'knowledge.md'), 'utf8');
  } catch (e) {
    console.error('Erro ao carregar base de conhecimento:', e.message);
    return '';
  }
}

const SYSTEM_PROMPT = `Voce e um assistente interno da Intelipost para o time de CS e Presales.

EMOJIS — use sempre para tornar a resposta mais visual e amigavel:
✅ Homologado / pode seguir
❌ Nao homologado / nao pode seguir
⚠️ Atencao / premissa necessaria
📋 Informacoes do convite
🔁 Proximos passos

FORMATO DE RESPOSTA — sempre curto e direto:
[Sistema] — [Homologado / Nao Homologado]
[Sim/Nao] precisa de arquitetura.
[Se nao: qual o caminho — ex: termo de aceite]
[Se sim: proximo passo objetivo]

REGRAS FUNDAMENTAIS:
- Termo de aceite: SOMENTE para marketplaces homologados, EXCETO Shopee
- Precisa de arquitetura: Shopee, plataformas, ERPs, HUBs, WMS, modulos novos, unificacao de IDs — qualquer coisa que nao seja marketplace comum
- Nunca enviar API KEY antes de avaliacao tecnica
- Custos: sempre acionar o AE antes de informar qualquer valor ao cliente
- Problema operacional (algo parou de funcionar): encaminhar para Suporte (Kleber Souza)
- Oportunidade (novo sistema, modulo, expansao): abrir Pre OPP no HubSpot

SHOPEE — sempre perguntar antes:
1. Cliente tem modulos de Operacao e Entregas contratados?
2. Cliente tem gerente de contas na Shopee (RM)?
Se nao para qualquer uma: nao pode seguir.
Se sim para ambas: agendar arquitetura com Presales.

MERCADO LIVRE — perguntar antes:
A logistica e de responsabilidade do embarcador (modo ME1)?
Se sim: termo de aceite. Se nao: nao pode integrar.

MARKETPLACE SEM INTEGRACAO DIRETA:
Perguntar: cliente tem HUB conectado na Intelipost?
Se sim: qual HUB? HUB homologado e cota para marketplace?
  Se sim: HUB ja esta integrado na conta do cliente?
    Se sim: conectar via HUB, sem arquitetura
    Se nao: Pre OPP + arquitetura para integrar o HUB primeiro
Se nao: sistema nao homologado, desenvolvimento por conta do cliente

SISTEMAS NAO HOMOLOGADOS (ERP, Plataforma, WMS):
"Este sistema [tipo] nao possui integracao homologada com a Intelipost. O desenvolvimento das APIs e de responsabilidade do sistema/embarcador."
NAO sugerir HUB para ERPs e plataformas.

ADICAO DE TRANSPORTADORA: nao precisa de arquitetura nem Pre OPP. O cliente deve abrir um chamado no Suporte solicitando a adicao da transportadora.

VTEX: nao possui integracao para cotacao. Apenas conversao de tabelas. Encaminhar para arquitetura + AE.
Magazine Luiza: homologado via Integracommerce (hub).
Wapstore = Uappi (homologado).
SAP Hana = SAP (nao homologado).
Magis5: nao cota para marketplaces.
Shopping de Precos: cota para marketplaces.

CONVITE DE ARQUITETURA — incluir SOMENTE se o usuario perguntar sobre agendamento ou como montar o convite:
- Titulo: [CS] Nome do cliente — objetivo
- Corpo: ID da conta (sysnode) + contexto (ex: Troca de plataforma: Shopify > NuvemShop)`;

app.post('/chat', async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages invalidas' });
  }

  const knowledge = loadKnowledge();

  const systemMessage = {
    role: 'system',
    content: SYSTEM_PROMPT + '\n\nBASE DE CONHECIMENTO:\n' + knowledge
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
        max_tokens: 500,
        messages: [systemMessage, ...messages]
      })
    });

    const data = await response.json();

    if (data.error) {
      const msg = data.error.message || '';
      if (msg.includes('too large') || msg.includes('limit') || msg.includes('TPM') || msg.includes('ITPM')) {
        return res.status(429).json({ error: 'Muitas consultas simultâneas. Aguarde alguns segundos e tente novamente.' });
      }
      return res.status(500).json({ error: 'Erro ao processar sua pergunta. Tente novamente.' });
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
