# Trabalho 2 — Projeto + Incremento

- **Unidade:** 2 — Projeto · **Valor:** 3,0 (2,0 do artefato do grupo + 1,0 da defesa individual)
- **Formato:** produção em grupo (3 a 5 pessoas), **entrega individual** na atividade do Trabalho 2 no Teams
- **Prazo:** **22/10** (Aula 9, dia da Prova 2), no horário da atividade no Teams
- **Nível de IA:** colaboradora

Este documento é o roteiro completo do trabalho: siga as etapas na ordem, do início ao fim. Ao final de cada etapa há um **"Pronto quando"**: só passe para a próxima quando ele estiver verdadeiro.

---

## Visão geral

O trabalho tem três frentes, todas no repositório do grupo:

1. **O documento de projeto** (`docs/projeto.md` + `docs/adr/` + `docs/diagramas/`): consolida o que vocês fizeram nas Aulas 6, 7 e 8 e responde a uma **mudança de contexto** do caso (etapa 4).
2. **O produto evoluído**: o skeleton ganha **histórias novas**, integradas por Pull Request revisado, com CI verde.
3. **A Retrospectiva 2**, com a autoavaliação por pares.

**Muito já está feito.** Se as atividades das Aulas 6, 7 e 8 foram entregues, boa parte do documento existe. O trabalho agora é completar, corrigir, responder à mudança e evoluir o produto. Aqui avalio a **qualidade e a coerência do conjunto**.

**Regras que valem para tudo:**

- Toda mudança entra por **PR revisado** por outro integrante, com **CI verde**. Nada de commit direto na `main`.
- Os nomes das seções de `docs/projeto.md` são **exatamente** os do template: a correção procura por eles.
- **Teto de 4 páginas** para `docs/projeto.md`. ADRs, diagramas e retrospectiva ficam **fora** desse limite. Decisão vale mais que volume.
- **Cada integrante faz commits** ao longo da iteração. Quem não tiver nenhuma contribuição registrada no repositório perde também a parcela do grupo.

### Cronograma sugerido (14 dias)

| Quando | O que fazer |
|---|---|
| 08/10 a 11/10 | Etapas 0 a 3: organizar, revisar decisões, diagramas e ADRs |
| 12/10 a 15/10 | Etapas 4 a 6: mudança de contexto, não-funcionais, critérios de validação |
| **15/10 (noite de trabalho)** | Etapa 7: histórias novas — o grupo junto, implementando e revisando PRs |
| 16/10 a 20/10 | Etapas 7 a 9: terminar as histórias, Uso de IA, Retrospectiva 2 |
| 21/10 | Etapa 10: conferência final e branch `entrega-2` |
| **22/10** | Entrega no Teams, Prova 2 e defesa individual |

---

## Etapa 0 — Organizar o grupo

1. Atualizem a `main` local de todos (`git pull`) e confiram que o CI está verde.
2. Leiam este documento juntos e dividam as etapas. Cada etapa tem um **responsável** e um **revisor**, que não é a mesma pessoa.
3. Abram uma issue (ou um item no quadro do grupo) por etapa, com o responsável.

**Pronto quando:** cada etapa tem responsável e revisor, e todos têm o repositório atualizado.

---

## Etapa 1 — Decisões de projeto (`## Decisões de projeto`)

Vem da **Aula 6**. Revisem a tabela que já existe.

- **Mínimo 3 decisões** que o caso exige. Cada uma com **2 alternativas viáveis** e a coluna **"Requisito/risco da Análise que a motiva"** preenchida com um requisito ou risco do Trabalho 1 (`docs/analise.md`).
- **Uma** das decisões ganha a **tabela de trade-offs** (`## Tabela de trade-offs`): critérios nas linhas, alternativas nas colunas.
- Decisão é escolha de projeto, não detalhe de implementação. "Usar async/await" não é decisão de projeto.

**Pronto quando:** as 3 decisões têm alternativas reais e origem na Análise, e uma delas tem a tabela de trade-offs.

---

## Etapa 2 — Diagramas (`## Diagramas` e `docs/diagramas/`)

Vem da **Aula 7**. Confiram os dois diagramas.

