# Aula 12 — Revisão de código e refatoração

- **Unidade:** 3 — Construção
- **Nível de IA:** IA para consulta
- **Evidência da aula:** o **PR da migração para PostgreSQL** — testes verdes antes e depois, `src/doacoes.js` fora do diff, CI rodando sobre PostgreSQL —, **revisado** por quem não o escreveu, e o `docs/refatoracoes.md` com as duas refatorações do Trabalho 3
- **Observação:** o professor introduz uma mudança de contexto durante a aula — o produto e as decisões do grupo precisarão responder a ela. **Vale 0,25:** a terceira das quatro entregas de aula da Unidade 3. A migração de hoje é a **Refatoração 1** do Trabalho 3, e a revisão é o registro de revisão que ele pede
- **Material:** `slides/aula-12-revisao-de-codigo.pptx` (33 slides — quatro pontos, cada um com um infográfico-resumo e um **exemplo resolvido no Prato Cheio**, quatro exercícios em sala, quatro slides de referências e, no fim, cinco slides **para estudar**: mapa da aula, glossário, um registro de refatoração completo, o que levar e um autoteste; os cinco últimos não são projetados na aula) · `docs/adr/` (o ADR da migração), `src/db.js`, `src/repositorio.js`, `.github/workflows/ci.yml` e `docs/refatoracoes.md` do repositório do grupo

## Estrutura do encontro

A Aula 11 deixou a suíte verde na `main` e o PostgreSQL respondendo. Hoje o banco muda por baixo do código — e a pergunta é se **as regras de negócio percebem**. Elas não podem perceber: quem prova isso são os testes da Aula 11. Depois, o código passa por outros olhos, e o grupo escolhe **a segunda refatoração** pelo motivo certo. O exemplo que atravessa os quatro pontos é o mesmo das Aulas 10 e 11: **o doador cancela uma doação**.

| Faixa | O que acontece |
|---|---|
| 19h00–19h12 | Retomada: PR de testes da Aula 11 entregue, suíte verde na `main`, PostgreSQL respondendo, ADR da migração à mão |
| 19h12–19h50 | Exposição — bloco 1: refatorar com a rede, o contrato da camada de dados e onde ele vaza · exercícios C1 e C2 |
| 19h50–20h40 | Produção A — a migração em passos pequenos, o PR aberto, o CI verde sobre PostgreSQL |
| 20h40–21h12 | Exposição — bloco 2: revisão de código, cheiros e reuso · exercícios C3 e C4 |
| 21h12–22h20 | Produção B — a revisão do PR da migração, a segunda refatoração, o registro em `docs/refatoracoes.md` |
| 22h20–22h30 | Socialização, conferência das entregas e gancho para a Aula 13 |

A exposição soma **70 minutos** nos dois blocos, e **26 deles são exercícios** — feitos em duplas ou trios, sem entrega e sem nota. Cada ponto segue a mesma ordem: o conceito, um infográfico que o resume, o **exemplo resolvido no Prato Cheio** e o exercício, para vocês fazerem logo depois de ver feito.

**Nível de IA hoje, na prática: consulta.** A IA pode **explicar** uma mensagem de erro do `pg` ou do `vitest`, a diferença entre um tipo do SQLite e um do PostgreSQL, o que é um cheiro de código. Ela **não escreve** a migração, a refatoração nem os comentários da revisão: hoje o que se avalia é a sua leitura do código. No PR, a seção `## Uso de IA` diz **o que vocês perguntaram e o que fizeram com a resposta** — ou "não usamos". Na defesa do Trabalho 3, cada integrante explica uma refatoração e como os testes a protegeram.

## Retomada (12 min)

Três checagens:

- **A Aula 11 entregue.** O PR de testes integrado, ou aberto e revisado; a `main` protegida.
- **A suíte verde na `main`, hoje.** É o "verde antes" da migração. Quem estiver vermelho resolve **antes** de tocar no banco: sem verde antes, o verde depois não prova nada.
- **O PostgreSQL respondendo** pelo caminho escolhido no ADR (instalação local, contêiner ou serviço gerenciado), e o **ADR da migração** aberto: é ele que diz o que se decidiu e o que se aceitou perder.

Devolver a Aula 11 em uma frase: *vocês escreveram testes que falham quando a regra falha; hoje eles trabalham — o banco muda e eles dizem se algo mudou junto.*

