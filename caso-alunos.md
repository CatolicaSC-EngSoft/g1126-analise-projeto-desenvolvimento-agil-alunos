# Caso da disciplina — "Prato Cheio"

*Este é o caso da disciplina. É o mesmo nas três unidades: a análise (U1), o projeto (U2) e a construção (U3) evoluem sobre ele. O formato e o nível de IA de cada entrega estão nos documentos dos trabalhos.*

## Contexto

Numa cidade média, restaurantes, padarias e mercados descartam todos os dias comida ainda boa — sobra de produção, itens perto do vencimento, excedente de eventos. Ao mesmo tempo, dezenas de ONGs e cozinhas comunitárias precisam de doações, mas descobrem tarde demais o que está disponível e não conseguem coletar a tempo. Hoje a articulação acontece por grupos de WhatsApp: bagunçado, sem histórico, e boa parte da comida estraga antes de alguém buscar.

Uma coordenadora voluntária, a Marta, quer organizar isso com uma ferramenta simples. Ela procurou a turma para **analisar o problema, projetar e construir um piloto** que ajude doadores e ONGs a se encontrarem antes que a comida se perca.

## Stakeholders

- **Doadores** (restaurantes, padarias, mercados): querem doar sem burocracia e com retirada rápida; não querem perder tempo cadastrando cada item.
- **ONGs receptoras / cozinhas comunitárias**: querem previsibilidade, saber o que vão receber e conseguir planejar as refeições.
- **Voluntários entregadores**: fazem a coleta e a entrega; usam o celular na rua.
- **Marta, coordenadora da plataforma**: quer crescer rápido (mais doadores e ONGs) e mostrar impacto para conseguir apoio.
- **Vigilância sanitária**: exige rastreabilidade mínima de alimentos doados (o que, quanto, validade).

## O que se sabe

**Objetivos de impacto (não de funcionalidade):**
- reduzir a quantidade de comida boa que é descartada;
- aumentar o número de refeições que chegam a quem precisa;
- reduzir o tempo entre "comida disponível" e "comida coletada".

**Regras de negócio conhecidas:**
- toda doação registra ao menos: tipo do alimento, quantidade e validade/janela de retirada;
- alimento perecível tem uma janela curta — se não for aceito e coletado a tempo, perde-se;
- uma doação, depois de aceita por uma ONG, não fica disponível para outra;
- ONGs mais próximas do doador têm vantagem logística (menos tempo até a coleta).

**Restrições:**
- equipe pequena e **orçamento próximo de zero**;
- precisa funcionar no **navegador do celular** dos voluntários (conexão instável);
- no piloto, **sem integração** com os sistemas dos restaurantes;
- prazo: um **piloto funcionando em poucas semanas**, com um bairro só.

## O que NÃO se sabe (dados incompletos)

- Não há dados sobre o **volume real** de doações por dia, nem quantas ONGs aderem.
- Marta **acha** que o gargalo é o tempo de coleta, mas não há medição que confirme.
- Não se sabe se os doadores vão topar cadastrar cada doação, nem com que frequência.

## Conflitos de prioridade (para o grupo decidir)

- **Doadores** querem simplicidade e rapidez; **vigilância** quer registro e rastreabilidade — mais campos, mais fricção.
- **ONGs** querem previsibilidade e informação (o que, quanto, quando); **doadores** não querem se comprometer com antecedência.
- **Marta** quer crescer (aceitar todo doador e toda doação); a **qualidade** pede critérios (validade, mínimo de informação) que afastam parte dos doadores.

## Ganchos para a fatia executável (walking skeleton)

Uma "história zero" plausível para a fatia que roda ponta a ponta na Unidade 1: **um doador publica uma doação (tipo, quantidade, validade) → uma ONG vê a doação disponível → a ONG a aceita, e ela some da lista para as demais.** É pequena, atravessa todas as camadas e dá base para evoluir nas unidades seguintes.
