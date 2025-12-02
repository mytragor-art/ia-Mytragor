# Pokémon TCG — Referência para Mytragor

## Objetivo

Vencer ao coletar 6 prêmios, um por cada Pokémon derrotado do oponente.

Também vence se:

- O oponente não tiver Pokémon ativos.
- O oponente não puder comprar carta no início do turno.

## 1.2 Componentes

- Baralho de 60 cartas
- Pokémon (Básico, Estágio 1, Estágio 2, EX, V, VMAX, VSTAR etc.)
- Energia
- Treinadores (Itens, Apoiadores, Ferramentas, Estádios)

## 1.3 Zonas de jogo

- Ativo (1 Pokémon lutando)
- Banco (até 5 Pokémon)
- Deck
- Descarte
- Prêmios
- Mão
- Lost Zone (exílio permanente para certas mecânicas)

📌 ## 2. Estrutura dos Pokémon

### 2.1 Tipos

- Planta, Fogo, Água, Relâmpago, Psíquico, Lutador, Noturno, Metálico, Dragão, Incolor, Fada (extinta).

### 2.2 Atributos de Pokémon

- HP
- Ataques (custo em energia + dano + efeitos)
- Habilidades (efeitos passivos/ativos)
- Fraqueza / Resistência
- Retirada
- Estágio (Básico, 1, 2, V, VMAX, VSTAR etc.)

### 2.3 Evolução

Fluxo padrão:

- Básico → Estágio 1 → Estágio 2

Regras:

- Não pode evoluir no mesmo turno em que entrou.
- Evolui 1 vez por turno.
- V, EX são Básicos especiais.
- VMAX/VSTAR evoluem de V.

📌 ## 3. Energia

### 3.1 Tipos

- Básicas: fogo, água, planta, psíquica etc.
- Especiais: dupla, cura, dano extra, proteção.

### 3.2 Regras gerais

- Apenas 1 energia por turno pode ser anexada.
- Ataques exigem energias específicas.
- Energias permanecem anexadas até:
  - KO,
  - efeito de carta,
  - movimentação.

📌 ## 4. Cartas de Treinador

### 4.1 Itens

- Uso ilimitado por turno.
- Efeitos rápidos e simples.
- Ex.: busca, cura, troca, manipulação de deck.

### 4.2 Apoiadores (Supporters)

- 1 por turno.
- Efeitos fortes.
- Ex.: comprar cartas, buscar Pokémon específicos.

### 4.3 Ferramentas

- Equipamentos anexados a Pokémon.
- Bônus permanentes.
- Ex.: defesa extra, dano aumentado.

### 4.4 Estádios

- Regra global.
- Só pode existir 1 campo ativo por vez.

📌 ## 5. Fluxo de turno

- Compra
- Ações:
  - Baixar Pokémon
  - Evoluir
  - Anexar energia
  - Jogar Item
  - Jogar Apoiador
  - Jogar Estádio
  - Usar habilidades
  - Atacar
- Fim do turno

Não existe stack/cadeia de respostas — é tudo sequencial.

📌 ## 6. Prêmios e vitórias

### 6.1 Prêmios por KO

- Pokémon normal → 1 prêmio
- EX / V / GX / VSTAR → 2 prêmios
- TAG TEAM / VMAX → 3 prêmios

### 6.2 Condições alternativas

- O oponente não tem Pokémon ativos.
- O oponente não compra carta no começo do turno.

📌 ## 7. Identidade de design do Pokémon TCG

### 7.1 Filosofia

Pokémon TCG é:

- Progressivo (energias + evolução determinam ritmo)
- Suave (pouca destruição bruta)
- Simples de ler (textos curtos)
- Sem reação no turno inimigo
- Focado no combate direto
- Temático (efeitos condizem com o tipo)

### 7.2 Identidade dos tipos

- Planta → cura, veneno, busca
- Fogo → dano forte, descartar energias
- Água → compra de cartas, manipulação de energia
- Relâmpago → explosão rápida
- Psíquico → colocar marcadores, efeitos mentais
- Lutador → dano bônus contra especiais
- Metálico → mitigação de dano
- Noturno → truques, movimentação de dano
- Dragão → custos mistos, poder bruto
- Incolor → versátil e suporte

📌 ## 8. Mecânicas e condições

### 8.1 Habilidades

- Não exigem energia para ativar.
- Geralmente uma vez por turno.
- Podem ser de suporte, compra, cura, busca, movimentação.

### 8.2 Condições especiais

- Paralisado → não ataca próximo turno
- Adormecido → depende de moeda
- Confuso → risco de dano a si mesmo
- Envenenado → dano por turno
- Queimado → dano + moeda

### 8.3 Lost Zone

- Zona especial para mecânicas modernas.
- Cartas não voltam mais ao jogo.
- Algumas cartas escalam com base na quantidade lá.

📌 ## 9. Arquétipos clássicos

### 9.1 Aggro

- Pokémon básicos fortes
- Pressão rápida

### 9.2 Midrange

- Evolui rápido
- Domina o meio do jogo

### 9.3 Controle

- Trava retirada
- Remove energias
- Minimiza ações do oponente

### 9.4 Combo

- Interação entre habilidades
- Sequências dependentes de cartas específicas

📌 ## 10. O que Pokémon TCG não faz

Tão importante quanto o que faz:

- Não tem chain/stack (sem respostas rápidas).
- Não tem remoções diretas destrutivas.
- Não tem turno do oponente.
- Não tem infinitos.
- Não tem manipulação pesada do deck adversário.
- Não tem custo variável complexo (energia é tudo).

Isso define sua sensação de jogo progressivo e direto.

📌 ## 11. Lições que ajudam Mytragor TCG

A IA deve extrair isto:

✔ Progressão temática funciona

- Evolução → ótimo para Campeões e Aliados.

✔ Ritmo através dos recursos

- Energia = Fragmentos.

✔ Identidades claras por facção

- Inspiração direta da clareza dos tipos Pokémon.

✔ Valor no “crescer aos poucos”

- Jogadores gostam de construir campo ao longo da partida.

✔ Pouca interrupção = jogo cinematográfico

- Menos reações = mais legibilidade.

✔ Evitar destruição exagerada

- Pokémon prova que isso deixa o jogo mais elegante e fácil de balancear.

📌 ## 12. Tabela resumo

| Categoria       | Resumo rápido                |
|-----------------|------------------------------|
| Objetivo        | 6 prêmios                   |
| Fluxo           | Comprar → Ações → Atacar    |
| Energias        | 1 por turno, definem ataques|
| Pokémon         | HP, ataques, habilidades, evolução |
| Treinadores     | Itens, Apoiadores, Ferramentas, Estádios |
| Condições       | Veneno, Paralisado, Confuso etc. |
| Arquétipos      | Aggro, Midrange, Controle, Combo |
| Filosofia       | Progressivo, direto, simples |
| Lições para Mytragor | Identidades claras + progressão + fragmentos |