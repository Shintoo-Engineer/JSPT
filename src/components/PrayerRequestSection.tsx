import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeartHandshake, CheckCircle2, ShieldCheck, Lock, Send, PhoneCall, Sparkles, MessageSquare } from 'lucide-react';
import { Language, PrayerRequest } from '../types';
import { WHATSAPP_NUMBER, WHATSAPP_LINK } from '../data/content';

interface PrayerRequestSectionProps {
  lang: Language;
  onAddPrayerRequest?: (request: PrayerRequest) => void;
}

export const PrayerRequestSection: React.FC<PrayerRequestSectionProps> = ({
  lang,
  onAddPrayerRequest,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Healing',
    request: '',
    isAnonymous: false,
    sendWhatsApp: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    { value: 'Healing', en: 'Physical Healing & Health', ta: 'உடல் சுகம் & நலம்' },
    { value: 'Family', en: 'Family Peace & Marriage', ta: 'குடும்ப சமாதானம் & திருமணம்' },
    { value: 'Finance', en: 'Financial Breakthrough & Debt Freedom', ta: 'பொருளாதார விடுதலை & கடன் தீர' },
    { value: 'Deliverance', en: 'Spiritual Deliverance & Protection', ta: 'பிசாசின் கட்டுகள் உடைய & பாதுகாப்பு' },
    { value: 'Children', en: 'Children Blessing & Education', ta: 'பிள்ளைகள் ஆசீர்வாதம் & படிப்பு' },
    { value: 'Career', en: 'Job, Business & Career', ta: 'வேலை & தொழில் வளர்ச்சி' },
    { value: 'Salvation', en: 'Salvation of Loved Ones', ta: 'உறவினர்கள் இரட்சிப்பு' },
    { value: 'Other', en: 'Other Special Prayer Burden', ta: 'மற்ற விசேஷித்த ஜெப பாரம்' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.request.trim()) return;

    setIsSubmitting(true);

    const newRequest: PrayerRequest = {
      id: 'req-' + Date.now(),
      name: formData.isAnonymous ? 'Anonymous' : formData.name || 'Friend in Christ',
      isAnonymous: formData.isAnonymous,
      phone: formData.phone,
      email: formData.email,
      category: formData.category,
      request: formData.request,
      timestamp: Date.now(),
    };

    // Save to local storage for privacy
    try {
      const stored = localStorage.getItem('jspt_user_prayer_requests');
      const list = stored ? JSON.parse(stored) : [];
      list.unshift(newRequest);
      localStorage.setItem('jspt_user_prayer_requests', JSON.stringify(list));
    } catch {
      // safe fallback
    }

    if (onAddPrayerRequest) {
      onAddPrayerRequest(newRequest);
    }

    // If user opts to send via WhatsApp, prepare prefilled link
    if (formData.sendWhatsApp) {
      const text = encodeURIComponent(
        `*JSPT Prayer Request*\n*Name:* ${formData.isAnonymous ? 'Anonymous' : formData.name || 'Friend'}\n*Category:* ${formData.category}\n*Need:* ${formData.request}\n*Phone:* ${formData.phone || 'N/A'}`
      );
      window.open(`https://wa.me/91${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      category: 'Healing',
      request: '',
      isAnonymous: false,
      sendWhatsApp: true,
    });
    setSubmitted(false);
  };

  return (
    <section
      id="prayer-request"
      className="relative py-24 px-4 bg-[#050813] text-white overflow-hidden border-t border-slate-900"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
            <HeartHandshake size={14} className="text-amber-400" />
            <span>{lang === 'ta' ? '24/7 ஜெப உதவி' : '24/7 Intercession'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-cinzel tracking-wider text-white">
            🙏 {lang === 'ta' ? 'ஜெபம் தேவையா?' : 'NEED PRAYER?'}
          </h2>

          <p className="text-lg sm:text-xl font-cinzel text-amber-300/90 font-medium">
            {lang === 'ta' ? 'நீங்கள் தனியாக போராட வேண்டியதில்லை.' : 'You don’t have to face it alone.'}
          </p>

          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            {lang === 'ta'
              ? 'போதகர் வி. அருள் தாஸ் மற்றும் ஜெபக்குழுவினர் உங்களுக்காக தேவ சமுகத்தில் கண்ணீரோடு பரிந்துபேசி ஜெபிப்பார்கள்.'
              : 'Pr. V. Arul Dhas and the dedicated Jesus Saves Prayer Team will bring your name and request before the Throne of Grace.'}
          </p>
        </div>

        {/* Form Container Card */}
        <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Anonymous Toggle Pill */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <Lock size={16} className="text-amber-400" />
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-200">
                        {lang === 'ta' ? 'பெயர் வெளியிடாமல் ஜெபிக்க (Anonymous)' : 'Keep My Request Anonymous'}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {lang === 'ta' ? 'உங்கள் பெயர் பொதுவில் தெரியாது' : 'Your name will remain private'}
                      </div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      id="prayer-anonymous-toggle"
                      type="checkbox"
                      checked={formData.isAnonymous}
                      onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                  </label>
                </div>

                {/* Name & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-cinzel">
                      {lang === 'ta' ? 'உங்கள் பெயர்' : 'Your Full Name'}{' '}
                      {formData.isAnonymous && <span className="text-slate-500 font-normal">(Optional)</span>}
                    </label>
                    <input
                      id="prayer-name-input"
                      type="text"
                      disabled={formData.isAnonymous}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={formData.isAnonymous ? 'Anonymous' : (lang === 'ta' ? 'எ.கா: சாம் டேனியல்' : 'e.g. Samuel John')}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 disabled:opacity-50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-cinzel">
                      {lang === 'ta' ? 'வாட்ஸ்அப் / தொலைபேசி எண்' : 'WhatsApp / Phone Number'}
                    </label>
                    <input
                      id="prayer-phone-input"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 94899 19343"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Category Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-cinzel">
                    {lang === 'ta' ? 'ஜெப தேவை பிரிவு' : 'Prayer Category'}
                  </label>
                  <select
                    id="prayer-category-select"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value} className="bg-slate-900 text-white">
                        {lang === 'ta' ? cat.ta : cat.en}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Detailed Request */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-cinzel">
                    {lang === 'ta' ? 'உங்கள் ஜெப விண்ணப்பம்' : 'Your Prayer Request Details'} *
                  </label>
                  <textarea
                    id="prayer-details-textarea"
                    required
                    rows={4}
                    value={formData.request}
                    onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                    placeholder={
                      lang === 'ta'
                        ? 'உங்கள் ஜெபக் குறிப்பை இங்கே விரிவாக எழுதவும். கர்த்தர் உங்கள் ஜெபத்தைக் கேட்பார்...'
                        : 'Share your burden, healing need, family struggle, or spiritual prayer request...'
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  />
                </div>

                {/* Direct WhatsApp check */}
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <input
                    id="prayer-whatsapp-direct-checkbox"
                    type="checkbox"
                    checked={formData.sendWhatsApp}
                    onChange={(e) => setFormData({ ...formData, sendWhatsApp: e.target.checked })}
                    className="w-4 h-4 rounded border-slate-700 bg-slate-950 text-amber-500 focus:ring-amber-500"
                  />
                  <label htmlFor="prayer-whatsapp-direct-checkbox" className="cursor-pointer">
                    {lang === 'ta'
                      ? 'வாட்ஸ்அப் மூலமும் போதகரின் ஜெபக்குழுவுக்கு அனுப்பவும் (WhatsApp: 9489919343)'
                      : 'Also send directly to Pastor’s WhatsApp Prayer Line (+91 9489919343)'}
                  </label>
                </div>

                {/* Submit CTA & Privacy Badge */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <ShieldCheck size={16} className="text-emerald-400" />
                    <span>{lang === 'ta' ? 'அனைத்து விண்ணப்பங்களும் ரகசியமாக வைக்கப்படும்' : 'Strict pastoral confidentiality guaranteed'}</span>
                  </div>

                  <button
                    id="submit-prayer-form-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-bold text-sm tracking-wider font-cinzel shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.7)] transition-all cursor-pointer transform hover:scale-105 active:scale-95 disabled:opacity-50"
                  >
                    <Send size={16} />
                    <span>
                      {isSubmitting
                        ? (lang === 'ta' ? 'அனுப்பப்படுகிறது...' : 'Submitting...')
                        : (lang === 'ta' ? 'ஜெப விண்ணப்பத்தை அனுப்புக' : 'SUBMIT PRAYER REQUEST')}
                    </span>
                  </button>
                </div>
              </motion.form>
            ) : (
              /* Submission Confirmation Screen */
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-5"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 size={36} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black font-cinzel text-amber-200">
                    {lang === 'ta' ? 'உங்கள் ஜெப விண்ணப்பம் பெறப்பட்டது!' : 'Your prayer request has been received.'}
                  </h3>
                  <p className="text-slate-200 text-base sm:text-lg font-medium">
                    {lang === 'ta'
                      ? 'எங்கள் ஜெபக்குழுவினர் உங்களுக்காக ஜெபிப்பார்கள்.'
                      : 'Our prayer team will pray for you.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 max-w-lg mx-auto text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {lang === 'ta'
                    ? '“உன் தேவனாகிய கர்த்தர் உன் நடுவில் இருக்கிறார், அவர் வல்லமையுள்ளவர், அவர் இரட்சிப்பார்.” — செப்பனியா 3:17'
                    : '“The LORD your God in your midst, The Mighty One, will save; He will rejoice over you with gladness.” — Zephaniah 3:17'}
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <button
                    id="submit-another-prayer-btn"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold font-cinzel transition-colors"
                  >
                    {lang === 'ta' ? '+ மற்றொரு விண்ணப்பம்' : '+ Submit Another Request'}
                  </button>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
                  >
                    <PhoneCall size={14} />
                    <span>{lang === 'ta' ? 'வாட்ஸ்அப் நேரடி தொடர்பு' : 'Connect via WhatsApp'}</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
