# Aula 10 — Da decisão ao código: construção incremental

- **Unidade:** 3 — Construção
- **Nível de IA:** IA como colaboradora
- **Evidência da aula:** o **PR da primeira fatia** de uma história priorizada (aberto ou integrado), com o rastro até a história, e a **definição de pronto** do grupo no `README.md`
- **Observação:** abre a Unidade 3 e a consulta da unidade. **A partir desta aula é necessário um PostgreSQL acessível**, pelo caminho escolhido no ADR da migração (instalação local, contêiner ou serviço gerenciado); a troca do código para PostgreSQL é na Aula 12
- **Material:** `slides/aula-10-construcao-incremental.pptx` (37 slides — cinco pontos, cada um com um infográfico-resumo e um **exemplo resolvido no Prato Cheio**, cinco exercícios em sala, quatro slides de referências e, no fim, cinco slides **para estudar**: mapa da aula, glossário, um PR completo, o que levar e um autoteste; os cinco últimos não são projetados na aula) · `README.md`, `docs/analise.md`, `.github/pull_request_template.md` e `src/` do repositório do grupo

## Estrutura do encontro

A Unidade 2 deixou o projeto justificado e o fluxo de PR funcionando. Hoje a régua muda: o produto passa a crescer em **incrementos pequenos**, que entram na `main` no mesmo dia, cumprem um **acordo de pronto** escrito antes e deixam um **rastro** que qualquer integrante segue da história ao código. O exemplo que atravessa os cinco pontos é uma história nova do caso: **o doador cancela uma doação**.

| Faixa | O que acontece |
|---|---|
| 19h00–19h12 | Retomada: Trabalho 2 entregue, `main` viva e protegida, CI verde, o ADR da migração à mão |
| 19h12–19h50 | Exposição — bloco 1: fatiar em incrementos, definição de pronto · exercícios 1 e 2 |
| 19h50–20h40 | Produção A — a definição de pronto por PR, a história fatiada, o PostgreSQL subindo em paralelo |
| 20h40–21h12 | Exposição — bloco 2: commits e PR, rastreabilidade, IA gerando código · exercícios 3, 4 e 5 |
| 21h12–22h20 | Produção B — a primeira fatia com o teste do critério, o PR completo, revisão e CI verde |
| 22h20–22h30 | Socialização, conferência das entregas e gancho para a Aula 11 |

A exposição soma **70 minutos** nos dois blocos, e **quase 30 deles são exercícios** — feitos em trios, em duplas ou no repositório do grupo, sem entrega e sem nota. Cada ponto segue a mesma ordem: o conceito, um infográfico que o resume, o **exemplo resolvido no Prato Cheio** e o exercício, para vocês fazerem logo depois de ver feito.

**Nível de IA hoje, na prática: colaboradora.** A IA pode escrever o rascunho do código e dos testes da fatia. Antes de aceitar, o código passa pelas **seis verificações** do ponto 5; no PR, a seção `## Uso de IA` diz **o que ela gerou, o que ficou e o que vocês mudaram — e por quê**. Continuam sendo de vocês: o corte da história em fatias, a definição de pronto, o critério que o teste confere e a leitura de cada linha. Na defesa do Trabalho 3 há modificação ao vivo, sem IA.

## Retomada (12 min)

Três checagens:

- **O Trabalho 2 entregue e a `main` viva.** O branch `entrega-2` congelou o projeto; a `main` continua protegida e é dela que sai a branch de hoje.
- **CI verde.** Quem estiver vermelho resolve na Produção A, antes de abrir o primeiro PR da noite.
- **O ADR da migração à mão** (`docs/adr/000N-migracao-postgresql.md`). Ele diz como o PostgreSQL vai subir — e é isso que um integrante faz hoje, em paralelo.

Devolver a Unidade 2 em uma frase: *vocês decidiram e registraram por quê; agora constroem em pedaços que qualquer um rastreia até essas decisões.*

## Objetivo da aula

Sair do encontro com a **definição de pronto** do grupo na `main`, a próxima história priorizada **cortada em fatias** e o **PR da primeira fatia** aberto — com o teste do critério, a descrição que leva à história e o registro do uso de IA —, e com o PostgreSQL do ADR respondendo.

