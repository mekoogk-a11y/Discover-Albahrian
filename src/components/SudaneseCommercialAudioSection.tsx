import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Mic,
  Play,
  Pause,
  Square,
  Volume2,
  VolumeX,
  Sparkles,
  Copy,
  Check,
  Download,
  Flame,
  Radio,
  Sliders,
  RotateCcw,
  Share2,
  BookmarkCheck,
  Zap,
  Edit3
} from 'lucide-react';
import {
  sudaneseVoiceStudio,
  SUDANESE_COMMERCIAL_SCRIPTS,
  CommercialScript
} from '../services/sudaneseVoiceStudio';
import { useLanguage } from '../context/LanguageContext';

export const SudaneseCommercialAudioSection: React.FC = () => {
  const { language } = useLanguage();
  const [selectedScriptId, setSelectedScriptId] = useState<string>('main_promo');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [customText, setCustomText] = useState<string>(
    'يا زول يا أصيل! داير تشوف الجمال الحقيقي؟ البحرين دي حكاية تانية خالص! فنادق راقية، شواطئ تجنن، وناس في غاية الكرم والذوق! حمّل تطبيق اكتشف البحرين هسة وخلي متعتك تبدأ!'
  );
  const [isCustomMode, setIsCustomMode] = useState<boolean>(false);

  // Audio Persona Controls
  const [pitch, setPitch] = useState<number>(0.82); // 0.70 to 1.0 (masculine resonance)
  const [rate, setRate] = useState<number>(1.12); // 0.90 to 1.30 (commercial pace)
  const [energy, setEnergy] = useState<'high' | 'ultra' | 'balanced'>('high');

  // Visualizer Canvas
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const activeScript: CommercialScript =
    SUDANESE_COMMERCIAL_SCRIPTS.find((s) => s.id === selectedScriptId) ||
    SUDANESE_COMMERCIAL_SCRIPTS[0];

  const currentSpeakingText = isCustomMode ? customText : activeScript.textSudanese;

  // Visualizer Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let bars = 24;
    let values = new Array(bars).fill(6);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = canvas.width / bars - 3;
      const height = canvas.height;

      for (let i = 0; i < bars; i++) {
        let barHeight = values[i];
        if (isPlaying && !isPaused) {
          // Dynamic lively commercial audio frequency wave simulation
          const noise = Math.sin(Date.now() * 0.008 + i * 0.4) * 0.5 + 0.5;
          const energyFactor = energy === 'ultra' ? 1.25 : energy === 'high' ? 1.0 : 0.8;
          values[i] = Math.max(6, noise * (height - 12) * energyFactor + Math.random() * 8);
        } else {
          values[i] = Math.max(4, values[i] * 0.85);
        }

        const x = i * (barWidth + 3);
        const y = height - barHeight;

        // Gradient from crimson to amber
        const grad = ctx.createLinearGradient(0, height, 0, 0);
        grad.addColorStop(0, '#C8102E');
        grad.addColorStop(0.7, '#E53E3E');
        grad.addColorStop(1, '#F6AD55');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barHeight, 3);
        ctx.fill();
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, isPaused, energy]);

  // Handle Play
  const handlePlay = useCallback(() => {
    if (isPaused) {
      sudaneseVoiceStudio.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    setIsPlaying(true);
    setIsPaused(false);

    sudaneseVoiceStudio.playWithServerFallback(currentSpeakingText, {
      pitch,
      rate,
      energy,
      onStart: () => {
        setIsPlaying(true);
        setIsPaused(false);
      },
      onEnd: () => {
        setIsPlaying(false);
        setIsPaused(false);
      }
    });
  }, [currentSpeakingText, pitch, rate, energy, isPaused]);

  // Handle Pause
  const handlePause = () => {
    sudaneseVoiceStudio.pause();
    setIsPaused(true);
    setIsPlaying(false);
  };

  // Handle Stop
  const handleStop = () => {
    sudaneseVoiceStudio.stop();
    setIsPlaying(false);
    setIsPaused(false);
  };

  // Copy Script
  const handleCopyScript = () => {
    navigator.clipboard.writeText(currentSpeakingText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Download Script
  const handleDownload = () => {
    const title = isCustomMode ? 'إعلان مخصص' : activeScript.titleAr;
    const { filename, scriptText } = sudaneseVoiceStudio.generateAudioDownloadBlob(
      currentSpeakingText,
      title
    );
    const blob = new Blob([scriptText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Quick Sudanese Catchphrase Play
  const handleQuickPhrase = (phrase: string) => {
    setIsPlaying(true);
    setIsPaused(false);
    sudaneseVoiceStudio.speakSudaneseAd(phrase, {
      pitch: 0.8,
      rate: 1.18,
      energy: 'ultra',
      onEnd: () => {
        setIsPlaying(false);
      }
    });
  };

  return (
    <section
      id="sudanese-ad-studio"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE6] text-stone-900 relative overflow-hidden border-b border-stone-200/80"
    >
      {/* Visual luminous background flourishes */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C8102E]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-400/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-100/80 border border-red-200 text-[#C8102E] text-sm font-bold mb-4 shadow-xs">
            <Radio className="w-4 h-4 text-[#C8102E] animate-pulse" />
            <span>استوديو الصوت الإعلاني الحماسي · العامية السودانية 🇸🇩</span>
            <span className="text-xs bg-[#C8102E] text-white px-2 py-0.5 rounded-full font-bold shadow-xs">
              جديد
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-stone-950 mb-4">
            صوت إعلاني حماسي{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8102E] via-rose-600 to-amber-600">
              بصوت رجل سوداني
            </span>
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            استمع لأقوى الإعلانات الترويجية الحماسية بلهجة سودانية أصيلة، بنبرة رجالية جهورية ونقية
            تماماً بدون موسيقى، جاهزة للبث والتسويق واستكشاف مملكة البحرين!
          </p>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-stone-200/90 text-xs font-medium text-stone-700 shadow-xs">
              <Mic className="w-3.5 h-3.5 text-[#C8102E]" />
              صوت رجل جهوري إذاعي
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-stone-200/90 text-xs font-medium text-stone-700 shadow-xs">
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              طاقة حماسية إعلانية
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-stone-200/90 text-xs font-medium text-stone-700 shadow-xs">
              <VolumeX className="w-3.5 h-3.5 text-emerald-600" />
              بدون أي موسيقى (نقاء صوتي تام)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-stone-200/90 text-xs font-medium text-stone-700 shadow-xs">
              <Zap className="w-3.5 h-3.5 text-amber-600" />
              معالجة صوتية Dynamic EQ & Compressor
            </span>
          </div>
        </div>

        {/* Main Console Box */}
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-xl shadow-stone-200/50">
          {/* Tab Selection */}
          <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-5 mb-6">
            <div className="text-xs text-stone-500 font-bold ml-2 w-full sm:w-auto mb-2 sm:mb-0">
              اختر الإعلان:
            </div>
            {SUDANESE_COMMERCIAL_SCRIPTS.map((script) => (
              <button
                key={script.id}
                onClick={() => {
                  setIsCustomMode(false);
                  setSelectedScriptId(script.id);
                  if (isPlaying) handleStop();
                }}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  !isCustomMode && selectedScriptId === script.id
                    ? 'bg-[#C8102E] text-white shadow-md shadow-red-600/25 ring-2 ring-red-400/40'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                <span>{script.titleAr}</span>
                <span className="text-[10px] opacity-80 font-normal px-1.5 py-0.5 rounded bg-black/10">
                  {script.durationEstimate}
                </span>
              </button>
            ))}

            <button
              onClick={() => {
                setIsCustomMode(true);
                if (isPlaying) handleStop();
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                isCustomMode
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30 ring-2 ring-amber-400/40'
                  : 'bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>اكتب إعلانك الخاص</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left/Main Column: Prompter and Player */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* Teleprompter Card */}
              <div className="relative bg-gradient-to-br from-amber-50/40 via-white to-stone-50 border border-stone-200/90 rounded-2xl p-6 sm:p-7 min-h-[200px] flex flex-col justify-between shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
                    <span className="text-xs uppercase font-bold tracking-wider text-[#C8102E]">
                      {isCustomMode ? 'نص إعلاني مخصص' : activeScript.subtitleAr}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyScript}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white hover:bg-stone-100 text-xs font-medium text-stone-700 border border-stone-200 shadow-xs transition-colors"
                      title="نسخ النص الإعلاني"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-500" />}
                      <span>{copied ? 'تم النسخ' : 'نسخ النص'}</span>
                    </button>
                    <button
                      onClick={handleDownload}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white hover:bg-stone-100 text-xs font-medium text-stone-700 border border-stone-200 shadow-xs transition-colors"
                      title="تحميل الاسكربت"
                    >
                      <Download className="w-3.5 h-3.5 text-stone-500" />
                      <span>تحميل الاسكربت</span>
                    </button>
                  </div>
                </div>

                {/* Text Display or Custom Textarea */}
                {isCustomMode ? (
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-amber-800 font-bold">
                      اكتب أي عبارة أو نص إعلاني بالعامية السودانية لتجربة نطق الصوت الحماسي:
                    </label>
                    <textarea
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value)}
                      rows={4}
                      className="w-full bg-white border border-stone-300 rounded-xl p-3.5 text-base sm:text-lg text-stone-900 font-sans leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#C8102E] shadow-xs"
                      placeholder="اكتب نص إعلاني بالعامية السودانية هنا..."
                    />
                  </div>
                ) : (
                  <div className="relative">
                    <p className="text-lg sm:text-xl md:text-2xl font-black font-sans text-stone-900 leading-relaxed sm:leading-loose">
                      “{activeScript.textSudanese}”
                    </p>

                    {/* Key Phrases Pills */}
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-stone-200">
                      <span className="text-xs text-stone-500 font-semibold">عبارات سودانية حماسية:</span>
                      {activeScript.keyPhrases.map((phrase, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleQuickPhrase(phrase)}
                          className="px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#C8102E] text-xs font-bold hover:bg-red-100 transition-colors cursor-pointer shadow-xs"
                        >
                          {phrase} 🔊
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Live Visualizer Bar */}
                <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-stone-300'}`} />
                    <span className="text-xs text-stone-600 font-medium">
                      {isPlaying ? 'جاري البث الصوتي الحماسي...' : isPaused ? 'متوقف مؤقتاً' : 'جاهز للإطلاق'}
                    </span>
                  </div>

                  <canvas
                    ref={canvasRef}
                    width={220}
                    height={38}
                    className="rounded-lg bg-stone-100 border border-stone-200 p-1"
                  />
                </div>
              </div>

              {/* Transport Controls Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 bg-stone-50 border border-stone-200 rounded-2xl p-4 sm:p-5 shadow-xs">
                <div className="flex items-center gap-3">
                  {isPlaying ? (
                    <button
                      onClick={handlePause}
                      className="px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold flex items-center gap-2 shadow-md shadow-amber-600/30 transition-all cursor-pointer"
                    >
                      <Pause className="w-5 h-5 fill-current" />
                      <span>إيقاف مؤقت</span>
                    </button>
                  ) : (
                    <button
                      onClick={handlePlay}
                      className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#C8102E] to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold text-base flex items-center gap-2.5 shadow-xl shadow-red-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                    >
                      <Play className="w-5 h-5 fill-current" />
                      <span>{isPaused ? 'استئناف الاستماع' : 'استمع للإعلان الآن'}</span>
                    </button>
                  )}

                  <button
                    onClick={handleStop}
                    disabled={!isPlaying && !isPaused}
                    className="p-3.5 rounded-xl bg-white hover:bg-stone-100 border border-stone-200 disabled:opacity-40 text-stone-700 shadow-xs transition-colors cursor-pointer"
                    title="إيقاف كامل"
                  >
                    <Square className="w-5 h-5 fill-current" />
                  </button>
                </div>

                {/* Quick Radio Cue FX buttons */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-stone-500 font-semibold">تأثير إذاعي:</span>
                  <button
                    onClick={() => sudaneseVoiceStudio.playRadioCue('intro')}
                    className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-stone-100 border border-stone-200 text-stone-700 text-xs font-medium shadow-xs transition-colors"
                  >
                    صفارة انطلاق ⚡
                  </button>
                  <button
                    onClick={() => sudaneseVoiceStudio.playRadioCue('punch')}
                    className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-stone-100 border border-stone-200 text-stone-700 text-xs font-medium shadow-xs transition-colors"
                  >
                    ضربة صوتية 💥
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Audio Customizer & Quick Sudanese Phrases */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Voice Tuner Panel */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 shadow-xs">
                <div className="flex items-center gap-2 mb-4 text-stone-900 font-bold text-sm">
                  <Sliders className="w-4 h-4 text-[#C8102E]" />
                  <span>ضبط مواصفات الصوت الرجالي</span>
                </div>

                {/* Pitch Slider */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-stone-700 font-medium mb-1.5">
                    <span>طبقة الصوت (رجالي جهوري / عميق)</span>
                    <span className="text-[#C8102E] font-mono font-bold">
                      {pitch < 0.8 ? 'جهوري جداً' : pitch < 0.88 ? 'متزن إذاعي' : 'شبابي'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.70"
                    max="0.95"
                    step="0.02"
                    value={pitch}
                    onChange={(e) => setPitch(parseFloat(e.target.value))}
                    className="w-full accent-[#C8102E] bg-stone-200 rounded-lg h-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500 mt-1 font-medium">
                    <span>عميق ووقور</span>
                    <span>شبابي مشرق</span>
                  </div>
                </div>

                {/* Rate Slider */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-stone-700 font-medium mb-1.5">
                    <span>سرعة الإلقاء (إيقاع إعلاني حماسي)</span>
                    <span className="text-[#C8102E] font-mono font-bold">{rate.toFixed(2)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.95"
                    max="1.28"
                    step="0.03"
                    value={rate}
                    onChange={(e) => setRate(parseFloat(e.target.value))}
                    className="w-full accent-[#C8102E] bg-stone-200 rounded-lg h-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500 mt-1 font-medium">
                    <span>طبيعي هادئ</span>
                    <span>حماسي سريع (سوشيال)</span>
                  </div>
                </div>

                {/* Energy Mode */}
                <div>
                  <label className="block text-xs text-stone-700 font-bold mb-2">مستوى الحماس:</label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {(['balanced', 'high', 'ultra'] as const).map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setEnergy(lvl)}
                        className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                          energy === lvl
                            ? 'bg-[#C8102E] text-white shadow-xs'
                            : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
                        }`}
                      >
                        {lvl === 'balanced' ? 'متزن' : lvl === 'high' ? 'حماسي 🔥' : 'فائق ⚡'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Soundboard / Catchphrases */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 shadow-xs">
                <div className="flex items-center gap-2 mb-3 text-stone-900 font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>بنك اللزمات والعبارات الإعلانية السودانية</span>
                </div>
                <p className="text-xs text-stone-500 mb-3.5">
                  انقر للاستماع الفوري للعبارة بالصوت الرجالي الحماسي:
                </p>

                <div className="grid grid-cols-1 gap-2">
                  {[
                    'يا زووول يا حبيبنا! أرح معانا البحرين!',
                    'علي الطلاق البحرين دي مافي زيها في الخليج!',
                    'شيء خيالي ما حصل.. تاريخ 5000 سنة!',
                    'أهل البحرين أسياد الواجب والله وكرمهم بيشرح الصدر!',
                    'نزّل تطبيق اكتشف البحرين هسة وما تفوت المتعة!'
                  ].map((phrase, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuickPhrase(phrase)}
                      className="text-right p-2.5 rounded-xl bg-white hover:bg-red-50/70 border border-stone-200 text-xs text-stone-800 hover:text-[#C8102E] hover:border-red-200 shadow-xs transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <span className="font-semibold">"{phrase}"</span>
                      <Play className="w-3.5 h-3.5 text-[#C8102E] opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all fill-current" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
