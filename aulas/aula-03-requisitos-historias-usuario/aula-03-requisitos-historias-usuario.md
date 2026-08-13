# Aula 03 — Requisitos e histórias de usuário

- **Unidade:** 1 — Análise
- **Nível de IA:** IA como colaboradora
- **Evidência da aula:** 5 histórias avaliadas por INVEST (com a ação corretiva) + 1 história gigante quebrada em 3 + a história zero com a fronteira justificada
- **Observação:** escolha da **história zero** (a fatia vertical do walking skeleton); **primeira aula com IA como colaboradora** — a seção `## Uso de IA` começa a ser preenchida hoje
- **Material:** `slides/aula-03-requisitos-historias-usuario.pptx` (30 slides — cada um dos cinco pontos tem um **slide de infográfico** logo depois do conceito) · `caso-alunos.md` · `docs/analise.md` e `tests/doacoes.test.js` do repositório do grupo

## Estrutura do encontro

A Aula 2 respondeu **de quem** vem cada exigência. Hoje a exigência vira uma frase que dá para construir e verificar — e o encontro termina com a decisão que a Aula 4 vai executar: qual fatia roda primeiro.

| Faixa | O que acontece |
|---|---|
| 19h00–19h15 | Retomada: CI verde, projeto rodando e as quatro seções da Aula 2 no repositório |
| 19h15–20h03 | Exposição — bloco 1: exigência, anatomia da história, INVEST |
| 20h03–20h52 | Produção — trabalho de sala 1 (as 5 histórias + INVEST) |
| 20h52–21h34 | Exposição — bloco 2: os quatro erros, fatiamento, IA e fatia vertical |
| 21h34–22h20 | Produção — trabalhos de sala 2 e 3 + escolha da história zero |
| 22h20–22h30 | Socialização, conferência das entregas e gancho para a Aula 4 |

A exposição soma **90 minutos** distribuídos nos dois blocos, com atividades curtas de discussão embutidas. O detalhamento conceitual, os enunciados e o gabarito dessas atividades estão no material de condução do professor.

**Nível de IA hoje, na prática — e isto muda em relação às Aulas 1 e 2.** A IA pode gerar histórias candidatas, sugerir fatiamentos, revisar redação e apontar o que falta. Continuam sendo de vocês: a **escolha da história zero**, a **fronteira da fatia**, o **julgamento INVEST** e a decisão sobre cada regra que a IA inventar. Tudo o que ela produzir e vocês aproveitarem vai registrado em `## Uso de IA`, dizendo **o que mudou e por quê**. Na defesa de 03/09 não há IA e não há consulta: cada integrante responde por qualquer história da tabela, inclusive as que a IA escreveu primeiro.

## Retomada (15 min)

Três checagens, e as três são de bloqueio — quem não passar nelas não consegue produzir hoje:

- **CI verde e projeto rodando na máquina de cada integrante.** Quem estiver com o CI vermelho resolve durante a produção, não na Aula 5.
- **As quatro seções da Aula 2 no repositório** — `## Stakeholders`, `## Objetivos de impacto`, `## Regras de negócio`, `## Conflitos de prioridade`. Elas são o insumo direto de hoje: o mapa dá os papéis, os objetivos dão o "para", as regras viram condição, o conflito dá a fronteira.
- **`npm run db:migrar` rodando.** O banco da Unidade 1 é SQLite embutido no Node: nada a instalar.

Devolver a Aula 2 em uma frase: *vocês descobriram de quem vem cada exigência; hoje ela vira uma frase que dá para construir e testar.*

**Um detalhe que vale notar agora, antes de qualquer coisa.** A regra que vocês classificaram como vinda "da fala" — *"doação aceita não fica disponível para outra ONG"* — já está no repositório de vocês, esperando, como um dos cinco `it.todo` de `tests/doacoes.test.js`. A análise que vocês fizeram no papel e o código do template já se encontram. E a mesma Aula 2 mostrou que **falta linha de base** para o objetivo de impacto — é por isso que a história zero de hoje vai precisar de mais do que esses cinco `it.todo`: vai precisar gravar os instantes da publicação e do aceite (Tópico 5).

## Objetivo da aula

Sair do encontro com cinco histórias que cabem numa iteração, cada uma com a letra do INVEST que falha **e a ação corretiva**, e com a história zero escolhida — sabendo dizer o que ficou **de fora** da fatia e por quê.

## Pontos a abordar

### Bloco 1 — o que é exigência, o que é história, o que o INVEST diagnostica (~48 min)

