/**
 * ====================================================================
 * 🔊 SISTEMA DE EFEITOS SONOROS NATIVO (Web Audio API)
 * ====================================================================
 * Sem precisar baixar arquivos de áudio externos pesados!
 * Gera sons retrô de PC, cliques, bipes de placa-mãe e alertas instantaneamente.
 */

class SoundEffects {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  // Inicializa contexto de áudio na primeira interação do usuário (exigência dos navegadores)
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }

  // Bipe suave de clique nos botões
  playClick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  // Bipe clássico da BIOS de PC (curto e agudo de hardware)
  playBiosBeep(count = 1) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      for (let i = 0; i < count; i++) {
        const startTime = this.ctx.currentTime + (i * 0.22);
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(880, startTime); // Nota Lá (880Hz) clássica de speaker

        gain.gain.setValueAtTime(0.12, startTime);
        gain.gain.setValueAtTime(0.12, startTime + 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.14);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.15);
      }
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  // Som de erro/penalidade (buzz grave descendente)
  playError() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(70, this.ctx.currentTime + 0.35);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.35);

      // Vibração no celular se disponível
      if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
      }
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  // Som de acerto/avanço positivo (arpeggio ascendente cristalino)
  playSuccess() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, index) => {
        const startTime = this.ctx.currentTime + (index * 0.08);
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.18, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.2);
      });

      // Leve vibração tátil de confirmação no celular
      if (navigator.vibrate) {
        navigator.vibrate(60);
      }
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  // Fanfarra triunfal ao vencer o jogo
  playVictory() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const melody = [
        { f: 523.25, d: 0.12 }, // C5
        { f: 659.25, d: 0.12 }, // E5
        { f: 783.99, d: 0.12 }, // G5
        { f: 1046.50, d: 0.35 } // C6 longo
      ];

      let elapsed = 0;
      melody.forEach(note => {
        const startTime = this.ctx.currentTime + elapsed;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note.f, startTime);

        gain.gain.setValueAtTime(0.25, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + note.d);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + note.d);

        elapsed += note.d * 0.9;
      });

      if (navigator.vibrate) {
        navigator.vibrate([100, 100, 100, 100, 250]);
      }
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  // Alerta quando o timer está nos últimos segundos
  playTickCritical() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }
}

window.soundEffects = new SoundEffects();