## Pontos a abordar

### Bloco 1 — o tamanho certo e o acordo de pronto (~38 min)

**1. Fatiar em incrementos que entregam valor.**
Incremento é a **menor mudança que alguém consegue usar** e que o grupo consegue **integrar hoje**. Ele atravessa as camadas — tela, rota, regra, SQL e teste — num pedaço fino, em vez de terminar uma camada inteira por vez. Na Unidade 1 vocês fatiaram a história para **entender**; agora fatiam para **integrar todo dia**.

- *Os três testes do incremento:* **alguém usa** (ou vê o efeito) quando ele entra? **entra na `main` hoje**, com CI verde, sem quebrar o que já funcionava? **o PR se lê** em uns 15 minutos?
- *Por onde cortar:* o **caminho principal** primeiro, a **regra de exceção** depois, o **dado a mais** depois, **uma variação por vez**.
- *Exemplo no caso:* "como doador, quero cancelar uma doação que publiquei" vira três fatias — (1) cancelar uma doação **disponível**, que some da lista; (2) recusar o cancelamento de doação **já aceita**, explicando por quê; (3) registrar a data do cancelamento, para a Marta contar o que se perdeu. A primeira já entrega valor.
- *Contraponto:* fatiar por camada — "PR do banco", "PR das rotas", "PR da tela". Parece organizado, mas ninguém usa nada até o último PR, e o teste do critério fica para o fim. O sintoma é a **branch aberta há dias**.
- *Exercício 1 — Fatie para integrar hoje (7 min, em trios):* a história do voluntário que registra a coleta, em três fatias que passem nos três testes.

**2. Definição de pronto.**
A definição de pronto é o **acordo do grupo** sobre a qualidade mínima para **qualquer** história entrar na `main`. Vale igual para todas, é **escrita antes** e cada item é **conferível por outra pessoa**. Não substitui o critério de aceite: o critério diz **o que** a história faz; o pronto diz **quando** ela pode entrar.

- *Um item serve se:* outra pessoa o confere **sem perguntar ao autor**; ele diz **onde se confere** (no PR, no CI, na tela); vale igual para toda história.
- *Pronto é binário:* faltou um item, não está pronto — a história volta, não entra como "quase".
- *Exemplo no caso:* a definição de um grupo, com seis itens e onde cada um se confere — teste com o nome do critério (diff do PR), CI verde (aba Checks), aprovado por quem não é o autor (aba Reviews), a descrição aponta a história ou o ADR, funciona no navegador do celular, README atualizado se mudou um comando. Os itens viram o **checklist** do `.github/pull_request_template.md`.
- *A definição cresce com o produto:* com os testes ganha "cobre um caso limite ou de erro"; com a migração, "os testes rodam sobre PostgreSQL no CI". Nunca encolhe porque o prazo apertou.
- *Contraponto:* "funcionando na minha máquina", "depois a gente testa", "código limpo", "sem bugs" — itens que só o autor confere, ou que ninguém confere.
- *Exercício 2 — Item de pronto ou intenção? (6 min, turma toda):* sete itens para separar em conferíveis e intenções — e um deles nem é item de pronto.

### Bloco 2 — o rastro e a IA (~32 min, depois da Produção A)

**3. Commits e Pull Request.**
O **commit** é a unidade de mudança: **uma mudança por commit**, com uma mensagem que diz **o que muda no comportamento** e **por quê**. O **Pull Request** é a unidade de integração: **um incremento**, com a descrição que o revisor usa para conferir, e que entra na `main` com CI verde e revisão de outro integrante.

