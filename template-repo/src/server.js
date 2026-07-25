import { criarApp } from './app.js';

const porta = process.env.PORT || 3000;
criarApp().listen(porta, () => {
  console.log(`Prato Cheio rodando em http://localhost:${porta}`);
});