## Objetivo da aula

Sair do encontro com o **PR da migração** — o banco trocado sem que as regras percebam, provado pelos mesmos testes verdes antes e depois e pelo CI rodando sobre PostgreSQL —, **revisado** por um integrante que não o escreveu, e com as **duas refatorações** do Trabalho 3 registradas em `docs/refatoracoes.md`.

## Pontos a abordar

### Bloco 1 — refatorar com a rede (~38 min)

**1. Refatorar: mudar a estrutura sem mudar o comportamento.**
Refatorar é melhorar **como** o código está organizado sem mudar **o que** ele faz para quem o usa. Quem confere que o comportamento ficou são os testes que **já existiam** — por isso a regra é verde antes, um passo pequeno, verde depois. Refatorar não é reescrever: reescrever troca tudo de uma vez e só descobre no fim o que quebrou.

- *Os dois chapéus:* ou se **refatora** (a estrutura muda, os testes não mudam, a suíte fica verde do começo ao fim), ou se **acrescenta comportamento** (um teste novo nasce vermelho e fica verde). Nunca os dois no mesmo commit; quem troca de chapéu, commita antes.
- *O passo pequeno:* mexer → `npm test` → verde, commitar; vermelho, ler **o nome do teste** e **voltar o último passo**. O teste vermelho estava certo ontem: o que mudou foi o comportamento.
- *O sinal de alarme:* se um teste antigo **precisou mudar**, não foi refatoração — o comportamento mudou, e isso é outro PR.
- *Exemplo no caso:* a migração do grupo em seis passos, com o mesmo número de testes verdes em cada um, e o vermelho do terceiro passo tratado sem tocar no teste.
- *Exercício C1 — Refatoração ou mudança de comportamento? (6 min, em duplas):* seis commits de um PR "Migra para PostgreSQL"; quais ficam, quais vão para outro PR, e qual deles é o alarme.

**2. A troca de banco por dentro: o contrato e onde ele vaza.**
Desde a Unidade 1, o `src/db.js` promete uma coisa só: `query(sql, valores)` devolve `{ rows }`. Tudo acima dele — `repositorio.js`, `doacoes.js`, `app.js` — depende **dessa promessa**, não do SQLite. É isso que deixa trocar o banco **embaixo do contrato** sem as regras perceberem. O contrato **vaza** quando o código de cima depende de um detalhe que ele não prometia: o tipo que o banco devolve, um campo que só um driver tem, uma função que só um dialeto conhece.

- *Onde costuma vazar nesta troca:* a data (`DATE`) volta como objeto `Date`, com hora e fuso; a contagem (`COUNT(*)`) volta como texto; o número de linhas alteradas tem outro nome no `pg`; funções e tipos do SQLite (`datetime('now')`, `AUTOINCREMENT`, 0/1 no lugar de booleano) não existem no PostgreSQL; um id que não é número passa a estourar.
- *A regra do conserto:* conserta-se **abaixo do contrato** — no `db.js` (a forma e os tipos do que volta) ou no SQL do `repositorio.js` (o dialeto). **Nunca** em `src/doacoes.js`, **nunca** no teste.
- *Exemplo no caso:* depois da troca, "mostra a doação publicada na lista" fica vermelho — a validade, que era `'2026-12-20'`, volta com hora. Três consertos errados e o certo, numa linha do `db.js`.
- *Exercício C2 — Onde o contrato vaza? (7 min, em duplas):* quatro trechos de um produto depois da troca de driver; o que muda no comportamento, que teste avisaria e onde se conserta.

### Bloco 2 — outros olhos no código (~32 min, depois da Produção A)

**3. Revisão de código: achar problema, não julgar pessoa.**
A revisão existe para achar o defeito **antes do usuário** e para que **mais de uma pessoa entenda** cada parte do produto. O comentário é sobre o código, nunca sobre quem o escreveu. Aprovar sem ler não evita atrito: só adia o defeito.

