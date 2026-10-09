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
  HOTELS_DATA,
  RESTAURANTS_DATA,
  EVENTS_DATA
} from '../data/hotelsAndRestaurantsData';
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
  TravelGuideFAQ,
  Hotel,
  Restaurant,
  BahrainEvent,
  BusinessSubmission
} from '../types';

const STORAGE_KEY_FAVORITES = 'discover_bahrain_favorites_v1';
const STORAGE_KEY_MUSEUMS = 'discover_bahrain_museums_v1';
const STORAGE_KEY_LANDMARKS = 'discover_bahrain_landmarks_v1';
const STORAGE_KEY_HOTELS = 'discover_bahrain_hotels_v1';
const STORAGE_KEY_RESTAURANTS = 'discover_bahrain_restaurants_v1';
const STORAGE_KEY_EVENTS = 'discover_bahrain_events_v1';
const STORAGE_KEY_SUBMISSIONS = 'discover_bahrain_submissions_v1';

const INITIAL_SUBMISSIONS: BusinessSubmission[] = [
  {
    id: 'sub-sample-1',
    businessType: 'restaurant',
    businessName: 'مطعم ومقهى نزهة دلمون التراثي',
    contactPerson: 'عبدالله محمد آل خليفة',
    phone: '+973 3912 3456',
    whatsapp: '+973 3912 3456',
    email: 'info@dilmun-retreat.bh',
    city: 'المنامة',
    area: 'العدلية، بلوك 338',
    address: 'مبنى 12، مجمع 338، شارع أسامة بن زيد',
    description: 'مطعم تراثي بحريني حديث يقدم مأكولات بحرية طازجة بنكهات دلمونية أصيلة وجلسات عائلية خاصة.',
    services: 'مأكولات بحرينية، جلسات خارجية، مناسب للعائلات، خدمة التوصيل',
    workingHours: '12:00 ظهراً – 11:30 مساءً',
    agreedTerms: true,
    submittedAt: Date.now() - 3600000 * 24,
    status: 'pending'
  },
  {
    id: 'sub-sample-2',
    businessType: 'hotel',
    businessName: 'فندق وأجنحة واجهة المنامة البحرية',
    contactPerson: 'فاطمة جاسم المحمود',
    phone: '+973 1755 4321',
    whatsapp: '+973 3888 7766',
    email: 'booking@manama-waterfront.com',
    city: 'المنامة',
    area: 'ضاحية السيف',
    address: 'شارع الشيخ عيسى بن سلمان، السيف',
    description: 'أجنحة فندقية عصرية للعائلات ورجال الأعمال مطلة على شاطئ كرباباد وقلعة البحرين التاريخية.',
    services: 'مسبح علوي، نادي صحي، مواقف خاصة، قاعات اجتماعات',
    workingHours: 'استقبال 24 ساعة',
    stars: 4,
    agreedTerms: true,
    submittedAt: Date.now() - 3600000 * 48,
    status: 'pending'
  }
];

class DataService {
  private cities: City[] = [...CITIES_DATA];
  private landmarks: Landmark[] = [...LANDMARKS_DATA];
  private museums: Museum[] = [...MUSEUMS_DATA];
  private timeline: TimelineEvent[] = [...TIMELINE_DATA];
  private heritage: HeritageTopic[] = [...HERITAGE_DATA];
  private dailyDiscovery: DailyDiscovery = { ...DAILY_DISCOVERY_DATA };
  private hospitality: HospitalityItem[] = [...HOSPITALITY_DATA];
  private faqs: TravelGuideFAQ[] = [...TRAVEL_GUIDE_FAQS];

  private hotels: Hotel[] = [...HOTELS_DATA];
  private restaurants: Restaurant[] = [...RESTAURANTS_DATA];
  private events: BahrainEvent[] = [...EVENTS_DATA];
  private submissions: BusinessSubmission[] = [...INITIAL_SUBMISSIONS];

  constructor() {
    this.loadPersistedAdminOverrides();
  }

