import React, { useState } from 'react';
import { HospitalityItem, HospitalityCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';
import {
  Hotel,
  UtensilsCrossed,
  ShoppingBag,
  Waves,
  Compass,
  Star,
  MapPin,
  ExternalLink,
  Heart,
  Share2
} from 'lucide-react';

interface HospitalitySectionProps {
  items: HospitalityItem[];
  initialCategory?: HospitalityCategory;
  onSelectItem: (item: HospitalityItem) => void;
  onShare: (title: string, text: string) => void;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (item: HospitalityItem) => void;
}

export const HospitalitySection: React.FC<HospitalitySectionProps> = ({
  items,
  initialCategory = 'hotel',
  onSelectItem,
  onShare,
  isFavorite,
  onToggleFavorite
}) => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<HospitalityCategory>(initialCategory);

  const categories: { id: HospitalityCategory; labelAr: string; labelEn: string; icon: React.ReactNode }[] = [
    { id: 'hotel', labelAr: 'الفنادق والإقامة', labelEn: 'Hotels & Resorts', icon: <Hotel className="w-4 h-4" /> },
    { id: 'restaurant', labelAr: 'المطاعم والضيافة', labelEn: 'Dining & Cafes', icon: <UtensilsCrossed className="w-4 h-4" /> },
    { id: 'souq', labelAr: 'الأسواق الشعبية', labelEn: 'Traditional Souqs', icon: <ShoppingBag className="w-4 h-4" /> },
    { id: 'beach', labelAr: 'الشواطئ والبحار', labelEn: 'Beaches & Waterfronts', icon: <Waves className="w-4 h-4" /> },
    { id: 'activity', labelAr: 'الأنشطة والجولات', labelEn: 'Activities & Tours', icon: <Compass className="w-4 h-4" /> }
  ];

  const filteredItems = items.filter((item) => item.type === activeCategory);

  return (
    <section id="hospitality" className="py-16 bg-[#FAF8F5] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C8102E] mb-2">
            <span>🇧🇭</span>
            <span>{language === 'ar' ? 'السياحة والضيافة في البحرين' : 'Bahrain Hospitality & Leisure'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-stone-900 tracking-tight">
            {language === 'ar' ? 'الفنادق، المطاعم، الأسواق والأنشطة' : 'Hotels, Dining, Souqs & Activities'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            {language === 'ar'
              ? 'دليلك لأرقى الفنادق والمنتجعات، أشهى المطاعم البحرينية والعالمية، أعرق الأسواق الشعبية، وأمتع الأنشطة الترفيهية في المملكة.'
              : 'Your guide to premier luxury stays, authentic Khaleeji gastronomy, bustling bazaars, and scenic coastline tours.'}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#C8102E] text-white shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200/80'
                }`}
              >
                {cat.icon}
                <span>{language === 'ar' ? cat.labelAr : cat.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => {
            const isFav = isFavorite(item.id);
            const name = language === 'ar' ? item.nameAr : item.nameEn;
            const desc = language === 'ar' ? item.descriptionAr : item.descriptionEn;
            const categoryLabel = language === 'ar' ? item.categoryLabelAr : item.categoryLabelEn;
            const location = language === 'ar' ? item.locationAr : item.locationEn;
            const features = language === 'ar' ? item.featuresAr : item.featuresEn;

            return (
              <article
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image */}
                <div className="relative aspect-16/9 bg-stone-200 overflow-hidden">
                  <img
                    src={item.image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <button
                      onClick={() => onToggleFavorite(item)}
                      className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                        isFav
                          ? 'bg-white text-[#C8102E] shadow-sm'
                          : 'bg-black/40 text-white hover:bg-white hover:text-[#C8102E]'
                      }`}
                      title={isFav ? t('saved') : t('save')}
                      aria-label="Save"
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-[#C8102E]' : ''}`} />
                    </button>

                    <button
                      onClick={() => onShare(name, desc)}
                      className="p-2 rounded-full bg-black/40 text-white hover:bg-white hover:text-stone-900 backdrop-blur-md transition-colors"
                      title={t('share')}
                      aria-label="Share"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Rating Tag */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-stone-900 flex items-center gap-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{item.rating.toFixed(1)}</span>
                  </div>

                  {/* Bottom Image Label */}
                  <div className="absolute bottom-3 right-4 left-4 text-white">
                    <span className="text-xs text-stone-300 font-semibold">{categoryLabel}</span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display leading-tight">
                      {name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-sm text-stone-600 leading-relaxed font-sans line-clamp-3">
                    {desc}
                  </p>

                  {/* Features list */}
                  <div className="flex flex-wrap gap-1.5">
                    {features.map((feat, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-[11px] font-medium bg-stone-100 text-stone-700 rounded-lg"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Location & Actions */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                    <div className="flex items-center gap-1 font-medium truncate max-w-[200px] sm:max-w-xs">
                      <MapPin className="w-3.5 h-3.5 text-[#C8102E] shrink-0" />
                      <span className="truncate">{location}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {item.officialUrl && (
                        <a
                          href={item.officialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-stone-500 hover:text-[#C8102E] transition-colors"
                          title={t('officialWebsite')}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <button
                        onClick={() => onSelectItem(item)}
                        className="px-3.5 py-1.5 bg-[#C8102E] hover:bg-[#A50D25] text-white text-xs font-bold rounded-xl transition-colors"
                      >
                        {t('viewDetails')}
                      </button>
                    </div>
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
