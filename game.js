/**
 * ====================================================================
 * 🎮 MOTOR DO JOGO: SOCORRO, APAGUEI A FIRMA!
 * ====================================================================
 */

class GameEngine {
  constructor() {
    this.currentSceneId = "intro";
    this.timeRemaining = GAME_CONFIG.initialTimeSeconds;
    this.timerInterval = null;
    this.isTimerRunning = false;
    this.isGameOver = false;

    // Elementos DOM
    this.timerDisplay = document.getElementById("timer-display");
    this.sceneBadge = document.getElementById("scene-badge");
    this.sceneIcon = document.getElementById("scene-icon");
    this.sceneTitle = document.getElementById("scene-title");
    this.sceneText = document.getElementById("scene-text");
    this.optionsContainer = document.getElementById("options-container");
    this.mainCard = document.getElementById("main-card");
    this.muteBtn = document.getElementById("btn-mute");
    this.restartBtn = document.getElementById("btn-restart");

    // Modal de Feedback
    this.feedbackOverlay = document.getElementById("feedback-overlay");
    this.feedbackIcon = document.getElementById("feedback-icon");
    this.feedbackTitle = document.getElementById("feedback-title");
    this.feedbackMessage = document.getElementById("feedback-message");
    this.feedbackPenalty = document.getElementById("feedback-penalty");
    this.feedbackContinueBtn = document.getElementById("feedback-continue-btn");

    // Componentes de Hardware
    this.hwItems = {
      power: document.getElementById("hw-power"),
      ram: document.getElementById("hw-ram"),
      disk: document.getElementById("hw-disk"),
      cooler: document.getElementById("hw-cooler"),
      system: document.getElementById("hw-system")
    };

    this.pendingNextScene = null;
    this.initEvents();
  }

