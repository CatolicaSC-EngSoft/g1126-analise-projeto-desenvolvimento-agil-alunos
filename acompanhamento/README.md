# Painel de acompanhamento dos grupos

Gera uma página HTML com o estado de cada repositório: commits na iteração (por integrante), PRs, status do CI e presença do branch de entrega. Serve para acompanhar 8 a 10 grupos sem abrir um repositório por vez — e é a fonte objetiva do **gatilho da nota** (aluno sem contribuição registrada na iteração perde a parcela do grupo).

## Configurar

Edite `grupos.json` com os dados que vierem da atividade de aceite no Teams (membros do time + link do repositório público):

```json
{
  "iteracaoAtual": 1,
  "grupos": [
    { "nome": "Grupo 1",
      "repo": "https://github.com/ORG/repo-do-grupo-1",
      "integrantes": [ { "nome": "Ana Souza", "github": "anasouza" } ] }
  ]
}
```

O campo `github` de cada integrante é o **usuário do GitHub** — é por ele que os commits são atribuídos. Sem ele, o aluno aparece como "sem commits" mesmo tendo trabalhado.

As janelas das iterações já estão preenchidas com as datas de 2026.2:

| Iteração | Janela | Entrega |
|---|---|---|
| 1 | 30/07 a 03/09 | Aula 5 |
| 2 | 04/09 a 15/10 | Aula 10 |
| 3 | 16/10 a 26/11 | Aula 15 |

## Rodar

Requer Node 18+.

```bash
export GITHUB_TOKEN=seu_token   # recomendado (sem token: 60 requisições/hora)
node painel.js                  # usa a iteração atual do grupos.json
node painel.js --iteracao 2     # força uma iteração
```

Gera `painel.html` na pasta e imprime um resumo no terminal. Abra o HTML no navegador.

**Sobre o token:** cada grupo consome 5 chamadas à API. Com 10 grupos são 50 chamadas — o limite sem autenticação é 60 por hora, então dá para rodar uma vez. Com um token pessoal do GitHub (Settings → Developer settings → Personal access tokens, sem permissões especiais para repos públicos) o limite sobe para 5.000.

## O que cada coluna significa

| Coluna | Leitura |
|---|---|
| Commits | Total na janela da iteração + data do último |
| Por integrante | Quantos commits de cada usuário — a base do gatilho da nota |
| PRs | Abertos na janela e quantos foram integrados |
| CI | Resultado da última execução do GitHub Actions (`success` = verde) |
| Branch | Se o branch da entrega (`entrega-1`, `entrega-2`, `entrega-3`) já existe |
| Alertas | Repositório privado, integrante sem commits, CI vermelho, ausência de PR na Unidade 2+ |
