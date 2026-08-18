import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Sparkles, ArrowRight } from 'lucide-react';
import { JsptLogo } from './JsptLogo';
import { ambientAudio } from '../utils/audioSynth';
import { Language } from '../types';

interface IntroCinematicProps {
  onComplete: () => void;
  lang: Language;
}

export const IntroCinematic: React.FC<IntroCinematicProps> = ({ onComplete, lang }) => {
  const [step, setStep] = useState<number>(0);
  const [audioEnabled, setAudioEnabled] = useState(false);

  useEffect(() => {
    // Stage progression:
    // Step 0: Pure black (500ms)
    // Step 1: Tiny point of light ✦ (1500ms)
    // Step 2: Radiant Expanding Cross & divine rays (2500ms)
    // Step 3: Logo & Church backdrop emerge (2500ms)
    // Step 4: "JESUS IS COMING SOON" proclamation (2500ms)
    // Step 5: Ready to enter
    const t1 = setTimeout(() => setStep(1), 600);
    const t2 = setTimeout(() => setStep(2), 2200);
    const t3 = setTimeout(() => setStep(3), 4800);
    const t4 = setTimeout(() => setStep(4), 7200);
    const t5 = setTimeout(() => setStep(5), 9800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  const handleToggleAudio = () => {
    const isPlaying = ambientAudio.toggle();
    setAudioEnabled(isPlaying);
  };

  const handleEnter = () => {
    if (!audioEnabled) {
      // Gentle start on user gesture if desired
      ambientAudio.start();
    }
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020409] text-white overflow-hidden"
    >
      {/* Background Church Silhouette in later steps */}
      <AnimatePresence>
        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 0.28, scale: 1.02 }}
            transition={{ duration: 3, ease: 'easeOut' }}
            className="absolute inset-0 bg-cover bg-center pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at center, rgba(3,7,18,0.2) 0%, rgba(2,4,9,0.95) 90%), url('/images/hero-church.webp')`,
            }}
          />
        )}
      </AnimatePresence>

      {/* Floating Starlight Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-200/40"
            style={{
              width: `${(i % 3) + 1.5}px`,
              height: `${(i % 3) + 1.5}px`,
              top: `${(i * 19) % 100}%`,
              left: `${(i * 31) % 100}%`,
              animation: `floatParticle ${5 + (i % 6)}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Audio controls in top right */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
        <button
          id="intro-audio-btn"
          onClick={handleToggleAudio}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-xs text-amber-300/90 backdrop-blur-md hover:bg-slate-800 transition-colors"
        >
          {audioEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
          <span>{audioEnabled ? (lang === 'ta' ? 'இசை ஒலிக்கிறது' : 'Atmosphere On') : (lang === 'ta' ? 'இசையை இயக்கு' : 'Soundscape')}</span>
        </button>

        <button
          id="skip-intro-btn"
          onClick={handleEnter}
          className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300 hover:bg-amber-500/20 transition-colors"
        >
          <span>{lang === 'ta' ? 'நேரடியாக உள்நுழை' : 'Enter Site'}</span>
          <ArrowRight size={13} />
        </button>
      </div>

      {/* Main Center Animation Progression */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-3xl">
        {/* Step 1: Tiny Point of Light ✦ */}
        {step === 1 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.4, 1], opacity: [0, 1, 0.9] }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            <span className="text-4xl md:text-5xl text-amber-300 drop-shadow-[0_0_25px_rgba(251,191,36,0.9)] animate-pulse">
              ✦
            </span>
          </motion.div>
        )}

        {/* Step 2: Radiant Expanding Cross & Beams */}
        {step === 2 && (
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
            className="relative flex flex-col items-center"
          >
            {/* Pulsing Aura */}
            <div className="absolute -inset-20 bg-amber-500/15 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
            <div className="relative z-10 w-20 h-28 flex items-center justify-center">
              {/* Luminous Cross SVG */}
              <svg width="70" height="95" viewBox="0 0 100 135" fill="none" className="drop-shadow-[0_0_35px_rgba(251,191,36,1)]">
                <path
                  d="M44 0 H56 V35 H95 V48 H56 V135 H44 V48 H5 V35 H44 V0 Z"
                  fill="url(#crossGrad)"
                />
                <defs>
                  <linearGradient id="crossGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFBEB" />
                    <stop offset="50%" stopColor="#FBBF24" />
                    <stop offset="100%" stopColor="#D97706" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-sm md:text-base font-cinzel tracking-[0.3em] text-amber-200/90 uppercase"
            >
              The Light Shines in Darkness
            </motion.p>
          </motion.div>
        )}

        {/* Step 3: Logo Reveal */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6 }}
            className="flex flex-col items-center"
          >
            <JsptLogo size="xl" withGlow={true} />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-4 text-xs md:text-sm tracking-[0.35em] text-slate-300 font-semibold uppercase font-cinzel"
            >
              Jesus Saves Prayer Team
            </motion.p>
          </motion.div>
        )}

        {/* Step 4 & 5: Grand Proclamation "JESUS IS COMING SOON" */}
        {step >= 4 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="flex flex-col items-center"
          >
            <div className="mb-4">
              <JsptLogo size="md" withGlow={true} />
            </div>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              className="space-y-3"
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-cinzel tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-amber-300 drop-shadow-[0_0_30px_rgba(251,191,36,0.5)]">
                “JESUS IS COMING SOON”
              </h1>
              {lang === 'ta' && (
                <p className="text-xl md:text-2xl font-tamil font-bold text-amber-300/90 tracking-wide">
                  “இயேசு சீக்கிரம் வருகிறார்”
                </p>
              )}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 0.6 }}
              className="mt-4 text-sm md:text-base font-cinzel tracking-[0.2em] text-slate-300 uppercase max-w-xl"
            >
              {lang === 'ta'
                ? 'நம் கர்த்தராகிய இயேசு கிறிஸ்துவை சந்திக்க ஆயத்தமாகுங்கள்'
                : 'Get Ready to Meet Our Lord Jesus Christ'}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4"
            >
              <button
                id="intro-enter-main-btn"
                onClick={handleEnter}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-bold text-base md:text-lg tracking-wider font-cinzel shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:shadow-[0_0_45px_rgba(245,158,11,0.8)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-slate-900 group-hover:rotate-12 transition-transform" />
                <span>{lang === 'ta' ? 'இறை பிரசன்னத்திற்குள் நுழைக' : 'ENTER SANCTUARY'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Footnote */}
      <div className="absolute bottom-6 text-center text-xs text-slate-400 tracking-widest font-cinzel">
        JESUS SAVES PRAYER TEAM MINISTRY • FOUNDER PR. V. ARUL DHAS
      </div>
    </motion.div>
  );
};
