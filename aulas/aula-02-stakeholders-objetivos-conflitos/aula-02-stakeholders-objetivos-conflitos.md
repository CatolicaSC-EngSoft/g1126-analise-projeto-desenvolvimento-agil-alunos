# Aula 02 — Stakeholders, objetivos e conflitos

- **Unidade:** 1 — Análise
- **Nível de IA:** IA para consulta
- **Evidência da aula:** mapa de stakeholders + 3 objetivos + 1 conflito
- **Observação:** último encontro em que o contrato pedagógico admite mudança; prazo final da atividade "Aceite do contrato pedagógico" no Teams
- **Material:** `slides/aula-02-stakeholders-objetivos-conflitos.pptx` (23 slides) · `caso-alunos.md` · `contrato-pedagogico.md`

## Estrutura do encontro

Primeiro encontro de conteúdo puro: a Aula 1 gastou tempo com contrato e setup, e o que sobrou de pendência dela morre hoje. A aula alterna exposição e produção em dois ciclos, e cada ciclo expõe exatamente o que o trabalho de sala seguinte vai exigir.

| Faixa | O que acontece |
|---|---|
| 19h00–19h15 | Retomada e fechamento das pendências da Aula 1 |
| 19h15–20h07 | Exposição — bloco 1: stakeholders, mapa e objetivos |
| 20h07–20h55 | Produção — trabalho de sala 1 (mapa) + os 3 objetivos |
| 20h55–21h33 | Exposição — bloco 2: regras de negócio e conflito |
| 21h33–22h20 | Produção — trabalhos de sala 3 e 2 + produção contínua |
| 22h20–22h30 | Socialização, conferência das entregas e fechamento do contrato |

A exposição soma **90 minutos** distribuídos nos dois blocos, com cinco atividades curtas de discussão embutidas. O detalhamento conceitual, os enunciados e o gabarito dessas atividades estão no material de condução do professor.

**Nível de IA hoje, na prática:** a IA pode ser consultada para entender um conceito ou revisar a redação de um enunciado. Não pode produzir o mapa, os objetivos, o conflito nem as regras — esses são o julgamento do grupo sobre o caso, e é isso que a aula avalia.

## Retomada (15 min)

Três checagens no telão, nesta ordem, porque cada uma vira problema de nota se ficar para depois:

- **Aceite no contrato** — quem ainda não entregou entrega agora, na aula. O prazo é hoje.
- **Tamanho dos grupos** — resolver quem está sozinho ou em grupo de seis. Depois de hoje, o produto já começou.
- **Repositório e CI** — quem está com CI vermelho ou sem o projeto rodando na máquina resolve durante a produção, não na Aula 5.

Devolver a Aula 1 em uma frase: *vocês escreveram o problema e as incertezas; hoje descobrimos de quem vem cada uma delas.*

Avisar em voz alta que **o contrato congela ao fim deste encontro**. O que não for questionado hoje vale como está pelo semestre.

## Objetivo da aula

Sair do encontro com o mapa de stakeholders do Prato Cheio, três objetivos escritos de forma verificável e um conflito com critério de decisão — não com uma lista de "usuários do sistema".

## Pontos a abordar

### Bloco 1 — de quem vem o requisito, e o que se quer no mundo (~52 min)

**1. Quem é stakeholder, e o critério de corte.**
Definição operacional: quem provoca ou sofre consequência do sistema. Os tipos que interessam aqui são usuário direto, patrocinador, operação, regulador — e o **ausente**, que não está na mesa e ainda assim decide o resultado.

- *Exemplo no caso:* o Prato Cheio tem cinco stakeholders declarados, e nenhum deles é "o administrador do sistema". Administrador é papel de tela, não stakeholder.
- *Contraponto:* se todo mundo é stakeholder, o mapa não decide nada. O corte é **quem pode vetar ou inviabilizar o piloto**.
- *Pergunta para devolver à turma:* quem, no Prato Cheio, consegue matar o piloto sem nunca abrir o sistema? (vigilância sanitária; e o doador que simplesmente para de cadastrar)

**2. Como representar num mapa que serve para algo.**
Interesse × influência, quatro quadrantes, e cada quadrante manda fazer uma coisa diferente: alto/alto se negocia; **alta influência com baixo interesse é quem veta** e precisa ser mantido satisfeito; baixa influência com alto interesse se informa; baixo/baixo se monitora.

