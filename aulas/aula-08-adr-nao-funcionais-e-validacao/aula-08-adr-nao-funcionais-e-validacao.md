# Aula 08 — ADR, não-funcionais e validação do projeto · Retrospectiva 2

- **Unidade:** 2 — Projeto
- **Nível de IA:** IA para consulta
- **Evidência da aula:** o **ADR da migração SQLite → PostgreSQL** e a revisão dele diante da mudança de contexto; **3 não-funcionais** escritos como cenário mensurável; o **checklist de validação do projeto**
- **Observação:** última aula de conteúdo antes da noite de trabalho de 15/10 e da Prova 2. **O professor introduz uma mudança de contexto durante a aula**: o produto e as decisões do grupo precisarão responder a ela. Retrospectiva 2. Fecha a consulta da Unidade 2. **Vale 0,50:** duas entregas de 0,25 (8A e 8B)
- **Material:** `slides/aula-08-adr-nao-funcionais-e-validacao.pptx` (45 slides — cinco pontos, cada um com um infográfico, quatro atividades de discussão, três slides de referências e, no fim, sete slides **para estudar**: mapa da aula, glossário, um ADR completo, o custo da troca de banco, a anatomia de um critério de validação, o que levar e um autoteste; os sete últimos não são projetados na aula) · `docs/projeto.md`, `docs/adr/0000-modelo-adr.md` e `docs/retrospectivas/modelo.md` do repositório do grupo

> **Esta aula reúne duas.** O calendário original separava o registro de decisões (ADR) da validação do projeto. Os dois assuntos ficaram num único encontro, porque um alimenta o outro: o ADR diz o que foi decidido e por quê; a validação diz como saber se a decisão serve. A numeração seguinte andou uma aula: **a Prova 2 e a entrega do Trabalho 2 passam a ser a Aula 9, em 22/10**, e a quinta de 01/10 ficou sem encontro. As datas continuam em `calendario-2026-2.md`.

## Estrutura do encontro

A Aula 7 deu desenho às decisões da Aula 6. Hoje elas ganham **memória** (o ADR, que guarda o porquê), **capacidade de mudar com registro** (a revisão, quando o contexto muda) e **critério** (os não-funcionais e o checklist, que dizem como saber se o projeto serve). O encontro termina com o ADR da migração e o checklist no repositório, entrados por PR.

| Faixa | O que acontece |
|---|---|
| 19h00–19h12 | Retomada: diagramas da Aula 7 no repositório, as 3 decisões da Aula 6, CI verde e `main` protegida |
| 19h12–20h22 | **Exposição completa** — os cinco pontos em sequência: o ADR guarda o porquê, quando uma decisão vira ADR, revisitar, não-funcional como cenário, validar o projeto |
| 20h22–22h20 | **Frente única de trabalho** — os grupos aplicam no projeto tudo o que foi apresentado: ADR da migração → revisão (quando o professor avisar) → três não-funcionais → checklist e revisão interna → Retrospectiva 2 + PRs |
| 22h20–22h30 | Socialização, conferência das entregas e gancho para a noite de 15/10 |

**Hoje o conteúdo vem todo no começo.** A exposição soma **70 minutos seguidos**, com atividades curtas de discussão embutidas (em voz alta, pela turma toda, sem entrega e sem nota). Terminada a exposição, **o resto do encontro é dos grupos**: aplicar no próprio projeto, numa **frente única de trabalho** (um backlog só, no mesmo repositório), o que acabou de ser apresentado. Quem for ao repositório sem ter ouvido um dos cinco pontos vai travar na etapa que o usa — por isso o conteúdo não se repete durante a produção.

**Mapa da frente única (≈118 min):**

