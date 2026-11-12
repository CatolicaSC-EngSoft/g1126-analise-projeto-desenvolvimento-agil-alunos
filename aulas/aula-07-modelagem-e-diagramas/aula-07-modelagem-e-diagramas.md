# Aula 07 — Modelagem e diagramas

- **Unidade:** 2 — Projeto
- **Nível de IA:** IA como colaboradora
- **Evidência da aula:** 2 diagramas do caso — contexto e dados —, cada um com a pergunta que responde, a decisão que sustenta e a marca de *retrato* ou *proposta*
- **Observação:** o diagrama de dados é confrontado com o `src/db.js` real; a IA volta a ser **colaboradora** (na Aula 6 era consulta) e a seção `## Uso de IA` de `docs/projeto.md` recebe hoje o registro da atividade 3
- **Material:** `slides/aula-07-modelagem-e-diagramas.pptx` (30 slides — cinco pontos, quatro atividades de discussão e três slides de referências) · `caso-alunos.md` · `docs/projeto.md`, `docs/analise.md` e `src/db.js` do repositório do grupo

## Estrutura do encontro

A Aula 6 transformou a análise em decisões — mas só em texto, e decisão de fronteira ninguém consegue avaliar lendo. Hoje as decisões ganham desenho, e o desenho é confrontado com o código que já roda. O encontro termina com os dois diagramas no repositório e as divergências entre o modelo e o `db.js` declaradas.

| Faixa | O que acontece |
|---|---|
| 19h00–19h12 | Retomada: `main` protegida, primeiro PR mergeado, as 3 decisões da Aula 6 em `docs/projeto.md` |
| 19h12–19h50 | Exposição — bloco 1: o diagrama como argumento, três diagramas, "o suficiente" |
| 19h50–20h40 | Produção A — trabalho de sala 1 (diagrama de contexto) + a história nova em andamento |
| 20h40–21h12 | Exposição — bloco 2: o fluxo do caso confrontado com o código, e a IA no desenho |
| 21h12–22h20 | Produção B — trabalhos de sala 2 e 3 + `## Uso de IA` + PR da história nova |
| 22h20–22h30 | Socialização, conferência das entregas e gancho para a Aula 8 |

A exposição soma **70 minutos** distribuídos nos dois blocos, com atividades curtas de discussão embutidas. O detalhamento conceitual, os enunciados e o gabarito dessas atividades estão no material de condução do professor.

**Nível de IA hoje, na prática — e ele sobe em relação à Aula 6.** A IA pode gerar o rascunho de um diagrama, converter um desenho em texto, revisar o que vocês desenharam e apontar o ator ou a seta que falta. Continuam sendo de vocês: **a pergunta** que cada diagrama responde, **a decisão** que ele sustenta, **o que entra e o que fica de fora** do desenho, e a leitura das divergências com o `db.js`. Tudo o que ela produzir e vocês aproveitarem vai registrado em `## Uso de IA`, dizendo **o que mudou e por quê**. Na defesa do Trabalho 2, em 22/10, não há IA: cada integrante explica qualquer seta dos diagramas do grupo.

## Retomada (12 min)

Três checagens, e a primeira é de bloqueio:

- **A `main` protegida e o primeiro PR mergeado** — o item 4 da Aula 6. Grupo que ainda não trancou tranca agora, antes da exposição, e confere no histórico se a semana teve commit direto.
- **As 3 decisões da Aula 6 em `docs/projeto.md`**, cada uma com a origem na análise. Elas são o insumo direto de hoje: cada diagrama vai sustentar uma delas.
- **CI verde.** Quem estiver vermelho resolve na Produção A, não na Aula 9.

Devolver a Aula 6 em uma frase: *vocês decidiram o que o sistema compromete; hoje desenham para que alguém de fora consiga verificar.*

## Objetivo da aula

Sair do encontro com dois diagramas do caso — contexto e dados — que alguém de fora do grupo lê até o fim e usa para responder à pergunta escrita acima deles, e com as divergências entre o modelo de dados e o `src/db.js` declaradas, separando o que é **proposta** do que é **erro do desenho**.

