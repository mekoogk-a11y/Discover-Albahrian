import {
  CITIES_DATA,
  LANDMARKS_DATA,
  MUSEUMS_DATA,
  TIMELINE_DATA,
  HERITAGE_DATA,
  DAILY_DISCOVERY_DATA,
  HOSPITALITY_DATA,
  TRAVEL_GUIDE_FAQS
} from '../data/bahrainData';
import {
  City,
  Landmark,
  Museum,
  TimelineEvent,
  HeritageTopic,
  DailyDiscovery,
  FavoriteItem,
  ContentStatus,
  HospitalityItem,
  HospitalityCategory,
  TravelGuideFAQ
} from '../types';

const STORAGE_KEY_FAVORITES = 'discover_bahrain_favorites_v1';
const STORAGE_KEY_MUSEUMS = 'discover_bahrain_museums_v1';
const STORAGE_KEY_LANDMARKS = 'discover_bahrain_landmarks_v1';

class DataService {
  private cities: City[] = [...CITIES_DATA];
  private landmarks: Landmark[] = [...LANDMARKS_DATA];
  private museums: Museum[] = [...MUSEUMS_DATA];
  private timeline: TimelineEvent[] = [...TIMELINE_DATA];
  private heritage: HeritageTopic[] = [...HERITAGE_DATA];
  private dailyDiscovery: DailyDiscovery = { ...DAILY_DISCOVERY_DATA };
  private hospitality: HospitalityItem[] = [...HOSPITALITY_DATA];
  private faqs: TravelGuideFAQ[] = [...TRAVEL_GUIDE_FAQS];

  constructor() {
    this.loadPersistedAdminOverrides();
  }

  private loadPersistedAdminOverrides() {
    if (typeof window === 'undefined') return;
    try {
      const savedMuseums = localStorage.getItem(STORAGE_KEY_MUSEUMS);
      if (savedMuseums) {
        const parsed = JSON.parse(savedMuseums);
        this.museums = parsed;
      }

      const savedLandmarks = localStorage.getItem(STORAGE_KEY_LANDMARKS);
      if (savedLandmarks) {
        const parsed = JSON.parse(savedLandmarks);
        this.landmarks = parsed;
      }
    } catch {
      // Local storage unavailable or parse error; fallback to defaults
    }
  }

  // --- Read Operations ---
  public getCities(): City[] {
    return this.cities.filter((c) => c.status === 'published');
  }

  public getAllCities(): City[] {
    return this.cities;
  }

  public getCityById(id: string): City | undefined {
    return this.cities.find((c) => c.id === id);
  }

  public getLandmarks(): Landmark[] {
    return this.landmarks.filter((l) => l.status === 'published');
  }

  public getAllLandmarks(): Landmark[] {
    return this.landmarks;
  }

  public getLandmarkById(id: string): Landmark | undefined {
    return this.landmarks.find((l) => l.id === id);
  }

  public getMuseums(): Museum[] {
    return this.museums.filter((m) => m.status === 'published');
  }

  public getAllMuseums(): Museum[] {
    return this.museums;
  }

  public getMuseumById(id: string): Museum | undefined {
    return this.museums.find((m) => m.id === id);
  }

  public getTimeline(): TimelineEvent[] {
    return [...this.timeline].sort((a, b) => a.yearSort - b.yearSort);
  }

  public getHeritage(): HeritageTopic[] {
    return this.heritage.filter((h) => h.status === 'published');
  }

  public getDailyDiscovery(): DailyDiscovery {
    return this.dailyDiscovery;
  }

  // Hospitality & Travel categories
  public getHospitalityItems(type?: HospitalityCategory): HospitalityItem[] {
    if (!type) return this.hospitality;
    return this.hospitality.filter((item) => item.type === type);
  }

  public getHotels(): HospitalityItem[] {
    return this.getHospitalityItems('hotel');
  }

  public getRestaurants(): HospitalityItem[] {
    return this.getHospitalityItems('restaurant');
  }

  public getSouqs(): HospitalityItem[] {
    return this.getHospitalityItems('souq');
  }

  public getBeaches(): HospitalityItem[] {
    return this.getHospitalityItems('beach');
  }

  public getActivities(): HospitalityItem[] {
    return this.getHospitalityItems('activity');
  }

  public getHospitalityItemById(id: string): HospitalityItem | undefined {
    return this.hospitality.find((item) => item.id === id);
  }

  public getTravelGuideFAQs(category?: string): TravelGuideFAQ[] {
    if (!category || category === 'all') return this.faqs;
    return this.faqs.filter((faq) => faq.category === category);
  }

  // --- Admin Updates ---
  public updateMuseumHours(museumId: string, hoursAr: string, hoursEn: string): boolean {
    const museum = this.museums.find((m) => m.id === museumId);
    if (!museum) return false;
    museum.hoursAr = hoursAr;
    museum.hoursEn = hoursEn;
    this.persistMuseums();
    return true;
  }

  public updateLandmarkStatus(landmarkId: string, status: ContentStatus): boolean {
    const landmark = this.landmarks.find((l) => l.id === landmarkId);
    if (!landmark) return false;
    landmark.status = status;
    this.persistLandmarks();
    return true;
  }

