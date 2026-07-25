import { criarApp } from './app.js';
import { migrar } from './db.js';

const porta = process.env.PORT || 3000;

await migrar();
console.log('banco pronto');

criarApp().listen(porta, () => {
  console.log(`Prato Cheio rodando em http://localhost:${porta}`);
});
