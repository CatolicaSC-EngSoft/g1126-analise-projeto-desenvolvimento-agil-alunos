# Estrutura padrão dos slides

Um deck por encontro de conteúdo (12 decks: aulas 1–4, 6–9, 11–14). As aulas de prova (5, 10, 15) e a substitutiva (16) não têm deck.

O deck **não é o material de estudo** — é o apoio da exposição de ~70 min. Ele existe para sustentar o ciclo de cada conceito (exemplo → contraponto → aplicação) e depois **sair do caminho**, porque mais de 2 horas da aula são de produção.

> **Exceção — Aula 1 (26 slides).** É o único encontro que abre com a **Parte 1: contrato pedagógico** (9 slides dedicados: avaliação, defesa individual, consulta, níveis de IA, grupo e PR, datas, as duas vias e a atividade de aceite). Vale o investimento: quase toda dúvida de critério do semestre se resolve ali.

## Esqueleto fixo (13 a 16 slides)

| # | Slide | Papel | Tempo |
|:--:|---|---|:--:|
| 1 | **Capa** — nº e título da aula, unidade, nível de IA | Situa o encontro | — |
| 2 | **De onde viemos** | Retomada do encontro anterior: 3 bullets do que ficou pronto | 5 min |
| 3 | **Onde estamos** | O produto vivo hoje: o que já roda, o que falta | 3 min |
| 4 | **Objetivo da aula** | Uma frase + a evidência que sai daqui | 2 min |
| 5–12 | **Blocos de conteúdo** (2 a 4 blocos) | Cada bloco: conceito → exemplo no Prato Cheio → contraponto/erro comum → como aplicar | ~55 min |
| 13 | **Produção contínua** | O que todos os grupos evoluem no produto hoje | 2 min |
| 14 | **Trabalho em sala** | As 3 opções, o que entregar e o critério (Unidades 1 e 2) | 3 min |
| 15 | **Nível de IA nesta aula** | Sem IA / consulta / colaboradora — e o que registrar | 1 min |
| 16 | **Sua consulta** | 1 pergunta-guia: "o que desta aula você levaria para a prova?" | 1 min |

Nas aulas **11 a 14** o slide 13–14 é substituído por um único **Produção em sala**, com a lista da produção e a entrega do encontro em destaque — a Unidade 3 não tem menu de opções.

Nas aulas 4, 9 e 14 entra um slide extra de **Retrospectiva** (antes do 14), com as quatro perguntas e a autoavaliação por pares.

## Anatomia de um bloco de conteúdo

Cada conceito ocupa **2 slides**, nunca mais:

1. **O conceito** — definição curta (uma frase), com um diagrama ou esquema. Nunca uma lista de 8 bullets.
2. **No Prato Cheio** — o conceito aplicado ao caso, lado a lado com o **contraponto**: um exemplo ruim, um erro comum, ou o que acontece quando se ignora aquilo.

O contraponto é obrigatório (instruções gerais da disciplina): é ele que transforma "o aluno viu" em "o aluno reconhece quando está errado".

## Regras de forma

- **Um conceito por slide.** Se precisa de dois, são dois slides.
- **Máximo 6 linhas** de texto por slide. O que não cabe é fala, não slide.
- **Sempre um elemento visual** — diagrama, tabela, trecho de código, screenshot do caso.
- **Perguntas em vez de afirmações** nos títulos dos blocos, quando fizer sentido ("por que esta história é grande demais?").
- **Nada de material de consulta pronto:** o deck não pode virar um resumo que substitui a consulta autoconstruída pelo aluno.
- Fonte grande (títulos 36pt+, corpo 18–24pt) — sala noturna, projeção ao fundo.

## Mapa dos 12 decks

| Aula | Deck | Blocos de conteúdo (2 a 4 por aula) |
|:--:|---|---|
| 1 | Abertura + o papel da análise | Como funciona a disciplina · Ágil além das cerimônias · Problema ≠ requisito · Produto vivo (skeleton, CI, PR) |
| 2 | Stakeholders, objetivos e conflitos | Quem é stakeholder · Objetivo de negócio × necessidade · Regras implícitas · Conflito de prioridade |
| 3 | Requisitos e histórias | Funcional × não-funcional · Anatomia da história · INVEST · Fatia vertical |
| 4 | Critérios de aceite, hipóteses e riscos | Dado/Quando/Então · Critério ≠ teste · Hipótese × suposição · Risco e mitigação |
| 6 | Decisões de projeto e fluxo de PR | Decisão × implementação · Trade-off · Da análise à decisão · Fluxo de Pull Request |
| 7 | Modelagem e diagramas | Para que serve um diagrama · Contexto/componentes/dados · "O suficiente" |
| 8 | ADR e alternativas | Anatomia do ADR · Consequências · Quando virar ADR · Revisitar decisão |
| 9 | Não-funcionais e validação | Os quatro não-funcionais · Efeito no design · Critérios de validação |
| 11 | Construção incremental | Fatiar incrementos · Definição de pronto · Commit e rastreabilidade · IA gerando código |
| 12 | Testes a partir dos critérios | Do critério ao teste · Tipos de teste · Casos limite · Cobertura real × aparente |
| 13 | Revisão de código e refatoração | Objetivo do review · Cheiros de código · Refatorar com segurança · Reuso |
| 14 | Integração, validação e evidência | Integrar sem quebrar · Evidência de execução · Validar contra a análise |

## Exemplo concreto — deck da Aula 1

1. Capa: "Aula 1 — Abertura e o papel da análise · Unidade 1 · IA para consulta"
2. De onde viemos: primeira aula — o que a disciplina promete entregar
3. Onde estamos: nada roda ainda; hoje o repositório nasce
4. Objetivo: entender o que é analisar um problema · evidência: problema + incertezas escritos
5. **Bloco 1** — Como funciona a disciplina: três ciclos, 6+3+1, consulta autoconstruída
6. **Bloco 1** — O contraponto: por que entregar documento bonito não é aprender
7. **Bloco 2** — Ágil além das cerimônias: decidir sob incerteza
8. **Bloco 2** — No Prato Cheio: o que faríamos com dados incompletos? / erro: começar pela tela
9. **Bloco 3** — Problema ≠ requisito
10. **Bloco 3** — No Prato Cheio: "quero um app com login" × "comida boa está sendo descartada"
11. **Bloco 4** — Produto vivo: walking skeleton, CI e PR (o que vamos montar hoje)
12. **Bloco 4** — Contraponto: o projeto que só roda na última semana
13. Produção contínua: formar grupo, clonar o template, CI verde, todos rodando local
14. Trabalho em sala: as 3 opções
15. Nível de IA: consulta — pode esclarecer conceito, não produz a entrega
16. Sua consulta: "o que você levaria desta aula para a prova?"
