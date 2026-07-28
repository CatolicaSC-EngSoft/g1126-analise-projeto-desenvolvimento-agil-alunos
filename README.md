# Análise, Projeto e Desenvolvimento Ágil

Materiais de condução da disciplina **Análise, Projeto e Desenvolvimento Ágil**: premissas, planejamento e detalhamento dos 16 encontros.

A disciplina é orientada ao desenvolvimento da capacidade de **analisar problemas, projetar soluções e construir software** de forma incremental, crítica e responsável. O foco não é apenas ensinar cerimônias ágeis, mas formar uma maneira estruturada de pensar e atuar como engenheiro de software. A inteligência artificial é integrada — não proibida —, mas o estudante permanece responsável por verificar, testar, corrigir e defender o que produz.

## Estrutura do repositório

| Documento | Conteúdo |
|-----------|----------|
| [`01-premissas.md`](01-premissas.md) | As 8 premissas que regem a disciplina e o princípio orientador. |
| [`02-planejamento-de-aulas.md`](02-planejamento-de-aulas.md) | Estrutura de avaliação, formato da aula, mecanismo da consulta, provas, trabalhos, substitutiva e calendário do semestre. |
| [`03-detalhamento-das-aulas.md`](03-detalhamento-das-aulas.md) | Para cada encontro: foco, pontos a abordar, produção contínua do produto e as três atividades de trabalho em sala (em grupo). |
| [`contrato-pedagogico.md`](contrato-pedagogico.md) | O contrato apresentado e aceito na Aula 1, com as duas vias de compromissos. |
| [`trabalhos-maiores.md`](trabalhos-maiores.md) | Os três trabalhos maiores como iterações de um mesmo produto vivo, com critérios de aceite. |
| [`caso-alunos.md`](caso-alunos.md) | O caso da disciplina ("Prato Cheio"), entregue aos grupos na Aula 1. |
| [`plano-de-aula.md`](plano-de-aula.md) | Plano de ensino oficial da disciplina. |
| [`calendario-2026-2.md`](calendario-2026-2.md) | As 21 quintas-feiras do semestre: 16 encontros, 3 noites de trabalho remoto e 2 reservas. |
| [`slides/`](slides/) | Decks das aulas e a estrutura padrão de apresentação. |
| [`aulas/`](aulas/) | Um arquivo por encontro (16), derivado do detalhamento: foco, nível de IA, evidência, produção contínua e trabalhos de sala. |
| [`trabalhos/`](trabalhos/) | Um arquivo por trabalho maior (3), com entregáveis, de onde vem cada aula e critérios de aceite. |

## O caso e o template

Todos os grupos trabalham o mesmo caso — **Prato Cheio**, uma plataforma que conecta doadores de alimentos excedentes a ONGs ([`caso-alunos.md`](caso-alunos.md)) — na stack **preferencial** **Node.js 22+ · Express · Vitest**, com **SQLite** nas Unidades 1 e 2 e **PostgreSQL** na Unidade 3 (após refatoração). Outra stack é permitida com **ADR justificando**, desde que garanta CI verde, rota de saúde, testes por um comando e banco relacional. O template vive em repositório próprio — [`g1126-template-prato-cheio`](https://github.com/CatolicaSC-EngSoft/g1126-template-prato-cheio) — e é dele que cada grupo cria o seu na Aula 1, pelo botão **Use this template**: estrutura, interface, CI do GitHub Actions e um teste passando, com a história zero em stubs.

## Modelo de avaliação

Três ciclos — **Análise → Projeto → Construção** — cada um com 10 pontos:

| Item | Pontos | Formato |
|------|:---:|--------|
| Prova com consulta | 6,0 | Individual, sem IA, consulta autoconstruída em aula |
| Trabalho maior | 3,0 | Em grupo (3 a 5 pessoas), iteração do produto vivo: **2,0 artefato do grupo + 1,0 defesa individual** |
| Atividades de aula | 1,0 | 0,25 por encontro de conteúdo; correção objetiva e binária (prazo + formato) |

**Nota final = média simples das três unidades.** A prova substitutiva, cumulativa e sem IA, substitui a nota de prova mais baixa.

## Produto vivo

A estrutura é sequencial e de aprofundamento (análise → projeto → construção), mas o software roda desde a Unidade 1. Cada grupo constrói **um único produto**, entregue em três iterações: um *walking skeleton* (fatia vertical que executa ponta a ponta) na Unidade 1, que evolui em incrementos nas unidades seguintes. Infraestrutura: repositório Git com **CI (GitHub Actions)** e integração por **Pull Request** revisado. As aulas que antecedem as provas incluem **retrospectiva**; a Unidade 3 inclui **refatoração**.

## Uso de IA

Cada atividade declara o nível: **Sem IA** (provas), **IA para consulta** ou **IA como colaboradora** (atividades e trabalho maior). Em qualquer nível, o estudante é responsável por verificar, testar, corrigir e defender o resultado.

## Aula

Formato faixa (19h00–22h30): ~70 min de exposição e discussão, o restante dedicado a produção prática em sala.
