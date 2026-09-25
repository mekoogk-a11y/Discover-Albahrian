import React from 'react';
import { Compass, MapPin, Landmark, Clock, ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import heroImage from '../assets/images/hero_bahrain_skyline_1790335198535.jpg';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-[580px] sm:min-h-[640px] flex items-center justify-center overflow-hidden bg-stone-950">
      
      {/* Background Image with Measured Scrim and subtle crimson tint overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="أفق المنامة ومملكة البحرين - Manama Skyline Bahrain"
          className="w-full h-full object-cover object-center scale-105 transform duration-700 transition-transform"
          referrerPolicy="no-referrer"
        />
        {/* Bahrain Red subtle wash and high-contrast dark scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-[#C8102E]/25" />
        <div className="absolute inset-0 bg-radial from-transparent via-stone-950/40 to-stone-950/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        
        {/* Bahrain Emblem & Flag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium mb-6 shadow-xs animate-fade-in">
          <span className="text-base" aria-hidden="true">🇧🇭</span>
          <span className="tracking-wide">
            {language === 'ar' ? 'مملكة البحرين · أرض الخلود' : 'Kingdom of Bahrain · Land of Dilmun'}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white leading-tight drop-shadow-sm max-w-4xl mx-auto text-balance">
          {t('appTitle')}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-medium text-stone-200 font-display drop-shadow-xs">
          «{t('appSubtitle')}»
        </p>

        {/* Narrative Deck */}
        <p className="mt-4 text-sm sm:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed drop-shadow-xs">
          {language === 'ar'
            ? 'رحلة معرفية تفاعلية عبر 5,000 عام من الحضارة: من مدافن دلمون الأسطورية وقلاع التراث العالمي إلى عمارة اللؤلؤ ونهضة العاصمة المشرقة.'
            : 'An interactive cultural odyssey through 5,000 years of civilization: from mythical Dilmun sanctuaries to UNESCO pearling paths and modern coastal marvels.'}
        </p>

        {/* 4 Core Primary Action Buttons as requested */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => onNavigate('landmarks')}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-[#C8102E] hover:bg-[#A50D25] shadow-lg hover:shadow-xl hover:shadow-[#C8102E]/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{t('exploreNow')}</span>
          </button>

          <button
            onClick={() => onNavigate('map')}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-stone-900 bg-white hover:bg-stone-100 shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#C8102E]" />
            <span>{t('map')}</span>
          </button>

          <button
            onClick={() => onNavigate('cities')}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 transition-all duration-200"
          >
            <Landmark className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{t('landmarks')}</span>
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