| Etapa | Faixa | O que sai no repositório |
|---|---|---|
| 1. ADR da migração | 20h22–20h57 | `docs/adr/000N-migracao-postgresql.md` + PR revisado por outro integrante |
| 2. Revisão do ADR | a partir do aviso (≈21h00), ≈15 min | ADR antigo com status atualizado e o novo (ou a revisão explícita) |
| 3. Três não-funcionais | ≈21h15–21h30 | `## Requisitos não-funcionais` |
| 4. Checklist e revisão interna | ≈21h30–21h57 | `## Critérios de validação do projeto` + 2 fragilidades apontadas por um integrante revisor, com a resposta da equipe, no PR do próprio grupo |
| Fechamento da produção | ≈21h57–22h20 | Retrospectiva 2 (`docs/retrospectivas/2.md`), PRs mergeados, página da consulta |

**Nível de IA hoje, na prática: consulta.** A IA pode esclarecer um conceito, dar um exemplo de ADR de outro domínio e apontar o que falta num ADR que vocês já escreveram. **Não escreve** o ADR, os cenários nem o checklist: **a decisão, as alternativas que valem a pena, o que o grupo aceita perder e o critério de validação são de vocês.** Um ADR gerado por IA costuma trazer alternativas de palha e só consequências boas — exatamente o que o ADR existe para evitar. Se usarem a IA, registrem em `## Uso de IA` o que ela fez e o que vocês mudaram. Na defesa do Trabalho 2, em 22/10, não há IA: cada integrante explica qualquer ADR, cenário ou critério do grupo.

## Retomada (12 min)

Três checagens:

- **Os dois diagramas da Aula 7 em `docs/diagramas/`**, com as três linhas de divergência com o `src/db.js`. São o insumo direto de hoje: o diagrama de componentes mostra o custo da migração, e as divergências dizem o que o modelo ainda não tem.
- **As 3 decisões da Aula 6 em `docs/projeto.md`**, cada uma com a origem na análise. Algumas viram ADR hoje.
- **CI verde e `main` protegida.** Quem estiver vermelho, ou com a `main` ainda desprotegida, resolve antes de a frente de trabalho passar da etapa 2, não na Aula 9.

Devolver a Aula 7 em uma frase: *vocês desenharam para que alguém de fora verifique; hoje registram por que decidiram assim e definem como saber se serve.*

## Objetivo da aula

Sair do encontro com o **ADR da migração** completo — alternativas reais, consequência negativa e critério de validação —, **revisado** diante da mudança de contexto, com **três não-funcionais** escritos de modo que alguém consiga medi-los e com um **checklist** que outra pessoa responde com sim ou não.

## Pontos a abordar

### Exposição, parte 1 — decidir e registrar (~38 min)

**1. O ADR guarda o porquê.**
O código mostra **o que** foi feito. O **porquê** é o primeiro a se perder: quem chega depois vê a decisão e não vê o que foi descartado, nem o que a motivou. O ADR (*Architecture Decision Record*) é um arquivo por decisão, em `docs/adr/`, com **contexto**, **alternativas**, **decisão** e **consequências** — o modelo está em `docs/adr/0000-modelo-adr.md` e já inclui status, data e rastreabilidade.

- *Quatro regras:* **uma decisão por arquivo**; **alternativas que alguém defenderia** (alternativa de palha, escrita só para perder, não conta); **consequências incluem a negativa** — o que se perde e quem paga; **rastreabilidade** para o requisito ou risco da Análise.
- *Como se relaciona com o documento de projeto:* a tabela `## Decisões de projeto` é o **índice** (uma linha por decisão); o ADR é a **decisão em profundidade**. Nem toda linha da tabela vira ADR.
- *Exemplo no caso:* o comentário no topo do `src/db.js` diz que o arquivo será refatorado para PostgreSQL na Unidade 3. O código diz **o que vai acontecer**; não diz por que, nem o que foi descartado.
- *Contraponto:* "Decidimos usar X." Um ADR de uma linha é uma etiqueta sem história — daqui a seis meses ninguém sabe se X foi escolhido ou foi só o primeiro que apareceu.

**2. Quando uma decisão vira ADR — e o caso da migração.**
Vira ADR a decisão que **custa caro reverter** (o critério da Aula 6), que **mexe em mais de uma peça** ou que **alguém vai perguntar por quê**. A disciplina exige **um ADR de todos os grupos** (a migração) e **um segundo só de quem saiu da stack preferencial** (a escolha da stack):