**1. Função, qualidade e restrição.**
"Funcional × não-funcional" é heurística útil e taxonomia ruim. O que decide o tratamento são três categorias: **função** se implementa e se testa, **qualidade** se mede, **restrição** se cumpre.

- *Como tornar qualidade verificável:* estímulo + **ambiente** + resposta + **medida**. O ambiente e a medida são o que todo mundo esquece — e são o que muda o desenho.
- *Exemplo no caso:* "funciona no celular com conexão instável" vira *"em rede 3G a 400 kbps, quando o voluntário confirma a coleta, a tela responde em até 2 s e a confirmação grava o **horário do evento**, não o da sincronização"*.
- *Contraponto:* qualidade escrita como adjetivo ("ser rápido", "ser seguro") não é requisito, é desejo. E **restrição não se prioriza**: orçamento próximo de zero, um bairro, sem integração — isso se cumpre, ou se registra por que não vai ser cumprido.
- *O ponto que sustenta o resto da aula:* aquela qualidade **produziu uma função** (gravar o horário do evento), e essa função protege a medição do objetivo da Aula 2. Se o voluntário confirma de casa duas horas depois, a mediana até a coleta fica errada e a análise decide sobre um número falso.

**2. Anatomia da história: cartão, conversa, confirmação.**
A história não é um requisito curto — é a **promessa de uma conversa**. O cartão lembra, a conversa esclarece, a confirmação verifica. E só a confirmação sobra depois: ela vira critério de aceite na Aula 4 e teste na Aula 12.

- *As três partes:* **Como** um stakeholder do mapa (com nome, não "usuário") · **quero** um comportamento que alguém fora do time percebe · **para** um objetivo de impacto da Aula 2 ou uma perda concreta evitada.
- *O teste do "para":* se ele repete o "quero" com outras palavras, a história não tem valor declarado — e provavelmente é tarefa. *"Como doador, quero cadastrar uma doação, para que a doação fique cadastrada"* é a forma pura do erro.
- *A regra prática:* escrever a coluna **"para" primeiro**. Quem escreve o "quero" antes racionaliza o valor depois — e sempre encontra um.
- *Contraponto:* o formato "Como… quero… para…" é **andaime, não conteúdo**. Existem alternativas legítimas — a *job story* ("Quando fecho a cozinha às 22h e sobrou comida, quero publicar em segundos, para não jogar fora") carrega mais informação de projeto quando o gatilho importa mais que a pessoa. O que não é negociável em nenhum formato: papel real, comportamento observável, valor verificável.

**3. INVEST: diagnóstico, não selo.**
Independente · Negociável · Valiosa · Estimável · Pequena · Testável. Cada letra que falha aponta uma **ação diferente** — e é a ação que vale a nota.

| Letra | Sintoma | Ação corretiva |
|---|---|---|
| Independente | só funciona depois de outra | reordenar, fundir, ou fatiar por dado/regra |
| Negociável | já traz tela, campo e botão | mover o detalhe para o critério de aceite |
| Valiosa | o "para" é do time, não de alguém | achar quem sente falta — ou assumir que é tarefa |
| Estimável | ninguém sabe o tamanho | **spike**: falta conhecimento, não coragem |
| Pequena | não cabe na iteração; tem "e" | fatiar (SPIDR / hambúrguer) |
| Testável | não sai Dado / Quando / Então | achar a condição observável |

- *Contraponto, e é importante:* **Independente** é o critério mais supervalorizado — dependência é normal; o problema é a circular. E **Valiosa** esconde a pergunta "valor para quem?": a história zero vale para o **time** (retira risco e produz medição), não para o usuário final. Ela falha em Independente e ainda assim é a história certa.
- *Erro comum:* usar INVEST como selo. "Passou nos 6" sem nenhuma mudança é carimbo, não diagnóstico.

### Bloco 2 — os erros, o fatiamento, a IA e a primeira fatia (~42 min)

**4. Os quatro erros — e a IA que os produz em série.**

| Erro | Sintoma que se vê em cinco segundos |
|---|---|
| **Tarefa** | ninguém fora do time percebe quando termina ("criar a tabela") |
| **Gigante** | o "quero" tem "e", ou é nome de módulo ("gestão de doações") |
| **Sem valor** | o "para" repete o "quero" |
| **Horizontal** | atravessa uma camada só; nada executa ("primeiro o banco") |