## Pontos a abordar

### Bloco 1 — o diagrama como argumento, não como documentação (~38 min)

**1. Um diagrama responde a uma pergunta. Sem pergunta, é decoração.**
Diagrama não é "a documentação do sistema". É a resposta a uma pergunta que alguém fez, desenhada porque em texto a resposta ficaria pior. A pergunta vai escrita **acima** do desenho, em uma linha. Se o grupo não consegue escrever essa linha, o diagrama não precisa existir.

- *Exemplo no caso:* a decisão da Aula 6 — *SQLite agora, PostgreSQL na Unidade 3* — é uma frase que ninguém consegue avaliar lendo. Desenhada, vira uma pergunta respondível: **que peças mudam quando o banco trocar?** O diagrama mostra `src/db.js` como o único ponto que conhece o banco, e a resposta fica visível. Se a fronteira não aparecer no desenho, o diagrama não falhou — ele revelou um problema de projeto.
- *Contraponto:* "vamos desenhar a arquitetura" não é pergunta. "Que peça muda quando trocarmos de banco?", "quem depende de nós sem usar a tela?", "onde a validade é decidida?" são.
- *Regra desta disciplina:* todo diagrama entregue traz, acima, **a pergunta que responde**, **a decisão da Aula 6 que ele sustenta** e a marca de **retrato** ou **proposta** (ponto 3). Sem essas três linhas é volume, e a **premissa 4** diz que decisão vale mais que volume.

**2. Três diagramas, três perguntas.**
A disciplina cobra três porque três bastam para este caso. O que distingue um do outro não é a notação — é a pergunta.

| Diagrama | Pergunta que responde | No Prato Cheio | Quando é o certo |
|---|---|---|---|
| **Contexto** | de quem dependemos, e quem depende de nós? | doador, ONG, voluntário entregador, vigilância sanitária, o navegador do celular | alinhar escopo; achar o externo que ninguém tinha percebido |
| **Componentes** | onde uma mudança bate? | `public/index.html` → `app.js` (rotas) → `doacoes.js` (regra) → `repositorio.js` → `db.js` | dividir trabalho; sustentar uma decisão de fronteira |
| **Dados** | que estado precisa existir para a regra valer? | doação: tipo, quantidade, validade, status, ong, `criada_em` — e o que falta | discutir modelo; achar o campo que a regra exige e não existe |

- *Exemplo no caso (contexto):* a **vigilância sanitária** é o teste deste diagrama. Ela não usa o sistema e ainda assim atravessa a fronteira — consome o registro de rastreabilidade. Quem desenhou só quem clica perdeu justamente o stakeholder que pode vetar o piloto (Aula 2).
- *Exemplo no caso (componentes):* o template já tem a fronteira pronta para ser desenhada — `db.js` expõe `query()` devolvendo `{ rows }` exatamente para conter a troca de banco. Desenhar isso é o que torna a decisão da Aula 6 defensável na Aula 8.
- *Contraponto:* diagrama de sequência e de classes são úteis e **não** são os de hoje. Quem quiser um quarto diagrama escreve antes a pergunta que os três não respondem.
- *Pergunta para devolver à turma:* qual dos três vocês levariam para a prova — e o que ele responde? (é a linha da consulta de hoje)

**3. "O suficiente": o diagrama que alguém lê até o fim.**
Um diagrama está pronto quando **alguém de fora do grupo** responde à pergunta olhando só para ele — e não tem nem um elemento a mais. Três cortes práticos:

- **Um nível de abstração por desenho.** Se "navegador" e a função `aceitar()` estão no mesmo quadro, são dois diagramas colados. Separe.
- **Teto de peças.** Acima de ~9 caixas ninguém termina de ler. Se passou disso: ou a pergunta é grande demais (quebre em duas), ou há detalhe que não decide nada (corte).
- **Toda seta tem rótulo.** Seta sem rótulo é uma afirmação que o grupo não sabe defender. "Publica doação", "lê disponíveis", "exige registro" — o rótulo é o que a defesa individual cobra.

O **teste dos dois desenvolvedores** da Aula 2, agora aplicado ao desenho: duas pessoas olham o diagrama e implementam a mesma fronteira?

