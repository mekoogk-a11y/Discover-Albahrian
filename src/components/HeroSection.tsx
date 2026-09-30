import React from 'react';
import { Compass, MapPin, Landmark, Clock, ArrowDown, Video, Radio } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import heroImage from '../assets/images/hero_bahrain_skyline_1790335198535.jpg';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-[580px] sm:min-h-[640px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900">
      
      {/* Background Image: Crisp, clear, luminous view of Bahrain skyline without murky fog */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt={language === 'ar' ? 'منظر بانورامي لأفق المنامة ومعالم مملكة البحرين الحديثة' : 'Panoramic view of Manama skyline and modern landmarks of the Kingdom of Bahrain'}
          className="w-full h-full object-cover object-center scale-102 transform duration-700 transition-transform"
          loading="eager"
          decoding="async"
          // @ts-expect-error fetchpriority attribute is supported in modern browsers
          fetchpriority="high"
          referrerPolicy="no-referrer"
        />
        {/* Soft luminous light filter - warm sunlight & clean clarity with readable contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/35 to-amber-500/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#C8102E]/20 via-transparent to-amber-500/15 mix-blend-overlay" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        
        {/* Bahrain Emblem & Flag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white text-xs sm:text-sm font-semibold mb-6 shadow-md animate-fade-in">
          <span className="text-base" aria-hidden="true">🇧🇭</span>
          <span className="tracking-wide text-white drop-shadow-sm">
            {language === 'ar' ? 'مملكة البحرين · أرض الخلود والإشراق' : 'Kingdom of Bahrain · Land of Dilmun & Light'}
          </span>
        </div>

        {/* Title (Single H1 on Homepage) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] max-w-4xl mx-auto text-balance">
          {t('appTitle')}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-amber-200 font-display drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          «{t('appSubtitle')}»
        </p>

        {/* Narrative Deck & Semantic SEO Definition */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-stone-100 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
          {language === 'ar'
            ? 'اكتشف البحرين هو دليل رقمي للتعرف على مملكة البحرين، مدنها ومعالمها السياحية وتاريخها وثقافتها وتراثها وأبرز الأماكن التي يمكن للزائر اكتشافها عبر 5,000 عام من الحضارة.'
            : 'Discover Bahrain is a digital guide to explore the Kingdom of Bahrain, its vibrant cities, tourism landmarks, rich history, authentic culture, and timeless heritage spanning over 5,000 years.'}
        </p>

        {/* Primary Action Buttons + Sudanese Ad Voice Studio + Video */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => onNavigate('sudanese-ad-studio')}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-amber-600 via-rose-600 to-[#C8102E] hover:from-amber-500 hover:to-[#A50D25] shadow-xl hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 ring-2 ring-amber-300/40"
          >
            <Radio className="w-4 h-4 sm:w-5 sm:h-5 text-amber-200 animate-pulse" />
            <span>{language === 'ar' ? '🎙️ صوت إعلاني حماسي (سوداني)' : '🎙️ Sudanese Ad Voice'}</span>
          </button>

          <button
            onClick={() => onNavigate('video-tour')}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#C8102E] to-[#99001A] hover:from-[#A50D25] hover:to-[#800015] shadow-lg hover:shadow-xl hover:shadow-[#C8102E]/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 ring-2 ring-white/20"
          >
            <Video className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span>{language === 'ar' ? 'فيديو مدن البحرين' : 'Bahrain Video'}</span>
          </button>

          <button
            onClick={() => onNavigate('landmarks')}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-stone-900 bg-white hover:bg-stone-100 shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-[#C8102E]" />
            <span>{t('exploreNow')}</span>
          </button>

          <button
            onClick={() => onNavigate('map')}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 transition-all duration-200"
          >
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span>{t('map')}</span>
          </button>

          <button
            onClick={() => onNavigate('cities')}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 transition-all duration-200"
          >
            <Landmark className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{t('cities')}</span>
          </button>

          <button
            onClick={() => onNavigate('history')}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 transition-all duration-200"
          >
            <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{t('history')}</span>
          </button>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => onNavigate('daily-discovery')}
            className="p-2 text-stone-400 hover:text-white transition-colors animate-bounce"
            aria-label="Scroll to discover"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
