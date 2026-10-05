import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { dataService } from '../services/dataService';
import { Hotel, Landmark, Restaurant } from '../types';
import {
  Sparkles,
  X,
  Calendar,
  Compass,
  UtensilsCrossed,
  Hotel as HotelIcon,
  Clock,
  MapPin,
  Copy,
  Check,
  Printer,
  ChevronRight
} from 'lucide-react';

interface SmartTouristAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectHotel?: (h: Hotel) => void;
  onSelectLandmark?: (l: Landmark) => void;
  onSelectRestaurant?: (r: Restaurant) => void;
}

export const SmartTouristAssistantModal: React.FC<SmartTouristAssistantModalProps> = ({
  isOpen,
  onClose,
  onSelectHotel,
  onSelectLandmark,
  onSelectRestaurant
}) => {
  const { language } = useLanguage();

  const [days, setDays] = useState<number>(3);
  const [travelerType, setTravelerType] = useState<'family' | 'luxury' | 'culture' | 'budget'>('family');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const itinerary = dataService.generateItinerary({
    days,
    travelerType,
    language
  });

  const handleCopyPlan = () => {
    let text = `${language === 'ar' ? '🇧🇭 برنامجك السياحي المقترح - اكتشف البحرين' : '🇧🇭 Your Bahrain Itinerary - Discover Bahrain'}\n`;
    text += `${language === 'ar' ? 'المدة:' : 'Duration:'} ${days} ${language === 'ar' ? 'أيام' : 'Days'} | ${language === 'ar' ? 'النمط:' : 'Type:'} ${travelerType}\n\n`;
    if (itinerary.suggestedHotel) {
      text += `${language === 'ar' ? '🏨 الفندق المقترح للإقامة:' : '🏨 Suggested Hotel:'} ${
        language === 'ar' ? itinerary.suggestedHotel.nameAr : itinerary.suggestedHotel.nameEn
      } (${itinerary.suggestedHotel.areaAr})\n\n`;
    }

    itinerary.days.forEach((d) => {
      text += `--- ${language === 'ar' ? d.titleAr : d.titleEn} ---\n`;
      text += `☀️ الصباح (${d.morning.time}): ${d.morning.activityAr}\n`;
      text += `🍽️ الغداء (${d.lunch.time}): ${d.lunch.activityAr}\n`;
      text += `🏛️ بعد الظهر (${d.afternoon.time}): ${d.afternoon.activityAr}\n`;
      text += `🌙 المساء (${d.evening.time}): ${d.evening.activityAr}\n\n`;
    });

    text += `https://discover-albahrian.vercel.app/`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-4 sm:my-8 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-stone-100 flex items-center justify-between bg-gradient-to-r from-stone-900 to-stone-850 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#C8102E] flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-5 h-5 text-amber-200 animate-pulse" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white">
                {language === 'ar' ? 'مساعد Discover Bahrain الذكي' : 'Discover Bahrain Itinerary Assistant'}
              </h3>
              <p className="text-xs text-stone-300">
                {language === 'ar'
                  ? 'تخطيط مسارات سياحية موثوقة ومبنية حصراً على بيانات معالم وفنادق ومطاعم البحرين'
                  : 'Tailored travel schedules verified from authentic Bahrain attractions, hotels & dining'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 bg-stone-50/50">
          
          {/* Form controls */}
          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs space-y-4">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
              {language === 'ar' ? 'حدّد رغباتك لإنشاء البرنامج السياحي:' : 'Customize Your Travel Itinerary:'}
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Days selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>{language === 'ar' ? 'عدد أيام الزيارة:' : 'Trip Duration:'}</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4, 5].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDays(d)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all ${
                        days === d
                          ? 'bg-[#C8102E] text-white shadow-xs'
                          : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      {d} {language === 'ar' ? (d === 1 ? 'يوم' : d === 2 ? 'يومان' : 'أيام') : 'Days'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Traveler Type */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>{language === 'ar' ? 'نوع الرحلة والاهتمام:' : 'Trip Style:'}</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'family', labelAr: '👨‍👩‍👧‍👦 عائلي', labelEn: 'Family' },
                    { id: 'luxury', labelAr: '👑 فاخر', labelEn: 'Luxury' },
                    { id: 'culture', labelAr: '🏛️ تراثي وثقافي', labelEn: 'Heritage' },
                    { id: 'budget', labelAr: '💼 اقتصادي وخفيف', labelEn: 'Budget' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTravelerType(t.id as any)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all ${
                        travelerType === t.id
                          ? 'bg-[#C8102E] text-white shadow-xs'
                          : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      {language === 'ar' ? t.labelAr : t.labelEn}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Suggested Hotel Banner */}
          {itinerary.suggestedHotel && (
            <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/20">
                  <img
                    src={itinerary.suggestedHotel.image}
                    alt={itinerary.suggestedHotel.nameAr}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[11px] text-amber-300 font-bold uppercase tracking-wider block">
                    {language === 'ar' ? '🏨 الفندق المقترح للإقامة أثناء الرحلة:' : '🏨 Suggested Base Hotel:'}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {language === 'ar' ? itinerary.suggestedHotel.nameAr : itinerary.suggestedHotel.nameEn}
                  </h4>
                  <span className="text-xs text-stone-300">
                    {language === 'ar' ? itinerary.suggestedHotel.areaAr : itinerary.suggestedHotel.areaEn} · {itinerary.suggestedHotel.stars}★
                  </span>
                </div>
              </div>

              {onSelectHotel && (
                <button
                  onClick={() => {
                    onClose();
                    onSelectHotel(itinerary.suggestedHotel);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#C8102E] hover:bg-[#A50D25] text-white transition-colors shrink-0"
                >
                  {language === 'ar' ? 'عرض الفندق' : 'View Hotel'}
                </button>
              )}
            </div>
          )}

          {/* Day By Day Plan */}
          <div className="space-y-4">
            {itinerary.days.map((day) => (
              <div
                key={day.dayNumber}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-xs space-y-4"
              >
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <h4 className="text-base sm:text-lg font-bold font-display text-stone-900 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-[#C8102E]/10 text-[#C8102E] flex items-center justify-center text-xs font-black">
                      {day.dayNumber}
                    </span>
                    <span>{language === 'ar' ? day.titleAr : day.titleEn}</span>
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  {/* Morning */}
                  <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/70 space-y-1">
                    <div className="flex items-center justify-between text-amber-900 font-bold">
                      <span className="flex items-center gap-1">
                        <span>☀️</span>
                        <span>{language === 'ar' ? 'الصباح' : 'Morning'}</span>
                      </span>
                      <span className="font-mono text-xs">{day.morning.time}</span>
                    </div>
                    <p className="text-stone-700 font-medium leading-relaxed">
                      {language === 'ar' ? day.morning.activityAr : day.morning.activityEn}
                    </p>
                  </div>

                  {/* Lunch */}
                  <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200/70 space-y-1">
                    <div className="flex items-center justify-between text-rose-900 font-bold">
                      <span className="flex items-center gap-1">
                        <UtensilsCrossed className="w-3.5 h-3.5 text-[#C8102E]" />
                        <span>{language === 'ar' ? 'وجبة الغداء' : 'Lunch'}</span>
                      </span>
                      <span className="font-mono text-xs">{day.lunch.time}</span>
                    </div>
                    <p className="text-stone-700 font-medium leading-relaxed">
                      {language === 'ar' ? day.lunch.activityAr : day.lunch.activityEn}
                    </p>
                  </div>

                  {/* Afternoon */}
                  <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/70 space-y-1">
                    <div className="flex items-center justify-between text-blue-900 font-bold">
                      <span className="flex items-center gap-1">
                        <Compass className="w-3.5 h-3.5 text-blue-700" />
                        <span>{language === 'ar' ? 'بعد الظهر' : 'Afternoon'}</span>
                      </span>
                      <span className="font-mono text-xs">{day.afternoon.time}</span>
                    </div>
                    <p className="text-stone-700 font-medium leading-relaxed">
                      {language === 'ar' ? day.afternoon.activityAr : day.afternoon.activityEn}
                    </p>
                  </div>

                  {/* Evening */}
                  <div className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-200/70 space-y-1">
                    <div className="flex items-center justify-between text-purple-900 font-bold">
                      <span className="flex items-center gap-1">
                        <span>🌙</span>
                        <span>{language === 'ar' ? 'المساء والعشاء' : 'Evening & Dinner'}</span>
                      </span>
                      <span className="font-mono text-xs">{day.evening.time}</span>
                    </div>
                    <p className="text-stone-700 font-medium leading-relaxed">
                      {language === 'ar' ? day.evening.activityAr : day.evening.activityEn}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-stone-200 bg-white flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyPlan}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{language === 'ar' ? 'تم نسخ البرنامج!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-stone-600" />
                  <span>{language === 'ar' ? 'نسخ الخطة' : 'Copy Plan'}</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-stone-600" />
              <span>{language === 'ar' ? 'طباعة البرنامج' : 'Print'}</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl text-xs font-bold text-white bg-stone-900 hover:bg-black transition-colors"
          >
            {language === 'ar' ? 'إغلاق' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