- *Anatomia do commit:* **assunto** no imperativo, em uns 50 caracteres ("Recusa cancelar doação já aceita"); **corpo** com o porquê (o diff já mostra o como); **rodapé** com o rastro (`Refs: história "Doador cancela", CA2`) e, se foi em par, `Co-authored-by:`.
- *Anatomia do PR:* título (o incremento, como alguém o usa), o que faz, história / decisão, como verificar, checklist (a definição de pronto) e uso de IA. O modelo já está no repositório.
- *Exemplo no caso:* o mesmo trabalho contado por dois históricos — "alteracoes, cancelar, arrumei o teste" não responde nada; "Doador cancela doação disponível e ela sai da lista", "Renomeia d para doacao (sem mudança de comportamento)", "Recusa cancelar doação já aceita" contam o incremento, separam a refatoração da regra e deixam reverter um commit sem desfazer os outros.
- *Contraponto:* refatoração e regra no mesmo commit (esconde a regra de quem revisa); um PR gigante no fim da iteração.
- *Exercício 3 — Escreva a mensagem (5 min, em duplas):* quatro diffs descritos em uma linha; o assunto de cada commit, e qual deles deveria ser dividido.

**4. Rastrear o código até a decisão.**
Rastreabilidade é ir **da história ao código** e **do código à história** sem perguntar a quem escreveu. O fio passa pelo critério de aceite (`docs/analise.md`), pela decisão ou ADR (`docs/projeto.md`, `docs/adr/`), pelo PR, pelo commit, e chega ao código e ao teste.

- *Ida — "onde isso foi feito?":* procurar a história nos PRs e no log (`git log --grep "Doador cancela"`); o atalho é procurar o **nome do critério** nos testes.
- *Volta — "por que esta linha existe?":* `git blame` na linha leva ao commit, `git show` mostra a mensagem, o commit leva ao PR e o PR leva à história.
- *O melhor rastro:* o **teste com o nome do critério** — liga código e análise sem documento extra, e falha se a regra sumir.
- *Exemplo no caso:* duas linhas de `src/doacoes.js` ("a ONG já aceitou; fale com a coordenação") seguidas em quatro passos até o critério CA2 e o teste com o mesmo nome.
- *Contraponto:* commit "ajustes", PR sem descrição, teste "teste 1", decisão que só existe na conversa do grupo. Cada elo custa quase nada na hora e é caro de reconstruir depois.
- *Exercício 4 — Siga o fio no seu repositório (6 min, em grupo):* a ida e a volta no repositório de vocês, anotando onde o fio quebrou. O que já foi integrado fica como está; **o fio se conserta para a frente**, no PR de hoje.

**5. Usar IA para gerar código: o que sempre verificar.**
A IA escreve o primeiro rascunho — rápido e **plausível**. Plausível não é verificado: o código pode rodar e ainda assim pular as camadas do projeto, abrir uma injeção de SQL ou inventar uma coluna. O trabalho de engenharia é **ler, testar, conferir contra o projeto e registrar**.

- *O ciclo:* pedir com contexto (o arquivo, a decisão, o critério) → ler cada linha → rodar o teste do critério → conferir contra o projeto → corrigir → **registrar no PR** → **defender sem a IA**.
- *As seis verificações:* (1) entendo cada linha? (2) respeita as camadas — regra em `doacoes.js`, SQL em `repositorio.js`, só o `db.js` conhece o banco? (3) o SQL usa marcadores, sem valor colado na string? (4) inventou função, coluna, rota ou pacote? (5) vaza dado pessoal em log, resposta ou erro? (6) o teste pegaria o erro — passa com a regra certa e falha com a errada?
- *Exemplo no caso:* a rota de cancelar gerada a partir de "crie a rota para o doador cancelar uma doação": roda, a tela funciona no teste manual, e está errada em cinco lugares. A versão corrigida põe cada coisa na sua camada, e o PR registra o que ficou e o que mudou.
- *Por que desconfiar:* em estudo controlado, quem usou assistente escreveu código menos seguro **e** se achou mais seguro; modelos sugerem pacotes que não existem. As referências estão no deck.
- *Contraponto:* aceitar porque roda — e não conseguir explicar a linha quando pedirem para modificá-la.
- *Exercício 5 — Vocês aceitariam este código? (6 min, em duplas):* a rota de "marcar a coleta" gerada por IA; ao menos quatro problemas, cada um com a verificação que fere.

## Produção em sala — entrega do encontro

Na Unidade 3 não há menu de opções: o trabalho de sala **é** a construção do produto. Hoje a produção vem em duas faixas, cada uma depois do bloco que ela usa.

**Produção A (19h50–20h40) — o acordo e o corte.**

