# Detalhamento das Aulas — Análise, Projeto e Desenvolvimento Ágil

*Documento 3 de 3 — ver também "Premissas" e "Planejamento de Aulas".*

Para cada encontro de conteúdo: foco, 3–5 pontos a abordar na exposição (~70 min), a **produção contínua** do produto vivo (feita por todos os grupos, evoluindo o mesmo repositório) e 3 opções de trabalho em sala. Os trabalhos de sala são feitos **em duplas ou trios**, escolhendo-se **uma** das três opções. Padrão das opções: a 1 é a produção direta do artefato; a 2 exige análise ou transformação; a 3 quase sempre envolve usar e criticar IA.

**Produto vivo:** o software roda desde a Unidade 1 (walking skeleton) e evolui a cada iteração. As aulas 4, 9 e 14 (antes das provas) incluem **retrospectiva** com autoavaliação de contribuição por pares.

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
- Criar o repositório público do grupo a partir do `template-repo/`, confirmar o **CI verde** no GitHub Actions e testar o **fluxo de Pull Request**. O banco é SQLite, embutido no Node: rodar `npm run db:migrar` e pronto, nada a instalar.

**Trabalhos em sala (duplas/trios — escolher 1)**
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

**Trabalhos em sala (duplas/trios — escolher 1)**
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

**Trabalhos em sala (duplas/trios — escolher 1)**
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

**Trabalhos em sala (duplas/trios — escolher 1)**
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
- Passar a integrar toda mudança relevante do produto por **PR revisado** por outro integrante.

**Trabalhos em sala (duplas/trios — escolher 1)**
1. Listar 3 decisões que o caso exige e, para cada uma, 2 alternativas viáveis.
2. Montar uma tabela de trade-offs (critérios × alternativas) para uma das decisões.
3. Ligar cada decisão a um requisito ou risco da unidade de Análise que a justifica.

### Encontro 7 — Modelagem e diagramas
**Pontos a abordar**
- Para que serve um diagrama: comunicar uma decisão, não decorar.
- Diagrama de contexto, de componentes e de dados — quando usar cada um.
- "O suficiente": evitar o diagrama que ninguém lê.
- Modelar o fluxo principal do caso.
- Gerar e revisar diagramas com IA.

**Trabalhos em sala (duplas/trios — escolher 1)**
1. Desenhar o diagrama de contexto do caso (o sistema e seus atores externos).
2. Modelar os dados principais do caso (entidades e relações).
3. Gerar um diagrama com IA e apontar 2 coisas que ele errou ou simplificou demais.

### Encontro 8 — Decisões arquiteturais (ADR) e alternativas
*O professor introduz uma mudança de contexto durante esta aula.*
**Pontos a abordar**
- Estrutura de um ADR enxuto: contexto, alternativas, decisão, consequências.
- Por que registrar a decisão, e não só o resultado.
- Consequências positivas e negativas de uma escolha.
- Quando uma decisão merece virar ADR — o caso da disciplina: **migrar de SQLite para PostgreSQL** (alternativas, consequências, riscos, como validar).
- Revisitar decisões quando o contexto muda.

**Produção contínua (todos os grupos)**
- Escrever o **ADR da migração de SQLite para PostgreSQL** — entregável do Trabalho 2, executado na Unidade 3.

**Trabalhos em sala (duplas/trios — escolher 1)**
1. Escrever 1 ADR completo para uma decisão do caso.
2. Completar um ADR mal escrito (só "decidimos X") com alternativas e consequências.
3. Dada uma mudança de contexto (novo requisito/restrição), revisar um ADR existente e registrar o que muda.

### Encontro 9 — Não-funcionais e validação do design · evoluir incremento + Retrospectiva 2
**Pontos a abordar**
- Requisitos não-funcionais: desempenho, segurança, manutenibilidade, escalabilidade.
- Como os não-funcionais influenciam as decisões de projeto.
- Critérios de validação: como saber se o design serve.
- Riscos de projeto e pontos frágeis.
- Como manter as decisões rastreáveis no código.

**Produção contínua (todos os grupos)**
- Evoluir o produto com novas histórias, integradas por **PR revisado** e CI verde.
- **Retrospectiva 2** (meia página) + autoavaliação por pares.
- Fechar a consulta da unidade 2; consolidar o documento de projeto.

**Trabalhos em sala (duplas/trios — escolher 1)**
1. Levantar 3 requisitos não-funcionais do caso e explicar como cada um afeta o design.
2. Montar um checklist de validação do projeto (o que precisa ser verdade para seguir).
3. Fazer a revisão crítica do projeto de outro grupo e apontar 2 fragilidades com justificativa.

