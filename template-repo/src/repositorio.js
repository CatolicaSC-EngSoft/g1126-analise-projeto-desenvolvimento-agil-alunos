// Camada de dados do Prato Cheio — acesso ao banco.
// TODO (grupo): implementar as quatro funções abaixo usando query().
// A conexão e o schema já estão prontos em src/db.js.
//
// Marcador de parâmetro é `?` (SQL parametrizado evita injeção):
//   const { rows } = await query('SELECT * FROM doacoes WHERE id = ?', [id]);
import { query } from './db.js';

// TODO: inserir a doação e devolver a linha criada (dica: INSERT ... RETURNING *).
export async function inserir({ tipo, quantidade, validade }) {
  throw new Error('não implementado: repositorio.inserir');
}

// TODO: devolver apenas as doações com status 'disponivel'.
export async function listarDisponiveis() {
  throw new Error('não implementado: repositorio.listarDisponiveis');
}

// TODO: buscar uma doação pelo id (devolver undefined se não existir).
export async function buscarPorId(id) {
  throw new Error('não implementado: repositorio.buscarPorId');
}

// TODO: marcar a doação como aceita pela ONG e devolver a linha atualizada.
// Pense: como garantir que duas ONGs não aceitem a mesma doação?
export async function aceitar(id, ong) {
  throw new Error('não implementado: repositorio.aceitar');
}
