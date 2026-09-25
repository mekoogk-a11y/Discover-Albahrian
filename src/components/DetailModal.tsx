import React, { useState } from 'react';
import { Landmark, City, Museum } from '../types';
import { useLanguage } from '../context/LanguageContext';
import {
  X,
  Heart,
  Share2,
  MapPin,
  ExternalLink,
  Clock,
  Compass,
  Building2,
  Info,
  Calendar,
  Layers,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

type DetailItem =
  | { type: 'landmark'; data: Landmark }
  | { type: 'city'; data: City }
  | { type: 'museum'; data: Museum };

interface DetailModalProps {
  item: DetailItem | null;
  onClose: () => void;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string, type: 'landmark' | 'city' | 'museum') => void;
  onShare: (title: string, text: string) => void;
  onSelectNearby?: (landmarkId: string) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  item,
  onClose,
  isFavorite,
  onToggleFavorite,
  onShare,
  onSelectNearby
}) => {
  const { language, t } = useLanguage();
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!item) return null;

  const isFav = isFavorite(item.data.id);

  if (item.type === 'landmark') {
    const l = item.data;
    const name = language === 'ar' ? l.nameAr : l.nameEn;
    const overview = language === 'ar' ? l.overviewAr : l.overviewEn;
    const story = language === 'ar' ? l.storyAr : l.storyEn;
    const history = language === 'ar' ? l.historyAr : l.historyEn;
    const cityName = language === 'ar' ? l.cityNameAr : l.cityNameEn;
    const images = l.gallery?.length ? l.gallery : [l.image];

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto animate-fade-in">
        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-4 sm:my-8 flex flex-col max-h-[90vh]">
          
          {/* Hero Visual Area with Gallery & Controls */}
          <div className="relative aspect-16/10 sm:aspect-16/9 bg-stone-900 shrink-0">
            <img
              src={images[activeImageIdx] || l.image}
              alt={name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/30" />

            {/* Top Bar Controls */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/80 hover:bg-white text-stone-800 shadow-md backdrop-blur-md transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onToggleFavorite(l.id, 'landmark')}
                  className={`p-2.5 rounded-full shadow-md backdrop-blur-md transition-colors ${
                    isFav
                      ? 'bg-white text-[#C8102E]'
                      : 'bg-black/50 text-white hover:bg-white hover:text-[#C8102E]'
                  }`}
                  title={isFav ? t('saved') : t('save')}
                  aria-label="Save to favorites"
                >
                  <Heart className={`w-4 h-4 ${isFav ? 'fill-[#C8102E]' : ''}`} />
                </button>

                <button
                  onClick={() => onShare(name, overview)}
                  className="p-2.5 rounded-full bg-black/50 text-white hover:bg-white hover:text-stone-900 shadow-md backdrop-blur-md transition-colors"
                  title={t('share')}
                  aria-label="Share"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Title Overlay on Hero */}
            <div className="absolute bottom-4 right-4 left-4 text-white">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#FDF2F4] mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                <span>{cityName}</span>
                <span aria-hidden="true">·</span>
                <span>{t(l.category + 'Category')}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display leading-tight">
                {name}
              </h2>
            </div>
          </div>

          {/* Modal Content Scroll Area */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 divide-y divide-stone-100">
            
            {/* 1. Overview (نبذة) */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">
                {t('overview')}
              </h3>
              <p className="text-base text-stone-700 leading-relaxed font-sans">
                {overview}
              </p>
            </div>

            {/* 2. Story (القصة) */}
            <div className="pt-5 space-y-2">
              <h3 className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">
                {language === 'ar' ? 'القصة والرواية التراثية' : 'Story & Cultural Narrative'}
              </h3>
              <p className="text-base text-stone-700 leading-relaxed font-sans">
                {story}
              </p>
            </div>

            {/* 3. History (التاريخ) */}
            <div className="pt-5 space-y-2">
              <h3 className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">
                {language === 'ar' ? 'التسلسل والتاريخ الموثق' : 'Documented Historical Record'}
              </h3>
              <p className="text-base text-stone-700 leading-relaxed font-sans">
                {history}
              </p>
            </div>

            {/* 4. Location & Coordinates (الموقع على الخريطة) */}
            <div className="pt-5 space-y-3">
              <h3 className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">
                {t('location')}
              </h3>
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C8102E]" />
                  <span>{cityName}</span>
                  <span className="text-stone-300">|</span>
                  <span className="font-mono tabular-nums">{l.coordinates[0].toFixed(4)}° N, {l.coordinates[1].toFixed(4)}° E</span>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${l.coordinates[0]},${l.coordinates[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white border border-stone-200 font-semibold text-stone-800 hover:text-[#C8102E] flex items-center gap-1 shadow-2xs"
                >
                  <span>{language === 'ar' ? 'فتح في خرائط Google' : 'Open in Google Maps'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* 5. Nearby Places (أماكن قريبة) */}
            {l.nearbyPlaces && l.nearbyPlaces.length > 0 && (
              <div className="pt-5 space-y-3">
                <h3 className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">
                  {t('nearbyPlaces')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {l.nearbyPlaces.map((place, idx) => (
                    <div key={idx} className="p-3 bg-stone-50 rounded-xl border border-stone-200/70 text-xs">
                      <span className="font-bold text-stone-900 block truncate">
                        {language === 'ar' ? place.nameAr : place.nameEn}
                      </span>
                      <span className="text-stone-500 font-mono mt-0.5 block">{place.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. Documented Sources (المصادر الموثوقة) */}
            <div className="pt-5 space-y-2">
              <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                {t('source')}
              </h3>
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-stone-900 block">
                    {language === 'ar' ? l.source.nameAr : l.source.nameEn}
                  </span>
                  <span className="text-stone-500">
                    {l.source.verifiedOrganization} · {language === 'ar' ? 'سجل رسمي موثق' : 'Official Verified Record'}
                  </span>
                </div>
                <a
                  href={l.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white border border-stone-200 font-semibold text-[#C8102E] hover:underline flex items-center gap-1"
                >
                  <span>{t('officialWebsite')}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleFavorite(l.id, 'landmark')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                  isFav
                    ? 'bg-[#FDF2F4] text-[#C8102E] border-[#F9D2D8]'
                    : 'bg-white text-stone-700 border-stone-200 hover:text-[#C8102E]'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-[#C8102E]' : ''}`} />
                <span>{isFav ? t('saved') : t('save')}</span>
              </button>

              <button
                onClick={() => onShare(name, overview)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white text-stone-700 border border-stone-200 hover:text-stone-900 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{t('share')}</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-bold text-white bg-stone-900 hover:bg-black rounded-xl transition-colors"
            >
              {t('close')}
            </button>
          </div>

        </div>
      </div>
    );
  }

  // Handle City View
  if (item.type === 'city') {
    const c = item.data;
    const name = language === 'ar' ? c.nameAr : c.nameEn;
    const subtitle = language === 'ar' ? c.nameEn : c.nameAr;
    const desc = language === 'ar' ? c.descriptionAr : c.descriptionEn;
    const history = language === 'ar' ? c.historyAr : c.historyEn;
    const governorate = language === 'ar' ? c.governorateAr : c.governorateEn;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto animate-fade-in">
        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-4 sm:my-8 flex flex-col max-h-[90vh]">
          
          <div className="relative aspect-16/9 bg-stone-900 shrink-0">
            <img src={c.image} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/30" />

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <button onClick={onClose} className="p-2 rounded-full bg-white/80 hover:bg-white text-stone-800 shadow-md">
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onToggleFavorite(c.id, 'city')}
                  className={`p-2.5 rounded-full shadow-md ${isFav ? 'bg-white text-[#C8102E]' : 'bg-black/50 text-white'}`}
                >
                  <Heart className={`w-4 h-4 ${isFav ? 'fill-[#C8102E]' : ''}`} />
                </button>
                <button onClick={() => onShare(name, desc)} className="p-2.5 rounded-full bg-black/50 text-white">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 left-4 text-white">
              <span className="text-xs font-semibold text-stone-300">{governorate}</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display">
                {name} <span className="text-sm font-normal text-stone-300">({subtitle})</span>
              </h2>
            </div>
          </div>

          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 divide-y divide-stone-100">
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">{t('overview')}</h3>
              <p className="text-base text-stone-700 leading-relaxed font-sans">{desc}</p>
            </div>

            <div className="pt-5 space-y-2">
              <h3 className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">{t('history')}</h3>
              <p className="text-base text-stone-700 leading-relaxed font-sans">{history}</p>
            </div>

            <div className="pt-5 space-y-3">
              <h3 className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">{t('location')}</h3>
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center justify-between text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C8102E]" />
                  <span>{governorate}</span>
                  <span className="font-mono tabular-nums">{c.coordinates[0]}° N, {c.coordinates[1]}° E</span>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${c.coordinates[0]},${c.coordinates[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white border border-stone-200 font-semibold text-stone-800 flex items-center gap-1"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-5 space-y-2">
              <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider">{t('source')}</h3>
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between text-xs">
                <span>{language === 'ar' ? c.source.nameAr : c.source.nameEn}</span>
                <a href={c.source.url} target="_blank" rel="noopener noreferrer" className="text-[#C8102E] font-medium flex items-center gap-1">
                  <span>{t('officialWebsite')}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 bg-stone-50 border-t border-stone-100 flex justify-end">
            <button onClick={onClose} className="px-5 py-2 text-xs font-bold text-white bg-stone-900 rounded-xl">
              {t('close')}
            </button>
          </div>

        </div>
      </div>
    );
  }

  // Handle Museum View
  const m = item.data;
  const name = language === 'ar' ? m.nameAr : m.nameEn;
  const desc = language === 'ar' ? m.descriptionAr : m.descriptionEn;
  const hours = language === 'ar' ? m.hoursAr : m.hoursEn;
  const admission = language === 'ar' ? m.admissionAr : m.admissionEn;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-4 sm:my-8 flex flex-col max-h-[90vh]">
        <div className="relative aspect-16/9 bg-stone-900 shrink-0">
          <img src={m.image} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/30" />
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <button onClick={onClose} className="p-2 rounded-full bg-white/80 hover:bg-white text-stone-800 shadow-md">
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleFavorite(m.id, 'museum')}
                className={`p-2.5 rounded-full shadow-md ${isFav ? 'bg-white text-[#C8102E]' : 'bg-black/50 text-white'}`}
              >
                <Heart className={`w-4 h-4 ${isFav ? 'fill-[#C8102E]' : ''}`} />
              </button>
              <button onClick={() => onShare(name, desc)} className="p-2.5 rounded-full bg-black/50 text-white">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 left-4 text-white">
            <span className="text-xs font-semibold text-stone-300">{language === 'ar' ? m.cityNameAr : m.cityNameEn}</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display">{name}</h2>
          </div>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 divide-y divide-stone-100">
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">{t('overview')}</h3>
            <p className="text-base text-stone-700 leading-relaxed font-sans">{desc}</p>
          </div>

          <div className="pt-5 space-y-3">
            <h3 className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">ساعات العمل والزيارة</h3>
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-stone-800">
                <Clock className="w-4 h-4 text-[#C8102E]" />
                <span className="font-bold">{t('workingHours')}:</span>
                <span>{hours}</span>
              </div>
              <div className="flex items-center gap-2 text-stone-800">
                <Building2 className="w-4 h-4 text-[#C8102E]" />
                <span className="font-bold">{t('admission')}:</span>
                <span>{admission}</span>
              </div>
            </div>
          </div>

          <div className="pt-5 space-y-2">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider">{t('source')}</h3>
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between text-xs">
              <span>{language === 'ar' ? m.source.nameAr : m.source.nameEn}</span>
              <a href={m.officialUrl} target="_blank" rel="noopener noreferrer" className="text-[#C8102E] font-medium flex items-center gap-1">
                <span>{t('officialWebsite')}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="p-4 bg-stone-50 border-t border-stone-100 flex justify-end">
          <button onClick={onClose} className="px-5 py-2 text-xs font-bold text-white bg-stone-900 rounded-xl">
            {t('close')}
          </button>
        </div>

      </div>
    </div>
  );
};
