# Aula 01 — Abertura, contrato pedagógico e o papel da análise

- **Unidade:** 1 — Análise
- **Nível de IA:** IA para consulta
- **Evidência da aula:** enunciado do problema + lista de incertezas
- **Observação:** apresentação e aceite do contrato pedagógico; formação dos grupos (3 a 5 pessoas); atribuição do caso; início da consulta da unidade
- **Material:** `slides/aula-01-*.pptx` (26 slides) · `contrato-pedagogico.md` · `caso-alunos.md`

## Estrutura do encontro

A aula tem duas partes. A primeira fecha o **contrato pedagógico** — é o único encontro em que isso ocupa tempo de exposição, e vale o investimento: quase toda dúvida de critério do semestre se resolve aqui. A segunda entra no conteúdo.

## Parte 1 — Contrato pedagógico

Percorrer o documento `contrato-pedagogico.md` com a turma, ponto a ponto:

- **O que a disciplina entrega** — três iterações de um produto que funciona; o que se avalia é compreender, decidir, justificar, verificar e adaptar, não volume.
- **Como a aula funciona** — rotina previsível: retomada → objetivo → exposição (~70 min) → produção (mais de 2h) → entrega.
- **Avaliação** — 6,0 prova + 3,0 trabalho + 1,0 atividades, igual nas três unidades.
- **A defesa individual** — como o aluno ganha o seu 1,0: explicar uma decisão (0,4), responder sobre outra parte do trabalho (0,3), modificar ao vivo (0,3). Explicar o gatilho de contribuição no repositório.
- **A consulta autoconstruída** — manuscrita, extensão a critério do aluno, única permitida; por isso as provas são de aplicação.
- **Os três níveis de IA** — sem IA, para consulta, colaboradora; a responsabilidade é sempre do aluno; não há uso de detectores.
- **Grupo, repositório e Pull Request** — grupos de 3 a 5, CI verde, PR revisado a partir da Unidade 2, retrospectivas nas aulas 4, 9 e 14.
- **Presença, entregas e as quatro datas que não mudam** — aulas 5, 10, 15 e 16.
- **As duas vias do contrato** — ler em voz alta os compromissos do professor e os do aluno. Fechar o acordo.
- **A atividade de aceite** — abrir o Teams na hora e mostrar onde entregam: o aceite, os membros do time e o link do repositório público.

Encerrar abrindo espaço para dúvidas: o que não for questionado na Aula 1 ou 2 segue como está no semestre.

## Parte 2 — Pontos a abordar
- Agilidade além das cerimônias: entrega incremental e decisão sob incerteza.
- Diferença entre problema e requisito; por que começar pelo problema.
- O que é "analisar": ler contexto, restrições e dados incompletos.
- Produto vivo: walking skeleton, CI e Pull Request — o que vamos montar hoje.

## Produção contínua (todos os grupos)
- Formar o grupo (3 a 5 pessoas) e receber o caso **Prato Cheio** (`caso-alunos.md`).
- Criar o **repositório público no GitHub** pelo botão **Use this template** em [`g1126-template-prato-cheio`](https://github.com/CatolicaSC-EngSoft/g1126-template-prato-cheio), confirmar o **CI verde** no GitHub Actions e testar o fluxo de Pull Request.
- Decidir a stack: a preferencial é a do template. Quem quiser outra assume o ADR de justificativa, entregue no Trabalho 1.
- Registrar a **evidência do encontro** no repositório: o enunciado do problema e a lista de incertezas vão para as seções `## Problema central` e `## Incertezas` de `docs/analise.md`, que já vem no template. É o começo do documento do Trabalho 1 — não um texto descartável.
- Rodar `npm install`, `npm run db:migrar`, `npm test` e `npm start` — todos os integrantes com o projeto executando na própria máquina. O banco é SQLite, embutido no Node: **nada a instalar**. Avisar para não clonar em pasta sincronizada (OneDrive/Drive), onde o SQLite falha.
- Entregar no Teams a atividade **"Aceite do contrato pedagógico"**, informando os **membros do time** e o **link do repositório público**. Prazo: até o fim da Aula 2.

## Trabalhos em sala (em grupo — fazer as três)
1. Reescrever um "pedido de cliente" mal formulado, separando o problema real da solução que já vinha embutida.
2. A partir de um caso curto, listar 5 incertezas que precisam ser resolvidas antes de projetar qualquer solução.
3. Identificar no caso três restrições (prazo, técnica, negócio) e explicar como cada uma limita as soluções possíveis.
