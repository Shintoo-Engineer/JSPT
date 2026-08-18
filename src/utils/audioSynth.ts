// Browser Web Audio API based peaceful sacred ambient synth

class AmbientAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isPlaying = false;
  private oscillators: OscillatorNode[] = [];
  private chimeTimer: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      this.stop(); // Clear any existing
      this.isPlaying = true;

      // Soft Sacred chord notes (Frequencies in Hz: C3, G3, C4, E4, G4 - Sacred harmonic chord)
      const freqs = [130.81, 196.0, 261.63, 329.63, 392.0];
      const gains = [0.15, 0.12, 0.1, 0.08, 0.06];

      freqs.forEach((freq, idx) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        // Lowpass warm filter
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450 + idx * 80, this.ctx.currentTime);

        // Slow soft breathing modulation
        gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(gains[idx] || 0.08, this.ctx.currentTime + 3);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);

        osc.start();
        this.oscillators.push(osc);
      });

      // Subtle celestial gentle chimes periodically
      this.chimeTimer = window.setInterval(() => {
        if (this.isPlaying && this.ctx && this.masterGain) {
          this.playGentleChime();
        }
      }, 7000);
    } catch {
      // Audio autoplay policy fallback
    }
  }

  private playGentleChime() {
    if (!this.ctx || !this.masterGain) return;
    const chimeFreqs = [523.25, 659.25, 783.99, 1046.5];
    const chimeFreq = chimeFreqs[Math.floor(Math.random() * chimeFreqs.length)];

    const chimeOsc = this.ctx.createOscillator();
    const chimeGain = this.ctx.createGain();

    chimeOsc.type = 'sine';
    chimeOsc.frequency.setValueAtTime(chimeFreq, this.ctx.currentTime);

    chimeGain.gain.setValueAtTime(0.02, this.ctx.currentTime);
    chimeGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 4.5);

    chimeOsc.connect(chimeGain);
    chimeGain.connect(this.masterGain);

    chimeOsc.start();
    chimeOsc.stop(this.ctx.currentTime + 5);
  }

  public setVolume(vol: number) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(Math.max(0, Math.min(1, vol)), this.ctx.currentTime);
    }
  }

  public stop() {
    this.isPlaying = false;
    this.oscillators.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // ignore
      }
    });
    this.oscillators = [];
    if (this.chimeTimer) {
      clearInterval(this.chimeTimer);
      this.chimeTimer = null;
    }
  }

  public getPlaying(): boolean {
    return this.isPlaying;
  }
}

export const ambientAudio = new AmbientAudioEngine();
