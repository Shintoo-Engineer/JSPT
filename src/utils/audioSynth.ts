// Peaceful worship music player
class AmbientAudioEngine {
  private audio: HTMLAudioElement | null = null;
  private isPlaying = false;

  private initAudio() {
    if (!this.audio) {
      this.audio = new Audio('/audio/peaceful-worship.mp3');
      this.audio.loop = true;
      this.audio.volume = 0.25;

      this.audio.addEventListener('ended', () => {
        this.isPlaying = false;
      });
    }
  }

  public async start() {
    try {
      this.initAudio();

      if (!this.audio) return;

      await this.audio.play();
      this.isPlaying = true;
    } catch (error) {
      console.log('Music requires user interaction.');
      this.isPlaying = false;
    }
  }

  public stop() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }

    this.isPlaying = false;
  }

  public async toggle(): Promise<boolean> {
    if (this.isPlaying) {
      this.stop();
      return false;
    }

    await this.start();
    return this.isPlaying;
  }

  public setVolume(vol: number) {
    this.initAudio();

    if (this.audio) {
      this.audio.volume = Math.max(0, Math.min(1, vol));
    }
  }

  public getPlaying(): boolean {
    return this.isPlaying;
  }
}

export const ambientAudio = new AmbientAudioEngine();