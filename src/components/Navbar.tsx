import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Volume2, VolumeX, HeartHandshake, PhoneCall, Youtube, Calendar } from 'lucide-react';
import { JsptLogo } from './JsptLogo';
import { Language } from '../types';
import { WHATSAPP_LINK } from '../data/content';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenPrayerModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenPrayerModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = async () => {
    const active = await ambientAudio.toggle();
    setIsPlayingAudio(active);
  };

  const navLinks = [
    { id: 'hero', href: '#hero', en: 'Home', ta: 'முகப்பு' },
    { id: 'warning', href: '#warning', en: 'End-Time Warning', ta: 'எச்சரிப்பு செய்தி' },
    { id: 'pastor', href: '#pastor', en: 'Founder', ta: 'போதகர்' },
    { id: 'ministry', href: '#ministry', en: 'Ministry', ta: 'ஊழியம்' },
    { id: 'prayer-request', href: '#prayer-request', en: 'Need Prayer?', ta: 'ஜெபம் தேவையா?' },
    { id: 'prayer-wall', href: '#prayer-wall', en: 'Prayer Wall', ta: 'ஜெப சுவர்' },
    { id: 'messages', href: '#messages', en: 'Messages', ta: 'செய்திகள்' },
    { id: 'schedule', href: '#schedule', en: 'Live & Schedule', ta: 'நேரலை & நேரம்' },
    { id: 'contact', href: '#contact', en: 'Contact', ta: 'தொடர்பு' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050811]/92 backdrop-blur-md border-b border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.7)] py-2.5'
          : 'bg-gradient-to-b from-[#020409]/95 via-[#020409]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center group">
          <JsptLogo size="md" withGlow={isScrolled} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="px-2.5 py-1.5 rounded-lg text-xs xl:text-sm font-medium text-slate-300 hover:text-amber-300 hover:bg-slate-800/50 transition-colors"
            >
              {lang === 'ta' ? link.ta : link.en}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Ambient Audio Toggle */}
          <button
            id="nav-ambient-audio-btn"
            onClick={handleToggleSound}
            title={isPlayingAudio ? 'Mute Atmosphere' : 'Play Celestial Atmosphere'}
            className={`p-2 rounded-full border transition-all ${
              isPlayingAudio
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.3)] animate-pulse'
                : 'bg-slate-900/80 border-slate-700/60 text-slate-400 hover:text-amber-200 hover:border-slate-600'
            }`}
          >
            {isPlayingAudio ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* Bilingual Language Switcher */}
          <button
            id="nav-lang-toggle-btn"
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-xs font-semibold text-slate-200 hover:border-amber-500/50 hover:text-amber-300 transition-colors"
          >
            <Globe size={13} className="text-amber-400" />
            <span>{lang === 'en' ? 'தமிழ்' : 'English'}</span>
          </button>

          {/* Direct WhatsApp Call/Chat */}
          <a
            id="nav-whatsapp-quick-link"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp Prayer Line: 9489919343"
            className="hidden xl:flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/25 text-xs font-semibold transition-colors"
          >
            <PhoneCall size={13} />
            <span>9489919343</span>
          </a>

          {/* Prayer Request CTA */}
          <button
            id="nav-prayer-request-btn"
            onClick={onOpenPrayerModal}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs tracking-wider font-cinzel shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] transition-all cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <HeartHandshake size={14} />
            <span>{lang === 'ta' ? 'ஜெப விண்ணப்பம்' : 'SUBMIT PRAYER'}</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onToggleLang}
            className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs text-amber-300 font-semibold"
          >
            {lang === 'en' ? 'தமிழ்' : 'EN'}
          </button>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-amber-300 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070B14]/98 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl">
          <div className="grid grid-cols-2 gap-1.5 pb-3 border-b border-slate-800/80">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={handleNavClick}
                className="px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-amber-300 hover:bg-slate-800/60 transition-colors"
              >
                {lang === 'ta' ? link.ta : link.en}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2.5 pt-1">
            <button
              onClick={() => {
                handleToggleSound();
              }}
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-900 border border-slate-700/80 text-xs text-amber-300 font-medium"
            >
              {isPlayingAudio ? <Volume2 size={15} /> : <VolumeX size={15} />}
              <span>{isPlayingAudio ? (lang === 'ta' ? 'அமைதி இசை அணை' : 'Atmosphere: On') : (lang === 'ta' ? 'அமைதி இசை இயக்கு' : 'Atmosphere: Off')}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrayerModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs tracking-wider font-cinzel shadow-lg"
            >
              <HeartHandshake size={15} />
              <span>{lang === 'ta' ? 'ஜெப விண்ணப்பம் அனுப்பவும்' : 'SUBMIT PRAYER REQUEST'}</span>
            </button>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 font-semibold text-xs text-center"
            >
              <PhoneCall size={14} />
              <span>WhatsApp Prayer: 9489919343</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
