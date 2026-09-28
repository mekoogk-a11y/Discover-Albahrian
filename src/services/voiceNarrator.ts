/**
 * Pure Male Voice Audio Synthesizer (No Music)
 * Supports Sudanese Arabic enthusiastic tone and Classical Arabic documentary tone.
 */

export type VoiceDialect = 'sudanese' | 'classical';

class VoiceNarrator {
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private audioCtx: AudioContext | null = null;
  private mediaStreamDest: MediaStreamAudioDestinationNode | null = null;
  private isSpeaking = false;

  public initAudioContext(): MediaStream | null {
    if (typeof window === 'undefined') return null;
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass && !this.audioCtx) {
        this.audioCtx = new AudioContextClass();
        this.mediaStreamDest = this.audioCtx.createMediaStreamDestination();
        return this.mediaStreamDest.stream;
      }
    } catch {
      // AudioContext not supported
    }
    return null;
  }

  public speak(
    text: string,
    dialect: VoiceDialect,
    onStart?: () => void,
    onEnd?: () => void
  ): boolean {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return false;
    }

    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    this.currentUtterance = utterance;

    // Strict Arabic language targeting
    utterance.lang = 'ar-SA';

    // Tailor voice to an authoritative, resonant male character (Zero music, clear acoustics)
    if (dialect === 'sudanese') {
      utterance.pitch = 0.88; // Lower, masculine resonance
      utterance.rate = 1.05;  // Energetic advertising pace
    } else {
      utterance.pitch = 0.85; // Deep documentary male tone
      utterance.rate = 0.95;  // Measured, clear documentary pace
    }

    // Attempt to pick a male Arabic voice if available in user's browser/system
    const voices = window.speechSynthesis.getVoices();
    const arabicVoices = voices.filter((v) => v.lang.startsWith('ar'));
    
    // Look for Arabic male voices (e.g. Maged, Tariq, Naayf, Zephyr)
    const maleArabicVoice = arabicVoices.find((v) =>
      /male|tariq|maged|naayf|hamed|salman/i.test(v.name)
    ) || arabicVoices[0];

    if (maleArabicVoice) {
      utterance.voice = maleArabicVoice;
    }

    utterance.onstart = () => {
      this.isSpeaking = true;
      if (onStart) onStart();
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    try {
      window.speechSynthesis.speak(utterance);
      return true;
    } catch {
      return false;
    }
  }

  public pause() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
    }
  }

  public resume() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.resume();
    }
  }

  public stop() {
    this.isSpeaking = false;
    this.currentUtterance = null;
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  public getIsSpeaking(): boolean {
    return this.isSpeaking;
  }
}

export const voiceNarrator = new VoiceNarrator();
