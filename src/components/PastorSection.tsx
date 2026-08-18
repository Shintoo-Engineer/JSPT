import React from 'react';
import { motion } from 'motion/react';
import { Youtube, ExternalLink, Flame, Users, Video, Eye, Award, HeartHandshake } from 'lucide-react';
import { Language } from '../types';
import { YOUTUBE_CHANNEL_URL } from '../data/content';

interface PastorSectionProps {
  lang: Language;
  onOpenPrayerModal: () => void;
}

export const PastorSection: React.FC<PastorSectionProps> = ({ lang, onOpenPrayerModal }) => {
  const stats = [
    {
      icon: Users,
      value: '154K+',
      labelEn: 'YouTube Subscribers',
      labelTa: 'யூடியூப் சந்தாதாரர்கள்',
      color: 'from-amber-400 to-amber-600',
    },
    {
      icon: Video,
      value: '787+',
      labelEn: 'Gospel & Prophetic Videos',
      labelTa: 'சுவிசேஷ & எச்சரிப்பு வீடியோக்கள்',
      color: 'from-sky-400 to-blue-600',
    },
    {
      icon: Eye,
      value: '3.3M+',
      labelEn: 'Total Views & Touched Lives',
      labelTa: 'பார்வைகள் & தொடப்பட்ட மக்கள்',
      color: 'from-emerald-400 to-teal-600',
    },
  ];

  return (
    <section
      id="pastor"
      className="relative py-24 px-4 bg-[#050914] text-white overflow-hidden border-t border-slate-900"
    >
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Pastor Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-md">
              {/* Outer Radiant Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/30 via-sky-500/20 to-amber-500/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-2xl">
                {/* Pastor Portrait Image */}
                <div className="relative h-[440px] sm:h-[480px] w-full overflow-hidden bg-slate-950">
                  <img
                    src="/images/pastor.png"
                    alt="Pr. V. Arul Dhas - Jesus Saves Prayer Team"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-[#050914]/40 to-transparent" />

                  {/* Ministry Preaching Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 border border-amber-500/50 text-amber-300 text-xs font-semibold backdrop-blur-md">
                    <Flame size={14} className="text-amber-400" />
                    <span>Founder & Anointed Minister</span>
                  </div>

                  {/* Name banner overlay on image */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800">
                    <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-white">
                      PR. V. ARUL DHAS
                    </h3>
                    <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                      Founder & Chief Minister • JSPT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio, Vision & Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5 text-sky-400" />
              <span>{lang === 'ta' ? 'தேவனால் அபிஷேகம் பெற்ற ஊழியர்' : 'God’s Chosen Vessel of Prayer'}</span>
            </div>

            {/* Title & Titles */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-cinzel text-white tracking-wide">
                PR. V. ARUL DHAS
              </h2>
              <p className="text-base sm:text-lg text-amber-400 font-semibold font-cinzel mt-1">
                {lang === 'ta'
                  ? 'நிறுவனர் & ஊழியர் — இயேசு இரட்சிக்கிறார் ஜெபக்குழு (JSPT)'
                  : 'Founder & Minister — Jesus Saves Prayer Team'}
              </p>
            </div>

            {/* Ministry Intro Bio */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                {lang === 'ta'
                  ? 'போதகர் வி. அருள் தாஸ் அவர்கள் கடந்த பல வருடங்களாக பரிசுத்த ஆவியானவரின் வழிநடத்துதலோடு, உடைந்த உள்ளங்களுக்கு ஆறுதல் அளிக்கவும், பிசாசின் கட்டுகளில் உள்ளவர்களை இயேசுவின் நாமத்தில் விடுவிக்கவும், கடைசி கால எச்சரிப்பு செய்திகளை உலகம் முழுவதற்கும் பறைசாற்றவும் தியாகத்தோடு ஊழியத்தை நிறைவேற்றி வருகிறார்.'
                  : 'Pr. V. Arul Dhas has dedicated his life to the relentless ministry of intercessory prayer, end-time warning messages, and healing deliverance. Carrying an anointed burden for the perishing souls of this generation, his messages bring thousands into genuine repentance and unwavering faith in Lord Jesus Christ.'}
              </p>
              <p className="text-slate-400 text-xs sm:text-sm">
                {lang === 'ta'
                  ? '“ஜெபமே ஜெயம்! கர்த்தருடைய வருகை மிகச் சமீபமாயிருக்கிறது. நாம் ஒவ்வொருவரும் நமது ஆத்துமாவையும், குடும்பங்களையும் பரிசுத்தமாய் காத்துக்கொள்ள வேண்டும்.”'
                  : '“Prayer is Victory! The coming of our Lord Jesus is at the very door. We must stand in the gap, keeping our lamps filled with the oil of the Holy Spirit.”'}
              </p>
            </div>

            {/* Animated Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {stats.map((stat, i) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-amber-400 mb-2 group-hover:scale-110 transition-transform">
                      <IconComponent size={18} />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black font-cinzel text-white group-hover:text-amber-300 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5 leading-tight">
                      {lang === 'ta' ? stat.labelTa : stat.labelEn}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons: YouTube Channel & Prayer */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                id="pastor-youtube-channel-btn"
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wider font-cinzel shadow-[0_0_25px_rgba(220,38,38,0.4)] hover:shadow-[0_0_35px_rgba(220,38,38,0.7)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Youtube size={18} />
                <span>WATCH ON YOUTUBE →</span>
              </a>

              <button
                id="pastor-request-prayer-btn"
                onClick={onOpenPrayerModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-500/50 text-slate-200 hover:text-amber-300 font-bold text-sm tracking-wider font-cinzel transition-all"
              >
                <HeartHandshake size={18} />
                <span>{lang === 'ta' ? 'போதகரிடம் ஜெப உதவி கேட்க' : 'REQUEST PRAYER FROM PASTOR'}</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
