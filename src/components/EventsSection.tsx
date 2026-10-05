import React, { useState, useMemo } from 'react';
import { BahrainEvent, EventTimelineCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';
import {
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  CalendarPlus,
  Share2,
  Sparkles,
  Check
} from 'lucide-react';

interface EventsSectionProps {
  events: BahrainEvent[];
  onShare: (title: string, text: string) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ events, onShare }) => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('all');
  const [addedCalendarId, setAddedCalendarId] = useState<string | null>(null);

  const tabs: { id: string; labelAr: string; labelEn: string }[] = [
    { id: 'all', labelAr: 'جميع الفعاليات', labelEn: 'All Events' },
    { id: 'today', labelAr: 'فعاليات اليوم', labelEn: "Today's Events" },
    { id: 'this_week', labelAr: 'فعاليات هذا الأسبوع', labelEn: 'This Week' },
    { id: 'upcoming', labelAr: 'الفعاليات القادمة الكبرى', labelEn: 'Upcoming Highlights' }
  ];

  const filteredEvents = useMemo(() => {
    if (activeTab === 'all') return events;
    return events.filter((e) => e.category === activeTab);
  }, [events, activeTab]);

  // Generate calendar download or Google Calendar link
  const handleAddToCalendar = (event: BahrainEvent) => {
    const title = language === 'ar' ? event.titleAr : event.titleEn;
    const details = language === 'ar' ? event.descriptionAr : event.descriptionEn;
    const location = language === 'ar' ? event.venueAr : event.venueEn;

    const startDate = event.dateISO.replace(/-/g, '') + 'T120000Z';
    const endDate = event.dateISO.replace(/-/g, '') + 'T180000Z';

    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(
      location
    )}`;

    window.open(googleCalUrl, '_blank', 'noopener,noreferrer');

    setAddedCalendarId(event.id);
    setTimeout(() => setAddedCalendarId(null), 3000);
  };

  return (
    <section id="events" className="py-16 bg-[#FDFBF7] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C8102E] mb-2">
              <Calendar className="w-4 h-4 text-[#C8102E]" />
              <span>{language === 'ar' ? 'أجندة فعاليات البحرين' : 'Bahrain Events & Seasons Calendar'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-stone-900 tracking-tight">
              {language === 'ar' ? 'فعاليات ثقافية، رياضية ومهرجانات ترفيهية' : 'Cultural Festivals, Grand Prix & Highlights'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-2xl">
              {language === 'ar'
                ? 'تابع أحدث وأبرز الفعاليات الرسمية المعتمدة في مملكة البحرين، من سباقات الفورمولا 1 العالمية إلى مهرجانات ربيع الثقافة ومهرجان التراث السنوي.'
                : 'Stay up to date with verified seasonal celebrations, global sports championships, and cultural festivals happening across the kingdom.'}
            </p>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#C8102E] text-white shadow-xs'
                    : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                }`}
              >
                {language === 'ar' ? tab.labelAr : tab.labelEn}
              </button>
            );
          })}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((evt) => {
            const title = language === 'ar' ? evt.titleAr : evt.titleEn;
            const dateStr = language === 'ar' ? evt.dateStrAr : evt.dateStrEn;
            const time = language === 'ar' ? evt.timeAr : evt.timeEn;
            const venue = language === 'ar' ? evt.venueAr : evt.venueEn;
            const desc = language === 'ar' ? evt.descriptionAr : evt.descriptionEn;
            const isAdded = addedCalendarId === evt.id;

            return (
              <article
                key={evt.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Visual */}
                <div className="relative aspect-16/9 overflow-hidden bg-stone-100">
                  <img
                    src={evt.image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />

                  {/* Date badge */}
                  <div className="absolute top-3 right-3 bg-[#C8102E] text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{dateStr}</span>
                  </div>

                  {/* Share button */}
                  <button
                    onClick={() => onShare(title, desc)}
                    className="absolute top-3 left-3 p-2 rounded-full bg-black/40 text-white hover:bg-white hover:text-stone-900 backdrop-blur-md transition-colors"
                    aria-label="Share"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>

                  {/* Venue badge */}
                  <div className="absolute bottom-3 right-3 left-3 text-white">
                    <div className="flex items-center gap-1 text-xs text-stone-200 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-amber-300" />
                      <span>{venue}</span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-display text-stone-900 group-hover:text-[#C8102E] transition-colors leading-snug">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm text-stone-600 leading-relaxed line-clamp-3">
                      {desc}
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-xs text-stone-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#C8102E]" />
                      <span>{time}</span>
                    </div>
                  </div>

                  {/* Actions: Add to Calendar, Official Link, Map */}
                  <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => handleAddToCalendar(evt)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-2xs ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-stone-900 hover:bg-[#C8102E] text-white'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{language === 'ar' ? 'تمت الإضافة للتقويم' : 'Added to Calendar'}</span>
                        </>
                      ) : (
                        <>
                          <CalendarPlus className="w-3.5 h-3.5" />
                          <span>{language === 'ar' ? 'إضافة إلى التقويم' : 'Add to Calendar'}</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={evt.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors"
                      >
                        <span>{language === 'ar' ? 'الموقع الرسمي' : 'Official Page'}</span>
                        <ExternalLink className="w-3 h-3 text-stone-500" />
                      </a>

                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${evt.coordinates[0]},${evt.coordinates[1]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-stone-100 hover:bg-stone-800 text-stone-700 hover:text-white transition-colors"
                        title={language === 'ar' ? 'الموقع على الخريطة' : 'Map'}
                      >
                        <MapPin className="w-3.5 h-3.5" />
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
