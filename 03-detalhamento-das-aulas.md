# Detalhamento das Aulas — Análise, Projeto e Desenvolvimento Ágil

*Documento 3 de 3 — ver também "Premissas" e "Planejamento de Aulas".*

Para cada encontro de conteúdo: foco, 3–5 pontos a abordar na exposição (~70 min), a **produção contínua** do produto vivo (feita por todos os grupos, evoluindo o mesmo repositório) e as três atividades de trabalho em sala. Os trabalhos de sala são feitos **no grupo do projeto (3 a 5 pessoas)**, e o grupo faz **as três atividades**, não uma escolha entre elas. As três são complementares e nessa ordem: a 1 produz o artefato direto; a 2 exige análise ou transformação; a 3 quase sempre envolve usar e criticar IA. Fazer as três garante que nenhum grupo termine o encontro sem ter produzido, transformado e criticado.

**Exceção — Unidade 3.** Nas aulas 10 a 13 não há menu de opções: em construção o caminho é um só, e o trabalho de sala **é** a evolução do produto. Cada encontro tem uma **produção em sala com entrega declarada**, que vale os 0,25 da atividade.

**Produto vivo:** o software roda desde a Unidade 1 (walking skeleton) e evolui a cada iteração. As aulas 4, 8 e 13 (antes das provas) incluem **retrospectiva** com autoavaliação de contribuição por pares.

---

## Unidade 1 — Análise

### Encontro 1 — Abertura + ágil e o papel da análise
**Pontos a abordar**
- Como funciona a disciplina: ciclos, avaliação, consulta autoconstruída e níveis de uso de IA.
- Agilidade além das cerimônias: entrega incremental e decisão sob incerteza.
- Diferença entre problema e requisito; por que começar pelo problema.
- O que é "analisar": ler contexto, restrições e dados incompletos.
- Ideia de produto vivo: walking skeleton, repositório, CI e Pull Request.