- `docs/diagramas/contexto.md` e `docs/diagramas/dados.md`. Um diagrama de componentes é **opcional**.
- Cada arquivo começa com as **três linhas** em texto comum, fora do bloco do desenho: **Pergunta**, **Decisão que sustenta**, **Situação** (retrato da `main` no commit `<hash>`, ou proposta).
- Toda seta tem rótulo; no máximo 9 elementos por diagrama; a vigilância sanitária aparece no de contexto.
- Em `## Diagramas`: uma linha por diagrama (link, pergunta, decisão) e as **três divergências** entre o diagrama de dados e o `src/db.js`, cada uma marcada como proposta ou erro corrigido.
- Se algo mudou no projeto desde a Aula 7 (inclusive pelas etapas 4 e 7), **atualizem o diagrama ou declarem a divergência**.

**Pronto quando:** os dois diagramas têm as três linhas, setas rotuladas, e o que eles mostram bate com o código ou a diferença está declarada.

---

## Etapa 3 — ADRs (`docs/adr/` e `## ADRs`)

Vem da **Aula 8**. O trabalho pede **pelo menos 2 ADRs completos**.

**O ADR da migração SQLite → PostgreSQL é obrigatório.** Ele tem:

- **Contexto:** por que migrar, e por que só na Unidade 3.
- **Alternativas:** duas ou mais, contando a escolhida, com prós e contras. **Ficar em SQLite** é uma delas. Como subir o PostgreSQL (instalado, em contêiner ou como serviço) também entra aqui.
- **Decisão:** a escolhida, e por que não as outras.
- **Consequências:** positivas **e** negativas (a negativa concreta, e quem paga), riscos e o que fazer se der errado.
- **Rastreabilidade:** o requisito ou risco da Análise que a decisão atende.
- **Critério de validação:** o que precisa continuar igual depois da migração, e **que comando ou teste mostra isso**. "Testar bastante" não é critério.
- **Status e data** no cabeçalho.

**O segundo ADR:** quem saiu da stack preferencial já tem o da stack (`0001`). Quem ficou nela completa o par com a revisão da Aula 8 (se ela gerou um ADR novo), com o ADR da etapa 4, ou com outra decisão do projeto que passe nos três testes: custa caro reverter, mexe em mais de uma peça, alguém vai perguntar por quê.

Todo ADR fica listado em `## ADRs` de `docs/projeto.md`, com o link. O modelo está em `docs/adr/0000-modelo-adr.md`.

**Pronto quando:** há pelo menos 2 ADRs completos, o da migração entre eles, e todos listados em `## ADRs`.

---

## Etapa 4 — A mudança de contexto

**O que aconteceu.** O piloto do Prato Cheio já tem as primeiras doações reais cadastradas. Uma pessoa da equipe da Marta rodou os testes do projeto na máquina do piloto, com a configuração apontando para o banco real. A limpeza que os testes fazem apagou **todas as doações**. A Marta perdeu a lista da semana, e as ONGs ficaram sem saber o que tinham aceitado. Ninguém sabe dizer se foi erro de uma pessoa ou do jeito como o projeto está montado. A Marta pediu uma coisa: **que isso não possa acontecer de novo.**

Antes de decidir, olhem `src/db.js` e `vitest.config.js`: de onde vem o banco que os testes usam, o que pode trocá-lo e o que `limparBanco()` apaga.

O grupo faz três coisas, e só elas:

**4a. Registra a mudança em pelo menos uma decisão ou ADR**, com a regra da Aula 8. A candidata natural é o ADR da migração.

- Se a decisão **muda**: o ADR antigo recebe **só** `Status: substituído por ADR 000N`. O novo diz o que mudou no contexto, o que da decisão antiga cai e o que continua valendo, e cita o antigo.
- Se a decisão **continua**: entra `## Revisão — <data>` ao fim do mesmo ADR, com o que mudou, o que continua valendo e por quê.
- As seções originais de um ADR **nunca** são editadas. Se o ADR já foi substituído na Aula 8, a revisão é no ADR que o substituiu. Se ele já ganhou uma revisão, a nova entra depois dela.

**4b. Integra a história que a mudança exige**, por PR revisado e com CI verde. Ela conta como uma das histórias novas da etapa 7.

> **História:** os testes não conseguem apagar nem alterar dados de um banco que não seja o de teste, seja qual for a máquina ou a configuração de quem os roda.