- *A ordem de leitura do revisor:* (1) o PR faz **o que diz** — e os testes provam? (2) algum **teste mudou** — por quê? (3) as **camadas** e o contrato foram respeitados? (4) há **cheiro** que vai doer na próxima mudança? (5) nomes e legibilidade. Estilo que uma ferramenta confere não é assunto de revisão.
- *Um comentário que se aplica:* **onde** (arquivo e linha) · **o quê** (o problema, com o caso concreto) · **por quê** (o que acontece se ficar assim) · **sugestão** · **bloqueia ou não**. Quando não tiver certeza, pergunte.
- *PR pequeno se revisa; PR gigante se aprova.* A atenção do revisor cai depois de algumas centenas de linhas — é mais um motivo para o incremento pequeno da Aula 10.
- *Exemplo no caso:* a revisão do PR da migração do cancelamento — três comentários (um bloqueia, um pergunta, um sugere), um comentário fraco reescrito e a resposta do autor na seção `## O que a revisão mudou`.
- *Exercício C3 — Reescreva o comentário (6 min, em duplas):* quatro comentários de revisão que não servem, reescritos com onde, o quê, por quê, sugestão e se bloqueia.

**4. Cheiros de código, reuso e o que pagar primeiro.**
Cheiro não é defeito: é **sinal** de que a próxima mudança vai doer. Os mais comuns num produto do tamanho do de vocês: **duplicação**, **função longa**, **nome que engana**, **parâmetro-bandeira** (um booleano que faz a função fazer duas coisas), **regra fora da camada** e **comentário que explica o que o nome deveria dizer**. O código gerado por IA acrescenta um risco: ela **não olha o resto do repositório**, então tende a duplicar o que já existe e a seguir outro padrão.

- *Reuso pela regra de três:* na primeira vez, escreva; na segunda, desconfie; na **terceira**, extraia. Extrair antes costuma criar a abstração errada — que é mais cara que a duplicação.
- *O que pagar primeiro:* não o cheiro mais feio, mas o que está **no caminho da próxima mudança**. Primeiro se torna a mudança fácil (refatoração, verde–verde); depois se faz a mudança fácil (comportamento novo, com teste novo), em outro commit.
- *Exemplo no caso:* aceitar, cancelar e coletar começam com a mesma busca e o mesmo "não encontrada" — na terceira, extrai-se `buscarOuFalhar`. A extração revela que a cópia da coleta já tinha divergido da mensagem: unificá-la é **comportamento**, e vai em commit à parte.
- *Exercício C4 — Três cheiros, uma escolha (7 min, em trios):* uma função da coleta com quatro cheiros; nomeá-los e decidir qual pagar primeiro, dada a próxima mudança do backlog.

## Produção em sala — entrega do encontro

Na Unidade 3 não há menu de opções: o trabalho de sala **é** a construção do produto. Hoje a produção vem em duas faixas, cada uma depois do bloco que ela usa.

**Produção A (19h50–20h40) — a migração.**

- **A1 · Verde antes.** Na `main`, `npm test` com SQLite: anotar **o número de testes verdes** (vai para o `docs/refatoracoes.md`). Abrir a branch da migração.
- **A2 · O `src/db.js`.** Trocar o driver para `pg` (`npm install pg`) **mantendo o contrato**: `query()` continua devolvendo `{ rows }` — e o que mais o produto usa dele. O schema vai para o dialeto do PostgreSQL; `limparBanco` continua limpando. Apontar os testes para **um banco só deles** (no `vitest.config.js`), não para o de desenvolvimento, que o `limparBanco` apagaria.
- **A3 · O `src/repositorio.js`.** Marcadores `?` → `$1, $2, …` e as funções do dialeto. **Rodar a suíte a cada arquivo.** Vermelho: ler o nome do teste e consertar **abaixo do contrato** (ponto 2). `src/doacoes.js` não se toca.
- **A4 · O CI e o PR.** Descomentar o bloco `services: postgres` e a `DATABASE_URL` no `.github/workflows/ci.yml`; abrir o **PR da migração** e conferir no log que os testes rodaram sobre PostgreSQL e que `src/doacoes.js` **não aparece no diff**.

**Produção B (21h12–22h20) — a revisão e a segunda refatoração.**

- **B1 · A revisão.** Um integrante que **não escreveu** a migração revisa o PR na aba *Files changed*, na ordem do ponto 3, e deixa **3 comentários ou mais** em linha. O autor responde a cada um e ajusta em commits; a descrição do PR ganha a seção `## O que a revisão mudou`.
- **B2 · A segunda refatoração.** Escolher um cheiro do produto **pela dor que ele causa na próxima mudança** — a mudança de contexto de hoje ajuda a escolher. Se a parte não tiver teste, o teste vem antes. Verde antes, refatorar, verde depois, em PR à parte; se não der tempo de aplicar hoje, ela fica escolhida e registrada.
- **B3 · O registro.** Preencher o `docs/refatoracoes.md` (o modelo já está no repositório): a **Refatoração 1** — a migração: motivo (o ADR), o que mudou, o que não mudou, os testes antes e depois e o link do CI verde — e a **Refatoração 2** — o cheiro atacado e a dor que ele causava, e o que mudou e a evidência, quando aplicada.

