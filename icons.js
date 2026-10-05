/**
 * ====================================================================
 * 💥 COMIC ICONS: SISTEMA DE ÍCONES EM ESTILO QUADRINHOS & HQ 💥
 * ====================================================================
 * Substituição 100% vetorial de todos os emojis por ilustrações com:
 * - Traço preto forte estilo tinta/nanquim (Comic Inking)
 * - Cores vibrantes da paleta Pop Art / Gibi
 * - Realces e sombras duras
 * - Detalhes de quadrinhos (faíscas, estrelas, balões, nuvens de poeira)
 * ====================================================================
 */

(function () {
  const ICONS = {
    // ⚡ RAIO / ENERGIA / POWER
    "bolt": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="18,2 6,17 15,17 13,30 26,14 17,14" fill="#FFE600" stroke="#1A1A1A" stroke-width="2.4" stroke-linejoin="round"/>
        <polygon points="17,5 9,16 15,16 14,24 22,14 17,14" fill="#FFF9A6"/>
        <circle cx="27" cy="7" r="1.2" fill="#FF3344"/>
        <line x1="27" y1="4" x2="27" y2="10" stroke="#1A1A1A" stroke-width="1.2" stroke-linecap="round"/>
        <line x1="24" y1="7" x2="30" y2="7" stroke="#1A1A1A" stroke-width="1.2" stroke-linecap="round"/>
      </svg>
    `,

    // 🔊 SOM ATIVADO / ALTO-FALANTE
    "volume": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 7L7 11H3C2.45 11 2 11.45 2 12V20C2 20.55 2.45 21 3 21H7L13 25C13.8 25.6 15 25 15 24V8C15 7 13.8 6.4 13 7Z" fill="#FFE600" stroke="#1A1A1A" stroke-width="2.4" stroke-linejoin="round"/>
        <path d="M6 13H4V19H6" fill="#FFF" stroke="#1A1A1A" stroke-width="1.2"/>
        <path d="M19 11C20.8 12.4 22 14.1 22 16C22 17.9 20.8 19.6 19 21" stroke="#1A1A1A" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M23 7C26 9.8 28 12.8 28 16C28 19.2 26 22.2 23 25" stroke="#FF3344" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    `,

    // 🔇 MUDO / SILENCIAR
    "mute": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 7L7 11H3C2.45 11 2 11.45 2 12V20C2 20.55 2.45 21 3 21H7L13 25C13.8 25.6 15 25 15 24V8C15 7 13.8 6.4 13 7Z" fill="#DDD" stroke="#1A1A1A" stroke-width="2.4" stroke-linejoin="round"/>
        <!-- Corte Comic Red -->
        <line x1="19" y1="11" x2="29" y2="21" stroke="#1A1A1A" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="19" y1="11" x2="29" y2="21" stroke="#FF3344" stroke-width="2.8" stroke-linecap="round"/>
        <line x1="29" y1="11" x2="19" y2="21" stroke="#1A1A1A" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="29" y1="11" x2="19" y2="21" stroke="#FF3344" stroke-width="2.8" stroke-linecap="round"/>
      </svg>
    `,

    // 🔄 REINICIAR / RELOAD
    "restart": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 12A11 11 0 1 0 27 18" stroke="#1A1A1A" stroke-width="3" stroke-linecap="round"/>
        <path d="M26 12A11 11 0 1 0 27 18" stroke="#00E5FF" stroke-width="1.8" stroke-linecap="round"/>
        <polygon points="27,4 29,14 19,13" fill="#FFE600" stroke="#1A1A1A" stroke-width="2.2" stroke-linejoin="round"/>
        <circle cx="16" cy="16" r="2.5" fill="#FF3344" stroke="#1A1A1A" stroke-width="1.5"/>
      </svg>
    `,

    // 💣 BOMBA-RELÓGIO / TIMER
    "bomb": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Corpo da Bomba -->
        <circle cx="15" cy="18" r="10" fill="#222226" stroke="#1A1A1A" stroke-width="2.4"/>
        <!-- Brilho Cartoon -->
        <path d="M10 13A6 6 0 0 1 16 10" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/>
        <!-- Tampa do Pavio -->
        <rect x="12" y="6" width="6" height="3" rx="1" fill="#888" stroke="#1A1A1A" stroke-width="1.8"/>
        <!-- Pavio Torcido -->
        <path d="M15 6C15 2 20 4 22 2" stroke="#FF8800" stroke-width="2.2" stroke-linecap="round" fill="none"/>
        <!-- Faísca de Explosão Estelar -->
        <polygon points="23,0 25,2 28,1 26,4 29,6 25,6 25,9 23,6 20,7 22,4 20,2 23,3" fill="#FFE600" stroke="#FF3344" stroke-width="1.2" stroke-linejoin="round"/>
      </svg>
    `,

    // 🔧 CHAVE INGLESA / MANUTENÇÃO / HARDWARE
    "wrench": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27 9C25 7 22 6.5 19.5 7.5L16 4L12 8L15.5 11.5C14.5 14 15 17 17 19L5 31L9 31L20 20C22 22 25 22.5 27.5 20.5C28.8 19.5 29.5 18 29.5 16.5L25 15L25 12L28.5 10.5C28.5 10 28 9.5 27 9Z" fill="#FFE600" stroke="#1A1A1A" stroke-width="2.2" stroke-linejoin="round"/>
        <line x1="8" y1="27" x2="16" y2="19" stroke="#FFF" stroke-width="1.8" stroke-linecap="round"/>
        <!-- Mini estrela comic -->
        <circle cx="24" cy="5" r="1.2" fill="#FF8800"/>
      </svg>
    `,

    // 🧠 MEMÓRIA RAM / PENTE DE MEMÓRIA (Hardware Real em estilo Comic)
    "ram": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Placa de circuito verde vibrante -->
        <rect x="2" y="9" width="28" height="13" rx="2" fill="#2ECC71" stroke="#1A1A1A" stroke-width="2.4"/>
        <!-- Chips pretos de memória -->
        <rect x="5" y="11" width="4" height="6" rx="0.5" fill="#1A1A1A"/>
        <rect x="11" y="11" width="4" height="6" rx="0.5" fill="#1A1A1A"/>
        <rect x="17" y="11" width="4" height="6" rx="0.5" fill="#1A1A1A"/>
        <rect x="23" y="11" width="4" height="6" rx="0.5" fill="#1A1A1A"/>
        <!-- Entalhe central da chave do slot -->
        <circle cx="16" cy="22" r="1.5" fill="#FFFDF0" stroke="#1A1A1A" stroke-width="1.4"/>
        <!-- Contatos dourados na base -->
        <path d="M4 22V24 M7 22V24 M10 22V24 M13 22V24 M19 22V24 M22 22V24 M25 22V24 M28 22V24" stroke="#FFE600" stroke-width="1.8" stroke-linecap="round"/>
        <!-- Faísca de contato -->
        <polygon points="16,3 17,6 20,6 18,8 19,11 16,9 13,11 14,8 12,6 15,6" fill="#FFE600" stroke="#1A1A1A" stroke-width="1"/>
      </svg>
    `,

    // 🧠 CÉREBRO CARTOON DE HQ
    "brain": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 9C7.5 9 5 11 5 14C5 15.5 5.8 17 7 18C5.5 19 5 21 6 23C7 25 9.5 25.5 11 25C12 26 14 26 15 25V9C13 8 11.5 9 10 9Z" fill="#FF85A2" stroke="#1A1A1A" stroke-width="2.2" stroke-linejoin="round"/>
        <path d="M22 9C24.5 9 27 11 27 14C27 15.5 26.2 17 25 18C26.5 19 27 21 26 23C25 25 22.5 25.5 21 25C20 26 18 26 17 25V9C19 8 20.5 9 22 9Z" fill="#FF85A2" stroke="#1A1A1A" stroke-width="2.2" stroke-linejoin="round"/>
        <path d="M9 13C10 13.5 12 12.5 13 14" stroke="#1A1A1A" stroke-width="1.8" stroke-linecap="round" fill="none"/>
        <path d="M23 13C22 13.5 20 12.5 19 14" stroke="#1A1A1A" stroke-width="1.8" stroke-linecap="round" fill="none"/>
        <path d="M8 20C9.5 21 12 19 13 21" stroke="#1A1A1A" stroke-width="1.8" stroke-linecap="round" fill="none"/>
        <path d="M24 20C22.5 21 20 19 19 21" stroke="#1A1A1A" stroke-width="1.8" stroke-linecap="round" fill="none"/>
        <line x1="16" y1="8" x2="16" y2="26" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `,

    // 💾 DISCO / SSD / DISQUETE
    "disk": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Corpo do disco / SSD azul pop -->
        <path d="M4 5C4 3.9 4.9 3 6 3H22L28 9V27C28 28.1 27.1 29 26 29H6C4.9 29 4 28.1 4 27V5Z" fill="#2A75D3" stroke="#1A1A1A" stroke-width="2.4" stroke-linejoin="round"/>
        <!-- Trava de metal superior -->
        <rect x="8" y="3" width="14" height="8" rx="1" fill="#E2E8F0" stroke="#1A1A1A" stroke-width="1.8"/>
        <rect x="11" y="5" width="3" height="4" rx="0.5" fill="#1A1A1A"/>
        <!-- Etiqueta adesiva clássica branca -->
        <rect x="7" y="16" width="18" height="11" rx="1" fill="#FFFFFF" stroke="#1A1A1A" stroke-width="1.8"/>
        <line x1="9" y1="19" x2="23" y2="19" stroke="#FF3344" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="9" y1="23" x2="19" y2="23" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    `,

    // ❄️ COOLER / VENTOINHA / REFRIGERAÇÃO
    "cooler": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Moldura redonda com fundo ciano gelo -->
        <circle cx="16" cy="16" r="13" fill="#E0F7FA" stroke="#1A1A1A" stroke-width="2.4"/>
        <!-- 4 Hélices curvas em estilo cartoon -->
        <path d="M16 16C16 11 19 8 23 9C24 13 21 16 16 16Z" fill="#00E5FF" stroke="#1A1A1A" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="M16 16C21 16 24 19 23 23C19 24 16 21 16 16Z" fill="#00B8D4" stroke="#1A1A1A" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="M16 16C16 21 13 24 9 23C8 19 11 16 16 16Z" fill="#00E5FF" stroke="#1A1A1A" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="M16 16C11 16 8 13 9 9C13 8 16 11 16 16Z" fill="#00B8D4" stroke="#1A1A1A" stroke-width="1.8" stroke-linejoin="round"/>
        <!-- Miolo central -->
        <circle cx="16" cy="16" r="3.5" fill="#FFE600" stroke="#1A1A1A" stroke-width="2"/>
        <!-- Linhas de vento comic de rotação -->
        <path d="M26 10C28 13 28 19 25 23" stroke="#00B8D4" stroke-width="1.6" stroke-linecap="round" fill="none"/>
      </svg>
    `,

    // 💻 SISTEMA / COMPUTADOR / PC
    "system": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Monitor Bezel bege/amarelo de HQ -->
        <rect x="3" y="4" width="26" height="19" rx="3" fill="#FFFDF0" stroke="#1A1A1A" stroke-width="2.4"/>
        <!-- Tela Ciano Brilhante -->
        <rect x="5.5" y="6.5" width="21" height="14" rx="1.5" fill="#00E5FF" stroke="#1A1A1A" stroke-width="1.8"/>
        <!-- Prompt de comando / Cursor piscante -->
        <path d="M8 11L12 13.5L8 16" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <line x1="14" y1="16" x2="18" y2="16" stroke="#1A1A1A" stroke-width="2.2" stroke-linecap="round"/>
        <!-- Base do Monitor -->
        <path d="M12 23H20L22 28H10L12 23Z" fill="#FFE600" stroke="#1A1A1A" stroke-width="2.2" stroke-linejoin="round"/>
      </svg>
    `,

    // 🚨 SIRENE / CÓDIGO VERMELHO / ALARME
    "siren": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Base de suporte cinza escuro -->
        <path d="M6 22H26L24 27H8L6 22Z" fill="#333333" stroke="#1A1A1A" stroke-width="2.2" stroke-linejoin="round"/>
        <!-- Cúpula de Alerta Vermelha -->
        <path d="M8 22V14C8 9.5 11.5 6 16 6C20.5 6 24 9.5 24 14V22H8Z" fill="#FF3344" stroke="#1A1A1A" stroke-width="2.4" stroke-linejoin="round"/>
        <!-- Faixa de reflexo branco -->
        <path d="M12 11C13.2 8.8 14.8 7.8 16.5 7.8" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" fill="none"/>
        <!-- Feixes de luz comic piscando -->
        <line x1="5" y1="8" x2="2" y2="6" stroke="#FFE600" stroke-width="3" stroke-linecap="round"/>
        <line x1="27" y1="8" x2="30" y2="6" stroke="#FFE600" stroke-width="3" stroke-linecap="round"/>
        <line x1="16" y1="3" x2="16" y2="1" stroke="#FFE600" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `,

    // 😱 PÂNICO / GRITO DO ESTAGIÁRIO
    "panic": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Rosto Amarelo Expressivo -->
        <circle cx="16" cy="16" r="13" fill="#FFE600" stroke="#1A1A1A" stroke-width="2.4"/>
        <!-- Mãos em choque segurando a bochecha -->
        <path d="M4 18C4 13 7 11 8 14C8 17 6 20 4 18Z" fill="#FFE600" stroke="#1A1A1A" stroke-width="1.8"/>
        <path d="M28 18C28 13 25 11 24 14C24 17 26 20 28 18Z" fill="#FFE600" stroke="#1A1A1A" stroke-width="1.8"/>
        <!-- Olhos arregalados e pupilas contraídas -->
        <circle cx="11.5" cy="11.5" r="3.5" fill="#FFF" stroke="#1A1A1A" stroke-width="1.8"/>
        <circle cx="11.5" cy="11.5" r="1.3" fill="#1A1A1A"/>
        <circle cx="20.5" cy="11.5" r="3.5" fill="#FFF" stroke="#1A1A1A" stroke-width="1.8"/>
        <circle cx="20.5" cy="11.5" r="1.3" fill="#1A1A1A"/>
        <!-- Boca aberta em O de puro desespero -->
        <ellipse cx="16" cy="21" rx="4" ry="5.5" fill="#FF3344" stroke="#1A1A1A" stroke-width="2.2"/>
        <ellipse cx="16" cy="24" rx="2.5" ry="1.5" fill="#1A1A1A"/>
        <!-- Gotas de suor frio cartoon -->
        <path d="M27 8C28 10 26 12 25 11C24 10 25 8 27 8Z" fill="#00E5FF" stroke="#1A1A1A" stroke-width="1.2"/>
      </svg>
    `,

    // 💡 LÂMPADA DE IDEIA / DICA TÉCNICA
    "lightbulb": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Bulbo Amarelo Radiante -->
        <path d="M16 4C11.5 4 8 7.5 8 12C8 15.2 10.2 17.5 11.5 19H20.5C21.8 17.5 24 15.2 24 12C24 7.5 20.5 4 16 4Z" fill="#FFE600" stroke="#1A1A1A" stroke-width="2.4" stroke-linejoin="round"/>
        <!-- Filamento em M -->
        <path d="M13 13L15 10L17 13L19 10" stroke="#FF8800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <!-- Rosca de metal e contato -->
        <rect x="12" y="21" width="8" height="4" rx="1" fill="#DDD" stroke="#1A1A1A" stroke-width="2"/>
        <path d="M13.5 25H18.5L17 28H15L13.5 25Z" fill="#333" stroke="#1A1A1A" stroke-width="1.5"/>
        <!-- Raios de ideia / inspiração -->
        <line x1="16" y1="1" x2="16" y2="3" stroke="#FF8800" stroke-width="3" stroke-linecap="round"/>
        <line x1="5" y1="6" x2="3" y2="4" stroke="#FF8800" stroke-width="3" stroke-linecap="round"/>
        <line x1="27" y1="6" x2="29" y2="4" stroke="#FF8800" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `,

    // 🔌 PLUG / CABO DE FORÇA
    "plug": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Corpo do plugue amarelo vibrante -->
        <rect x="8" y="11" width="16" height="13" rx="3" fill="#FFE600" stroke="#1A1A1A" stroke-width="2.4"/>
        <!-- Pinos de metal prateados -->
        <rect x="10.5" y="4" width="3.5" height="7" rx="1" fill="#FFFFFF" stroke="#1A1A1A" stroke-width="2"/>
        <rect x="18" y="4" width="3.5" height="7" rx="1" fill="#FFFFFF" stroke="#1A1A1A" stroke-width="2"/>
        <!-- Fio preto grosso saindo -->
        <path d="M16 24V29C16 30.5 18 31 20 31" stroke="#1A1A1A" stroke-width="3" stroke-linecap="round" fill="none"/>
        <!-- Faísca saindo do pino -->
        <polygon points="16,3 17,5 19,5 17.5,6.5 18.5,8.5 16,7 13.5,8.5 14.5,6.5 13,5 15,5" fill="#00E5FF" stroke="#1A1A1A" stroke-width="0.8"/>
      </svg>
    `,

    // 📟 BIPES DO POST / ALTO-FALANTE DE GABINETE
    "beep": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Caixinha de som / Buzzer -->
        <rect x="4" y="7" width="16" height="18" rx="3" fill="#FFE600" stroke="#1A1A1A" stroke-width="2.4"/>
        <circle cx="12" cy="16" r="4.5" fill="#2ECC71" stroke="#1A1A1A" stroke-width="2"/>
        <circle cx="12" cy="16" r="1.5" fill="#1A1A1A"/>
        <!-- Ondas sonoras do "BEEP!" em cores quentes -->
        <path d="M22 10C24 12 25.5 14 25.5 16C25.5 18 24 20 22 22" stroke="#FF3344" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M26 6C29 9 31 12.5 31 16C31 19.5 29 23 26 26" stroke="#FF8800" stroke-width="3" stroke-linecap="round" fill="none"/>
      </svg>
    `,

    // 🔍 LUPA / BUSCA / DIAGNÓSTICO
    "search": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Aro da Lente -->
        <circle cx="13" cy="13" r="8.5" fill="#E0F7FA" stroke="#1A1A1A" stroke-width="2.6"/>
        <!-- Brilho branco no vidro -->
        <path d="M9 10A5 5 0 0 1 14 7" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" fill="none"/>
        <!-- Cabo de madeira/plástico cartoon -->
        <line x1="19" y1="19" x2="28" y2="28" stroke="#1A1A1A" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="19" y1="19" x2="28" y2="28" stroke="#FF8800" stroke-width="3.2" stroke-linecap="round"/>
      </svg>
    `,

    // 🔥 SUPERAQUECIMENTO / FOGO / TÉRMICO
    "flame": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Labareda Externa Vermelha -->
        <path d="M16 2C16 2 21 8 21 13C21 15 25 17 25 22C25 27 21 30 16 30C11 30 7 27 7 22C7 16 11 13 12 11C13 14 15 15 16 13C17 11 16 2 16 2Z" fill="#FF3344" stroke="#1A1A1A" stroke-width="2.4" stroke-linejoin="round"/>
        <!-- Miolo de Chama Amarelo Elétrico -->
        <path d="M16 14C16 14 19 17 19 21C19 24 17.5 26 16 26C14.5 26 13 24 13 21C13 18 15 17 16 14Z" fill="#FFE600" stroke="#1A1A1A" stroke-width="1.5"/>
        <!-- Faíscas de calor -->
        <circle cx="25" cy="9" r="1.5" fill="#FF8800" stroke="#1A1A1A" stroke-width="0.8"/>
      </svg>
    `,

    // ❄️ GELO / FLUXO FRIO
    "snow": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Estrela de gelo / Cristal de neve -->
        <line x1="16" y1="4" x2="16" y2="28" stroke="#1A1A1A" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="16" y1="4" x2="16" y2="28" stroke="#00E5FF" stroke-width="2.2" stroke-linecap="round"/>
        <line x1="5.6" y1="10" x2="26.4" y2="22" stroke="#1A1A1A" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="5.6" y1="10" x2="26.4" y2="22" stroke="#00E5FF" stroke-width="2.2" stroke-linecap="round"/>
        <line x1="5.6" y1="22" x2="26.4" y2="10" stroke="#1A1A1A" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="5.6" y1="22" x2="26.4" y2="10" stroke="#00E5FF" stroke-width="2.2" stroke-linecap="round"/>
        <circle cx="16" cy="16" r="3.5" fill="#FFFFFF" stroke="#1A1A1A" stroke-width="2"/>
      </svg>
    `,

    // 🗑️ LIXEIRA DO SISTEMA
    "trash": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Corpo da lixeira de lata -->
        <path d="M8 11L10 28H22L24 11H8Z" fill="#DDDDE0" stroke="#1A1A1A" stroke-width="2.4" stroke-linejoin="round"/>
        <!-- Nervuras da lata -->
        <line x1="12" y1="15" x2="13" y2="24" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round"/>
        <line x1="16" y1="15" x2="16" y2="24" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round"/>
        <line x1="20" y1="15" x2="19" y2="24" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round"/>
        <!-- Tampa inclinada aberta de gibi -->
        <path d="M6 9L16 6L26 8" stroke="#1A1A1A" stroke-width="3.2" stroke-linecap="round"/>
        <path d="M14 6V3.5H18V6" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" fill="none"/>
        <!-- Arquivo / Folha confidencial escapando -->
        <polygon points="12,6 16,2 18,7 14,9" fill="#FFE600" stroke="#1A1A1A" stroke-width="1.5"/>
      </svg>
    `,

    // 📂 PASTA DE ARQUIVOS
    "folder": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Aba de trás -->
        <path d="M4 8H12L15 11H28V24H4V8Z" fill="#FF8800" stroke="#1A1A1A" stroke-width="2.4" stroke-linejoin="round"/>
        <!-- Folha confidencial dentro -->
        <rect x="8" y="9" width="14" height="8" rx="1" fill="#FFFFFF" stroke="#1A1A1A" stroke-width="1.8"/>
        <!-- Aba da frente aberta -->
        <polygon points="3,14 27,14 25,26 1,26" fill="#FFE600" stroke="#1A1A1A" stroke-width="2.4" stroke-linejoin="round"/>
      </svg>
    `,

    // 🏆 TROFÉU / VITÓRIA / MISSÃO CUMPRIDA
    "trophy": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Taça de Ouro -->
        <path d="M9 5H23V14C23 18 19.5 21 16 21C12.5 21 9 18 9 14V5Z" fill="#FFE600" stroke="#1A1A1A" stroke-width="2.4" stroke-linejoin="round"/>
        <!-- Alças cartoon -->
        <path d="M9 8H5C4 8 4 13 7 14L9 14" stroke="#1A1A1A" stroke-width="2.4" stroke-linecap="round" fill="none"/>
        <path d="M23 8H27C28 8 28 13 25 14L23 14" stroke="#1A1A1A" stroke-width="2.4" stroke-linecap="round" fill="none"/>
        <!-- Haste e Base -->
        <rect x="14" y="21" width="4" height="4" fill="#FF8800" stroke="#1A1A1A" stroke-width="2"/>
        <rect x="10" y="25" width="12" height="4" rx="1" fill="#1A1A1A" stroke="#1A1A1A" stroke-width="2"/>
        <!-- Estrela de campeão gravada -->
        <polygon points="16,9 17,11.5 19.5,11.5 17.5,13 18,15.5 16,14 14,15.5 14.5,13 12.5,11.5 15,11.5" fill="#FFFFFF" stroke="#1A1A1A" stroke-width="0.8"/>
      </svg>
    `,

    // 🎉 FESTA / CONFETES / CELEBRAÇÃO
    "party": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Cone do Poppers de Festa -->
        <polygon points="5,27 15,27 7,16" fill="#FF3344" stroke="#1A1A1A" stroke-width="2.4" stroke-linejoin="round"/>
        <!-- Confetes e estrelas explodindo -->
        <circle cx="16" cy="11" r="2.2" fill="#FFE600" stroke="#1A1A1A" stroke-width="1.4"/>
        <rect x="22" y="8" width="4" height="6" rx="1" fill="#00E5FF" stroke="#1A1A1A" stroke-width="1.4" transform="rotate(30 22 8)"/>
        <polygon points="20,18 21,20 23,20 21.5,21.5 22,23.5 20,22 18,23.5 18.5,21.5 17,20 19,20" fill="#2ECC71" stroke="#1A1A1A" stroke-width="0.8"/>
        <!-- Serpentina espiral -->
        <path d="M22 2C24 4 21 6 23 8" stroke="#FF8800" stroke-width="2" stroke-linecap="round" fill="none"/>
      </svg>
    `,

    // 💥 EXPLOSÃO / BOOM / GAME OVER
    "boom": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Estrela de Explosão Externa Vermelha -->
        <polygon points="16,1 19,8 26,4 23,11 30,13 25,18 31,23 24,24 26,31 19,27 16,31 13,26 6,30 8,23 1,22 6,17 1,12 8,13 6,5 13,9" fill="#FF3344" stroke="#1A1A1A" stroke-width="2.4" stroke-linejoin="round"/>
        <!-- Estrela de Explosão Interna Amarela -->
        <polygon points="16,5 18,10 23,7 21,12 26,14 22,17 26,21 21,22 22,27 18,24 15,27 13,22 8,25 10,19 4,18 8,14 4,10 10,11 9,7 14,9" fill="#FFE600"/>
        <circle cx="16" cy="16" r="3.5" fill="#FFFFFF"/>
      </svg>
    `,

    // ✅ ACERTO / CHECK / BOM TRABALHO
    "check": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Selo redondo verde de HQ -->
        <circle cx="16" cy="16" r="13" fill="#2ECC71" stroke="#1A1A1A" stroke-width="2.6"/>
        <!-- Checkmark grosso branco com borda preta -->
        <path d="M8 16L13.5 21.5L24 10" stroke="#1A1A1A" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <path d="M8 16L13.5 21.5L24 10" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </svg>
    `,

    // ⚠️ ALERTA / PERIGO / AVISO
    "warning": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Triângulo Amarelo de Alerta -->
        <polygon points="16,3 30,27 2,27" fill="#FFE600" stroke="#1A1A1A" stroke-width="2.6" stroke-linejoin="round"/>
        <!-- Ponto de exclamação preto -->
        <line x1="16" y1="11" x2="16" y2="19" stroke="#1A1A1A" stroke-width="3.2" stroke-linecap="round"/>
        <circle cx="16" cy="23.5" r="1.7" fill="#1A1A1A"/>
      </svg>
    `,

    // ⏳ AMPULHETA / PENALIDADE DE TEMPO
    "hourglass": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Bases de suporte de madeira -->
        <path d="M7 4H25 M7 28H25" stroke="#1A1A1A" stroke-width="3.2" stroke-linecap="round"/>
        <!-- Vidro da ampulheta com reflexo -->
        <path d="M9 5L15 15V17L9 27H23L17 17V15L23 5H9Z" fill="#E0F7FA" stroke="#1A1A1A" stroke-width="2.2" stroke-linejoin="round"/>
        <!-- Areia Laranja escorrendo -->
        <polygon points="11,9 21,9 16,14" fill="#FF8800"/>
        <polygon points="11,26 21,26 16,20" fill="#FF8800"/>
        <line x1="16" y1="14" x2="16" y2="21" stroke="#FF8800" stroke-width="2"/>
      </svg>
    `,

    // 🏃 CORRER / FUGIR
    "runner": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Tênis esportivo vermelho veloz -->
        <path d="M6 20C8 14 13 11 19 11H27C28 11 29 12 28 14L26 21C26 22 24 23 22 23H7C6 23 5 21.5 6 20Z" fill="#FF3344" stroke="#1A1A1A" stroke-width="2.2" stroke-linejoin="round"/>
        <path d="M5 23H25C26 23 27 24 26 26H6C5 26 4 24 5 23Z" fill="#FFFFFF" stroke="#1A1A1A" stroke-width="2"/>
        <!-- Linhas e fumaça cartoon de disparada atrás -->
        <circle cx="4" cy="17" r="2.5" fill="#FFFFFF" stroke="#1A1A1A" stroke-width="1.5"/>
        <line x1="1" y1="12" x2="6" y2="12" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `,

    // 📦 CAIXA DE PAPELÃO / DESPEJO
    "box": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Tampa Superior -->
        <polygon points="16,3 28,9 16,15 4,9" fill="#E6A15C" stroke="#1A1A1A" stroke-width="2.2" stroke-linejoin="round"/>
        <!-- Lado Esquerdo -->
        <polygon points="4,9 16,15 16,28 4,22" fill="#C67D35" stroke="#1A1A1A" stroke-width="2.2" stroke-linejoin="round"/>
        <!-- Lado Direito -->
        <polygon points="16,15 28,9 28,22 16,28" fill="#D68D45" stroke="#1A1A1A" stroke-width="2.2" stroke-linejoin="round"/>
        <!-- Fita adesiva amarela lacrando -->
        <polygon points="13,4.5 19,7.5 19,16 13,13" fill="#FFE600" stroke="#1A1A1A" stroke-width="1.2"/>
      </svg>
    `,

    // 🕯️ VELA
    "candle": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Corpo da Vela com cera escorrida -->
        <rect x="11" y="13" width="10" height="15" rx="1" fill="#FFFFFF" stroke="#1A1A1A" stroke-width="2.2"/>
        <path d="M11 17C12 20 14 20 14 17" stroke="#1A1A1A" stroke-width="1.8" fill="#FFF"/>
        <line x1="16" y1="13" x2="16" y2="9" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round"/>
        <!-- Chama amarela e vermelha -->
        <path d="M16 3C14 6 13 8 14 10C15 11 17 11 18 10C19 8 18 6 16 3Z" fill="#FFE600" stroke="#FF3344" stroke-width="1.6" stroke-linejoin="round"/>
      </svg>
    `,

    // 🧩 PEÇA DE ENCAIXE / RAM
    "puzzle": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 6H13C13 4 15 4 15 6H18C18 9 20 9 20 11V14C22 14 22 16 20 16V19H17C17 21 15 21 15 19H12C9 19 9 17 7 17V14C5 14 5 12 7 12V9C7 6 10 6 10 6Z" fill="#9B59B6" stroke="#1A1A1A" stroke-width="2.2" stroke-linejoin="round"/>
        <circle cx="14" cy="12" r="1.5" fill="#FFF"/>
      </svg>
    `,

    // 🧹 VASSOURA
    "broom": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Cabo de madeira inclinado -->
        <line x1="26" y1="5" x2="13" y2="19" stroke="#1A1A1A" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="26" y1="5" x2="13" y2="19" stroke="#A0522D" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Palha / Cerdas da vassoura -->
        <polygon points="13,18 17,22 11,28 6,24" fill="#FFE600" stroke="#1A1A1A" stroke-width="2.2" stroke-linejoin="round"/>
        <!-- Curvas de poeira varrida -->
        <path d="M4 27C7 29 11 30 15 29" stroke="#00E5FF" stroke-width="2.2" stroke-linecap="round" fill="none"/>
      </svg>
    `,

    // 🙈 OLHOS FECHADOS / NERVOSO
    "blindfold": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Rosto Amarelo -->
        <circle cx="16" cy="16" r="13" fill="#FFE600" stroke="#1A1A1A" stroke-width="2.4"/>
        <!-- Olhos fechados com força > < -->
        <path d="M9 13L13 15L9 17" fill="none" stroke="#1A1A1A" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23 13L19 15L23 17" fill="none" stroke="#1A1A1A" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Sorriso nervoso com gotas de suor -->
        <path d="M12 22C14 21 16 23 18 22C19 21.5 20 22 20 22" fill="none" stroke="#1A1A1A" stroke-width="2.2" stroke-linecap="round"/>
        <circle cx="22" cy="8" r="1.8" fill="#00E5FF" stroke="#1A1A1A" stroke-width="1"/>
      </svg>
    `,

    // 🌬️ VENTO / FLUXO DE AR
    "wind": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Rajadas curvas de brisa cartoon -->
        <path d="M4 13H19C21 13 22 11.5 21 10C20 8.5 18 9 18 10" fill="none" stroke="#1A1A1A" stroke-width="3" stroke-linecap="round"/>
        <path d="M4 13H19C21 13 22 11.5 21 10C20 8.5 18 9 18 10" fill="none" stroke="#00E5FF" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M2 18H23C25.5 18 27 16.5 26 14.5C25 13 23 13.5 23 14.5" fill="none" stroke="#1A1A1A" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M2 18H23C25.5 18 27 16.5 26 14.5C25 13 23 13.5 23 14.5" fill="none" stroke="#00E5FF" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M6 23H17C19 23 20 24.5 19 26C18 27 16.5 26.5 16.5 25.5" fill="none" stroke="#00E5FF" stroke-width="2.2" stroke-linecap="round"/>
      </svg>
    `,

    // 🗣️ SOPRAR / VOZ
    "shout": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Rosto em perfil assoprando -->
        <circle cx="14" cy="16" r="10" fill="#FFE600" stroke="#1A1A1A" stroke-width="2.4"/>
        <circle cx="16" cy="13" r="2" fill="#1A1A1A"/>
        <ellipse cx="23" cy="18" rx="2.5" ry="1.5" fill="#FF3344" stroke="#1A1A1A" stroke-width="1.5"/>
        <path d="M26 16C28 17 29 18 31 18" stroke="#00E5FF" stroke-width="2.2" stroke-linecap="round"/>
      </svg>
    `,

    // 🎖️ MEDALHA DE HONRA
    "medal": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Fita listrada -->
        <polygon points="11,3 16,11 21,3 18,14 14,14" fill="#FF3344" stroke="#1A1A1A" stroke-width="2" stroke-linejoin="round"/>
        <line x1="16" y1="3" x2="16" y2="12" stroke="#FFFFFF" stroke-width="1.5"/>
        <!-- Medalha redonda dourada -->
        <circle cx="16" cy="20" r="7.5" fill="#FFE600" stroke="#1A1A1A" stroke-width="2.4"/>
        <polygon points="16,15.5 17.5,18 20.5,18.5 18,20.5 19,23.5 16,22 13,23.5 14,20.5 11.5,18.5 14.5,18" fill="#FF8800" stroke="#1A1A1A" stroke-width="0.8"/>
      </svg>
    `,

    // ➔ SETA COMIC DE CONTINUAR
    "arrow": `
      <svg viewBox="0 0 32 32" class="comic-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 16H24 M16 8L24 16L16 24" stroke="#1A1A1A" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 16H24 M16 8L24 16L16 24" stroke="#FFE600" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `
  };

  // Mapeamento direto de caracteres Emoji para chaves de ícone HQ
  const EMOJI_MAP = {
    "⚡": "bolt",
    "🔊": "volume",
    "🔇": "mute",
    "🔄": "restart",
    "💣": "bomb",
    "🔧": "wrench",
    "🧠": "ram",
    "💾": "disk",
    "❄️": "cooler",
    "❄": "cooler",
    "💻": "system",
    "🚨": "siren",
    "😱": "panic",
    "💡": "lightbulb",
    "🔌": "plug",
    "📟": "beep",
    "🔍": "search",
    "🔥": "flame",
    "🗑️": "trash",
    "🗑": "trash",
    "📂": "folder",
    "🏆": "trophy",
    "🎉": "party",
    "💥": "boom",
    "✅": "check",
    "⚠️": "warning",
    "⚠": "warning",
    "⏳": "hourglass",
    "⏰": "hourglass",
    "🏃": "runner",
    "📦": "box",
    "🕯️": "candle",
    "🕯": "candle",
    "🧩": "puzzle",
    "🧹": "broom",
    "🙈": "blindfold",
    "🌬️": "wind",
    "🌬": "wind",
    "🗣️": "shout",
    "🗣": "shout",
    "🎖️": "medal",
    "🎖": "medal",
    "➔": "arrow"
  };

  /**
   * Obtém o HTML de um ícone em estilo gibi pelo nome da chave
   */
  function getIcon(name, options = {}) {
    const rawSvg = ICONS[name] || ICONS["bolt"];
    const extraClass = options.className ? ` ${options.className}` : "";
    const sizeStyle = options.size ? ` style="width:${options.size};height:${options.size};"` : "";
    return `<span class="comic-icon comic-icon-${name}${extraClass}" aria-hidden="true"${sizeStyle}>${rawSvg}</span>`;
  }

  /**
   * Substitui todos os emojis de uma string ou HTML por ícones no estilo HQ
   */
  function replaceEmojis(text) {
    if (!text || typeof text !== "string") return text;

    let result = text;
    // Percorre todos os emojis mapeados
    for (const [emoji, iconKey] of Object.entries(EMOJI_MAP)) {
      if (result.includes(emoji)) {
        const iconHtml = getIcon(iconKey);
        result = result.split(emoji).join(iconHtml);
      }
    }
    return result;
  }

  // Exporta globalmente
  window.ComicIcons = {
    get: getIcon,
    replaceEmojis: replaceEmojis,
    icons: ICONS,
    emojiMap: EMOJI_MAP
  };
})();
