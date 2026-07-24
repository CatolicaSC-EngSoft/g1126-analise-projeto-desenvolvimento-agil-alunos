# Trabalhos Maiores — Análise, Projeto e Desenvolvimento Ágil

Três trabalhos, um por unidade (3,0 pontos cada), **em grupo (3 a 5 pessoas)**, **práticos** e **verificáveis**, entregues no dia da prova da unidade. Os três **não são documentos isolados**: são **três iterações de um mesmo produto vivo**, que nasce como *walking skeleton* na Unidade 1 e evolui até um produto refatorado e validado na Unidade 3. Cada trabalho consolida as evidências das quatro aulas da unidade.

## O produto vivo e o caso

O grupo recebe **um caso** na Aula 1 (stakeholders, objetivos, regras de negócio, restrições, prazo, riscos, dados incompletos e conflitos) e constrói para ele **um único produto**, entregue em três incrementos:

1. **Walking skeleton (Unidade 1):** fatia vertical fina que executa ponta a ponta (interface → lógica → dados), com CI verde. A análise é feita sobre algo que já roda.
2. **Incremento de projeto (Unidade 2):** novas histórias guiadas pelas decisões de projeto e ADRs, integradas via Pull Request revisado.
3. **Produto evoluído e refatorado (Unidade 3):** mais histórias, refatoração da base acumulada, testes e validação.

A mesma decisão registrada na Análise deve reaparecer, justificada, no Projeto e, implementada, na Construção.

## Regras comuns aos três trabalhos

- **Tamanho do grupo:** 3 a 5 pessoas.
- **Repositório e CI:** repositório Git do grupo com pipeline de **GitHub Actions** (build + testes a cada push), montado na Unidade 1 e mantido verde nas três entregas.
- **Fluxo de Pull Request:** a partir da Unidade 2, toda mudança relevante entra por **PR revisado por outro integrante** antes do merge.
- **Orientação a decisões (premissa 4):** cada entrega registra problema, evidências, alternativas, decisão, justificativa, riscos, limitações e critérios de validação. Vale a decisão defensável, não o volume.
- **Limite de tamanho:** documento de acompanhamento de no máximo **4 páginas** (fora código, diagramas e anexos).
- **Retrospectiva:** meia página por iteração (o que decidimos, o que funcionou, o que mudaríamos, próximos passos), produzida na aula que antecede a prova, com **autoavaliação de contribuição por pares**.
- **Nível de IA:** IA como colaboradora permitida, com seção "Uso de IA" declarando o que foi gerado e o que foi alterado. Verificar, testar, corrigir e defender é responsabilidade do grupo.
- **Verificação individual (premissa 7):** no dia da entrega, cada integrante explica uma parte, responde a perguntas dirigidas e faz uma pequena modificação ao vivo. Commits e PRs são evidência de participação; a nota individual pode modular a do grupo.

---

## Trabalho 1 — Análise + Walking Skeleton
*Entrega: Aula 5 · Unidade 1 (Análise)*

**Contexto.** O grupo recebeu um caso com informações incompletas e prioridades em conflito. Antes de aprofundar, precisa entender o problema, definir o impacto desejado e colocar algo mínimo rodando.

**Objetivo de aprendizagem.** Analisar um problema e levantar requisitos com foco em impacto (*outcome* vs *output*), e materializar uma fatia executável.

**Tarefa.**
- Documento de análise: **problema central** e incertezas; **mapa de stakeholders** e 3 objetivos de impacto; **regras de negócio**; **histórias de usuário** (mín. 6) avaliadas por INVEST; **critérios de aceite** (Dado/Quando/Então) para pelo menos 3; **2 riscos** com mitigação e **1 hipótese** com experimento; **1 decisão de análise** com alternativas e justificativa.
- **Walking skeleton:** uma história ponta a ponta funcionando, publicada no repositório com **CI (GitHub Actions) verde**.
- **Retrospectiva 1** (meia página) + autoavaliação por pares.

**Restrições.** Usar o caso atribuído; documento de até 4 páginas; consolidar as Aulas 1–4.

**Critérios de aceite (checklist).**
- [ ] Entregue no prazo e no formato solicitado.
- [ ] Documento contém todos os itens mínimos.
- [ ] Histórias com critérios de aceite verificáveis.
- [ ] Walking skeleton executa ponta a ponta e o CI está verde.
- [ ] A decisão de análise tem alternativas e justificativa.
- [ ] Retrospectiva e seção "Uso de IA" presentes.