| ADR | Quando | Entrega |
|---|---|---|
| **Escolha da stack** | só se o grupo saiu da stack preferencial | `docs/adr/0001-escolha-da-stack.md` · Trabalho 1 |
| **Migração SQLite → PostgreSQL** | sempre | Trabalho 2 · executada na Unidade 3 |

O ADR da migração só está pronto quando responde a cinco perguntas:

- **Contexto:** por que migrar — e por que só na Unidade 3?
- **Alternativas:** ficar em SQLite é uma alternativa real? E **como subir o PostgreSQL** — instalado na máquina, em contêiner (o GitHub Codespaces entra aqui) ou como serviço gerenciado? Essa escolha é do grupo e entra aqui; contêiner é uma das saídas, não a obrigatória.
- **Consequências:** o que passa a custar (instalar, operar, rodar no CI) e quem paga.
- **Riscos:** o que pode quebrar na troca e como voltar atrás.
- **Validação:** o que precisa continuar igual depois da migração — e que comando mostra isso.

- *Exemplo no caso:* o diagrama de componentes da Aula 7 mostra o `db.js` como o único arquivo que conhece o banco, e a `query()` devolve `{ rows }` justamente para conter a troca. Isso é **evidência do custo** — o ADR a usa como consequência (o custo está contido) e como critério de validação (o que muda fora do `db.js` deve ser pouco e conferível).
- *Contraponto:* "PostgreSQL é melhor." Melhor para quê, para quem e a que custo num piloto de orçamento próximo de zero? E "vamos testar bastante" não é critério: **que teste, rodando como, mostra que nada mudou?**

**3. ADR não é lápide: revisitar quando o contexto muda.**
Decisões envelhecem. Quando o contexto muda, a decisão é **revisada** — e o registro mostra o que mudou e por quê. O ADR antigo **não se apaga nem se reescreve em silêncio**: ganha o status **substituído** (`proposto → aceito → substituído`), e o ADR novo o cita. Antes de mexer em qualquer arquivo, três perguntas:

- **O que mudou no contexto?** A resposta é a primeira frase do ADR novo.
- **O que da decisão antiga cai?** O que o ADR antigo perde: ele passa a *substituído*.
- **O que continua de pé?** O que o ADR novo preserva, e por quê.
- **E o diagrama ou o modelo de dados?** Conferência final: diagrama atualizado, ou a divergência declarada.

- *"Continua válido" também é uma revisão.* Vale, desde que registrada e com o motivo.
- *Contraponto:* tratar a mudança como **tarefa** ("acrescentar um campo") em vez de como **decisão revisada**. O código muda, o registro não, e em duas semanas ninguém sabe que a decisão antiga deixou de valer.
- *Hoje:* durante a frente de trabalho, o professor introduz uma mudança de contexto. Quem tiver o ADR da migração escrito terá exatamente o que revisar.

### Exposição, parte 2 — o projeto serve? (~32 min, em seguida, sem intervalo de produção)

**4. Não-funcional que ninguém mede é desejo.**
Desempenho, segurança, manutenibilidade e escalabilidade raramente estão no pedido — e é o que costuma derrubar o sistema. Só vale como requisito aquele que tem **cenário**, **medida** e uma **decisão que muda por causa dele**. A forma, em quatro linhas:

```
Quando    <o estímulo, e em que condição>
o sistema <a resposta esperada>
medido por <número ou observação — e como se mede>
e isso muda: <a decisão afetada> — a um custo de <quem paga>
```

- *Exemplo no caso:* "manutenível" vira *quando o banco trocar, nenhuma regra de negócio muda — o diff da migração fora do `db.js` e do `repositorio.js` não toca regra, conferido na revisão do PR*. Cada grupo define os seus números a partir do caso.
- *Cada não-funcional força uma decisão — e alguém paga.* Se o requisito não muda nenhuma decisão, é adjetivo e não precisa estar no documento. Um não-funcional pode, legitimamente, ser declarado **fora do piloto**: é uma decisão, e fica escrita.
- *Contraponto:* "o sistema deve ser robusto, seguro e escalável" — sem número, sem como medir, sem decisão. E o excesso: doze requisitos de qualidade para um piloto de um bairro. **Três bem escritos valem mais que doze adjetivos.** Cuidado com a **restrição** disfarçada de requisito: "orçamento próximo de zero" não se mede nem se testa; ela limita as alternativas dos ADRs.

