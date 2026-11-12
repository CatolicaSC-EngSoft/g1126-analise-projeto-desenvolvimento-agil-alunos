# Trabalho 3 — Produto Evoluído + Refatoração

- **Unidade:** 3 — Construção · **Valor:** 3,0 (2,0 do artefato do grupo + 1,0 da defesa individual)
- **Formato:** produção em grupo (3 a 5 pessoas), **entrega individual** na atividade do Trabalho 3 no Teams
- **Prazo:** **03/12** (Aula 14, dia da Prova 3), no horário da atividade no Teams
- **Nível de IA:** colaboradora

Este documento é o roteiro completo do trabalho: siga as etapas na ordem, do início ao fim. Ao final de cada etapa há um **"Pronto quando"**: só passe para a próxima quando ele estiver verdadeiro.

---

## Visão geral

**O contexto.** O produto precisa **ganhar qualidade e sustentar mudança**: mais histórias, código mais limpo, testes que protegem e validação contra o que foi acordado na análise. **O objetivo:** construir, refatorar e validar software de forma incremental, com evidências de funcionamento e de qualidade.

O trabalho tem quatro frentes, todas no repositório do grupo:

1. **O produto evoluído** — **pelo menos 3 histórias novas**, priorizadas, integradas por Pull Request revisado, com CI verde, e **testes** dos critérios de aceite, com casos limite e de erro.
2. **As duas refatorações** — a **migração de SQLite para PostgreSQL** decidida no ADR da Unidade 2 e **pelo menos 1 outra**, ambas protegidas pelos testes — e o registro de **1 revisão de código**.
3. **A evidência e a validação** — o produto rodando a partir de um clone novo, o **roteiro da demo** e o confronto com os **critérios de aceite do Trabalho 1**.
4. **O fechamento** — o **documento de fechamento** (até 4 páginas) e a **Retrospectiva 3**, com a autoavaliação por pares.

**Muito já está feito.** Se as atividades das Aulas 10 a 13 foram entregues, cada frente já tem a sua base no repositório. O trabalho agora é completar o que ficou de fora, corrigir o que ficou fraco e consolidar. Aqui avalio a **qualidade e a coerência do conjunto** — não a presença de cada peça, que as atividades já conferiram.

### De onde vem (aula a aula)

| Aula | O que alimenta o trabalho |
|---|---|
| 10 | Definição de pronto no README; primeira fatia de uma história nova via PR rastreável (história, fatias, uso de IA); PostgreSQL no ar |
| 11 | PR de testes dos critérios de aceite, com casos limite e a inversão de uma regra (testes que pegam o erro) |
| 12 | Migração para PostgreSQL protegida pelos testes (Refatoração 1); revisão do PR por quem não o escreveu, com a seção "O que a revisão mudou" (o registro de revisão); a Refatoração 2 escolhida pelo cheiro e pela dor, em `docs/refatoracoes.md` |
| 13 | Integração de tudo na `main` com CI verde; o roteiro da demo (`docs/demo.md`) executado por outro integrante a partir de um clone novo; o quadro de validação contra os critérios de aceite da Unidade 1 (`docs/validacao.md`), com status e evidência; a Retrospectiva 3 com a autoavaliação por pares |

**Regras que valem para tudo:**

- Toda mudança entra por **PR revisado** por outro integrante, com **CI verde** e a **definição de pronto** do grupo cumprida. Nada de commit direto na `main`.
- Na reta final, **um PR por vez**: branch atualizada com a `main` antes do merge, CI da `main` conferido depois. `main` vermelha é prioridade do grupo.
- Os nomes dos arquivos e das seções são **exatamente** os do template e os pedidos aqui: a correção procura por eles.
- **Teto de 4 páginas** para o documento de fechamento (etapa 9). Código, testes, PRs, roteiro da demo e retrospectiva ficam **fora** desse limite. Decisão vale mais que volume.
- **Cada integrante faz commits** ao longo da iteração. Quem não tiver nenhuma contribuição registrada no repositório perde também a parcela do grupo.

### Cronograma sugerido (até 03/12)

| Quando | O que fazer |
|---|---|
| 19/11 | Trabalho Remoto |
| 26/11 | Prova |
| 02/12 | Substituta |

---

## Etapa 0 — Organizar o grupo

1. Atualizem a `main` local de todos (`git pull`) e confiram que o CI dela está verde.
2. Façam a **lista dos PRs abertos**: de quem é cada um e o que ele toca. É com ela que se integra o que falta (etapa 7).
3. Leiam este documento juntos e dividam as etapas. Cada etapa tem um **responsável** e um **revisor**, que não é a mesma pessoa.

