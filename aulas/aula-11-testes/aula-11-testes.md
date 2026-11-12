# Aula 11 — Testes a partir dos critérios de aceite

- **Unidade:** 3 — Construção
- **Nível de IA:** IA como colaboradora
- **Evidência da aula:** um **PR de testes** de uma história — os critérios de aceite como testes, dois casos limite que o critério não previa e o **registro da inversão de uma regra**
- **Observação:** o professor introduz uma mudança de contexto durante a aula — o produto e as decisões do grupo precisarão responder a ela. **Vale 0,25:** a segunda das quatro entregas de aula da Unidade 3. A suíte de hoje é a rede de proteção da Aula 12, quando o banco for trocado
- **Material:** `slides/aula-11-testes.pptx` (33 slides — quatro pontos, cada um com um infográfico-resumo e um **exemplo resolvido no Prato Cheio**, quatro exercícios em sala, quatro slides de referências e, no fim, cinco slides **para estudar**: mapa da aula, glossário, um PR de testes completo, o que levar e um autoteste; os cinco últimos não são projetados na aula) · `README.md`, `docs/analise.md`, `tests/doacoes.test.js` e `src/` do repositório do grupo

## Estrutura do encontro

A Aula 10 deixou o produto crescendo em fatias pequenas, cada uma com o seu critério de aceite. Hoje esses critérios viram **testes** — e a pergunta deixa de ser "há testes?" e passa a ser "os testes **pegam o erro**?". O exemplo que atravessa os quatro pontos é o da Aula 10: **o doador cancela uma doação**.

| Faixa | O que acontece |
|---|---|
| 19h00–19h12 | Retomada: Aula 10 entregue, `main` com CI verde, os critérios das fatias à mão, PostgreSQL no ar |
| 19h12–19h50 | Exposição — bloco 1: do critério ao teste, casos limite e de erro · exercícios C1 e C2 |
| 19h50–20h40 | Produção A — os testes dos critérios da história, dois casos limite, o PR de testes aberto |
| 20h40–21h12 | Exposição — bloco 2: teste como rede de proteção, IA gerando testes · exercícios C3 e C4 |
| 21h12–22h20 | Produção B — a inversão de uma regra, o registro no PR, revisão e CI verde |
| 22h20–22h30 | Socialização, conferência das entregas e gancho para a Aula 12 |

A exposição soma **70 minutos** nos dois blocos, e **26 deles são exercícios** — feitos em duplas ou trios, sem entrega e sem nota. Cada ponto segue a mesma ordem: o conceito, um infográfico que o resume, o **exemplo resolvido no Prato Cheio** e o exercício, para vocês fazerem logo depois de ver feito.

**Nível de IA hoje, na prática: colaboradora.** A IA pode escrever o rascunho dos testes e sugerir casos limite. Antes de aceitar, cada `expect` passa por uma pergunta — **o que precisa quebrar para ele falhar?** — e o conjunto passa pela **inversão de uma regra**, que mostra se os testes pegam o erro. No PR, a seção `## Uso de IA` diz **o que ela gerou, o que ficou e o que vocês mudaram — e por quê**. Continuam sendo de vocês: o critério, a decisão do que se espera em cada limite e a leitura de cada linha. Na defesa do Trabalho 3 há modificação ao vivo, sem IA.

## Retomada (12 min)

Três checagens:

- **A Aula 10 entregue.** O PR da primeira fatia e a definição de pronto estão no repositório; a `main` continua protegida.
- **CI verde.** Quem estiver vermelho resolve na Produção A, antes de abrir o PR de testes.
- **Os critérios das fatias à mão** (`docs/analise.md` e a descrição do PR da Aula 10). São eles que viram testes hoje.

Devolver a Aula 10 em uma frase: *vocês cortaram a história em fatias e deram a cada uma um critério; hoje o critério passa a ser verificado pela máquina, a cada mudança.*

## Objetivo da aula

Sair do encontro com um **PR de testes** de uma história: os critérios como testes que falham quando a regra falha, **dois casos limite** que o critério não previa e o registro de uma **inversão de regra** — com o CI verde, para que a Aula 12 troque o banco com esta suíte como rede.

## Pontos a abordar

### Bloco 1 — o critério vira teste, e o limite aparece (~38 min)

**1. Do critério de aceite ao teste.**
O critério é o acordo em linguagem de negócio; o teste é a **mesma frase escrita para a máquina repetir**. O **Dado** vira a preparação do estado, o **Quando** vira a ação e o **Então** vira a verificação. Na API do Prato Cheio, o teste mais útil passa pela rota, a regra e o SQL — é de **integração**; uma regra pura, sem banco, seria de **unidade**. O suficiente para o caso.