**5. Validar o projeto antes de construir.**
**Verificar** é perguntar se construímos **certo**: o que foi feito bate com o que foi especificado (o código com o projeto, o projeto com a análise). **Validar** é perguntar se construímos **o certo**: o que foi especificado resolve o problema de quem o tem — a Marta, a ONG, o voluntário. Antes da Unidade 3 não há código novo; o checklist de hoje confere duas coisas do **projeto**: se ele é **coerente** com a análise e se **cobre o caso**. Um **critério de validação** só vale se outra pessoa, olhando o repositório, responde **sim ou não** — e diz de onde vem:

```
V toda história do backlog cabe no diagrama de dados     (docs/diagramas/dados.md)
V cada decisão cita o requisito ou risco de origem        (## Decisões de projeto)
V toda divergência com o db.js está declarada             (docs/diagramas/dados.md)
V cada não-funcional tem um jeito de medir                (## Requisitos não-funcionais)
V o ADR da migração diz o que deve continuar igual        (docs/adr/000N)
C cada necessidade da ONG tem história ou decisão         (docs/analise.md)
```

`V` marca o critério de **verificação** (o projeto confere com o que foi especificado) e `C`, o de **cobertura do caso** (o projeto responde ao problema de quem o tem — a parte de validar que é possível antes do código). Esses seis são exemplos de **forma**; cada grupo escreve os seus. Junto do checklist o grupo **pode** incluir uma **fragilidade própria**: todo projeto tem um ponto que, se falhar, derruba o resto — **ponto único de falha**, **decisão sem dono**, **regra sem teste**, **regra só no cliente** (confere na tela do celular e o servidor não repete). Nomeá-la, com o que o grupo faria se ele falhar, é mais útil do que fingir que não existe — e **limitação reconhecida vale ponto na defesa individual**; limitação escondida e descoberta, não.

- *Rastreabilidade no código:* o ADR e a decisão aparecem no PR (`Refs: ADR 0002`) e num comentário do código que a implementa. É o fio do requisito ao ADR, e do ADR ao PR.
- *Contraponto:* "o design está limpo", "a equipe concorda", "está bem documentado" — opiniões, não critérios. E o checklist que só lista o que já está pronto.

## Produção contínua (todos os grupos)

- Escrever o **ADR da migração de SQLite para PostgreSQL** em `docs/adr/` (próximo número livre, a partir do modelo `0000`) e listá-lo na seção `## ADRs` de `docs/projeto.md`. Se o grupo saiu da stack preferencial e ainda não tem o ADR 0001, escrevê-lo também.
- **Revisar o ADR diante da mudança de contexto**: o antigo com status atualizado, o novo (ou a revisão explícita) com o que mudou e por quê.
- Preencher `## Requisitos não-funcionais` com **3 não-funcionais** em forma de cenário, cada um ligado à decisão que afeta.
- Preencher `## Critérios de validação do projeto` com o checklist (cada linha com a fonte).
- Escrever a **Retrospectiva 2** em `docs/retrospectivas/2.md` (modelo em `docs/retrospectivas/modelo.md`, meia página) com a **autoavaliação de contribuição por pares**.
- **Fica para a noite de 15/10:** evoluir o produto com novas histórias, integradas por **PR revisado** e CI verde. Hoje não há faixa para isso, e isso não entra nos 0,50.
- Escrever a página de hoje da **consulta manuscrita** e **fechar a consulta da Unidade 2**: o que um ADR precisa ter, o cenário de um não-funcional, a diferença entre verificar e validar, o que torna um critério sim ou não. Consolidar o documento de projeto (até 4 páginas, fora diagramas).

**Entregas do encontro (2 × 0,25, pelo Teams):**

