# Atividade da Aula 13 — Demo, validação e Retrospectiva 3

**Valor:** 0,25 (a quarta das quatro entregas que compõem o 1,0 de atividades de aula da Unidade 3)
**Formato:** produção em grupo (3 a 5 pessoas), **entrega individual** no Teams
**Prazo:** hoje, 19/11, até 23h59

> **São três peças do Trabalho 3.** O roteiro da demo, a validação contra os critérios de aceite da análise e a Retrospectiva 3 são entregáveis do **Trabalho 3** (itens 5 e 7 e o critério "demo/roteiro prova o funcionamento"). Hoje eles nascem; até **03/12** — Prova 3 e entrega do Trabalho 3, branch `entrega-3` — vocês podem melhorá-los. A noite de **26/11** é de trabalho remoto para fechar a iteração.

---

## O que o grupo produz

### 1. O roteiro da demo — `docs/demo.md`

O modelo já está no repositório. Preencham:

- **Antes de começar:** os comandos para subir o produto **sobre PostgreSQL** a partir de um clone novo — o que precisa estar no ar e que variável de ambiente usar. Tem de bater com o README;
- **o roteiro de 3 minutos:** o problema em uma frase, a história funcionando, **um caso de erro tratado** e o que falta;
- **o passo a passo reproduzível:** cada passo com **a ação exata** (o que clicar, que dado digitar) e **o resultado esperado** (o que deve aparecer);
- **`## Testado por`:** o nome de um integrante **que não escreveu o roteiro**, a data de hoje e o que precisou ser corrigido depois que ele o executou — ou "nada precisou mudar".

### 2. O quadro de validação — `docs/validacao.md`

O modelo já está no repositório. Preencham:

- a tabela com **todos os critérios de aceite** do `docs/analise.md`, **copiados como estão**, um por linha;
- em cada linha, o **status** — *atende*, *parcial*, *não atende* ou *não verificável* — e a **evidência**: o nome do teste, o passo do roteiro, o link do CI;
- para cada *parcial* e *não atende*, uma entrada em **"Critérios que não atendem — por quê"**: o que funciona, o que falta e por que ficou de fora;
- para cada *não verificável*, ou critério que mudou ao longo do semestre, uma entrada em **"Mudanças de critério"**;
- a seção **`## Uso de IA`**: o que a IA fez nesta iteração e o que vocês verificaram — ou "não usamos".

### 3. A Retrospectiva 3 — `docs/retrospectivas/3.md`

A partir do `docs/retrospectivas/modelo.md`, meia página:

- **o que decidimos:** 2 a 3 **decisões** da iteração, cada uma com o porquê — não a lista de tarefas;
- **o que funcionou**, **o que mudaríamos** e os **próximos passos até 03/12**;
- a **autoavaliação de contribuição**: os 100 pontos distribuídos entre os integrantes, com o que cada um fez de mais relevante **e onde está** (o PR ou o commit). **Total: 100.**

Sugestão, sem nota: três linhas sobre **a IA nesta iteração** — o que ela acertou, o que errou, o que vocês aprenderam a verificar.

### 4. O PR da entrega

Os três arquivos entram num **PR** revisado por outro integrante, com o **CI verde**. Pode estar aberto ou integrado.

---

## Além dos entregáveis

- **Cada integrante faz ao menos um commit hoje** — ou aparece como `Co-authored-by:` no commit do par. O histórico do repositório é o que comprova participação.
- **A `main` integrada e verde** ao fim da aula: os PRs que ficaram abertos têm dono e data. **Não vale ponto hoje**, mas o Trabalho 3 pede "código executa; demo/roteiro prova o funcionamento; CI verde".
- **O ensaio cruzado:** cada integrante explicou uma parte que não escreveu. Não é entregue; é a melhor preparação para a defesa de 03/12.

---

## Como entregar

No Teams, na atividade da Aula 13, cole exatamente estas três linhas:

```
Repositório: <url do repositório do grupo>
PR da entrega: <url do PR com demo.md, validacao.md e retrospectivas/3.md>
Meu commit de hoje: <url de um commit seu, feito hoje>
```

O PR pode estar **aberto ou integrado**. A produção é do grupo; a entrega é individual, porque a nota é individual.

---

## Como é corrigido

**Binário: entregou no prazo e no formato, pontuou.** Não há nota parcial. A conferência é de presença e de forma, e a lista abaixo é exaustiva; a qualidade é avaliada no Trabalho 3.

**Perde o ponto quem:** entrega fora do prazo · manda o link do repositório sem o link do PR da entrega · entrega um PR com o **CI vermelho** · tem o `docs/demo.md` **sem o passo a passo**, ou sem a seção **`## Testado por`** com o nome de um integrante e a data · tem o `docs/validacao.md` **sem a tabela**, ou com uma linha **sem status ou sem evidência**, ou com um *parcial* ou *não atende* **sem a entrada** em "Critérios que não atendem — por quê" · tem o **`## Uso de IA`** do `docs/validacao.md` sem preencher · não tem o `docs/retrospectivas/3.md`, ou ele não tem a **autoavaliação somando 100** · não tem commit próprio de hoje (a conferência é individual: quem não tem commit seu perde o ponto).

**A qualidade é avaliada depois**, e vale muito mais: o **Trabalho 3** (2,0 do artefato) confere "código executa; demo/roteiro prova o funcionamento; CI verde", "validação contra os critérios de aceite da Análise apresentada" e "retrospectiva e seção Uso de IA presentes". Na **defesa individual** (1,0) em **03/12**, cada integrante mostra a sua parte rodando e explica uma refatoração (0,4), responde a uma pergunta sobre **outra** parte do trabalho (0,3) e faz uma pequena modificação ao vivo (0,3).

---

## Nível de IA nesta atividade: **IA como colaboradora**

**Pode:** ajudar a resolver um conflito de merge; sugerir o caso de erro que vale mostrar na demo; revisar o roteiro procurando passo ambíguo; ler o quadro de validação procurando "atende" sem evidência.

**Não pode:** decidir o status de um critério — quem marca *atende* é quem viu a evidência; escrever a retrospectiva ou a autoavaliação por vocês.

**Continua sendo de vocês:** a ordem da integração, cada passo do roteiro, cada status do quadro e cada decisão da retrospectiva. Em qualquer nível, vocês continuam responsáveis por **verificar, testar, corrigir e defender** o resultado — e **"a IA disse que atende" não é evidência**.
