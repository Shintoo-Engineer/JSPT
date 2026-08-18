import { PrayerWallItem } from '../types';
export { BIBLE_VERSES } from './verses';
export { YOUTUBE_VIDEOS } from './messages';
export { SERVICE_SCHEDULE } from './events';

export const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/channel/UCMQuGFO6ZQfLlioRkW6X3bg';
export const WHATSAPP_NUMBER = '9489919343';
export const WHATSAPP_LINK = 'https://wa.me/919489919343';
export const EMAIL_ADDRESS = 'jesussavesprayerteam@gmail.com';
export const MINISTRY_LOCATION_EN = 'Kanyakumari Dist, TamilNadu, India';
export const MINISTRY_LOCATION_TA = 'கன்னியாகுமரி மாவட்டம், தமிழ்நாடு, இந்தியா';

export const INITIAL_PRAYER_WALL: PrayerWallItem[] = [
  {
    id: 'pw-1',
    author: 'Anonymous Sister',
    isAnonymous: true,
    location: 'Chennai',
    title: 'Prayer for Complete Healing from Kidney Illness',
    content: 'Please pray for my mother hospitalized with severe kidney complications. We believe in the healing touch of Lord Jesus Christ.',
    category: 'Healing',
    prayerCount: 48,
    createdAt: '2 hours ago',
  },
  {
    id: 'pw-2',
    author: 'Brother Stephen',
    isAnonymous: false,
    location: 'Madurai',
    title: 'Deliverance from Financial Burden & Business Debt',
    content: 'Praying for divine breakthrough to clear heavy debts and establish peace and provision in our home.',
    category: 'Finance',
    prayerCount: 36,
    createdAt: '5 hours ago',
  },
  {
    id: 'pw-3',
    author: 'Anointing Seeker',
    isAnonymous: true,
    location: 'Tirunelveli',
    title: 'End-Time Spiritual Revival in Our Youth',
    content: 'Praying that the Holy Spirit pours out fire on all children and youth in our church to stand pure in these last days.',
    category: 'Spiritual Growth',
    prayerCount: 72,
    createdAt: '1 day ago',
  },
  {
    id: 'pw-4',
    author: 'Grace M.',
    isAnonymous: false,
    location: 'Coimbatore',
    title: 'Answered Prayer — Blessed with Job After 8 Months',
    content: 'Praise God! The JSPT prayer team prayed for my employment. God opened a miraculous government sector door yesterday!',
    category: 'Praise Report',
    prayerCount: 94,
    createdAt: '2 days ago',
    isAnswered: true,
    answeredTestimony: 'Praise the Lord! Jesus gave a miracle breakthrough through fasting prayer.',
  },
  {
    id: 'pw-5',
    author: 'Prayer Partner',
    isAnonymous: true,
    location: 'Kanyakumari',
    title: 'Family Salvation and Unity',
    content: 'Praying for my father and brothers to accept Lord Jesus Christ as their personal Savior before His coming.',
    category: 'Salvation',
    prayerCount: 53,
    createdAt: '3 days ago',
  },
];

export const WARNING_STEPS = [
  {
    id: 1,
    titleEn: 'JESUS IS COMING.',
    titleTa: 'இயேசு வருகிறார்.',
    subtitleEn: 'The appointed hour is nearer than when we first believed.',
    subtitleTa: 'நாம் விசுவாசிகளானபோது இருந்ததைப்பார்க்கிலும் இப்பொழுது இரட்சிப்பு நமக்குச் சமீபமாயிருக்கிறது.',
    scripture: 'Romans 13:11',
    color: 'from-amber-500 to-amber-200',
  },
  {
    id: 2,
    titleEn: 'ARE YOU READY?',
    titleTa: 'நீங்கள் ஆயத்தமா?',
    subtitleEn: 'Will you be found holy, spotless, and watching in faith?',
    subtitleTa: 'அவர் வரும்போது கறையற்றவர்களும் பிழையற்றவர்களுமாய் நீங்கள் காணப்படுவீர்களா?',
    scripture: '2 Peter 3:14',
    color: 'from-orange-500 to-amber-300',
  },
  {
    id: 3,
    titleEn: 'REPENT.',
    titleTa: 'மனந்திரும்புங்கள்.',
    subtitleEn: 'Turn away from worldly deception, wash your garments in the Blood of the Lamb.',
    subtitleTa: 'மனந்திரும்புங்கள், பரலோகராஜ்யம் சமீபித்திருக்கிறது.',
    scripture: 'Matthew 4:17',
    color: 'from-red-500 to-orange-400',
  },
  {
    id: 4,
    titleEn: 'WATCH.',
    titleTa: 'விழித்திருங்கள்.',
    subtitleEn: 'Do not sleep spiritually as others do; be alert to the signs of the times.',
    subtitleTa: 'மற்றவர்களைப்போல நாம் தூங்காமல் விழித்துக்கொண்டு தெளிந்தவர்களாயிருக்கக்கடவோம்.',
    scripture: '1 Thessalonians 5:6',
    color: 'from-blue-400 to-cyan-200',
  },
  {
    id: 5,
    titleEn: 'PRAY.',
    titleTa: 'ஜெபியுங்கள்.',
    subtitleEn: 'Pray without ceasing; stand in the gap for your home, children, and nations.',
    subtitleTa: 'இடைவிடாமல் ஜெபம் பண்ணுங்கள். திறப்பின் வாசலிலே நில்லுங்கள்.',
    scripture: '1 Thessalonians 5:17',
    color: 'from-sky-400 to-emerald-300',
  },
  {
    id: 6,
    titleEn: 'BE READY TO MEET THE LORD.',
    titleTa: 'கர்த்தரை சந்திக்க ஆயத்தமாகுங்கள்.',
    subtitleEn: 'For the trumpet shall sound, and the dead shall be raised incorruptible.',
    subtitleTa: 'எக்காளம் தொனிக்கும், அப்பொழுது மரித்தோர் அழிவில்லாதவர்களாய் எழுந்திருப்பார்கள்.',
    scripture: '1 Corinthians 15:52',
    color: 'from-yellow-300 via-amber-200 to-white',
  },
];
