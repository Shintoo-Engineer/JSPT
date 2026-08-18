# 🛡️ JSPT ZERO-COST ARCHITECTURAL AUDIT & LIFETIME VERIFICATION
**Jesus Saves Prayer Team (JSPT) Official Website**
**Classification:** 100% Static Web Application • Zero Mandatory Operating Cost

---

## 1. Dependencies Matrix & Audit
Every dependency included in the build is strictly an open-source, client-side runtime utility with zero per-request telemetry, zero API keys, and zero recurring subscription fees:

| Package | Version | Purpose | Cost Model | License |
| :--- | :--- | :--- | :--- | :--- |
| `react` | `^19.0.1` | Declarative UI framework | Free / Open Source | MIT |
| `react-dom` | `^19.0.1` | Web DOM renderer | Free / Open Source | MIT |
| `three` | `^0.174.0` | Client-side 3D WebGL particle engine & cross | Free / Open Source | MIT |
| `motion` | `^12.23.24` | Cinematic entrance & layout animation engine | Free / Open Source | MIT |
| `lucide-react` | `^0.546.0` | Vector icon set (bundled locally) | Free / Open Source | ISC |
| `canvas-confetti` | `^1.9.4` | Client-side particle effect for "I Prayed" | Free / Open Source | ISC |
| `tailwindcss` | `^4.1.14` | Zero-runtime CSS compiler | Free / Open Source | MIT |
| `vite` | `^6.2.3` | Static module bundler | Free / Open Source | MIT |
| `typescript` | `~5.8.2` | Static type checking | Free / Open Source | Apache-2.0 |

---

## 2. External Services
- **Eliminated:** All third-party CDN fonts (`fonts.googleapis.com`, `fonts.gstatic.com`), external image CDNs (`images.unsplash.com`, `images.pexels.com`, `cloudinary.com`), analytics trackers, and remote CMS platforms have been entirely removed.
- **Retained Only as Optional External Links:** 
  1. Standard YouTube video navigation (opens video in new tab / privacy-enhanced embed without API).
  2. Standard WhatsApp chat link (`https://wa.me/919489919343`) with pre-filled text query.

---

## 3. APIs (Zero-API Architecture)
- **AI / LLM APIs:** 0 (No Gemini, OpenAI, Claude, or generative models).
- **YouTube Data API:** 0 (No API keys, no quota exhaustion risks, standard URLs).
- **WhatsApp Cloud API:** 0 (No per-message WhatsApp business fees).
- **Google Maps JavaScript API:** 0 (Uses standard web map embed).
- **Email / SMS Gateways:** 0 (Direct mailto: and WhatsApp handoffs).

---

## 4. Storage (Zero Cloud Storage)
- No AWS S3, Google Cloud Storage, Firebase Storage, or Cloudinary buckets.
- All graphics, WebP images, church photography, icons, and audio assets are packaged directly into the static distribution bundle under `/public/images/` and `/public/icons/`.

---

## 5. Database (Zero Cloud Database)
- No PostgreSQL, MySQL, MongoDB, Firebase Firestore, or Supabase instance is required.
- **Static Core Data:** Scripture verses (`src/data/verses.ts`), sermons (`src/data/messages.ts`), and service timetables (`src/data/events.ts`) are compiled directly into the JavaScript client bundle.
- **Local User State:** The user's submitted prayer request history and prayer wall interaction counters use browser `localStorage` locally on the device without ever sending private data to a central cloud server.

---

## 6. Hosting Assumptions
- Because `npm run build` compiles purely to static HTML, CSS, JavaScript, and asset files in `/dist`, the application can be hosted for **₹0** across standard static hosting providers (such as Cloudflare Pages, GitHub Pages, Vercel Hobby, Netlify Starter).
- No Node.js server, Docker daemon, or container compute instance is required in production.

---

## 7. Domain Assumptions
- The application can run on free default provider subdomains (e.g. `*.pages.dev`, `*.github.io`, `*.vercel.app`) at ₹0 cost.
- A custom domain (e.g., `jesussavesprayerteam.org`) is optional and subject only to standard registrar registry fees if the ministry chooses to purchase one.

---

## 8. Third-Party Links & Interoperability
- **YouTube:** Navigates visitors to Pr. V. Arul Dhas' official channel (`https://www.youtube.com/channel/UCMQuGFO6ZQfLlioRkW6X3bg`).
- **WhatsApp:** Direct link to ministry prayer line (`https://wa.me/919489919343`).

---

## 9. Offline Capability & PWA
- Progressive Web App (`public/manifest.webmanifest`) enables installability across Android, iOS, Windows, and macOS.
- Service Worker (`public/sw.js`) caches all core HTML, JS, CSS, WebP graphics, and scripture data on the first visit, enabling reading of sermons, Bible verses, and service schedules even during complete internet loss.

---

## 10. What Is Truly ₹0 / $0
- **Software License:** 100% Free and open source.
- **API Operating Cost:** ₹0 / $0 (No consumption-based billing).
- **Database Compute:** ₹0 / $0 (Zero remote database instances).
- **Asset Storage:** ₹0 / $0 (Zero paid S3/CDN bills).
- **Backend Server Maintenance:** ₹0 / $0 (Static client-side architecture).

---

## 11. What Depends on External Providers
- **Video Playback:** Playing embedded YouTube sermons depends on YouTube's public web service availability.
- **WhatsApp Messaging:** Handing off pre-filled prayer messages depends on the user having WhatsApp installed or accessible on their device.
- **Hosting Bandwidth:** Free static host bandwidth is subject to the specific hosting provider's free-tier policy (e.g. Cloudflare Pages unlimited bandwidth, Netlify 100GB/mo).

---

## 12. What Is NOT Guaranteed to Be Unlimited
- Third-party static hosting platforms (such as Cloudflare, GitHub, Netlify, Vercel) maintain independent Terms of Service and usage quotas that may change over time.
- Internet connectivity for external YouTube video streaming and WhatsApp message delivery requires active end-user mobile data or broadband.

---

### Formal Cost Statement
> **“The application itself has no mandatory paid API, database, storage, or backend dependency. Free static hosting and provider quotas remain subject to the provider's current terms.”**
