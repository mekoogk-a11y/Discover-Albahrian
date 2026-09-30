import React, { useState } from 'react';
import { Heart, Trash2, X, ArrowRight, ExternalLink } from 'lucide-react';
import { FavoriteItem, ItemType } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: FavoriteItem[];
  onRemoveFavorite: (id: string) => void;
  onSelectItem: (item: FavoriteItem) => void;
}

export const FavoritesModal: React.FC<FavoritesModalProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  onSelectItem
}) => {
  const { language, t } = useLanguage();
  const [filterType, setFilterType] = useState<string>('all');

  if (!isOpen) return null;

  const filtered = favorites.filter((item) => {
    if (filterType === 'all') return true;
    return item.type === filterType;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto animate-fade-in">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-6 flex flex-col max-h-[85vh]">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[#FDF2F4] text-[#C8102E]">
              <Heart className="w-5 h-5 fill-[#C8102E]" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-stone-900">
                {t('favorites')}
              </h3>
              <span className="text-xs text-stone-500 tabular-nums">
                {favorites.length} {language === 'ar' ? 'عنصر محفوظ' : 'saved items'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Tabs */}
        {favorites.length > 0 && (
          <div className="px-5 py-2.5 bg-stone-50 border-b border-stone-100 flex items-center gap-2 overflow-x-auto">
            {['all', 'landmark', 'city', 'museum', 'story'].map((type) => {
              const labelMap: Record<string, string> = {
                all: t('all'),
                landmark: t('landmarks'),
                city: t('cities'),
                museum: t('museums'),
                story: language === 'ar' ? 'القصص' : 'Stories'
              };
              const count =
                type === 'all'
                  ? favorites.length
                  : favorites.filter((f) => f.type === type).length;

              return (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    filterType === type
                      ? 'bg-[#C8102E] text-white'
                      : 'bg-white text-stone-600 hover:bg-stone-200/60'
                  }`}
                >
                  {labelMap[type]} ({count})
                </button>
              );
            })}
          </div>
        )}

        {/* Content Body */}
        <div className="p-5 overflow-y-auto flex-1 divide-y divide-stone-100">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-stone-500 space-y-3">
              <Heart className="w-12 h-12 text-stone-300 mx-auto stroke-1" />
              <p className="text-base font-semibold text-stone-700">
                {t('noFavoritesYet')}
              </p>
              <p className="text-xs max-w-sm mx-auto leading-relaxed text-stone-500">
                {t('startExploring')}
              </p>
            </div>
          ) : (
            filtered.map((item) => {
              const title = language === 'ar' ? item.titleAr : item.titleEn;
              const subtitle = language === 'ar' ? item.subtitleAr : item.subtitleEn;

              return (
                <div
                  key={item.id}
                  className="py-3.5 flex items-center justify-between gap-3 group first:pt-0"
                >
                  <div
                    onClick={() => {
                      onClose();
                      onSelectItem(item);
                    }}
                    className="flex items-center gap-3.5 cursor-pointer flex-1"
                  >
                    <img
                      src={item.image}
                      alt={language === 'ar' ? item.titleAr : item.titleEn}
                      className="w-14 h-14 rounded-2xl object-cover shrink-0 shadow-xs"
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <span className="text-[11px] font-semibold text-[#C8102E] uppercase">
                        {item.type === 'landmark'
                          ? t('landmarks')
                          : item.type === 'city'
                          ? t('cities')
                          : item.type === 'museum'
                          ? t('museums')
                          : t('dailyDiscovery')}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-stone-900 group-hover:text-[#C8102E] transition-colors line-clamp-1">
                        {title}
                      </h4>
                      <p className="text-xs text-stone-500 line-clamp-1">{subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => onRemoveFavorite(item.id)}
                      className="p-2 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                      title={language === 'ar' ? 'حذف من المفضلة' : 'Remove'}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        onClose();
                        onSelectItem(item);
                      }}
                      className="p-2 text-stone-400 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors"
                    >
                      <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-100 bg-stone-50 flex items-center justify-between text-xs text-stone-500">
          <span>{language === 'ar' ? 'البيانات محفوظة محلياً على هذا الجهاز بأمان' : 'Safely stored locally on this device'}</span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-medium text-stone-700 bg-white border border-stone-200 rounded-xl hover:bg-stone-100 transition-colors"
          >
            {t('close')}
          </button>
        </div>

      </div>
    </div>
  );
};
