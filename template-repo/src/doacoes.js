// Regras de negócio das doações.
// TODO (grupo): implementar conforme as histórias e os critérios de aceite da Unidade 1.
import * as repo from './repositorio.js';

// História zero — "um doador publica uma doação".
// Critério: tipo, quantidade e validade são obrigatórios.
export async function criarDoacao({ tipo, quantidade, validade }) {
  throw new Error('não implementado: criarDoacao');
}

// História zero — "uma ONG vê as doações disponíveis".
export async function listarDisponiveis() {
  throw new Error('não implementado: listarDisponiveis');
}

// História zero — "uma ONG aceita uma doação".
// Regra do caso: uma doação aceita não fica disponível para outra ONG.
export async function aceitar(id, ong) {
  throw new Error('não implementado: aceitar');
}
