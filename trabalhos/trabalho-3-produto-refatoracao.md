# Trabalho 3 — Produto Evoluído + Refatoração

- **Unidade:** 3 — Construção · **Entrega:** Aula 15 (dia da Prova 3)
- **Peso:** 3,0 · **Grupo:** 3 a 5 pessoas · **Nível de IA:** colaboradora

## Contexto
O produto precisa **ganhar qualidade e sustentar mudança**: mais histórias, código mais limpo, testes que protegem e validação contra o que foi acordado na análise.

## Objetivo de aprendizagem
Construir, refatorar e validar software de forma incremental (*downstream*), com evidências de funcionamento e qualidade.

## Entregáveis
1. **Produto evoluído**: pelo menos 3 novas histórias priorizadas, integradas por PR revisado, com CI verde.
2. **Testes** derivados dos critérios de aceite, incluindo casos limite e de erro.
3. **Refatoração**: a **migração de SQLite para PostgreSQL** decidida no ADR da Unidade 2, mais pelo menos 1 outra refatoração — ambas com os testes garantindo que o comportamento se manteve. Registrar o que mudou e por quê.
4. **Revisão de código**: registro de 1 revisão (3 problemas encontrados e o que mudou).
5. **Validação**: confronto do produto com os critérios de aceite do Trabalho 1 (o que atende / não atende).
6. **Documento de fechamento** (até 4 páginas): as refatorações feitas e por quê, o resultado da validação, limitações do produto e uma seção **"Uso de IA"**.
7. **Retrospectiva 3** (meia página) + autoavaliação por pares.

## De onde vem (aula a aula)
| Aula | O que alimenta o trabalho |
|---|---|
| 11 | Nova história implementada via PR; definição de pronto |
| 12 | Testes a partir dos critérios de aceite; casos limite |
| 13 | Revisão de código e refatoração (com testes protegendo) |
| 14 | Integração, demo, validação contra a análise; Retrospectiva 3 |

## Estrutura do repositório
```
src/, tests/                   produto evoluído + testes
docs/refatoracoes.md           o que foi refatorado e por quê
docs/validacao.md              critérios de aceite: atende / não atende
docs/retrospectivas/3.md       a retrospectiva da iteração
docs/demo.md                   roteiro da demo (ou link da gravação)
```

## Restrições
Mesmo caso e mesmo repositório; escopo compatível com o tempo (incremento, não produto completo); consolidar as Aulas 11–14.

## Como entregar

Canal oficial: **Teams**, na atividade do Trabalho (Aula 15) — é a data e hora dele que valem.

Junto, criar no GitHub o branch **`entrega-3`** congelando o estado entregue e informar o nome na entrega:

```bash
git checkout -b entrega-3
git push -u origin entrega-3
```

A `main` segue evoluindo; a correção olha o branch. Commits nele após o prazo não são considerados.

## Critérios de aceite (checklist)
- [ ] Entregue no prazo e no formato solicitado.
- [ ] Código executa; demo/roteiro prova o funcionamento; CI verde.
- [ ] Testes cobrem os critérios de aceite das histórias implementadas.
- [ ] As 2 refatorações estão registradas e protegidas por testes.
- [ ] Commits e PRs mostram evolução incremental e participação de todos.
- [ ] Validação contra os critérios de aceite da Análise apresentada.
- [ ] Retrospectiva e seção "Uso de IA" presentes.

## Nota e defesa individual (Aula 15)

**Composição dos 3,0:** 2,0 pelo artefato do grupo (checklist coletivo) + 1,0 pela defesa individual.

**Defesa individual (1,0), escalonada** — conforme cada aluno termina a prova, apresenta-se por 2–3 min:

| Item | Pontos |
|---|:--:|
| Demonstrar sua parte e explicar uma refatoração (o que melhorou, como os testes protegeram) | 0,4 |
| Responder pergunta dirigida sobre **outra** parte do trabalho | 0,3 |
| Fazer uma pequena modificação ao vivo (documento ou código) | 0,3 |

**Gatilho:** aluno sem nenhuma contribuição registrada no repositório nesta iteração perde também a parcela do grupo. A autoavaliação por pares da retrospectiva orienta as perguntas, mas não entra no cálculo. A modulação vale só para este trabalho: a nota da defesa aqui não é afetada pelas iterações anteriores.