- **A1 · Definição de pronto.** Criar no `README.md` a seção `## Definição de pronto` (ela não existe no template: o grupo a cria). Cada item conferível, com **onde se confere**. Entra por PR, revisado por um integrante que não a escreveu. Recomendado: levar os itens para o checklist de `.github/pull_request_template.md`.
- **A2 · A história fatiada.** Escolher a próxima história priorizada do backlog de `docs/analise.md` e cortá-la em fatias, cada uma com o seu critério de aceite em uma frase. Abrir a branch da primeira fatia.
- **A3 · O PostgreSQL no ar (em paralelo).** Um integrante sobe o banco pelo caminho do ADR da migração e confere que ele responde (por exemplo, conectando-se e rodando `SELECT 1`). **Não** se troca o código hoje: a migração é a Aula 12.

**Produção B (21h12–22h20) — a primeira fatia.**

- **B1 · Implementar a primeira fatia** com o teste do critério — um `it` com o nome do critério, não `it.todo` —, em commits que contam o incremento.
- **B2 · Abrir o PR** com a descrição completa: título que nomeia o incremento, `História / decisão` (a história, o critério e, se houver, o ADR), a lista das fatias, como verificar, o checklist do pronto e `Uso de IA`. Outro integrante revisa **contra a definição de pronto**; CI verde; merge se der tempo.
- **Se usar IA para gerar código**, as seis verificações antes de aceitar e o registro no PR: o que foi gerado, o que ficou, o que mudou e por quê.

**Entrega do encontro (0,25, pelo Teams):** o **PR da primeira fatia** (aberto ou integrado) e a **definição de pronto** no `README.md` da `main`. Enunciado e prazo em `enunciado-atividade-ava.md`. Correção binária: entregou no prazo e no formato, pontuou.

> **Sem mudança no template hoje.** A seção `## Definição de pronto` é criada pelo grupo no `README.md`; a lista das fatias vai na descrição do PR. O template de PR já tem `História / decisão relacionada`, `Como verificar`, `Checklist` e `Uso de IA`.

## Enquanto circula pelos grupos

| Sintoma | Intervenção |
|---|---|
| "Primeiro o banco, depois a rota, depois a tela" | "Qual dessas alguém usa no fim da noite?" |
| Fatia que não cabe na noite | "Qual é o caminho principal? O resto vira a fatia 2." |
| Item de pronto "testado", "código limpo" | "Onde se confere? Quem confere, sem perguntar a vocês?" |
| Critério de aceite colado na definição de pronto | "Isso vale para toda história, ou só para esta?" |
| Commit "ajustes", "wip", "final" | "O que mudou para quem usa? Escreva isso no assunto." |
| Refatoração e regra no mesmo commit | "Como o revisor acha a regra nesse diff?" |
| PR sem `História / decisão` | "De qual critério este código vem? Como alguém chega aqui daqui a um mês?" |
| Teste com nome genérico | "O nome do teste diz o critério? Procure o critério nos testes." |
| Código da IA aceito porque roda | "Quais das seis verificações vocês fizeram? Leia esta linha em voz alta." |
| SQL com valor colado na string | "E se o id vier com aspas?" |
| Ninguém subiu o PostgreSQL | "Quem faz isso agora, pelo caminho do ADR? A Aula 12 depende dele." |
| Grupo pronto cedo | A fatia 2, com o seu teste, num segundo PR — e a página da consulta. |

## Fechamento (10 min)

- Dois grupos leem a **definição de pronto**; a turma aponta um item e pergunta: *onde se confere?*
- Um grupo mostra as **fatias** da história escolhida e diz qual entrou hoje.
- Um grupo abre o **PR** no telão e alguém de **outro** grupo segue o fio: do título à história, do teste ao critério.
- Conferir no telão que a definição de pronto está na `main` de cada grupo e que cada PR da fatia tem `História / decisão` e `Uso de IA` preenchidos.
- **Gancho para a Aula 11:** os critérios de aceite viram testes de verdade — e a pergunta passa a ser se os testes **pegam o erro**. O PostgreSQL de cada grupo precisa estar no ar até a Aula 12.
