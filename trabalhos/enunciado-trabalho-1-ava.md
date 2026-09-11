# Trabalho 1 — Análise + Walking Skeleton

**Valor:** 3,0 (2,0 artefato do grupo + 1,0 defesa individual)
**Formato:** produção em grupo (3 a 5 pessoas), **entrega individual** aqui — cada integrante entrega
**Prazo:** **03/09**, valendo a data e a hora desta atividade no Teams
**Nível de IA:** **colaboradora**

> No mesmo dia acontece a **Prova 1** e a **defesa individual** deste trabalho. A defesa é escalonada: conforme cada um termina a prova, senta comigo por 2 a 3 minutos.

---

## O que é

Este é o **produto vivo**, primeira iteração. Não é um trabalho de fim de unidade escrito na última semana: é a consolidação do que vocês vêm produzindo desde a Aula 1, num repositório que já existe, com um software que já roda.

Se as atividades das Aulas 2, 3 e 4 foram feitas, **a maior parte deste trabalho já está entregue**. O que falta é revisar, cortar e fechar.

---

## O que entregar

Três coisas, todas no repositório público do grupo — mais um ADR, só em um caso.

### 1. O documento de análise — `docs/analise.md`

**Teto de 4 páginas.** O teto é um critério, não uma sugestão: decisão vale mais que volume, e documento que estoura o limite perde ponto por isso mesmo.

As seções, com os nomes exatos que já estão no template:

| Seção | De onde vem | Já foi feita em |
|---|---|---|
| `## Problema central` · `## Incertezas` | o caso e o que ele não diz | Aula 1 |
| `## Stakeholders` | mapa com interesse, influência e **consequência para a iteração 1** | Aula 2 |
| `## Objetivos de impacto` | 3 objetivos, com métrica, linha de base e direção | Aula 2 |
| `## Regras de negócio` | 3 regras explicitadas, com origem e como se verifica | Aula 2 |
| `## Conflitos de prioridade` | 1 conflito, com eixo, critério e saída adotada | Aula 2 |
| `## Histórias de usuário` | mínimo 5, avaliadas por INVEST, com a história zero marcada | Aula 3 |
| `## Critérios de aceite` | Dado/Quando/Então para pelo menos 3 histórias | Aula 4 |
| `## Riscos` | 2 riscos, com probabilidade, impacto e mitigação | Aula 4 |
| `## Hipótese e experimento` | 1 hipótese falsificável + o experimento | Aula 4 |
| `## Decisão de análise` | problema, alternativas, decisão, justificativa, custo | Aula 4 |
| `## Uso de IA` | o que ela gerou, o que vocês verificaram e alteraram | Aulas 3 e 4 |

**Fechar o documento é trabalho de corte, não de acréscimo.** As atividades produziram material bruto; a entrega é a versão que cabe em 4 páginas e que vocês conseguem defender linha a linha.

### 2. O walking skeleton — no repositório, rodando

A **história zero** executando **ponta a ponta**: interface → lógica → dados. Concretamente:

- `src/doacoes.js` e `src/repositorio.js` implementados — sem `não implementado:` sobrando no caminho da história zero;
- os cinco `it.todo` de `tests/doacoes.test.js` **transformados em testes de verdade**, passando;
- **CI (GitHub Actions) verde** na `main` e no branch da entrega;
- os três comandos do README funcionando numa máquina limpa: instalar, testar, executar.

**Não é mock de tela.** O teste é banal: publicar uma doação, recarregar a página, ela continuar lá. Se recarregar apaga, não há skeleton.

### 3. A Retrospectiva 1 — `docs/retrospectivas/1.md`

Meia página, a partir de `docs/retrospectivas/modelo.md`, com:

- **as decisões** da iteração (não a lista de tarefas feitas);
- o que funcionou, o que mudariam, próximos passos;
- a **autoavaliação de contribuição por pares** — 100 pontos distribuídos entre os integrantes, cada um assinando.

A autoavaliação **não entra no cálculo da nota**. Ela orienta as perguntas da defesa.

### 4. ADR da stack — `docs/adr/0001-escolha-da-stack.md` · **só se vocês não usarem a stack preferencial**

Quem está no template Node/Express/Vitest **não precisa deste item**.

Quem saiu dela entrega o ADR com contexto, alternativas, decisão, consequências e riscos assumidos — incluindo, explicitamente, o custo de não ter template nem solução de referência. E a stack escolhida precisa garantir os mesmos cinco compromissos: repositório público com CI verde · rota de saúde respondendo · testes por um comando · os três comandos no README · banco relacional, migrado para PostgreSQL na Unidade 3.