- *Como fatiar de verdade — **SPIDR**:* **S**pike (investigar) · **P**ath (um caminho do fluxo) · **I**nterface (uma forma de entrada) · **D**ata (um subconjunto) · **R**ules (uma variação de regra).
- *O método hambúrguer:* liste as camadas do fluxo e, para cada uma, três níveis — mínimo aceitável / bom / luxo. **A fatia 1 é a linha dos mínimos**, e o que sobra é o backlog da iteração 2, já fatiado.
- *Critério de fatia boa:* é demonstrável sozinha e pode ser descartada sem quebrar as outras. "Parte 1 de 3" reprova nos dois.
- *A IA — sete cheiros previsíveis:* fatia horizontal/CRUD · "para" tautológico · persona genérica · **regra de negócio inventada sem marcação** · as restrições específicas do caso desaparecem (celular, conexão instável, um bairro, orçamento zero) · história grande com aparência de pequena · critério de aceite que repete a história.
- *O protocolo de verificação, em três passos:* **(1)** confrontar com o caso — a regra citada existe? se não, marcar como inventada e dar dono; **(2)** confrontar com o mapa da Aula 2 — o papel é stakeholder de verdade? **(3)** confrontar com INVEST e registrar a **ação**.
- *Dica que muda o resultado:* a IA é melhor como **adversária** do que como autora. "Que regra estou assumindo sem ter escrito?" rende mais que "escreva cinco histórias".

**5. Fatia vertical: a história zero.**
A primeira fatia **não se escolhe por valor — se escolhe por risco e informação**. É o único momento do projeto em que isso é verdade.

- *Os termos, sem confundir:* **fatia vertical** atravessa e executa · **walking skeleton** é a primeira, e também monta o caminho de entrega (build, teste, CI) · **spike** responde "é possível?" e o código pode ir fora · **protótipo** é descartável.
- *Os três critérios da história zero:* **(1)** atravessa interface → regra → dados e executa; **(2)** exercita a regra central do caso — *doação aceita não fica disponível para outra ONG*, sem ela o esqueleto não tem coluna; **(3)** **produz a medição que falta** — grava o instante da publicação e o do aceite, que é a linha de base que a Aula 2 mostrou não existir.
- *As duas armadilhas:* a fatia **magra demais** (só publicar, sem consumo: atravessa e não exercita regra nenhuma) e a fatia **gorda** (com login, filtro, notificação e foto).
- *E a decisão de hoje:* a história zero está praticamente dada — está no caso e nos cinco `it.todo` de `tests/doacoes.test.js`. O trabalho de vocês não é inventá-la, é **decidir a fronteira**: o que fica dentro, o que fica fora, e por quê. A fronteira é a decisão; a lista é a consequência.

## Produção contínua (todos os grupos)

