import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Flame, ShieldAlert, Sparkles, BookOpen, Clock, HeartHandshake } from 'lucide-react';
import { Language } from '../types';
import { WARNING_STEPS } from '../data/content';

interface WarningSectionProps {
  lang: Language;
  onOpenPrayerModal: () => void;
}

export const WarningSection: React.FC<WarningSectionProps> = ({ lang, onOpenPrayerModal }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section
      id="warning"
      className="relative py-28 px-4 bg-[#020408] text-white overflow-hidden border-t border-slate-900"
    >
      {/* Background Ambience: Deep solemn vignette and glowing embers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(180,83,9,0.15),rgba(2,4,8,1))]" />
      
      {/* Subtle Ember Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] shadow-[0_0_25px_rgba(239,68,68,0.2)]"
          >
            <AlertTriangle className="w-4 h-4 text-red-400 animate-pulse" />
            <span>{lang === 'ta' ? 'அவசர எச்சரிப்பு செய்தி' : 'Urgent Prophetic Call'}</span>
            <Flame className="w-4 h-4 text-orange-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-black font-cinzel tracking-[0.12em] text-white drop-shadow-[0_0_30px_rgba(239,68,68,0.3)] uppercase"
          >
            ⚠️ {lang === 'ta' ? 'இந்த தலைமுறைக்கான எச்சரிப்பு செய்தி' : 'A MESSAGE FOR THIS GENERATION'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            {lang === 'ta'
              ? 'காலம் செல்லுகிறது, நித்தியம் நெருங்குகிறது. கர்த்தருடைய வார்த்தைக்கு செவிகொடுத்து விழித்திருங்கள்.'
              : 'Time is fleeting, eternity is near. Hear the solemn call of the Spirit to prepare your soul, family, and walk with God.'}
          </motion.p>
        </div>

        {/* Sequential 6 Pillars of Warning */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WARNING_STEPS.map((step, idx) => {
            const isHighlighted = activeStep === step.id;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                onMouseEnter={() => setActiveStep(step.id)}
                className={`relative group rounded-2xl p-8 transition-all duration-500 border ${
                  isHighlighted
                    ? 'bg-slate-900/90 border-amber-500/60 shadow-[0_0_40px_rgba(245,158,11,0.2)] -translate-y-1'
                    : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Step Marker */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-slate-500 group-hover:text-amber-400 transition-colors">
                    PILLAR 0{step.id}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:border-amber-500 transition-all">
                    {step.id === 1 && <Clock className="w-4 h-4" />}
                    {step.id === 2 && <ShieldAlert className="w-4 h-4" />}
                    {step.id === 3 && <Flame className="w-4 h-4 text-red-400" />}
                    {step.id === 4 && <AlertTriangle className="w-4 h-4" />}
                    {step.id === 5 && <HeartHandshake className="w-4 h-4" />}
                    {step.id === 6 && <Sparkles className="w-4 h-4 text-amber-300" />}
                  </div>
                </div>

                {/* Big Solemn Typography */}
                <h3 className="text-2xl sm:text-3xl font-black font-cinzel tracking-wider text-white mb-2 group-hover:text-amber-200 transition-colors">
                  {step.titleEn}
                </h3>

                {/* Tamil Translation */}
                <p className="text-lg font-bold font-tamil text-amber-400/95 mb-4">
                  {step.titleTa}
                </p>

                {/* Explanatory subtitle */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {lang === 'ta' ? step.subtitleTa : step.subtitleEn}
                </p>

                {/* Scripture citation badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-400 group-hover:text-amber-300 group-hover:border-amber-500/30 transition-colors">
                  <BookOpen className="w-3 h-3 text-amber-400" />
                  <span>{step.scripture}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Solemn Call-to-Action Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 p-8 sm:p-10 text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
        >
          <div className="absolute -right-16 -top-16 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <h4 className="text-2xl sm:text-3xl font-bold font-cinzel text-amber-200">
              {lang === 'ta'
                ? '“இதோ, நான் சீக்கிரமாய் வருகிறேன்; அவனவனுக்கு அளிக்கிற பலன் என்னோடேகூட வருகிறது.”'
                : '“Behold, I Come Quickly; and My Reward is With Me.”'}
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {lang === 'ta'
                ? 'உங்கள் வாழ்க்கையை இயேசுவின் கரத்தில் ஒப்புக்கொடுத்து, மனந்திரும்பி, ஜெபத்தில் உங்களை பலப்படுத்திக்கொள்ளுங்கள்.'
                : 'Surrender your life to Christ today. If you need salvation, peace, or divine strength, let our prayer team join in agreement with you.'}
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <button
                id="warning-repent-prayer-btn"
                onClick={onOpenPrayerModal}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm tracking-wider font-cinzel shadow-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all cursor-pointer transform hover:scale-105"
              >
                🙏 {lang === 'ta' ? 'மனந்திரும்புதல் & இரட்சிப்பின் ஜெபம்' : 'PRAY WITH OUR TEAM'}
              </button>
              <a
                href="#messages"
                className="px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm tracking-wider font-cinzel transition-colors"
              >
                🎥 {lang === 'ta' ? 'எச்சரிப்பு வீடியோ செய்திகள்' : 'WATCH WARNING SERMONS'}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
