# Atividade da Aula 4 — Critérios de aceite, hipóteses e riscos

**Valor:** 0,25 (fecha o 1,0 de atividades de aula da Unidade 1)
**Formato:** produção em grupo (3 a 5 pessoas), **entrega individual** aqui no AVA
**Prazo:** hoje, 27/08, até 23h59

> Esta é a **última atividade antes da entrega**. Depois de hoje, o Trabalho 1 é fechamento: em **03/09** vocês entregam o branch `entrega-1`, fazem a Prova 1 e cada um defende individualmente o que está no repositório.

---

## O que o grupo produz

Quatro seções do arquivo **`docs/analise.md`**, mais o **walking skeleton rodando** e a **Retrospectiva 1**. Os nomes das seções são exatamente estes — a correção procura por eles. **As quatro já existem no template**: nada a criar à mão hoje.

### 1. `## Critérios de aceite`

**Três histórias** da tabela `## Histórias de usuário`, cada uma com seus critérios em **Dado / Quando / Então**. Uma delas é obrigatoriamente a **história zero** (a marcada com ★ na Aula 3).

O formato é fácil de imitar e fácil de errar. Três regras:

- **O "Dado" é estado, não ação.** "Dado que o doador abre a tela" é um Quando disfarçado. "Dado que existe uma doação publicada e ainda não aceita" é estado.
- **O "Então" é observável de fora.** Se para verificar é preciso abrir o banco ou ler o código, ainda não é critério de aceite — é detalhe de implementação.
- **Todo caminho que o negócio proíbe tem critério.** A regra "uma doação, depois de aceita, não fica disponível para outra" só está coberta quando existe um critério que descreve **a segunda ONG tentando aceitar**.

**O teste do critério:** dá para transformá-lo num `it()` sem perguntar nada a mais para o grupo? Se sim, é critério. Se não, é intenção.

**Critério de aceite não é teste** — é o combinado sobre quando a história está pronta. O teste é a máquina verificando esse combinado. Um critério pode virar vários testes; um teste sem critério por trás é código sem acordo.

### 2. `## Riscos`

**Dois riscos**, na tabela do template, com probabilidade, impacto e mitigação.

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|

Duas exigências:

- **Declarem a escala** que usaram (alta/média/baixa serve), em uma linha acima da tabela. Sem escala declarada, "média" não quer dizer nada.
- **A mitigação é uma ação com dono e prazo.** "Ficar atento ao prazo" e "melhorar a comunicação" não são mitigações. "Até 30/08, o Pedro publica a fatia sem a validade e mede se o CI passa" é.

Risco é sobre **o produto e a iteração**, não sobre a nota. "Alguém do grupo pode faltar" é risco real do projeto de vocês — vale. "Podemos tirar nota baixa" é consequência, não risco.

### 3. `## Hipótese e experimento`

**Uma** hipótese, escrita como afirmação falsificável, com o experimento que a testa.

O caso entrega a suposição pronta: **a Marta acha que o gargalo é o tempo de coleta, e não há medição que confirme.** Há outras, igualmente boas: que os doadores vão topar cadastrar cada doação; que a proximidade da ONG é o que decide a coleta; que a janela curta do perecível é o que faz a comida se perder.

O formato:

```
Acreditamos que <afirmação sobre o mundo, não sobre o software>.
Saberemos que estávamos errados se <medida> for <valor> até <data>.
Como medimos: <de onde sai o número>.
```

**Suposição vira hipótese quando existe um resultado que a derruba.** Se nenhum número imaginável faz o grupo mudar de ideia, o que está escrito é crença, não hipótese — e o item não pontua.

O experimento não precisa de software. Vinte minutos de conversa com dois doadores é experimento; uma planilha de dez linhas é experimento. O que ele precisa é **poder acontecer nas próximas semanas, com orçamento próximo de zero**.

### 4. `## Decisão de análise`

Esta seção ficou **reservada desde a Aula 2** — o conflito de prioridade foi para `## Conflitos de prioridade`, e este é o lugar da decisão. Os quatro campos do template:

- **Problema** — o que estava em aberto e precisava ser resolvido para a iteração 1 andar.
- **Alternativas** — **no mínimo duas**, cada uma com o que se ganha e o que se perde. Alternativa que ninguém consideraria de verdade é enfeite; se as duas opções não eram defensáveis, escolham outro problema.
- **Decisão e justificativa** — qual e **por quê**, ligada a uma evidência do caso, a um objetivo de impacto ou a um risco desta mesma entrega.
- **Riscos e limitações** — o que essa decisão custou. Decisão sem custo declarado é decisão que ainda não foi examinada.

A decisão mais natural é a **fronteira da fatia** que vocês fecharam na Aula 3: o que ficou de fora da história zero e por quê. Serve. Qualquer outro recorte de escopo também serve, desde que tenha sido uma decisão real do grupo — e não uma escrita hoje para preencher a seção.

---

