# Planejamento de Aulas — Análise, Projeto e Desenvolvimento Ágil

*Documento 2 de 3 — ver também "Premissas" e "Detalhamento das Aulas".*

## 1. Quem são os alunos

Turma de **6ª fase de Engenharia de Software**, com **Desenvolvimento, Testes, Programação server-side e Banco de Dados já cursados**. Isso define o que a disciplina **não** faz: não ensina a programar, não ensina o que é um teste automatizado, não ensina SQL nem versionamento básico.

O que ela agrega sobre essa base: **analisar o problema antes de codificar, decidir com informação incompleta, justificar a escolha, verificar o resultado e adaptar quando o contexto muda**. A stack (Node, Express, Vitest, SQLite, PostgreSQL) é território conhecido — usada como meio, não como conteúdo. É por isso que o repositório template entrega a infraestrutura pronta: o tempo de aula não deve ser gasto em configuração, e sim em decisão.

Consequência prática para a condução: quando um bloco de conteúdo parecer básico para a turma, encurte a exposição e alongue a produção. O risco nesta turma não é a dificuldade técnica — é a pressa de codificar antes de entender o problema.

## 2. Estrutura de avaliação

Três ciclos/unidades, cada uma com a mesma estrutura (total 10 pontos por unidade):

| Ciclo | Unidade | Prova com consulta | Trabalho maior (grupo, 3–5) | Atividades de aula |
|-------|---------|:---:|:---:|:---:|
| 1º | **Análise** | 6,0 | 3,0 | 1,0 |
| 2º | **Projeto** | 6,0 | 3,0 | 1,0 |
| 3º | **Construção** | 6,0 | 3,0 | 1,0 |

A estrutura é **sequencial e de aprofundamento** — análise → projeto → construção —, mas não é um waterfall: o software roda desde a Unidade 1 e evolui em iterações (ver seção 2).

## 3. Produto vivo e iterações (walking skeleton)

Cada grupo constrói **um único produto** para o seu caso, entregue em três iterações:

- **Iteração 1 (Unidade 1):** um *walking skeleton* — uma fatia vertical fina que executa ponta a ponta (interface → lógica → dados), publicada com CI verde. A análise profunda da unidade é feita sobre esse esqueleto que já roda.
- **Iteração 2 (Unidade 2):** o produto evolui com novas histórias, agora guiado pelas decisões de projeto e ADRs da unidade, com integração via **Pull Request** revisado.
- **Iteração 3 (Unidade 3):** o produto é aprofundado, **refatorado** e validado; qualidade, testes e reuso ganham foco.

Assim, os três trabalhos maiores deixam de ser "documento, documento, produto" e passam a ser **três incrementos do mesmo produto vivo**. Cada unidade continua com sua ênfase conceitual, mas sempre aplicada a algo que executa.

**Caso.** Todos os grupos trabalham o mesmo caso — **Prato Cheio** (ver `caso-alunos.md`).

