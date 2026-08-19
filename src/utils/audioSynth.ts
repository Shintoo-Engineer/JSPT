class AmbientAudioEngine {
  public toggle(): boolean {
    return false;
  }

  public start(): void {
    // Audio disabled
  }

  public stop(): void {
    // Audio disabled
  }

  public setVolume(_vol: number): void {
    // Audio disabled
  }

  public getPlaying(): boolean {
    return false;
  }
}

export const ambientAudio = new AmbientAudioEngine();
