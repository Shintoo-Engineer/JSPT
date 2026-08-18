import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Sparkles, ChevronDown, Radio, Flame } from 'lucide-react';
import { JsptLogo } from './JsptLogo';
import { Cinematic3DHero } from './Cinematic3DHero';
import { Language } from '../types';

interface HeroSectionProps {
  lang: Language;
  onOpenPrayerModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang, onOpenPrayerModal }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (el) {
        el.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const headlineWordsEn = ['“JESUS', 'IS', 'COMING', 'SOON”'];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-[#03060F]"
    >
      {/* 3D WebGL Three.js Particle & Luminous Cross Canvas */}
      <Cinematic3DHero />

      {/* Local Background Church Cinematic Image with Parallax & Slow Zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-40 mix-blend-screen scale-105"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(3,6,15,0.2) 0%, rgba(3,6,15,0.85) 70%, rgba(2,4,10,0.98) 100%), url('/images/hero-church.webp')`,
          x: mousePos.x * 20,
          y: mousePos.y * 20,
        }}
        animate={{
          scale: [1.02, 1.06, 1.02],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Central Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Luminous Cross Emblem & Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(245,158,11,0.2)] backdrop-blur-md"
        >
          <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>{lang === 'ta' ? 'கடைசி கால தீர்க்கதரிசன ஜெப ஊழியம்' : 'End-Time Prophetic Prayer Ministry'}</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        </motion.div>

        {/* JSPT Brand Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mb-4 flex flex-col items-center"
        >
          <JsptLogo size="lg" withGlow={true} />
        </motion.div>

        {/* Word-by-Word Animated Headline: “JESUS IS COMING SOON” */}
        <div className="my-3 flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-center">
          {headlineWordsEn.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.7,
                delay: 0.4 + index * 0.15,
                ease: 'easeOut',
              }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-cinzel tracking-[0.08em] text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 to-amber-400 drop-shadow-[0_0_35px_rgba(251,191,36,0.6)]"
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Tamil Subtitle Proclamation */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold font-tamil text-amber-300 mt-2 tracking-wide drop-shadow-[0_0_20px_rgba(251,191,36,0.4)]"
        >
          “இயேசு விரைவில் வருகிறார்”
        </motion.p>

        {/* Secondary Catchphrase: “GET READY TO MEET OUR LORD JESUS CHRIST” */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-cinzel font-semibold tracking-[0.2em] text-slate-200 uppercase max-w-2xl text-center leading-relaxed"
        >
          {lang === 'ta'
            ? '“நம் கர்த்தராகிய இயேசு கிறிஸ்துவை சந்திக்க ஆயத்தமாகுங்கள்”'
            : '“GET READY TO MEET OUR LORD JESUS CHRIST”'}
        </motion.p>

        {/* Service Schedule Quick Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-6 flex flex-wrap justify-center items-center gap-3 text-xs text-slate-300 bg-slate-950/60 border border-slate-800/80 px-4 py-2 rounded-2xl backdrop-blur-md"
        >
          <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
            <Radio className="w-3.5 h-3.5 text-red-400 animate-pulse" />
            {lang === 'ta' ? 'வாராந்திர ஆராதனைகள்:' : 'Weekly Services:'}
          </span>
          <span className="text-slate-300">
            ☀️ {lang === 'ta' ? 'ஞாயிறு: 10 AM - 1 PM' : 'Sun: 10 AM - 1 PM'}
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-300">
            🔥 {lang === 'ta' ? 'வெள்ளி உபவாசம்: 10 AM - 9 PM' : 'Fri Fasting: 10 AM - 9 PM'}
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-300">
            🌱 {lang === 'ta' ? 'சனி சிறுவர்கள்: 5 PM - 6 PM' : 'Sat Kids: 5 PM - 6 PM'}
          </span>
        </motion.div>

        {/* Glowing Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none"
        >
          {/* Submit Prayer Request Button */}
          <button
            id="hero-submit-prayer-btn"
            onClick={onOpenPrayerModal}
            className="w-full sm:w-auto group relative flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-bold text-sm sm:text-base tracking-wider font-cinzel shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:shadow-[0_0_45px_rgba(245,158,11,0.8)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span className="text-lg">🙏</span>
            <span>{lang === 'ta' ? 'ஜெப விண்ணப்பம் அனுப்பவும்' : 'SUBMIT PRAYER REQUEST'}</span>
            <Sparkles className="w-4 h-4 text-slate-900 group-hover:rotate-45 transition-transform" />
          </button>

          {/* Watch Messages Button */}
          <a
            id="hero-watch-messages-btn"
            href="#messages"
            className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-amber-500/60 text-slate-100 font-bold text-sm sm:text-base tracking-wider font-cinzel hover:bg-slate-800/90 shadow-lg hover:shadow-[0_0_25px_rgba(56,189,248,0.25)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <Play size={12} className="fill-white ml-0.5" />
            </div>
            <span>{lang === 'ta' ? 'செய்திகளைப் பாருங்கள்' : 'WATCH MESSAGES'}</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-14"
        >
          <a
            href="#warning"
            className="flex flex-col items-center gap-1.5 text-xs text-slate-400 hover:text-amber-300 font-cinzel tracking-widest uppercase transition-colors"
          >
            <span>{lang === 'ta' ? 'எச்சரிப்பு செய்தி' : 'End-Time Message'}</span>
            <ChevronDown size={18} className="text-amber-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
