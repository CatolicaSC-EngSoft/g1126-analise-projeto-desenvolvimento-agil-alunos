# Atividade da Aula 2 — Stakeholders, objetivos e conflitos

**Valor:** 0,25 (compõe o 1,0 de atividades de aula da Unidade 1)
**Formato:** produção em grupo (3 a 5 pessoas), **entrega individual** aqui no AVA
**Prazo:** hoje, 06/08, até 23h59

---

## O que o grupo produz

As quatro seções abaixo, no arquivo **`docs/analise.md`** do repositório do grupo. Os nomes das seções são exatamente estes — a correção procura por eles.

### 1. `## Stakeholders`

Tabela com os cinco stakeholders do caso, mais **pelo menos um** que o grupo identifique e o caso não liste. Cinco colunas:

| stakeholder | o que quer | interesse | influência | consequência para a iteração 1 |
|---|---|---|---|---|

A quinta coluna é o que torna o mapa útil: cada linha termina dizendo **o que muda na iteração 1** — quem vocês entrevistam primeiro, de quem aceitam requisito agora, quem fica para depois. Linha sem consequência é linha decorativa.

Papel de tela não é stakeholder: "administrador do sistema" não entra.

### 2. `## Objetivos de impacto`

Três objetivos, cada um com **métrica + linha de base + direção**.

O caso não tem linha de base — a Marta *acha* que o gargalo é o tempo de coleta e não existe medição. Isso não impede escrever o objetivo: obriga a escrever de onde o número vai sair. `"hoje desconhecida, medir desde o primeiro dia do piloto"` é uma linha de base válida. Deixar em branco não é.

O teste: **existe um número que, em dezembro, diz que isso não aconteceu?** Se não existe, ainda não é objetivo.

### 3. `## Regras de negócio`

Três regras que o caso usa e não enuncia. Para cada uma:

- **a origem** — dita, praticada, imposta, derivada, ausente ou inventada;
- **o enunciado explícito e verificável** — sujeito + condição observável + efeito;
- **como se verifica.**

Marcar qual delas é **ausente** (não existe no caso, alguém vai ter de decidir) e **quem decide**. Se o grupo criou a regra que preenche essa falta, marcar como **inventada** — inventar é legítimo; apresentar invenção como levantamento não é.

Teste de verificabilidade: **dois desenvolvedores diferentes leem o enunciado e implementam a mesma coisa?**

### 4. `## Conflitos de prioridade`

**Um** conflito do caso, com cinco campos:

- as duas falas em conflito — uma frase cada, em primeira pessoa, na voz do stakeholder;
- **o eixo do trade-off** — a variável em que um lado ganha na medida em que o outro perde;
- o que cada lado perde;
- o critério que decide;
- **qual das três saídas** foi usada: decidir, adiar com data, ou anular o eixo.

Se a saída foi *adiar*, precisa constar a data e o que será medido até lá.

O critério tem de ser aplicável por outra pessoa **sem consultar o grupo**. "Priorizar o usuário" é opinião. "Na iteração 1, campo obrigatório é só o que a vigilância exige; o resto é opcional" é critério.

---

## Além das quatro seções

- **Cada integrante faz ao menos um commit hoje.** O histórico do repositório é o que comprova participação — não a palavra do grupo.
- **CI verde.** Quem está com o CI vermelho resolve hoje, não na Aula 5.

---

## Como entregar

Cole no campo de resposta, exatamente estas três linhas:

```
Repositório: <url do repositório do grupo>
Commit da entrega: <url do commit que contém as quatro seções>
Meu commit de hoje: <url de um commit seu, feito hoje>
```

Cada integrante entrega. A produção é do grupo; a entrega é individual, porque a nota é individual.

Para pegar a URL de um commit: no GitHub, aba **Commits**, clique no commit e copie o endereço da barra.

---

## Como é corrigido

**Binário: entregou no prazo e no formato, pontuou.** Não há nota parcial e não há avaliação de mérito aqui.

Perde o ponto quem: entrega fora do prazo · omite uma das quatro seções · renomeia uma seção · não tem commit próprio de hoje · manda o link do repositório sem o link do commit.

**A qualidade destas quatro seções é avaliada depois**, e vale muito mais: elas são o núcleo do **Trabalho 1** (2,0 do artefato) e é sobre elas que cai a **defesa individual** (1,0) em **03/09**. Na defesa, cada integrante responde por **todas** as quatro seções — inclusive as que não escreveu.

---

## Nível de IA nesta atividade: **IA para consulta**

**Pode:** esclarecer um conceito, revisar a redação de um enunciado, perguntar a diferença entre dois termos.

**Não pode:** produzir o mapa, os objetivos, as regras ou o conflito. Esses são o julgamento do grupo sobre o caso, e é exatamente isso que a atividade avalia.

Em qualquer nível, vocês continuam responsáveis por **verificar, testar, corrigir e defender** o resultado. Na defesa de 03/09 não há consulta e não há IA.

---

## Dois avisos operacionais

**O template não se atualiza sozinho.** O `Use this template` copiou o estado do repositório no momento em que vocês criaram o seu. A seção `## Conflitos de prioridade` e a quinta coluna da tabela `## Stakeholders` entraram no template depois — **acrescentem as duas à mão**, são poucas linhas de Markdown. Editar o próprio `docs/` é esperado.

**`## Decisão de análise` não é o lugar do conflito.** Essa seção fica reservada para a Aula 4. O conflito vai em `## Conflitos de prioridade`.
