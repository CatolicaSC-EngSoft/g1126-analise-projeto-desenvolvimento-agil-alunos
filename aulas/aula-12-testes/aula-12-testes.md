# Aula 12 — Testes a partir dos critérios de aceite

- **Unidade:** 3 — Construção
- **Nível de IA:** IA como colaboradora
- **Evidência da aula:** conjunto de testes de uma história
- **Observação:** o professor introduz uma mudança de contexto durante a aula — o produto e as decisões do grupo precisarão responder a ela.
- **Material:** `slides/aula-12-testes.pptx`

## Pontos a abordar
- Do critério de aceite ao caso de teste.
- Tipos de teste (unidade, integração) — o suficiente para o caso.
- Teste como evidência objetiva de funcionamento e como rede de proteção para refatorar.
- Casos limite e caminhos de erro.
- IA para gerar testes: cobertura real × aparente.

## Produção em sala — entrega do encontro

- Escrever os **testes dos critérios de aceite** de uma história: trocar os `it.todo` por testes de verdade.
- Acrescentar **2 casos limite ou de erro** que o critério original não previa.
- **Inverter uma regra no código** e verificar quantos testes continuam verdes — é assim que se descobre teste que passa sem validar nada. Desfazer a inversão ao final.
- Garantir o CI verde antes de encerrar.

**Entrega do encontro:** os testes no repositório e o resultado da inversão de regra (quantos testes deixaram de pegar o erro).
