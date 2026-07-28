# Contrato pedagógico

**Análise, Projeto e Desenvolvimento Ágil** · Engenharia de Software · Católica de Santa Catarina
Professor: Diogo Vinicius Winck · 2026/2 · Aula em faixa, 19h00–22h30

Este documento é apresentado e discutido na **Aula 1**. Ele tem **duas vias**: o que você se compromete a fazer e o que eu me comprometo a fazer. Um contrato em que só um lado tem obrigações não é contrato.

---

## 1. O que esta disciplina entrega

Ao final do semestre você terá **analisado um problema real, projetado uma solução e construído um software que funciona** — em três iterações do mesmo produto, com testes, integração contínua e decisões registradas.

O que se avalia não é o volume do que você produz, e sim se você **compreende, decide, justifica, verifica e adapta**. Um documento excelente que você não consegue defender não é evidência de aprendizagem.

## 2. Como a aula funciona

Toda aula segue a mesma rotina, para você saber sempre o que esperar:

1. retomada do encontro anterior;
2. objetivo da aula;
3. exposição e discussão — cerca de **70 minutos**;
4. **produção prática** — mais de 2 horas: exercícios, evolução do produto e construção da sua consulta;
5. entrega ou discussão dos resultados.

A aula é o principal ambiente de aprendizagem. A maior parte do que vale nota é produzida aqui, comigo circulando entre os grupos, questionando decisões e introduzindo novas restrições.

## 3. O caso e o produto

Todos trabalham o mesmo caso — **Prato Cheio**, uma plataforma que conecta doadores de alimentos excedentes a ONGs antes que a comida se perca.

Seu grupo constrói **um único produto** para esse caso, entregue em três iterações:

| Unidade | O que é entregue |
|---|---|
| 1 — Análise | Análise do problema + **walking skeleton**: uma fatia fina que executa ponta a ponta, com CI verde |
| 2 — Projeto | Decisões de projeto e ADRs + incremento integrado por **Pull Request revisado** |
| 3 — Construção | Produto evoluído, **refatorado** e validado, com testes |

O software roda desde a Unidade 1. Não existe "entregar tudo na última semana".