- *Notação:* a disciplina não exige UML. Exige desenho **legendado** e, de preferência, **diffável** — texto que entra no PR e deixa o revisor ver o que mudou, pela mesma razão do mapa de stakeholders da Aula 2. Imagem serve, desde que o fonte vá junto e o desenho seja regerável. Notação inventada (caixa tracejada = "fora do escopo da Unidade 2") é legítima **se estiver na legenda**.
- *Retrato ou proposta:* marcar no título se o diagrama descreve **o que existe** ("retrato da `main` no commit `<hash>`" — o último commit do código que ele descreve, não o commit que traz o diagrama) ou **o que se pretende** ("proposta — ainda não implementado"). Diagrama sem essa marca é a causa número um do diagrama que ninguém lê: em duas semanas ninguém sabe se aquilo é o sistema ou o desejo.
- *Contraponto:* discutir se a seta é agregação ou composição é o desvio clássico desta aula. O que decide é se o leitor entende o que atravessa a fronteira.

### Bloco 2 — o fluxo do caso, confrontado com o código (~32 min)

**4. Modelar o fluxo principal — e onde ele quebra.**
O fluxo principal do Prato Cheio é a história zero: **publica → aparece → aceita → some da lista**. Desenhar o caminho feliz leva cinco minutos e não ensina nada. O que ensina é a segunda passada: **onde este fluxo quebra na vida real?**

- o doador publica e desiste;
- duas ONGs aceitam no mesmo instante;
- a ONG aceita e **não busca** — e aqui o grupo esbarra na **regra ausente** da Aula 2. Ninguém decidiu isso, e o modelo não pode inventar sozinho: ou o grupo decide e registra como decisão do grupo (vira ADR na Aula 8), ou o estado não existe e a ausência fica declarada;
- a comida vence enquanto ainda está disponível.

Cada quebra dessas é um **estado**, uma **transição**, ou uma decisão consciente de não tratar agora — declarada.

- *Exemplo no caso, e é o ponto alto da aula:* confrontem o modelo de vocês com o `src/db.js` **real** — o do repositório de vocês, não o que vocês lembram dele. No template, a tabela `doacoes` tem `tipo`, `quantidade`, `validade`, `status`, `ong` e `criada_em`. Duas coisas costumam aparecer na hora:
  - **o instante do aceite pode não existir.** A Aula 3 estabeleceu que a história zero precisa produzir a medição que falta — o tempo entre publicação e coleta, que a Aula 2 mostrou que ninguém tem. O schema do template grava quando a doação foi criada e **não** quando foi aceita. Se a história zero de vocês não acrescentou esse campo, o objetivo de impacto do grupo não é calculável com este modelo; se acrescentou, o diagrama precisa mostrá-lo.
  - **`ong` é uma coluna de texto, não uma entidade.** Para um piloto de um bairro isso pode ser a escolha certa — mas é uma **decisão**, não um acidente. Quem desenhar `ONG` como entidade e deixar `ong TEXT` no banco tem um diagrama que mente.
- *Contraponto:* "o modelo está errado porque o banco está diferente" é a conclusão preguiçosa. Modelo e código divergem legitimamente — o diagrama de dados de hoje pode ser **proposta** para a Unidade 3. O que não pode é a divergência não estar declarada.

**5. Gerar e revisar diagramas com IA.**
Nível de hoje: **IA como colaboradora**. Ela produz um diagrama sintaticamente correto em segundos; plausível não é o mesmo que correto para *este* caso. Os cheiros são previsíveis — peça "diagrama de contexto do Prato Cheio" e conte quantos aparecem:

| Cheiro | Como se reconhece |
|---|---|
| Virou marketplace genérico | "usuário", "administrador", "pagamento", "avaliação" — nada disso existe no caso |
| O ator que não clica some | a vigilância sanitária desaparece, porque não usa a tela |
| Abstração nivelada | navegador, framework e função no mesmo quadro |
| Componente inventado | fila, cache, serviço de notificação que ninguém decidiu |
| As restrições evaporam | celular, conexão instável, um bairro, orçamento próximo de zero |
| Setas mudas | sem rótulo, ou com "usa" e "interage com" |
| Modelo de dados genérico | `User`, `Item`, `Status` em inglês, sem validade e sem instante de aceite |

