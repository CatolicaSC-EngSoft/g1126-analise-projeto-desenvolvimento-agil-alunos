# Trabalho 2 — Projeto + Incremento

- **Unidade:** 2 — Projeto · **Entrega:** Aula 10 (dia da Prova 2)
- **Peso:** 3,0 · **Grupo:** 3 a 5 pessoas · **Nível de IA:** colaboradora

## Contexto
Com o walking skeleton rodando, o grupo projeta a **evolução da solução** dentro das restrições, mantendo as decisões rastreáveis e integrando mudanças por Pull Request revisado.

## Objetivo de aprendizagem
Projetar uma solução orientada a experimentos e à gestão de backlog (*upstream*), tomando e justificando decisões que se refletem no código.

## Entregáveis
1. **Documento de projeto** (até 4 páginas, fora diagramas):
   - decisões de projeto (mínimo 3), cada uma com 2 alternativas e tabela de trade-offs;
   - diagramas essenciais (contexto + dados ou componentes);
   - pelo menos 2 ADRs completos (contexto, alternativas, decisão, consequências) — **um deles deve ser a decisão de migrar de SQLite para PostgreSQL**, com alternativas, consequências e critério de validação;
   - requisitos não-funcionais (mínimo 3) e seu efeito no design;
   - critérios de validação do projeto;
   - rastreabilidade: cada decisão ligada a um requisito ou risco do Trabalho 1;
   - seção "Uso de IA".
2. **Produto evoluído**: o skeleton cresce com novas histórias, integradas por **Pull Requests revisados** (cada PR com ao menos uma revisão de outro integrante), CI verde.
3. **Retrospectiva 2** (meia página) + autoavaliação por pares.

## De onde vem (aula a aula)
| Aula | O que alimenta o trabalho |
|---|---|
| 6 | Decisões de projeto e trade-offs; adoção do fluxo de PR |
| 7 | Diagramas do caso |
| 8 | ADRs |
| 9 | Não-funcionais, critérios de validação; incremento evoluído; Retrospectiva 2 |

## Estrutura do repositório
```
docs/projeto.md                o documento de projeto
docs/adr/0001-*.md             os ADRs (modelo em docs/adr/0000)
docs/diagramas/                os diagramas
docs/retrospectivas/2.md       a retrospectiva da iteração
src/, tests/                   produto evoluído
```

## Restrições
Mesmo caso e mesmo repositório do Trabalho 1; documento de até 4 páginas; consolidar as Aulas 6–9; toda mudança relevante integrada por PR revisado.

## Como entregar

Canal oficial: **Teams**, na atividade do Trabalho (Aula 10) — é a data e hora dele que valem.

Junto, criar no GitHub o branch **`entrega-2`** congelando o estado entregue e informar o nome na entrega:

```bash
git checkout -b entrega-2
git push -u origin entrega-2
```

A `main` segue evoluindo; a correção olha o branch. Commits nele após o prazo não são considerados.

## Critérios de aceite (checklist)
- [ ] Entregue no prazo e no formato solicitado.
- [ ] ADRs completos e coerentes; diagramas legíveis e suficientes.
- [ ] Cada decisão rastreada a um requisito/risco da Análise.
- [ ] Novas histórias integradas via PR revisado, com CI verde.
- [ ] Não-funcionais com efeito explícito sobre o design.
- [ ] Retrospectiva e seção "Uso de IA" presentes.

## Nota e defesa individual (Aula 10)

**Composição dos 3,0:** 2,0 pelo artefato do grupo (checklist coletivo) + 1,0 pela defesa individual.

**Defesa individual (1,0), escalonada** — conforme cada aluno termina a prova, apresenta-se por 2–3 min:

| Item | Pontos |
|---|:--:|
| Defender uma decisão de projeto ou ADR que ajudou a tomar | 0,4 |
| Responder pergunta dirigida sobre **outra** parte do trabalho | 0,3 |
| Fazer uma pequena modificação ao vivo (documento ou código) | 0,3 |

**Gatilho:** aluno sem nenhuma contribuição registrada no repositório nesta iteração perde também a parcela do grupo. A autoavaliação por pares da retrospectiva orienta as perguntas, mas não entra no cálculo. A modulação vale só para este trabalho — a próxima iteração recomeça limpa.
