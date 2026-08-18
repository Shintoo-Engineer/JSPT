export type Language = 'en' | 'ta';

export interface PrayerRequest {
  id: string;
  name: string;
  isAnonymous: boolean;
  phone?: string;
  email?: string;
  category: string;
  request: string;
  timestamp: number;
}

export interface PrayerWallItem {
  id: string;
  author: string;
  isAnonymous: boolean;
  location?: string;
  title: string;
  content: string;
  category: string;
  prayerCount: number;
  hasPrayed?: boolean;
  createdAt: string;
  isAnswered?: boolean;
  answeredTestimony?: string;
}

export interface YouTubeVideo {
  id: string;
  youtubeId: string;
  titleEn: string;
  titleTa: string;
  category: 'WARNING' | 'END_TIME' | 'SERMONS' | 'PRAYER' | 'GOSPEL' | 'BIBLE_TEACHING' | 'WORSHIP';
  date: string;
  duration: string;
  views: string;
  thumbnailUrl: string;
}

export interface ServiceTime {
  id: string;
  dayEn: string;
  dayTa: string;
  titleEn: string;
  titleTa: string;
  timeEn: string;
  timeTa: string;
  descriptionEn: string;
  descriptionTa: string;
  targetEn?: string;
  targetTa?: string;
  badge?: string;
  iconName: string;
}

export interface BibleVerse {
  referenceEn: string;
  referenceTa: string;
  textEn: string;
  textTa: string;
  theme: string;
}