- *Protocolo de três passos*, o mesmo da Aula 3, agora no desenho: **(1)** confrontar com o caso — esse elemento existe? quem decidiu? **(2)** confrontar com as decisões da Aula 6 e com o código — o diagrama sustenta a decisão, ou contradiz o `db.js`? **(3)** confrontar com o teto de peças e o nível de abstração — e registrar a correção em `## Uso de IA`.
- *Dica que muda o resultado:* a IA rende mais como **revisora** do que como autora. "Que pergunta este diagrama não responde?" e "que ator do caso não aparece aqui?" rendem mais que "desenhe a arquitetura".
- *Contraponto:* registrar "ajustamos o layout" não é registro. Na defesa individual a pergunta é outra: **de onde veio essa seta?**

## Produção contínua (todos os grupos)

- Produzir os diagramas do caso e versioná-los em `docs/diagramas/`, um arquivo por diagrama — texto diffável de preferência (Mermaid, que o GitHub desenha dentro do próprio Markdown, é texto e desenho ao mesmo tempo), imagem só com o fonte junto —, referenciados na seção `## Diagramas` de `docs/projeto.md`. Cada um com **a pergunta** que responde, **a decisão** que sustenta e a marca de **retrato** ou **proposta** — três linhas em texto comum, acima do bloco do desenho e fora dele.
- **Confrontar o diagrama de dados com o `src/db.js` real** e registrar as divergências, separando o que é proposta para a Unidade 3 do que é erro do desenho.
- Evoluir o produto com uma história nova, integrada por **PR revisado** e CI verde.
- Grupos que não trancaram a `main` na Aula 6: fazer hoje, sem exceção — e conferir no histórico se a semana teve commit direto.
- Preencher `## Uso de IA` de `docs/projeto.md` com o registro da atividade 3.
- Escrever a página de hoje da **consulta manuscrita**: os três diagramas e a pergunta de cada um, os três cortes do "o suficiente" e os cheiros da IA em diagrama.

**Entrega do encontro (0,25, pelo Teams):** o link do commit — que entra por PR, como tudo desde a Aula 6 — com os **dois diagramas** em `docs/diagramas/` (contexto e dados) referenciados na seção `## Diagramas` de `docs/projeto.md`, cada um com a pergunta acima, a decisão que sustenta e a marca de *retrato* ou *proposta*, mais a seção `## Uso de IA` preenchida. Enunciado e prazo em `enunciado-atividade-ava.md`. Correção binária: entregou no prazo e no formato, pontuou.

> **Sem mudança no template hoje.** As seções `## Diagramas` e `## Uso de IA` já existem no `docs/projeto.md` que veio do template. O que se cria hoje é a pasta `docs/diagramas/` — a mesma que a estrutura do Trabalho 2 pede.
>
> A seção `## ADRs` continua **reservada para a Aula 8**. A decisão que cada diagrama sustenta é citada pelo número que ela tem em `## Decisões de projeto`.

## Trabalhos em sala (em grupo — fazer as três)

As três são obrigatórias, na ordem **1 → 2 → 3**: a 1 sai no primeiro ciclo de produção; a 2 e a 3 no segundo, depois da exposição sobre fluxo e IA.

**1. Diagrama de contexto do caso (≈24 min, na Produção A).**
O sistema como **uma** caixa; ao redor, os atores e sistemas externos; nas setas, o que atravessa a fronteira.

- *Entrega:* `docs/diagramas/contexto.md`, referenciado na seção `## Diagramas` de `docs/projeto.md`.
- *Checklist:* a pergunta está escrita acima do desenho · os cinco stakeholders do mapa da Aula 2 foram considerados, e quem ficou de fora tem motivo · **a vigilância sanitária aparece**, embora não use o sistema · toda seta tem rótulo · no máximo 9 elementos · está marcado se é retrato ou proposta.
- *Armadilha frequente:* desenhar os módulos internos dentro da caixa do sistema. Isso é o diagrama de componentes — no de contexto o sistema é uma caixa só.

