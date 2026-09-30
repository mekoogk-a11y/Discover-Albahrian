import React, { useState } from 'react';
import { Sparkles, BookOpen, ExternalLink, X, Heart, Share2 } from 'lucide-react';
import { DailyDiscovery } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface DailyDiscoverySectionProps {
  discovery: DailyDiscovery;
  onOpenLandmark?: (landmarkId: string) => void;
  onShare: (title: string, text: string) => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export const DailyDiscoverySection: React.FC<DailyDiscoverySectionProps> = ({
  discovery,
  onOpenLandmark,
  onShare,
  isFavorite,
  onToggleFavorite
}) => {
  const { language, t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  const title = language === 'ar' ? discovery.titleAr : discovery.titleEn;
  const fact = language === 'ar' ? discovery.factAr : discovery.factEn;
  const fullStory = language === 'ar' ? discovery.fullStoryAr : discovery.fullStoryEn;
  const category = language === 'ar' ? discovery.categoryAr : discovery.categoryEn;

  return (
    <section id="daily-discovery" className="py-12 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Container */}
        <div className="bg-gradient-to-br from-stone-50 via-white to-stone-50 rounded-3xl p-6 sm:p-8 lg:p-10 border border-stone-200/90 shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-md border border-stone-200/60 relative">
                <img
                  src={discovery.image}
                  alt={language === 'ar' ? `اكتشاف اليوم في البحرين: ${discovery.titleAr}` : `Daily discovery in Bahrain: ${discovery.titleEn}`}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#C8102E] shadow-xs">
                  {category}
                </div>
              </div>
            </div>

            {/* Editorial Narrative Column */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Kicker Header */}
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C8102E]">
                <Sparkles className="w-4 h-4 text-[#C8102E]" />
                <span>🇧🇭 {t('dailyDiscovery')}</span>
                <span className="text-stone-300">·</span>
                <span className="text-stone-500 font-medium">{discovery.date}</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-stone-900 leading-snug">
                {title}
              </h2>

              {/* Short Fact */}
              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans">
                {fact}
              </p>

              {/* Source & Actions Ribbon */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-stone-200/70">
                
                {/* Source Citation */}
                <div className="text-xs text-stone-500 flex items-center gap-1.5">
                  <span className="font-semibold text-stone-700">{t('source')}:</span>
                  <a
                    href={discovery.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C8102E] underline underline-offset-2 flex items-center gap-1"
                  >
                    <span>{language === 'ar' ? discovery.source.nameAr : discovery.source.nameEn}</span>
                    <ExternalLink className="w-3 h-3 text-stone-400" />
                  </a>
                </div>

                {/* Primary CTA: Discover Story */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-[#C8102E] hover:bg-[#A50D25] shadow-xs hover:shadow-md transition-all active:scale-98"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>{t('discoverStory')}</span>
                  </button>

                  <button
                    onClick={onToggleFavorite}
                    className={`p-2.5 rounded-xl border transition-colors ${
                      isFavorite
                        ? 'bg-[#FDF2F4] text-[#C8102E] border-[#F9D2D8]'
                        : 'bg-white text-stone-500 border-stone-200 hover:text-[#C8102E] hover:bg-stone-50'
                    }`}
                    title={isFavorite ? t('saved') : t('save')}
                    aria-label="Save to favorites"
                  >
                    <Heart className={`w-4 h-4 ${isFavorite ? 'fill-[#C8102E]' : ''}`} />
                  </button>

                  <button
                    onClick={() => onShare(title, fact)}
                    className="p-2.5 rounded-xl border border-stone-200 bg-white text-stone-500 hover:text-stone-900 hover:bg-stone-50 transition-colors"
                    title={t('share')}
                    aria-label="Share"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Full Discovery Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto animate-fade-in">
          <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8">
            
            <div className="relative aspect-16/9 bg-stone-100">
              <img
                src={discovery.image}
                alt={language === 'ar' ? `تفاصيل اكتشاف اليوم: ${discovery.titleAr}` : `Daily discovery detail: ${discovery.titleEn}`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 left-4 p-2 rounded-full bg-white/90 text-stone-700 hover:bg-white hover:text-stone-900 shadow-md transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-white">
                {category}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <h3 className="text-2xl font-bold font-display text-stone-900 leading-snug">
                {title}
              </h3>

              <div className="text-base text-stone-700 leading-relaxed space-y-4 font-sans">
                <p>{fullStory}</p>
              </div>

              {/* Source Box */}
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80 text-xs text-stone-600 flex items-center justify-between">
                <div>
                  <span className="font-bold text-stone-800 block mb-0.5">{t('source')}</span>
                  <span>{language === 'ar' ? discovery.source.nameAr : discovery.source.nameEn}</span>
                </div>
                <a
                  href={discovery.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-800 hover:text-[#C8102E] font-medium flex items-center gap-1.5"
                >
                  <span>{t('officialWebsite')}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Actions Footer */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                {discovery.relatedLandmarkId && onOpenLandmark && (
                  <button
                    onClick={() => {
                      setModalOpen(false);
                      onOpenLandmark(discovery.relatedLandmarkId!);
                    }}
                    className="text-xs font-bold text-[#C8102E] hover:underline"
                  >
                    {language === 'ar' ? 'عرض الموقع المرتبط على الخريطة والمعالم ←' : 'View related landmark & map →'}
                  </button>
                )}
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-2 text-sm font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors ml-auto"
                >
                  {t('close')}
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};
