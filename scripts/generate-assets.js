import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
const imagesDir = path.join(publicDir, 'images');
const iconsDir = path.join(publicDir, 'icons');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir, { recursive: true });

function createSvgAsset(filename, title, subtitle, themeColor = '#D97706', accentColor = '#FBBF24', symbol = '✝') {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#0a1226"/>
      <stop offset="60%" stop-color="#050814"/>
      <stop offset="100%" stop-color="#02040a"/>
    </radialGradient>
    <radialGradient id="divineGlow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.35"/>
      <stop offset="50%" stop-color="${themeColor}" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="30%" stop-color="${accentColor}"/>
      <stop offset="70%" stop-color="${themeColor}"/>
      <stop offset="100%" stop-color="#78350F"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="15" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Canvas Background -->
  <rect width="1200" height="800" fill="url(#bgGrad)"/>
  
  <!-- Subtle Divine Aura -->
  <circle cx="600" cy="360" r="380" fill="url(#divineGlow)"/>
  
  <!-- Architectural Silhouette & Sacred Rays -->
  <g opacity="0.18">
    <path d="M600 80 L350 800 L850 800 Z" fill="${accentColor}"/>
    <path d="M600 120 L420 800 L780 800 Z" fill="#ffffff"/>
    <path d="M600 0 L580 800 L620 800 Z" fill="${themeColor}"/>
    <circle cx="600" cy="320" r="160" stroke="${accentColor}" stroke-width="2" fill="none"/>
    <circle cx="600" cy="320" r="240" stroke="${themeColor}" stroke-width="1.5" stroke-dasharray="8 8" fill="none"/>
  </g>
  
  <!-- Central Symbol -->
  <g transform="translate(600, 310)" filter="url(#glow)">
    <!-- Cross / Symbol Shape -->
    <path d="M-15 -140 H15 V-50 H105 V-20 H15 V140 H-15 V-20 H-105 V-50 H-15 V-140 Z" fill="url(#goldGrad)"/>
    <circle cx="0" cy="-35" r="45" stroke="url(#goldGrad)" stroke-width="3" fill="none" opacity="0.6"/>
  </g>
  
  <!-- Foreground Badges & Typography -->
  <g text-anchor="middle" font-family="'Cinzel', Georgia, serif">
    <text x="600" y="530" font-size="44" font-weight="900" fill="url(#goldGrad)" letter-spacing="4">${title}</text>
    <text x="600" y="580" font-size="22" font-weight="600" fill="#94A3B8" letter-spacing="2">${subtitle}</text>
    <text x="600" y="630" font-size="16" font-weight="700" fill="${accentColor}" letter-spacing="6">JESUS SAVES PRAYER TEAM • JSPT</text>
  </g>
  
  <!-- Subtle Border Framing -->
  <rect x="25" y="25" width="1150" height="750" rx="16" fill="none" stroke="${themeColor}" stroke-opacity="0.3" stroke-width="1.5"/>
  <rect x="35" y="35" width="1130" height="730" rx="12" fill="none" stroke="${accentColor}" stroke-opacity="0.15" stroke-width="1"/>
</svg>`;

  fs.writeFileSync(filename, svg);
}

// Generate the primary visual assets
createSvgAsset(path.join(imagesDir, 'hero-church.webp'), 'JESUS SAVES PRAYER TEAM', '“JESUS IS COMING SOON”', '#D97706', '#FBBF24');
createSvgAsset(path.join(imagesDir, 'pastor.webp'), 'PR. V. ARUL DHAS', 'Minister • Jesus Saves Chruch', '#0284C7', '#38BDF8');
createSvgAsset(path.join(imagesDir, 'family.webp'), 'A MINISTRY OF PRAYER', 'Dedicated Family in God’s Service', '#059669', '#34D399');
createSvgAsset(path.join(imagesDir, 'church.webp'), 'PRAYER SANCTUARY', 'Jesus Saves Prayer Team Church', '#D97706', '#FBBF24');
createSvgAsset(path.join(imagesDir, 'bible.webp'), 'THE LIVING WORD OF GOD', 'End-Time Prophetic Scripture', '#3B82F6', '#93C5FD');
createSvgAsset(path.join(imagesDir, 'ministry.webp'), 'INTERCESSORY MINISTRY', '24/7 Prayer Support & Deliverance', '#EA580C', '#FBA16C');

// Generate 6 Message Thumbnails
createSvgAsset(path.join(imagesDir, 'message-01.webp'), 'JESUS IS COMING SOON', 'Prophetic Warning Message • Pr. V. Arul Dhas', '#DC2626', '#F87171');
createSvgAsset(path.join(imagesDir, 'message-02.webp'), 'END-TIME PROPHECIES 2026', 'Signs of the Times & Global Awakening', '#7C3AED', '#A78BFA');
createSvgAsset(path.join(imagesDir, 'message-03.webp'), 'FRIDAY FASTING PRAYER', 'Miracle Deliverance & Anointing Service', '#D97706', '#FBBF24');
createSvgAsset(path.join(imagesDir, 'message-04.webp'), 'PREPARE YOUR FAMILY', 'Ready for the Rapture of the Saints', '#059669', '#34D399');
createSvgAsset(path.join(imagesDir, 'message-05.webp'), 'REPENT AND BE SAVED', 'Salvation & Grace Before the Appointed Hour', '#EA580C', '#FDBA74');
createSvgAsset(path.join(imagesDir, 'message-06.webp'), 'KIDS ANOINTING PRAYER', 'Wisdom, Scripture & Spiritual Growth', '#0284C7', '#38BDF8');

// Generate PWA Icons
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="96" fill="#030611"/>
  <circle cx="256" cy="256" r="210" fill="#070D1E" stroke="#D97706" stroke-width="6"/>
  <g transform="translate(256, 256)">
    <path d="M-18 -160 H18 V-60 H118 V-24 H18 V160 H-18 V-24 H-118 V-60 H-18 V-160 Z" fill="#FBBF24"/>
    <circle cx="0" cy="-42" r="54" stroke="#FFFFFF" stroke-width="4" fill="none" opacity="0.6"/>
  </g>
  <text x="256" y="450" font-family="Georgia, serif" font-size="28" font-weight="900" fill="#FBBF24" text-anchor="middle" letter-spacing="4">JSPT</text>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'favicon.svg'), iconSvg);
fs.writeFileSync(path.join(iconsDir, 'icon-192.png'), iconSvg);
fs.writeFileSync(path.join(iconsDir, 'icon-512.png'), iconSvg);

console.log('✅ All local static image assets generated successfully.');
