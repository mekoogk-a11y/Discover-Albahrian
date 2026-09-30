import React from 'react';
import { Museum } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Building2, Clock, Ticket, MapPin, ExternalLink, Heart, Share2 } from 'lucide-react';

interface MuseumsSectionProps {
  museums: Museum[];
  onSelectMuseum: (museum: Museum) => void;
  onShare: (title: string, text: string) => void;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (museum: Museum) => void;
}

export const MuseumsSection: React.FC<MuseumsSectionProps> = ({
  museums,
  onSelectMuseum,
  onShare,
  isFavorite,
  onToggleFavorite
}) => {
  const { language, t } = useLanguage();

  return (
    <section id="museums" className="py-16 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C8102E] mb-2">
            <Building2 className="w-4 h-4 text-[#C8102E]" />
            <span>{t('museums')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-stone-900 tracking-tight">
            {language === 'ar' ? 'متاحف البحرين الوطنية والتخصصية' : 'Museums of Bahrain'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            {language === 'ar'
              ? 'صروح تحفظ مقتنيات دلمون النادرة، روائع المصاحف القرآنية، وتاريخ التجارة والبريد.'
              : 'Institutional repositories guarding Dilmun artifacts, Islamic codices, and postal milestones.'}
          </p>
        </div>

        {/* Museums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {museums.map((museum) => {
            const isFav = isFavorite(museum.id);
            const name = language === 'ar' ? museum.nameAr : museum.nameEn;
            const description = language === 'ar' ? museum.descriptionAr : museum.descriptionEn;
            const hours = language === 'ar' ? museum.hoursAr : museum.hoursEn;
            const admission = language === 'ar' ? museum.admissionAr : museum.admissionEn;
            const cityName = language === 'ar' ? museum.cityNameAr : museum.cityNameEn;

            return (
              <article
                key={museum.id}
                className="bg-stone-50 rounded-3xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Visual */}
                <div className="relative aspect-16/9 bg-stone-200 overflow-hidden">
                  <img
                    src={museum.image}
                    alt={language === 'ar' ? `متحف ${museum.nameAr} في ${museum.cityNameAr} - مملكة البحرين` : `${museum.nameEn} in ${museum.cityNameEn}, Bahrain`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(museum);
                      }}
                      className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                        isFav
                          ? 'bg-white text-[#C8102E] shadow-sm'
                          : 'bg-black/40 text-white hover:bg-white hover:text-[#C8102E]'
                      }`}
                      title={isFav ? t('saved') : t('save')}
                      aria-label="Save museum"
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-[#C8102E]' : ''}`} />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onShare(name, description);
                      }}
                      className="p-2 rounded-full bg-black/40 text-white hover:bg-white hover:text-stone-900 backdrop-blur-md transition-colors"
                      title={t('share')}
                      aria-label="Share"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="absolute bottom-3 right-4 left-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-stone-300 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                      <span>{cityName}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display leading-tight">
                      {name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">
                    {description}
                  </p>

                  {/* Operational Utility Ribbon (Pattern A from museum guidelines) */}
                  <div className="space-y-2 py-3 border-y border-stone-200/70 text-xs">
                    <div className="flex items-start gap-2 text-stone-700">
                      <Clock className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-stone-900 block">{t('workingHours')}:</span>
                        <span className="text-stone-600">{hours}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-stone-700">
                      <Ticket className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-stone-900 block">{t('admission')}:</span>
                        <span className="text-stone-600">{admission}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Base */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="text-xs text-stone-400">
                      <span>{t('source')}: {language === 'ar' ? museum.source.nameAr : museum.source.nameEn}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        href={museum.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-stone-700 hover:text-[#C8102E] flex items-center gap-1"
                      >
                        <span>{t('officialWebsite')}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>

                      <button
                        onClick={() => onSelectMuseum(museum)}
                        className="px-4 py-2 text-xs font-bold text-white bg-[#C8102E] hover:bg-[#A50D25] rounded-xl transition-colors"
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