**Pronto quando:** a `main` está verde, a lista de PRs abertos existe e cada etapa tem responsável e revisor.

---

## Etapa 1 — A definição de pronto (`## Definição de pronto` no `README.md`)

Vem da **Aula 10**. Revisem a seção que já existe.

- **4 itens ou mais**, cada um com **onde se confere** (aba *Checks*, aba *Reviews*, diff do PR, tela do celular…). Entre eles, **CI verde** e **revisão por outro integrante**.
- Definição de pronto não é critério de aceite: ela vale para **todo** PR; o critério é de uma história.
- Ela vale de verdade: um PR que não a cumpre não entra. Se o grupo mudou a definição durante a iteração, registrem na Retrospectiva 3 o que mudou e por quê.

**Pronto quando:** a seção está na `main`, com 4 itens ou mais, todos com onde se confere, e os PRs da iteração a cumprem.

---

## Etapa 2 — Produto evoluído: as histórias novas

Vem da **Aula 10**. O trabalho pede **pelo menos 3 histórias novas** integradas nesta iteração (desde 23/10). A primeira já começou na Aula 10.

- Cada história é **priorizada**: digam, no PR, de onde ela vem (`docs/analise.md`, o backlog do grupo, uma mudança de contexto) e por que vem antes das outras.
- Cada uma é **cortada em fatias** que entram na `main` sozinhas; cada fatia entra por **PR revisado contra a definição de pronto**, com CI verde.
- A descrição de cada PR tem a **história e o critério de origem**, a **lista das fatias** (feitas e por fazer) e o **`Uso de IA`** — o que foi gerado, o que ficou, o que mudou e por quê, ou "não usamos".
- Commits que contam o incremento: uma mudança por commit, mensagem que diz o que muda.
- Uma história **pela metade** (a primeira fatia na `main`, as outras não) conta como entregue **se** o PR disser o que ficou de fora — e o quadro de validação (etapa 8) a tratar como tal.

**Pronto quando:** há 3 histórias novas ou mais na `main`, cada fatia por PR revisado, com CI verde e a origem, as fatias e o `Uso de IA` na descrição.

---

## Etapa 3 — Testes dos critérios de aceite

Vem da **Aula 11**. Para **cada história implementada nesta iteração**:

- **Um teste por critério de aceite** (`it`, não `it.todo`), com o **nome que diz a regra**, o **Dado preparado pela própria API** e o **Então que confere o valor** — não só o status.
- **Pelo menos um caso limite ou de erro** que o critério não previa (faltou, vazio, repetiu, não existe), com o esperado **decidido** pelo grupo e escrito no nome do teste.
- **Uma regra invertida** de propósito, com o resultado registrado na seção `## Inversão de regra` do PR de testes (a regra, os testes que ficaram vermelhos, "inversão desfeita"). Se nenhum teste ficou vermelho, o teste foi reforçado e a inversão repetida.

Testes gerados por IA valem — **se** passarem pela mesma pergunta: *o que precisa quebrar para este teste ficar vermelho?*

**Pronto quando:** cada critério das histórias implementadas tem um teste com o nome dele, cada história tem ao menos um limite ou erro testado, e há uma inversão registrada.

---

## Etapa 4 — Refatoração 1: a migração para PostgreSQL

Vem da **Aula 12**. A migração decidida no ADR da Unidade 2, **executada como refatoração**: o banco muda, o comportamento não.

- `src/db.js` usa o PostgreSQL (`pg`) e **mantém o contrato**: `query()` continua devolvendo `{ rows }` — e o que mais o produto usa dele.
- `src/repositorio.js` usa os marcadores `$1, $2, …` e o dialeto do PostgreSQL. Os vazamentos (a data, a contagem, o id) são consertados **abaixo do contrato**.
- O `.github/workflows/ci.yml` tem o bloco `services: postgres` e a `DATABASE_URL` **descomentados**: o CI roda os testes sobre PostgreSQL.
- **`src/doacoes.js` não aparece no diff** da migração, e os testes que já existiam **não mudam**.
- Os testes rodam num **banco só deles**, nunca no de desenvolvimento.
- Em `docs/refatoracoes.md`, a **Refatoração 1**: o motivo (o ADR), o que mudou, o que não mudou, **o número de testes verdes antes e depois** e **o link do CI verde** sobre PostgreSQL.