- *Formato:* tabela em Markdown, no repositório. Precisa ser diffável — desenho bonito não entra em Pull Request.
- *Contraponto (premissa 4):* mapa inerte é volume, não decisão. A regra desta disciplina é que **cada linha do mapa termina com uma consequência para a iteração 1** — quem eu entrevisto primeiro, de quem eu aceito requisito agora, quem fica para a iteração 2.

**3. Objetivo de negócio × necessidade do usuário.**
Objetivo é o que justifica o sistema existir e se mede **sem olhar para a tela**. Necessidade é o que faz alguém usar. Um sistema pode atender todas as necessidades e falhar no objetivo.

- *Exemplo no caso:* os objetivos de impacto do Prato Cheio são reduzir descarte, aumentar refeições entregues e reduzir o tempo entre "disponível" e "coletado". As necessidades são outras: o doador quer três campos e sair; a ONG quer previsibilidade. Se a ferramenta ficar ótima e o tempo até a coleta continuar igual, o objetivo falhou.
- *Como escrever objetivo verificável:* métrica + linha de base + direção. No caso **não há linha de base** — a Marta *acha* que o gargalo é o tempo de coleta, sem medição. Isso não impede escrever o objetivo; obriga o objetivo a incluir a medição.
- *Contraponto:* "reduzir o desperdício" é desejo. "Reduzir o tempo médio entre publicação e coleta, hoje desconhecido, medindo-o desde o primeiro dia do piloto" é objetivo.

### Bloco 2 — o que o domínio impõe e o que fazer quando os interesses se contradizem (~38 min)

**4. Onde as regras de negócio se escondem.**
Quatro lugares, e vale nomear os quatro:

- **na fala** — "uma doação aceita não fica disponível para outra" já está escrita no caso;
- **no comportamento atual** — no grupo de WhatsApp, quem responde primeiro leva; é regra real, nunca escrita;
- **na exigência do regulador** — rastreabilidade mínima: o que, quanto, validade;
- **no silêncio** — o que acontece se a ONG aceita e não busca? O caso não diz.

A distinção que vale a nota: **regra implícita** existe e não foi escrita; **regra ausente** não existe e alguém vai ter que decidir. Confundir as duas é o erro mais comum, e a consequência é grave — a ausente vira decisão de projeto na Unidade 2, a implícita vira teste na Unidade 3.

Teste de verificabilidade: dois desenvolvedores diferentes leem o enunciado e implementam a mesma coisa?

**5. Conflitos de prioridade.**
Conflito não é briga de pessoas: é um objetivo que só avança piorando outro. A anatomia tem quatro partes — as duas partes envolvidas, o que cada uma perde, o eixo do trade-off e o critério que decide.

- *Exemplo no caso:* o doador quer menos campos; a vigilância quer rastreabilidade. O eixo é literalmente o número de campos do formulário.
- *Três saídas legítimas:* **decidir** (escolho um lado e registro o que perco), **adiar com data** (fica como está até o piloto medir X), **anular o trade-off** (mudar o desenho até o eixo desaparecer — por exemplo, obter a validade por seleção rápida em vez de digitação, mantendo o registro e cortando a fricção). A terceira é a mais valiosa e a menos procurada.
- *Contraponto:* "vamos fazer os dois" e "o cliente decide" não são saídas. Devolvem o conflito sem critério, e ele volta maior na Unidade 2 — só que aí já custa refatoração.

## Produção contínua (todos os grupos)

- Escrever os **3 objetivos** do produto na seção `## Objetivos de impacto` de `docs/analise.md`, em forma verificável (métrica, linha de base — ainda que "desconhecida, medir no piloto" — e direção). São estes objetivos que a Unidade 3 vai confrontar em `docs/validacao.md`.
- Fechar as pendências da Aula 1: aceite entregue, grupo entre 3 e 5 pessoas, repositório público com **CI verde** e todos os integrantes com o projeto rodando na própria máquina.
- Cada integrante faz ao menos **um commit** hoje — o histórico do repositório é o que comprova participação na iteração.
- Escrever a página de hoje da **consulta manuscrita**: tipos de stakeholder, as quatro origens de regra de negócio e as três saídas para um conflito. É o conteúdo que a Prova 1 cobra em forma de aplicação.

**Entrega do encontro (0,25, pelo Teams):** o link do commit com quatro seções de `docs/analise.md` preenchidas — `## Stakeholders`, `## Objetivos de impacto`, `## Regras de negócio` e `## Conflitos de prioridade`. Correção binária: entregou no prazo e no formato, pontuou.