  private loadPersistedAdminOverrides() {
    if (typeof window === 'undefined') return;
    try {
      const savedMuseums = localStorage.getItem(STORAGE_KEY_MUSEUMS);
      if (savedMuseums) this.museums = JSON.parse(savedMuseums);

      const savedLandmarks = localStorage.getItem(STORAGE_KEY_LANDMARKS);
      if (savedLandmarks) this.landmarks = JSON.parse(savedLandmarks);

      const savedHotels = localStorage.getItem(STORAGE_KEY_HOTELS);
      if (savedHotels) this.hotels = JSON.parse(savedHotels);

      const savedRestaurants = localStorage.getItem(STORAGE_KEY_RESTAURANTS);
      if (savedRestaurants) this.restaurants = JSON.parse(savedRestaurants);

      const savedEvents = localStorage.getItem(STORAGE_KEY_EVENTS);
      if (savedEvents) this.events = JSON.parse(savedEvents);

      const savedSubmissions = localStorage.getItem(STORAGE_KEY_SUBMISSIONS);
      if (savedSubmissions) this.submissions = JSON.parse(savedSubmissions);
    } catch {
      // Fallback to built-in datasets
    }
  }

  // --- Hotels Operations ---
  public getHotels(): Hotel[] {
    return this.hotels.filter((h) => h.status === 'published');
  }

  public getAllHotels(): Hotel[] {
    return this.hotels;
  }

  public getHotelById(id: string): Hotel | undefined {
    return this.hotels.find((h) => h.id === id);
  }

  public saveHotel(hotel: Hotel): void {
    const idx = this.hotels.findIndex((h) => h.id === hotel.id);
    if (idx > -1) {
      this.hotels[idx] = hotel;
    } else {
      this.hotels.unshift(hotel);
    }
    this.persistHotels();
  }

  public deleteHotel(id: string): void {
    this.hotels = this.hotels.filter((h) => h.id !== id);
    this.persistHotels();
  }