- *Como reconhecer um bom teste:* dá para **sublinhar** nele o Dado, o Quando e o Então do critério, e o **nome do teste diz a regra**.
- *Como se faz:* troca-se o `it.todo` pelo `it` com o mesmo nome; o estado é preparado pela própria API, sem depender de dado que já estava lá; confere-se o **valor** da resposta, não só o status.
- *Exemplo no caso:* o critério "dado que o doador publicou uma doação, quando ele a cancela, então ela não aparece na lista de disponíveis" vira um teste que publica, cancela e consulta a lista — com o nome "remove da lista a doação cancelada".
- *Contraponto:* nome genérico ("teste 1", "deve funcionar") e verificação que confere só o status 200. O teste passa, e ninguém sabe o que ele garante.
- *Exercício C1 — Do critério ao teste (7 min, em duplas):* o critério da coleta ("dado que a ONG aceitou a doação, quando o voluntário registra a coleta, então a doação aparece como coletada") em Dado, Quando, Então e um nome.

**2. Casos limite e caminhos de erro.**
O caminho feliz mostra que funciona; o **limite** mostra o que acontece quando não funciona. É nos limites que o produto quebra para o usuário, e quase nunca estão no critério. **Quatro perguntas** servem para qualquer critério: **e se faltar algo, e se vier vazio, e se repetir, e se não existir?**

- *O percurso:* perguntar → **decidir** o que se espera → escrever o teste com o nome da regra → rodar e ler. O vermelho não é fracasso: é o teste achando um buraco antes do usuário.
- *Um teste de limite* tenta algo que não deveria dar certo e verifica a **recusa**, a **mensagem** ou o **vazio** — não só o status.
- *Exemplo no caso:* "e se o doador cancelar uma doação que ninguém publicou?" — o produto deve recusar com mensagem clara; o teste falha primeiro, porque a rota respondia 200, e o conserto fecha o buraco.
- *Contraponto:* cobertura alta e nenhum teste de erro: todas as linhas rodaram, mas só no dia em que tudo dá certo.
- *Exercício C2 — Quatro perguntas, um limite (6 min, em trios):* o critério "a ONG vê as doações que aceitou", com as quatro perguntas e a decisão do que se espera em cada uma.

### Bloco 2 — a rede e a IA (~32 min, depois da Produção A)

**3. Teste como evidência e como rede de proteção.**
Um teste que passa é **evidência objetiva** de que o comportamento existe; o conjunto é a **rede** que deixa mudar o código sem apostar. **Refatorar** é mudar a estrutura sem mudar o comportamento, e só os testes provam que o comportamento ficou. Na Aula 12 o banco inteiro é trocado — e quem diz se algo mudou é a suíte de hoje.

- *O ciclo:* **verde antes**, mexe só na estrutura, **verde depois**. Se ficou vermelho, o nome do teste diz qual comportamento mudou.
- *O que a rede segura:* o que um teste observa — a resposta da API, a regra de cada critério, o estado depois de cada ação. **Onde tem buraco:** critério sem teste, teste decorativo, comportamento que nenhum teste exercita.
- *Exemplo no caso:* quatro mudanças da Aula 12 — os marcadores de parâmetro, o tipo da data, o tipo do id, uma renomeação — e, para cada uma, o teste de hoje que avisaria. Onde nenhum avisa, a mudança passa em silêncio.
- *Contraponto:* tratar a suíte como um bloco, sem saber qual teste protege qual comportamento.
- *Exercício C3 — O que esta suíte deixa passar (6 min, em duplas):* uma suíte de quatro testes e quatro mudanças; qual teste avisa — ou nenhum.

**4. Usar IA para gerar testes: cobertura real × aparente.**
A IA gera muitos testes, e **todos passam**. Passar não é o objetivo: o objetivo é **falhar quando o código está errado**. Teste que passa com a regra errada é **cobertura aparente** — dá confiança sem dar proteção. A verificação é uma só: **inverter a regra e contar quantos testes ficam vermelhos**.

- *A pergunta de cada `expect`:* **o que precisa quebrar para ele falhar?** `toBeDefined()` só falha se o objeto não existir; `toBe(200)` só falha se a rota sumir; conferir o valor ou a recusa falha quando a regra cai.
- *A inversão, em quatro passos:* escolher uma regra que tenha teste → **commitar** → invertê-la no código → rodar a suíte inteira e **contar os vermelhos** → desfazer. Zero vermelhos: a suíte é decorativa nessa regra; um ou mais: ela tem guarda.
- *Exemplo no caso:* a IA devolve três testes do cancelamento, todos verdes; apaga-se o `if` que recusa cancelar doação já aceita, e os três continuam verdes. Um deles é reescrito a partir do critério e passa a ficar vermelho.
- *Por que importa:* pesquisas sobre testes gerados por modelo e sobre cobertura mostram que rodar e passar pouco diz sobre pegar o erro. As referências estão no deck.
- *Contraponto:* aceitar o conjunto porque o CI ficou verde — e, na defesa, não conseguir dizer qual teste protege qual regra.
- *Exercício C4 — Este teste falharia? (7 min, em duplas):* cinco `expect` gerados por IA para o teste de registrar a coleta; o que precisa quebrar em cada um e a classificação — decorativo, só a rota, confere o dado ou guarda a regra.

