import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { WifiOff } from 'lucide-react';
import { Language } from './types';
import { IntroCinematic } from './components/IntroCinematic';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WarningSection } from './components/WarningSection';
import { PastorSection } from './components/PastorSection';
import { FamilySection } from './components/FamilySection';
import { PrayerRequestSection } from './components/PrayerRequestSection';
import { PrayerWallSection } from './components/PrayerWallSection';
import { MessagesSection } from './components/MessagesSection';
import { WordOfGodSection } from './components/WordOfGodSection';
import { LivePrayerSection } from './components/LivePrayerSection';
import { ContactSection } from './components/ContactSection';
import { PrayerModal } from './components/PrayerModal';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [isPrayerModalOpen, setIsPrayerModalOpen] = useState<boolean>(false);
  const [isOffline, setIsOffline] = useState<boolean>(!navigator.onLine);

  // Online / Offline listener
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Check if visitor has already experienced intro in this session
  useEffect(() => {
    const hasSeen = sessionStorage.getItem('jspt_seen_intro');
    if (hasSeen === 'true') {
      setShowIntro(false);
    }
  }, []);

  const handleCompleteIntro = () => {
    setShowIntro(false);
    sessionStorage.setItem('jspt_seen_intro', 'true');
  };

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ta' : 'en'));
  };

  const handleOpenPrayerModal = () => {
    setIsPrayerModalOpen(true);
  };

  const handleClosePrayerModal = () => {
    setIsPrayerModalOpen(false);
  };

  return (
    <div className={`min-h-screen bg-[#030610] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200 ${lang === 'ta' ? 'font-tamil' : 'font-sans'}`}>
      {/* Offline PWA Indicator Bar */}
      <AnimatePresence>
        {isOffline && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="fixed top-0 inset-x-0 z-50 bg-amber-600/95 text-slate-950 font-bold px-4 py-2 text-xs flex items-center justify-center gap-2 backdrop-blur-md shadow-lg"
          >
            <WifiOff size={14} />
            <span>
              {lang === 'ta'
                ? 'ஆஃப்லைன் பயன்முறை — இணைய இணைப்பு இல்லாமல் வேதாகம வசனங்கள் & ஜெப குறிப்புகளைப் பார்க்கலாம்.'
                : 'Offline Mode Active — Scripture verses, schedule, and cached content remain fully accessible.'}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Opening Cinematic Entry Sequence */}
      <AnimatePresence>
        {showIntro && (
          <IntroCinematic
            key="intro"
            onComplete={handleCompleteIntro}
            lang={lang}
          />
        )}
      </AnimatePresence>

      {/* Main Website Structure */}
      <div className="relative">
        {/* Navigation Bar */}
        <Navbar
          lang={lang}
          onToggleLang={handleToggleLang}
          onOpenPrayerModal={handleOpenPrayerModal}
        />

        <main id="main-content">
          {/* 1. Hero Section — "JESUS IS COMING SOON" with 3D WebGL Canvas */}
          <HeroSection
            lang={lang}
            onOpenPrayerModal={handleOpenPrayerModal}
          />

          {/* 2. Warning / End-Time Section */}
          <WarningSection
            lang={lang}
            onOpenPrayerModal={handleOpenPrayerModal}
          />

          {/* 3. Pastor Pr. V. Arul Dhas Section */}
          <PastorSection
            lang={lang}
            onOpenPrayerModal={handleOpenPrayerModal}
          />

          {/* 4. Family & Ministry Section */}
          <FamilySection
            lang={lang}
          />

          {/* 5. Prayer Request Major CTA */}
          <PrayerRequestSection
            lang={lang}
          />

          {/* 6. Community Prayer Wall & Praise Reports */}
          <PrayerWallSection
            lang={lang}
            onOpenPrayerModal={handleOpenPrayerModal}
          />

          {/* 7. YouTube Messages & Sermons */}
          <MessagesSection
            lang={lang}
          />

          {/* 8. "The Word of God" Bible Scripture Section */}
          <WordOfGodSection
            lang={lang}
          />

          {/* 9. Live Prayer & Weekly Service Timetable */}
          <LivePrayerSection
            lang={lang}
          />

          {/* 10. Contact & Location Section */}
          <ContactSection
            lang={lang}
            onOpenPrayerModal={handleOpenPrayerModal}
          />
        </main>

        {/* Global Prayer Request Modal Dialog */}
        <PrayerModal
          isOpen={isPrayerModalOpen}
          onClose={handleClosePrayerModal}
          lang={lang}
        />
      </div>
    </div>
  );
}
