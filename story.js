/**
 * ====================================================================
 * 📖 HISTÓRIA DO JOGO: "SOCORRO, APAGUEI A FIRMA!"
 * ====================================================================
 * 
 * GUIA RÁPIDO PARA A TURMA EDITAR:
 * - Para mudar um texto, basta alterar o que está entre aspas ("...").
 * - Cada cena tem um "id" único (ex: "inicio", "fase_energia", "vitoria").
 * - Em "options", cada alternativa tem:
 *    - text: O texto do botão que o jogador clica.
 *    - isCorrect: true (se for o caminho certo) ou false (se for erro/piada).
 *    - feedback: Mensagem cômica ou explicativa que aparece ao clicar.
 *    - timePenalty: Quantos segundos o jogador perde por errar (ex: 15).
 *    - nextScene: O id da próxima cena que vai carregar.
 * ====================================================================
 */

const GAME_CONFIG = {
  // Tempo total do jogo em segundos (300 segundos = 5 minutos)
  initialTimeSeconds: 240,

  // Nome do estagiário / protagonista
  characterName: "Juninho",

  // Título principal do jogo
  gameTitle: "Socorro, Apaguei a Firma!",
  gameSubtitle: "Uma Aventura de Manutenção de Computadores sob Pressão"
};

const STORY_DATA = {
  // -------------------------------------------------------------
  // CENA INICIAL / INTRODUÇÃO
  // -------------------------------------------------------------
  "intro": {
    badge: "🚨 CÓDIGO VERMELHO",
    title: "Primeiro Dia de Estágio...",
    icon: "panic",
    text: `Você é o <b>Juninho</b>, novo estagiário de TI.<br><br>
    Tentando abrir espaço no HD para baixar um joguinho, você selecionou sem querer a pasta sagrada: 
    <code class="code-highlight">C:\\DADOS_CONFIDENCIAIS_DA_EMPRESA_2026</code> e mandou direto pra <b>Lixeira</b>!<br><br>
    O script automático do servidor vai esvaziar a lixeira e <b>destruir tudo em 5 MINUTOS</b>!<br><br>
    Para piorar: no susto, você deu um encontrão na mesa e o <b>computador apagou completamente</b>! Você precisa consertar a máquina, ligar o sistema e restaurar os arquivos antes que o tempo acabe!`,
    pcStatus: {
      power: "offline",
      ram: "desconhecido",
      disk: "desconhecido",
      cooler: "desconhecido",
      system: "offline"
    },
    options: [
      {
        text: "⚡ Respirar fundo e começar a manutenção!",
        isCorrect: true,
        feedback: "É isso aí! Foco e técnica de manutenção!",
        timePenalty: 0,
        nextScene: "fase1_energia"
      },
      {
        text: "🏃 Fingir desmaio e esperar o expediente acabar",
        isCorrect: false,
        feedback: "O chão da sala de TI tá sujo e frio... ninguém veio te socorrer e você perdeu 15 segundos!",
        timePenalty: 15,
        nextScene: "fase1_energia"
      },
      {
        text: "📦 Colocar suas coisas numa caixa de papelão e fugir",
        isCorrect: false,
        feedback: "A catraca da recepção travou na sua cara! Você teve que voltar correndo pra sala!",
        timePenalty: 20,
        nextScene: "fase1_energia"
      }
    ]
  },

  // -------------------------------------------------------------
  // FASE 1: ENERGIA / CABOS
  // -------------------------------------------------------------
  "fase1_energia": {
    badge: "Etapa 1 de 5 • Alimentação Elétrica",
    title: "O PC Nem Dá Sinal de Vida!",
    icon: "plug",
    text: `Você aperta o botão <b>Power</b> do gabinete e... <b>NADA</b>! Nem led, nem barulho de ventoinha, silêncio absoluto.<br><br>
    Como bom profissional de manutenção de computadores, qual é a primeira coisa que você deve checar?`,
    pcStatus: {
      power: "offline",
      ram: "desconhecido",
      disk: "desconhecido",
      cooler: "desconhecido",
      system: "offline"
    },
    options: [
      {
        text: "A) Verificar se o cabo de força e o filtro de linha estão conectados e ligados",
        isCorrect: true,
        feedback: "ACERTOU! O filtro de linha debaixo da mesa estava com a chave no 'OFF'. Você liga e as luzes acendem!",
        timePenalty: 0,
        nextScene: "fase2_ram"
      },
      {
        text: "B) Dar uma pancada forte na lateral do gabinete estilo TV antiga",
        isCorrect: false,
        feedback: "CRACK! Você machucou a mão e o botão de reset quase quebrou. Nada de energia!",
        timePenalty: 15,
        nextScene: "fase1_energia_retry"
      },
      {
        text: "C) Chamar um padre para benzer a fonte de alimentação",
        isCorrect: false,
        feedback: "O padre está em reunião paroquial e não pode atender agora. O relógio continua correndo!",
        timePenalty: 20,
        nextScene: "fase1_energia_retry"
      },
      {
        text: "D) Desmontar a placa-mãe inteira usando uma colher de café",
        isCorrect: false,
        feedback: "Você entortou três parafusos e perdeu um tempo precioso antes de sequer olhar a tomada!",
        timePenalty: 20,
        nextScene: "fase1_energia_retry"
      }
    ]
  },

  "fase1_energia_retry": {
    badge: "Etapa 1 de 5 • Dica de Manutenção",
    title: "O Computador Ainda Tá Sem Energia!",
    icon: "lightbulb",
    text: `Calma, Juninho! Lembre-se da regra de ouro da informática:<br><br>
    <b>Antes de qualquer diagnóstico avançado, verifique o básico: a energia está chegando na máquina?</b>`,
    pcStatus: {
      power: "offline",
      ram: "desconhecido",
      disk: "desconhecido",
      cooler: "desconhecido",
      system: "offline"
    },
    options: [
      {
        text: "🔌 Olhar o cabo de força e ligar a chave do filtro de linha",
        isCorrect: true,
        feedback: "Pronto! O filtro de linha estalou para 'ON' e os leds da placa finalmente acenderam!",
        timePenalty: 0,
        nextScene: "fase2_ram"
      },
      {
        text: "🕯️ Acender uma vela de sete dias na frente do gabinete",
        isCorrect: false,
        feedback: "O alarme de fumaça quase disparou! Foco na fiação elétrica!",
        timePenalty: 10,
        nextScene: "fase1_energia_retry"
      }
    ]
  },

  // -------------------------------------------------------------
  // FASE 2: BEEP CODE & MEMÓRIA RAM
  // -------------------------------------------------------------
  "fase2_ram": {
    badge: "Etapa 2 de 5 • POST & Memória",
    title: "BEEP! BEEP! BEEP! Sem Vídeo!",
    icon: "beep",
    text: `A fonte ligou! Mas a tela continua preta e o gabinete começa a gritar:<br><br>
    <div class="audio-box">🔊 *BEEP... BEEP... BEEP...* (três bipes contínuos)</div><br>
    Você se lembra das aulas de manutenção: o POST da placa-mãe está avisando um erro de hardware clássico. O que fazer?`,
    pcStatus: {
      power: "online",
      ram: "erro",
      disk: "desconhecido",
      cooler: "desconhecido",
      system: "offline"
    },
    options: [
      {
        text: "A) Abrir o gabinete, retirar o pente de memória RAM, limpar os contatos e reencaixar com firmeza",
        isCorrect: true,
        feedback: "EXATO! O pente de RAM estava frouxo e oxidado. Você limpou e reencaixou até ouvir o *CLIQUE* das travas!",
        timePenalty: 0,
        nextScene: "fase3_disco"
      },
      {
        text: "B) Soprar o monitor com força achando que é falta de ar na tela",
        isCorrect: false,
        feedback: "O monitor só ficou com bafo de café. O problema é interno na placa-mãe!",
        timePenalty: 15,
        nextScene: "fase2_ram_retry"
      },
      {
        text: "C) Jogar um copo d'água na placa-mãe porque o bipe parece alarme de incêndio",
        isCorrect: false,
        feedback: "NUNCA jogue líquidos em componentes eletrônicos! Quase deu curto-circuito total!",
        timePenalty: 25,
        nextScene: "fase2_ram_retry"
      },
      {
        text: "D) Aumentar o volume do fone pra abafar o barulho do bipe",
        isCorrect: false,
        feedback: "Você não ouve mais o bipe, mas a tela continua 100% preta e o chefe tá quase chegando!",
        timePenalty: 15,
        nextScene: "fase2_ram_retry"
      }
    ]
  },

  "fase2_ram_retry": {
    badge: "Etapa 2 de 5 • Dica de Manutenção",
    title: "Aquele Bipe É Inconfundível...",
    icon: "ram",
    text: `Bipes repetitivos na inicialização sem imagem na tela são o clássico sinal de <b>mau contato na Memória RAM</b>.<br><br>
    O que você precisa fazer agora com o computador desligado?`,
    pcStatus: {
      power: "online",
      ram: "erro",
      disk: "desconhecido",
      cooler: "desconhecido",
      system: "offline"
    },
    options: [
      {
        text: "🧩 Reencaixar a memória RAM no slot correto até travar",
        isCorrect: true,
        feedback: "Perfeito! Travas fechadas no slot da RAM. O bipe parou e apareceu imagem no monitor!",
        timePenalty: 0,
        nextScene: "fase3_disco"
      },
      {
        text: "🧹 Passar uma vassoura dentro do gabinete",
        isCorrect: false,
        feedback: "Eletricidade estática quase queimou a placa! Use os dedos ou pincel antiestático!",
        timePenalty: 10,
        nextScene: "fase2_ram_retry"
      }
    ]
  },

  // -------------------------------------------------------------
  // FASE 3: ARMAZENAMENTO / CABO SATA / M.2
  // -------------------------------------------------------------
  "fase3_disco": {
    badge: "Etapa 3 de 5 • Armazenamento & Boot",
    title: "Tela Preta: 'No Bootable Device Found'",
    icon: "disk",
    text: `O monitor deu vídeo! Mas logo em seguida trava em letras brancas:<br><br>
    <code class="code-error">ERROR: No Bootable Device Found. Insert boot media and press any key...</code><br><br>
    A placa-mãe não está encontrando o SSD/HD com o sistema operacional. Ao olhar dentro da lateral aberta, o que você faz?`,
    pcStatus: {
      power: "online",
      ram: "online",
      disk: "erro",
      cooler: "desconhecido",
      system: "offline"
    },
    options: [
      {
        text: "A) Verificar se o cabo SATA e o cabo de alimentação do SSD/HD estão bem conectados",
        isCorrect: true,
        feedback: "BINGO! No tranco que você deu na mesa, o cabo de dados do SSD tinha se soltado da porta SATA!",
        timePenalty: 0,
        nextScene: "fase4_refrigeracao"
      },
      {
        text: "B) Apertar o botão 'Enter' 40 vezes por segundo esperando um milagre",
        isCorrect: false,
        feedback: "O teclado começou a apitar de tanto você martelar o Enter, mas o SSD continua desconectado!",
        timePenalty: 15,
        nextScene: "fase3_disco_retry"
      },
      {
        text: "C) Assoprar a entrada USB do mouse achando que o Windows vai subir por lá",
        isCorrect: false,
        feedback: "O mouse não tem nada a ver com o disco de boot! Olhe os cabos de armazenamento!",
        timePenalty: 15,
        nextScene: "fase3_disco_retry"
      },
      {
        text: "D) Tirar foto da tela e mandar no grupo da família com 'Bom dia'",
        isCorrect: false,
        feedback: "Sua tia mandou uma figurinha de gatinho, mas seu emprego ainda está por um fio!",
        timePenalty: 20,
        nextScene: "fase3_disco_retry"
      }
    ]
  },

  "fase3_disco_retry": {
    badge: "Etapa 3 de 5 • Dica de Manutenção",
    title: "Sem Disco de Inicialização!",
    icon: "search",
    text: `Se o computador diz <b>"No Bootable Device"</b>, significa que a placa não está conseguindo ler o disco rígido ou SSD.<br><br>
    Conecte os cabos do disco para o sistema poder iniciar!`,
    pcStatus: {
      power: "online",
      ram: "online",
      disk: "erro",
      cooler: "desconhecido",
      system: "offline"
    },
    options: [
      {
        text: "🔌 Encaixar com firmeza o cabo SATA no SSD e na placa-mãe",
        isCorrect: true,
        feedback: "Conectado! O SSD foi reconhecido no BIOS na mesma hora!",
        timePenalty: 0,
        nextScene: "fase4_refrigeracao"
      },
      {
        text: "🙈 Fechar os olhos e fingir que é um pesadelo",
        isCorrect: false,
        feedback: "Quando você abriu os olhos, o cronômetro tinha rodado mais 10 segundos!",
        timePenalty: 10,
        nextScene: "fase3_disco_retry"
      }
    ]
  },

  // -------------------------------------------------------------
  // FASE 4: SUPERAQUECIMENTO / COOLER
  // -------------------------------------------------------------
  "fase4_refrigeracao": {
    badge: "Etapa 4 de 5 • Refrigeração Térmica",
    title: "Ventoinha Parecendo Uma Turbina de Avião!",
    icon: "flame",
    text: `O logotipo do Windows começou a carregar! Mas de repente a ventoinha do processador gira em 100%, faz um barulho ensurdecedor de <b>VVVRRRUUUUUM</b> e a tela pisca:<br><br>
    <code class="code-warning">WARNING: CPU Overheating! Thermal Throttling Active! (98°C)</code><br><br>
    Se esquentar mais 2 graus, o PC vai desligar de emergência para não queimar o processador! O que está acontecendo?`,
    pcStatus: {
      power: "online",
      ram: "online",
      disk: "online",
      cooler: "erro",
      system: "carregando"
    },
    options: [
      {
        text: "A) Retirar o casaco pesado que alguém jogou em cima da saída de ar e desenganchar um fio que travou a hélice do cooler",
        isCorrect: true,
        feedback: "EXATAMENTE! Havia um fio solto bloqueando a ventoinha e um casaco tampando a grade. O ar fresco entrou e a temperatura despencou para 45°C!",
        timePenalty: 0,
        nextScene: "fase5_recuperacao"
      },
      {
        text: "B) Colocar dois cubos de gelo do bebedouro direto em cima da placa de vídeo",
        isCorrect: false,
        feedback: "O gelo começou a derreter em cima dos circuitos! Você tirou na velocidade da luz antes do curto!",
        timePenalty: 25,
        nextScene: "fase4_refrigeracao_retry"
      },
      {
        text: "C) Abanar o computador furiosamente com um crachá de plástico",
        isCorrect: false,
        feedback: "Você cansou o braço e o vento do crachá não baixou nem 0.1°C da CPU!",
        timePenalty: 15,
        nextScene: "fase4_refrigeracao_retry"
      },
      {
        text: "D) Desligar o computador no botão da tomada pra ele 'descansar'",
        isCorrect: false,
        feedback: "NÃO! Se desligar agora vai ter que passar por todo o boot de novo!",
        timePenalty: 20,
        nextScene: "fase4_refrigeracao_retry"
      }
    ]
  },

  "fase4_refrigeracao_retry": {
    badge: "Etapa 4 de 5 • Dica de Manutenção",
    title: "Alívio Térmico Urgente!",
    icon: "cooler",
    text: `O processador precisa de <b>fluxo de ar</b> e ventilação livre para dissipar o calor!<br><br>
    Libere a circulação de ar do gabinete imediatamente!`,
    pcStatus: {
      power: "online",
      ram: "online",
      disk: "online",
      cooler: "erro",
      system: "carregando"
    },
    options: [
      {
        text: "🌬️ Tirar obstruções da ventilação e deixar o cooler girar livremente",
        isCorrect: true,
        feedback: "Ótimo! O cooler começou a girar macio e o aviso de superaquecimento sumiu!",
        timePenalty: 0,
        nextScene: "fase5_recuperacao"
      },
      {
        text: "🗣️ Soprar forte na traseira do gabinete até ficar tonto",
        isCorrect: false,
        feedback: "Você ficou sem fôlego e o PC continua precisando de ventilação livre!",
        timePenalty: 10,
        nextScene: "fase4_refrigeracao_retry"
      }
    ]
  },

  // -------------------------------------------------------------
  // FASE 5: ÁREA DE TRABALHO & RECUPERAÇÃO DA LIXEIRA
  // -------------------------------------------------------------
  "fase5_recuperacao": {
    badge: "Etapa 5 de 5 • O Minuto Final",
    title: "Área de Trabalho Aberta! Falta Pouco!",
    icon: "system",
    text: `*TCHAN-RAM!* O som de inicialização toca e a área de trabalho do Windows se abre na sua frente!<br><br>
    O relógio do expurgo automático da lixeira está piscando na barra de tarefas! Faltam segundos para a limpeza definitiva dos dados confidenciais!<br><br>
    <b>Qual é a sua ação imediata?</b>`,
    pcStatus: {
      power: "online",
      ram: "online",
      disk: "online",
      cooler: "online",
      system: "online"
    },
    options: [
      {
        text: "A) Abrir a Lixeira, localizar a pasta confidencial e clicar em 'Restaurar Todos os Itens'",
        isCorrect: true,
        feedback: "SUCESSO ABSOLUTO! A barra de restauração correu em 100% e a pasta voltou pro diretório original salva!",
        timePenalty: 0,
        nextScene: "vitoria"
      },
      {
        text: "B) Clicar em 'Esvaziar Lixeira' achando que isso vai salvar os arquivos mais rápido",
        isCorrect: false,
        feedback: "SOCORRO! Esvaziar lixeira apaga tudo de vez! Quase que você assina a própria demissão!",
        timePenalty: 20,
        nextScene: "fase5_recuperacao_retry"
      },
      {
        text: "C) Formatar o computador para dizer que pegou um vírus alienígena",
        isCorrect: false,
        feedback: "Essa desculpa nunca colaria com a diretoria! Recupere os arquivos da lixeira!",
        timePenalty: 20,
        nextScene: "fase5_recuperacao_retry"
      },
      {
        text: "D) Abrir o Paint para desenhar a pasta e fingir que nada aconteceu",
        isCorrect: false,
        feedback: "Seu desenho no Paint ficou uma obra de arte, mas o chefe quer a planilha financeira real!",
        timePenalty: 15,
        nextScene: "fase5_recuperacao_retry"
      }
    ]
  },

  "fase5_recuperacao_retry": {
    badge: "Etapa 5 de 5 • Última Chance",
    title: "Restaurar é a Palavra Mágica!",
    icon: "trash",
    text: `A pasta ainda está na Lixeira esperando o comando certo!<br><br>
    Não invente moda: clique com o botão direito e <b>restaure os dados</b>!`,
    pcStatus: {
      power: "online",
      ram: "online",
      disk: "online",
      cooler: "online",
      system: "online"
    },
    options: [
      {
        text: "📂 Abrir a Lixeira e clicar em 'Restaurar Todos os Itens'",
        isCorrect: true,
        feedback: "A pasta foi restaurada intacta! Você conseguiu!",
        timePenalty: 0,
        nextScene: "vitoria"
      }
    ]
  },

  // -------------------------------------------------------------
  // FINAIS: VITÓRIA OU GAME OVER
  // -------------------------------------------------------------
  "vitoria": {
    badge: "🏆 MISSÃO CUMPRIDA!",
    title: "Você Salvou a Empresa!",
    icon: "party",
    text: `A porta da sala de TI se abre. É o chefe entrando com uma caneca de café na mão:<br><br>
    <i>— "E aí, Juninho! Ouvi uns barulhos estranhos aqui... tá tudo em ordem com o servidor?"</i><br><br>
    Você olha para o monitor: os dados confidenciais estão intactos no lugar, o PC tá rodando lisinho e a lixeira está vazia por vontade própria.<br><br>
    <i>— "Tudo sob controle, chefe! Só fiz uma preventiva rápida de rotina."</i><br><br>
    O chefe sorri, te dá um tapinha nas costas e promete uma coxinha com refrigerante no lanche da tarde! Você foi promovido a <b>Estagiário Sênior</b>! 🎖️`,
    isEnd: true,
    isVictory: true,
    pcStatus: {
      power: "online",
      ram: "online",
      disk: "online",
      cooler: "online",
      system: "online"
    },
    options: [
      {
        text: "🔄 Jogar Novamente (Melhorar meu tempo)",
        isCorrect: true,
        feedback: "Reiniciando o desafio...",
        timePenalty: 0,
        nextScene: "intro"
      }
    ]
  },

  "game_over_tempo": {
    badge: "⏰ O TEMPO ACABOU!",
    title: "A Lixeira Foi Esvaziada...",
    icon: "boom",
    text: `<b>00:00</b> no cronômetro!<br><br>
    O script automático rodou e apagou todos os dados de forma permanente.<br><br>
    Nesse exato momento, o chefe e a equipe inteira entram na sala segurando relatórios vazios.<br><br>
    <i>— "Juninho... por que o banco de dados sumiu?!"</i><br><br>
    Não desanime! Na informática, a prática leva à perfeição. Revise os passos de manutenção e tente de novo antes que o tempo esgote!`,
    isEnd: true,
    isVictory: false,
    pcStatus: {
      power: "erro",
      ram: "erro",
      disk: "erro",
      cooler: "erro",
      system: "erro"
    },
    options: [
      {
        text: "⚡ Tentar Novamente (Voltar no Tempo)",
        isCorrect: true,
        feedback: "Voltando ao início...",
        timePenalty: 0,
        nextScene: "intro"
      }
    ]
  }
};

// Exporta globalmente para o navegador
window.GAME_CONFIG = GAME_CONFIG;
window.STORY_DATA = STORY_DATA;
