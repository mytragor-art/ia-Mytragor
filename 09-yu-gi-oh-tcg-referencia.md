# Yu-Gi-Oh! TCG — Compilado de Conhecimento Completo por Categorias

Referência oficial para a IA especialista em Mytragor TCG.

📌 ## 1. Estrutura fundamental do jogo

### 1.1 Objetivo

- Reduzir os Life Points (LP) do oponente de 8000 a 0.
- Outras vitórias:
  - Deckar o oponente (ele não pode comprar carta)
  - Condições especiais de carta (ex.: Exodia)

### 1.2 Componentes

- Deck principal (40 a 60 cartas)
- Extra Deck (0 a 15 cartas)
- Side Deck (0 a 15 cartas)
- Não existe limite de terreno, energia, nem mana — o jogo funciona sem recurso fixo.

### 1.3 Zonas de jogo

- 5 zonas de monstros
- 5 zonas de magia/armadilha
- Zona de campo
- Zona de cemitério
- Zona banida
- Extra Deck
- Mão
- Deck

📌 ## 2. Tipos de cartas

### 2.1 Monstros

Possuem:

- Nível (1 a 12) – monstros normais
- Estrelas/Rank/Link Rating
- Atributo (Luz, Trevas, Fogo, Água, Vento, Terra, Divino)
- Tipo (Dragão, Guerreiro, Demônio, etc.)
- ATK / DEF

**Subtipos:**

- Normais
- Efeito
- Ritual
- Fusão
- Sincro
- Xyz
- Link
- Pêndulo

### 2.2 Magias

**Tipos:**

- Normais
- Contínuas
- Rápidas (Quick-Play)
- Equipamentos
- de Campo
- de Ritual

### 2.3 Armadilhas

**Tipos:**

- Normais
- Contínuas
- de Resposta (Counter Trap)

Armadilhas precisam ser conjuradas antes e só podem ser ativadas em turno do oponente (ou após o turno colocado).

📌 ## 3. Mecânicas de invocação

Yu-Gi-Oh é definido pelo sistema de invocações:

### 3.1 Invocação Normal / Colocação

- 1 por turno
- Monstros LV5+ exigem tributo (1 ou 2)

### 3.2 Invocação Especial

- Não tem limite.
- Qualquer carta pode permitir.
- Isso cria risco de combos infinitos, característica do jogo.

### 3.3 Fusão

- Dois ou mais materiais
- Usando cartas como Polimerização
- Vai para o Extra Deck

### 3.4 Ritual

- Requer uma magia ritual específica
- Monstros tribuídos devem igualar ou exceder o nível do Ritual

### 3.5 Sincro

- 1 Tuner + 1+ não-Tuners
- Soma dos níveis = nível do monstro Sincro

### 3.6 Xyz

- Usam monstros com mesmo nível como materiais
- Ficam sob o monstro Xyz como “overlay”
- Rank ≠ nível

### 3.7 Link

- Usam número de materiais igual ao Rating
- Não têm DEF
- Influenciam zonas adjacentes (setas)

### 3.8 Pêndulo

- Funcionam como monstro e como magia
- Podem permitir múltiplas invocações simultâneas

📌 ## 4. O turno em Yu-Gi-Oh

- Compra
- Fase principal 1
- Batalha
- Fase principal 2
- Fim

O jogo permite respostas instantâneas a quase tudo, criando:

- Cadeias
- Timing rigoroso
- Janelas específicas de ativação

📌 ## 5. Correntes (Chains) — a “pilha” do Yu-Gi-Oh

Semelhante ao stack do Magic, mas mais rígido:

- Cada efeito tem velocidade:
  - Speed 1: monstros, magias normais
  - Speed 2: quick-play, traps normais
  - Speed 3: counter traps
- Resolve do último para o primeiro

Essa mecânica é central para controle e combos.

📌 ## 6. Arquétipos

Arquétipos são estrutura máxima do Yu-Gi-Oh.
Decks são quase sempre 100% focados em um único arquétipo.

**Exemplos:**

- Blue-Eyes
- Dark Magician
- Cyber Dragon
- HERO
- Dragonsmaid
- Tri-Brigade

**Elementos típicos:**

- Nome compartilhado
- Suporte interno
- Monstros tutoram outros do mesmo nome
- Magias/armadilhas funcionam apenas com aquele grupo

📌 ## 7. Identidade de design

Yu-Gi-Oh é o TCG:

- Mais rápido
- Mais combo-based
- Com mais interação instantânea
- Com menor dependência de recursos (não existe mana)
- Com maior potencial de loops

**A filosofia:**

- Jogadores podem encher o campo rapidamente.
- Monstros do Extra Deck são parte central do jogo.
- Textos de carta podem ser longos e complexos.
- Partidas podem ser explosivas, às vezes terminando no turno 1.

📌 ## 8. Pontos fortes e fracos do design

### 8.1 Fortes

- Sistema de cadeia (chain) muito profundo
- Combos extensos e inteligentes
- Arquétipos muito característicos
- Expressão máxima de habilidades dos jogadores

### 8.2 Fracos / Riscos

- Loops infinitos
- Oponente não joga (First Turn Kill)
- Partidas muitas vezes decididas por quem começa
- Dependência extrema de cartas específicas
- Complexidade alta
- Textos longos e difíceis de balancear

📌 ## 9. Lições importantes para Mytragor TCG

A IA deve extrair isto:

✔ **Lesson 1 — Arquétipos têm identidade forte**

Mytragor pode copiar:

- Coerência interna
- Sinergias direcionadas
- Palavras-chave próprias
- Sem copiar a complexidade exagerada.

✔ **Lesson 2 — Controle de recursos é vital**

Yu-Gi-Oh sofre por não ter custo fixo.

Para Mytragor:

- Fragmentos devem ser o estabilizador da força.
- Custos claros evitam explosões desbalanceadas.

✔ **Lesson 3 — Limitar interação instantânea**

Senão o jogo vira:

- Caótico
- Muito difícil para jogadores novos
- Cheio de janelas de ativação

✔ **Lesson 4 — Evitar loops**

Yu-Gi-Oh é muito sensível a:

- Invocações infinitas
- Geração ilimitada de vantagem
- Ações repetidas sem custo

Mytragor deve sempre incluir:

- “Máximo 1 vez por turno”
- “Somente X vezes na partida”
- “Se esta carta deixou o campo, não pode ser reativada”

✔ **Lesson 5 — Não deixar o Extra Deck dominar**

Yu-Gi-Oh depende demais dele.

Em Mytragor:

- Campeões podem funcionar como “Evoluções”, não como spam.

✔ **Lesson 6 — Permitir combos, mas com limites**

Combos são divertidos, mas devem ter:

- Custo alto
- Número de passos limitado
- Contrajogo possível

📌 ## 10. Tabela de referência rápida

| Categoria       | Resumo                       |
|-----------------|------------------------------|
| Objetivo        | 8000 LP → 0                 |
| Recurso         | Não existe mana; jogo sem custo |
| Identidade      | Arquétipos fortes, Invocações especiais |
| Interação       | Muito alta (chains)         |
| Velocidade      | Extremamente rápido e explosivo |
| Zonas           | Monstros, Spells/Traps, Extra Deck |
| Tipos de cartas | Monstros, Magias, Armadilhas |
| Invocações      | Normal, Especial, Fusão, Ritual, Sincro, Xyz, Link, Pêndulo |
| Pontos fortes   | Combos, profundidade, reatividade |
| Riscos          | Loops, FTK, complexidade    |
| Lições para Mytragor | Custo claro, evitar loops, limitar instantâneos |