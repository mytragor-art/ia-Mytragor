import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import OpenAI from 'openai';

const apiKey = process.env.OPENAI_API_KEY;
const port = process.env.PORT || 3000;

if (!apiKey) {
  console.error('Erro: OPENAI_API_KEY não definida no arquivo .env');
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({ apiKey });

app.post('/api/chat', async (req, res) => {
  try {
    const { systemPrompt = '', message = '' } = req.body || {};

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Mensagem inválida.' });
    }

    // Monta mensagens no formato Chat Completions
    const messages = [];
    if (systemPrompt) {
      messages.push({ role: 'system', content: systemPrompt });
    }
    messages.push({ role: 'user', content: message });

    // Chamada ao modelo. Use um modelo disponível na sua conta.
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
      temperature: 0.7,
    });

    const reply = completion.choices?.[0]?.message?.content?.trim() || 'Sem resposta.';
    return res.json({ reply });
  } catch (err) {
    console.error('Erro no /api/chat:', err);
    return res.status(500).json({ error: 'Erro interno ao processar a solicitação.' });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});