### Encontro 10 — Prova 2 + entrega/defesa do Trabalho 2
Prova individual com consulta, sem IA. Entrega do **Trabalho 2 (projeto + incremento integrado via PR)** e verificação individual. *Sem trabalho de sala.*

---

## Unidade 3 — Construção

### Encontro 11 — Da decisão ao código: construção incremental
**Pontos a abordar**
- Fatiar o trabalho em incrementos que entregam valor.
- Definição de pronto.
- Versionamento, mensagens de commit e integração por PR.
- Rastrear cada trecho de código até a decisão/história que o originou.
- Usar IA para gerar código: o que sempre verificar.

**Produção contínua (todos os grupos)**
- Evoluir o produto com uma nova história priorizada, via PR revisado e CI verde.
- Subir o PostgreSQL local (`docker compose up -d`) e preparar a migração decidida no ADR da Unidade 2.

**Trabalhos em sala (duplas/trios — escolher 1)**
1. Implementar o primeiro incremento de uma história e abrir o PR com mensagem clara.
2. Definir a "definição de pronto" do grupo e aplicá-la ao incremento produzido.
3. Gerar um trecho com IA e revisá-lo, registrando no PR o que foi mantido, o que mudou e por quê.

### Encontro 12 — Testes a partir dos critérios de aceite
*O professor introduz uma mudança de contexto durante esta aula.*
**Pontos a abordar**
- Do critério de aceite ao caso de teste.
- Tipos de teste (unidade, integração) — o suficiente para o caso.
- Teste como evidência objetiva de funcionamento e como rede de proteção para refatorar.
- Casos limite e caminhos de erro.
- IA para gerar testes: cobertura real × aparente.

**Trabalhos em sala (duplas/trios — escolher 1)**
1. Escrever testes que cobrem os critérios de aceite de uma história.
2. Acrescentar 2 casos limite ou de erro que o critério original não previa.
3. Gerar testes com IA e verificar se algum "passa" sem de fato validar nada.

### Encontro 13 — Revisão de código e refatoração
*O professor introduz uma mudança de contexto durante esta aula.*
**Pontos a abordar**
- Objetivo do code review: encontrar problemas, não julgar pessoas.
- Cheiros de código mais comuns e riscos de código gerado por IA.
- O que é refatorar: melhorar a estrutura sem mudar o comportamento.
- Refatorar com segurança: os testes garantem que nada quebrou.
- Reuso: extrair o que se repete em vez de duplicar.
- O caso da disciplina: **trocar SQLite por PostgreSQL** sem que as regras de negócio percebam.

**Produção contínua (todos os grupos)**
- **Executar a migração de SQLite para PostgreSQL** decidida no ADR da Unidade 2, com os testes provando que o comportamento se manteve.
- Aplicar pelo menos 1 outra refatoração na base do produto, também protegida por testes.

**Trabalhos em sala (duplas/trios — escolher 1)**
1. Migrar a camada de dados para PostgreSQL mantendo os testes verdes antes e depois — sem tocar em `doacoes.js`.
2. Revisar o código de outro grupo usando um checklist e devolver o feedback por escrito.
3. Pegar um trecho gerado por IA, identificar onde ele é frágil e refatorá-lo.

### Encontro 14 — Integração, validação e evidência de funcionamento · Retrospectiva 3
**Pontos a abordar**
- Integrar incrementos sem quebrar o que já funcionava.
- Evidência de execução: o que mostrar para provar que funciona.
- Demonstração curta e objetiva.
- Validar o produto contra os critérios de aceite da análise.
- Preparar a entrega e a defesa individual.

**Produção contínua (todos os grupos)**
- Consolidar o produto + evidências; garantir CI verde.
- **Retrospectiva 3** (meia página) + autoavaliação por pares.
- Fechar a consulta da unidade 3.

**Trabalhos em sala (duplas/trios — escolher 1)**
1. Integrar dois incrementos, rodar os testes e registrar o resultado.
2. Preparar uma demo de 3 minutos que prova que uma história funciona.
3. Confrontar o produto com os critérios de aceite da Unidade 1 e marcar o que atende e o que não atende.

### Encontro 15 — Prova 3 + entrega/defesa do Trabalho 3
Prova individual com consulta, sem IA. Entrega do **Trabalho 3 (produto evoluído + refatoração, com evidências)** e verificação individual dos integrantes. *Sem trabalho de sala.*

---

### Encontro 16 — Prova substitutiva + fechamento
Prova substitutiva cumulativa (cobre as três unidades), sem IA, que substitui a nota de prova mais baixa valendo o resultado obtido. Fechamento: retomada dos três momentos e do produto construído em iterações. *Sem trabalho de sala.*