**Pronto quando:** a migração está na `main`, o CI da `main` roda sobre PostgreSQL e está verde, e a Refatoração 1 está registrada com os dois números e o link.

---

## Etapa 5 — Refatoração 2

Vem da **Aula 12**. **Pelo menos 1 outra refatoração**, escolhida pelo motivo certo.

- **O cheiro** (duplicação, função longa, nome que engana, parâmetro-bandeira, regra fora da camada, comentário que repete o código) e **a dor concreta**: que próxima mudança ele dificultava. "Estava feio" não é dor. Se a escolha veio da mudança de contexto da Aula 12, digam.
- **Teste antes:** se a parte refatorada não tinha teste, o teste entra primeiro. Sem verde antes, o verde depois não prova nada.
- **Verde antes, verde depois, em PR à parte.** Se a refatoração revelar uma mudança de comportamento desejada, ela vai em **outro commit**, com o teste ajustado **de propósito** e o motivo no PR.
- Em `docs/refatoracoes.md`, a **Refatoração 2**: o cheiro, a dor, o que mudou e a evidência dos testes.

**Pronto quando:** a segunda refatoração está na `main`, protegida por testes, e registrada com o cheiro, a dor e a evidência.

---

## Etapa 6 — O registro de 1 revisão de código

Vem da **Aula 12**. O trabalho pede o registro de **1 revisão**, com **3 problemas encontrados e o que mudou**.

- O registro é a revisão do **PR da migração** (ou de outro PR relevante da iteração): **3 comentários ou mais em linha**, de quem **não** escreveu o PR, cada um com onde, o quê, por quê, sugestão e se bloqueia.
- A descrição do PR tem a seção **`## O que a revisão mudou`**, uma linha por comentário: o problema → o que mudou, com o commit — ou por que ficou como estava.
- Em `docs/refatoracoes.md`, ao fim da Refatoração 1, uma linha: **`- Revisão: <link do PR revisado>`**.

**Pronto quando:** o PR tem a revisão de outro integrante com 3 comentários ou mais, a seção `## O que a revisão mudou` com 3 linhas ou mais, e o link está no `docs/refatoracoes.md`.

---

## Etapa 7 — Integração e evidência de funcionamento

Vem da **Aula 13**.

- **Tudo integrado na `main`:** a lista da etapa 0 vira uma ordem; um PR por vez, com a branch atualizada, o CI do PR, a revisão, o merge e o **CI da `main` conferido**. O que não fica pronto sai da lista — e vai para as limitações (etapa 9).
- **O README atualizado:** a seção `## Como rodar` descreve o produto **sobre PostgreSQL** — como subir o banco, a `DATABASE_URL` (com um exemplo, nunca uma senha real) e os três comandos. A frase do template "o banco é SQLite" não vale mais.
- **O clone limpo:** um integrante que **não** escreveu o README clona o repositório numa pasta nova e sobe o produto e os testes **só com ele**.
- **O roteiro da demo em `docs/demo.md`:** os 3 minutos (o problema, a história funcionando no navegador do celular, um caso de erro, o que falta) e o passo a passo com **ação exata e resultado esperado**. Um integrante que **não** escreveu o roteiro o executa sem ajuda, e o `## Testado por` registra quem, quando e o que precisou mudar.

**Pronto quando:** a `main` está verde com tudo integrado, o produto sobe de um clone novo só com o README, e o roteiro foi executado por quem não o escreveu.

---

## Etapa 8 — Validação contra a análise (`docs/validacao.md`)

Vem da **Aula 13**. O confronto do produto com os **critérios de aceite do Trabalho 1**.

- A tabela com **todos** os critérios de aceite do `docs/analise.md`, **copiados como estão** — sem reescrever para caber no produto.
- Em cada linha, o **status** — *atende*, *parcial*, *não atende* ou *não verificável* — e a **evidência** que outra pessoa confere: o nome do teste, o passo do roteiro, o link do CI. "Testado" não é evidência.
- Cada *parcial* e *não atende* com uma entrada em **"Critérios que não atendem — por quê"**: o que funciona, o que falta e por que ficou de fora.
- Cada critério *não verificável*, ou que mudou ao longo do semestre, em **"Mudanças de critério"**, com o motivo.

Um "não atende" bem justificado vale mais que um "atende" sem evidência.

**Pronto quando:** todos os critérios do `docs/analise.md` estão na tabela, cada um com status e evidência, e todo parcial, não atende ou não verificável tem o seu porquê.

---

## Etapa 9 — O documento de fechamento (até 4 páginas)

