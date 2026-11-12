# Atividade da Aula 12 — A migração para PostgreSQL, revisada

**Valor:** 0,25 (a terceira das quatro entregas que compõem o 1,0 de atividades de aula da Unidade 3)
**Formato:** produção em grupo (3 a 5 pessoas), **entrega individual** no Teams
**Prazo:** hoje, 12/11, até 23h59

> **É a Refatoração 1 do Trabalho 3.** Hoje vocês executam a migração de SQLite para PostgreSQL decidida no ADR da Unidade 2, com a suíte da Aula 11 como prova de que nada mudou, e registram a revisão de código e as duas refatorações que o **Trabalho 3** pede. A Unidade 3 termina em **03/12**, com a Prova 3 e a entrega do Trabalho 3 (branch `entrega-3`).

---

## O que o grupo produz

### 1. O PR da migração

Um PR, entrado por revisão como qualquer mudança desde a Aula 6, que troca o banco **sem que as regras de negócio percebam**:

- `src/db.js` usa o PostgreSQL (`pg`) e **mantém o contrato**: `query()` continua devolvendo `{ rows }`;
- `src/repositorio.js` usa os marcadores `$1, $2, …` e o dialeto do PostgreSQL;
- o `.github/workflows/ci.yml` tem o bloco `services: postgres` e a `DATABASE_URL` **descomentados** — o CI roda os testes sobre PostgreSQL;
- **`src/doacoes.js` não aparece no diff** do PR. Se a regra precisou mudar, o contrato vazou: o conserto vai no `db.js` ou no `repositorio.js`;
- os testes que já existiam **não mudam**. Um teste novo é bem-vindo; um teste antigo alterado para passar é sinal de comportamento mudado.

### 2. A revisão

Um integrante **que não escreveu** a migração revisa o PR no GitHub (aba *Files changed*) e deixa **3 comentários ou mais em linha**. Cada comentário diz **onde**, **o quê**, **por quê** e uma **sugestão** — e se **bloqueia** a integração ou não. O autor responde a cada um.

A descrição do PR ganha uma seção com exatamente este nome — a correção procura por ele:

```markdown
## O que a revisão mudou

- <o problema apontado> → <o que mudou, com o link do commit> — ou <por que ficou como estava>
- ...
- ...
```

Uma linha por comentário, **3 linhas ou mais**. "Ficou como estava, porque…" é uma resposta válida, desde que diga o porquê.

### 3. O `docs/refatoracoes.md`

O modelo já está no repositório. Preencham:

- **Refatoração 1 — a migração:** o motivo (o ADR), o que mudou, o que não mudou, **o número de testes verdes antes e depois** e **o link da execução do CI verde** sobre PostgreSQL;
- **Refatoração 2 — a de vocês:** o **cheiro de código atacado** e **a dor concreta** que ele causava (que próxima mudança ele dificultava). Se já foi aplicada, também o que mudou e a evidência dos testes. Se ainda não foi, ela fica escolhida e registrada hoje — e aplicada, com os testes, até o Trabalho 3.

O arquivo pode entrar no próprio PR da migração ou em outro PR; o que se confere é o arquivo no PR ou na `main`, no prazo.

### 4. O Uso de IA

A seção `## Uso de IA` do PR da migração preenchida: o que vocês perguntaram à IA e o que fizeram com a resposta — ou "não usamos".

---

## Além dos entregáveis

- **Cada integrante faz ao menos um commit hoje** — ou aparece como `Co-authored-by:` no commit do par. Quem revisou também commita: o `docs/refatoracoes.md` é um bom lugar. O histórico do repositório é o que comprova participação.
- **A segunda refatoração aplicada**, em PR à parte, com a suíte verde antes e depois. **Não vale ponto hoje**, mas o Trabalho 3 exige "as 2 refatorações registradas e protegidas por testes".
- **O PR da migração integrado** na `main` antes da Aula 13. A validação da próxima aula é feita sobre o produto que roda em PostgreSQL.

---

## Como entregar

No Teams, na atividade da Aula 12, cole exatamente estas três linhas:

```
Repositório: <url do repositório do grupo>
PR da migração: <url do PR da migração>
Meu commit de hoje: <url de um commit seu, feito hoje>
```

O PR pode estar **aberto ou integrado**. A produção é do grupo; a entrega é individual, porque a nota é individual.

---

## Como é corrigido

**Binário: entregou no prazo e no formato, pontuou.** Não há nota parcial. A conferência é de presença e de forma, e a lista abaixo é exaustiva; a qualidade é avaliada no Trabalho 3.

**Perde o ponto quem:** entrega fora do prazo · manda o link do repositório sem o link do PR da migração · entrega um PR com o **CI vermelho**, ou com o **bloco do PostgreSQL ainda comentado** no workflow · tem **`src/doacoes.js` no diff** do PR · não tem **revisão de um integrante que não é o autor** com **3 comentários ou mais** em linha · não tem a seção **`## O que a revisão mudou`**, ou tem menos de **3 linhas** nela · não tem o `docs/refatoracoes.md` (no PR ou na `main`) com a **Refatoração 1** — os dois números de testes e o link do CI — e a **Refatoração 2** — o cheiro e a dor · tem o **`Uso de IA`** sem preencher · não tem commit próprio de hoje (a conferência é individual: quem não tem commit seu perde o ponto).

**A qualidade é avaliada depois**, e vale muito mais: "as 2 refatorações estão registradas e protegidas por testes" é critério de aceite do **Trabalho 3** (2,0 do artefato), que também pede o registro de uma revisão de código. Na **defesa individual** (1,0) em **03/12**, cada integrante explica uma refatoração — o que melhorou e como os testes a protegeram — e faz uma pequena modificação ao vivo.

---

## Nível de IA nesta atividade: **IA para consulta**

**Pode:** explicar uma mensagem de erro do `pg` ou do `vitest`; explicar a diferença entre um tipo ou uma função do SQLite e do PostgreSQL; explicar o que é um cheiro de código ou uma refatoração.

**Não pode:** escrever a migração, a segunda refatoração ou os comentários da revisão. Hoje o que se avalia é a leitura de vocês.

**Continua sendo de vocês:** cada linha do PR, a decisão de onde consertar um vazamento do contrato, o que apontar na revisão e qual cheiro pagar primeiro. Em qualquer nível, vocês continuam responsáveis por **verificar, testar, corrigir e defender** o resultado — e **"a IA explicou assim" não é justificativa aceita**.