- **8A — ADRs:** o link do commit — que entra por PR, como tudo desde a Aula 6 — com o **ADR da migração** completo em `docs/adr/`, listado em `## ADRs`, e a **revisão** dele diante da mudança de contexto (ADR antigo com status atualizado e o registro do que mudou).
- **8B — Validação:** o link do commit com `## Requisitos não-funcionais` (3 cenários), `## Critérios de validação do projeto` (o checklist) e `docs/retrospectivas/2.md` (a Retrospectiva 2).

Enunciado e prazo em `enunciado-atividade-ava.md`. Correção binária: entregou no prazo e no formato, pontuou — em cada uma das duas.

> **Sem mudança no template hoje.** As seções `## ADRs`, `## Requisitos não-funcionais` e `## Critérios de validação do projeto` já existem no `docs/projeto.md` que veio do template, assim como `docs/adr/0000-modelo-adr.md` e `docs/retrospectivas/modelo.md`. O que se cria hoje são os arquivos `docs/adr/000N-*.md` e `docs/retrospectivas/2.md`.

## Frente única de trabalho — aplicar no projeto (em grupo)

Hoje não há quatro trabalhos separados: há **uma frente de trabalho**, no repositório do grupo, e quatro **etapas** dela. Todas são obrigatórias, na ordem **1 → 2 → 3 → 4** (a 2 só começa quando o professor avisa). Os integrantes se dividem como quiserem, desde que cada etapa entre por PR revisado por quem não a escreveu. Todo o conteúdo necessário já foi apresentado na exposição; durante a frente, o professor circula, não ensina de novo.

**1. ADR da migração SQLite → PostgreSQL (≈28 min + 7 do PR, até 20h57).**
- *Entrega:* `docs/adr/000N-migracao-postgresql.md`, listado em `## ADRs` de `docs/projeto.md`.
- *Checklist:* **2 ou mais alternativas reais, contando a escolhida**, entre elas ficar em SQLite · a escolha de **como subir o PostgreSQL** (instalado, contêiner ou serviço) comparada, não imposta · **consequências positivas e negativas**, com a negativa concreta e **quem paga** · **riscos** e o que fazer se der errado · **critério de validação** observável — que teste, rodando como, mostra que o comportamento não mudou · **rastreabilidade** para um requisito ou risco da Análise · **status e data**.
- *Armadilha frequente:* o ADR de uma linha, a alternativa de palha ("não ter banco") e o "PostgreSQL é melhor". A pergunta de correção é sempre a mesma: *se alguém reler isto daqui a seis meses, o que ele não consegue saber?*

**2. Revisar o ADR diante da mudança de contexto (≈15 min, a partir do aviso do professor, por volta de 21h00).**
- *Entrega:* o ADR antigo com **status atualizado** e referência ao novo; o ADR novo (ou a revisão explícita do mesmo) com **o que mudou no contexto**, **o que cai** e **o que continua de pé**.
- *Checklist:* o ADR antigo não foi apagado nem reescrito em silêncio · há referência cruzada nos dois · o contexto novo está escrito, não só o código mudado · está dito o que da decisão antiga **continua valendo** · o efeito sobre o diagrama de dados ou sobre o `db.js` é apontado (diagrama atualizado, ou divergência declarada).
- *Armadilha frequente:* tratar a mudança como tarefa — acrescentar o que falta no código e seguir como se nada tivesse sido decidido. "Continua válido" é resposta aceita, **com** o motivo.

**3. Três não-funcionais como cenário mensurável (≈15 min, por volta de 21h15).**
- *Entrega:* a tabela de `## Requisitos não-funcionais` com 3 linhas: em **Requisito**, o **cenário** completo (condição, resposta, medida); em **Como afeta o design**, a **decisão** (ou o ADR) que ele afeta e o que ela **custa**.
- *Checklist:* cada cenário diz **como se mede** · pelo menos um nasce de uma **restrição do caso** (celular, conexão instável, um bairro; o orçamento limita as alternativas dos ADRs e não vira cenário) · cada um aponta a **decisão que muda por causa dele** · nenhum é um adjetivo ("robusto", "seguro") · um sem decisão afetada saiu da lista. Um quarto pode aparecer como **"fora do piloto"**, declarado, sem contar entre os três.
- *Armadilha frequente:* copiar os quatro nomes (desempenho, segurança, manutenibilidade, escalabilidade) sem número nem medida. E a restrição disfarçada de requisito.