---

## Como o repositório deve estar

```
README.md                      visão do produto + como rodar + integrantes
docs/analise.md                o documento de análise
docs/retrospectivas/1.md       a retrospectiva da iteração
docs/adr/0001-...              só se a stack não for a preferencial
src/, tests/                   walking skeleton + testes
.github/workflows/ci.yml       o CI (já vem no template)
```

Preencham a seção **Integrantes** do README com nome e usuário do GitHub de cada um. É por ali que eu ligo commit a pessoa.

---

## Como entregar

**1. Congelem o estado no GitHub**, criando o branch da entrega:

```bash
git checkout -b entrega-1
git push -u origin entrega-1
```

A `main` continua evoluindo depois. **A correção olha o branch `entrega-1`** — commits feitos nele após o prazo não são considerados.

**2. Entreguem aqui**, cada integrante, exatamente estas quatro linhas:

```
Repositório: <url do repositório público do grupo>
Branch da entrega: <url do branch entrega-1>
Execução do CI: <url da execução verde no GitHub Actions, no branch entrega-1>
Meus commits: <url da lista de commits filtrada por você>
```

Para a última linha: no GitHub, aba **Commits**, filtro **Author**, selecione seu usuário e copie o endereço.

O **Teams é o canal oficial**. Nada entregue por outro meio conta como entrega.

---

## Como é corrigido

### Os 2,0 do artefato — checklist do grupo

- [ ] Entregue no prazo e no formato solicitado (branch `entrega-1` informado).
- [ ] O documento tem todas as seções da tabela acima, com os nomes exatos, e **não passa de 4 páginas**.
- [ ] As histórias têm critérios de aceite **verificáveis** — dá para virar teste sem perguntar nada ao grupo.
- [ ] O walking skeleton **executa ponta a ponta** e o **CI está verde**.
- [ ] A decisão de análise tem **pelo menos duas alternativas reais**, justificativa e custo declarado.
- [ ] Retrospectiva 1 com a autoavaliação preenchida e assinada.
- [ ] `## Uso de IA` preenchido, identificando o que veio dela e o que vocês mudaram.
- [ ] Se a stack não é a preferencial: ADR entregue e os cinco compromissos atendidos.

A nota do artefato é **do grupo** — a mesma para todos, exceto pelo gatilho abaixo.

### O 1,0 da defesa individual — em 03/09, 2 a 3 minutos com cada um

| O que | Pontos |
|---|:--:|
| Explicar **uma decisão** do trabalho e a justificativa dela | 0,4 |
| Responder uma **pergunta sobre outra parte** do trabalho — que você não produziu | 0,3 |
| Fazer uma **pequena modificação ao vivo**, no documento ou no código | 0,3 |

Sem consulta e sem IA. **"A IA escreveu isso" não é justificativa aceita** — e "essa parte não foi eu que fiz" também não: o trabalho é do grupo, e você responde por ele inteiro.

**Gatilho:** quem **não tiver nenhum commit próprio** nesta iteração perde também os 2,0 do grupo. É verificável — confiram antes de entregar, não depois. Os documentos também são versionados, então análise e escrita geram commit. `Co-authored-by:` conta.

A defesa é **independente por trabalho**: quem for mal aqui recomeça limpo na Unidade 2.

---

## Nível de IA: **colaboradora**

Pode participar da produção — histórias, critérios, código, testes, redação. O que ela produziu vai registrado em `## Uso de IA`: **o que ela gerou, o que vocês mudaram e por quê**, identificando as linhas da tabela de histórias que vieram dela.

Ela é boa em completude e ruim em julgamento. O que continua sendo de vocês: a fronteira da fatia, quais riscos importam, o que vale testar, e cada decisão com o custo dela.

E confiram sempre se alguma **restrição do caso** — celular, conexão instável, um bairro só, orçamento próximo de zero, poucas semanas — sumiu do que ela gerou. É o erro mais caro dela, e é o que a defesa procura.

---

## Cinco minutos antes de entregar

1. `git clone` do repositório numa pasta nova, `npm install`, `npm run db:migrar`, `npm test`, `npm start` — funciona do zero?
2. A aba **Actions** mostra ✅ no branch `entrega-1`?
3. O `docs/analise.md` cabe em 4 páginas?
4. **Todo mundo** aparece na lista de commits?
5. O repositório está **público**?
