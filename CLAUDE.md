# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## O que é este repositório

Material de condução da disciplina **Análise, Projeto e Desenvolvimento Ágil** (Engenharia de Software, Católica de Santa Catarina, 2026/2 — prof. Diogo Vinicius Winck). Duas naturezas convivem aqui:

1. **Documentação da disciplina** em Markdown pt-BR (premissas, planejamento, aulas, trabalhos, caso) — o volume do repo.
2. **Dois projetos Node.js** (`template-repo/`, `solucao-referencia/`) que materializam o caso: o template que os grupos clonam e a solução de referência do professor.

Toda escrita nova em português, no mesmo registro dos documentos existentes (frases curtas, negrito para termos-chave, tabelas para calendário/avaliação). Comentários e nomes no código também são em pt-BR — manter.

Os repositórios dos grupos são **outros** repos (um por grupo, clonados do template, com GitHub Actions e PR). Este repo especifica o que aqueles devem conter e fornece o ponto de partida.

## Arquitetura da documentação

Há duas camadas, e a de baixo é **derivada** da de cima. Alterar uma sem propagar para a outra é o erro mais fácil de cometer aqui.

**Camada canônica (fonte da verdade):**

| Arquivo | Papel |
|---|---|
| `01-premissas.md` | As 8 premissas + princípio orientador. Base conceitual de todo o resto. |
| `02-planejamento-de-aulas.md` | Avaliação, formato da aula, consulta autoconstruída, provas, retrospectivas, calendário dos 16 encontros (§11). |
| `03-detalhamento-das-aulas.md` | Por encontro: pontos a abordar, produção contínua, 3 trabalhos de sala. |
| `trabalhos-maiores.md` | Os 3 trabalhos maiores como iterações do mesmo produto vivo + critérios de aceite. |
| `caso.md` | O caso único da disciplina ("Prato Cheio") entregue na Aula 1. |
| `plano-de-aula.md` | Plano de ensino oficial enviado à coordenação (ementa, bibliografia, carga por unidade). Documento institucional — mudar só com motivo. |

**Camada derivada (uma cópia por unidade de entrega):**

- `aulas/aula-NN-slug/aula-NN-slug.md` — pasta e arquivo com o **mesmo nome**; 16 pastas, extraídas de `03-detalhamento-das-aulas.md`.
- `trabalhos/trabalho-N-slug.md` — extraídos de `trabalhos-maiores.md`, com detalhe extra (tabela "De onde vem (aula a aula)", estrutura sugerida do repositório do grupo, defesa individual).

O código (`template-repo/`, `solucao-referencia/`) é a terceira materialização do mesmo desenho — ver seção própria abaixo.

## Invariantes que precisam ser mantidos em sincronia

Ao editar qualquer coisa que toque nestes números, verifique **todos** os lugares:

- **Calendário 16 encontros:** `02-planejamento-de-aulas.md` §11 ↔ `03-detalhamento-das-aulas.md` ↔ nomes das pastas em `aulas/`. Unidade 1 = aulas 1–5, Unidade 2 = 6–10, Unidade 3 = 11–15, aula 16 = substitutiva cumulativa.
- **Avaliação:** 6,0 prova + 3,0 trabalho + 1,0 atividades = 10 por unidade. Aparece em `README.md`, `02-planejamento`, `plano-de-aula.md` e `trabalhos-maiores.md`.
- **Entregas:** Trabalho 1 → aula 5, Trabalho 2 → aula 10, Trabalho 3 → aula 15 (sempre no dia da prova da unidade).
- **Retrospectivas:** aulas 4, 9 e 14 (a que antecede cada prova), com autoavaliação de contribuição por pares.
- **Nível de IA:** toda atividade declara um de três — *Sem IA* (provas), *IA para consulta*, *IA como colaboradora*. O nível no header do arquivo de aula deve bater com a coluna "IA" do calendário.
- **Referências a premissa por número** (`premissa 4`, `premissas 1 e 7`) devem apontar para uma das 8 premissas existentes — não há premissa 9 ou 10.
- **Índice do `README.md`:** ao acrescentar documento ou diretório de topo, incluir linha na tabela "Estrutura do repositório".
- **`template-repo/` ↔ `solucao-referencia/`:** infraestrutura idêntica (`package.json`, `.github/workflows/ci.yml`, `public/index.html`, estrutura de pastas). Mexer na infra de um exige espelhar no outro; a diferença deve ficar restrita a `src/doacoes.js`, `src/repositorio.js` e `tests/`.
- **Stack obrigatória:** Node.js 20 + Express + Vitest (+ supertest), ESM (`"type": "module"`), dados em memória por padrão — persistência é decisão do grupo e virá como ADR na Unidade 2. Declarada em `02-planejamento-de-aulas.md` §2 e no `README.md`; se mudar, muda nos dois e nos dois projetos.

## Modelo pedagógico (o que não pode ser diluído)