**Prazo.** Aula 5. **Nível de IA.** Colaboradora.

---

## Trabalho 2 — Projeto + Incremento
*Entrega: Aula 10 · Unidade 2 (Projeto)*

**Contexto.** Com o esqueleto rodando, o grupo projeta a evolução da solução dentro das restrições, deixando as decisões rastreáveis e integrando por PR.

**Objetivo de aprendizagem.** Projetar uma solução orientada a experimentos e à gestão de backlog (*upstream*), tomando e justificando decisões refletidas no código.

**Tarefa.**
- Documento de projeto: **decisões de projeto** (mín. 3) com alternativas e trade-offs; **diagramas essenciais** (contexto + dados/componentes); pelo menos **2 ADRs** completos; **requisitos não-funcionais** (mín. 3) e seu efeito no design; **critérios de validação**; **rastreabilidade** de cada decisão a um requisito/risco do Trabalho 1.
- **Produto evoluído:** o walking skeleton cresce com novas histórias, integradas por **Pull Requests revisados** (cada PR com pelo menos uma revisão de outro integrante).
- **Retrospectiva 2** + autoavaliação por pares.

**Restrições.** Mesmo caso e mesmo repositório; documento de até 4 páginas (fora diagramas); consolidar as Aulas 6–9.

**Critérios de aceite (checklist).**
- [ ] Entregue no prazo e no formato solicitado.
- [ ] ADRs completos e coerentes; diagramas legíveis e suficientes.
- [ ] Cada decisão rastreada a um requisito/risco da Análise.
- [ ] Novas histórias integradas via PR revisado, com CI verde.
- [ ] Não-funcionais com efeito explícito sobre o design.
- [ ] Retrospectiva e seção "Uso de IA" presentes.

**Prazo.** Aula 10. **Nível de IA.** Colaboradora.

---

## Trabalho 3 — Produto Evoluído + Refatoração
*Entrega: Aula 15 · Unidade 3 (Construção)*

**Contexto.** O produto precisa ganhar qualidade e sustentar mudança: mais histórias, código mais limpo, testes que protegem e validação contra o que foi acordado na análise.

**Objetivo de aprendizagem.** Construir, refatorar e validar software de forma incremental (*downstream*), com evidências de funcionamento e qualidade.

**Tarefa.**
- **Produto evoluído:** implementação de pelo menos **3 novas histórias** priorizadas, integradas por PR revisado, com CI verde.
- **Testes** derivados dos critérios de aceite, incluindo casos limite/erro.
- **Refatoração:** pelo menos **2 refatorações** na base acumulada, com os testes garantindo que o comportamento se manteve; registrar o cheiro de código atacado e a melhoria obtida.
- **Revisão de código:** registro de 1 revisão (3 problemas encontrados e o que mudou).
- **Validação:** confronto do produto com os critérios de aceite do Trabalho 1 (o que atende / não atende).
- **Retrospectiva 3** + autoavaliação por pares.

**Restrições.** Mesmo caso e mesmo repositório; escopo compatível com o tempo (incremento, não produto completo); consolidar as Aulas 11–14.

**Critérios de aceite (checklist).**
- [ ] Entregue no prazo e no formato solicitado.
- [ ] Código executa; demo/roteiro prova o funcionamento; CI verde.
- [ ] Testes cobrem os critérios de aceite das histórias implementadas.
- [ ] As refatorações estão registradas e protegidas por testes.
- [ ] Commits e PRs mostram evolução incremental e participação dos integrantes.
- [ ] Validação contra os critérios de aceite da Análise apresentada.
- [ ] Retrospectiva e seção "Uso de IA" presentes.

**Prazo.** Aula 15. **Nível de IA.** Colaboradora.

---

## Como a nota é composta

Cada trabalho vale **3,0**. A nota do grupo é ajustada individualmente com base na verificação (explicação, perguntas dirigidas, modificação ao vivo, commits/PRs) e na autoavaliação por pares das retrospectivas: um integrante que não consegue explicar ou modificar a parte que lhe cabe, ou cuja contribuição não aparece no repositório, recebe nota individual inferior à do grupo, mesmo com a entrega coletiva aprovada (premissas 1 e 7).
