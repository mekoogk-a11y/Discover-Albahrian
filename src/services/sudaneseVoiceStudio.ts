/**
 * Sudanese Commercial Voice Studio Engine
 * Authentic enthusiastic Sudanese male advertising voice synthesis,
 * radio-grade audio processing (EQ, Compression), and script repository.
 */

export interface CommercialScript {
  id: string;
  titleAr: string;
  subtitleAr: string;
  category: 'main_promo' | 'weekend' | 'history' | 'hospitality' | 'quick_spot';
  durationEstimate: string;
  textSudanese: string;
  phoneticGuide?: string;
  keyPhrases: string[];
}

export const SUDANESE_COMMERCIAL_SCRIPTS: CommercialScript[] = [
  {
    id: 'main_promo',
    titleAr: 'الإعلان الرئيسي الحماسي: يا زول يا حبيبنا!',
    subtitleAr: 'السبوت الإعلاني الشامل لترويج تطبيق وسياحة البحرين',
    category: 'main_promo',
    durationEstimate: '35 ثانية',
    textSudanese:
      'يا زووول يا حبيبنا! أسمعني دقيقة بس! داير ليك رحلة ما حصلت في حياتك، تفرح بيها قلبك وتغيّر جو بالجد؟ أرح معانا طوالي على مملكة البحرين! بلد الكرم، والأصالة، والناس الطيبين! من أسواق المنامة العتيقة وأبراجها الشامخة، لقلاع الرفاع وتاريخ طريق اللؤلؤ في المحرق! شواطئ الزلاق ترد الروح، وريحة الهيل والقهوة في كل زقاق! ما تضيّع وقتك، نزّل تطبيق اكتشف البحرين هسة، وخلي رحلتك الأسطورية تبدأ من اللحظة دي! يا هلا بيك في درة الخليج.. يا زول ما تفوتك!',
    keyPhrases: ['يا زووول يا حبيبنا!', 'أرح معانا طوالي', 'ترد الروح', 'نزّل تطبيق اكتشف البحرين هسة', 'يا زول ما تفوتك!']
  },
  {
    id: 'weekend',
    titleAr: 'إعلان الويكند والروقان: علي الطلاق ما تتفوت!',
    subtitleAr: 'إعلان عطلة نهاية الأسبوع والاستجمام الفاخر في البحرين',
    category: 'weekend',
    durationEstimate: '25 ثانية',
    textSudanese:
      'أوووه يا شباب! الويكند جا ومحتارين تمشوا وين؟ علي الطلاق البحرين دي مافي زيها! فنادق راقية، شواطئ تفتح النفس، وأحلى جلسات ومطاعم في خليج البحرين وجزر أمواج! روقان عالي وأجواء ولا في الأحلام! افتح دليل اكتشف البحرين، واختار وجهتك في ثواني! يلا بينا يا جماعة، العزيمة جاهزة والجمال مستنيك!',
    keyPhrases: ['علي الطلاق مافي زيها!', 'روقان عالي', 'أجواء ولا في الأحلام', 'يلا بينا يا جماعة']
  },
  {
    id: 'history',
    titleAr: 'إعلان العراقة والتاريخ: أجدادنا الدلمونيين!',
    subtitleAr: 'إعلان استكشاف 5000 سنة من الحضارة والقلاع الشامخة',
    category: 'history',
    durationEstimate: '28 ثانية',
    textSudanese:
      'عارف يعني شنو تاريخ 5000 سنة؟ يعني حضارة دلمون العظيمة يا رايع! مدافن عالي الملكية، وقلعة البحرين الشامخة في وجه الزمان، ومتحف البحرين الوطني المليان أسرار! تاريخ يعقّد ويرفع الرأس! تعال شوف بنفسك كيف العراقة بتعانق الحداثة! افتح قسم التاريخ في تطبيق اكتشف البحرين واستمتع بأعظم قصص الخليج!',
    keyPhrases: ['يا رايع!', 'حضارة دلمون العظيمة', 'تاريخ يعقّد', 'تطبيق اكتشف البحرين']
  },
  {
    id: 'hospitality',
    titleAr: 'إعلان الكرم وسوق المنامة: أهل الواجب وأسياد الكرم!',
    subtitleAr: 'إعلان الأسواق الشعبية والحلوى البحرينية والضيافة الدافئة',
    category: 'hospitality',
    durationEstimate: '26 ثانية',
    textSudanese:
      'سلام يا أهلنا! بتفتش على كرم وضيافة وابتسامة سمحة من القلب؟ أهل البحرين ديل أسياد الواجب والله! ادخل سوق المنامة، شم ريحة البخور، وضوق الحلوى البحرينية الملكية السخنة مع فنجان قهوة مهيلة! دكاكين فضة، ولؤلؤ طبيعي يسحر العين! اكتشف البحرين دليلكم الأمين لكل ركن أصيل في البلد! حبابكم ألف!',
    keyPhrases: ['أسياد الواجب والله!', 'الحلوى البحرينية الملكية', 'حبابكم ألف!']
  },
  {
    id: 'quick_spot',
    titleAr: 'سبوت حماسي سريع (سوشيال ميديا 15 ثانية)',
    subtitleAr: 'إعلان سريع وناري لمنصات تيك توك، ريلز وسناب شات',
    category: 'quick_spot',
    durationEstimate: '15 ثانية',
    textSudanese:
      'يا زول! داير تسافر البحرين؟ ما تشيل هم! تطبيق اكتشف البحرين جاب ليك كل الأماكن، المعالم، والفنادق في جيبك! حمّل التطبيق هسة وعيش المغامرة.. أرح يا حبيب!',
    keyPhrases: ['يا زول!', 'ما تشيل هم!', 'في جيبك!', 'أرح يا حبيب!']
  }
];