**Stack preferencial:** **Node.js 22+ · Express · Vitest**, a partir do repositório template [`g1126-template-prato-cheio`](https://github.com/CatolicaSC-EngSoft/g1126-template-prato-cheio) (botão **Use this template**). A conexão com o banco, o schema e o CI já vêm prontos — vocês implementam o SQL de acesso e as regras de negócio.

**Outra stack é permitida se vocês justificarem.** Registrem um ADR (`docs/adr/0001-escolha-da-stack.md`) na entrega do Trabalho 1, com alternativas, consequências e riscos. Em qualquer stack, o produto precisa garantir: repositório público com **CI verde**, uma **rota de saúde** que responde, **testes automatizados** rodando por um comando, os **três comandos** (instalar, testar, executar) documentados no README, e **banco relacional** migrado para PostgreSQL na Unidade 3.

Fora da stack preferencial vocês assumem o custo: não há template pronto nem solução de referência para comparar, e o apoio em aula é limitado. Isso precisa estar no ADR.

O **banco evolui junto com o produto**: começa em **SQLite** (embutido no Node, nada a instalar) e, na Unidade 3, é **refatorado para PostgreSQL** — decisão registrada em ADR na Unidade 2 e executada com os testes provando que o comportamento se manteve. É de propósito: trocar a camada de dados de um sistema que já funciona é uma das refatorações mais comuns da vida real.

## 4. Avaliação

Cada unidade vale **10 pontos**:

| Item | Pontos | Como funciona |
|---|:--:|---|
| Prova com consulta | 6,0 | Individual, **sem IA**, com a consulta que você mesmo escreveu à mão |
| Trabalho maior | 3,0 | **2,0** do artefato do grupo + **1,0** da sua defesa individual |
| Atividades de aula | 1,0 | **0,25** por encontro de conteúdo, correção binária: entregou no prazo e no formato, pontuou |

### A defesa individual (1,0) — como você ganha a sua parte

No dia da entrega, escalonadamente (conforme cada um termina a prova), você tem 2 a 3 minutos comigo:

| O que | Pontos |
|---|:--:|
| Explicar uma decisão do trabalho e sua justificativa | 0,4 |
| Responder uma pergunta sobre **outra** parte do trabalho, que você não produziu | 0,3 |
| Fazer uma pequena modificação ao vivo, no documento ou no código | 0,3 |

O segundo item é intencional: você precisa responder pelas partes fundamentais do trabalho do grupo, não só pela sua fatia.

**Gatilho objetivo:** quem **não tiver nenhuma contribuição registrada no repositório** na iteração perde também a parcela do grupo. Como os documentos também são versionados, análise e escrita geram commits. É um fato verificável, que você pode conferir antes da entrega.

A defesa é **independente por trabalho**: quem vai mal na Unidade 1 recupera integralmente na Unidade 2. É feedback, não sentença.

### Como é a prova

6 questões sobre o caso Prato Cheio: **3 de múltipla escolha** e **3 abertas**, sendo a última discursiva. Nenhuma questão de definição — todas apresentam um cenário e pedem analisar, decidir, corrigir ou justificar.

| Questão | Tipo | Valor |
|:--:|---|:--:|
| 1 a 3 | Múltipla escolha | 1,6 cada |
| 4 e 5 | Aberta | 1,6 cada |
| 6 | Discursiva | 2,0 |
| | **Total** | **10,0** |

A prova é pontuada em 10,0 e convertida para os 6,0 da unidade (nota × 0,6). Nas de múltipla escolha, **a justificativa de uma linha é obrigatória**: alternativa certa sem justificativa vale metade (0,8).

Cada prova tem versões diferentes distribuídas na sala.

### Nota final

A nota final é a **média simples das três unidades**: (Unidade 1 + Unidade 2 + Unidade 3) ÷ 3.

### Prova substitutiva

Aplicada na **Aula 16**, cumulativa (cobre as três unidades), sem IA, com as consultas das três unidades. Substitui a **nota de prova mais baixa**, valendo o resultado obtido; a unidade correspondente é recalculada antes da média. Substitui **somente nota de prova** — não trabalho, não atividades.

### Se você faltar a uma prova

| Situação | O que acontece |
|---|---|
| Falta **sem** justificativa legal | Nota zero na prova. A recuperação é a **substitutiva** (Aula 16) — que deixa de servir para melhorar a nota mais baixa e passa a repor a prova perdida. |
| Falta **com** atestado válido (ou documento equivalente com validade legal) | Você faz a prova perdida **no dia da próxima prova**, junto com ela. Exemplo: faltou à Prova 1 → na Aula 10 faz a Prova 1 e a Prova 2. |
| Falta à **Prova 3** com atestado | A "próxima prova" é a Aula 16: você faz a Prova 3 nessa data, no lugar da substitutiva. |
| Falta à **substitutiva** | **Não há reposição.** Não existe segunda chamada da substitutiva. |

Quem falta a duas provas sem justificativa recupera apenas uma delas.

## 5. A consulta é sua e você constrói

A única consulta permitida na prova é a que **você mesmo escreveu, à mão, de próprio punho**. A extensão é decisão sua.

Não existe material de consulta pronto, nem meu nem gerado por IA. Sintetizar exige ter compreendido — é por isso que a consulta é, ela mesma, evidência de aprendizagem. E é por isso que as provas são **de aplicação**: nenhuma questão se responde localizando uma definição.

Faltou a uma aula? Você pode produzir aquela parte da consulta **em casa, à mão**. Não se copia a consulta de colega.

**Verificação:** na entrega da prova eu dou uma olhada no material de consulta que você usou. Não há conferência durante a prova nem recolhimento — apenas essa checagem rápida no momento da entrega.

## 6. Uso de inteligência artificial

IA não é proibida aqui: é parte do ambiente de trabalho de um engenheiro de software. Toda atividade declara um de três níveis:

| Nível | O que significa |
|---|---|
| **Sem IA** | Atividade presencial, sem ferramenta. É o caso das provas. |
| **IA para consulta** | Pode esclarecer conceitos, comparar alternativas, revisar seu raciocínio. Não produz a entrega. |
| **IA como colaboradora** | Pode participar da produção — código, testes, requisitos, documentação. |

Em qualquer nível, **a responsabilidade é sua**: verificar, testar, corrigir e defender. Quando a IA participar, registre o que ela gerou e o que você alterou.

**"A IA que escreveu isso" não é justificativa aceita.** Não consegue explicar, corrigir ou modificar o que entregou? Então não há evidência de aprendizagem — independentemente de quem escreveu.

Não uso detectores de IA. Verifico aprendizagem por outros meios: produção acompanhada em sala, prova individual, defesa oral e modificação ao vivo.

## 7. Trabalho em grupo

Grupos de **3 a 5 pessoas**, formados na Aula 1 e mantidos ao longo do semestre. **O grupo é a unidade de todo trabalho da disciplina** — tanto dos três trabalhos maiores quanto dos trabalhos feitos em sala a cada encontro. Um **repositório público no GitHub** por grupo, com:

- **CI (GitHub Actions)** rodando build e testes a cada push — e verde em toda entrega;
- **Pull Request revisado** por outro integrante para toda mudança relevante, a partir da Unidade 2;
- commits que mostram quem fez o quê.

Se um grupo perder integrantes ao longo do semestre (desistência, trancamento, reprovação por falta), **os remanescentes seguem com o mesmo grupo e o mesmo produto**. Não há redistribuição de alunos nem fusão de grupos: o produto continua de onde estava, e a defesa individual segue valendo por pessoa.

**Quem entra depois** (transferência, matrícula tardia) **é alocado no grupo com menos integrantes**. Assume uma história do backlog na iteração corrente, e a defesa individual passa a valer a partir da unidade em que entrou — não responde pelas unidades anteriores à sua entrada.

Nas aulas 4, 9 e 14 o grupo faz uma **retrospectiva** de meia página e uma **autoavaliação de contribuição por pares** (distribuição de 100 pontos). A autoavaliação não entra no cálculo da nota — ela orienta as perguntas que eu faço na defesa individual.

## 8. Antes da primeira aula

Para a Aula 1 não virar sessão de instalação, chegue com:

- **Node.js 22 ou superior** instalado;
- uma **conta no GitHub** ativa;
- um editor de código à sua escolha.

Só isso. Na Aula 1 o projeto sobe e o CI fica verde **sem precisar de banco de dados** — o teste de saúde não depende dele.

### PostgreSQL: necessário a partir da Unidade 3

Até a Unidade 2 o banco é **SQLite**, embutido no Node — nada a instalar. Na **Unidade 3 (Aula 11)** o grupo passa a precisar de um **PostgreSQL acessível**, para executar a refatoração decidida no ADR da Unidade 2.

**Como subir esse banco é escolha do grupo**, e faz parte da decisão registrada no ADR: instalar o PostgreSQL na máquina, subir um contêiner, usar o **GitHub Codespaces** (roda tudo no navegador) ou um **serviço gerenciado gratuito** (Neon, Supabase, Render). O que a disciplina exige é o banco alcançável por `DATABASE_URL`, o schema migrado por `npm run db:migrar` e o CI verde.

Você tem mais de dois meses de margem para resolver isso — e a comparação entre os caminhos é conteúdo, não obstáculo.

## 9. Presença, entregas e prazos

A **presença é registrada por chamada**, conforme a norma da instituição.

As **entregas são feitas pelo Teams**, com **data e hora, e valem independentemente de presença** — quem não veio ainda precisa entregar no prazo, mas perde a orientação e o retorno do momento, que é onde a aula tem mais valor.

Datas que não mudam:

| Data | Encontro | O que acontece |
|---|---|---|
| 03/09 | Aula 5 | Prova 1 + entrega do Trabalho 1 (análise + walking skeleton) |
| 15/10 | Aula 10 | Prova 2 + entrega do Trabalho 2 (projeto + incremento via PR) |
| 26/11 | Aula 15 | Prova 3 + entrega do Trabalho 3 (produto refatorado) |
| 03/12 | Aula 16 | Prova substitutiva cumulativa |

Há também **três noites de trabalho remoto** — **27/08, 08/10 e 19/11** —, sempre na quinta anterior a cada entrega. Nessas noites não há exposição: vocês trabalham no projeto à distância, no horário da aula, e eu fico disponível online para dúvidas. A evidência é o próprio repositório: os commits e PRs dessa noite contam.

## 10. Como entregar

O **canal oficial de entrega é o Teams**. É a data e a hora do Teams que valem — nada entregue por outro meio conta como entrega.

Para os **trabalhos maiores**, além da entrega no Teams o grupo cria no GitHub um **branch com o estado congelado** do que está sendo entregue, e informa o nome desse branch na entrega:

| Trabalho | Branch da entrega |
|---|---|
| Trabalho 1 (Aula 5) | `entrega-1` |
| Trabalho 2 (Aula 10) | `entrega-2` |
| Trabalho 3 (Aula 15) | `entrega-3` |

```bash
git checkout -b entrega-1
git push -u origin entrega-1
```

O branch existe para **congelar o que será avaliado**: a `main` continua evoluindo, mas a correção olha o branch da entrega. Commits feitos nele depois do prazo não são considerados.

## 11. Integridade

Não é aceito: apresentar como seu um trabalho que você não consegue explicar; copiar consulta de colega; entrar como integrante de um grupo sem contribuir; alterar histórico do repositório para simular participação.

É aceito e incentivado: usar IA nos níveis declarados, pedir ajuda a colegas de outros grupos, consultar qualquer fonte — **desde que você compreenda, verifique e consiga defender** o que entrega.

Todos os grupos trabalham o mesmo caso e os repositórios são públicos, então **olhar o repositório de outro grupo é permitido** — inclusive útil, como acontece no mercado. O que não sobrevive é copiar sem entender: na defesa individual você precisa explicar a decisão e modificar o código ao vivo, e aí a diferença entre ter compreendido e ter copiado aparece em segundos.

## 12. As duas vias do contrato

### Eu me comprometo a

- seguir a rotina previsível da aula e respeitar o horário;
- deixar claro, em toda atividade, o contexto, a tarefa, o formato, os critérios de aceite, o prazo e o nível de IA permitido;
- corrigir por **critérios estáveis** e informados antes, sem inventar exigência nova a cada avaliação;
- devolver retorno **próximo do momento da execução**, para você corrigir antes que o erro acumule;
- circular entre os grupos durante a produção, questionando decisões e ajudando a desatolar;
- manter as datas de prova e entrega — não haverá mudança de última hora;
- avaliar pelo atendimento ao objetivo, e não por acabamento estético ou número de páginas.

### Você se compromete a

- produzir em aula: é aqui que a aprendizagem acontece e é verificada;
- entregar no prazo e no formato pedido, mesmo quando faltar;
- construir a sua consulta ao longo das aulas, à mão;
- respeitar o nível de IA declarado e registrar o uso quando pedido;
- contribuir de fato no repositório do grupo, com commits que sustentem sua participação;
- ser capaz de **explicar, corrigir e modificar** qualquer parte do que seu grupo entregou;
- avisar cedo quando algo travar — problema de grupo comunicado no fim do semestre não tem solução.

---

## Aceite

O aceite deste contrato é registrado no **Teams**, na atividade **"Aceite do contrato pedagógico"**. **Ao entregar a atividade, você declara que leu, compreendeu e aceita os termos acima** — não há assinatura em papel.

Na mesma entrega, você informa:

1. **os membros do seu time** (3 a 5 pessoas, nomes completos);
2. **o link do repositório público do grupo no GitHub**.

- **Prazo:** até o fim da **Aula 2**. **Esta entrega não tem nota** — é registro de aceite e de formação de grupo.
- A entrega é **individual** — cada aluno entrega a sua, inclusive quem faltar à Aula 1. Todos os integrantes de um mesmo grupo informam o mesmo time e o mesmo repositório.
- O repositório precisa ser **público**: é por ele que eu acompanho commits, PRs e CI ao longo do semestre.
- Dúvidas sobre qualquer ponto devem ser levantadas na Aula 1 ou 2. Depois disso, as regras seguem como estão para todo o semestre.
