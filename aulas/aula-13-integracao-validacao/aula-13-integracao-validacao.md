# Aula 13 — Integração, validação e evidência de funcionamento · Retrospectiva 3

- **Unidade:** 3 — Construção
- **Nível de IA:** IA como colaboradora
- **Evidência da aula:** a `main` com **tudo integrado e CI verde**; o **roteiro da demo** em `docs/demo.md`, executado por um integrante que não o escreveu; o **quadro de validação** em `docs/validacao.md`, com os critérios de aceite da Unidade 1 e a evidência de cada um; e a **Retrospectiva 3** em `docs/retrospectivas/3.md`, com a autoavaliação por pares
- **Observação:** última aula de conteúdo antes da noite de trabalho de 26/11 e da Prova 3 (03/12). **Vale 0,25:** a quarta das quatro entregas de aula da Unidade 3. Retrospectiva 3. Fecha a consulta da Unidade 3
- **Material:** `slides/aula-13-integracao-validacao.pptx` (34 slides — quatro pontos, cada um com um infográfico-resumo e um **exemplo resolvido no Prato Cheio**, quatro exercícios em sala, quatro slides de referências, o slide da retrospectiva e, no fim, cinco slides **para estudar**: mapa da aula, glossário, um quadro de validação completo, o que levar e um autoteste; os cinco últimos não são projetados na aula) · `docs/demo.md`, `docs/validacao.md`, `docs/retrospectivas/modelo.md` e `docs/analise.md` do repositório do grupo

## Estrutura do encontro

Até aqui, cada aula da Unidade 3 cuidou de uma parte: o incremento (Aula 10), os testes (Aula 11), a troca de banco e a revisão (Aula 12). Hoje a pergunta é sobre o **produto inteiro**: tudo o que foi feito está na `main` e roda junto? Outra pessoa consegue ver funcionando sem confiar na palavra de vocês? E o que roda é **o que foi combinado na Unidade 1**? O exemplo que atravessa os quatro pontos é o mesmo das Aulas 10 a 12: **o grupo do doador que cancela uma doação**, agora na reta final.

| Faixa | O que acontece |
|---|---|
| 19h00–19h12 | Retomada: a migração integrada na `main`, o `docs/refatoracoes.md` em dia, a lista dos PRs ainda abertos |
| 19h12–19h47 | Exposição — bloco 1: integrar sem quebrar e evidência que outra pessoa confere · exercícios C1 e C2 |
| 19h47–20h42 | Produção A — integrar o que falta, a `main` verde, o clone limpo, o roteiro da demo executado por outra pessoa |
| 20h42–21h17 | Exposição — bloco 2: validar contra a análise e fechar a iteração · exercícios C3 e C4 |
| 21h17–22h20 | Produção B — o quadro de validação, a Retrospectiva 3, o ensaio cruzado da defesa e o PR da entrega |
| 22h20–22h30 | Socialização, conferência das entregas e o plano para 26/11 e 03/12 |

A exposição soma **70 minutos** nos dois blocos, e **26 deles são exercícios** — feitos em duplas ou trios, sem entrega e sem nota. Cada ponto segue a mesma ordem: o conceito, um infográfico que o resume, o **exemplo resolvido no Prato Cheio** e o exercício.

**Nível de IA hoje, na prática: colaboradora.** A IA pode ajudar a resolver um conflito de merge, sugerir o caso de erro que vale mostrar na demo, revisar o roteiro procurando passo ambíguo e ler o quadro de validação procurando "sim" sem evidência. Ela **não decide** o status de um critério — quem marca "atende" é quem viu a evidência — e **não escreve** a autoavaliação por pares nem a retrospectiva por vocês. O que ela fez vai na seção `## Uso de IA` do `docs/validacao.md`. Na defesa do Trabalho 3, cada integrante mostra a sua parte rodando, explica uma refatoração e responde sobre a parte de outro.

## Retomada (12 min)

Três checagens:

- **A migração integrada.** O PR da Aula 12 na `main`, com o CI verde sobre PostgreSQL. A validação de hoje é feita sobre o produto que roda em PostgreSQL — se ela ainda estiver aberta, é o primeiro PR da Produção A.
- **O `docs/refatoracoes.md` em dia**, com as duas refatorações. A segunda, se ainda não foi aplicada, entra hoje ou fica para 26/11 — com data.
- **A lista dos PRs abertos.** Cada grupo escreve no quadro do repositório (ou num comentário) quais PRs estão abertos, de quem é cada um e o que cada um toca. É o insumo do ponto 1.

