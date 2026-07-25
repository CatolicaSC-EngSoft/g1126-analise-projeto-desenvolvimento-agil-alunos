import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { criarApp } from '../src/app.js';
import { migrar, limparBanco, encerrar } from '../src/db.js';

const app = criarApp();

// Este teste já passa e não depende do banco:
// prova que a aplicação sobe e que o CI está funcionando.
describe('a aplicação sobe', () => {
  it('responde na verificação de saúde', async () => {
    const res = await request(app).get('/api/saude');
    expect(res.status).toBe(200);
    expect(res.body.ok).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Backlog de testes do walking skeleton.
// Cada `it.todo` é um critério de aceite ainda não implementado — o CI não
// falha por causa deles. À medida que o grupo implementa, troque `it.todo`
// por um `it` de verdade (veja o exemplo comentado no fim do arquivo).
//
// Os testes abaixo usam o banco — que na Unidade 1 é SQLite em memória:
// nada a instalar, nada a subir.
// ---------------------------------------------------------------------------

describe('publicar e listar doações', () => {
  it.todo('mostra a doação publicada na lista de disponíveis');
  it.todo('recusa doação sem os campos obrigatórios');
});

describe('aceitar uma doação', () => {
  it.todo('marca a doação como aceita pela ONG');
  it.todo('remove a doação da lista de disponíveis depois de aceita');
  it.todo('recusa aceitar uma doação que já foi aceita por outra ONG');
});

/* Exemplo de como transformar um critério de aceite em teste.
   Descomente o beforeEach/afterAll quando começar a usar o banco.

  beforeEach(async () => { await migrar(); await limparBanco(); });
  afterAll(async () => { await encerrar(); });

  Dado que um doador publicou uma doação
  Quando uma ONG consulta as doações disponíveis
  Então a doação aparece na lista

  it('mostra a doação publicada na lista de disponíveis', async () => {
    await request(app)
      .post('/api/doacoes')
      .send({ tipo: 'Sopa', quantidade: '10 porções', validade: '2026-08-01' });

    const res = await request(app).get('/api/doacoes');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].tipo).toBe('Sopa');
  });
*/
