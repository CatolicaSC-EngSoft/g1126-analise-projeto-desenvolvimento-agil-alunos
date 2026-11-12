# Atividade da Aula 8 — ADR, não-funcionais e validação do projeto

**Valor:** 0,50, em **duas entregas de 0,25** — **8A** (ADRs) e **8B** (validação). Fecham o 1,0 de atividades de aula da Unidade 2.
**Formato:** produção em grupo (3 a 5 pessoas), **entrega individual** no Teams, **uma por parte**
**Prazo:** hoje, 08/10, até 23h59, para as duas

> Depois de hoje vem a **noite de trabalho de 15/10** e, em **22/10**, a Prova 2 e a entrega do Trabalho 2 (branch `entrega-2`). Esta é a **última atividade da Unidade 2**: o que vocês escrevem hoje entra no documento de projeto do Trabalho 2.

---

## O que o grupo produz

Arquivos e seções do repositório do grupo. Os nomes das seções são exatamente estes — a correção procura por eles. **As seções já existem no template**; o que se cria hoje são os arquivos `docs/adr/000N-*.md` e `docs/retrospectivas/2.md`.

Tudo entra por **PR revisado**, como qualquer mudança desde a Aula 6.

## 8A — ADRs (0,25)

### 1. O ADR da migração SQLite → PostgreSQL

Um arquivo em `docs/adr/`, a partir do modelo `docs/adr/0000-modelo-adr.md`, no **próximo número livre** (`0002-…`, ou `0001-…` se o grupo ficou na stack preferencial). O ADR tem de conter estas seções (as cinco primeiras estão no modelo; **Critério de validação** é nova, e entra dentro de Consequências ou numa seção própria):

- **Contexto** — por que migrar, e por que só na Unidade 3.
- **Alternativas consideradas** — **duas ou mais, contando a escolhida**; uma delas é **ficar em SQLite**, e cada uma tem prós e contras. A escolha de **como subir o PostgreSQL** (instalado, em contêiner ou como serviço) é do grupo e **entra aqui**.
- **Decisão** — a escolhida e por que não as outras.
- **Consequências** — positivas **e** negativas (a negativa concreta e **quem paga**), riscos e o que fazer se der errado.
- **Rastreabilidade** — o requisito ou risco da Análise que a decisão atende.
- **Critério de validação** — **o que precisa continuar igual** depois da migração e **que comando ou teste mostra isso**. "Testar bastante" não é critério.
- **Status e data**, no cabeçalho.

O ADR é listado em `## ADRs` de `docs/projeto.md`, com o link. O Trabalho 2 pede pelo menos **2 ADRs**: quem saiu da stack preferencial já tem o da stack (`0001`); quem ficou nela completa o par com a revisão de hoje, se ela mudar a decisão, ou com outro ADR do projeto.

### 2. A revisão diante da mudança de contexto

Quando o professor avisar, o grupo revisa o ADR. A entrega é **a revisão registrada**, de um destes dois jeitos:

- **A decisão muda.** O ADR antigo recebe **só** o status atualizado (`substituído por ADR 000N`). O ADR novo diz **o que mudou no contexto**, **o que da decisão antiga cai** e **o que continua valendo**, e cita o antigo.
- **A decisão continua.** Ao fim do mesmo ADR entra uma seção `## Revisão — <data>` com o que mudou no contexto, o que continua valendo e **por quê**.

Nos dois casos: as seções originais do ADR antigo **não são editadas**, e o efeito sobre o diagrama de dados ou sobre o `src/db.js` aparece — o diagrama **atualizado**, ou a **divergência declarada**. "Continua válido" é resposta aceita, **com o motivo**.

## 8B — Validação (0,25)

### 3. `## Requisitos não-funcionais`

**Três linhas** (um quarto, declarado "fora do piloto", pode existir além dos três). Cada linha tem:

- o **cenário**: *quando* (estímulo e condição), *o sistema* (resposta), *medido por* (número ou observação **e como se mede**);
- a **decisão** — ou o ADR — que ele afeta;
- o que essa decisão **custa**.

Pelo menos um dos três nasce de uma **restrição do caso** (celular, conexão instável, um bairro). O orçamento limita as alternativas dos ADRs e não vira cenário. Adjetivo sozinho ("robusto", "seguro", "escalável") não conta.

Na tabela do template, o **cenário completo** vai na coluna **Requisito**; a **decisão afetada** e o **que ela custa** vão em **Como afeta o design**.

### 4. `## Critérios de validação do projeto`