Devolver a Aula 12 em uma frase: *vocês trocaram o banco sem que as regras percebessem; hoje o produto inteiro precisa provar que funciona — e que é o produto que foi combinado.*

## Objetivo da aula

Sair do encontro com a **`main` integrada e verde**, um **roteiro de demo** que outra pessoa já executou sem ajuda, o **quadro de validação** que diz, critério por critério, o que o produto atende e com que evidência — e a **Retrospectiva 3** registrada.

## Pontos a abordar

### Bloco 1 — o produto inteiro, de pé (~35 min)

**1. Integrar sem quebrar o que já funcionava.**
Integração é onde os incrementos de cada um se encontram. Cada PR foi testado **contra a `main` do dia em que nasceu**; o que vale é a `main` **depois** do merge. Por isso, quanto mais tempo um PR fica aberto, mais ele aposta que nada mudou embaixo dele.

- *Conflito de texto × conflito de sentido:* o Git avisa quando duas pessoas mexem nas mesmas linhas. Ele **não avisa** quando uma pessoa renomeia uma função e outra, num PR paralelo, chama o nome antigo: o merge entra limpo e a `main` fica vermelha. Quem pega é a suíte — rodando sobre a `main` integrada.
- *A regra da reta final:* um PR por vez; antes de integrar, **atualizar a branch com a `main`** (o botão *Update branch* do GitHub) e esperar o CI; depois de integrar, **conferir o CI da `main`**. Branch protegida pode exigir isso sozinha (*Require branches to be up to date before merging*).
- *A `main` vermelha é prioridade do grupo:* ninguém integra mais nada até ela voltar a ficar verde. Conserta-se em minutos, num PR pequeno, ou se reverte o último merge.
- *Exemplo no caso:* dois PRs verdes — a edição da quantidade e o desfazer da coleta — entram um depois do outro, sem conflito, e a `main` fica vermelha.
- *Exercício C1 — Em que ordem integrar? (6 min, em duplas):* quatro PRs abertos, todos verdes; a ordem, o que conferir entre um e outro e qual par corre risco de conflito de sentido.

**2. Evidência que outra pessoa confere — e a demo de 3 minutos.**
"Funciona" não é afirmação, é demonstração. Evidência é o que **outra pessoa** consegue conferir **sem confiar em vocês**. Há uma escada: a fala do autor ("rodou aqui") não prova nada para quem não viu; o print prova que funcionou uma vez, numa máquina; o teste com o nome do critério prova o comportamento; o CI verde **na `main`** prova o comportamento num ambiente limpo, na versão integrada; e o roteiro executado por outra pessoa, a partir de um **clone novo**, prova que qualquer um reproduz o produto rodando.

- *O clone limpo:* um integrante clona o repositório numa pasta nova e segue só o README. É o teste que pega o "funciona na minha máquina" — a variável de ambiente que ninguém escreveu, o banco que só existia no computador do autor, o comando que mudou com a migração.
- *A demo é evidência ao vivo:* **três minutos** — o problema em uma frase, a história funcionando de verdade (no navegador do celular, que é a restrição do caso), um caso de erro tratado e o que falta. Sem passeio pelas pastas, sem slide no lugar do produto.
- *O roteiro reproduzível:* cada passo tem **a ação exata** (o que clicar, que dado digitar) e **o resultado esperado** (o que deve aparecer). Se outra pessoa travou num passo, o roteiro estava incompleto.
- *Exemplo no caso:* o roteiro da demo do cancelamento — e o passo em que a integrante que o executou travou.
- *Exercício C2 — Esse roteiro alguém reproduz? (7 min, em duplas):* cinco passos vagos de uma demo, reescritos com ação exata e resultado esperado — e qual deles prova o critério.

### Bloco 2 — o produto contra o combinado (~35 min, depois da Produção A)

**3. Validar contra a análise.**
**Verificar** é perguntar se o produto foi construído certo — os testes e o CI respondem. **Validar** é perguntar se foi construído **o produto certo** — e quem responde são os critérios de aceite que vocês escreveram na Unidade 1, com os stakeholders do caso em mente. A suíte pode estar toda verde e o produto não atender a um critério que ninguém transformou em teste.

