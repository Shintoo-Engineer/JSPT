import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Users, Shield, BookOpen } from 'lucide-react';
import { Language } from '../types';

interface FamilySectionProps {
  lang: Language;
}

export const FamilySection: React.FC<FamilySectionProps> = ({ lang }) => {
  return (
    <section
      id="ministry"
      className="relative py-28 px-4 bg-[#030610] text-white overflow-hidden border-t border-slate-900"
    >
      {/* Radiant Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-widest"
          >
            <Sparkles size={14} className="text-amber-400" />
            <span>{lang === 'ta' ? 'குடும்பத்தின் அர்ப்பணிப்பு ஊழியம்' : 'Dedicated Family Ministry'}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black font-cinzel tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-amber-300 uppercase"
          >
            {lang === 'ta' ? 'ஜெபத்தின் ஊழியம்' : 'A MINISTRY OF PRAYER'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            “As for me and my house, we will serve the LORD.” — Joshua 24:15
          </motion.p>
        </div>

        {/* Large Cinematic Image Card with Golden Glow & Hover Depth */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative max-w-4xl mx-auto group"
        >
          {/* Golden Glow Aura surrounding the card */}
          <div className="absolute -inset-3 bg-gradient-to-r from-amber-500/40 via-sky-500/20 to-amber-500/40 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Cinematic Container Card */}
          <div className="relative rounded-3xl overflow-hidden bg-slate-900/90 border border-amber-500/40 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            {/* Photograph display with depth zoom and subtle motion */}
            <div className="relative h-[380px] sm:h-[480px] md:h-[540px] w-full overflow-hidden bg-slate-950 flex items-center justify-center">
             <img
                 src="/images/family.png"
                 alt="Pr. V. Arul Dhas and family in ministry"
                 className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                 loading="lazy"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030610] via-[#030610]/40 to-transparent" />

              {/* Card Foreground Quote overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 text-center flex flex-col items-center">
                <div className="p-4 sm:p-6 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-700/80 max-w-2xl w-full shadow-2xl">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-cinzel text-amber-200 tracking-wider mb-2">
                    {lang === 'ta' ? 'ஜெபத்தின் ஊழியம்' : 'A MINISTRY OF PRAYER'}
                  </h3>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    {lang === 'ta'
                      ? 'இயேசு இரட்சிக்கிறார் ஜெபக்குழு (JSPT) சுவிசேஷத்தை அறிவிக்கவும், மக்களை ஜெபத்திற்கு அழைக்கவும், இயேசு கிறிஸ்துவின் வருகைக்கு இதயங்களை ஆயத்தப்படுத்தவும் அர்ப்பணிக்கப்பட்டுள்ளது.'
                      : 'Jesus Saves Prayer Team exists to proclaim the Gospel, call people to prayer, and prepare hearts for the coming of Jesus Christ.'}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm font-cinzel text-amber-400 font-semibold tracking-widest uppercase">
                    Pr. V. Arul Dhas & Family in God’s Service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 Core Pillars of the Family Ministry */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <BookOpen size={20} />
            </div>
            <h4 className="text-base font-bold font-cinzel text-white">
              {lang === 'ta' ? 'சுவிசேஷ பிரகடனம்' : 'Gospel Proclamation'}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'ta'
                ? 'ஒவ்வொரு மனிதனுக்கும் இயேசுவின் இரட்சிப்பின் நற்செய்தியை அறிவித்தல்.'
                : 'Sharing the pure, uncompromised Good News of Jesus Christ across all nations.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <Heart size={20} />
            </div>
            <h4 className="text-base font-bold font-cinzel text-white">
              {lang === 'ta' ? 'கண்ணீரின் பரிந்துபேசுதல்' : 'Tearful Intercession'}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'ta'
                ? 'வியாதியஸ்தர்கள், உடைந்த குடும்பங்கள் மற்றும் தேசத்தின் விடுதலைக்காக இடைவிடா ஜெபம்.'
                : 'Standing continuously in the gap for the sick, brokenhearted, and nations.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Shield size={20} />
            </div>
            <h4 className="text-base font-bold font-cinzel text-white">
              {lang === 'ta' ? 'வருகைக்கான ஆயத்தம்' : 'End-Time Preparation'}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'ta'
                ? 'கிறிஸ்துவின் இரண்டாம் வருகையை சந்திக்க ஆத்துமாக்களை பரிசுத்தத்தில் வழிநடத்துதல்.'
                : 'Awakening souls to live holy and ready for the Rapture of the saints.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