**4. Checklist de validação e revisão interna (≈27 min, por volta de 21h30).**
- *Parte 1 (≈12 min):* o checklist em `## Critérios de validação do projeto`, **6 critérios ou mais**, cada um com a **fonte** ao lado (ADR, diagrama, história, decisão) e respondível com sim ou não por outra pessoa.
- *Parte 2 (≈15 min):* **dentro da equipe**, um integrante que **não escreveu o checklist** assume o papel de revisor: lê só o repositório (sem ouvir explicação de quem escreveu), responde sim ou não a cada linha e aponta **2 fragilidades** com justificativa e o critério que as detectaria, como comentário no PR do próprio grupo. Quem escreveu responde a cada uma — **corrige, aceita como limitação ou contesta com motivo** — e a resposta pode ser concluída ainda na frente de trabalho ou depois, até 23h59.
- *Entrega:* o checklist no repositório e, no PR do próprio grupo, as **2 fragilidades apontadas pelo revisor interno** com a resposta da equipe.
- *Checklist:* cada critério tem fonte · nenhum é opinião ("limpo", "bem documentado") · pelo menos um critério cobre a migração · as fragilidades apontadas têm justificativa, não adjetivo · o revisor interno não é quem escreveu o checklist · a resposta da equipe está escrita.
- *Armadilha frequente:* o checklist de auto-confirmação, que só lista o que já está pronto, e a revisão interna que vira elogio.

## Enquanto circula pelos grupos

| Sintoma | Intervenção |
|---|---|
| ADR de uma linha | "Se alguém reler isto daqui a seis meses, o que ele não consegue saber?" |
| Alternativa de palha | "Quem defenderia essa outra opção? Com que argumento?" |
| Só consequências boas | "O que se perde? Quem paga?" |
| "PostgreSQL é melhor" | "Melhor para quê, e a que custo num piloto com orçamento próximo de zero?" |
| Critério "testar bastante" | "Que comando diz que nada quebrou? O que precisa continuar igual?" |
| Contêiner escolhido sem comparar | "Quais eram as outras maneiras de subir o banco? Por que não elas?" |
| ADR antigo apagado ou reescrito | "Onde está o registro de que um dia foi assim?" |
| Mudança tratada como tarefa | "Que decisão de vocês dependia do que mudou?" |
| Não-funcional "robusto" ou "seguro" | "Robusto a quê? Em que condição? Como medem?" |
| Não-funcional sem decisão afetada | "Que decisão muda por causa disto? Se nenhuma, é adjetivo." |
| Checklist de auto-confirmação | "Alguém de fora responde sim ou não a esta linha?" |
| Grupo pronto cedo | Peça a fragilidade que mais temem e o critério que a pegaria; depois, a página da consulta. |

## Fechamento (10 min)

- Dois grupos leem a seção **Consequências** do ADR da migração, em especial a negativa; a turma faz **uma** pergunta a cada um: *quem paga?*
- Um grupo mostra a **revisão** do ADR: o que mudou, o que caiu e o que continua valendo.
- Um grupo lê um **cenário** de não-funcional e a turma tenta dizer como mediria.
- Conferir no telão que o ADR, as seções do `docs/projeto.md` e `docs/retrospectivas/2.md` entraram no repositório de cada grupo **por PR**, e que a `main` de todos está protegida.
- **Gancho para 15/10 e 22/10:** a noite de **15/10** é para fechar a iteração — implementar o que falta, corrigir o CI, revisar PRs pendentes e consolidar o documento de projeto (até 4 páginas). A **22/10 (Aula 9)** é a Prova 2 e a entrega e defesa do Trabalho 2: sem IA e só com a consulta manuscrita, cada integrante explica qualquer ADR, cenário, critério ou diagrama do grupo — inclusive os que não escreveu.