- *O quadro de validação:* copiar **todos** os critérios de aceite do `docs/analise.md`, **sem reescrever**; para cada um, o status e **a evidência** — o nome do teste, o passo do roteiro, o link do CI.
- *Quatro status, não dois:* **atende** (há evidência que outra pessoa confere) · **parcial** (o que funciona e o que falta, dito por extenso) · **não atende** (por que ficou de fora e o que seria preciso) · **não verificável** (o critério não diz como conferir — vai para "Mudanças de critério", não para "sim").
- *Um "não atende" bem justificado vale mais que um "sim" sem evidência.* Reescrever o critério para caber no que foi feito é validação de fachada: o critério muda, o produto não.
- *Exemplo no caso:* o quadro do grupo do cancelamento — quatro "atende" com evidência, um "parcial" dito por extenso e um critério que, relido, não dava para conferir.
- *Exercício C3 — O status se sustenta? (7 min, em duplas):* cinco linhas do quadro de outro grupo; para cada uma, se a evidência sustenta o status — e o que você mudaria.

**4. Fechar a iteração: a retrospectiva e quem sabe o quê.**
A retrospectiva olha para **as decisões**, não para a lista de tarefas: o que escolhemos e por quê, o que funcionou, o que mudaríamos e o que vem a seguir. A autoavaliação por pares é um **sinal**, não um cálculo: ela orienta as perguntas da defesa, e cada linha precisa de algo que se confira no repositório. E, como na defesa cada um responde sobre **a parte do outro**, fechar a iteração é também espalhar o conhecimento: quanto menos partes só uma pessoa sabe explicar, menor o risco do grupo.

- *Decisão × tarefa:* "migramos o banco" é tarefa; "migramos antes de começar a edição, porque a troca mexia em tudo embaixo e os testes da Aula 11 estavam frescos" é decisão.
- *"O que mudaríamos: nada"* é o sinal de que a retrospectiva não aconteceu. Um fato da iteração — a `main` vermelha, o PR que ficou aberto uma semana — sempre ensina alguma coisa.
- *A autoavaliação:* 100 pontos distribuídos, cada linha com **o que a pessoa fez de mais relevante e onde está** (o PR, o commit). Distribuição igual não é erro; "ajudou em tudo" é.
- *O ensaio cruzado:* cada integrante explica, em dois minutos, uma parte que **não** escreveu. Quem trava sabe o que estudar até 03/12.
- *Exemplo no caso:* a Retrospectiva 3 do grupo do cancelamento e o mapa de quem explica o quê.
- *Exercício C4 — Decisão ou tarefa? (6 min, em trios):* o trecho de uma retrospectiva fraca; o que é decisão, o que é tarefa, e a reescrita.

## Produção em sala — entrega do encontro

Na Unidade 3 não há menu de opções: o trabalho de sala **é** a construção do produto. Hoje a produção vem em duas faixas, cada uma depois do bloco que ela usa.

**Produção A (19h47–20h42) — o produto inteiro, de pé.**

- **A1 · Integrar o que falta.** A lista de PRs abertos da retomada vira uma **ordem**. Um por vez: atualizar a branch com a `main`, esperar o CI, revisar, integrar, **conferir o CI da `main`**. Se ela ficar vermelha, o grupo para e conserta antes do próximo. PR que não fica pronto hoje sai da lista — com o motivo — e vai para 26/11 ou para as limitações.
- **A2 · O clone limpo.** Um integrante clona o repositório **numa pasta nova** e segue **só o README** até o produto subir sobre PostgreSQL e o `npm test` passar. Cada passo em que ele travou vira uma correção no README — os três comandos, a `DATABASE_URL`, como subir o banco.
- **A3 · O roteiro da demo.** Preencher o `docs/demo.md` (o modelo já está no repositório): os 3 minutos, e o passo a passo com **a ação exata e o resultado esperado** de cada passo, incluindo **um caso de erro**.
- **A4 · Outra pessoa executa.** Um integrante que **não escreveu** o roteiro o executa, sem ajuda, no navegador do celular (ou no modo celular do navegador). Onde travou, o roteiro muda. A seção `## Testado por` ganha o nome, a data e o que precisou ser corrigido.

**Produção B (21h17–22h20) — o produto contra o combinado.**

- **B1 · O quadro de validação.** No `docs/validacao.md`: **todos** os critérios de aceite do `docs/analise.md`, copiados como estão; para cada um, o status (atende · parcial · não atende · não verificável) e a evidência. Cada "parcial" e "não" ganha uma linha em "Critérios que não atendem — por quê"; cada critério não verificável, ou que mudou ao longo do semestre, vai para "Mudanças de critério". A seção `## Uso de IA` diz o que a IA fez nesta iteração e o que vocês verificaram.
- **B2 · A Retrospectiva 3.** Em `docs/retrospectivas/3.md`, a partir do `docs/retrospectivas/modelo.md`, meia página: **decisões** (não tarefas), o que funcionou, o que mudaríamos e os próximos passos **até 03/12**; a autoavaliação com os **100 pontos** e, em cada linha, o que a pessoa fez de mais relevante e o link. Sugestão, sem nota: três linhas sobre **a IA nesta iteração** — o que ela acertou, o que errou, o que vocês aprenderam a verificar.
- **B3 · O ensaio cruzado (10 min).** Cada integrante explica, em dois minutos, uma parte do produto que **não** escreveu — uma refatoração, um teste, um passo do roteiro. Quem travou anota o que estudar. Não é entregue.
- **B4 · O PR da entrega.** O `docs/validacao.md`, o `docs/demo.md` e o `docs/retrospectivas/3.md` entram num **PR revisado** por outro integrante, com o CI verde.

