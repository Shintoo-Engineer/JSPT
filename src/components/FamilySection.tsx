import React from 'react';
import { motion } from 'motion/react';
import {
  Church,
  Heart,
  Users,
  Shield,
  BookOpen,
  Flame,
  Cross,
} from 'lucide-react';
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
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ================= SECTION HEADING ================= */}
        <div className="text-center mb-14 space-y-4">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-widest"
          >
            <Church size={14} className="text-amber-400" />

            <span>
              {lang === 'ta'
                ? 'இயேசு இரட்சிக்கிறார் சபை'
                : 'JESUS SAVES CHURCH'}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black font-cinzel tracking-wider text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-white to-amber-300 uppercase"
          >
            {lang === 'ta'
              ? 'ஜெபமும் ஆராதனையும் நிறைந்த சபை'
              : 'A CHURCH OF PRAYER & FAITH'}
          </motion.h2>

          {/* Scripture */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            {lang === 'ta'
              ? '“என்னை நோக்கிக் கூப்பிடு, நான் உனக்கு உத்தரவு கொடுத்து, நீ அறியாத பெரிய காரியங்களையும் எட்டாத காரியங்களையும் உனக்கு அறிவிப்பேன்.” — எரேமியா 33:3'
              : '“Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not.” — Jeremiah 33:3'}
          </motion.p>
        </div>

        {/* ================= MAIN CHURCH CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative max-w-5xl mx-auto group"
        >

          {/* Golden Glow */}
          <div className="absolute -inset-3 bg-linear-to-r from-amber-500/30 via-sky-500/15 to-amber-500/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Main Card */}
          <div className="relative rounded-3xl overflow-hidden bg-slate-900/90 border border-amber-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">

            {/* Church / Ministry Image */}
            <div className="relative min-h-[420px] sm:min-h-[540px] md:min-h-[620px] w-full overflow-hidden bg-slate-950 flex items-center justify-center">

              <img
                src="/images/family.png"
                alt="Jesus Saves Church Ministry"
                className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />

              {/* Dark Cinematic Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#030610] via-[#030610]/30 to-transparent pointer-events-none" />

              {/* Church Badge */}
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/85 border border-amber-500/50 text-amber-300 text-xs sm:text-sm font-bold backdrop-blur-md">
                <Church size={16} className="text-amber-400" />

                <span>
                  {lang === 'ta'
                    ? 'இயேசு இரட்சிக்கிறார் சபை'
                    : 'JESUS SAVES CHURCH'}
                </span>
              </div>

              {/* Main Information Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-8 md:p-10 flex justify-center">

                <div className="p-5 sm:p-7 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-slate-700/80 max-w-3xl w-full text-center shadow-2xl">

                  {/* Cross */}
                  <div className="flex justify-center mb-3">
                    <div className="w-11 h-11 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                      <Cross size={20} className="text-amber-400" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-cinzel text-amber-200 tracking-wider mb-3">
                    {lang === 'ta'
                      ? 'இயேசு இரட்சிக்கிறார் சபை'
                      : 'JESUS SAVES CHURCH'}
                  </h3>

                  <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                    {lang === 'ta'
                      ? 'சுவிசேஷத்தை அறிவித்து, மக்களை ஜெபத்திற்கும் ஆராதனைக்கும் அழைத்து, இயேசு கிறிஸ்துவின் வருகைக்காக ஆத்துமாக்களை ஆயத்தப்படுத்தும் சபை.'
                      : 'A Christ-centered church committed to proclaiming the Gospel, calling people to prayer and worship, and preparing souls for the coming of Jesus Christ.'}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase">
                    <span>PRAYER</span>
                    <span>•</span>
                    <span>WORSHIP</span>
                    <span>•</span>
                    <span>GOSPEL</span>
                    <span>•</span>
                    <span>FAITH</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= CHURCH VALUES ================= */}
        <div className="mt-14">

          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold font-cinzel text-amber-200">
              {lang === 'ta'
                ? 'எங்கள் சபையின் நோக்கம்'
                : 'OUR CHURCH MISSION'}
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              {lang === 'ta'
                ? 'தேவனுடைய வார்த்தையின் அடிப்படையில் விசுவாச வாழ்க்கையை உருவாக்குதல்.'
                : 'Building a life of faith on the foundation of God’s Word.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* Prayer */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-3 hover:border-amber-500/40 transition-all group">

              <div className="w-11 h-11 mx-auto rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Flame size={21} />
              </div>

              <h4 className="text-base font-bold font-cinzel text-white">
                {lang === 'ta' ? 'ஜெபம்' : 'Prayer'}
              </h4>

              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'ta'
                  ? 'தொடர்ச்சியான ஜெபத்தின் மூலம் தேவனைத் தேடுதல்.'
                  : 'Seeking God through a life of continual prayer.'}
              </p>
            </div>

            {/* Worship */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-3 hover:border-sky-500/40 transition-all group">

              <div className="w-11 h-11 mx-auto rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                <Heart size={21} />
              </div>

              <h4 className="text-base font-bold font-cinzel text-white">
                {lang === 'ta' ? 'ஆராதனை' : 'Worship'}
              </h4>

              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'ta'
                  ? 'ஆவியிலும் உண்மையிலும் தேவனை ஆராதித்தல்.'
                  : 'Worshipping God in spirit and in truth.'}
              </p>
            </div>

            {/* Gospel */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-3 hover:border-emerald-500/40 transition-all group">

              <div className="w-11 h-11 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <BookOpen size={21} />
              </div>

              <h4 className="text-base font-bold font-cinzel text-white">
                {lang === 'ta' ? 'சுவிசேஷம்' : 'Gospel'}
              </h4>

              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'ta'
                  ? 'இயேசு கிறிஸ்துவின் இரட்சிப்பின் நற்செய்தியை அறிவித்தல்.'
                  : 'Proclaiming the Good News of salvation through Jesus Christ.'}
              </p>
            </div>

            {/* Fellowship */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-3 hover:border-purple-500/40 transition-all group">

              <div className="w-11 h-11 mx-auto rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <Users size={21} />
              </div>

              <h4 className="text-base font-bold font-cinzel text-white">
                {lang === 'ta' ? 'ஐக்கியம்' : 'Fellowship'}
              </h4>

              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'ta'
                  ? 'கிறிஸ்துவில் ஒருவரையொருவர் அன்பிலும் ஐக்கியத்திலும் வளர்த்தல்.'
                  : 'Growing together in Christ through love and fellowship.'}
              </p>
            </div>

          </div>
        </div>

        {/* ================= LOCATION ================= */}
        <div className="mt-10 flex justify-center">

          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-6 py-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-300 text-xs sm:text-sm text-center backdrop-blur-md">

            <Church size={18} className="text-amber-400 shrink-0" />

            <span>
              {lang === 'ta'
                ? 'கரை கொடுமுட்டி, பெத்லேபுரம், கன்னியாகுமரி மாவட்டம், தமிழ்நாடு'
                : 'Karai Kodumutty, Bethelpuram, Kanyakumari District, Tamil Nadu'}
            </span>

          </div>

        </div>

      </div>
    </section>
  );
};