O checklist: **6 critérios ou mais**, cada um respondível com **sim ou não** por outra pessoa olhando o repositório, e **cada um com a fonte ao lado**: o arquivo ou a seção de onde o critério vem — por exemplo `docs/diagramas/dados.md`, `ADR 0002`, a linha da tabela `## Decisões de projeto` ou uma história do backlog. "Aula 7" ou "hoje" não é fonte. Pelo menos um cobre a migração. Opinião ("o design está limpo", "a equipe concorda", "está bem documentado") não é critério.

Abaixo do checklist, copie as **duas fragilidades apontadas pelo revisor interno** — um integrante do grupo que não escreveu o checklist, que lê só o repositório e as escreve como comentário no PR do próprio grupo —, cada uma com a **resposta da equipe**: **corrigida** (com o link do commit), **aceita como limitação** ou **contestada com motivo**. O que vale para o 8B é o texto presente na `main`.

### 5. `docs/retrospectivas/2.md`

A **Retrospectiva 2**, a partir do modelo em `docs/retrospectivas/modelo.md`: o que decidimos, o que funcionou, o que mudaríamos, próximos passos — **meia página** — e a **autoavaliação de contribuição por pares** (100 pontos distribuídos entre os integrantes, cada um assina). A autoavaliação orienta as perguntas da defesa; não entra no cálculo da nota.

---

## Além dos entregáveis

- **Cada integrante faz ao menos um commit hoje** — ou aparece como `Co-authored-by:` no commit do par. O histórico do repositório é o que comprova participação.
- **CI verde** e a `main` **protegida**.

---

## Como entregar

Duas respostas no Teams, uma em cada atividade (8A e 8B). Em cada uma, cole exatamente estas três linhas:

```
Repositório: <url do repositório do grupo>
Commit da entrega: <url do último commit da main em que tudo o que a parte pede já está presente>
Meu commit de hoje: <url de um commit seu, feito hoje>
```

- **8A:** o commit na `main` que contém o ADR da migração, a revisão dele e a lista em `## ADRs`.
- **8B:** o commit na `main` que contém `## Requisitos não-funcionais`, `## Critérios de validação do projeto` e `docs/retrospectivas/2.md`.

O mesmo commit pode servir às duas partes, se contiver tudo. Cada integrante entrega as duas. A produção é do grupo; a entrega é individual, porque a nota é individual.

---

## Como é corrigido

**Binário, em cada parte: entregou no prazo e no formato, pontuou.** Não há nota parcial. A conferência é de presença e de forma, e a lista abaixo é exaustiva; a qualidade é avaliada no Trabalho 2.

**8A — perde o ponto quem:** entrega fora do prazo · não entrega o ADR da migração · entrega o ADR com menos de **duas alternativas com prós e contras** (a escolhida conta, e "ficar em SQLite" tem de estar entre elas) · sem **consequência negativa** · sem **comando ou teste** na validação ("testar bastante" não conta) · altera as seções originais do ADR antigo · não registra a revisão · manda o link do repositório sem o link do commit · não tem commit próprio de hoje (a conferência é individual: quem não tem commit seu perde o ponto da parte).

**8B — perde o ponto quem:** entrega fora do prazo · entrega menos de **3 cenários** · cenário **sem medida** · checklist com menos de **6 critérios**, ou com algum **sem fonte** (arquivo ou seção do repositório) · não traz as 2 fragilidades do revisor interno com a resposta da equipe · não traz a Retrospectiva 2 com a autoavaliação · manda o link do repositório sem o link do commit · não tem commit próprio de hoje.

**A qualidade do projeto é avaliada depois**, e vale muito mais: "ADRs completos e coerentes", "não-funcionais com efeito explícito sobre o design" e "critérios de validação" são critérios de aceite do **Trabalho 2** (2,0 do artefato). Na **defesa individual** (1,0) em **22/10**, cada integrante explica **qualquer** ADR, cenário ou critério do grupo — inclusive os que não escreveu. As perguntas de sempre: *por que esta alternativa e não a outra?*, *quem paga?* e *como vocês saberiam que falhou?*

---

## Nível de IA nesta atividade: **IA para consulta**

**Pode:** esclarecer um conceito (o que é um ADR, o que é um cenário de qualidade), dar um exemplo de outro domínio e apontar **o que falta** num ADR que vocês já escreveram — "que alternativa real está faltando aqui?" rende mais que "escreva o ADR".

**Continua sendo de vocês:** a decisão, as alternativas que valem a pena, o que o grupo aceita perder, os cenários e o critério de validação. Um ADR gerado por IA costuma trazer alternativas de palha e só consequências boas.

Se usarem a IA, registrem em `## Uso de IA` de `docs/projeto.md` **o que ela fez e o que vocês mudaram**. Em qualquer nível, vocês continuam responsáveis por **verificar, testar, corrigir e defender** o resultado. Na defesa de 22/10 não há consulta além da manuscrita e não há IA — e **"a IA escreveu assim" não é justificativa aceita**.