**Entrega do encontro (0,25, pelo Teams):** o **PR da entrega** (aberto ou integrado) com o CI verde e os três arquivos — `docs/demo.md` com o passo a passo e o `Testado por` preenchido, `docs/validacao.md` com o quadro e o `Uso de IA`, e `docs/retrospectivas/3.md` com a autoavaliação. Enunciado e prazo em `enunciado-atividade-ava.md`. Correção binária: entregou no prazo e no formato, pontuou.

> **Sem mudança no template hoje.** O `docs/demo.md`, o `docs/validacao.md` e o `docs/retrospectivas/modelo.md` já estão no repositório desde a Unidade 1. O que se cria hoje é o `docs/retrospectivas/3.md`.

## Enquanto circula pelos grupos

| Sintoma | Intervenção |
|---|---|
| Vários PRs integrados de uma vez, sem olhar a `main` entre eles | "Se a `main` ficar vermelha agora, qual dos três foi? Um por vez, e o CI da `main` entre cada um." |
| A `main` vermelha e o grupo seguindo com o próximo PR | "Quem está consertando a `main`? Até ela voltar, nada mais entra." |
| "Mas o CI do PR estava verde" | "Verde contra qual `main`? Atualizem a branch e vejam de novo." |
| PR aberto há uma semana, sem atualizar | "O que mudou na `main` desde que ele nasceu? Atualizem antes de qualquer outra coisa." |
| O clone limpo feito pelo autor do README | "Quem escreveu o README sabe o que falta nele de cabeça. Outra pessoa clona." |
| O produto só sobe com um passo que não está no README | "Esse passo está escrito onde? Se não está no README, não existe para quem chega." |
| Roteiro com "abrir o sistema", "mostrar que funciona" | "Que tela, que clique, que dado? E o que deve aparecer depois?" |
| Demo planejada com o editor aberto e o passeio pelas pastas | "Quem é a plateia da demo — e o que ela quer ver em três minutos?" |
| Quadro de validação com tudo "sim" | "Para cada linha: onde está a evidência? Me mostrem uma." |
| Critério reescrito para caber no produto | "O critério da Unidade 1 era este. O que mudou foi o produto ou o critério? Se foi o critério, é 'Mudanças de critério'." |
| "Parcial" sem dizer o que falta | "O que funciona e o que não funciona? Escrevam as duas coisas." |
| Evidência "testado" ou "funciona" | "Qual teste? Que nome ele tem? Em que execução do CI ele passou?" |
| Retrospectiva com a lista de tarefas da iteração | "Isso foi o que vocês fizeram. O que vocês **escolheram** — e por quê?" |
| "O que mudaríamos: nada" | "O que deu mais trabalho do que devia nesta iteração?" |
| Autoavaliação com "ajudou em tudo" | "Onde está isso no repositório? Ponham o PR ou o commit." |
| Grupo pronto cedo | O ensaio cruzado com uma segunda parte — e a página da consulta. |

## Fechamento (10 min)

- Um grupo roda a **demo** no telão, em três minutos cronometrados, **pelo roteiro**, executada por quem não o escreveu.
- Dois grupos leem **uma linha "parcial" ou "não atende"** do quadro de validação — e a turma confere: diz o que funciona, o que falta e por quê?
- Um grupo diz **uma decisão** da Retrospectiva 3 — com o porquê.
- Conferir no telão que cada grupo tem a `main` verde e o PR da entrega aberto.
- **Para 26/11 e 03/12:** a noite de **26/11** é de trabalho remoto, para fechar a iteração — o que ficou fora hoje, os PRs pendentes, o documento de fechamento (até 4 páginas). Em **03/12** há a Prova 3 e a entrega do Trabalho 3 (branch **`entrega-3`**), com a defesa individual escalonada: cada integrante mostra a sua parte, explica uma refatoração e responde sobre a parte de outro. **Fechar a consulta da Unidade 3** — ela é a única permitida na prova.
