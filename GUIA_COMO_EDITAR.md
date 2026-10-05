# 🛠️ GUIA DA TURMA: COMO EDITAR E APRESENTAR O JOGO

Bem-vindos ao projeto **"Socorro, Apaguei a Firma!"**!
Este web app foi planejado especificamente para ser **fácil de personalizar**, divertido de jogar e perfeito para qualquer pessoa (mesmo quem não sabe nada de informática) experimentar e aprender os princípios de manutenção de computadores em menos de 3 minutos.

---

## 📁 ONDE FICA CADA COISA?

- **`story.js`**: 🎯 **O ARQUIVO PRINCIPAL ONDE A TURMA MEXE!** É aqui que estão todos os textos, as piadas, as fases e as alternativas.
- **`index.html`**: A estrutura visual da página.
- **`style.css`**: As cores, temas, visual de celular e animações.
- **`audio.js`**: Os efeitos sonoros dos bipes de computador e cliques.
- **`game.js`**: O motor que cuida do cronômetro de 5 minutos e da troca de cards.

---

## ✏️ COMO EDITAR A HISTÓRIA (NO `story.js`)

Abra o arquivo [`story.js`](file:///c:/Users/More/Clube-Checkpoint/investiga%C3%A7%C3%A3o-pc/story.js) em qualquer editor de texto (VS Code, Bloco de Notas, etc.).

### 1. Mudar o Nome do Personagem ou o Tempo
No topo do arquivo, você encontra:
```javascript
const GAME_CONFIG = {
  initialTimeSeconds: 300, // 300 segundos = 5 minutos (pode mudar para 180 = 3 min, etc.)
  characterName: "Juninho", // Pode mudar para o nome de alguém da turma!
  gameTitle: "Socorro, Apaguei a Firma!"
};
```

---

### 2. Entendendo a Estrutura de Uma Cena / Fase
Cada cena tem este formato simples:

```javascript
"fase1_energia": {
  badge: "Etapa 1 de 5 • Alimentação Elétrica", // Etiqueta pequena no topo
  title: "O PC Nem Dá Sinal de Vida!",         // Título do card
  icon: "🔌",                                  // Emoji grande ilustrativo
  text: `Texto da história aqui...`,           // O que aconteceu
  
  // Status das luzes de diagnóstico do PC:
  // "online" (verde), "erro" (vermelho piscando) ou "desconhecido" (cinza)
  pcStatus: {
    power: "offline",
    ram: "desconhecido",
    disk: "desconhecido",
    cooler: "desconhecido",
    system: "offline"
  },

  // As 4 opções que o jogador pode clicar:
  options: [
    {
      text: "A) Verificar se o cabo de força está conectado",
      isCorrect: true, // TRUE = alternativa correta que avança na história!
      feedback: "Mandou bem! O cabo estava frouxo!",
      timePenalty: 0,
      nextScene: "fase2_ram" // Nome da próxima cena que vai abrir
    },
    {
      text: "B) Dar uma bicuda no gabinete",
      isCorrect: false, // FALSE = alternativa errada/cômica
      feedback: "Você quase quebrou o dedão do pé!",
      timePenalty: 15, // Quantos segundos o jogador perde por errar
      nextScene: "fase1_energia_retry"
    }
  ]
}
```

---

### 3. Como Mudar uma Alternativa ou Criar Piadas da Turma
Para mudar uma opção:
1. Altere o texto de `text`.
2. Mude o `feedback` (a mensagem divertida que aparece quando ele clica).
3. Se quiser penalizar com tempo perdido, coloque `timePenalty: 10` ou `timePenalty: 20` (segundos). Se não quiser penalizar, coloque `0`.

---

## 🚀 DICAS PARA A APRESENTAÇÃO DO TRABALHO

1. **Gere um QR Code:**
   - Você pode colocar a pasta do jogo num serviço gratuito como **GitHub Pages**, **Vercel** ou **Netlify**, ou rodar na rede Wi-Fi local do laboratório.
   - Crie uma placa ou cartaz impresso com um **QR Code**:
     > *"🚨 DESAFIO DO ESTAGIÁRIO: Você consegue consertar o PC e salvar a empresa em menos de 5 minutos? Aponte a câmera do seu celular e jogue!"*
2. **Tempo Médio de Jogo:**
   - Quem joga prestando atenção costuma zerar em **1 minuto e meio a 2 minutos e meio**. Isso permite que dezenas de visitantes joguem na apresentação sem formar fila demorada!
3. **Som:**
   - O jogo possui bipes autênticos de placa-mãe (POST beep) e efeitos retrô que tocam direto no celular sem precisar baixar nada.
