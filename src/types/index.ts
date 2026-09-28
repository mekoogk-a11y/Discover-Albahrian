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
  | 'activity';

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