**Stack preferencial: Node.js 22+ · Express · Vitest.** É a stack do repositório template [`g1126-template-prato-cheio`](https://github.com/CatolicaSC-EngSoft/g1126-template-prato-cheio), que já entrega estrutura, interface, rota de saúde, CI configurado e um teste passando, com as regras de negócio da história zero em stubs e os critérios de aceite como `it.todo`. O banco evolui junto com o produto: **SQLite** (módulo `node:sqlite`, embutido — nada a instalar) nas Unidades 1 e 2, e **PostgreSQL** na Unidade 3, após uma refatoração decidida por ADR.

**Outra stack é permitida, desde que justificada.** O grupo que quiser usar outra linguagem ou framework registra um **ADR** (`docs/adr/0001-escolha-da-stack.md`), entregue no **Trabalho 1**, com contexto, alternativas, decisão, consequências e riscos assumidos. Escolher a stack é, ela mesma, uma decisão de projeto — e a disciplina avalia decisões justificadas.

**O que qualquer stack precisa garantir** (é o que mantém a correção uniforme e o que o checklist verifica):

| Compromisso | Por quê |
|---|---|
| Repositório público no GitHub com **CI verde** (GitHub Actions) | é a evidência objetiva de que o produto roda |
| Uma **rota de verificação de saúde** que responde 200 | o CI e o professor checam que a aplicação sobe |
| **Testes automatizados**, executáveis por um comando único | os critérios de aceite precisam ser verificáveis |
| **Três comandos documentados no README**: instalar, testar, executar | qualquer pessoa reproduz sem perguntar |
| **Banco relacional**, migrado para PostgreSQL na Unidade 3 | a refatoração da Unidade 3 é conteúdo, não opção |

**O custo é do grupo.** Fora da stack preferencial não há template pronto, não há solução de referência para comparar, e o apoio em aula é limitado — o tempo do professor está calibrado para a stack do template. Isso faz parte das consequências que o ADR precisa reconhecer.

**Pré-requisitos, em duas etapas** — para a Aula 1 não virar sessão de instalação:

- **Aulas 1 a 10:** apenas **Node.js 22+** e conta no GitHub. O SQLite é embutido no Node, então o walking skeleton roda sem instalar banco nenhum.
- **Unidade 3 (a partir da Aula 11):** um **PostgreSQL acessível**, para a refatoração. São mais de dois meses de margem para providenciar.

Como subir esse PostgreSQL é **decisão do grupo**, comparada no ADR da Unidade 2: instalar na máquina, subir um contêiner, usar **GitHub Codespaces** ou um **serviço gerenciado gratuito** (Neon, Supabase, Render). A disciplina não impõe o caminho — exige o banco alcançável por `DATABASE_URL`, o schema migrado e o CI verde.

**Infraestrutura mínima (montada na Unidade 1):** repositório Git por grupo, pipeline de **CI com GitHub Actions** (build + testes a cada push) e **fluxo de Pull Request** para integrar mudanças. A partir da Unidade 2, toda alteração relevante entra por PR revisado por outro integrante.

## 4. Formato da aula (faixa, 19h00–22h30)

Rotina previsível a cada encontro de conteúdo:

1. retomada do encontro anterior;
2. objetivo da aula;
3. exposição e discussão — **~70 min**, com exemplo e contraponto (sugestão: dois blocos, com prática no meio, na aula noturna);
4. exercícios e produção prática — exercícios, evolução do produto vivo e construção da consulta;
5. entrega ou discussão dos resultados.

Com ~3h30 de aula, os 70 min de exposição deixam mais de 2 horas para produção em sala, mantendo a aula como principal ambiente de aprendizagem.

## 5. Consulta autoconstruída (mecanismo central)

A consulta usada na prova é **construída pelo próprio aluno durante as aulas**, não fornecida pronta.

- **manuscrita, de próprio punho** — o número de páginas é decisão do aluno;
- é a **única** consulta permitida na prova — sem material impresso ou gerado por IA;
- quem faltar a um encontro pode **produzir aquela parte da consulta em casa, à mão** — não se copia a de colega;
- na **substitutiva**, o aluno pode usar as consultas das três unidades;
- a consulta é, ela mesma, evidência de aprendizagem: sintetizar bem exige ter compreendido.

**Verificação:** feita **na entrega da prova** — uma olhada rápida no material que o aluno usou, sem conferência durante a prova e sem recolhimento.

Como a consulta não tem limite de páginas, as provas são **necessariamente de aplicação**: nenhuma questão deve ser respondível por localização de definição (premissa 6).

## 6. Provas com consulta (6,0 por unidade)

Uma prova por unidade, **individual**, com consulta autoproduzida e **sem IA** — checkpoint de fundamento. Questões de interpretação e decisão, nunca reprodução de definição.

**Formato:** 6 questões — 3 de múltipla escolha (com justificativa obrigatória de uma linha) e 3 abertas, sendo a última discursiva. A prova é pontuada em **10,0** (cinco questões de 1,6 + a discursiva de 2,0) e **convertida para os 6,0 da unidade** (nota × 0,6). Cada prova tem **3 versões** e **2 ordens de questões** por versão, totalizando 6 cadernos.

## 7. Trabalho maior (3,0 por unidade)

**Em grupo (3 a 5 pessoas)** — o mesmo grupo dos trabalhos de sala —, prático e verificável, **entregue no dia da prova** da unidade.

**Canal de entrega:** o **Teams é o canal oficial** — é a data e hora dele que valem. Junto, o grupo cria no GitHub um **branch congelando o estado entregue** (`entrega-1`, `entrega-2`, `entrega-3`) e informa o nome na entrega do Teams. A `main` segue evoluindo; a correção olha o branch. Commits posteriores ao prazo nesse branch não contam. Cada trabalho é uma **iteração do produto vivo** (ver seção 2), consolidando as atividades da unidade.

**Composição da nota (3,0):**

| Parcela | Pontos | Como é avaliada |
|---|:--:|---|
| Artefato do grupo | 2,0 | Coletiva, por checklist: documento, produto rodando, CI verde |
| Defesa individual | 1,0 | Individual, no dia da entrega (ver abaixo) |

**Defesa individual (1,0), por aluno:**

- **0,4** — explicar uma decisão do trabalho e sua justificativa;
- **0,3** — responder a uma pergunta dirigida sobre **outra** parte do trabalho, que ele não produziu (premissa 7: cada estudante responde pelas partes fundamentais do trabalho coletivo);
- **0,3** — fazer uma pequena modificação ao vivo, no documento ou no código.

**Gatilho objetivo:** o aluno **sem nenhuma contribuição registrada no repositório** na iteração perde também a parcela do grupo — como os documentos também ficam no repositório, análise e escrita geram commits. É um fato verificável no histórico, que o aluno pode conferir antes.

**A modulação vale por trabalho, de forma independente:** quem vai mal na defesa da Unidade 1 pode recuperar integralmente na Unidade 2. A defesa é feedback, não sentença.

**Grupo que perde integrantes:** os remanescentes seguem com o mesmo grupo e o mesmo produto. Não há redistribuição nem fusão de grupos. **Aluno que entra depois** é alocado no grupo com menos integrantes, assume uma história da iteração corrente e sua defesa individual conta a partir da unidade em que entrou.

**Logística (turma de 32 a 40 alunos, 8 a 10 grupos):** a defesa é **escalonada** — conforme cada aluno termina a prova, apresenta-se para os 2–3 min de defesa e encerra o encontro. A fila se distribui sozinha e não há bloco morto de tempo.

Detalhes por trabalho em `trabalhos/`.

## 8. Retrospectivas

O encontro que **antecede cada prova** (aulas 4, 9 e 14) inclui uma **retrospectiva** curta da iteração: o que decidimos, o que funcionou, o que mudaríamos, próximos passos.

A retrospectiva inclui uma **autoavaliação de contribuição por pares** (distribuição de 100 pontos entre os integrantes). Ela é usada como **sinal, não como cálculo**: em grupos pequenos a distribuição tende à reciprocidade ("20/20/20/20/20"), então entrar na fórmula premiaria o combinado. Quando um grupo destoa desse padrão, é ali que o professor direciona as perguntas da defesa individual.

## 9. Atividades de aula (1,0 por unidade)

Pequena entrega ou demonstração a cada encontro de conteúdo, com **correção objetiva** e binária: entregou no prazo e no formato, pontuou; não entregou, não pontuou.

Cada unidade tem 4 encontros de conteúdo, então **cada atividade vale 0,25**. As entregas são feitas **pelo Teams**, com data e hora, e valem **independentemente de presença** — a presença é registrada separadamente, por chamada.

Na Aula 1 há uma entrega específica, sem nota: a atividade **"Aceite do contrato pedagógico"** (ver `contrato-pedagogico.md`), em que cada aluno aceita o contrato e informa os **membros do time** e o **link do repositório público no GitHub**. Prazo: até o fim da Aula 2.

## 10. Nota final

A nota final é a **média simples das três notas de unidade** (cada uma de 0 a 10):

> **Nota final = (Unidade 1 + Unidade 2 + Unidade 3) ÷ 3**

Cada unidade compõe seus 10 pontos com prova (6,0), trabalho (3,0) e atividades (1,0). A substitutiva altera **apenas a nota da prova mais baixa**, e a unidade correspondente é recalculada antes da média.

## 11. Prova substitutiva

Aplicada logo após a última prova; **cumulativa** (cobre as três unidades); **sem IA**, com as consultas manuscritas das três unidades; substitui a **nota de prova mais baixa**, valendo o resultado obtido; substitui **somente nota de prova**.

**Falta em prova:**

| Situação | Regra |
|---|---|
| Falta sem justificativa | Zero na prova; a recuperação é a substitutiva (Aula 16), que passa a repor em vez de melhorar |
| Falta com atestado válido | Faz a prova perdida **no dia da próxima prova** (faltou à Prova 1 → faz Prova 1 e Prova 2 na Aula 10) |
| Falta à Prova 3 com atestado | Faz a Prova 3 na Aula 16, no lugar da substitutiva |
| Falta à substitutiva | **Sem reposição** — não há segunda chamada |

## 12. Níveis de IA (referência de partida)

- **Provas:** Sem IA.
- **Atividades de aula:** conforme o objetivo do encontro, declarado caso a caso.
- **Trabalho maior:** IA como colaboradora permitida, com o aluno responsável por verificar, testar, corrigir e defender.

## 13. Calendário — 21 quintas: 16 encontros, 3 noites de trabalho e 2 reservas

Datas de 2026.2 (quintas-feiras) em `calendario-2026-2.md`. O semestre tem **21 quintas**: os 16 encontros, 3 noites de trabalho remoto e **2 datas de reserva** (10/12 e 17/12) para reposição, plantão ou atividade complementar. Além dos 16 encontros, há **3 noites de trabalho remoto** (27/08, 08/10 e 19/11), uma por bloco, sempre na quinta que antecede a entrega: os grupos trabalham no projeto à distância, com o professor disponível online, e a evidência é o próprio repositório.

| Enc. | Unidade | Foco do encontro | IA |
|:--:|:--|:--|:--|
| 1 | Análise | Abertura + ágil e o papel da análise · setup de repositório, CI e PR | Consulta |
| 2 | Análise | Stakeholders, objetivos e conflitos | Consulta |
| 3 | Análise | Requisitos e histórias de usuário · escolha da fatia do walking skeleton | Colaboradora |
| 4 | Análise | Critérios de aceite, hipóteses e riscos · walking skeleton rodando + **Retrospectiva 1** | Colaboradora |
| **5** | **Análise** | **PROVA 1 + entrega do Trabalho 1 (análise + walking skeleton)** | **Sem IA** |
| 6 | Projeto | Do problema à solução: decisões de projeto · fluxo de Pull Request | Consulta |
| 7 | Projeto | Modelagem e diagramas | Colaboradora |
| 8 | Projeto | Decisões arquiteturais (ADR) e alternativas | Consulta |
| 9 | Projeto | Não-funcionais e validação · evoluir o incremento + **Retrospectiva 2** | Consulta |
| **10** | **Projeto** | **PROVA 2 + entrega do Trabalho 2 (projeto + incremento via PR)** | **Sem IA** |
| 11 | Construção | Da decisão ao código: construção incremental | Colaboradora |
| 12 | Construção | Testes a partir dos critérios de aceite | Colaboradora |
| 13 | Construção | Revisão de código e **refatoração** | Consulta |
| 14 | Construção | Integração, validação e evidência · **Retrospectiva 3** | Colaboradora |
| **15** | **Construção** | **PROVA 3 + entrega do Trabalho 3 (produto evoluído + refatoração)** | **Sem IA** |
| **16** | — | **PROVA SUBSTITUTIVA (cumulativa) + fechamento** | **Sem IA** |

O detalhamento de cada encontro (pontos, produção contínua do produto e trabalhos de sala) está no Documento 3.