O documento de fechamento **não é um arquivo novo**: é o par **`docs/refatoracoes.md` + `docs/validacao.md`**, que juntos respondem às quatro perguntas do fechamento. O teto de **4 páginas** vale para os dois somados.

| O fechamento pede | Onde está |
|---|---|
| As refatorações feitas e por quê | `docs/refatoracoes.md` — Refatoração 1 e Refatoração 2 (etapas 4 e 5) |
| O resultado da validação | `docs/validacao.md` — a tabela e "Critérios que não atendem — por quê" (etapa 8) |
| As limitações do produto | `docs/validacao.md` — uma seção **`## Limitações do produto`**, ao fim (abaixo) |
| O Uso de IA | `docs/validacao.md` — a seção **`## Uso de IA`** |

**`## Limitações do produto`** — acrescentem ao fim do `docs/validacao.md`: o que o produto **não faz** ou **não aguenta** hoje, além dos critérios que não atendem — as histórias que ficaram de fora, o que a escala, a conexão ou o ambiente ainda não suportam, o que foi decidido não fazer e por quê. Três a cinco linhas bastam; cada uma diz **o quê** e **por quê**.

**`## Uso de IA`** — o que a IA fez **nesta iteração**, por frente (histórias, testes, refatorações, documentos), e o que o grupo verificou e mudou, com **pelo menos um erro dela que vocês corrigiram** e como perceberam. "Usamos para ajudar" não é registro.

**Pronto quando:** os dois arquivos cabem em 4 páginas, a seção `## Limitações do produto` existe com o quê e o porquê de cada linha, e o `## Uso de IA` cita um erro corrigido.

---

## Etapa 10 — Retrospectiva 3 (`docs/retrospectivas/3.md`)

Vem da **Aula 13**. A partir de `docs/retrospectivas/modelo.md`, **meia página**:

- o que decidimos nesta iteração — **decisões, com o porquê**, não a lista de tarefas;
- o que funcionou;
- o que mudaríamos — um fato da iteração, nunca "nada";
- próximos passos;
- **autoavaliação de contribuição:** 100 pontos distribuídos entre os integrantes, cada linha com o que a pessoa fez de mais relevante **e o link** (PR ou commit). Ela orienta as perguntas da defesa e não entra no cálculo da nota.

Sugestão, sem nota: três linhas sobre **a IA nesta iteração** — o que ela acertou, o que errou, o que vocês aprenderam a verificar.

**Pronto quando:** o arquivo está na `main` com as quatro partes e a autoavaliação somando 100, com um link por linha.

---

## Etapa 11 — Conferência final e entrega

**1. Confiram o checklist de correção** (abaixo), item a item, olhando só o repositório.

**2. Confiram o teto:** `docs/refatoracoes.md` + `docs/validacao.md` em até 4 páginas.

**3. Façam um último clone limpo**, numa pasta nova, seguindo só o README: `npm install`, `npm run db:migrar`, `npm test`, `npm start` e `/api/saude` respondendo — sobre PostgreSQL.

**4. Criem o branch `entrega-3`**, que congela o que foi entregue:

```bash
git checkout main
git pull
git checkout -b entrega-3
git push -u origin entrega-3
```

A correção olha esse branch. Commits nele depois do prazo não são considerados; a `main` pode seguir evoluindo.

**5. Cada integrante entrega no Teams**, na atividade do Trabalho 3, colando:

```
Repositório: <url do repositório do grupo>
Branch: entrega-3
Execução do CI: <url da execução verde no GitHub Actions, no branch entrega-3>
Meus commits: <url da lista de commits filtrada por você>
```

Para a última linha: no GitHub, aba **Commits**, filtro **Author**, selecione seu usuário e copie o endereço.

---

## Estrutura do repositório

```
README.md                      Definição de pronto + Como rodar (sobre PostgreSQL)
src/, tests/                   produto evoluído + testes
docs/refatoracoes.md           as duas refatorações e a revisão   ┐ documento de
docs/validacao.md              critérios, limitações e Uso de IA  ┘ fechamento (4 páginas)
docs/demo.md                   roteiro da demo, com o Testado por
docs/retrospectivas/3.md       a retrospectiva da iteração
.github/workflows/ci.yml       CI rodando sobre PostgreSQL
```

**Restrições:** mesmo caso e mesmo repositório; escopo compatível com o tempo (incremento, não produto completo); consolidar as Aulas 10–13.

---

## Como é corrigido

**Artefato do grupo (2,0)** — o checklist:

