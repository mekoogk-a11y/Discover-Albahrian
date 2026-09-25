import React, { useState } from 'react';
import { TimelineEvent } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Clock, ExternalLink, Calendar, ChevronRight, ChevronLeft } from 'lucide-react';

interface TimelineSectionProps {
  events: TimelineEvent[];
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ events }) => {
  const { language, t } = useLanguage();
  const [selectedEventId, setSelectedEventId] = useState<string>(events[0]?.id || '');

  const activeEvent = events.find((e) => e.id === selectedEventId) || events[0];

  return (
    <section id="history" className="py-16 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E2334D] mb-2">
            <Clock className="w-4 h-4 text-[#E2334D]" />
            <span>{t('history')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white">
            {t('historyAcrossTime')}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-400">
            {language === 'ar'
              ? 'تسلسل زمني يوثق المحطات الكبرى والموثقة في تاريخ البحرين الممتد لأكثر من 5,000 عام.'
              : 'A chronological journey across definitive milestones defining Bahrain’s 5,000-year civilizational legacy.'}
          </p>
        </div>

        {/* Timeline Horizontal Navigation Rail */}
        <div className="relative mb-12">
          <div className="flex items-center justify-between overflow-x-auto pb-4 gap-4 scrollbar-none border-b border-stone-800">
            {events.map((event, idx) => {
              const isSelected = event.id === activeEvent.id;
              const era = language === 'ar' ? event.eraAr : event.eraEn;
              const dateLabel = language === 'ar' ? event.dateLabelAr : event.dateLabelEn;

              return (
                <button
                  key={event.id}
                  onClick={() => setSelectedEventId(event.id)}
                  className={`flex-1 min-w-[200px] text-right p-4 rounded-2xl transition-all border ${
                    isSelected
                      ? 'bg-stone-800 border-[#E2334D] shadow-lg shadow-[#E2334D]/10'
                      : 'bg-stone-950/60 border-stone-800 hover:bg-stone-800/60 text-stone-400'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-stone-400 mb-1">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center bg-stone-700 text-stone-200 text-[10px] font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-[#E2334D] font-medium">{dateLabel}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white font-display line-clamp-1">
                    {era}
                  </h4>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Milestone Card */}
        {activeEvent && (
          <div className="bg-stone-800/90 rounded-3xl overflow-hidden border border-stone-700/80 shadow-2xl grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative aspect-16/10 lg:aspect-auto">
              <img
                src={activeEvent.image}
                alt={language === 'ar' ? activeEvent.titleAr : activeEvent.titleEn}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 bg-stone-950/80 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-mono text-[#E2334D]">
                {language === 'ar' ? activeEvent.dateLabelAr : activeEvent.dateLabelEn}
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="text-xs font-semibold text-[#E2334D] uppercase tracking-wider">
                  {language === 'ar' ? activeEvent.eraAr : activeEvent.eraEn}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug">
                  {language === 'ar' ? activeEvent.titleAr : activeEvent.titleEn}
                </h3>
                <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-sans">
                  {language === 'ar' ? activeEvent.descriptionAr : activeEvent.descriptionEn}
                </p>
              </div>

              {/* Historical Significance Callout */}
              <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-700 text-xs sm:text-sm text-stone-300">
                <span className="font-bold text-white block mb-1">
                  {language === 'ar' ? 'الأهمية التاريخية والحضارية:' : 'Historical Significance:'}
                </span>
                <p>{activeEvent.significanceAr}</p>
              </div>

              {/* Source Attribution */}
              <div className="pt-4 border-t border-stone-700/80 flex items-center justify-between text-xs text-stone-400">
                <div className="flex items-center gap-1.5">
                  <span className="text-stone-300 font-semibold">{t('source')}:</span>
                  <span>{language === 'ar' ? activeEvent.source.nameAr : activeEvent.source.nameEn}</span>
                </div>
                <a
                  href={activeEvent.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1 text-[#E2334D]"
                >
                  <span>{t('officialWebsite')}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
