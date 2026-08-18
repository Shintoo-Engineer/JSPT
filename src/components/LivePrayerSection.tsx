import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Radio, Calendar, Clock, Play, Sparkles, Church, Flame, Smile, CheckCircle, BellRing } from 'lucide-react';
import { Language } from '../types';
import { SERVICE_SCHEDULE, YOUTUBE_CHANNEL_URL, WHATSAPP_LINK } from '../data/content';

interface LivePrayerSectionProps {
  lang: Language;
}

export const LivePrayerSection: React.FC<LivePrayerSectionProps> = ({ lang }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [reminderSet, setReminderSet] = useState<string | null>(null);

  // Compute countdown to next scheduled meeting (Friday 10am, Saturday 5pm, Sunday 10am)
  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      // Target next upcoming service:
      // Sunday (day 0) 10:00 AM, Friday (day 5) 10:00 AM, Saturday (day 6) 17:00
      const currentDay = now.getDay();
      const currentHour = now.getHours();

      let target = new Date();

      if (currentDay === 5 && currentHour < 21) {
        // Friday is today
        target.setHours(10, 0, 0, 0);
        if (now > target) {
          // Live now until 9 PM!
          target.setHours(21, 0, 0, 0);
        }
      } else if (currentDay < 5) {
        // Next is Friday
        const diffDays = 5 - currentDay;
        target.setDate(now.getDate() + diffDays);
        target.setHours(10, 0, 0, 0);
      } else if (currentDay === 5) {
        // Next is Saturday Kids
        target.setDate(now.getDate() + 1);
        target.setHours(17, 0, 0, 0);
      } else if (currentDay === 6 && currentHour < 18) {
        // Saturday Kids today
        target.setHours(17, 0, 0, 0);
      } else {
        // Next is Sunday
        const diffDays = (7 - currentDay) % 7;
        target.setDate(now.getDate() + diffDays);
        target.setHours(10, 0, 0, 0);
      }

      const diff = Math.max(0, target.getTime() - now.getTime());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSetReminder = (serviceId: string) => {
    setReminderSet(serviceId);
    setTimeout(() => setReminderSet(null), 3500);
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Church':
        return <Church size={22} className="text-amber-400" />;
      case 'Flame':
        return <Flame size={22} className="text-orange-400" />;
      case 'Smile':
        return <Smile size={22} className="text-sky-400" />;
      default:
        return <Clock size={22} className="text-amber-400" />;
    }
  };

  return (
    <section
      id="schedule"
      className="relative py-28 px-4 bg-[#030612] text-white overflow-hidden border-t border-slate-900"
    >
      {/* Radiant Atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-red-950/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Top Live Prayer Banner */}
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden text-center flex flex-col items-center">
          {/* Top Live Indicator */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-600/20 border border-red-500/50 text-red-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span>🔴 {lang === 'ta' ? 'நேரலை ஜெபக்கூடுகை' : 'LIVE PRAYER'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-cinzel tracking-wider text-white mb-3">
            {lang === 'ta' ? 'எங்களோடு ஜெபத்தில் இணையுங்கள்' : 'JOIN US IN PRAYER'}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl mb-8">
            {lang === 'ta'
              ? 'அடுத்த நேரலை ஜெப ஆராதனை தொடங்குவதற்கான நேரம்:'
              : 'Countdown to the Next Scheduled Miracle Prayer Gathering:'}
          </p>

          {/* Countdown Clock Display */}
          <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-lg w-full mb-8">
            <div className="p-3 sm:p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center">
              <span className="text-2xl sm:text-4xl font-black font-cinzel text-amber-300">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest mt-1">
                {lang === 'ta' ? 'நாட்கள்' : 'Days'}
              </span>
            </div>

            <div className="p-3 sm:p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center">
              <span className="text-2xl sm:text-4xl font-black font-cinzel text-amber-300">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest mt-1">
                {lang === 'ta' ? 'மணி' : 'Hours'}
              </span>
            </div>

            <div className="p-3 sm:p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center">
              <span className="text-2xl sm:text-4xl font-black font-cinzel text-amber-300">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest mt-1">
                {lang === 'ta' ? 'நிமிடம்' : 'Mins'}
              </span>
            </div>

            <div className="p-3 sm:p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center">
              <span className="text-2xl sm:text-4xl font-black font-cinzel text-red-400">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest mt-1">
                {lang === 'ta' ? 'நொடி' : 'Secs'}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              id="live-prayer-join-btn"
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wider font-cinzel shadow-[0_0_25px_rgba(220,38,38,0.5)] transition-all transform hover:scale-105"
            >
              <Play size={16} className="fill-white" />
              <span>▶ {lang === 'ta' ? 'நேரலையில் இணைவீர்' : 'JOIN LIVE STREAM'}</span>
            </a>

            <a
              id="live-prayer-whatsapp-remind-btn"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm font-cinzel border border-slate-700 transition-colors"
            >
              <BellRing size={16} className="text-amber-400" />
              <span>{lang === 'ta' ? 'வாட்ஸ்அப்பில் நினைவூட்டல் பெறுக' : 'GET WHATSAPP REMINDER'}</span>
            </a>
          </div>
        </div>

        {/* Weekly Service Timetable Cards */}
        <div className="space-y-6">
          <div className="text-center space-y-2 mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold font-cinzel text-amber-200">
              📅 {lang === 'ta' ? 'வாராந்திர ஆராதனை நேரங்கள்' : 'WEEKLY PRAYER GATHERING TIMETABLE'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {lang === 'ta'
                ? 'உங்கள் குடும்பத்தினருடன் தவறாமல் கலந்துகொண்டு தேவ ஆசீர்வாதத்தைப் பெற்றுக்கொள்ளுங்கள்.'
                : 'Join us at the church sanctuary or connect through the live streaming broadcast.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICE_SCHEDULE.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl p-6 bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between shadow-xl group"
              >
                <div>
                  {/* Badge & Day */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform">
                        {getServiceIcon(service.iconName)}
                      </div>
                      <span className="text-sm font-bold font-cinzel text-amber-300">
                        {lang === 'ta' ? service.dayTa : service.dayEn}
                      </span>
                    </div>

                    {service.badge && (
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 uppercase">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Service Title */}
                  <h4 className="text-lg font-bold font-cinzel text-white mb-2 group-hover:text-amber-200 transition-colors">
                    {lang === 'ta' ? service.titleTa : service.titleEn}
                  </h4>

                  {/* Time Highlight */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-amber-400 font-mono text-xs sm:text-sm font-bold mb-4">
                    <Clock size={14} />
                    <span>{lang === 'ta' ? service.timeTa : service.timeEn}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {lang === 'ta' ? service.descriptionTa : service.descriptionEn}
                  </p>
                </div>

                {/* Target Audience & Add Reminder Button */}
                <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
                  <span className="text-[11px] font-semibold text-slate-400">
                    🎯 {lang === 'ta' ? service.targetTa : service.targetEn}
                  </span>

                  <button
                    onClick={() => handleSetReminder(service.id)}
                    className="w-full py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/40 text-xs font-semibold text-slate-200 hover:text-amber-300 transition-colors flex items-center justify-center gap-1.5"
                  >
                    {reminderSet === service.id ? (
                      <>
                        <CheckCircle size={14} className="text-emerald-400" />
                        <span className="text-emerald-400">{lang === 'ta' ? 'நினைவூட்டல் பதிவுசெய்யப்பட்டது!' : 'Reminder Added!'}</span>
                      </>
                    ) : (
                      <>
                        <Calendar size={13} className="text-amber-400" />
                        <span>{lang === 'ta' ? 'நினைவூட்டலைச் சேர்' : 'Set Calendar Reminder'}</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
