import express from 'express';
import * as doacoes from './doacoes.js';

export function criarApp() {
  const app = express();
  app.use(express.json());
  app.use(express.static('public'));

  // Verificação de saúde: usada pelo CI para provar que a aplicação sobe.
  app.get('/api/saude', (req, res) => res.json({ ok: true }));

  app.get('/api/doacoes', (req, res) => {
    res.json(doacoes.listarDisponiveis());
  });

  app.post('/api/doacoes', (req, res) => {
    try {
      res.status(201).json(doacoes.criarDoacao(req.body));
    } catch (erro) {
      res.status(400).json({ erro: erro.message });
    }
  });

  app.post('/api/doacoes/:id/aceitar', (req, res) => {
    try {
      res.json(doacoes.aceitar(req.params.id, req.body?.ong ?? 'ONG'));
    } catch (erro) {
      res.status(400).json({ erro: erro.message });
    }
  });

  return app;
}
