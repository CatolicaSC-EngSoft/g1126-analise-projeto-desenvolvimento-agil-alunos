# Trabalhos Maiores — índice

Três trabalhos, um por unidade (**3,0 pontos cada**), **em grupo de 3 a 5 pessoas**, entregues no dia da prova. Não são documentos isolados: são **três iterações de um mesmo produto vivo**, construído sobre o caso [Prato Cheio](caso-alunos.md) a partir do [`g1126-template-prato-cheio`](https://github.com/CatolicaSC-EngSoft/g1126-template-prato-cheio).

| Trabalho | Unidade | Entrega | O que é |
|---|---|---|---|
| [Trabalho 1](trabalhos/trabalho-1-analise-walking-skeleton.md) | 1 — Análise | Aula 5 | Documento de análise + **walking skeleton** rodando com CI verde |
| [Trabalho 2](trabalhos/trabalho-2-projeto-incremento.md) | 2 — Projeto | Aula 10 | Documento de projeto + ADRs + **incremento integrado via PR** revisado |
| [Trabalho 3](trabalhos/trabalho-3-produto-refatoracao.md) | 3 — Construção | Aula 15 | Produto evoluído + **refatoração** protegida por testes + validação |

## Regras comuns

- **Mesmo caso, mesmo repositório público no GitHub** nas três iterações; cada decisão da Análise reaparece justificada no Projeto e implementada na Construção.
- **Stack preferencial:** Node.js 22+ · Express · Vitest, partindo do repositório template [`g1126-template-prato-cheio`](https://github.com/CatolicaSC-EngSoft/g1126-template-prato-cheio) (conexão, schema e CI prontos). Banco: **SQLite** nas Unidades 1 e 2, **PostgreSQL** na Unidade 3 após a refatoração.
- **Outra stack é permitida com ADR justificando** (`docs/adr/0001-escolha-da-stack.md`, entregue no Trabalho 1). Em qualquer stack valem os mesmos compromissos: repositório público, CI verde, rota de saúde, testes por um comando, três comandos documentados no README e banco relacional migrado para PostgreSQL na Unidade 3.
- **CI verde** (GitHub Actions) em todas as entregas; a partir da Unidade 2, toda mudança relevante entra por **Pull Request revisado** por outro integrante.
- **Decisão vale mais que volume:** problema, evidências, alternativas, decisão, justificativa, riscos, limitações e critérios de validação. Documento de até **4 páginas**.
- **Entrega:** canal oficial é o **Teams**; junto, um **branch congelando o estado** no GitHub (`entrega-1`, `entrega-2`, `entrega-3`), com o nome informado na entrega.
- **Retrospectiva** de meia página por iteração, com autoavaliação de contribuição por pares.
- **Nível de IA:** colaboradora, com seção "Uso de IA" declarando o que foi gerado e o que foi alterado.

## Composição da nota (igual nos três)

| Parcela | Pontos | Como é avaliada |
|---|:--:|---|
| Artefato do grupo | 2,0 | Coletiva, por checklist: documento, produto rodando, CI verde |
| Defesa individual | 1,0 | Explicar uma decisão (0,4) · responder sobre outra parte do trabalho (0,3) · modificar ao vivo (0,3) |

A defesa é **escalonada** no dia da prova: conforme cada aluno termina, apresenta-se por 2–3 min. Aluno **sem contribuição registrada no repositório** na iteração perde também a parcela do grupo. A autoavaliação por pares orienta as perguntas, mas não entra no cálculo. A modulação é **independente por trabalho** — quem vai mal numa iteração recupera integralmente na seguinte.

Detalhamento completo de cada trabalho na pasta [`trabalhos/`](trabalhos/).
