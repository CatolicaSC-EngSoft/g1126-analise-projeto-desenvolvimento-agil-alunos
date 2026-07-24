# Planejamento de Aulas — Análise, Projeto e Desenvolvimento Ágil

*Documento 2 de 3 — ver também "Premissas" e "Detalhamento das Aulas".*

## 1. Estrutura de avaliação

Três ciclos/unidades, cada uma com a mesma estrutura (total 10 pontos por unidade):

| Ciclo | Unidade | Prova com consulta | Trabalho maior (grupo, 3–5) | Atividades de aula |
|-------|---------|:---:|:---:|:---:|
| 1º | **Análise** | 6,0 | 3,0 | 1,0 |
| 2º | **Projeto** | 6,0 | 3,0 | 1,0 |
| 3º | **Construção** | 6,0 | 3,0 | 1,0 |

A estrutura é **sequencial e de aprofundamento** — análise → projeto → construção —, mas não é um waterfall: o software roda desde a Unidade 1 e evolui em iterações (ver seção 2).

## 2. Produto vivo e iterações (walking skeleton)

Cada grupo constrói **um único produto** para o seu caso, entregue em três iterações:

- **Iteração 1 (Unidade 1):** um *walking skeleton* — uma fatia vertical fina que executa ponta a ponta (interface → lógica → dados), publicada com CI verde. A análise profunda da unidade é feita sobre esse esqueleto que já roda.
- **Iteração 2 (Unidade 2):** o produto evolui com novas histórias, agora guiado pelas decisões de projeto e ADRs da unidade, com integração via **Pull Request** revisado.
- **Iteração 3 (Unidade 3):** o produto é aprofundado, **refatorado** e validado; qualidade, testes e reuso ganham foco.

Assim, os três trabalhos maiores deixam de ser "documento, documento, produto" e passam a ser **três incrementos do mesmo produto vivo**. Cada unidade continua com sua ênfase conceitual, mas sempre aplicada a algo que executa.

**Infraestrutura mínima (montada na Unidade 1):** repositório Git por grupo, pipeline de **CI com GitHub Actions** (build + testes a cada push) e **fluxo de Pull Request** para integrar mudanças. A partir da Unidade 2, toda alteração relevante entra por PR revisado por outro integrante.

## 3. Formato da aula (faixa, 19h00–22h30)

Rotina previsível a cada encontro de conteúdo:

1. retomada do encontro anterior;
2. objetivo da aula;
3. exposição e discussão — **~70 min**, com exemplo e contraponto (sugestão: dois blocos, com prática no meio, na aula noturna);
4. exercícios e produção prática — exercícios, evolução do produto vivo e construção da consulta;
5. entrega ou discussão dos resultados.

Com ~3h30 de aula, os 70 min de exposição deixam mais de 2 horas para produção em sala, mantendo a aula como principal ambiente de aprendizagem.

## 4. Consulta autoconstruída (mecanismo central)

A consulta usada na prova é **construída pelo próprio aluno durante as aulas**, não fornecida pronta.

- manuscrita, de próprio punho, com limite de espaço (ex.: **1 folha por unidade**);
- é a **única** consulta permitida na prova — sem material impresso ou gerado por IA;
- **presença gera a consulta**; quem faltar segue o fallback definido, sem copiar a de colega;
- a consulta é, ela mesma, evidência de aprendizagem: sintetizar bem exige ter compreendido.

## 5. Provas com consulta (6,0 por unidade)

Uma prova por unidade, **individual**, com consulta autoproduzida e **sem IA** — checkpoint de fundamento. Questões de interpretação e decisão, nunca reprodução de definição.

## 6. Trabalho maior (3,0 por unidade)

**Em grupo (3 a 5 pessoas)**, prático e verificável, **entregue no dia da prova** da unidade. Cada trabalho é uma **iteração do produto vivo** (ver seção 2), consolidando as atividades da unidade. **Verificação individual:** a prova do dia questiona o trabalho; perguntas dirigidas, modificação ao vivo e histórico de commits/PRs checam a participação de cada integrante. A nota individual pode modular a nota do grupo. Detalhes em "Trabalhos Maiores".

## 7. Retrospectivas

O encontro que **antecede cada prova** (aulas 4, 9 e 14) inclui uma **retrospectiva** curta da iteração: o que decidimos, o que funcionou, o que mudaríamos, próximos passos. A retrospectiva incorpora uma **autoavaliação de contribuição por pares** (formulário curto), que alimenta a modulação individual da nota (premissa 7).

## 8. Atividades de aula (1,0 por unidade)

Pequena entrega ou demonstração a cada encontro, com **correção objetiva**: entregue no prazo e conforme o solicitado.

## 9. Prova substitutiva

Aplicada logo após a última prova; **cumulativa** (cobre as três unidades); **sem IA**; substitui a **menor das três notas de prova**, valendo o resultado obtido; substitui **somente nota de prova**.

## 10. Níveis de IA (referência de partida)

- **Provas:** Sem IA.
- **Atividades de aula:** conforme o objetivo do encontro, declarado caso a caso.
- **Trabalho maior:** IA como colaboradora permitida, com o aluno responsável por verificar, testar, corrigir e defender.

## 11. Calendário — 16 encontros

| Enc. | Unidade | Foco do encontro | IA |
|:--:|:--|:--|:--|
| 1 | Análise | Abertura + ágil e o papel da análise · setup de repositório, CI e PR | Consulta |
| 2 | Análise | Stakeholders, objetivos e conflitos | Consulta |
| 3 | Análise | Requisitos e histórias de usuário · escolha da fatia do walking skeleton | Colaboradora |
| 4 | Análise | Critérios de aceite, hipóteses e riscos · walking skeleton rodando + **Retrospectiva 1** | Colaboradora |
| **5** | **Análise** | **PROVA 1 + entrega do Trabalho 1 (análise + walking skeleton)** | **Sem IA** |
| 6 | Projeto | Decisões de projeto · fluxo de Pull Request | Consulta |
| 7 | Projeto | Modelagem e diagramas | Colaboradora |
| 8 | Projeto | Decisões arquiteturais (ADR) e alternativas | Consulta |
| 9 | Projeto | Não-funcionais e validação · evoluir o incremento + **Retrospectiva 2** | Consulta |
| **10** | **Projeto** | **PROVA 2 + entrega do Trabalho 2 (projeto + incremento via PR)** | **Sem IA** |
| 11 | Construção | Construção incremental (evoluir o produto) | Colaboradora |
| 12 | Construção | Testes a partir dos critérios de aceite | Colaboradora |
| 13 | Construção | Revisão de código e **refatoração** | Consulta |
| 14 | Construção | Integração, validação e evidência · **Retrospectiva 3** | Colaboradora |
| **15** | **Construção** | **PROVA 3 + entrega do Trabalho 3 (produto evoluído + refatoração)** | **Sem IA** |
| **16** | — | **PROVA SUBSTITUTIVA (cumulativa) + fechamento** | **Sem IA** |

O detalhamento de cada encontro (pontos, produção contínua do produto e trabalhos de sala) está no Documento 3.
