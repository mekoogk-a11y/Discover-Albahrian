import React, { useState, useEffect, useRef } from 'react';
import { Search, X, MapPin, Landmark, Building2, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { dataService } from '../services/dataService';
import { City, Landmark as LandmarkType, Museum, HeritageTopic, TimelineEvent } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLandmark: (l: LandmarkType) => void;
  onSelectCity: (c: City) => void;
  onSelectMuseum: (m: Museum) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectLandmark,
  onSelectCity,
  onSelectMuseum
}) => {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const results = dataService.search(query, language);
  const totalResults =
    results.landmarks.length +
    results.cities.length +
    results.museums.length +
    results.heritage.length +
    results.timeline.length;

  const suggestions = [
    { labelAr: 'قلعة البحرين', labelEn: 'Bahrain Fort' },
    { labelAr: 'طريق اللؤلؤ', labelEn: 'Pearling Path' },
    { labelAr: 'المحرق', labelEn: 'Muharraq' },
    { labelAr: 'شجرة الحياة', labelEn: 'Tree of Life' },
    { labelAr: 'متحف البحرين الوطني', labelEn: 'National Museum' },
    { labelAr: 'حضارة دلمون', labelEn: 'Dilmun Civilization' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-4 sm:my-8 flex flex-col max-h-[85vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center gap-3 bg-stone-50">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('searchPlaceholder')}
            className="w-full bg-transparent text-base sm:text-lg font-medium text-stone-900 placeholder:text-stone-400 focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200"
            >
              <X className="w-4 h-4" />
            </button>
          ) : null}
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors shrink-0 text-xs font-semibold"
          >
            {t('close')}
          </button>
        </div>

        {/* Suggestions When Empty */}
        {!query && (
          <div className="p-6 space-y-4">
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
              {language === 'ar' ? 'اقتراحات شائعة للاستكشاف:' : 'Popular Explorations:'}
            </span>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setQuery(language === 'ar' ? s.labelAr : s.labelEn)}
                  className="px-3.5 py-1.5 text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl transition-colors"
                >
                  {language === 'ar' ? s.labelAr : s.labelEn}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results List */}
        {query && (
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 divide-y divide-stone-100">
            {totalResults === 0 ? (
              <div className="text-center py-10 text-stone-500 space-y-2">
                <p className="text-base font-semibold">
                  {language === 'ar' ? 'لم نتمكن من العثور على نتائج مطابقة' : 'No matching results found'}
                </p>
                <p className="text-xs">
                  {language === 'ar'
                    ? 'جرب البحث باسم معلم أو مدينة أخرى مثل: دلمون، باب البحرين، المحرق'
                    : 'Try searching for other landmarks such as: Dilmun, Bab Al Bahrain, Muharraq'}
                </p>
              </div>
            ) : (
              <>
                {/* Landmarks */}
                {results.landmarks.length > 0 && (
                  <div className="pt-2 first:pt-0">
                    <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider block mb-3">
                      {t('landmarks')} ({results.landmarks.length})
                    </span>
                    <div className="space-y-2">
                      {results.landmarks.map((l) => (
                        <div
                          key={l.id}
                          onClick={() => {
                            onClose();
                            onSelectLandmark(l);
                          }}
                          className="flex items-center justify-between p-3 rounded-2xl hover:bg-stone-50 cursor-pointer border border-transparent hover:border-stone-200 transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <img src={l.image} alt="" className="w-12 h-12 rounded-xl object-cover shrink-0" />
                            <div>
                              <h4 className="text-sm font-bold text-stone-900">
                                {language === 'ar' ? l.nameAr : l.nameEn}
                              </h4>
                              <p className="text-xs text-stone-500 line-clamp-1">
                                {language === 'ar' ? l.cityNameAr : l.cityNameEn} · {language === 'ar' ? l.overviewAr : l.overviewEn}
                              </p>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-stone-400 rtl:rotate-180 shrink-0 ml-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Cities */}
                {results.cities.length > 0 && (
                  <div className="pt-4">
                    <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-3">
                      {t('cities')} ({results.cities.length})
                    </span>
                    <div className="space-y-2">
                      {results.cities.map((c) => (
                        <div
                          key={c.id}
                          onClick={() => {
                            onClose();
                            onSelectCity(c);
                          }}
                          className="flex items-center justify-between p-3 rounded-2xl hover:bg-stone-50 cursor-pointer border border-transparent hover:border-stone-200 transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <img src={c.image} alt="" className="w-12 h-12 rounded-xl object-cover shrink-0" />
                            <div>
                              <h4 className="text-sm font-bold text-stone-900">
                                {language === 'ar' ? c.nameAr : c.nameEn}
                              </h4>
                              <p className="text-xs text-stone-500 line-clamp-1">
                                {language === 'ar' ? c.governorateAr : c.governorateEn}
                              </p>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-stone-400 rtl:rotate-180 shrink-0 ml-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Museums */}
                {results.museums.length > 0 && (
                  <div className="pt-4">
                    <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-3">
                      {t('museums')} ({results.museums.length})
                    </span>
                    <div className="space-y-2">
                      {results.museums.map((m) => (
                        <div
                          key={m.id}
                          onClick={() => {
                            onClose();
                            onSelectMuseum(m);
                          }}
                          className="flex items-center justify-between p-3 rounded-2xl hover:bg-stone-50 cursor-pointer border border-transparent hover:border-stone-200 transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <img src={m.image} alt="" className="w-12 h-12 rounded-xl object-cover shrink-0" />
                            <div>
                              <h4 className="text-sm font-bold text-stone-900">
                                {language === 'ar' ? m.nameAr : m.nameEn}
                              </h4>
                              <p className="text-xs text-stone-500 line-clamp-1">
                                {language === 'ar' ? m.cityNameAr : m.cityNameEn} · {language === 'ar' ? m.descriptionAr : m.descriptionEn}
                              </p>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-stone-400 rtl:rotate-180 shrink-0 ml-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