O eixo do curso é o **produto vivo**: cada grupo constrói **um único produto** para o caso, em três iterações — *walking skeleton* (fatia vertical que executa ponta a ponta, com CI verde) na Unidade 1, incremento guiado por decisões de projeto/ADRs via **PR revisado** na Unidade 2, produto refatorado e testado na Unidade 3. A estrutura é sequencial (análise → projeto → construção) mas **não é waterfall**: o software roda desde a Unidade 1, e a análise é feita sobre algo que já executa. Propostas que transformem os trabalhos em "documento, documento, produto" contrariam o desenho.

Duas regras derivadas que aparecem em quase toda entrega: **decisão vale mais que volume** (problema, evidências, alternativas, decisão, justificativa, riscos, limitações, critérios de validação — e um teto de 4 páginas) e **participação individual verificável** (explicação, pergunta dirigida, modificação ao vivo, commits/PRs; a nota individual modula a do grupo).

A **consulta é autoconstruída** pelo aluno, manuscrita e de próprio punho, com extensão a critério dele, e é a única permitida na prova — nunca gerar material de consulta pronto para os alunos.

## Padrão dos arquivos de aula

Ao criar ou editar `aulas/aula-NN-*/`, seguir a forma dos existentes:

```markdown
# Aula NN — Título

- **Unidade:** N — Análise|Projeto|Construção
- **Nível de IA:** ...
- **Evidência da aula:** <a pequena entrega do encontro>
- **Observação:** <só quando houver marco, ex.: escolha da história zero>

## Pontos a abordar          (3–5 bullets, ~70 min de exposição)
## Produção contínua (todos os grupos)   (só nas aulas que evoluem o produto: 1, 3, 4, 6, 9, 11, 13, 14)
## Trabalhos em sala (duplas/trios — escolher 1)
```

As 3 opções de trabalho de sala têm padrão fixo: **1** produz o artefato direto, **2** exige análise ou transformação, **3** quase sempre usa e critica IA. Aulas de prova (5, 10, 15) e a aula 16 não têm trabalho de sala — encerram com `_Sem trabalho de sala._`.

## Os dois projetos Node

Mesma aplicação, dois estados. `template-repo/` é o que o aluno recebe: `src/app.js` (rotas Express e `/api/saude`), `public/index.html` (interface mobile), CI verde e **um** teste passando — o de saúde, que prova que a aplicação sobe. As regras de negócio (`src/doacoes.js`, `src/repositorio.js`) são stubs que lançam `não implementado: ...`, e os critérios de aceite da história zero estão em `tests/doacoes.test.js` como `it.todo` (não quebram o CI; o grupo troca cada um por um `it` de verdade conforme implementa, seguindo o exemplo comentado no fim do arquivo). `solucao-referencia/` é o mesmo projeto com a história zero implementada — 3 testes passando.

A **história zero** é sempre a mesma: doador publica doação (tipo, quantidade, validade) → ONG vê as disponíveis → ONG aceita e a doação sai da lista para as demais.

Ao evoluir o template, preservar o desenho pedagógico: infraestrutura pronta, regra de negócio em aberto. Implementar os stubs do `template-repo/` destruiria o Trabalho 1.

## Comandos

Documentação: sem build, teste ou lint — editar Markdown e commitar.

Código (rodar dentro de `template-repo/` ou `solucao-referencia/`; requer Node 20+):

```bash
npm install                                   # só na primeira vez
npm test                                      # vitest run
npm start                                     # http://localhost:3000
npm run dev                                   # node --watch
npx vitest run tests/doacoes.test.js          # um arquivo de teste
npx vitest run -t "responde na verificação"   # um teste pelo nome
npx vitest                                    # modo watch
```

O CI (`.github/workflows/ci.yml`) roda em push na `main` e em todo PR: `npm ci`, `npm test` e um smoke test que sobe o servidor e faz `curl --fail` em `/api/saude`. Quebrar essa rota quebra o CI de todos os grupos.

Git: ver a política de branch/merge no `CLAUDE.md` global deste computador.

## Limites

- **`antigos/`** (pptx/xlsx de semestres anteriores, planilhas de notas com dados de alunos) é **gitignored de propósito**. Não versionar, não citar conteúdo dele em documento distribuído, não reintroduzir no índice.
- **`caso.md`** termina com a seção *"Notas para o professor (não distribuir aos alunos)"* — injeções de mudança de contexto por unidade. Nunca copiar esse conteúdo para material do aluno nem para os arquivos de `aulas/`.
- **`solucao-referencia/`** é material do professor (`LEIA-ME-PROFESSOR.md`: "NÃO DISTRIBUIR AOS ALUNOS"). Não referenciar em documento distribuído, não copiar sua `src/` para o `template-repo/`.
- **`.github/instructions/codacy.instructions.md`** existe localmente e também é gitignored ("Ignore vscode AI rules"). São regras do Codacy MCP apontando para `gh:CatolicaSC-EngSoft/g1126-analise-projeto-desenvolvimento-agil`; como o repo não tem código, análise estática não se aplica aqui.
