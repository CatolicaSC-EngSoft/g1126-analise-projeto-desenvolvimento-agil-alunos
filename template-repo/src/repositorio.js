// Camada de dados do Prato Cheio.
// TODO (grupo): implementar. Hoje é só um esqueleto em memória.
// A escolha da persistência (memória? arquivo? SQLite?) é uma decisão do grupo
// e deve virar um ADR na Unidade 2.

let doacoes = [];
let proximoId = 1;

export function limpar() {
  doacoes = [];
  proximoId = 1;
}

// TODO: guardar a doação e devolvê-la com id e status.
export function inserir(doacao) {
  throw new Error('não implementado: repositorio.inserir');
}

// TODO: devolver apenas as doações que ainda estão disponíveis.
export function listarDisponiveis() {
  throw new Error('não implementado: repositorio.listarDisponiveis');
}

// TODO: encontrar uma doação pelo id.
export function buscarPorId(id) {
  throw new Error('não implementado: repositorio.buscarPorId');
}

// TODO: atualizar uma doação já existente.
export function salvar(doacao) {
  throw new Error('não implementado: repositorio.salvar');
}