Como fazer é decisão do grupo. Dois caminhos, sozinhos ou juntos: os testes usam sempre o próprio banco, sem que uma configuração de fora consiga trocá-lo; ou a limpeza confere qual banco está em uso e se recusa a apagar quando não é o de teste. O comentário "não precisa mexer agora" no topo do `db.js` não é proibição. Exemplo de critério de aceite que vira teste: *dado que o banco em uso não é o de teste, quando a limpeza é chamada, então ela falha e nenhuma doação é apagada.*

**4c. Ajusta ou acrescenta um requisito não-funcional ou um critério de validação** afetado (etapas 5 e 6), ou declara, com o motivo, que nenhum é afetado.

Nesta unidade o banco continua **SQLite**; o PostgreSQL só é implementado na Unidade 3. "Continua válido", com o motivo, é resposta aceita em 4a e 4c. A história de 4b entra em qualquer caso.

**Pronto quando:** a mudança está registrada num ADR (substituição ou `## Revisão`), a história está na `main` com teste e CI verde, e há um não-funcional ou critério ajustado (ou a declaração de que nenhum é afetado).

---

## Etapa 5 — Requisitos não-funcionais (`## Requisitos não-funcionais`)

Vem da **Aula 8**. **Mínimo 3**, cada um como **cenário mensurável**:

> Quando `<o estímulo, e em que condição>`, o sistema `<a resposta esperada>`, medido por `<número ou observação — e como se mede>`. E isso muda: `<a decisão afetada>` — a um custo de `<quem paga>`.

- Na tabela do template, o **cenário completo** vai na coluna **Requisito**; a **decisão afetada** e o **custo** vão em **Como afeta o design**.
- Pelo menos um nasce de uma **restrição do caso** (celular, conexão instável, um bairro). O orçamento limita alternativas dos ADRs; não vira cenário.
- Adjetivo sozinho ("robusto", "seguro", "escalável") não conta. Se a medida não pode dar errado, não é medida.

**Pronto quando:** há 3 cenários ou mais, cada um com medida, decisão afetada e custo.

---

## Etapa 6 — Critérios de validação do projeto (`## Critérios de validação do projeto`)

Vem da **Aula 8**. É o checklist que diz se o projeto serve.

- **6 critérios ou mais**, cada um respondível com **sim ou não** por outra pessoa olhando só o repositório.
- **Cada um com a fonte ao lado**: o arquivo ou a seção onde se confere (`docs/diagramas/dados.md`, `ADR 0002`, uma linha de `## Decisões de projeto`, uma história). "Aula 7" ou "hoje" não é fonte.
- Pelo menos um cobre a **migração**. Opinião ("o design está limpo", "a equipe concorda") não é critério.

**Pronto quando:** há 6 critérios ou mais, todos com fonte, e alguém de fora do grupo conseguiria responder cada um.

---

## Etapa 7 — Produto evoluído: histórias novas

O skeleton cresce. Cada história entra pelo fluxo de sempre: **branch → PR → revisão de outro integrante → CI verde → merge**.

- A história da etapa 4b é uma delas.
- As demais, o grupo escolhe. Sugestões (podem propor outras que o caso justifique):
  - O doador vê a situação das próprias doações: disponível ou aceita, e por qual ONG.
  - O voluntário marca a doação como coletada, o que permite medir o tempo entre "disponível" e "coletada".
  - O doador cancela uma doação que ainda está disponível.
  - O endereço de retirada só aparece para a ONG depois do aceite.
  - A Marta vê quantas doações foram aceitas no mês.
- Cada história entra com **critério de aceite** (Dado/Quando/Então), de preferência já transformado em teste, como no skeleton.
- Se uma história pede uma decisão (por exemplo, os estados que uma doação pode ter), registrem a decisão em `## Decisões de projeto` e liguem ao requisito de origem. Se ela muda o modelo de dados, atualizem o diagrama (etapa 2).

**Pronto quando:** as histórias estão na `main`, cada uma por PR revisado, com CI verde.

---

## Etapa 8 — Uso de IA (`## Uso de IA`)