**2. Modelo de dados, confrontado com o `db.js` (≈24 min, na Produção B).**
Entidades, os atributos que **decidem alguma regra**, cardinalidade, e a transição de estado que faz "doação aceita some da lista".

- *Entrega:* `docs/diagramas/dados.md`, referenciado na mesma seção, e logo abaixo dele, ainda em `## Diagramas`, três linhas dizendo o que diverge do `src/db.js` atual e por quê — cada uma marcada como proposta ou erro do desenho.
- *Checklist:* cada atributo do desenho é justificado por uma regra ou por um objetivo de impacto · a regra central do caso aparece como **transição de estado**, não como comentário · o instante do aceite foi discutido — está no modelo, ou a ausência está declarada · `ong` como coluna ou como entidade é uma **escolha declarada** · nomes em pt-BR, como o resto do código.
- *Armadilha frequente:* modelar um `usuario` genérico com campo `tipo` e perder a diferença entre doador e ONG que o caso exige — ou o oposto, seis tabelas para um piloto de um bairro.

**3. Gerar um diagrama com IA e apontar 2 erros (≈18 min, na Produção B).**
Pedir à IA um dos dois diagramas, aplicar o protocolo de três passos e corrigir.

- *Entrega:* os 2 erros nomeados **pelo tipo**, a correção aplicada no diagrama entregue e o registro em `## Uso de IA`.
- *Checklist:* cada erro tem o tipo (marketplace genérico, ator sumido, abstração nivelada, componente inventado, restrição evaporada, seta muda, modelo de dados genérico) · a correção está no diagrama, não só no texto · o registro diz **o que mudou e por quê**.
- *Armadilha frequente:* aprovar o diagrama porque "ficou bonito". A pergunta de correção é sempre a mesma: que ator do caso não está aí?

## Enquanto circula pelos grupos

| Sintoma | Intervenção |
|---|---|
| Diagrama sem a pergunta escrita | "Que pergunta isto responde? Escreva a linha antes de desenhar mais." |
| Vinte caixas | "Qual delas muda a decisão de vocês? Apague as outras." |
| Setas sem rótulo | "O que passa nessa seta? Se não souber dizer, ela não existe." |
| Módulos internos no diagrama de contexto | "Quantas caixas tem o sistema no diagrama de contexto? Uma." |
| Vigilância sanitária ausente | "Quem pode parar o piloto sem abrir o sistema? Onde ela está no desenho?" |
| Modelo de dados copiado do `db.js`, sem uma linha de análise | "Onde está o instante do aceite? Com o que vocês calculam o objetivo da Aula 2?" |
| `ONG` como entidade no desenho e `ong TEXT` no banco | "Qual dos dois é o de vocês? Marque proposta ou retrato." |
| Diagrama de classes com getters e setters | "Que decisão da Aula 6 isso sustenta?" |
| Discussão de agregação × composição | "O leitor entende o que atravessa a fronteira? Então siga." |
| Grupo pronto em 15 minutos | Peça o fluxo quebrado: a ONG aceita e não busca. Que estado existe? Quem decide? |

## Fechamento (10 min)

- Dois grupos projetam o diagrama de contexto; a turma faz **uma** pergunta a cada um: que ator falta?
- Um grupo lê as divergências entre o próprio modelo de dados e o `db.js` — em especial o instante do aceite.
- Um grupo mostra o que a IA gerou e os dois erros que corrigiu.
- Conferir no telão que a pasta `docs/diagramas/` e a seção `## Diagramas` entraram no repositório de cada grupo, por PR, e que a `main` de todos está protegida.
- **Gancho para a Aula 8:** as decisões da Aula 6 e os diagramas de hoje viram **ADR** — contexto, alternativas, decisão, consequências. Quem sai daqui sabendo qual decisão cada diagrama sustenta escreve o ADR em vinte minutos. E há um aviso: na Aula 8 o professor introduz uma mudança de contexto durante o encontro. O desenho de hoje vai ser testado.