```markdown
## O que a revisão mudou

- <o problema apontado> → <o que mudou, com o commit> — ou <por que ficou como estava>
- ...
- ...
```

**Entrega do encontro (0,25, pelo Teams):** o **PR da migração** (aberto ou integrado) com o CI verde sobre PostgreSQL, `src/doacoes.js` fora do diff, a revisão de quem não é o autor com 3 comentários ou mais, a seção `## O que a revisão mudou` e o `Uso de IA` preenchido; e o `docs/refatoracoes.md` com as duas refatorações. Enunciado e prazo em `enunciado-atividade-ava.md`. Correção binária: entregou no prazo e no formato, pontuou.

> **Sem mudança no template hoje.** O `docs/refatoracoes.md` já tem as seções da Refatoração 1 e da Refatoração 2, e o bloco do PostgreSQL já está comentado no `.github/workflows/ci.yml`. A seção `## O que a revisão mudou` é escrita pelo grupo na descrição do PR.

## Enquanto circula pelos grupos

| Sintoma | Intervenção |
|---|---|
| Suíte vermelha na `main` antes de começar | "De quem é esse vermelho? Sem verde antes, o verde depois não prova nada. Resolvam isso primeiro." |
| `db.js` e `repositorio.js` trocados de uma vez, sem rodar no meio | "Qual passo quebrou? Voltem ao último verde e deem um passo por vez." |
| Teste vermelho e o grupo mexendo no `expect` | "Esse teste estava certo ontem. O que mudou: o teste ou o comportamento?" |
| `src/doacoes.js` no diff da migração | "Por que a regra precisou saber do banco? O que vazou do contrato?" |
| A validade voltando com hora | "Quem devolve a data assim? Consertem onde ela nasce, não onde ela chega." |
| Testes apagando os dados de desenvolvimento | "Para que banco os testes estão apontando? Deem a eles um banco só deles." |
| CI verde com o bloco do PostgreSQL ainda comentado | "Em que banco o CI rodou? Abram o log do passo dos testes." |
| PostgreSQL local que não sobe | "O CI tem PostgreSQL. Empurrem a branch e leiam o CI enquanto alguém destrava o local." |
| Revisão com "ok", "LGTM" ou "tá estranho" | "Qual linha? O que acontece se ficar assim? O que você sugere?" |
| Comentário sobre a pessoa ("você sempre esquece…") | "Reescreva sobre o código: o que, onde e por quê." |
| O autor revisando o próprio PR | "Quem não escreveu revisa. É o olhar de fora que acha o que o autor não vê." |
| Segunda refatoração "porque está feio" | "Que próxima mudança ela deixa fácil? Qual dor concreta ela resolve?" |
| Segunda refatoração que muda o que a API devolve | "Isso é comportamento novo. Primeiro a refatoração, verde–verde; a mudança vai em outro PR, com teste novo." |
| Grupo pronto cedo | Aplicar a segunda refatoração com os testes — e a página da consulta. |

## Fechamento (10 min)

- Um grupo mostra o **PR da migração** no telão: o diff sem `src/doacoes.js`, o mesmo número de testes antes e depois e o log do CI rodando sobre PostgreSQL.
- Dois grupos leem **um comentário de revisão** que mudou alguma coisa — e a turma confere: onde, o quê, por quê, sugestão, bloqueia?
- Um grupo diz qual foi a **segunda refatoração** e **qual dor** ela paga.
- Conferir no telão que cada PR da migração tem CI verde, a revisão e a seção `## O que a revisão mudou`.
- **Gancho para a Aula 13:** o produto roda sobre PostgreSQL e está mais fácil de mudar. Na próxima aula ele é **confrontado com os critérios de aceite da Unidade 1** — o que atende e o que não atende —, com a demo e a Retrospectiva 3. Cada grupo chega com os PRs integrados na `main` e o `docs/refatoracoes.md` em dia.