  public updateMuseumStatus(museumId: string, status: ContentStatus): boolean {
    const museum = this.museums.find((m) => m.id === museumId);
    if (!museum) return false;
    museum.status = status;
    this.persistMuseums();
    return true;
  }

  private persistMuseums() {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY_MUSEUMS, JSON.stringify(this.museums));
    } catch {
      // Ignored
    }
  }

  private persistLandmarks() {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY_LANDMARKS, JSON.stringify(this.landmarks));
    } catch {
      // Ignored
    }
  }

  // --- Favorites Management (Local Storage) ---
  public getFavorites(): FavoriteItem[] {
    if (typeof window === 'undefined') return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY_FAVORITES);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  public isFavorite(id: string): boolean {
    const favs = this.getFavorites();
    return favs.some((f) => f.id === id);
  }

  public toggleFavorite(item: FavoriteItem): boolean {
    const favs = this.getFavorites();
    const index = favs.findIndex((f) => f.id === item.id);
    let isNowFav = false;
    if (index > -1) {
      favs.splice(index, 1);
      isNowFav = false;
    } else {
      favs.unshift({ ...item, addedAt: Date.now() });
      isNowFav = true;
    }
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(favs));
      } catch {
        // Ignored
      }
    }
    return isNowFav;
  }

  // --- Global Unified Search ---
  public search(query: string, lang: 'ar' | 'en' = 'ar') {
    const q = query.trim().toLowerCase();
    if (!q) {
      return {
        cities: [],
        landmarks: [],
        museums: [],
        hotels: [],
        restaurants: [],
        souqs: [],
        beaches: [],
        activities: [],
        heritage: [],
        timeline: [],
        faqs: []
      };
    }

    const matchesCity = (c: City) =>
      c.nameAr.toLowerCase().includes(q) ||
      c.nameEn.toLowerCase().includes(q) ||
      c.descriptionAr.toLowerCase().includes(q) ||
      c.descriptionEn.toLowerCase().includes(q) ||
      c.governorateAr.toLowerCase().includes(q);

    const matchesLandmark = (l: Landmark) =>
      l.nameAr.toLowerCase().includes(q) ||
      l.nameEn.toLowerCase().includes(q) ||
      l.overviewAr.toLowerCase().includes(q) ||
      l.overviewEn.toLowerCase().includes(q) ||
      l.storyAr.toLowerCase().includes(q) ||
      l.cityNameAr.toLowerCase().includes(q);

    const matchesMuseum = (m: Museum) =>
      m.nameAr.toLowerCase().includes(q) ||
      m.nameEn.toLowerCase().includes(q) ||
      m.descriptionAr.toLowerCase().includes(q) ||
      m.cityNameAr.toLowerCase().includes(q);

    const matchesHospitality = (item: HospitalityItem, targetType: HospitalityCategory) =>
      item.type === targetType &&
      (item.nameAr.toLowerCase().includes(q) ||
        item.nameEn.toLowerCase().includes(q) ||
        item.descriptionAr.toLowerCase().includes(q) ||
        item.cityNameAr.toLowerCase().includes(q) ||
        item.categoryLabelAr.toLowerCase().includes(q) ||
        item.featuresAr.some((f) => f.toLowerCase().includes(q)));

    const matchesHeritage = (h: HeritageTopic) =>
      h.titleAr.toLowerCase().includes(q) ||
      h.titleEn.toLowerCase().includes(q) ||
      h.summaryAr.toLowerCase().includes(q) ||
      h.fullContentAr.toLowerCase().includes(q);

    const matchesTimeline = (t: TimelineEvent) =>
      t.titleAr.toLowerCase().includes(q) ||
      t.titleEn.toLowerCase().includes(q) ||
      t.eraAr.toLowerCase().includes(q) ||
      t.descriptionAr.toLowerCase().includes(q);

    const matchesFAQ = (faq: TravelGuideFAQ) =>
      faq.questionAr.toLowerCase().includes(q) ||
      faq.questionEn.toLowerCase().includes(q) ||
      faq.answerAr.toLowerCase().includes(q) ||
      faq.answerEn.toLowerCase().includes(q);

    return {
      cities: this.getCities().filter(matchesCity),
      landmarks: this.getLandmarks().filter(matchesLandmark),
      museums: this.getMuseums().filter(matchesMuseum),
      hotels: this.hospitality.filter((item) => matchesHospitality(item, 'hotel')),
      restaurants: this.hospitality.filter((item) => matchesHospitality(item, 'restaurant')),
      souqs: this.hospitality.filter((item) => matchesHospitality(item, 'souq')),
      beaches: this.hospitality.filter((item) => matchesHospitality(item, 'beach')),
      activities: this.hospitality.filter((item) => matchesHospitality(item, 'activity')),
      heritage: this.getHeritage().filter(matchesHeritage),
      timeline: this.getTimeline().filter(matchesTimeline),
      faqs: this.faqs.filter(matchesFAQ)
    };
  }
}

export const dataService = new DataService();
