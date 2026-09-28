import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Download,
  SkipForward,
  SkipBack,
  MapPin,
  Sparkles,
  Check,
  Video,
  Radio,
  Compass
} from 'lucide-react';
import { BAHRAIN_VIDEO_SCENES, VideoScene } from '../services/videoNarrations';
import { voiceNarrator, VoiceDialect } from '../services/voiceNarrator';
import { useLanguage } from '../context/LanguageContext';

interface BahrainVideoFeatureProps {
  onSelectCityByName?: (cityName: string) => void;
}

export const BahrainVideoFeature: React.FC<BahrainVideoFeatureProps> = ({ onSelectCityByName }) => {
  const { language, t } = useLanguage();
  const [currentSceneIdx, setCurrentSceneIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [voiceDialect, setVoiceDialect] = useState<VoiceDialect>('sudanese');
  const [isMuted, setIsMuted] = useState(false);
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedVideoUrl, setRecordedVideoUrl] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  const currentScene: VideoScene = BAHRAIN_VIDEO_SCENES[currentSceneIdx] || BAHRAIN_VIDEO_SCENES[0];
  const activeNarration = voiceDialect === 'sudanese' ? currentScene.narrationSudanese : currentScene.narrationClassical;

  // Speak narration when scene changes while playing
  useEffect(() => {
    if (isPlaying && !isMuted) {
      voiceNarrator.speak(
        activeNarration,
        voiceDialect,
        undefined,
        () => {
          // When speech ends, advance to next scene smoothly
          if (currentSceneIdx < BAHRAIN_VIDEO_SCENES.length - 1) {
            setCurrentSceneIdx((prev) => prev + 1);
          } else {
            setIsPlaying(false);
          }
        }
      );
    } else {
      voiceNarrator.stop();
    }

    return () => {
      voiceNarrator.stop();
    };
  }, [currentSceneIdx, isPlaying, voiceDialect, isMuted, activeNarration]);

  // Handle Scene Timer Progress
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      const stepMs = 100;
      const totalMs = currentScene.durationSeconds * 1000;
      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + (stepMs / totalMs) * 100;
          if (next >= 100) {
            // Next scene
            if (currentSceneIdx < BAHRAIN_VIDEO_SCENES.length - 1) {
              setCurrentSceneIdx((curr) => curr + 1);
              return 0;
            } else {
              setIsPlaying(false);
              return 100;
            }
          }
          return next;
        });
      }, stepMs);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, currentSceneIdx, currentScene.durationSeconds]);

  // Reset progress when scene index changes
  useEffect(() => {
    setProgress(0);
  }, [currentSceneIdx]);

  // Cinematic Canvas Renderer (Render high-res image with Ken Burns pan/zoom and overlays)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let startTime = performance.now();
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = currentScene.image;

    let active = true;

    const render = (time: number) => {
      if (!active) return;
      const elapsed = (time - startTime) / 1000;
      const scale = 1 + (elapsed % currentScene.durationSeconds) * 0.015; // Slow smooth zoom
      const translateX = Math.sin(elapsed * 0.3) * 15;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (img.complete && img.naturalWidth > 0) {
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.scale(scale, scale);
        ctx.translate(-canvas.width / 2 + translateX, -canvas.height / 2);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.restore();
      } else {
        // Fallback gradient
        ctx.fillStyle = '#1A1617';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Cinema Scrim & Vignette
      const gradient = ctx.createLinearGradient(0, canvas.height * 0.4, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      gradient.addColorStop(0.7, 'rgba(15, 12, 13, 0.7)');
      gradient.addColorStop(1, 'rgba(10, 8, 9, 0.95)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Top subtle bar
      const topGrad = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.3);
      topGrad.addColorStop(0, 'rgba(0,0,0,0.7)');
      topGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = topGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height * 0.3);

      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      active = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [currentScene]);

  // Video Export / Recording
  const handleStartRecording = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      const stream = canvas.captureStream(30); // 30 FPS
      recordedChunksRef.current = [];

      const recorder = new MediaRecorder(stream, {
        mimeType: 'video/webm;codecs=vp9'
      });

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          recordedChunksRef.current.push(e.data);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        setRecordedVideoUrl(url);
        setIsRecording(false);
      };

      mediaRecorderRef.current = recorder;
      recorder.start();
      setIsRecording(true);

      // Start video from beginning and play all scenes
      setCurrentSceneIdx(0);
      setIsPlaying(true);
    } catch {
      // Fallback
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      voiceNarrator.pause();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  const nextScene = () => {
    if (currentSceneIdx < BAHRAIN_VIDEO_SCENES.length - 1) {
      setCurrentSceneIdx((prev) => prev + 1);
    } else {
      setCurrentSceneIdx(0);
    }
  };

  const prevScene = () => {
    if (currentSceneIdx > 0) {
      setCurrentSceneIdx((prev) => prev - 1);
    } else {
      setCurrentSceneIdx(BAHRAIN_VIDEO_SCENES.length - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  return (
    <section id="video-tour" className="py-16 bg-gradient-to-b from-stone-50 via-white to-amber-50/20 text-stone-900 border-b border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/80 text-[#C8102E] text-xs font-bold uppercase tracking-wider mb-3 border border-red-200 shadow-xs">
              <Video className="w-3.5 h-3.5 text-[#C8102E]" />
              <span>ميزة التوليد الوثائقي · تعريف بمدن البحرين</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-stone-950 tracking-tight">
              {language === 'ar' ? 'فيديو استكشاف مدن البحرين' : 'Bahrain Cities Video Showcase'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-2xl font-medium">
              {language === 'ar'
                ? 'جولة وثائقية بصرية وسردية تعرف بمدن ومعالم البحرين، بصوت رجالي نقي بدون موسيقى وبأعلى معايير التوليد السينمائي.'
                : 'A cinematic documentary tour defining Bahrain’s cities with authentic male voice narration and no music.'}
            </p>
          </div>

          {/* Voice Dialect Selector */}
          <div className="flex items-center gap-2 bg-stone-100 p-1.5 rounded-2xl border border-stone-200 shrink-0 shadow-xs">
            <span className="text-xs font-bold text-stone-600 px-2 flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-[#C8102E]" />
              <span>نبرة الصوت:</span>
            </span>
            <button
              onClick={() => {
                setVoiceDialect('sudanese');
                if (isPlaying) {
                  voiceNarrator.speak(currentScene.narrationSudanese, 'sudanese');
                }
              }}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
                voiceDialect === 'sudanese'
                  ? 'bg-[#C8102E] text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              🇸🇩 سودانية حماسية
            </button>
            <button
              onClick={() => {
                setVoiceDialect('classical');
                if (isPlaying) {
                  voiceNarrator.speak(currentScene.narrationClassical, 'classical');
                }
              }}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
                voiceDialect === 'classical'
                  ? 'bg-[#C8102E] text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              🎙️ فصحى وثائقية
            </button>
          </div>
        </div>

        {/* Video Player Display Container */}
        <div
          ref={containerRef}
          className="relative rounded-3xl overflow-hidden bg-black shadow-2xl border border-stone-200 aspect-16/10 sm:aspect-16/9 flex flex-col justify-between group ring-1 ring-stone-900/10"
        >
          {/* Dynamic Animated Canvas (High-Definition Rendering) */}
          <canvas
            ref={canvasRef}
            width={1280}
            height={720}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* Top Bar Video Overlays */}
          <div className="relative z-20 p-4 sm:p-6 flex items-start justify-between gap-4 pointer-events-auto">
            {/* City Badge & Coordinates */}
            <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 text-white flex items-center gap-3">
              <span className="text-xl">🇧🇭</span>
              <div>
                <span className="text-[11px] font-bold text-[#E2334D] uppercase tracking-wider block">
                  {currentScene.governorateAr}
                </span>
                <h3 className="text-base sm:text-lg font-bold font-display leading-tight">
                  {currentScene.cityNameAr}
                </h3>
              </div>
            </div>

            {/* Quality Tag & Fullscreen */}
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-stone-300 font-bold">
                4K UHD · 60FPS
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 text-[10px] font-semibold text-emerald-300">
                صوت نقي (بدون موسيقى)
              </span>
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-xl bg-black/60 backdrop-blur-md text-white hover:bg-white/20 transition-colors border border-white/10"
                title="ملء الشاشة"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Center Play Watermark Icon on Hover if Paused */}
          {!isPlaying && (
            <div className="relative z-20 flex items-center justify-center my-auto">
              <button
                onClick={togglePlay}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C8102E] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 ring-4 ring-white/20"
                aria-label="تشغيل الفيديو"
              >
                <Play className="w-8 h-8 sm:w-9 sm:h-9 translate-x-0.5 rtl:-translate-x-0.5 fill-white" />
              </button>
            </div>
          )}

          {/* Bottom Area: Subtitles, Scene Title & Controls */}
          <div className="relative z-20 p-4 sm:p-6 space-y-4 pointer-events-auto bg-gradient-to-t from-black via-black/80 to-transparent">
            
            {/* Live Subtitles (CC) Box */}
            {showSubtitles && (
              <div className="max-w-3xl mx-auto text-center px-4 py-3 bg-black/75 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg animate-fade-in">
                <p className="text-base sm:text-xl font-medium text-white leading-relaxed font-sans drop-shadow-sm">
                  «{activeNarration}»
                </p>
                <div className="mt-1 flex items-center justify-center gap-2 text-xs text-stone-400">
                  <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse" />
                  <span>
                    {voiceDialect === 'sudanese'
                      ? 'صوت إعلاني حماسي بالعامية السودانية'
                      : 'تعليق وثائقي فصيح'}
                  </span>
                </div>
              </div>
            )}

            {/* Video Scrubber Timeline Progress Bar */}
            <div className="space-y-1.5">
              <div className="w-full h-1.5 bg-stone-800 rounded-full overflow-hidden cursor-pointer relative">
                <div
                  className="h-full bg-gradient-to-r from-[#C8102E] to-[#FF4D6D] transition-all duration-100 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-stone-400 font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold">{currentScene.cityNameAr}</span>
                  <span>·</span>
                  <span>المشهد {currentSceneIdx + 1} من {BAHRAIN_VIDEO_SCENES.length}</span>
                </div>
                <span>{currentScene.durationSeconds} ثوانٍ للمشهد</span>
              </div>
            </div>

            {/* Action Bar & Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              
              {/* Playback Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevScene}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="المشهد السابق"
                >
                  <SkipBack className="w-4 h-4 rtl:rotate-180" />
                </button>

                <button
                  onClick={togglePlay}
                  className="px-4 py-2 rounded-xl bg-[#C8102E] hover:bg-[#A50D25] text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md active:scale-95"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 fill-white" />
                      <span>إيقاف مؤقت</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-white" />
                      <span>تشغيل الوثائقي</span>
                    </>
                  )}
                </button>

                <button
                  onClick={nextScene}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="المشهد التالي"
                >
                  <SkipForward className="w-4 h-4 rtl:rotate-180" />
                </button>

                <button
                  onClick={() => {
                    setCurrentSceneIdx(0);
                    setProgress(0);
                    setIsPlaying(true);
                  }}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-colors"
                  title="إعادة من البداية"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className={`p-2 rounded-xl transition-colors ${
                    isMuted ? 'bg-red-500/20 text-red-400' : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                  title={isMuted ? 'إلغاء كتم الصوت' : 'كتم الصوت'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => setShowSubtitles(!showSubtitles)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold border transition-colors ${
                    showSubtitles ? 'bg-white/20 text-white border-white/30' : 'text-stone-400 border-white/10'
                  }`}
                  title="الترجمة والنص"
                >
                  CC
                </button>
              </div>

              {/* Auxiliary Controls: Export & Explore */}
              <div className="flex items-center gap-2">
                {/* Export / Record Video */}
                {!isRecording && !recordedVideoUrl && (
                  <button
                    onClick={handleStartRecording}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-300 hover:text-white bg-white/10 hover:bg-white/15 rounded-xl transition-colors border border-white/10"
                    title="توليد وحفظ ملف الفيديو"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>توليد فيديو</span>
                  </button>
                )}

                {isRecording && (
                  <button
                    onClick={handleStopRecording}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-red-600 animate-pulse rounded-xl"
                  >
                    <span>جارٍ التسجيل... إيقاف وحفظ</span>
                  </button>
                )}

                {recordedVideoUrl && (
                  <a
                    href={recordedVideoUrl}
                    download={`discover_bahrain_cities_${voiceDialect}.webm`}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-sm"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>تحميل الفيديو جاهز (WebM)</span>
                  </a>
                )}

                {/* Explore this city in app */}
                {onSelectCityByName && currentScene.id !== 'intro' && currentScene.id !== 'outro' && (
                  <button
                    onClick={() => onSelectCityByName(currentScene.cityNameAr)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#E2334D] bg-white/10 hover:bg-white/20 rounded-xl transition-colors border border-[#C8102E]/30"
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>استكشف {currentScene.cityNameAr}</span>
                  </button>
                )}
              </div>

            </div>

          </div>
        </div>

        {/* Scene Thumbnails Navigation Rail */}
        <div className="mt-6 flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {BAHRAIN_VIDEO_SCENES.map((scene, idx) => {
            const isActive = idx === currentSceneIdx;

            return (
              <button
                key={scene.id}
                onClick={() => {
                  setCurrentSceneIdx(idx);
                  setProgress(0);
                  if (!isPlaying) setIsPlaying(true);
                }}
                className={`flex items-center gap-2.5 p-2 rounded-2xl border transition-all shrink-0 text-right ${
                  isActive
                    ? 'bg-white border-[#C8102E] ring-2 ring-[#C8102E]/25 shadow-md'
                    : 'bg-white/80 border-stone-200 hover:bg-white text-stone-600 shadow-xs'
                }`}
              >
                <img
                  src={scene.image}
                  alt={scene.cityNameAr}
                  className="w-10 h-10 rounded-xl object-cover shrink-0 border border-stone-200"
                />
                <div>
                  <span className="text-[10px] text-stone-500 block font-mono font-bold">0{idx + 1}</span>
                  <span className={`text-xs font-bold block ${isActive ? 'text-[#C8102E]' : 'text-stone-800'}`}>
                    {scene.cityNameAr}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
