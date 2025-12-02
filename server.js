import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import OpenAI from 'openai';
import { readFile } from 'fs/promises';
import path from 'path';

const apiKey = process.env.OPENAI_API_KEY;
const port = process.env.PORT || 3000;

if (!apiKey || /<COLOQUE_SUA_CHAVE_AQUI>/i.test(apiKey)) {
  console.error('Erro: OPENAI_API_KEY ausente ou placeholder no arquivo .env');
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(bodyParser.json());
// Servir arquivos estáticos do diretório do projeto para permitir o front carregar documentos
app.use(express.static(process.cwd()));

// Endpoint dedicado para carregar o perfil padrão da IA
app.get('/system-prompt', async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), 'perfil-ia-mytragor.md');
    const content = await readFile(filePath, 'utf8');
    res.type('text/plain').send(content);
  } catch (e) {
    res.status(404).json({ error: 'perfil-ia-mytragor.md não encontrado' });
  }
});

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
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages,
      temperature: 0.7,
    });

    const reply = completion.choices?.[0]?.message?.content?.trim() || 'Sem resposta.';
    return res.json({ reply });
  } catch (err) {
    const status = err?.status || err?.code || 500;
    const msg = typeof err?.message === 'string' ? err.message : 'Erro interno ao processar a solicitação.';
    console.error('Erro no /api/chat:', msg);
    return res.status(500).json({ error: msg });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});