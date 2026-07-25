# Prato Cheio — [nome do grupo]

Projeto da disciplina **Análise, Projeto e Desenvolvimento Ágil**.
Conecta doadores de alimentos excedentes a ONGs, antes que a comida se perca.

> Este repositório é a base do produto que evolui nas três unidades:
> walking skeleton (U1) → incremento guiado pelo projeto (U2) → produto refatorado (U3).

## Integrantes
- Nome — @usuario-github
- Nome — @usuario-github
- Nome — @usuario-github

## Como rodar

Requisito: Node.js 20 ou superior.

```bash
npm install     # só na primeira vez
npm start       # sobe em http://localhost:3000
npm test        # roda os testes
npm run dev     # sobe recarregando a cada alteração
```

## Estrutura

```
src/app.js           rotas da API
src/doacoes.js       regras de negócio      <- implementar (U1)
src/repositorio.js   camada de dados        <- implementar (U1)
public/index.html    interface (funciona no celular)
tests/               testes automatizados
docs/analise.md      documento de análise   (Trabalho 1)
docs/projeto.md      documento de projeto   (Trabalho 2)
docs/adr/            decisões arquiteturais (Trabalho 2)
docs/retrospectivas/ retrospectiva de cada iteração
.github/workflows/   pipeline de CI
```

## Como trabalhar (fluxo de Pull Request)

A partir da Unidade 2, **nada entra direto na `main`**:

```bash
git checkout -b historia/ong-aceita-doacao
# ... implementa, escreve o teste, roda npm test ...
git commit -m "ONG aceita uma doação e ela sai da lista"
git push -u origin historia/ong-aceita-doacao
```

Abra o Pull Request no GitHub, preencha o template, espere o **CI ficar verde** e
peça a revisão de **outro integrante**. Só então faça o merge.

## O que já está pronto e o que falta

Pronto: estrutura do projeto, interface básica, rota de saúde, CI configurado e
um teste passando (prova que a aplicação sobe).

Falta (Trabalho 1 — walking skeleton): implementar `src/doacoes.js` e
`src/repositorio.js` para que a história zero funcione ponta a ponta —
**um doador publica uma doação → uma ONG vê a doação → a ONG a aceita e ela sai da lista.**
Os critérios de aceite estão em `tests/doacoes.test.js` como `it.todo`: troque cada um
por um teste de verdade conforme implementa.

## Uso de IA

A IA pode participar da produção, mas o grupo é responsável por verificar, testar,
corrigir e **defender** o resultado. Registre em cada Pull Request o que foi gerado
com IA e o que vocês alteraram.