  initEvents() {
    // Botão de Áudio (Mudo / Desmudo)
    if (this.muteBtn) {
      this.muteBtn.innerHTML = window.ComicIcons.get("volume");
      this.muteBtn.addEventListener("click", () => {
        const isMuted = window.soundEffects.toggleMute();
        this.muteBtn.innerHTML = window.ComicIcons.get(isMuted ? "mute" : "volume");
        this.muteBtn.title = isMuted ? "Ativar Som" : "Silenciar";
      });
    }

    // Botão de Reiniciar
    if (this.restartBtn) {
      this.restartBtn.innerHTML = window.ComicIcons.get("restart");
      this.restartBtn.addEventListener("click", () => {
        window.soundEffects.playClick();
        if (confirm("Deseja reiniciar a história desde o começo?")) {
          this.restartGame();
        }
      });
    }

    // Botão de Continuar no Feedback Modal
    if (this.feedbackContinueBtn) {
      this.feedbackContinueBtn.addEventListener("click", () => {
        window.soundEffects.playClick();
        this.closeFeedbackAndProceed();
      });
    }

    // Atalho de teclado: barra de espaço ou Enter para fechar feedback
    window.addEventListener("keydown", (e) => {
      if (this.feedbackOverlay.classList.contains("active")) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.closeFeedbackAndProceed();
        }
      }
    });
  }

  start() {
    this.currentSceneId = "intro";
    this.timeRemaining = GAME_CONFIG.initialTimeSeconds;
    this.isGameOver = false;
    this.updateTimerDisplay();
    this.loadScene(this.currentSceneId);
    this.startTimer();
  }

  restartGame() {
    clearInterval(this.timerInterval);
    this.isTimerRunning = false;
    this.stopConfetti();
    this.start();
  }

  startTimer() {
    if (this.isTimerRunning) return;
    this.isTimerRunning = true;

    this.timerInterval = setInterval(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
        this.updateTimerDisplay();

        // Alerta de tensão nos últimos segundos
        if (this.timeRemaining <= 30 && this.timeRemaining > 0) {
          window.soundEffects.playTickCritical();
        }
      } else {
        this.handleTimeOut();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const minutes = Math.floor(Math.max(0, this.timeRemaining) / 60);
    const seconds = Math.max(0, this.timeRemaining) % 60;
    const formatted = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (this.timerDisplay) {
      this.timerDisplay.textContent = formatted;

      // Mudança de cores conforme a urgência
      this.timerDisplay.classList.remove("warning", "critical");
      if (this.timeRemaining <= 60) {
        this.timerDisplay.classList.add("critical");
      } else if (this.timeRemaining <= 120) {
        this.timerDisplay.classList.add("warning");
      }
    }
  }

  applyTimePenalty(seconds) {
    if (seconds <= 0) return;
    this.timeRemaining = Math.max(0, this.timeRemaining - seconds);
    this.updateTimerDisplay();
    if (this.timeRemaining <= 0) {
      this.handleTimeOut();
    }
  }

  handleTimeOut() {
    clearInterval(this.timerInterval);
    this.isTimerRunning = false;
    this.isGameOver = true;
    window.soundEffects.playError();
    this.loadScene("game_over_tempo");
  }

  loadScene(sceneId) {
    const scene = STORY_DATA[sceneId];
    if (!scene) {
      console.error(`Cena não encontrada: ${sceneId}`);
      return;
    }

    this.currentSceneId = sceneId;

    // Animação de entrada do card
    this.mainCard.classList.remove("fade-in");
    void this.mainCard.offsetWidth; // Força reflow
    this.mainCard.classList.add("fade-in");

    // Atualiza cabeçalho do card com suporte a ComicIcons
    this.sceneBadge.innerHTML = window.ComicIcons.replaceEmojis(scene.badge || "Etapa");
    
    // Ícone da cena em estilo de história em quadrinhos
    const iconKey = window.ComicIcons.emojiMap[scene.icon] || scene.icon || "system";
    this.sceneIcon.innerHTML = window.ComicIcons.icons[iconKey] 
      ? window.ComicIcons.get(iconKey) 
      : window.ComicIcons.replaceEmojis(scene.icon || "");

    this.sceneTitle.textContent = scene.title || "";
    this.sceneText.innerHTML = window.ComicIcons.replaceEmojis(scene.text || "");

    // Atualiza status do hardware
    this.updateHardwareDashboard(scene.pcStatus);

    // Efeitos especiais de cena
    if (sceneId === "fase2_ram") {
      // Toca 3 bipes de BIOS para imergir o jogador
      setTimeout(() => window.soundEffects.playBiosBeep(3), 400);
    } else if (scene.isVictory) {
      clearInterval(this.timerInterval);
      this.isTimerRunning = false;
      window.soundEffects.playVictory();
      this.launchConfetti();
    } else if (scene.isEnd && !scene.isVictory) {
      clearInterval(this.timerInterval);
      this.isTimerRunning = false;
    }

    // Renderiza botões de opção
    this.renderOptions(scene.options || []);
  }

  updateHardwareDashboard(pcStatus) {
    if (!pcStatus) return;

    for (const [key, element] of Object.entries(this.hwItems)) {
      if (element && pcStatus[key]) {
        element.className = "hw-item " + pcStatus[key];
      }
    }
  }

  renderOptions(options) {
    this.optionsContainer.innerHTML = "";

    options.forEach((option) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerHTML = window.ComicIcons.replaceEmojis(option.text);

      btn.addEventListener("click", () => {
        this.handleOptionSelection(option, btn);
      });

      this.optionsContainer.appendChild(btn);
    });
  }

  handleOptionSelection(option, btnElement) {
    window.soundEffects.playClick();

    // Aplica penalidade se houver
    if (option.timePenalty && option.timePenalty > 0) {
      this.applyTimePenalty(option.timePenalty);
    }

    // Toca som temático
    if (option.isCorrect) {
      btnElement.classList.add("selected-correct");
      window.soundEffects.playSuccess();
    } else {
      btnElement.classList.add("selected-wrong");
      window.soundEffects.playError();
    }

    // Prepara a próxima cena
    this.pendingNextScene = option.nextScene || this.currentSceneId;

    // Se o feedback for vazio ou a cena for reinício direto sem modal, carrega direto
    if (!option.feedback) {
      setTimeout(() => {
        this.loadScene(this.pendingNextScene);
      }, 300);
      return;
    }

    // Exibe modal de feedback cômico e explicativo
    this.showFeedbackModal(option);
  }

  showFeedbackModal(option) {
    this.feedbackIcon.innerHTML = window.ComicIcons.get(option.isCorrect ? "check" : "warning");
    this.feedbackTitle.textContent = option.isCorrect ? "Boa Escolha!" : "Ops, Deu Ruim!";
    this.feedbackTitle.className = "feedback-title " + (option.isCorrect ? "correct" : "wrong");
    this.feedbackMessage.innerHTML = window.ComicIcons.replaceEmojis(option.feedback);

    if (option.timePenalty && option.timePenalty > 0) {
      this.feedbackPenalty.innerHTML = `${window.ComicIcons.get("hourglass")} Penalidade de Tempo: -${option.timePenalty}s`;
      this.feedbackPenalty.style.display = "inline-flex";
    } else {
      this.feedbackPenalty.style.display = "none";
    }

    this.feedbackContinueBtn.innerHTML = option.isCorrect 
      ? `Continuar Avançando ${window.ComicIcons.get("arrow")}` 
      : `Tentar de Novo ${window.ComicIcons.get("restart")}`;
    this.feedbackOverlay.classList.add("active");
  }

  closeFeedbackAndProceed() {
    this.feedbackOverlay.classList.remove("active");
    if (this.pendingNextScene) {
      this.loadScene(this.pendingNextScene);
      this.pendingNextScene = null;
    }
  }

  // =================================================================
  // EFEITO DE CONFETES NATIVO (VITÓRIA)
  // =================================================================
  launchConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ["#00d2ff", "#00ff88", "#ff3366", "#ffd700", "#9d4edd", "#ffffff"];

    for (let i = 0; i < 90; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: Math.random() * 3 + 2,
        speedX: Math.random() * 2 - 1,
        angle: Math.random() * 360,
        spin: Math.random() * 8 - 4
      });
    }

    this.confettiActive = true;

    const animateConfetti = () => {
      if (!this.confettiActive) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pieces.forEach(p => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.angle += p.spin;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.angle * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();

        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animateConfetti);
    };

    animateConfetti();
  }

  stopConfetti() {
    this.confettiActive = false;
    const canvas = document.getElementById("confetti-canvas");
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
}

// Inicia o jogo quando a página carregar
window.addEventListener("DOMContentLoaded", () => {
  window.game = new GameEngine();
  window.game.start();
});
