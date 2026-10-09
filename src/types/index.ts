/**
 * Core Domain Types for "اكتشف البحرين" (Discover Bahrain)
 */

export type ContentStatus = 'published' | 'draft' | 'archived';

export type LandmarkCategory =
  | 'history'         // 🏛️ تاريخ وتراث
  | 'archaeological'   // 🏺 مواقع أثرية
  | 'culture'         // 🎨 ثقافة وفنون
  | 'sea'             // 🌊 بحر وشواطئ
  | 'modern'          // 🏙️ معالم حديثة
  | 'religious'       // 🕌 معالم دينية
  | 'nature';         // 🌳 طبيعة

export interface SourceReference {
  nameAr: string;
  nameEn: string;
  url: string;
  verifiedOrganization: string;
}

export interface City {
  id: string;
  nameAr: string;
  nameEn: string;
  governorateAr: string;
  governorateEn: string;
  image: string;
  descriptionAr: string;
  descriptionEn: string;
  historyAr: string;
  historyEn: string;
  coordinates: [number, number]; // [lat, lng]
  landmarksCount: number;
  museumsCount: number;
  heritageCount: number;
  source: SourceReference;
  status: ContentStatus;
}

export interface Landmark {
  id: string;
  nameAr: string;
  nameEn: string;
  category: LandmarkCategory;
  cityId: string;
  cityNameAr: string;
  cityNameEn: string;
  image: string;
  gallery: string[];
  overviewAr: string;
  overviewEn: string;
  storyAr: string;
  storyEn: string;
  historyAr: string;
  historyEn: string;
  coordinates: [number, number];
  nearbyPlaces: { id?: string; nameAr: string; nameEn: string; distance: string }[];
  source: SourceReference;
  isFeatured?: boolean;
  status: ContentStatus;
}

export interface Museum {
  id: string;
  nameAr: string;
  nameEn: string;
  cityId: string;
  cityNameAr: string;
  cityNameEn: string;
  image: string;
  gallery: string[];
  descriptionAr: string;
  descriptionEn: string;
  hoursAr: string;
  hoursEn: string;
  officialUrl: string;
  source: SourceReference;
  coordinates: [number, number];
  admissionAr: string;
  admissionEn: string;
  status: ContentStatus;
}

export interface TimelineEvent {
  id: string;
  eraAr: string;
  eraEn: string;
  dateLabelAr: string;
  dateLabelEn: string;
  yearSort: number;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
  source: SourceReference;
  significanceAr: string;
}

export type HeritageCategory =
  | 'crafts'
  | 'sea'
  | 'pearling'
  | 'architecture'
  | 'souqs'
  | 'cuisine'
  | 'customs'
  | 'majalis';

export interface HeritageTopic {
  id: string;
  category: HeritageCategory;
  titleAr: string;
  titleEn: string;
  summaryAr: string;
  summaryEn: string;
  fullContentAr: string;
  fullContentEn: string;
  image: string;
  elements: { titleAr: string; titleEn: string; descAr: string; descEn: string }[];
  source: SourceReference;
  status: ContentStatus;
}

export interface DailyDiscovery {
  id: string;
  date: string;
  titleAr: string;
  titleEn: string;
  factAr: string;
  factEn: string;
  fullStoryAr: string;
  fullStoryEn: string;
  image: string;
  source: SourceReference;
  categoryAr: string;
  categoryEn: string;
  relatedLandmarkId?: string;
}

export type HospitalityCategory = 'hotel' | 'restaurant' | 'souq' | 'beach' | 'activity';

export interface HospitalityItem {
  id: string;
  type: HospitalityCategory;
  nameAr: string;
  nameEn: string;
  cityNameAr: string;
  cityNameEn: string;
  categoryLabelAr: string;
  categoryLabelEn: string;
  descriptionAr: string;
  descriptionEn: string;
  featuresAr: string[];
  featuresEn: string[];
  image: string;
  rating: number; // e.g. 4.8
  locationAr: string;
  locationEn: string;
  officialUrl?: string;
  source: SourceReference;
}

export interface TravelGuideFAQ {
  id: string;
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
  category: 'general' | 'family' | 'beaches' | 'culture' | 'budget';
}

