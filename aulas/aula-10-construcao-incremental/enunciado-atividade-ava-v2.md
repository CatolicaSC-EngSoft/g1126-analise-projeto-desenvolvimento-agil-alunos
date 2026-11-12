# Atividade da Aula 10 — Da decisão ao código: construção incremental

**Valor:** 0,25 (a primeira das quatro entregas que compõem o 1,0 de atividades de aula da Unidade 3)
**Formato:** produção em grupo (3 a 5 pessoas), **entrega individual** no Teams
**Prazo:** hoje, 29/10, até 23h59

> A Unidade 3 começa hoje e termina em **03/12**, com a Prova 3 e a entrega do Trabalho 3 (branch `entrega-3`). O que vocês fazem hoje é a primeira das **três histórias novas** que o Trabalho 3 pede — e a definição de pronto vale para todas as que vierem.

> **Um fio só até 05/11.** A história que vocês cortam hoje é a mesma que vocês **testam na Aula 11**: lá, o PR de testes parte do PR da fatia de hoje, e a regra que vocês invertem para conferir os testes é uma regra que vocês implementam hoje. Escolham uma história que tenha **regra de negócio** (algo que o sistema recusa ou decide), não só uma tela.

---

## O que o grupo produz

Duas coisas no repositório do grupo, as duas entradas por **PR revisado**, como qualquer mudança desde a Aula 6.

### 1. A definição de pronto, no `README.md`

Uma seção com exatamente este nome — a correção procura por ele:

```markdown
## Definição de pronto

Pronto, no nosso grupo, é:

- [ ] <item>  — onde se confere: <aba Checks · aba Reviews · diff do PR · tela do celular · ...>
- [ ] <item>  — onde se confere: <...>
```

- **4 itens ou mais**, e cada item com **onde se confere** — o lugar em que outra pessoa o verifica sem perguntar ao autor.
- Dois itens são obrigatórios, porque já são regra da disciplina: **CI verde no PR** e **aprovado por um integrante que não é o autor**.
- Os demais são do grupo. Itens que ninguém confere com sim ou não ("código limpo", "bem testado", "sem bugs") não contam.
- A seção não existe no template: o grupo a cria. Recomendado, sem valer ponto: levar os mesmos itens para o checklist de `.github/pull_request_template.md`.

### 2. O PR da primeira fatia de uma história

A próxima história priorizada do backlog de `docs/analise.md`, **cortada em fatias**, e o PR da **primeira** delas — **aberto ou integrado**. A descrição do PR traz:

- **Título** que nomeia o incremento, como alguém o usa (não "PR 1", não "Trabalho 3").
- **`História / decisão relacionada`** preenchido: a história, o critério de aceite da fatia e, se houver, o ADR.
- **As fatias da história**, uma por linha, cada uma com o seu critério em uma frase — a primeira é a deste PR.
- **Como verificar:** os passos que o revisor repete.
- **`Uso de IA`** preenchido: o que a IA gerou, o que ficou e o que vocês mudaram, e por quê — ou "não usamos".

E o diff do PR contém **pelo menos um teste novo** para o critério da fatia: um `it` com o nome do critério, não um `it.todo`.

**Recomendado, sem valer ponto — escrevam o critério da fatia em Dado, Quando e Então.** É nessa forma que ele vira teste (hoje, o primeiro; em 05/11, todos os outros). Exemplo do formato: *Dado que o doador publicou uma doação, quando ele a cancela, então ela não aparece na lista de disponíveis.* Um critério que não dá para escrever assim ainda não está pronto para virar teste.

---

## Além dos entregáveis

- **Cada integrante faz ao menos um commit hoje** — ou aparece como `Co-authored-by:` no commit do par. O histórico do repositório é o que comprova participação.
- **O PostgreSQL no ar**, pelo caminho escolhido no ADR da migração. **Não vale ponto hoje**, mas a Aula 12 troca o código para ele: quem chegar lá sem o banco respondendo não executa a migração em sala.
- **CI verde** e a `main` **protegida**.
- **O PR da fatia fica de pé até 05/11:** guardem o link, porque o PR de testes da Aula 11 aponta para ele.

---

## Como entregar

No Teams, na atividade da Aula 10, cole exatamente estas três linhas:

```
Repositório: <url do repositório do grupo>
PR da fatia: <url do PR da primeira fatia>
Meu commit de hoje: <url de um commit seu, feito hoje>
```

A definição de pronto é conferida no `README.md` da `main` no prazo. A produção é do grupo; a entrega é individual, porque a nota é individual.

---

## Como é corrigido

**Binário: entregou no prazo e no formato, pontuou.** Não há nota parcial. A conferência é de presença e de forma, e a lista abaixo é exaustiva; a qualidade é avaliada no Trabalho 3.

**Perde o ponto quem:** entrega fora do prazo · não tem `## Definição de pronto` no `README.md` da `main` · tem menos de **4 itens**, ou algum item **sem onde se confere**, ou não inclui CI verde e revisão por outro integrante · não entrega o link de um PR · entrega um PR sem `História / decisão`, sem a lista das fatias ou sem `Uso de IA` preenchido · entrega um PR **sem teste novo** do critério (`it.todo` não conta) · manda o link do repositório sem o link do PR · não tem commit próprio de hoje (a conferência é individual: quem não tem commit seu perde o ponto).

**A qualidade é avaliada depois**, e vale muito mais: "três histórias novas integradas por PR revisado" e "commits e PRs mostram evolução incremental e participação de todos" são critérios de aceite do **Trabalho 3** (2,0 do artefato). Na **defesa individual** (1,0) em **03/12**, cada integrante faz uma pequena modificação ao vivo e responde sobre uma parte que não escreveu — o rastro de hoje é o caminho que leva até ela.

---

## Nível de IA nesta atividade: **IA como colaboradora**

**Pode:** escrever o rascunho do código e dos testes da fatia, sugerir como cortar a história, revisar uma mensagem de commit.

**Antes de aceitar o código gerado, as seis verificações:** (1) entendo cada linha? (2) respeita as camadas — regra em `src/doacoes.js`, SQL em `src/repositorio.js`, só o `src/db.js` conhece o banco? (3) o SQL usa marcadores, sem valor colado na string? (4) inventou função, coluna, rota ou pacote? (5) vaza dado pessoal em log, resposta ou erro? (6) o teste pegaria o erro?

**Continua sendo de vocês:** o corte da história, a definição de pronto, o critério que o teste confere e a explicação de cada linha. Em qualquer nível, vocês continuam responsáveis por **verificar, testar, corrigir e defender** o resultado — e **"a IA escreveu assim" não é justificativa aceita**.