> **Aviso de sincronia — dizer isto no começo da produção.** O template ganhou a seção `## Conflitos de prioridade`, com os cinco campos, e uma quinta coluna na tabela `## Stakeholders` (*consequência para a iteração 1*). **Os repositórios criados na Aula 1 não recebem essa mudança:** o *Use this template* copia o estado do momento e não há atualização automática depois. Cada grupo acrescenta as duas coisas à mão — são poucas linhas de Markdown, e editar o próprio `docs/` é esperado. Quem criar o repositório a partir de hoje já pega tudo pronto.
>
> A seção `## Decisão de análise` **não** é o lugar do conflito: fica reservada para a decisão de análise da Aula 4.

## Trabalhos em sala (em grupo — fazer as três)

As três continuam obrigatórias. A ordem de execução é **1 → 3 → 2**, acompanhando a ordem da exposição: o mapa sai no primeiro ciclo de produção; as regras e o conflito, no segundo. Os tempos são curtos porque as atividades de discussão da exposição já fizeram parte do raciocínio — se um grupo chegar ao trabalho sem ter acompanhado a atividade correspondente, vai precisar de mais tempo, e é aí que o professor intervém.

**1. Mapa de stakeholders do caso (≈25 min, na Produção A).**
Tabela com os cinco stakeholders do caso mais qualquer outro que o grupo identifique, nas colunas: *stakeholder · o que quer · interesse (alto/baixo) · influência (alto/baixo) · consequência para a iteração 1*.

- *Entrega:* tabela `## Stakeholders` de `docs/analise.md`, com a quinta coluna, commitada.
- *Checklist:* os cinco do caso aparecem · há pelo menos um não listado no caso, com justificativa · cada linha tem consequência para a iteração 1 · nenhum papel de tela ("administrador") tratado como stakeholder.
- *Armadilha frequente:* classificar a vigilância sanitária como baixa influência porque ela não usa o sistema.

**2. Conflito e critério de decisão (≈20 min, na Produção B — depois do 3).**
Escolher **um** dos conflitos do caso e escrever: as duas falas em conflito (uma frase cada, na primeira pessoa, na voz do stakeholder), o eixo do trade-off, o que cada lado perde, o critério que decide e **qual das três saídas** o grupo usou.

- *Entrega:* seção `## Conflitos de prioridade` de `docs/analise.md`.
- *Checklist:* duas falas em primeira pessoa · a perda de cada lado está escrita · o critério é aplicável por outra pessoa sem consultar o grupo · a saída está declarada · se foi "adiar", há data e o que precisa ser medido.
- *Armadilha frequente:* critério que é opinião ("priorizar o usuário") em vez de regra ("na iteração 1, campo obrigatório só o que a vigilância exige; o resto é opcional").

**3. Regras implícitas viram enunciados explícitos (≈20 min, abre a Produção B).**
Três regras de negócio que o caso usa sem enunciar. Para cada uma: **onde estava** (fala, comportamento atual, exigência do regulador ou silêncio), o enunciado explícito e verificável, e como se verifica. Marcar qual das três é regra **ausente** — não implícita — e quem decide.

- *Entrega:* seção `## Regras de negócio` de `docs/analise.md`.
- *Checklist:* três regras · cada uma com a origem identificada · cada uma verificável pelo teste dos dois desenvolvedores · pelo menos uma marcada como ausente, com o responsável pela decisão.
- *Armadilha frequente:* reescrever uma regra que já estava explícita no caso e chamá-la de implícita.

## Enquanto circula pelos grupos

| Sintoma | Intervenção |
|---|---|
| Mapa com dez stakeholders | "Qual destes pode vetar o piloto? Corte o resto." |
| Objetivo sem número | "Como você sabe, em dezembro, se isso aconteceu?" |
| Conflito escrito como reclamação | "Quem perde o quê? Escreva a perda dos dois lados." |
| Critério que é opinião | "Outro grupo aplicaria seu critério e chegaria ao mesmo resultado?" |
| Regra "implícita" que estava escrita no caso | "Em que linha do caso está? Então não é implícita." |
| Grupo pronto em 15 minutos | Pedir o caso limite: a ONG aceita e não busca. Que regra decide? |

## Fechamento (10 min)

- Dois grupos leem o conflito e o critério; a turma testa o critério contra um caso limite.
- Conferir no telão que as quatro seções entraram no repositório de cada grupo.
- **Última chamada do contrato:** dúvidas de nota, faltas, uso de IA e o gatilho de contribuição no repositório. A partir de hoje, vale como está.
- Gancho para a Aula 3: histórias de usuário e a escolha da história zero. Quem sai daqui com stakeholder e conflito claros escolhe a fatia em dez minutos; quem não sai, gasta a aula inteira.
