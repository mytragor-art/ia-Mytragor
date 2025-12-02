import 'dotenv/config';

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.error('Erro: OPENAI_API_KEY não definida no arquivo .env');
  process.exit(1);
}

console.log('Chave da API carregada com sucesso (não exibir em logs de produção).');

// Aqui você pode usar a apiKey para configurar a integração com a OpenAI