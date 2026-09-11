# Atividade da Aula 3 — Requisitos e histórias de usuário

**Valor:** 0,25 (compõe o 1,0 de atividades de aula da Unidade 1)
**Formato:** produção em grupo (3 a 5 pessoas), **entrega individual** aqui no AVA
**Prazo:** hoje, 13/08, até 23h59

---

## O que o grupo produz

Duas seções do arquivo **`docs/analise.md`** do repositório do grupo. Os nomes das seções são exatamente estes — a correção procura por eles. **As duas já existem no template**: não há nada a criar à mão hoje.

### 1. `## Histórias de usuário`

A tabela recebe **oito linhas**: as 5 histórias do trabalho 1 e as 3 fatias da história gigante do trabalho 2.

| # | História (Como… quero… para…) | INVEST: o que falha | Ação corretiva |
|---|---|---|---|

A quarta coluna é a que vale: **a letra sozinha é carimbo, a ação é diagnóstico**. "Falha em Estimável" não diz nada; "falha em Estimável → spike de 2 h para descobrir se existe endereço estruturado" diz o que vocês fizeram.

Três regras sobre as histórias:

- **O papel vem do mapa de stakeholders.** "Como usuário" e "como administrador" não valem — administrador é papel de tela, não stakeholder (Aula 2).
- **O "para" termina num objetivo de impacto ou numa perda concreta.** Se ele repete o "quero" com outras palavras, a história ainda não tem valor declarado.
- **As 3 fatias da quebra** precisam ser demonstráveis sozinhas. "Parte 1 de 3" e "criar a API" não são fatias.

### 2. A história zero, logo abaixo da tabela

Marquem a história zero com **★** na coluna `#` e escrevam abaixo da tabela:

- **Por que ela** — em uma frase; use a regra de negócio central do caso.
- **O que ficou FORA da fatia** — a lista das exclusões.
- **Por quê** — para cada exclusão, o motivo tem de ser **risco ou medição**. "É difícil" e "não deu tempo" não são motivos.

A história zero está praticamente dada: está no caso e nos cinco `it.todo` de `tests/doacoes.test.js`. **O que vocês decidem hoje é a fronteira** — e é a fronteira que vai ser corrigida.

### 3. `## Uso de IA`

Hoje é a primeira atividade com **IA como colaboradora**, e esta seção passa a existir de verdade. Ela é o registro do Trabalho 3 (gerar histórias com IA e corrigir pelo menos 3) — **não é** um resumo geral do que a IA ajudou; é a lista de **quais linhas da tabela** vieram dela.

Identifiquem **pelo menos 3 histórias, pelo número (#) na tabela `## Histórias de usuário`**, e para cada uma:

- **o que ela gerou;**
- **o que vocês mudaram — e por quê;**
- **qual regra de negócio ela inventou** (há quase sempre uma), e **quem decide** sobre ela.

"Melhoramos a redação" não é registro, e citar a IA sem dizer **qual história da tabela** também não é. E se alguma restrição do caso — celular, conexão instável, um bairro, orçamento próximo de zero — sumiu do que ela gerou, isso também vai anotado: é o erro mais caro dela.

---

## Além das duas seções

- **Cada integrante faz ao menos um commit hoje.** O histórico do repositório é o que comprova participação.
- **CI verde** e `npm run db:migrar` rodando. O banco da Unidade 1 é SQLite embutido no Node: nada a instalar.

---

## Como entregar

Cole no campo de resposta, exatamente estas três linhas:

```
Repositório: <url do repositório do grupo>
Commit da entrega: <url do commit que contém a tabela e o ## Uso de IA>
Meu commit de hoje: <url de um commit seu, feito hoje>
```

Cada integrante entrega. A produção é do grupo; a entrega é individual, porque a nota é individual.

---

## Como é corrigido

**Binário: entregou no prazo e no formato, pontuou.** Não há nota parcial e não há avaliação de mérito aqui.

Perde o ponto quem: entrega fora do prazo · entrega a tabela sem a coluna de ação corretiva · não marca a história zero · não escreve o que ficou fora da fatia · deixa `## Uso de IA` em branco **ou nele não identifica pelo menos 3 histórias por número da tabela** · não tem commit próprio de hoje · manda o link do repositório sem o link do commit.

**A qualidade destas seções é avaliada depois**, e vale muito mais: a história zero é o que vocês vão implementar na Aula 4, e ela é o núcleo do **Trabalho 1** (2,0 do artefato). Na **defesa individual** (1,0) em **03/09**, cada integrante responde por **qualquer** história da tabela — inclusive as que não escreveu e as que a IA escreveu primeiro.

---

## Nível de IA nesta atividade: **IA como colaboradora**

**Pode:** gerar histórias candidatas, sugerir fatiamentos, revisar redação, apontar o que está faltando. E funciona melhor como **adversária** do que como autora — pergunte a ela "que regra estou assumindo sem ter escrito?" em vez de "escreva cinco histórias".

**Continua sendo de vocês:** a escolha da história zero, a fronteira da fatia, o julgamento INVEST e a decisão sobre cada regra que ela inventar.

**O protocolo de verificação, em três passos** — é o que a defesa vai cobrar:

1. **Confrontem com o caso.** A regra que ela citou existe no caso? Se não, marquem como **inventada** e deem dono — quem ratifica é a Marta, não o grupo.
2. **Confrontem com o mapa da Aula 2.** O papel é stakeholder de verdade, ou é papel de tela?
3. **Confrontem com INVEST** e registrem **a ação**, não a letra.

Em qualquer nível, vocês continuam responsáveis por **verificar, testar, corrigir e defender** o resultado. Na defesa de 03/09 não há consulta e não há IA — e **"a IA escreveu isso" não é justificativa aceita**.
