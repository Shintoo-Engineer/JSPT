import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Sparkles, ChevronLeft, ChevronRight, Copy, Check, Share2 } from 'lucide-react';
import { Language } from '../types';
import { BIBLE_VERSES } from '../data/content';

interface WordOfGodSectionProps {
  lang: Language;
}

export const WordOfGodSection: React.FC<WordOfGodSectionProps> = ({ lang }) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const verse = BIBLE_VERSES[currentIdx];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % BIBLE_VERSES.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + BIBLE_VERSES.length) % BIBLE_VERSES.length);
  };

  const handleCopy = () => {
    const textToCopy = `${lang === 'ta' ? verse.textTa : verse.textEn}\n— ${
      lang === 'ta' ? verse.referenceTa : verse.referenceEn
    }\n(Jesus Saves Prayer Team)`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="word-of-god"
      className="relative py-28 px-4 bg-[#040816] text-white overflow-hidden border-t border-slate-900"
    >
      {/* Peaceful Atmosphere: Soft heavenly clouds & ethereal rays */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-20"
        style={{
          backgroundImage: `url('/images/bible.webp')`,
        }}
      />

      {/* Gentle Rotating Golden Ray */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-30 animate-divine-ray">
        <div
          className="w-full h-full"
          style={{
            background: 'conic-gradient(from 0deg at 50% 50%, rgba(251,191,36,0.15) 0deg, transparent 60deg, rgba(56,189,248,0.15) 180deg, transparent 240deg, rgba(251,191,36,0.15) 360deg)',
          }}
        />
      </div>

      {/* Floating Gentle Light Sparks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-sky-200/40"
            style={{
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              top: `${(i * 23) % 100}%`,
              left: `${(i * 29) % 100}%`,
              animation: `floatParticle ${7 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/70 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-widest mb-6">
          <BookOpen size={14} className="text-sky-400" />
          <span>{lang === 'ta' ? 'ஜீவனுள்ள தேவ வார்த்தை' : 'The Living Word of God'}</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-black font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-amber-300 mb-10 tracking-wider">
          {lang === 'ta' ? 'தேவனுடைய வார்த்தை' : 'THE WORD OF GOD'}
        </h2>

        {/* Scripture Card Display */}
        <div className="relative rounded-3xl bg-slate-900/80 border border-slate-800/90 p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-md">
          {/* Subtle Cross watermark behind scripture */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <svg width="200" height="280" viewBox="0 0 100 140" fill="white">
              <path d="M42 0 H58 V35 H95 V50 H58 V140 H42 V50 H5 V35 H42 V0 Z" />
            </svg>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 space-y-6"
            >
              {/* Theme Badge */}
              <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 tracking-wider uppercase font-cinzel">
                {verse.theme}
              </span>

              {/* Main Scripture Text */}
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif text-slate-100 italic leading-relaxed max-w-3xl mx-auto">
                {verse.textEn}
              </blockquote>

              {/* Tamil Scripture Translation */}
              <p className="text-lg sm:text-xl font-tamil text-amber-300 font-medium leading-relaxed max-w-2xl mx-auto pt-1">
                {verse.textTa}
              </p>

              {/* Bible Reference Citation */}
              <div className="pt-4 flex flex-col items-center">
                <cite className="not-italic text-sm sm:text-base font-bold font-cinzel text-sky-300 tracking-widest uppercase">
                  — {lang === 'ta' ? verse.referenceTa : verse.referenceEn}
                </cite>
                <span className="text-[11px] text-slate-400 mt-1">Holy Bible • King James Version</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Action Row & Carousel Navigation */}
          <div className="mt-10 pt-6 border-t border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Verse"
                className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 text-slate-300 hover:text-white transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-xs font-mono text-slate-400">
                0{currentIdx + 1} / 0{BIBLE_VERSES.length}
              </span>
              <button
                onClick={handleNext}
                aria-label="Next Verse"
                className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 text-slate-300 hover:text-white transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Copy Verse Action */}
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span className="text-emerald-400">{lang === 'ta' ? 'நகலெடுக்கப்பட்டது!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>{lang === 'ta' ? 'வசனத்தை நகலெடு' : 'Copy Verse'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