O nível é **colaboradora**: a IA pode gerar rascunhos, sugerir alternativas e revisar. A decisão, as alternativas que valem e o que o grupo aceita perder continuam sendo de vocês.

Registrem **o que a IA fez** e **o que o grupo mudou** no resultado, com pelo menos um erro que vocês corrigiram e por quê. "Ajustamos o texto" não é registro.

**Pronto quando:** a seção diz, por parte do trabalho, o que veio da IA e o que o grupo mudou.

---

## Etapa 9 — Retrospectiva 2 (`docs/retrospectivas/2.md`)

A partir de `docs/retrospectivas/modelo.md`, **meia página**:

- o que decidimos nesta iteração (decisões, não tarefas);
- o que funcionou;
- o que mudaríamos;
- próximos passos;
- **autoavaliação de contribuição:** 100 pontos distribuídos entre os integrantes, cada um assina. Ela orienta as perguntas da defesa e não entra no cálculo da nota.

**Pronto quando:** o arquivo está na `main` com as quatro partes e a tabela de pontos assinada.

---

## Etapa 10 — Conferência final e entrega

**1. Confiram o checklist de correção** (abaixo), item a item, olhando só o repositório.

**2. Confiram o teto:** `docs/projeto.md` em até 4 páginas.

**3. Criem o branch `entrega-2`**, que congela o que foi entregue:

```bash
git checkout main
git pull
git checkout -b entrega-2
git push -u origin entrega-2
```

A correção olha esse branch. Commits nele depois do prazo não são considerados; a `main` pode seguir evoluindo.

**4. Cada integrante entrega no Teams**, na atividade do Trabalho 2, colando:

```
Repositório: <url do repositório do grupo>
Branch: entrega-2
```

---

## Como é corrigido

**Artefato do grupo (2,0)** — o checklist:

- [ ] Entregue no prazo e no formato (branch `entrega-2` + entrega individual no Teams).
- [ ] ADRs completos e coerentes, incluindo o da migração; diagramas legíveis e suficientes.
- [ ] Cada decisão ligada a um requisito ou risco da Análise.
- [ ] Histórias novas integradas por PR revisado, com CI verde.
- [ ] Proteção da `main` ligada, com a evidência em `docs/evidencias/protecao-main.md`.
- [ ] Não-funcionais com efeito explícito sobre o design.
- [ ] Critérios de validação do projeto, com fonte.
- [ ] Mudança de contexto registrada: decisão ou ADR, a história de 4b e o ajuste de 4c.
- [ ] Retrospectiva 2 e seção "Uso de IA" presentes.

**Defesa individual (1,0)** — em 22/10, conforme cada um termina a prova, 2 a 3 minutos comigo:

| O que | Pontos |
|---|:--:|
| Defender uma decisão ou ADR que você ajudou a tomar | 0,4 |
| Responder uma pergunta sobre **outra** parte do trabalho, que você não produziu | 0,3 |
| Fazer uma pequena modificação ao vivo, no documento ou no código | 0,3 |

Levem o **notebook com o repositório clonado**. As perguntas de sempre: *por que esta alternativa e não a outra?*, *quem paga?*, *como vocês saberiam que falhou?* — e, desta vez, *como a mudança de contexto afetou uma decisão do grupo?*

**Gatilho:** quem não tiver nenhuma contribuição registrada no repositório nesta iteração perde também a parcela do grupo.

---

## Perguntas frequentes

**A atividade da Aula 8 já vale nota. Preciso refazer?** Não. Ela é a base. Aqui vocês corrigem o que ficou fraco e completam o que falta.

**A mudança de contexto me obriga a mudar o ADR da migração?** Não. Ela obriga a **registrar** o que a mudança fez com a decisão. "Continua válido", com o motivo, numa seção `## Revisão — <data>`, é resposta aceita.

**Preciso implementar o PostgreSQL agora?** Não. Nesta unidade o banco é SQLite. A migração é decidida no ADR e executada na Unidade 3.

**Quantas histórias novas?** A da etapa 4b e mais as que o grupo conseguir integrar com qualidade. Uma história bem feita, com teste e PR revisado, vale mais que três pela metade.

**O documento estourou 4 páginas.** Cortem. ADRs e diagramas já ficam fora do limite; o documento é o índice das decisões, não o lugar de repetir o que está nos ADRs.
