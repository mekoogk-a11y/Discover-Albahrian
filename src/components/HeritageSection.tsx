import React, { useState } from 'react';
import { HeritageTopic } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';

interface HeritageSectionProps {
  heritage: HeritageTopic[];
}

export const HeritageSection: React.FC<HeritageSectionProps> = ({ heritage }) => {
  const { language, t } = useLanguage();
  const [selectedTopicId, setSelectedTopicId] = useState<string>(heritage[0]?.id || '');

  const activeTopic = heritage.find((h) => h.id === selectedTopicId) || heritage[0];

  return (
    <section id="heritage" className="py-16 bg-[#FAF8F5] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C8102E] mb-2">
            <span aria-hidden="true">🏺</span>
            <span>{t('heritage')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-stone-900 tracking-tight">
            {language === 'ar' ? 'تراث البحرين الأصيل' : 'Authentic Bahraini Heritage'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            {language === 'ar'
              ? 'رحلة استكشافية في عادات الغوص، فنون العمارة المرجانية، الحرف اليدوية، وتقاليد الضيافة والمجالس.'
              : 'Immersion in pearling lore, coral stone architecture, living crafts, and hospitable majalis.'}
          </p>
        </div>

        {/* Heritage Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {heritage.map((topic) => {
            const isSelected = topic.id === activeTopic.id;
            const title = language === 'ar' ? topic.titleAr : topic.titleEn;

            return (
              <button
                key={topic.id}
                onClick={() => setSelectedTopicId(topic.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#C8102E] text-white shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200/80'
                }`}
              >
                {title}
              </button>
            );
          })}
        </div>

        {/* Selected Topic Detailed Panel */}
        {activeTopic && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Visual Box */}
              <div className="lg:col-span-5 space-y-4">
                <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-sm border border-stone-200 bg-stone-100">
                  <img
                    src={activeTopic.image}
                    alt={language === 'ar' ? activeTopic.titleAr : activeTopic.titleEn}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Source note */}
                <div className="p-3.5 bg-stone-50 rounded-xl text-xs text-stone-500 flex items-center justify-between border border-stone-200/60">
                  <span>{t('source')}: {language === 'ar' ? activeTopic.source.nameAr : activeTopic.source.nameEn}</span>
                  <a
                    href={activeTopic.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C8102E] hover:underline flex items-center gap-1 font-medium"
                  >
                    <span>{t('officialWebsite')}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Text & Elements */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-stone-900">
                    {language === 'ar' ? activeTopic.titleAr : activeTopic.titleEn}
                  </h3>
                  <p className="mt-3 text-base sm:text-lg text-stone-700 font-sans leading-relaxed">
                    {language === 'ar' ? activeTopic.fullContentAr : activeTopic.fullContentEn}
                  </p>
                </div>

                {/* Key Heritage Elements */}
                <div className="pt-4 border-t border-stone-100">
                  <h4 className="text-xs font-bold text-[#C8102E] uppercase tracking-wider mb-4 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{language === 'ar' ? 'العناصر والمفردات التراثية المرتبطة' : 'Associated Elements & Lore'}</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeTopic.elements.map((el, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-stone-50 border border-stone-200/60">
                        <div className="flex items-center gap-2 mb-1 text-sm font-bold text-stone-900">
                          <CheckCircle2 className="w-4 h-4 text-[#C8102E] shrink-0" />
                          <span>{language === 'ar' ? el.titleAr : el.titleEn}</span>
                        </div>
                        <p className="text-xs text-stone-600 leading-relaxed">
                          {language === 'ar' ? el.descAr : el.descEn}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
