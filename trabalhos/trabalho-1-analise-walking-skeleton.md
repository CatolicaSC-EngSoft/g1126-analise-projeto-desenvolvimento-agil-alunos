# Trabalho 1 — Análise + Walking Skeleton

- **Unidade:** 1 — Análise · **Entrega:** Aula 5 (dia da Prova 1)
- **Peso:** 3,0 · **Grupo:** 3 a 5 pessoas · **Nível de IA:** colaboradora

## Contexto
O grupo recebeu, na Aula 1, um caso com informações incompletas e prioridades em conflito. A primeira iteração do produto precisa mostrar que o grupo **entendeu o problema**, definiu o **impacto desejado** e colocou uma fatia mínima **rodando**.

## Objetivo de aprendizagem
Analisar um problema e levantar requisitos com foco em impacto (*outcome* vs *output*), materializando o entendimento em uma fatia executável (walking skeleton).

## Entregáveis
1. **Documento de análise** (até 4 páginas):
   - problema central e principais incertezas;
   - mapa de stakeholders (interesse × influência) e 3 objetivos de impacto;
   - regras de negócio relevantes explicitadas;
   - histórias de usuário (mínimo 5), avaliadas por INVEST;
   - critérios de aceite (Dado/Quando/Então) para pelo menos 3 histórias;
   - 2 riscos com mitigação e 1 hipótese com experimento proposto;
   - 1 decisão de análise (ex.: recorte de escopo) com alternativas e justificativa;
   - seção "Uso de IA".
2. **Walking skeleton** no repositório: a história zero funcionando ponta a ponta (interface → lógica → dados), com **CI (GitHub Actions) verde**.
3. **ADR da escolha da stack** (`docs/adr/0001-escolha-da-stack.md`) — **somente se o grupo não usar a stack preferencial**: contexto, alternativas, decisão, consequências e riscos assumidos, incluindo a ausência de template e de solução de referência.
4. **Retrospectiva 1** (meia página) + autoavaliação de contribuição por pares.

## De onde vem (aula a aula)
| Aula | O que alimenta o trabalho |
|---|---|
| 1 | Problema central e incertezas; criação do repositório, CI e fluxo de PR |
| 2 | Mapa de stakeholders, objetivos, regras de negócio, conflitos |
| 3 | Histórias de usuário; escolha da história zero (fatia do skeleton) |
| 4 | Critérios de aceite, riscos, hipótese; walking skeleton publicado; Retrospectiva 1 |

## Estrutura do repositório

Parta de [`g1126-template-prato-cheio`](https://github.com/CatolicaSC-EngSoft/g1126-template-prato-cheio) (já inclui CI, interface e testes), criado com **Use this template**. A estrutura esperada:
```
README.md                      visão do produto + como rodar
docs/analise.md                o documento de análise
docs/retrospectivas/1.md       a retrospectiva da iteração
src/, tests/                   walking skeleton + testes
.github/workflows/ci.yml       o CI (já vem no template)
```

## Restrições
Usar o caso atribuído; documento de até 4 páginas; consolidar as Aulas 1–4; o skeleton deve efetivamente executar (não é mock de tela).

## Como entregar

Canal oficial: **Teams**, na atividade do Trabalho (Aula 5) — é a data e hora dele que valem.

Junto, criar no GitHub o branch **`entrega-1`** congelando o estado entregue e informar o nome na entrega:

```bash
git checkout -b entrega-1
git push -u origin entrega-1
```

A `main` segue evoluindo; a correção olha o branch. Commits nele após o prazo não são considerados.

## Critérios de aceite (checklist)
- [ ] Entregue no prazo e no formato solicitado.
- [ ] Documento contém todos os itens da lista de entregáveis.
- [ ] Histórias com critérios de aceite verificáveis.
- [ ] Walking skeleton executa ponta a ponta e o CI está verde.
- [ ] Se a stack não é a preferencial: o ADR da escolha está entregue e os cinco compromissos técnicos estão atendidos.
- [ ] A decisão de análise tem alternativas e justificativa.
- [ ] Retrospectiva e seção "Uso de IA" presentes.

## Nota e defesa individual (Aula 5)

**Composição dos 3,0:** 2,0 pelo artefato do grupo (checklist coletivo) + 1,0 pela defesa individual.

**Defesa individual (1,0), escalonada** — conforme cada aluno termina a prova, apresenta-se por 2–3 min:

| Item | Pontos |
|---|:--:|
| Explicar uma decisão do trabalho e sua justificativa | 0,4 |
| Responder pergunta dirigida sobre **outra** parte do trabalho | 0,3 |
| Fazer uma pequena modificação ao vivo (documento ou código) | 0,3 |

**Gatilho:** aluno sem nenhuma contribuição registrada no repositório nesta iteração perde também a parcela do grupo. A autoavaliação por pares da retrospectiva orienta as perguntas, mas não entra no cálculo. A modulação vale só para este trabalho — a próxima iteração recomeça limpa.
