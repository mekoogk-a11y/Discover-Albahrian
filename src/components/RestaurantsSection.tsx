import React, { useState, useMemo } from 'react';
import { Restaurant, RestaurantCuisine } from '../types';
import { useLanguage } from '../context/LanguageContext';
import {
  UtensilsCrossed,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  ExternalLink,
  Heart,
  Share2,
  ArrowRight
} from 'lucide-react';

interface RestaurantsSectionProps {
  restaurants: Restaurant[];
  onSelectRestaurant: (restaurant: Restaurant) => void;
  onOpenAddRestaurant: () => void;
  onShare: (title: string, text: string) => void;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string, type: 'restaurant', titleAr: string, titleEn: string, subtitleAr: string, subtitleEn: string, image: string) => void;
}

export const RestaurantsSection: React.FC<RestaurantsSectionProps> = ({
  restaurants,
  onSelectRestaurant,
  onOpenAddRestaurant,
  onShare,
  isFavorite,
  onToggleFavorite
}) => {
  const { language } = useLanguage();
  const [selectedCuisine, setSelectedCuisine] = useState<string>('all');

  const cuisines: { id: string; labelAr: string; labelEn: string; icon: string }[] = [
    { id: 'all', labelAr: 'الكل', labelEn: 'All Cuisines', icon: '🍽️' },
    { id: 'bahraini', labelAr: 'مأكولات بحرينية', labelEn: 'Bahraini', icon: '🇧🇭' },
    { id: 'arab', labelAr: 'عربية وشرقية', labelEn: 'Arab & Levantine', icon: '🥙' },
    { id: 'asian', labelAr: 'آسيوية', labelEn: 'Asian', icon: '🥢' },
    { id: 'luxury', labelAr: 'مطاعم فاخرة', labelEn: 'Fine Dining', icon: '👑' },
    { id: 'family', labelAr: 'عائلية وشعبية', labelEn: 'Family & Casual', icon: '👨‍👩‍👧‍👦' },
    { id: 'cafe', labelAr: 'مقاهٍ وكافيهات', labelEn: 'Cafes', icon: '☕' },
    { id: 'sweets', labelAr: 'حلويات ومعجنات', labelEn: 'Sweets & Bakeries', icon: '🍯' }
  ];

  const filteredRestaurants = useMemo(() => {
    if (selectedCuisine === 'all') return restaurants;
    return restaurants.filter((r) => r.cuisineType === selectedCuisine);
  }, [restaurants, selectedCuisine]);

  return (
    <section id="restaurants" className="py-16 bg-[#FAF8F5] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C8102E] mb-2">
              <UtensilsCrossed className="w-4 h-4 text-[#C8102E]" />
              <span>{language === 'ar' ? 'دليل مطاعم ومقاهي البحرين' : 'Bahrain Dining & Culinary Guide'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-stone-900 tracking-tight">
              {language === 'ar' ? 'نكهات أصيلة وتجارب طعام عالمية' : 'Authentic Flavors & World-Class Gastronomy'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-2xl">
              {language === 'ar'
                ? 'من الإفطار البحريني العريق في سوق المنامة القديم إلى أرقى المطاعم العالمية ذات الإطلالات البحرية في خليج البحرين والعدلية.'
                : 'From legendary local breakfasts in old alleys to award-winning fine dining restaurants across Bahrain Bay and Adliya.'}
            </p>
          </div>

          <button
            onClick={onOpenAddRestaurant}
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#C8102E] hover:bg-[#A50D25] shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <span>+</span>
            <span>{language === 'ar' ? 'أضف مطعمك أو مقهاك' : 'List Your Restaurant'}</span>
          </button>
        </div>

        {/* Cuisine Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {cuisines.map((c) => {
            const isActive = selectedCuisine === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCuisine(c.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#C8102E] text-white shadow-xs'
                    : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                }`}
              >
                <span>{c.icon}</span>
                <span>{language === 'ar' ? c.labelAr : c.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants.map((res) => {
            const isFav = isFavorite(res.id);
            const name = language === 'ar' ? res.nameAr : res.nameEn;
            const area = language === 'ar' ? res.areaAr : res.areaEn;
            const cuisineLabel = language === 'ar' ? res.cuisineLabelAr : res.cuisineLabelEn;
            const desc = language === 'ar' ? res.descriptionAr : res.descriptionEn;
            const hours = language === 'ar' ? res.workingHoursAr : res.workingHoursEn;

            return (
              <article
                key={res.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Visual Image */}
                <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                  <img
                    src={res.image}
                    alt={language === 'ar' ? `مطعم ${res.nameAr} في ${res.areaAr}` : `${res.nameEn} in ${res.areaEn}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/65 via-transparent to-transparent" />

                  {/* Cuisine Tag */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-stone-900 text-xs font-bold shadow-xs">
                    {cuisineLabel}
                  </div>

                  {/* Favorite & Share */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <button
                      onClick={() =>
                        onToggleFavorite(
                          res.id,
                          'restaurant',
                          res.nameAr,
                          res.nameEn,
                          res.areaAr,
                          res.areaEn,
                          res.image
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

                  {/* Location badge on bottom */}
                  <div className="absolute bottom-3 right-3 left-3 text-white">
                    <div className="flex items-center gap-1 text-xs text-stone-200 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                      <span>{area}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-display text-stone-900 group-hover:text-[#C8102E] transition-colors line-clamp-1">
                      {name}
                    </h3>
                    <p className="mt-2 text-sm text-stone-600 leading-relaxed line-clamp-3">
                      {desc}
                    </p>

                    <div className="mt-3 flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#C8102E]" />
                      <span>{hours}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectRestaurant(res)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#C8102E] hover:text-[#A50D25] transition-colors"
                    >
                      <span>{language === 'ar' ? 'عرض التفاصيل' : 'View Details'}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </button>

                    <div className="flex items-center gap-1.5">
                      {res.phone && (
                        <a
                          href={`tel:${res.phone}`}
                          className="p-2 rounded-xl bg-stone-100 hover:bg-[#C8102E] text-stone-700 hover:text-white transition-colors"
                          title={language === 'ar' ? `اتصال: ${res.phone}` : `Call: ${res.phone}`}
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {res.whatsapp && (
                        <a
                          href={`https://wa.me/${res.whatsapp.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white transition-colors"
                          title="WhatsApp"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${res.coordinates[0]},${res.coordinates[1]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-stone-100 hover:bg-stone-800 text-stone-700 hover:text-white transition-colors"
                        title={language === 'ar' ? 'الموقع على الخريطة' : 'Map'}
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
