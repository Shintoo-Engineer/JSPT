class AmbientAudioEngine {
  private audio: HTMLAudioElement | null = null;
  private isPlaying = false;

  private initAudio() {
    if (!this.audio) {
      this.audio = new Audio('/audio/peaceful-worship.mp3');
      this.audio.loop = true;
      this.audio.volume = 0.25;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    }

    this.start();
    return true;
  }

  public async start(): Promise<void> {
    try {
      this.initAudio();

      if (!this.audio) return;

      await this.audio.play();
      this.isPlaying = true;
    } catch (error) {
      console.error('Unable to play worship music:', error);
    }
  }

  public stop(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }

    this.isPlaying = false;
  }

  public setVolume(vol: number): void {
    if (this.audio) {
      this.audio.volume = Math.max(0, Math.min(1, vol));
    }
  }

  public getPlaying(): boolean {
    return this.isPlaying;
  }
}

export const ambientAudio = new AmbientAudioEngine();