**Produção contínua (todos os grupos)**
- Formar o grupo (3 a 5 pessoas) e receber o caso.
- Criar o repositório público do grupo pelo botão **Use this template** em [`g1126-template-prato-cheio`](https://github.com/CatolicaSC-EngSoft/g1126-template-prato-cheio), confirmar o **CI verde** no GitHub Actions e testar o **fluxo de Pull Request**. O banco é SQLite, embutido no Node: rodar `npm run db:migrar` e pronto, nada a instalar.
- Registrar a **evidência do encontro** no repositório: enunciado do problema e lista de incertezas nas seções `## Problema central` e `## Incertezas` de `docs/analise.md`, que já vem no template.

**Trabalhos em sala (em grupo — fazer as três)**
1. Reescrever um "pedido de cliente" mal formulado, separando o problema real da solução que já vinha embutida.
2. A partir de um caso curto, listar 5 incertezas que precisam ser resolvidas antes de projetar qualquer solução.
3. Identificar no caso três restrições (prazo, técnica, negócio) e explicar como cada uma limita as soluções possíveis.

### Encontro 2 — Stakeholders, objetivos e conflitos
**Pontos a abordar**
- Quem é stakeholder e seus tipos (usuário, patrocinador, operação, regulador).
- Objetivos de negócio × necessidades do usuário.
- Onde as regras de negócio aparecem (e como ficam implícitas).
- Conflitos de prioridade: como identificar e explicitar.
- Como representar tudo num mapa de stakeholders.

**Trabalhos em sala (em grupo — fazer as três)**
1. Montar o mapa de stakeholders do caso, classificando cada um por interesse e influência.
2. A partir de duas falas de stakeholders que se contradizem, escrever o conflito e propor um critério para decidir.
3. Traduzir 3 regras de negócio implícitas do caso em enunciados explícitos e verificáveis.

### Encontro 3 — Requisitos e histórias de usuário
**Pontos a abordar**
- Requisitos funcionais × não-funcionais.
- Anatomia de uma história de usuário (Como… quero… para…).
- INVEST: o que torna uma história boa.
- Erros comuns: história que é tarefa, história gigante, história sem valor.
- O que é uma "fatia vertical": a história que atravessa todas as camadas.

**Produção contínua (todos os grupos)**
- Escolher a **história zero** do caso: a fatia fina que virará o walking skeleton na próxima aula.
- Rodar `npm run db:migrar` — o banco da Unidade 1 é SQLite, embutido no Node: nada a instalar.

**Trabalhos em sala (em grupo — fazer as três)**
1. Escrever 5 histórias de usuário do caso e avaliá-las por INVEST, marcando qual critério cada uma falha.
2. Pegar uma história "gigante" e quebrá-la em 3 menores, cada uma com valor independente.
3. Gerar histórias com IA e corrigir/melhorar pelo menos 3, registrando o que mudou e por quê.

### Encontro 4 — Critérios de aceite, hipóteses e riscos · walking skeleton + Retrospectiva 1
**Pontos a abordar**
- Critérios de aceite verificáveis (Dado/Quando/Então).
- Diferença entre critério de aceite e teste.
- Hipótese × suposição; como formular um experimento simples.
- Riscos: identificar, estimar probabilidade e impacto.
- Por que um esqueleto que roda desde cedo reduz risco.

**Produção contínua (todos os grupos)**
- Implementar e publicar o **walking skeleton** (a história zero ponta a ponta) com **CI verde**.
- **Retrospectiva 1** (meia página) + autoavaliação de contribuição por pares.
- Fechar a consulta da unidade 1; consolidar o documento de análise.

**Trabalhos em sala (em grupo — fazer as três)**
1. Escrever critérios de aceite (Dado/Quando/Então) para 3 histórias do caso.
2. Transformar uma suposição do caso em hipótese testável e desenhar um experimento para validá-la.
3. Levantar 2 riscos do caso e propor uma mitigação concreta para cada um.

### Encontro 5 — Prova 1 + entrega/defesa do Trabalho 1
Prova individual com consulta autoproduzida, sem IA. Entrega do **Trabalho 1 (análise + walking skeleton rodando)** e verificação individual (perguntas dirigidas e/ou modificação ao vivo). *Sem trabalho de sala.*

---

## Unidade 2 — Projeto

### Encontro 6 — Do problema à solução: decisões de projeto · fluxo de Pull Request
**Pontos a abordar**
- O que é uma decisão de projeto (vs. detalhe de implementação).
- Trade-offs: nenhuma solução vem sem custo.
- Restrições técnicas que forçam decisões.
- Como requisitos e riscos da análise geram decisões.
- Fluxo de Pull Request: branch, revisão por par, merge com CI verde.

**Produção contínua (todos os grupos)**
- Ligar a **proteção da branch `main`** no repositório do grupo: sem commit direto, sem apagar a branch, merge só por PR aprovado e com CI verde.
- Registrar a evidência da configuração em `docs/evidencias/protecao-main.md` — print da regra e a mensagem do push recusado —, entregue pelo **primeiro PR** do grupo.
- Passar a integrar toda mudança relevante do produto por **PR revisado** por outro integrante.
- Registrar as 3 decisões em `docs/projeto.md`, cada uma ligada a um requisito ou risco da Unidade 1.

**Trabalhos em sala (em grupo — fazer as quatro)**
1. Listar 3 decisões que o caso exige e, para cada uma, 2 alternativas viáveis.
2. Montar uma tabela de trade-offs (critérios × alternativas) para uma das decisões.
3. Ligar cada decisão a um requisito ou risco da unidade de Análise que a justifica.
4. Ligar a proteção da branch `main` e registrar a evidência em `docs/evidencias/protecao-main.md` (print da regra + mensagem do push recusado), entregue pelo **primeiro PR** do grupo.

### Encontro 7 — Modelagem e diagramas
**Pontos a abordar**
- Para que serve um diagrama: comunicar uma decisão, não decorar.
- Diagrama de contexto, de componentes e de dados — quando usar cada um.
- "O suficiente": evitar o diagrama que ninguém lê.
- Modelar o fluxo principal do caso.
- Gerar e revisar diagramas com IA.

**Produção contínua (todos os grupos)**
- Versionar os diagramas em `docs/diagramas/`, referenciados na seção `## Diagramas` de `docs/projeto.md` — cada um com **a pergunta** que responde, **a decisão** da Aula 6 que sustenta e a marca de **retrato** ou **proposta**.
- Confrontar o diagrama de dados com o `src/db.js` real e registrar as divergências, separando proposta de erro do desenho.
- Evoluir o produto com uma história nova, integrada por **PR revisado** e CI verde.

**Trabalhos em sala (em grupo — fazer as três)**
1. Desenhar o diagrama de contexto do caso (o sistema e seus atores externos).
2. Modelar os dados principais do caso (entidades e relações) e confrontar com o `src/db.js`.
3. Gerar um diagrama com IA, apontar 2 erros pelo tipo e corrigir no diagrama entregue.

### Encontro 8 — ADR, não-funcionais e validação do projeto · evoluir incremento + Retrospectiva 2
*O professor introduz uma mudança de contexto durante esta aula.* *Vale 0,50: duas entregas de 0,25 (ADRs e validação).*
**Pontos a abordar**
- Estrutura de um ADR enxuto: contexto, alternativas, decisão, consequências — e por que registrar a decisão, não só o resultado.
- Quando uma decisão merece virar ADR — os dois casos da disciplina: a **escolha da stack** e **migrar de SQLite para PostgreSQL** (alternativas, consequências, riscos, como validar).
- Revisitar decisões quando o contexto muda: o ADR não é lápide.
- Requisitos não-funcionais como **cenário mensurável** (desempenho, segurança, manutenibilidade, escalabilidade) e como influenciam as decisões de projeto.
- Critérios de validação: como saber se o design serve, quais riscos e pontos frágeis restam e como manter as decisões rastreáveis no código.

**Produção contínua (todos os grupos)**
- Escrever o **ADR da migração de SQLite para PostgreSQL** — entregável do Trabalho 2, executado na Unidade 3 — e **revisá-lo** diante da mudança de contexto.
- Preencher os **3 não-funcionais** em forma de cenário e o **checklist de validação do projeto**.
- Evoluir o produto com novas histórias, integradas por **PR revisado** e CI verde.
- **Retrospectiva 2** (meia página) + autoavaliação por pares.
- Fechar a consulta da unidade 2; consolidar o documento de projeto.

**Trabalhos em sala (em grupo — fazer as quatro)**
1. Escrever o ADR completo da migração de SQLite para PostgreSQL.
2. Revisar esse ADR diante de uma mudança de contexto (novo requisito/restrição) e registrar o que muda.
3. Levantar 3 requisitos não-funcionais do caso como cenário mensurável e ligar cada um à decisão que ele afeta.
4. Montar o checklist de validação do projeto (o que precisa ser verdade para seguir) e fazer a revisão crítica do projeto de outro grupo, apontando 2 fragilidades com justificativa.

### Encontro 9 — Prova 2 + entrega/defesa do Trabalho 2
Prova individual com consulta, sem IA. Entrega do **Trabalho 2 (projeto + incremento integrado via PR)** e verificação individual. *Sem trabalho de sala.*

---

## Unidade 3 — Construção

### Encontro 10 — Da decisão ao código: construção incremental
**Pontos a abordar**
- Fatiar o trabalho em incrementos que entregam valor e entram na `main` no mesmo dia.
- Definição de pronto — e a diferença para o critério de aceite.
- Versionamento: mensagens de commit e integração por PR.
- Rastrear cada trecho de código até a decisão/história que o originou.
- Usar IA para gerar código: o que sempre verificar.

**Produção em sala — entrega do encontro**

Na Unidade 3 não há menu de opções: o trabalho de sala **é** a construção do produto. Cada encontro tem uma entrega declarada, que vale os 0,25 da atividade.

- Escrever a **definição de pronto** do grupo (`## Definição de pronto` no `README.md`), cada item com onde se confere, e integrá-la por PR.
- Escolher a próxima história priorizada, **cortá-la em fatias** e implementar a **primeira**, com o teste do critério, num PR revisado contra a definição de pronto e com CI verde.
- Preencher no PR a história e o critério de origem, a lista das fatias e o **uso de IA** (o que foi gerado, o que ficou, o que mudou e por quê).
- Subir o **PostgreSQL** escolhido no ADR da Unidade 2 e conferir a conexão (instalação local, contêiner ou serviço gerenciado — o caminho é do grupo). A troca do código é na Aula 12.

**Entrega do encontro:** o PR da primeira fatia (aberto ou integrado) e a definição de pronto no repositório.


### Encontro 11 — Testes a partir dos critérios de aceite
*O professor introduz uma mudança de contexto durante esta aula.*
**Pontos a abordar**
- Do critério de aceite ao teste: Dado, Quando e Então viram preparação, ação e verificação; o nome do teste é a regra.
- Casos limite e caminhos de erro: as quatro perguntas (faltou, vazio, repetiu, não existe) e a decisão do que o produto deve fazer.
- Teste como evidência de funcionamento e como rede de proteção para refatorar (unidade × integração, o suficiente para o caso).
- IA para gerar testes: cobertura real × aparente, e a inversão de uma regra para conferir.

**Produção em sala — entrega do encontro**

Trabalho em grupo sobre **uma história** do produto; a entrega é um **PR de testes** com CI verde.

- **3 testes novos ou mais** dos critérios de aceite (`it`, não `it.todo`): nome que diz a regra, Dado preparado pela API, Então que confere o valor.
- **2 testes novos ou mais** de caso limite ou de erro que o critério original não previa.
- **Inverter uma regra no código**, contar os testes que ficam vermelhos e desfazer; registrar na descrição do PR, na seção `## Inversão de regra`.
- Preencher a seção `## Uso de IA` do PR.

**Entrega do encontro:** o PR de testes (aberto ou integrado) com CI verde, a seção `## Inversão de regra` e o `Uso de IA` preenchidos, e um commit próprio de cada integrante no dia.


### Encontro 12 — Revisão de código e refatoração
*O professor introduz uma mudança de contexto durante esta aula.*
**Pontos a abordar**
- Refatorar: mudar a estrutura sem mudar o comportamento — os dois chapéus, o passo pequeno e o teste antigo que precisou mudar como sinal de alarme.
- A troca de banco por dentro: o contrato de `src/db.js` (`query()` → `{ rows }`), onde ele vaza (tipos, dialeto, campos do driver) e a regra de consertar abaixo do contrato.
- Revisão de código: achar problema, não julgar pessoa — a ordem de leitura do revisor e as cinco partes de um comentário (onde, o quê, por quê, sugestão, se bloqueia).
- Cheiros de código, reuso pela regra de três e o que pagar primeiro: o cheiro no caminho da próxima mudança; o risco de duplicação no código gerado por IA.

**Produção em sala — entrega do encontro**

- **Executar a migração de SQLite para PostgreSQL** decidida no ADR, em passos pequenos: `src/db.js` com `pg` mantendo o contrato, marcadores `$1, $2, …` e o dialeto em `src/repositorio.js`, o serviço `postgres` descomentado no CI. Testes verdes antes e depois, **sem tocar em `src/doacoes.js`** nem nos testes existentes.
- **Revisar o PR da migração:** um integrante que não o escreveu deixa 3 comentários ou mais em linha; o autor responde e registra a seção `## O que a revisão mudou` na descrição.
- Escolher a **segunda refatoração** pelo cheiro que está no caminho da próxima mudança e aplicá-la com testes verdes antes e depois, em PR à parte (se não couber hoje, fica escolhida e registrada).
- Registrar em `docs/refatoracoes.md` as duas refatorações: o motivo, o que mudou e o que não mudou, a evidência dos testes — e, na segunda, o cheiro atacado e a dor que ele causava.

**Entrega do encontro:** o PR da migração (aberto ou integrado) com CI verde sobre PostgreSQL, `src/doacoes.js` fora do diff, revisado por quem não é o autor, com a seção `## O que a revisão mudou` e o `Uso de IA`; o `docs/refatoracoes.md` com as duas refatorações; e um commit próprio de cada integrante no dia.


### Encontro 13 — Integração, validação e evidência de funcionamento · Retrospectiva 3
**Pontos a abordar**
- Integrar sem quebrar o que já funcionava: o que vale é a `main` depois do merge; conflito de texto × conflito de sentido; a regra da reta final — um PR por vez, branch atualizada, CI da `main` conferido, `main` vermelha como prioridade do grupo.
- Evidência que outra pessoa confere: a escada da evidência (da fala do autor ao roteiro executado por outra pessoa a partir de um clone novo), o clone limpo e a demo de 3 minutos com roteiro reproduzível (ação exata e resultado esperado).
- Validar contra a análise: verificar × validar; o quadro com todos os critérios de aceite da Unidade 1, copiados sem reescrever, com quatro status (atende, parcial, não atende, não verificável) e a evidência de cada um; a validação de fachada.
- Fechar a iteração: a retrospectiva olha para decisões, não para tarefas; a autoavaliação por pares como sinal, com link para o que cada um fez; o ensaio cruzado para que cada parte tenha mais de uma pessoa que a explique na defesa.

**Produção em sala — entrega do encontro**

- **Integrar o que falta**, um PR por vez, com a branch atualizada e o CI da `main` conferido entre um e outro; a `main` verde ao fim da faixa.
- **Clone limpo:** um integrante que não escreveu o README sobe o produto, sobre PostgreSQL, a partir de um clone novo; cada travada vira correção no README.
- **O roteiro da demo** em `docs/demo.md` — 3 minutos, passo a passo com ação e resultado, um caso de erro —, executado por outro integrante, sem ajuda, com o `## Testado por` preenchido.
- **O quadro de validação** em `docs/validacao.md`: todos os critérios de aceite da Unidade 1, status e evidência em cada linha, o porquê de cada parcial e não, as mudanças de critério e o `Uso de IA`.
- **Retrospectiva 3** em `docs/retrospectivas/3.md` (meia página) com a autoavaliação de contribuição por pares; **ensaio cruzado** da defesa (sem entrega).

**Entrega do encontro:** o PR da entrega (aberto ou integrado), revisado e com CI verde, com o `docs/demo.md` testado por outro integrante, o `docs/validacao.md` e o `docs/retrospectivas/3.md`; e um commit próprio de cada integrante no dia.


### Encontro 14 — Prova 3 + entrega/defesa do Trabalho 3
Prova individual com consulta, sem IA. Entrega do **Trabalho 3 (produto evoluído + refatoração, com evidências)** e verificação individual dos integrantes. *Sem trabalho de sala.*

---

### Encontro 15 — Prova substitutiva + fechamento
Prova substitutiva cumulativa (cobre as três unidades), sem IA, que substitui a nota de prova mais baixa valendo o resultado obtido. Fechamento: retomada dos três momentos e do produto construído em iterações. *Sem trabalho de sala.*
