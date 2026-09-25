import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  dir: 'rtl' | 'ltr';
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ar: {
    appTitle: 'اكتشف البحرين',
    appSubtitle: 'البحرين كما لم تعرفها من قبل',
    exploreNow: 'استكشف البحرين',
    map: 'الخريطة',
    landmarks: 'المعالم',
    cities: 'المدن والمناطق',
    museums: 'المتاحف',
    history: 'التاريخ',
    heritage: 'التراث الأصيل',
    dailyDiscovery: 'اكتشاف اليوم',
    discoverStory: 'اكتشف القصة',
    featuredLandmarks: 'معالم تستحق الاكتشاف',
    citiesAndAreas: 'مناطق ومدن البحرين',
    historyAcrossTime: 'البحرين عبر الزمن',
    discoverOnMap: 'اكتشف البحرين على الخريطة',
    searchPlaceholder: 'ابحث في المدن، المعالم، المتاحف، التراث...',
    favorites: 'مفضلتي',
    saved: 'محفوظ',
    save: 'حفظ',
    share: 'مشاركة',
    source: 'المصدر الموثق',
    officialWebsite: 'الموقع الرسمي',
    workingHours: 'ساعات العمل',
    admission: 'رسوم الدخول',
    location: 'الموقع',
    nearbyPlaces: 'أماكن قريبة',
    story: 'القصة والتاريخ',
    overview: 'نبذة عن المعلم',
    all: 'الكل',
    historyCategory: 'تاريخ وتراث',
    archaeologicalCategory: 'مواقع أثرية',
    cultureCategory: 'ثقافة وفنون',
    seaCategory: 'بحر وشواطئ',
    modernCategory: 'معالم حديثة',
    religiousCategory: 'معالم دينية',
    natureCategory: 'طبيعة',
    about: 'عن التطبيق',
    adminDashboard: 'لوحة الإدارة',
    installApp: 'تثبيت التطبيق',
    copyLink: 'نسخ الرابط',
    copied: 'تم النسخ بنجاح',
    noFavoritesYet: 'لم تقم بحفظ أي معالم أو مدن بعد.',
    startExploring: 'ابدأ الاستكشاف الآن واضغط على أيقونة القلب لحفظ أماكنك المفضلة.',
    dedicationTitle: 'إهداء إلى مملكة البحرين',
    dedicationText: 'إلى مملكة البحرين وشعبها الكريم، إهداءً محبةً وتقديرًا، واحتفاءً بتاريخها وثقافتها وتراثها.',
    designerCredit: 'تصميم كمال جعفر زكريا',
    whatsappContact: 'واتساب: 00249919980435',
    close: 'إغلاق',
    viewDetails: 'اكتشف المزيد'
  },
  en: {
    appTitle: 'Discover Bahrain',
    appSubtitle: 'Bahrain as you’ve never known it before',
    exploreNow: 'Explore Bahrain',
    map: 'Interactive Map',
    landmarks: 'Landmarks',
    cities: 'Cities & Regions',
    museums: 'Museums',
    history: 'History',
    heritage: 'Authentic Heritage',
    dailyDiscovery: 'Discovery of the Day',
    discoverStory: 'Discover the Story',
    featuredLandmarks: 'Landmarks Worth Discovering',
    citiesAndAreas: 'Cities & Regions of Bahrain',
    historyAcrossTime: 'Bahrain Across Time',
    discoverOnMap: 'Discover Bahrain on the Map',
    searchPlaceholder: 'Search cities, landmarks, museums, heritage...',
    favorites: 'My Favorites',
    saved: 'Saved',
    save: 'Save',
    share: 'Share',
    source: 'Verified Source',
    officialWebsite: 'Official Website',
    workingHours: 'Working Hours',
    admission: 'Admission',
    location: 'Location',
    nearbyPlaces: 'Nearby Places',
    story: 'Story & Narrative',
    overview: 'Overview',
    all: 'All',
    historyCategory: 'History & Heritage',
    archaeologicalCategory: 'Archaeology',
    cultureCategory: 'Culture & Arts',
    seaCategory: 'Sea & Beaches',
    modernCategory: 'Modern Icons',
    religiousCategory: 'Religious Sites',
    natureCategory: 'Nature',
    about: 'About App',
    adminDashboard: 'Admin Preview',
    installApp: 'Install App',
    copyLink: 'Copy Link',
    copied: 'Link copied to clipboard',
    noFavoritesYet: 'You haven’t saved any landmarks or cities yet.',
    startExploring: 'Start exploring and tap the heart icon to save your favorite destinations.',
    dedicationTitle: 'Dedication to the Kingdom of Bahrain',
    dedicationText: 'To the Kingdom of Bahrain and its gracious people, dedicated in admiration, affection, and celebration of its timeless heritage and culture.',
    designerCredit: 'Designed by Kamal Jaafar Zakaria',
    whatsappContact: 'WhatsApp: 00249919980435',
    close: 'Close',
    viewDetails: 'Discover More'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('ar');

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', language);
    root.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        dir: language === 'ar' ? 'rtl' : 'ltr',
        setLanguage,
        toggleLanguage,
        t
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
