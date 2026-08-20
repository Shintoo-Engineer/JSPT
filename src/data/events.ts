import { ServiceTime } from '../types';

export const SERVICE_SCHEDULE: ServiceTime[] = [
  {
    id: 'sunday-prayer',
    dayEn: 'Every Sunday',
    dayTa: 'ஒவ்வொரு ஞாயிறு',
    titleEn: 'Sunday Worship & Miracle Prayer',
    titleTa: 'ஞாயிறு ஆராதனை & அற்புதம் தரும் ஜெபம்',
    timeEn: '10:00 AM – 1:00 PM',
    timeTa: 'காலை 10:00 – பிற்பகல் 1:00',
    descriptionEn: 'Holy worship, preaching of the prophetic word of God, individual prayer and deliverance ministry.',
    descriptionTa: 'பரிசுத்த ஆராதனை, தேவனுடைய தீர்க்கதரிசன வார்த்தை, தனிநபர் ஜெபம் மற்றும் விடுதலை.',
    targetEn: 'Open to All Families & Believers',
    targetTa: 'அனைத்து குடும்பத்தினருக்கும்',
    badge: 'Main Worship',
    iconName: 'Church',
  },
  {
    id: 'friday-prayer',
    dayEn: 'Every Friday',
    dayTa: 'ஒவ்வொரு வெள்ளி',
    titleEn: 'Fasting & All-Day Intercessory Prayer',
    titleTa: 'உபவாச & முழு நாள் பரிந்துபேசும் ஜெபம்',
    timeEn: '10:00 AM – 1:00 PM',
    timeTa: 'காலை 10:00 – பிற்பகல் 1:00',
    descriptionEn: 'Deep fasting prayer, breaking spiritual bondages, praying for revival, nation, families, and healing.',
    descriptionTa: 'கண்ணீரின் உபவாச ஜெபம், சாத்தானின் கட்டுகள் முறியடிக்கப்படுதல், தேசத்திற்கும் குடும்பங்களுக்கும் பரிந்துபேசுதல்.',
    targetEn: 'Full Day Spiritual Awakening',
    targetTa: 'முழு நாள் ஜெப தாகம் உள்ளவர்களுக்கு',
    badge: '11 Hours Fasting',
    iconName: 'Flame',
  },
];