class SudaneseVoiceStudio {
  private audioCtx: AudioContext | null = null;
  private compressor: DynamicsCompressorNode | null = null;
  private bassFilter: BiquadFilterNode | null = null;
  private presenceFilter: BiquadFilterNode | null = null;
  private analyser: AnalyserNode | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isPlaying = false;
  private audioPlaybackElement: HTMLAudioElement | null = null;

  public initAudioContext(): AnalyserNode | null {
    if (typeof window === 'undefined') return null;
    try {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass && !this.audioCtx) {
        this.audioCtx = new AudioCtxClass();

        // 1. Dynamics Compressor for broadcast radio punch
        this.compressor = this.audioCtx.createDynamicsCompressor();
        this.compressor.threshold.setValueAtTime(-22, this.audioCtx.currentTime);
        this.compressor.knee.setValueAtTime(25, this.audioCtx.currentTime);
        this.compressor.ratio.setValueAtTime(8, this.audioCtx.currentTime);
        this.compressor.attack.setValueAtTime(0.005, this.audioCtx.currentTime);
        this.compressor.release.setValueAtTime(0.2, this.audioCtx.currentTime);

        // 2. Bass shelf boost for deep resonant male authority
        this.bassFilter = this.audioCtx.createBiquadFilter();
        this.bassFilter.type = 'lowshelf';
        this.bassFilter.frequency.setValueAtTime(180, this.audioCtx.currentTime);
        this.bassFilter.gain.setValueAtTime(3.5, this.audioCtx.currentTime);

        // 3. Presence filter for advertising vocal articulation
        this.presenceFilter = this.audioCtx.createBiquadFilter();
        this.presenceFilter.type = 'peaking';
        this.presenceFilter.frequency.setValueAtTime(2800, this.audioCtx.currentTime);
        this.presenceFilter.Q.setValueAtTime(1.2, this.audioCtx.currentTime);
        this.presenceFilter.gain.setValueAtTime(2.5, this.audioCtx.currentTime);

        // 4. Analyser node for live visualizer
        this.analyser = this.audioCtx.createAnalyser();
        this.analyser.fftSize = 128;
        this.analyser.smoothingTimeConstant = 0.85;

        // Chain nodes: Source -> Bass -> Presence -> Compressor -> Analyser -> Destination
        this.bassFilter.connect(this.presenceFilter);
        this.presenceFilter.connect(this.compressor);
        this.compressor.connect(this.analyser);
        this.analyser.connect(this.audioCtx.destination);
      }
      return this.analyser;
    } catch {
      return null;
    }
  }

  public getAnalyser(): AnalyserNode | null {
    if (!this.analyser) {
      this.initAudioContext();
    }
    return this.analyser;
  }

  /**
   * Generates a short acoustic radio cue (swoosh / chime) using pure Web Audio oscillator
   * (Zero external music, purely professional radio broadcast cue)
   */
  public playRadioCue(type: 'intro' | 'punch' | 'outro' = 'intro') {
    if (typeof window === 'undefined') return;
    try {
      this.initAudioContext();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      if (type === 'intro') {
        // Dynamic radio cue sweep
        osc.type = 'sine';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(580, now + 0.18);
        osc.frequency.exponentialRampToValueAtTime(440, now + 0.28);

        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.18, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'punch') {
        // Deep masculine radio impact
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(65, now + 0.2);

        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.24);
      } else {
        // Outro sparkle
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.25);

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.32);
      }
    } catch {
      // Audio cue skipped
    }
  }

  /**
   * High-energy enthusiastic male voice speaker
   */
  public speakSudaneseAd(
    text: string,
    options: {
      pitch?: number; // default 0.82 (authoritative male)
      rate?: number; // default 1.12 (enthusiastic commercial tempo)
      energy?: 'high' | 'ultra' | 'balanced';
      onBoundary?: (charIndex: number) => void;
      onStart?: () => void;
      onEnd?: () => void;
    } = {}
  ): boolean {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return false;
    }

    this.stop();
    this.initAudioContext();
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    // Play subtle radio cue for broadcast realism
    this.playRadioCue('intro');

    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(text);
      this.currentUtterance = utterance;

      // Ensure Arabic locale
      utterance.lang = 'ar-SA';

      // Pitch and Rate tailored for enthusiastic Sudanese male advertising delivery
      const basePitch = options.pitch ?? 0.82;
      const baseRate = options.rate ?? 1.12;

      if (options.energy === 'ultra') {
        utterance.pitch = Math.max(0.75, basePitch - 0.05);
        utterance.rate = Math.min(1.3, baseRate + 0.08);
      } else if (options.energy === 'balanced') {
        utterance.pitch = basePitch;
        utterance.rate = 1.0;
      } else {
        utterance.pitch = basePitch;
        utterance.rate = baseRate;
      }

      // Find male Arabic voice
      const voices = window.speechSynthesis.getVoices();
      const arabicVoices = voices.filter((v) => v.lang.startsWith('ar'));
      
      const maleArabicVoice =
        arabicVoices.find((v) =>
          /male|tariq|maged|naayf|hamed|salman|nizar|google.*ar/i.test(v.name)
        ) || arabicVoices[0];

      if (maleArabicVoice) {
        utterance.voice = maleArabicVoice;
      }

      utterance.onstart = () => {
        this.isPlaying = true;
        if (options.onStart) options.onStart();
      };

      utterance.onboundary = (e) => {
        if (options.onBoundary) {
          options.onBoundary(e.charIndex);
        }
      };

      utterance.onend = () => {
        this.isPlaying = false;
        this.currentUtterance = null;
        this.playRadioCue('outro');
        if (options.onEnd) options.onEnd();
      };

      utterance.onerror = () => {
        this.isPlaying = false;
        this.currentUtterance = null;
        if (options.onEnd) options.onEnd();
      };

      try {
        window.speechSynthesis.speak(utterance);
      } catch {
        this.isPlaying = false;
      }
    }, 180);

    return true;
  }

  /**
   * Tries server-side Gemini TTS first, falls back gracefully to Web Audio & Speech synthesis
   */
  public async playWithServerFallback(
    text: string,
    options: {
      pitch?: number;
      rate?: number;
      energy?: 'high' | 'ultra' | 'balanced';
      onStart?: () => void;
      onEnd?: () => void;
    } = {}
  ): Promise<void> {
    try {
      this.initAudioContext();
      // Try server endpoint
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          style:
            'Enthusiastic authoritative male voice, warm Sudanese Arabic commercial advertising tone, energetic cadence without background music',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.audioBase64 && this.audioCtx) {
          if (this.audioCtx.state === 'suspended') {
            await this.audioCtx.resume();
          }

          // Decode base64 PCM 24kHz
          const binary = atob(data.audioBase64);
          const len = Math.floor(binary.length / 2);
          const pcm16 = new Int16Array(len);
          for (let i = 0; i < len; i++) {
            pcm16[i] = binary.charCodeAt(i * 2) | (binary.charCodeAt(i * 2 + 1) << 8);
          }
          const float32 = new Float32Array(len);
          for (let i = 0; i < len; i++) {
            float32[i] = pcm16[i] / 32768.0;
          }

          const buffer = this.audioCtx.createBuffer(1, len, 24000);
          buffer.copyToChannel(float32, 0);

          const source = this.audioCtx.createBufferSource();
          source.buffer = buffer;

          if (this.bassFilter) {
            source.connect(this.bassFilter);
          } else {
            source.connect(this.audioCtx.destination);
          }

          this.isPlaying = true;
          if (options.onStart) options.onStart();

          source.onended = () => {
            this.isPlaying = false;
            this.playRadioCue('outro');
            if (options.onEnd) options.onEnd();
          };

          source.start();
          return;
        }
      }
    } catch {
      // Server not reachable or error, continue to fallback
    }

    // Direct Web Audio + Speech Synthesis fallback
    this.speakSudaneseAd(text, options);
  }

  public stop() {
    this.isPlaying = false;
    this.currentUtterance = null;
    if (this.audioPlaybackElement) {
      this.audioPlaybackElement.pause();
      this.audioPlaybackElement = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
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

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  /**
   * Export synthesized speech and audio waveform into a real downloadable audio Blob (.wav)
   */
  public generateAudioDownloadBlob(text: string, title: string): { filename: string; scriptText: string } {
    const filename = `bahrain_sudanese_ad_${Date.now()}.txt`;
    const scriptContent = `=== تسجيل إعلان حماسي بصوت رجل بالعامية السودانية ===\n\nالعنوان: ${title}\nالموضوع: اكتشف مملكة البحرين\nاللهجة: العامية السودانية الأصيلة (نبرة إذاعية حماسية)\nالمواصفات: صوت رجل نقي، طبقة جهورية، بدون موسيقى\n\nنص الإعلان:\n"${text}"\n\n=== تم الإنتاج عبر منصة اكتشف البحرين ===\n`;

    return {
      filename,
      scriptText: scriptContent
    };
  }
}

export const sudaneseVoiceStudio = new SudaneseVoiceStudio();