| Item | Onde confiro |
|---|---|
| Entregue no prazo e no formato solicitado. | branch `entrega-3` + entrega individual no Teams |
| Código executa; demo/roteiro prova o funcionamento; CI verde. | clone do `entrega-3`, `/api/saude`, `docs/demo.md`, aba *Actions* |
| Testes cobrem os critérios de aceite das histórias implementadas. | `tests/`, nomes dos testes × critérios, `## Inversão de regra` |
| As 2 refatorações estão registradas e protegidas por testes. | `docs/refatoracoes.md`, o PR da migração (sem `src/doacoes.js` no diff), o CI sobre PostgreSQL, a revisão registrada |
| Commits e PRs mostram evolução incremental e participação de todos. | PRs da iteração, revisores, commits por integrante |
| Validação contra os critérios de aceite da Análise apresentada. | `docs/validacao.md` × `docs/analise.md` |
| Retrospectiva e seção "Uso de IA" presentes. | `docs/retrospectivas/3.md`, `## Uso de IA` e `## Limitações do produto` no `docs/validacao.md` |

**Defesa individual (1,0)** — em 03/12, conforme cada um termina a prova, 2 a 3 minutos comigo:

| O que | Pontos |
|---|:--:|
| Demonstrar a sua parte e explicar uma refatoração — o que melhorou e como os testes a protegeram | 0,4 |
| Responder uma pergunta sobre **outra** parte do trabalho, que você não produziu | 0,3 |
| Fazer uma pequena modificação ao vivo, no documento ou no código | 0,3 |

Levem o **notebook com o repositório clonado e o produto rodando**. As perguntas de sempre: *por que esta escolha e não a outra?*, *como vocês saberiam que falhou?* — e, desta vez, *o que aconteceria se este teste ficasse vermelho depois da troca de banco?* e *por que este critério está como parcial?*

A **autoavaliação por pares** da Retrospectiva 3 orienta as perguntas, mas não entra no cálculo. A defesa é **independente por trabalho**: a nota daqui não é afetada pelas iterações anteriores.

**Gatilho:** quem não tiver nenhuma contribuição registrada no repositório nesta iteração perde também a parcela do grupo.

---

## Nível de IA: **colaboradora**

A IA pode gerar código, testes, rascunhos de documento e revisar o que vocês escreveram. O que ela fez vai registrado — no `## Uso de IA` de cada PR e no do `docs/validacao.md`.

Ela é boa em produzir e ruim em julgar. O que continua sendo de vocês: a fatia que entra primeiro, o esperado de cada caso limite, onde consertar um vazamento do contrato, qual cheiro pagar primeiro, o status de cada critério e cada decisão da retrospectiva. Dois cuidados que esta unidade já mostrou: a IA **não olha o resto do repositório** (tende a duplicar o que já existe) e gera testes que **passam sem conferir a regra**. Em qualquer caso, **"a IA fez assim" não é justificativa aceita** na defesa.

---

## Perguntas frequentes

**As atividades das Aulas 10 a 13 já valem nota. Preciso refazer?** Não. Elas são a base. Aqui vocês completam o que falta, corrigem o que ficou fraco e integram tudo.

**O que conta como história nova?** Toda história integrada nesta iteração (desde 23/10) que não estava pronta no Trabalho 2 — inclusive a que vocês começaram na Aula 10. Uma história bem feita, com testes e PR revisado, vale mais que três pela metade.

**A migração precisa estar na `main`?** Sim. O produto entregue roda sobre PostgreSQL — é um dos compromissos da disciplina desde a Unidade 1 — e o CI do `entrega-3` mostra os testes rodando sobre ele.

**O quadro de validação tem "não atende". Perco ponto?** Não por isso. O checklist pede a validação **apresentada**: um "não atende" com o porquê é validação; um "atende" sem evidência não é.

**Onde fica o documento de fechamento?** Nos dois arquivos que já existem — `docs/refatoracoes.md` e `docs/validacao.md` — mais a seção `## Limitações do produto`. Não criem um terceiro arquivo repetindo o que eles dizem.

**O documento estourou 4 páginas.** Cortem. O código, os testes e os PRs já são evidência: o documento aponta para eles, não os repete.

**Usamos outra stack.** Valem os mesmos cinco compromissos do ADR da stack — repositório público com CI verde, rota de saúde, testes por um comando, os três comandos no README e banco relacional migrado para PostgreSQL. Os nomes de arquivo da etapa 4 mudam; o que se pede dela, não.
