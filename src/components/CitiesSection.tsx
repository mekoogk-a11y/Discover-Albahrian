import React from 'react';
import { City } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Landmark as LandmarkIcon, Building2, Heart, ArrowRight } from 'lucide-react';

interface CitiesSectionProps {
  cities: City[];
  onSelectCity: (city: City) => void;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (city: City) => void;
}

export const CitiesSection: React.FC<CitiesSectionProps> = ({
  cities,
  onSelectCity,
  isFavorite,
  onToggleFavorite
}) => {
  const { language, t } = useLanguage();

  return (
    <section id="cities" className="py-16 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C8102E] mb-2">
            <span aria-hidden="true">🏘️</span>
            <span>{t('cities')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-stone-900 tracking-tight">
            {t('citiesAndAreas')}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            {language === 'ar'
              ? 'رحلة عبر المحافظات والمدن العريقة، من أصالة المحرق وحداثة المنامة إلى قلاع الرفاع وأفران فخار عالي.'
              : 'A curated journey across historical governorates and enclaves, from timeless Muharraq to bustling Manama.'}
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city) => {
            const isFav = isFavorite(city.id);
            const name = language === 'ar' ? city.nameAr : city.nameEn;
            const subtitle = language === 'ar' ? city.nameEn : city.nameAr;
            const description = language === 'ar' ? city.descriptionAr : city.descriptionEn;
            const governorate = language === 'ar' ? city.governorateAr : city.governorateEn;

            return (
              <article
                key={city.id}
                onClick={() => onSelectCity(city)}
                className="group cursor-pointer bg-stone-50 hover:bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-16/10 overflow-hidden bg-stone-200">
                  <img
                    src={city.image}
                    alt={language === 'ar' ? `مدينة ${city.nameAr} في ${city.governorateAr} - مملكة البحرين` : `${city.nameEn} city, ${city.governorateEn}, Bahrain`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  
                  {/* City Name & English Title on image */}
                  <div className="absolute bottom-3 right-4 left-4 text-white">
                    <span className="text-xs text-stone-300 font-medium">{governorate}</span>
                    <h3 className="text-2xl font-bold font-display leading-tight flex items-baseline gap-2">
                      <span>{name}</span>
                      <span className="text-xs font-normal text-stone-300">({subtitle})</span>
                    </h3>
                  </div>

                  {/* Favorite button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(city);
                    }}
                    className={`absolute top-3 left-3 p-2 rounded-full backdrop-blur-md transition-colors ${
                      isFav
                        ? 'bg-white text-[#C8102E] shadow-sm'
                        : 'bg-black/40 text-white hover:bg-white hover:text-[#C8102E]'
                    }`}
                    title={isFav ? t('saved') : t('save')}
                    aria-label="Save city"
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-[#C8102E]' : ''}`} />
                  </button>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">
                    {description}
                  </p>

                  {/* Operational stats row (Zero-pill text styling) */}
                  <div className="pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs text-stone-500">
                    <div className="flex items-center gap-1.5 font-medium">
                      <LandmarkIcon className="w-3.5 h-3.5 text-[#C8102E]" />
                      <span className="tabular-nums font-semibold text-stone-800">{city.landmarksCount}</span>
                      <span>{t('landmarks')}</span>
                    </div>

                    <div className="flex items-center gap-1.5 font-medium">
                      <Building2 className="w-3.5 h-3.5 text-[#C8102E]" />
                      <span className="tabular-nums font-semibold text-stone-800">{city.museumsCount}</span>
                      <span>{t('museums')}</span>
                    </div>

                    <span className="inline-flex items-center text-[#C8102E] font-bold gap-1 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                      <span>{t('viewDetails')}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
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
