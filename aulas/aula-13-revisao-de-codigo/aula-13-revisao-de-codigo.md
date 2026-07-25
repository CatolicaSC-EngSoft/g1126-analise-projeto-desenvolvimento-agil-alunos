# Aula 13 — Revisão de código e refatoração

- **Unidade:** 3 — Construção
- **Nível de IA:** IA para consulta
- **Evidência da aula:** 1 refatoração aplicada, com testes verdes antes e depois
- **Observação:** o professor introduz uma mudança de contexto durante a aula — o produto e as decisões do grupo precisarão responder a ela.
- **Material:** `slides/aula-13-revisao-de-codigo.pptx`

## Pontos a abordar
- Objetivo do code review: encontrar problemas, não julgar pessoas.
- Cheiros de código mais comuns e riscos de código gerado por IA.
- O que é refatorar: melhorar a estrutura sem mudar o comportamento.
- Refatorar com segurança: os testes garantem que nada quebrou.
- Reuso: extrair o que se repete em vez de duplicar.
- O caso da disciplina: **trocar SQLite por PostgreSQL** sem que as regras de negócio percebam.

## Produção contínua (todos os grupos)
- **Executar a migração de SQLite para PostgreSQL** decidida no ADR: trocar `src/db.js`, ajustar os marcadores de parâmetro, descomentar o serviço `postgres` no CI. Os testes existentes provam que o comportamento se manteve.
- Aplicar pelo menos 1 outra refatoração na base do produto, também protegida por testes.

## Trabalhos em sala (em grupo — escolher 1)
1. Migrar a camada de dados para PostgreSQL mantendo os testes verdes antes e depois — sem tocar em `doacoes.js`.
2. Revisar o código de outro grupo usando um checklist e devolver o feedback por escrito.
3. Pegar um trecho gerado por IA, identificar onde ele é frágil e refatorá-lo.
