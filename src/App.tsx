import React, { useState, useEffect, useCallback } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { dataService } from './services/dataService';
import { Landmark, City, Museum, FavoriteItem, DailyDiscovery } from './types';

// Components
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SudaneseCommercialAudioSection } from './components/SudaneseCommercialAudioSection';
import { DailyDiscoverySection } from './components/DailyDiscoverySection';
import { BahrainVideoFeature } from './components/BahrainVideoFeature';
import { LandmarksSection } from './components/LandmarksSection';
import { CitiesSection } from './components/CitiesSection';
import { TimelineSection } from './components/TimelineSection';
import { HeritageSection } from './components/HeritageSection';
import { MuseumsSection } from './components/MuseumsSection';
import { MapView } from './components/MapView';
import { Footer } from './components/Footer';

// Modals
import { SearchModal } from './components/SearchModal';
import { FavoritesModal } from './components/FavoritesModal';
import { ShareModal } from './components/ShareModal';
import { DetailModal } from './components/DetailModal';
import { AboutModal } from './components/AboutModal';
import { AdminModal } from './components/AdminModal';

function AppContent() {
  const { language, t } = useLanguage();

  // Dynamic Data States
  const [landmarks, setLandmarks] = useState<Landmark[]>(() => dataService.getLandmarks());
  const [cities, setCities] = useState<City[]>(() => dataService.getCities());
  const [museums, setMuseums] = useState<Museum[]>(() => dataService.getMuseums());
  const [timeline] = useState(() => dataService.getTimeline());
  const [heritage] = useState(() => dataService.getHeritage());
  const [dailyDiscovery] = useState<DailyDiscovery>(() => dataService.getDailyDiscovery());

  // Favorites
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() => dataService.getFavorites());

  // Navigation State
  const [activeSection, setActiveSection] = useState('hero');

  // Modals
  const [searchOpen, setSearchOpen] = useState(false);
  const [initialSearchQuery, setInitialSearchQuery] = useState('');
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  // Detail Modal
  const [selectedDetail, setSelectedDetail] = useState<
    | { type: 'landmark'; data: Landmark }
    | { type: 'city'; data: City }
    | { type: 'museum'; data: Museum }
    | null
  >(null);

  // SEO & Deep-linking: Parse URL query parameters on initial page mount
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const queryParam = params.get('q') || params.get('search');
      const landmarkId = params.get('landmark');
      const cityId = params.get('city');
      const museumId = params.get('museum');

      if (queryParam) {
        setInitialSearchQuery(queryParam);
        setSearchOpen(true);
      } else if (landmarkId) {
        const found = landmarks.find((l) => l.id === landmarkId) || dataService.getLandmarkById(landmarkId);
        if (found) setSelectedDetail({ type: 'landmark', data: found });
      } else if (cityId) {
        const found = cities.find((c) => c.id === cityId) || dataService.getCityById(cityId);
        if (found) setSelectedDetail({ type: 'city', data: found });
      } else if (museumId) {
        const found = museums.find((m) => m.id === museumId) || dataService.getMuseumById(museumId);
        if (found) setSelectedDetail({ type: 'museum', data: found });
      }
    } catch {
      // Fallback gracefully if running in environment without URLSearchParams
    }
  }, [landmarks, cities, museums]);

  // Share Modal
  const [shareConfig, setShareConfig] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
  }>({
    isOpen: false,
    title: '',
    description: ''
  });

  // Refresh data when admin edits
  const handleDataRefresh = useCallback(() => {
    setLandmarks(dataService.getLandmarks());
    setCities(dataService.getCities());
    setMuseums(dataService.getMuseums());
  }, []);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Open Share helper
  const openShare = (title: string, description: string) => {
    setShareConfig({
      isOpen: true,
      title,
      description
    });
  };

  // Check if item is favorite
  const isFavorite = useCallback(
    (id: string) => favorites.some((f) => f.id === id),
    [favorites]
  );

  // Toggle favorite helper
  const handleToggleFavorite = useCallback(
    (item: {
      id: string;
      type: 'landmark' | 'city' | 'museum' | 'story';
      titleAr: string;
      titleEn: string;
      subtitleAr: string;
      subtitleEn: string;
      image: string;
    }) => {
      dataService.toggleFavorite({
        ...item,
        addedAt: Date.now()
      });
      setFavorites(dataService.getFavorites());
    },
    []
  );

  // Specific entity favorite toggles
  const toggleLandmarkFavorite = (l: Landmark) => {
    handleToggleFavorite({
      id: l.id,
      type: 'landmark',
      titleAr: l.nameAr,
      titleEn: l.nameEn,
      subtitleAr: l.cityNameAr,
      subtitleEn: l.cityNameEn,
      image: l.image
    });
  };

  const toggleCityFavorite = (c: City) => {
    handleToggleFavorite({
      id: c.id,
      type: 'city',
      titleAr: c.nameAr,
      titleEn: c.nameEn,
      subtitleAr: c.governorateAr,
      subtitleEn: c.governorateEn,
      image: c.image
    });
  };

  const toggleMuseumFavorite = (m: Museum) => {
    handleToggleFavorite({
      id: m.id,
      type: 'museum',
      titleAr: m.nameAr,
      titleEn: m.nameEn,
      subtitleAr: m.cityNameAr,
      subtitleEn: m.cityNameEn,
      image: m.image
    });
  };

  const toggleDailyFavorite = () => {
    handleToggleFavorite({
      id: dailyDiscovery.id,
      type: 'story',
      titleAr: dailyDiscovery.titleAr,
      titleEn: dailyDiscovery.titleEn,
      subtitleAr: dailyDiscovery.categoryAr,
      subtitleEn: dailyDiscovery.categoryEn,
      image: dailyDiscovery.image
    });
  };

  // Open item from favorites
  const handleSelectFromFavorites = (fav: FavoriteItem) => {
    if (fav.type === 'landmark') {
      const l = dataService.getLandmarkById(fav.id);
      if (l) setSelectedDetail({ type: 'landmark', data: l });
    } else if (fav.type === 'city') {
      const c = dataService.getCityById(fav.id);
      if (c) setSelectedDetail({ type: 'city', data: c });
    } else if (fav.type === 'museum') {
      const m = dataService.getMuseumById(fav.id);
      if (m) setSelectedDetail({ type: 'museum', data: m });
    }
  };

  // Detail Modal generic toggle
  const handleDetailToggleFavorite = (id: string, type: 'landmark' | 'city' | 'museum') => {
    if (type === 'landmark') {
      const l = landmarks.find((x) => x.id === id);
      if (l) toggleLandmarkFavorite(l);
    } else if (type === 'city') {
      const c = cities.find((x) => x.id === id);
      if (c) toggleCityFavorite(c);
    } else if (type === 'museum') {
      const m = museums.find((x) => x.id === id);
      if (m) toggleMuseumFavorite(m);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-[#C8102E] selection:text-white">
      
      {/* 1. Header with Top Bar Contract */}
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenFavorites={() => setFavoritesOpen(true)}
        onOpenAbout={() => setAboutOpen(true)}
        onOpenAdmin={() => setAdminOpen(true)}
        favoritesCount={favorites.length}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* 2. Hero Section */}
        <HeroSection onNavigate={handleNavigate} />

        {/* 3. Sudanese Commercial Male Voice Studio (صوت إعلاني حماسي بالعامية السودانية) */}
        <SudaneseCommercialAudioSection />

        {/* 4. Daily Discovery (اكتشاف اليوم) */}
        <DailyDiscoverySection
          discovery={dailyDiscovery}
          onOpenLandmark={(landmarkId) => {
            const l = landmarks.find((x) => x.id === landmarkId);
            if (l) setSelectedDetail({ type: 'landmark', data: l });
          }}
          onShare={openShare}
          isFavorite={isFavorite(dailyDiscovery.id)}
          onToggleFavorite={toggleDailyFavorite}
        />

        {/* 5. Bahrain Cities Video Feature (فيديو استكشاف مدن البحرين بصوت رجالي نقي بدون موسيقى وبدون صور نساء) */}
        <BahrainVideoFeature
          onSelectCityByName={(name) => {
            const found = cities.find(
              (c) => c.nameAr.includes(name) || name.includes(c.nameAr)
            );
            if (found) {
              setSelectedDetail({ type: 'city', data: found });
            }
          }}
        />

        {/* 5. Landmarks Section (معالم تستحق الاكتشاف) */}
        <LandmarksSection
          landmarks={landmarks}
          onSelectLandmark={(l) => setSelectedDetail({ type: 'landmark', data: l })}
          onShare={openShare}
          isFavorite={isFavorite}
          onToggleFavorite={toggleLandmarkFavorite}
        />

        {/* 5. Cities & Regions (مناطق ومدن البحرين) */}
        <CitiesSection
          cities={cities}
          onSelectCity={(c) => setSelectedDetail({ type: 'city', data: c })}
          isFavorite={isFavorite}
          onToggleFavorite={toggleCityFavorite}
        />

        {/* 6. History Timeline (البحرين عبر الزمن) */}
        <TimelineSection events={timeline} />

        {/* 7. Heritage Section (تراث البحرين) */}
        <HeritageSection heritage={heritage} />

        {/* 8. Museums Section (متاحف البحرين) */}
        <MuseumsSection
          museums={museums}
          onSelectMuseum={(m) => setSelectedDetail({ type: 'museum', data: m })}
          onShare={openShare}
          isFavorite={isFavorite}
          onToggleFavorite={toggleMuseumFavorite}
        />

        {/* 9. Interactive Map View (اكتشف البحرين على الخريطة) */}
        <MapView
          landmarks={landmarks}
          cities={cities}
          museums={museums}
          onSelectLandmark={(l) => setSelectedDetail({ type: 'landmark', data: l })}
          onSelectCity={(c) => setSelectedDetail({ type: 'city', data: c })}
          onSelectMuseum={(m) => setSelectedDetail({ type: 'museum', data: m })}
        />

      </main>

      {/* 10. Footer with Dedicated Credits */}
      <Footer
        onOpenAbout={() => setAboutOpen(true)}
        onOpenAdmin={() => setAdminOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* --- Modals & Overlays --- */}

      {/* Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        initialQuery={initialSearchQuery}
        onClose={() => {
          setSearchOpen(false);
          setInitialSearchQuery('');
        }}
        onSelectLandmark={(l) => setSelectedDetail({ type: 'landmark', data: l })}
        onSelectCity={(c) => setSelectedDetail({ type: 'city', data: c })}
        onSelectMuseum={(m) => setSelectedDetail({ type: 'museum', data: m })}
      />

      {/* Favorites Modal */}
      <FavoritesModal
        isOpen={favoritesOpen}
        onClose={() => setFavoritesOpen(false)}
        favorites={favorites}
        onRemoveFavorite={(id) => {
          dataService.toggleFavorite({ id } as FavoriteItem);
          setFavorites(dataService.getFavorites());
        }}
        onSelectItem={handleSelectFromFavorites}
      />

      {/* Share Modal */}
      <ShareModal
        isOpen={shareConfig.isOpen}
        onClose={() => setShareConfig((prev) => ({ ...prev, isOpen: false }))}
        title={shareConfig.title}
        description={shareConfig.description}
      />

      {/* Item Detail Modal */}
      <DetailModal
        item={selectedDetail}
        onClose={() => setSelectedDetail(null)}
        isFavorite={isFavorite}
        onToggleFavorite={handleDetailToggleFavorite}
        onShare={openShare}
      />

      {/* About Application Modal */}
      <AboutModal
        isOpen={aboutOpen}
        onClose={() => setAboutOpen(false)}
      />

      {/* Admin Dashboard Preview Modal */}
      <AdminModal
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        onDataUpdated={handleDataRefresh}
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
