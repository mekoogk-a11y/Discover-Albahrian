import React, { useState, useMemo } from 'react';
import { Hotel } from '../types';
import { useLanguage } from '../context/LanguageContext';
import {
  Hotel as HotelIcon,
  Star,
  MapPin,
  ExternalLink,
  Phone,
  Heart,
  Share2,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface HotelsSectionProps {
  hotels: Hotel[];
  onSelectHotel: (hotel: Hotel) => void;
  onOpenAddHotel: () => void;
  onShare: (title: string, text: string) => void;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string, type: 'hotel', titleAr: string, titleEn: string, subtitleAr: string, subtitleEn: string, image: string) => void;
}

export const HotelsSection: React.FC<HotelsSectionProps> = ({
  hotels,
  onSelectHotel,
  onOpenAddHotel,
  onShare,
  isFavorite,
  onToggleFavorite
}) => {
  const { language } = useLanguage();
  const [selectedArea, setSelectedArea] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const areas = useMemo(() => {
    const unique = Array.from(new Set(hotels.map((h) => language === 'ar' ? h.areaAr : h.areaEn)));
    return ['all', ...unique];
  }, [hotels, language]);

  const filteredHotels = useMemo(() => {
    return hotels.filter((h) => {
      const areaMatch = selectedArea === 'all' || (language === 'ar' ? h.areaAr : h.areaEn) === selectedArea;
      const typeMatch = selectedType === 'all' || h.typeCategory === selectedType;
      return areaMatch && typeMatch;
    });
  }, [hotels, selectedArea, selectedType, language]);

  return (
    <section id="hotels" className="py-16 bg-[#FDFBF7] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C8102E] mb-2">
              <HotelIcon className="w-4 h-4 text-[#C8102E]" />
              <span>{language === 'ar' ? 'فنادق ومنتجعات البحرين' : 'Bahrain Luxury Hotels & Resorts'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-stone-900 tracking-tight">
              {language === 'ar' ? 'إقامة استثنائية وضيافة بحرينية أصيلة' : 'Exceptional Stays & Authentic Hospitality'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-2xl">
              {language === 'ar'
                ? 'استكشف أفخم الفنادق والمنتجعات الشاطئية الفاخرة والفنادق العائلية ذات التصنيف العالمي في أرقى مناطق المملكة.'
                : 'Discover premier 5-star beachfront resorts, heritage boutique stays, and premier family hotels across the kingdom.'}
            </p>
          </div>

          <button
            onClick={onOpenAddHotel}
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#C8102E] hover:bg-[#A50D25] shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <span>+</span>
            <span>{language === 'ar' ? 'أضف فندقك في الدليل' : 'List Your Hotel'}</span>
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 pb-2 mb-8">
          <button
            onClick={() => { setSelectedArea('all'); setSelectedType('all'); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedArea === 'all' && selectedType === 'all'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100'
            }`}
          >
            {language === 'ar' ? 'جميع الفنادق' : 'All Hotels'}
          </button>

          <button
            onClick={() => setSelectedType(selectedType === 'luxury' ? 'all' : 'luxury')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedType === 'luxury'
                ? 'bg-[#C8102E] text-white shadow-xs'
                : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100'
            }`}
          >
            {language === 'ar' ? '👑 فنادق فاخرة' : '👑 Luxury Hotels'}
          </button>

          <button
            onClick={() => setSelectedType(selectedType === 'resort' ? 'all' : 'resort')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedType === 'resort'
                ? 'bg-[#C8102E] text-white shadow-xs'
                : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100'
            }`}
          >
            {language === 'ar' ? '🏖️ منتجعات شاطئية' : '🏖️ Beach Resorts'}
          </button>

          <button
            onClick={() => setSelectedType(selectedType === 'family' ? 'all' : 'family')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedType === 'family'
                ? 'bg-[#C8102E] text-white shadow-xs'
                : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100'
            }`}
          >
            {language === 'ar' ? '👨‍👩‍👧‍👦 مناسب للعائلات' : '👨‍👩‍👧‍👦 Family Friendly'}
          </button>

          <button
            onClick={() => setSelectedType(selectedType === 'budget' ? 'all' : 'budget')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedType === 'budget'
                ? 'bg-[#C8102E] text-white shadow-xs'
                : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100'
            }`}
          >
            {language === 'ar' ? '💼 فنادق أعمال واقتصادية' : '💼 Business & Budget'}
          </button>
        </div>

        {/* Hotel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.map((hotel) => {
            const isFav = isFavorite(hotel.id);
            const name = language === 'ar' ? hotel.nameAr : hotel.nameEn;
            const area = language === 'ar' ? hotel.areaAr : hotel.areaEn;
            const desc = language === 'ar' ? hotel.descriptionAr : hotel.descriptionEn;

            return (
              <article
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Visual Image with Stars and Heart */}
                <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                  <img
                    src={hotel.image}
                    alt={language === 'ar' ? `فندق ${hotel.nameAr} في ${hotel.areaAr}` : `${hotel.nameEn} in ${hotel.areaEn}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/65 via-transparent to-transparent" />

                  {/* Rating / Stars badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{hotel.rating}</span>
                    <span className="text-stone-300">({hotel.stars}★)</span>
                  </div>

                  {/* Favorite & Share */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <button
                      onClick={() =>
                        onToggleFavorite(
                          hotel.id,
                          'hotel',
                          hotel.nameAr,
                          hotel.nameEn,
                          hotel.areaAr,
                          hotel.areaEn,
                          hotel.image
                        )
                      }
                      className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                        isFav
                          ? 'bg-white text-[#C8102E] shadow-sm'
                          : 'bg-black/40 text-white hover:bg-white hover:text-[#C8102E]'
                      }`}
                      aria-label="Save to favorites"
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-[#C8102E]' : ''}`} />
                    </button>

                    <button
                      onClick={() => onShare(name, desc)}
                      className="p-2 rounded-full bg-black/40 text-white hover:bg-white hover:text-stone-900 backdrop-blur-md transition-colors"
                      aria-label="Share"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Location badge on image */}
                  <div className="absolute bottom-3 right-3 left-3 text-white">
                    <div className="flex items-center gap-1 text-xs text-stone-200 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                      <span>{area}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-display text-stone-900 group-hover:text-[#C8102E] transition-colors line-clamp-1">
                      {name}
                    </h3>
                    <p className="mt-2 text-sm text-stone-600 leading-relaxed line-clamp-3">
                      {desc}
                    </p>

                    {/* Features chips */}
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {(language === 'ar' ? hotel.featuresAr : hotel.featuresEn).slice(0, 3).map((feat, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-stone-50 border border-stone-200/80 text-[11px] font-medium text-stone-700"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>{feat}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Buttons: View Details, Contact, Map */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectHotel(hotel)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#C8102E] hover:text-[#A50D25] transition-colors"
                    >
                      <span>{language === 'ar' ? 'عرض التفاصيل' : 'View Details'}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </button>

                    <div className="flex items-center gap-1.5">
                      <a
                        href={`tel:${hotel.phone}`}
                        className="p-2 rounded-xl bg-stone-100 hover:bg-[#C8102E] text-stone-700 hover:text-white transition-colors"
                        title={language === 'ar' ? `اتصل بالفندق: ${hotel.phone}` : `Call: ${hotel.phone}`}
                      >
                        <Phone className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${hotel.coordinates[0]},${hotel.coordinates[1]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-stone-100 hover:bg-stone-800 text-stone-700 hover:text-white transition-colors"
                        title={language === 'ar' ? 'الموقع على الخريطة' : 'Location on Map'}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
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
