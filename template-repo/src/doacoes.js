// Regras de negócio das doações.
// TODO (grupo): implementar conforme as histórias de usuário e os
// critérios de aceite definidos na Unidade 1 (Análise).
import * as repo from './repositorio.js';

// História zero — "um doador publica uma doação".
// Critério: tipo, quantidade e validade são obrigatórios.
export function criarDoacao({ tipo, quantidade, validade }) {
  throw new Error('não implementado: criarDoacao');
}

// História zero — "uma ONG vê as doações disponíveis".
export function listarDisponiveis() {
  throw new Error('não implementado: listarDisponiveis');
}

// História zero — "uma ONG aceita uma doação".
// Regra de negócio do caso: uma doação aceita não fica disponível para outra ONG.
export function aceitar(id, ong) {
  throw new Error('não implementado: aceitar');
}
