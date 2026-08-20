import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Youtube, MessageCircle, ExternalLink, HeartHandshake, Share2, Globe, Clock, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { WHATSAPP_NUMBER, WHATSAPP_LINK, EMAIL_ADDRESS, YOUTUBE_CHANNEL_URL, MINISTRY_LOCATION_EN, MINISTRY_LOCATION_TA } from '../data/content';
import { JsptLogo } from './JsptLogo';

interface ContactSectionProps {
  lang: Language;
  onOpenPrayerModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, onOpenPrayerModal }) => {
  return (
    <footer
      id="contact"
      className="relative bg-[#020409] text-white pt-24 pb-12 px-4 border-t border-slate-800/80 overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Contact Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-amber-300 text-xs font-bold uppercase tracking-widest">
            <Phone size={14} className="text-amber-400" />
            <span>{lang === 'ta' ? 'தொடர்புக்கு & ஆலோசனைகளுக்கு' : 'Get in Touch'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-cinzel tracking-wider text-white">
            📞 {lang === 'ta' ? 'இயேசு இரட்சிக்கிறார் ஜெபக்குழுவை தொடர்பு கொள்ள' : 'CONTACT JESUS SAVES PRAYER TEAM'}
          </h2>

          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            {lang === 'ta'
              ? 'ஜெப உதவி, ஆலோசனைகள் மற்றும் ஆராதனைகளில் பங்கேற்க எங்களை எந்நேரமும் தொடர்பு கொள்ளலாம்.'
              : 'Our prayer intercessors and ministry team are ready to pray and stand with you in faith.'}
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* WhatsApp Direct Line */}
          <motion.a
            id="contact-card-whatsapp"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/60 transition-all flex flex-col items-center text-center group shadow-xl hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle size={28} />
            </div>
            <h3 className="text-lg font-bold font-cinzel text-white mb-1">WhatsApp Prayer Line</h3>
            <p className="text-2xl font-black font-cinzel text-emerald-300 mb-2">
              {WHATSAPP_NUMBER}
            </p>
            <p className="text-xs text-slate-400 mb-4">
              {lang === 'ta' ? 'உடனடி வாட்ஸ்அப் ஜெப உதவி' : 'Direct 24/7 Prayer Requests & Counseling'}
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 group-hover:underline">
              <span>{lang === 'ta' ? 'செய்தி அனுப்ப' : 'Chat on WhatsApp'}</span>
              <ExternalLink size={12} />
            </span>
          </motion.a>

          {/* Email Address */}
          <motion.a
            id="contact-card-email"
            href={`mailto:${EMAIL_ADDRESS}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/60 transition-all flex flex-col items-center text-center group shadow-xl hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-2xl bg-sky-500/15 border border-sky-500/40 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
              <Mail size={28} />
            </div>
            <h3 className="text-lg font-bold font-cinzel text-white mb-1">Official Email</h3>
            <p className="text-sm font-semibold font-mono text-sky-300 mb-2 break-all">
              {EMAIL_ADDRESS}
            </p>
            <p className="text-xs text-slate-400 mb-4">
              {lang === 'ta' ? 'விரிவான ஜெபக் குறிப்புகள் & சாட்சிகள்' : 'Ministry Inquiries & Testimonies'}
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-sky-400 group-hover:underline">
              <span>{lang === 'ta' ? 'மின்னஞ்சல் அனுப்ப' : 'Send an Email'}</span>
              <ExternalLink size={12} />
            </span>
          </motion.a>

          {/* Official YouTube Channel */}
          <motion.a
            id="contact-card-youtube"
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-red-500/60 transition-all flex flex-col items-center text-center group shadow-xl hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-2xl bg-red-500/15 border border-red-500/40 flex items-center justify-center text-red-400 mb-4 group-hover:scale-110 transition-transform">
              <Youtube size={28} />
            </div>
            <h3 className="text-lg font-bold font-cinzel text-white mb-1">YouTube Channel</h3>
            <p className="text-xl font-bold font-cinzel text-red-400 mb-2">
              Pr. V. Arul Dhas
            </p>
            <p className="text-xs text-slate-400 mb-4">
              154K+ Subscribers • 787+ Prophetic Videos
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-red-400 group-hover:underline">
              <span>{lang === 'ta' ? 'சேனலில் இணைய' : 'Subscribe & Watch'}</span>
              <ExternalLink size={12} />
            </span>
          </motion.a>
        </div>

        {/* Church Sanctuary Location Details Card */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 text-xs font-bold font-cinzel uppercase">
                <MapPin size={14} />
                <span>{lang === 'ta' ? 'ஆராதனை கூடும் இடம்' : 'Church Sanctuary Location'}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-cinzel text-white">
                Jesus Saves Church
              </h3>

              {/* Text Location as requested */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1">
                <div className="text-xs uppercase tracking-widest font-bold text-amber-400 font-cinzel flex items-center gap-2">
                  <MapPin size={15} className="text-amber-400" />
                  <span>{lang === 'ta' ? 'இடம் / முகவரி' : 'Place'}</span>
                </div>
                <p className="text-lg sm:text-xl font-black font-cinzel text-amber-200">
                  place : Karai, kodumutty, bethelpuram, kanyakumari Dist , TamilNadu, India.
                </p>
                <p className="text-xs text-slate-300">
                  {MINISTRY_LOCATION_TA}
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {lang === 'ta'
                  ? 'போதகர் வி. அருள் தாஸ் அவர்களின் தலைமையில் நடைபெறும் வாராந்திர ஆராதனைகள் மற்றும் உபவாச ஜெபங்களில் நேரில் கலந்துகொள்ள அன்புடன் அழைக்கிறோம்.'
                  : 'You and your family are warmly invited to worship with us in person at our church prayer hall.'}
              </p>
            </div>

            {/* Gathering Times & Sanctuary Details Card */}
            <div className="lg:col-span-6 rounded-2xl bg-slate-950/90 border border-slate-800 p-6 space-y-4 shadow-inner">
              <div className="flex items-center gap-2 font-bold text-amber-300 font-cinzel text-sm pb-2 border-b border-slate-800">
                <Clock size={16} />
                <span>{lang === 'ta' ? 'சேவை நேரங்கள்:' : 'Main Gathering Times:'}</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-200">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center justify-between">
                  <span className="font-semibold text-slate-300">☀️ {lang === 'ta' ? 'ஞாயிறு ஆராதனை' : 'Sunday Worship'}</span>
                  <span className="font-mono text-amber-300 font-bold">10:00 AM – 1:00 PM</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center justify-between">
                  <span className="font-semibold text-slate-300">🔥 {lang === 'ta' ? 'வெள்ளி உபவாச ஜெபம்' : 'Friday Fasting Prayer'}</span>
                  <span className="font-mono text-amber-300 font-bold">10:00 AM – 1:00 PM</span>
                </div>
              </div>

              <div className="pt-2 text-center text-xs text-slate-400 italic">
                {lang === 'ta'
                  ? '“என் நாமத்தினாலே எங்கே இரண்டு அல்லது மூன்று பேர் கூடியிருக்கிறார்களோ, அங்கே அவர்கள் நடுவிலே இருக்கிறேன்.” — மத்தேயு 18:20'
                  : '“For where two or three are gathered together in My name, I am there in the midst of them.” — Matthew 18:20'}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <JsptLogo size="sm" showSubtitle={true} />
          </div>

          <div className="text-center md:text-center text-slate-400">
            <div>“JESUS IS COMING SOON” • இயேசு விரைவில் வருகிறார்</div>
            <div className="mt-1 text-[11px] text-slate-400">
              © {new Date().getFullYear()} Jesus Saves Chruch. Pr. V. Arul Dhas. All Glory to God.
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-red-400 hover:border-slate-700 transition-colors"
            >
              <Youtube size={16} />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-emerald-400 hover:border-slate-700 transition-colors"
            >
              <MessageCircle size={16} />
            </a>
            <button
              onClick={onOpenPrayerModal}
              className="px-3 py-1.5 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold hover:bg-amber-500/25 transition-colors"
            >
              🙏 {lang === 'ta' ? 'ஜெபம்' : 'Prayer'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
