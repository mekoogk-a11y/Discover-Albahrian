import React, { useState, useMemo } from 'react';
import { Landmark, LandmarkCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Share2, MapPin, ExternalLink, ArrowRight } from 'lucide-react';

interface LandmarksSectionProps {
  landmarks: Landmark[];
  onSelectLandmark: (landmark: Landmark) => void;
  onShare: (title: string, text: string) => void;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (landmark: Landmark) => void;
}

export const LandmarksSection: React.FC<LandmarksSectionProps> = ({
  landmarks,
  onSelectLandmark,
  onShare,
  isFavorite,
  onToggleFavorite
}) => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories: { id: string; label: string; icon: string }[] = [
    { id: 'all', label: t('all'), icon: '🇧🇭' },
    { id: 'history', label: t('historyCategory'), icon: '🏛️' },
    { id: 'archaeological', label: t('archaeologicalCategory'), icon: '🏺' },
    { id: 'culture', label: t('cultureCategory'), icon: '🎨' },
    { id: 'religious', label: t('religiousCategory'), icon: '🕌' },
    { id: 'nature', label: t('natureCategory'), icon: '🌳' },
    { id: 'sea', label: t('seaCategory'), icon: '🌊' },
    { id: 'modern', label: t('modernCategory'), icon: '🏙️' },
  ];

  const filteredLandmarks = useMemo(() => {
    if (selectedCategory === 'all') return landmarks;
    return landmarks.filter((l) => l.category === selectedCategory);
  }, [landmarks, selectedCategory]);

  return (
    <section id="landmarks" className="py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C8102E] mb-2">
              <span aria-hidden="true">🏛️</span>
              <span>{t('landmarks')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-stone-900 tracking-tight">
              {t('featuredLandmarks')}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-2xl">
              {language === 'ar'
                ? 'استكشف أهم مواقع التراث الإنساني العالمي لليونسكو والقلاع والمتاحف والصروح المعمارية الخالدة.'
                : 'Explore prestigious UNESCO World Heritage sites, fortified citadels, and timeless cultural landmarks.'}
            </p>
          </div>
        </div>

        {/* Category Filter Tabs (Zero-Pill Discipline: functional segmented controls) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#C8102E] text-white shadow-sm'
                    : 'bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-200/80'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Landmarks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredLandmarks.map((landmark) => {
            const isFav = isFavorite(landmark.id);
            const name = language === 'ar' ? landmark.nameAr : landmark.nameEn;
            const overview = language === 'ar' ? landmark.overviewAr : landmark.overviewEn;
            const cityName = language === 'ar' ? landmark.cityNameAr : landmark.cityNameEn;

            return (
              <article
                key={landmark.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Box */}
                <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                  <img
                    src={landmark.image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(landmark);
                      }}
                      className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                        isFav
                          ? 'bg-white text-[#C8102E] shadow-sm'
                          : 'bg-black/40 text-white hover:bg-white hover:text-[#C8102E]'
                      }`}
                      title={isFav ? t('saved') : t('save')}
                      aria-label="Save to favorites"
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-[#C8102E]' : ''}`} />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onShare(name, overview);
                      }}
                      className="p-2 rounded-full bg-black/40 text-white hover:bg-white hover:text-stone-900 backdrop-blur-md transition-colors"
                      title={t('share')}
                      aria-label="Share"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Clean unboxed location tag at bottom corner */}
                  <div className="absolute bottom-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-xs font-medium px-2.5 py-1 rounded-lg flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C8102E]" />
                    <span>{cityName}</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Unboxed Metadata Line with typographic separator (Anti-Slop rule) */}
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5 font-medium">
                      <span>{cityName}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#C8102E] font-semibold">
                        {language === 'ar' ? landmark.source.nameAr : landmark.source.nameEn}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-display text-stone-900 group-hover:text-[#C8102E] transition-colors line-clamp-1">
                      {name}
                    </h3>

                    <p className="mt-2 text-sm text-stone-600 leading-relaxed line-clamp-3">
                      {overview}
                    </p>
                  </div>

                  {/* Card Footer: Action Button */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <button
                      onClick={() => onSelectLandmark(landmark)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#C8102E] hover:text-[#A50D25] transition-colors"
                    >
                      <span>{t('viewDetails')}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </button>

                    <span className="text-[11px] text-stone-400">
                      {language === 'ar' ? 'موثق رسمياً' : 'Verified'}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