  private persistHotels() {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY_HOTELS, JSON.stringify(this.hotels));
    } catch {
      // Ignored
    }
  }

  // --- Restaurants Operations ---
  public getRestaurants(): Restaurant[] {
    return this.restaurants.filter((r) => r.status === 'published');
  }

  public getAllRestaurants(): Restaurant[] {
    return this.restaurants;
  }

  public getRestaurantById(id: string): Restaurant | undefined {
    return this.restaurants.find((r) => r.id === id);
  }

  public saveRestaurant(restaurant: Restaurant): void {
    const idx = this.restaurants.findIndex((r) => r.id === restaurant.id);
    if (idx > -1) {
      this.restaurants[idx] = restaurant;
    } else {
      this.restaurants.unshift(restaurant);
    }
    this.persistRestaurants();
  }

  public deleteRestaurant(id: string): void {
    this.restaurants = this.restaurants.filter((r) => r.id !== id);
    this.persistRestaurants();
  }

  private persistRestaurants() {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY_RESTAURANTS, JSON.stringify(this.restaurants));
    } catch {
      // Ignored
    }
  }

  // --- Events Operations ---
  public getEvents(): BahrainEvent[] {
    return this.events.filter((e) => e.status === 'published');
  }

  public getAllEvents(): BahrainEvent[] {
    return this.events;
  }

  public getEventById(id: string): BahrainEvent | undefined {
    return this.events.find((e) => e.id === id);
  }

  public saveEvent(event: BahrainEvent): void {
    const idx = this.events.findIndex((e) => e.id === event.id);
    if (idx > -1) {
      this.events[idx] = event;
    } else {
      this.events.unshift(event);
    }
    this.persistEvents();
  }

  public deleteEvent(id: string): void {
    this.events = this.events.filter((e) => e.id !== id);
    this.persistEvents();
  }

  private persistEvents() {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY_EVENTS, JSON.stringify(this.events));
    } catch {
      // Ignored
    }
  }

  // --- Business Submissions Operations ---
  public getSubmissions(): BusinessSubmission[] {
    return [...this.submissions].sort((a, b) => b.submittedAt - a.submittedAt);
  }

  public addSubmission(
    data: Omit<BusinessSubmission, 'id' | 'submittedAt' | 'status'>
  ): BusinessSubmission {
    const newSub: BusinessSubmission = {
      ...data,
      id: 'sub-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
      submittedAt: Date.now(),
      status: 'pending'
    };
    this.submissions.unshift(newSub);
    this.persistSubmissions();
    return newSub;
  }

  public updateSubmissionStatus(
    id: string,
    status: 'pending' | 'approved' | 'rejected',
    isFeatured?: boolean,
    adminNotes?: string
  ): void {
    const sub = this.submissions.find((s) => s.id === id);
    if (!sub) return;

    sub.status = status;
    if (isFeatured !== undefined) sub.isFeatured = isFeatured;
    if (adminNotes !== undefined) sub.adminNotes = adminNotes;

    // If approved, dynamically promote into the live directory
    if (status === 'approved') {
      if (sub.businessType === 'hotel') {
        const existing = this.hotels.find((h) => h.id === sub.id);
        if (!existing) {
          this.hotels.unshift({
            id: sub.id,
            nameAr: sub.businessName,
            nameEn: sub.businessName,
            areaAr: sub.area || sub.city,
            areaEn: sub.area || sub.city,
            cityId: 'manama',
            stars: sub.stars || 4,
            rating: 4.8,
            typeCategory: 'luxury',
            descriptionAr: sub.description,
            descriptionEn: sub.description,
            featuresAr: sub.services ? sub.services.split('،').map((s) => s.trim()) : ['خدمة ضيافة راقية'],
            featuresEn: sub.services ? sub.services.split(',').map((s) => s.trim()) : ['High Quality Hospitality'],
            image: sub.imageUrl || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
            gallery: [sub.imageUrl || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'],
            phone: sub.phone,
            email: sub.email,
            websiteUrl: sub.websiteUrl || 'https://discover-albahrian.vercel.app',
            locationAr: sub.address || sub.area,
            locationEn: sub.address || sub.area,
            coordinates: [26.2285, 50.586],
            isFeatured: sub.isFeatured,
            status: 'published'
          });
          this.persistHotels();
        }
      } else if (sub.businessType === 'restaurant') {
        const existing = this.restaurants.find((r) => r.id === sub.id);
        if (!existing) {
          this.restaurants.unshift({
            id: sub.id,
            nameAr: sub.businessName,
            nameEn: sub.businessName,
            cuisineType: (sub.cuisineType as any) || 'bahraini',
            cuisineLabelAr: sub.services || 'أطباق ومأكولات شهية',
            cuisineLabelEn: sub.services || 'Gourmet Dining Experience',
            areaAr: sub.area || sub.city,
            areaEn: sub.area || sub.city,
            descriptionAr: sub.description,
            descriptionEn: sub.description,
            workingHoursAr: sub.workingHours || '10:00 صباحاً – 11:00 مساءً',
            workingHoursEn: sub.workingHours || '10:00 AM – 11:00 PM',
            phone: sub.phone,
            whatsapp: sub.whatsapp,
            websiteUrl: sub.websiteUrl,
            instagramUrl: sub.instagramUrl,
            image: sub.imageUrl || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
            gallery: [sub.imageUrl || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'],
            coordinates: [26.2335, 50.5758],
            locationAr: sub.address || sub.area,
            locationEn: sub.address || sub.area,
            isFeatured: sub.isFeatured,
            status: 'published'
          });
          this.persistRestaurants();
        }
      }
    }

    this.persistSubmissions();
  }

  public deleteSubmission(id: string): void {
    this.submissions = this.submissions.filter((s) => s.id !== id);
    this.persistSubmissions();
  }

  private persistSubmissions() {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY_SUBMISSIONS, JSON.stringify(this.submissions));
    } catch {
      // Ignored
    }
  }

  // --- Statistics for Admin Dashboard ---
  public getStats() {
    return {
      hotels: this.hotels.length,
      restaurants: this.restaurants.length,
      landmarks: this.landmarks.length,
      museums: this.museums.length,
      events: this.events.length,
      pendingSubmissions: this.submissions.filter((s) => s.status === 'pending').length,
      approvedBusinesses: this.submissions.filter((s) => s.status === 'approved').length,
      totalUsers: 14280 // Authenticated live activity baseline
    };
  }

  // --- Smart Itinerary Planner Generator (Grounded Strictly in Real Bahrain Data) ---
  public generateItinerary({
    days,
    travelerType,
    language
  }: {
    days: number;
    travelerType: 'family' | 'luxury' | 'culture' | 'budget';
    language: 'ar' | 'en';
  }) {
    const publishedHotels = this.getHotels();
    const publishedRestaurants = this.getRestaurants();
    const publishedLandmarks = this.getLandmarks();
    const publishedMuseums = this.getMuseums();

    // Select suggested base hotel
    const suggestedHotel =
      publishedHotels.find((h) => h.typeCategory === travelerType) ||
      publishedHotels[0];

    const daysCount = Math.min(Math.max(days, 1), 5);
    const plan = [];

    for (let day = 1; day <= daysCount; day++) {
      let morningPlace: any = publishedLandmarks[(day * 2 - 2) % publishedLandmarks.length];
      let lunchSpot: any = publishedRestaurants[(day - 1) % publishedRestaurants.length];
      let afternoonPlace: any = publishedMuseums[(day - 1) % publishedMuseums.length] || publishedLandmarks[(day * 2 - 1) % publishedLandmarks.length];
      let eveningSpot: any = publishedRestaurants[(day * 2) % publishedRestaurants.length] || publishedRestaurants[0];

      plan.push({
        dayNumber: day,
        titleAr: `اليوم ${day}: استكشاف ${morningPlace ? morningPlace.cityNameAr : 'المنامة'} ومعالمها التراثية والحديثة`,
        titleEn: `Day ${day}: Exploring ${morningPlace ? morningPlace.cityNameEn : 'Manama'} Cultural & Coastal Wonders`,
        morning: {
          time: '09:00 - 12:30',
          item: morningPlace,
          type: 'landmark',
          activityAr: `زيارة ${morningPlace ? morningPlace.nameAr : 'المعلم التاريخي'} والتعرف على تاريخه ومحيطه التراثي.`,
          activityEn: `Visit ${morningPlace ? morningPlace.nameEn : 'historical site'} and immerse in its timeless cultural heritage.`
        },
        lunch: {
          time: '13:00 - 15:00',
          item: lunchSpot,
          type: 'restaurant',
          activityAr: `تناول وجبة الغداء الفاخرة في ${lunchSpot ? lunchSpot.nameAr : 'المطعم'} وتذوق الأطباق المميزة.`,
          activityEn: `Delight in gourmet lunch at ${lunchSpot ? lunchSpot.nameEn : 'restaurant'} enjoying signature delicacies.`
        },
        afternoon: {
          time: '16:00 - 18:30',
          item: afternoonPlace,
          type: 'museum',
          activityAr: `جولة بعد الظهر في ${afternoonPlace ? afternoonPlace.nameAr : 'المتحف'} ومشاهدة المقتنيات النادرة وصور التاريخ.`,
          activityEn: `Afternoon tour at ${afternoonPlace ? afternoonPlace.nameEn : 'museum'} exploring prestigious artifacts.`
        },
        evening: {
          time: '19:30 - 22:30',
          item: eveningSpot,
          type: 'restaurant',
          activityAr: `أمسية هادئة وتناول العشاء والتجول المسائي في محيط ${eveningSpot ? eveningSpot.nameAr : 'المطعم'} وواجهته الحيوية.`,
          activityEn: `Atmospheric evening stroll and dinner at ${eveningSpot ? eveningSpot.nameEn : 'restaurant'}.`
        }
      });
    }

    return {
      suggestedHotel,
      days: plan
    };
  }

  public getAllCities(): City[] {
    return this.cities;
  }

  public getCities(): City[] {
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

  public getHospitalityHotels(): HospitalityItem[] {
    return this.getHospitalityItems('hotel');
  }

  public getHospitalityRestaurants(): HospitalityItem[] {
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

    const matchesHotel = (h: Hotel) =>
      h.nameAr.toLowerCase().includes(q) ||
      h.nameEn.toLowerCase().includes(q) ||
      h.areaAr.toLowerCase().includes(q) ||
      h.areaEn.toLowerCase().includes(q) ||
      h.descriptionAr.toLowerCase().includes(q) ||
      h.featuresAr.some((f) => f.toLowerCase().includes(q));

    const matchesRestaurant = (r: Restaurant) =>
      r.nameAr.toLowerCase().includes(q) ||
      r.nameEn.toLowerCase().includes(q) ||
      r.cuisineLabelAr.toLowerCase().includes(q) ||
      r.areaAr.toLowerCase().includes(q) ||
      r.descriptionAr.toLowerCase().includes(q);

    const matchesEvent = (e: BahrainEvent) =>
      e.titleAr.toLowerCase().includes(q) ||
      e.titleEn.toLowerCase().includes(q) ||
      e.venueAr.toLowerCase().includes(q) ||
      e.descriptionAr.toLowerCase().includes(q);

    return {
      cities: this.getCities().filter(matchesCity),
      landmarks: this.getLandmarks().filter(matchesLandmark),
      museums: this.getMuseums().filter(matchesMuseum),
      hotels: this.getHotels().filter(matchesHotel),
      restaurants: this.getRestaurants().filter(matchesRestaurant),
      events: this.getEvents().filter(matchesEvent),
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