- Registrar as **5 histórias** na tabela `## Histórias de usuário` de `docs/analise.md`, com duas informações por linha: a **letra do INVEST que falha** e a **ação corretiva**.
- Acrescentar as **3 fatias** da história gigante como linhas da mesma tabela.
- Marcar a **história zero** com `★` na coluna `#` e escrever, logo abaixo da tabela, três linhas: **por que ela**, **o que ficou fora** e **por quê**.
- Preencher `## Uso de IA`, identificando **pelo menos 3 histórias pelo número (#) na tabela**: o que a IA gerou, o que vocês mudaram e **por quê** — incluindo qualquer regra que ela tenha inventado e quem decide sobre ela.
- Rodar `npm run db:migrar` e confirmar o **CI verde**; cada integrante faz ao menos **um commit** hoje.
- Escrever a página de hoje da **consulta manuscrita**: os quatro erros com os sintomas, as seis letras do INVEST com a ação de cada, os cinco cortes do SPIDR e os três critérios da história zero.

**Entrega do encontro (0,25):** o link do commit com a tabela `## Histórias de usuário` preenchida (5 histórias + 3 fatias + a história zero marcada e justificada) e a seção `## Uso de IA` com pelo menos 3 histórias identificadas por número. Enunciado e prazo em `enunciado-atividade-ava.md`. Correção binária: entregou no prazo e no formato, pontuou.

> **Sem mudança no template hoje.** A seção `## Histórias de usuário` e a `## Uso de IA` já existem no `docs/analise.md` que veio do template — não há nada a acrescentar à mão. A marcação `★` e as três linhas de justificativa da história zero vão **dentro** dessas seções, não em seção nova.
>
> A seção `## Decisão de análise` continua **reservada para a Aula 4**. A justificativa da história zero vai abaixo da tabela de histórias.

## Trabalhos em sala (em grupo — fazer as três)

As três continuam obrigatórias e são feitas **na ordem 1 → 2 → 3**: a 1 sai no primeiro ciclo de produção, a 2 e a 3 no segundo, depois da exposição sobre fatiamento e IA. Os tempos são curtos porque as atividades de discussão da exposição já fizeram parte do raciocínio.

**1. As cinco histórias, avaliadas por INVEST (≈32 min, na Produção A).**
Cinco histórias do caso, cobrindo **papéis diferentes do mapa da Aula 2**. Para cada uma: a letra do INVEST que falha e **a ação corretiva** correspondente.

- *Entrega:* tabela `## Histórias de usuário` de `docs/analise.md`, commitada.
- *Checklist:* cinco histórias · pelo menos três papéis distintos, todos do mapa · nenhum "como usuário" ou "como administrador" · o "para" de cada uma termina num objetivo de impacto ou numa perda concreta · cada linha traz **letra + ação**, não só a letra.
- *Armadilha frequente:* escrever as cinco para o mesmo papel (o doador) e descobrir depois que a vigilância sanitária — quem impõe os campos obrigatórios — não aparece em nenhuma.

**2. Quebrar a gigante pelo método hambúrguer (≈14 min, abre a Produção B).**
Pegar uma história gigante e quebrá-la em **3 menores**, cada uma demonstrável sozinha. Usar a grade: camadas do fluxo nas linhas, três níveis (mínimo / bom / luxo) nas colunas; a fatia 1 é a linha dos mínimos.

- *Entrega:* as 3 fatias como linhas da tabela `## Histórias de usuário`, identificadas como vindas da quebra.
- *Checklist:* nenhuma das três é "parte 1 de 3" · nenhuma é uma camada técnica ("o banco", "a API") · cada uma é demonstrável sozinha · cada uma pode ser descartada sem quebrar as outras.
- *Armadilha frequente:* usar camadas técnicas como linhas da grade — o resultado é sempre um fatiamento horizontal disfarçado.

**3. Gerar histórias com IA e corrigir pelo menos 3 (≈16 min, na Produção B).**
Gerar com IA, aplicar o **protocolo de três passos** e corrigir no mínimo três, registrando o que mudou e por quê.

- *Entrega:* as histórias corrigidas na tabela + a seção `## Uso de IA` preenchida.
- *Checklist:* as (pelo menos) três correções estão **identificadas pelo número (#) da tabela** — `## Uso de IA` não é um resumo geral · cada correção diz **o que mudou e por quê** · pelo menos uma **regra inventada** pela IA está identificada, com o dono da decisão · está registrado se alguma restrição do caso (celular, conexão instável, um bairro, orçamento zero) sumiu do que ela gerou.
- *Armadilha frequente:* registrar "melhoramos a redação". Isso não é registro — e na defesa não sustenta a pergunta "de onde veio essa regra?".

## Enquanto circula pelos grupos

| Sintoma | Intervenção |
|---|---|
| "Como usuário, quero…" | "Qual dos cinco? Escreva a mesma história para dois papéis e compare." |
| O "para" repete o "quero" | "Se isso nunca for construído, quem sente falta, e de quê?" |
| História com "e" no meio | "Corte no 'e'. As duas metades ainda entregam algo sozinhas?" |
| INVEST só com a letra marcada | "E o que vocês fizeram com ela?" |
| Fatiamento por camada | "O que vocês demonstram na Aula 4 se só a fatia 1 ficar pronta?" |
| História zero só de publicação | "Que regra de negócio ela testa? Nenhuma — então o esqueleto não tem coluna." |
| História zero com login e filtro | "O que cada um desses retira de risco? Se não retira, sai da fatia." |
| Doze histórias vindas da IA | "Quantas usam um papel do mapa de vocês? Quantas citam a conexão instável?" |
| Grupo pronto em 15 minutos | Peça a fatia **zero**: mais fina que a fatia 1. Quase sempre existe. |

## Fechamento (10 min)

- Dois grupos leem a história zero e **o que ficou de fora**; a turma testa cada exclusão: o motivo é risco/medição, ou é "é difícil"?
- Um grupo lê uma história que a IA gerou e o que foi corrigido — em especial a regra inventada.
- Conferir no telão que a tabela e a seção `## Uso de IA` entraram no repositório de cada grupo.
- **Gancho para a Aula 4:** a história zero vira critérios de aceite em Dado/Quando/Então, os `it.todo` viram testes de verdade e o walking skeleton sobe com CI verde. Quem sai daqui com a fronteira decidida implementa; quem sai discutindo escopo, gasta a Aula 4 decidindo o que era para ter sido decidido hoje. A Aula 4 também traz a **Retrospectiva 1**.