export type ItemType =
  | 'city'
  | 'landmark'
  | 'museum'
  | 'heritage'
  | 'story'
  | 'hotel'
  | 'restaurant'
  | 'souq'
  | 'beach'
  | 'activity'
  | 'event';

export interface Hotel {
  id: string;
  nameAr: string;
  nameEn: string;
  areaAr: string;
  areaEn: string;
  cityId: string;
  stars: number; // 3, 4, 5
  rating: number; // e.g. 4.9
  typeCategory: 'luxury' | 'family' | 'budget' | 'resort';
  descriptionAr: string;
  descriptionEn: string;
  featuresAr: string[];
  featuresEn: string[];
  image: string;
  gallery: string[];
  phone: string;
  email: string;
  websiteUrl: string;
  bookingUrl?: string;
  locationAr: string;
  locationEn: string;
  coordinates: [number, number];
  isFeatured?: boolean;
  status: ContentStatus;
}

export type RestaurantCuisine =
  | 'bahraini'
  | 'arab'
  | 'asian'
  | 'international'
  | 'family'
  | 'luxury'
  | 'cafe'
  | 'sweets';

export interface Restaurant {
  id: string;
  nameAr: string;
  nameEn: string;
  cuisineType: RestaurantCuisine;
  cuisineLabelAr: string;
  cuisineLabelEn: string;
  areaAr: string;
  areaEn: string;
  descriptionAr: string;
  descriptionEn: string;
  workingHoursAr: string;
  workingHoursEn: string;
  phone: string;
  whatsapp?: string;
  websiteUrl?: string;
  instagramUrl?: string;
  image: string;
  gallery: string[];
  coordinates: [number, number];
  locationAr: string;
  locationEn: string;
  isFeatured?: boolean;
  status: ContentStatus;
}

export type EventTimelineCategory = 'upcoming' | 'today' | 'this_week';

export interface BahrainEvent {
  id: string;
  titleAr: string;
  titleEn: string;
  dateStrAr: string;
  dateStrEn: string;
  dateISO: string; // YYYY-MM-DD
  timeAr: string;
  timeEn: string;
  venueAr: string;
  venueEn: string;
  category: EventTimelineCategory;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
  officialUrl: string;
  coordinates: [number, number];
  isFeatured?: boolean;
  status: ContentStatus;
}

export interface BusinessSubmission {
  id: string;
  businessType: 'hotel' | 'restaurant' | 'attraction' | 'business';
  businessName: string;
  contactPerson: string;
  phone: string;
  whatsapp: string;
  email: string;
  city: string;
  area: string;
  address: string;
  googleMapsUrl?: string;
  websiteUrl?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  description: string;
  services: string;
  workingHours?: string;
  stars?: number;
  cuisineType?: string;
  imageUrl?: string;
  logoUrl?: string;
  agreedTerms: boolean;
  submittedAt: number;
  status: 'pending' | 'approved' | 'rejected';
  isFeatured?: boolean;
  adminNotes?: string;
}

export interface FavoriteItem {
  id: string;
  type: ItemType;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  image: string;
  addedAt: number;
}

export type InvestmentSectorKey =
  | 'all'
  | 'fintech'
  | 'tech'
  | 'logistics'
  | 'manufacturing'
  | 'tourism'
  | 'healthcare'
  | 'realestate'
  | 'energy';

export interface InvestmentOpportunity {
  id: string;
  titleAr: string;
  titleEn: string;
  sectorAr: string;
  sectorEn: string;
  sectorKey: InvestmentSectorKey;
  descriptionAr: string;
  descriptionEn: string;
  investmentRangeAr: string;
  investmentRangeEn: string;
  locationAr: string;
  locationEn: string;
  highlightsAr: string[];
  highlightsEn: string[];
  incentivesAr: string[];
  incentivesEn: string[];
  facilitatorAr: string;
  facilitatorEn: string;
  officialUrl: string;
  image: string;
  isFeatured?: boolean;
}

export interface InvestmentAdvantage {
  id: string;
  icon: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  statNumber?: string;
  statLabelAr?: string;
  statLabelEn?: string;
}

export interface InvestorInquiry {
  id: string;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  whatsapp: string;
  country: string;
  sector: string;
  capitalBudget: string;
  notes: string;
  createdAt: number;
}