## Produção em sala — entrega do encontro

Na Unidade 3 não há menu de opções: o trabalho de sala **é** a construção do produto. Hoje a produção vem em duas faixas, cada uma depois do bloco que ela usa.

**Produção A (19h50–20h40) — os critérios e os limites.**

- **A1 · Os testes dos critérios.** Escolher a história — a da Aula 10, de preferência, ou a dos `it.todo` do template — e listar os critérios de aceite. Trocar os `it.todo`, ou criar os testes: **um `it` com o nome de cada critério**, com o Dado, o Quando e o Então à vista. Uma `doacao` de exemplo no topo do arquivo, com validade **futura**.
- **A2 · Dois casos limite.** Fazer as quatro perguntas a cada critério e escrever **dois testes** do que o critério não previa, cada um com o nome da regra. Se um ficar vermelho, é um buraco do produto: corrigi-lo **no mesmo PR, em commit à parte**.
- **A3 · O PR de testes aberto.** Rodar `npm test`, deixar o CI verde e abrir o PR, com a descrição já iniciada.

**Produção B (21h12–22h20) — a rede posta à prova.**

- **B1 · A inversão de uma regra.** Escolher uma regra que tenha teste. **Commitar antes**, inverter a regra no código, rodar a suíte e **contar os vermelhos**. Com zero vermelhos, o teste é decorativo: reforçá-lo e repetir.
- **B2 · O registro e o PR.** **Desfazer a inversão.** Escrever na descrição do PR a seção `## Inversão de regra` (a regra, os testes que ficaram vermelhos, a inversão desfeita) e o `Uso de IA`. Outro integrante revisa; CI verde; merge se der tempo.
- **Se usar IA para gerar os testes**, a pergunta de cada `expect` e a inversão antes de aceitar; no PR, o registro: o que foi gerado, o que ficou, o que mudou e por quê.

**Entrega do encontro (0,25, pelo Teams):** o **PR de testes** (aberto ou integrado), com 3 ou mais testes de critério, 2 ou mais de limite ou de erro, a seção `## Inversão de regra` e o CI verde. Enunciado e prazo em `enunciado-atividade-ava.md`. Correção binária: entregou no prazo e no formato, pontuou.

> **Sem mudança no template hoje.** A seção `## Inversão de regra` é escrita pelo grupo na descrição do PR; o template de PR já tem `História / decisão relacionada`, `Como verificar`, `Checklist` e `Uso de IA`.

## Enquanto circula pelos grupos

| Sintoma | Intervenção |
|---|---|
| Teste com nome "teste 1", "deve funcionar" | "O nome diz a regra? Se ele ficar vermelho no CI, quem lê sabe o que quebrou?" |
| Teste que não prepara o estado ("cancela a doação 1") | "Que doação é essa? Onde ela foi criada neste teste?" |
| Só `expect(res.status).toBe(200)` | "O que precisa quebrar para ele falhar? E se o corpo vier errado?" |
| Só testes do caminho feliz | "Qual das quatro perguntas vocês ainda não fizeram?" |
| Limite sem decisão do esperado | "O que o produto deve fazer aqui? Escrevam isso antes do teste." |
| Teste de limite que já nasce verde | "Ótimo — o limite já era tratado. E se ele não fosse? Troquem a regra e vejam." |
| Teste vermelho por buraco do produto | "Boa. Corrijam em commit à parte e digam no PR." |
| Inversão com zero vermelhos | "Nenhum teste guarda essa regra. Qual deles poderia guardar? O que ele confere hoje?" |
| Inversão sem commit antes | "Como vocês voltam ao estado anterior? Commitem agora." |
| IA gerou 8 testes, todos verdes | "Quais desses falhariam com a regra errada? Mostrem a inversão." |
| Inversão deixada no código | "O CI do PR está verde? Se a regra foi invertida, deveria estar vermelho." |
| Grupo pronto cedo | A inversão de uma segunda regra, com o registro — e a página da consulta. |

## Fechamento (10 min)

- Dois grupos leem **um teste de critério** e **um de limite**; a turma sublinha o Dado, o Quando e o Então — e pergunta: *o que precisa quebrar para ele falhar?*
- Um grupo mostra a seção **`## Inversão de regra`** no telão: a regra, quantos testes ficaram vermelhos e quais.
- Conferir no telão que cada PR de testes tem o **CI verde**, o `Uso de IA` preenchido e a seção da inversão.
- **Gancho para a Aula 12:** a suíte de hoje é a rede. Na próxima aula o banco muda — de SQLite para PostgreSQL —, os testes rodam **antes e depois**, e as regras de negócio não podem perceber. Cada grupo chega com a suíte **verde na `main`** e o PostgreSQL respondendo.
