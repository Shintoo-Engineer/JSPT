import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Lock, ShieldCheck, CheckCircle2, HeartHandshake, PhoneCall } from 'lucide-react';
import { Language, PrayerRequest } from '../types';
import { WHATSAPP_NUMBER, WHATSAPP_LINK } from '../data/content';

interface PrayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onAddPrayerRequest?: (req: PrayerRequest) => void;
}

export const PrayerModal: React.FC<PrayerModalProps> = ({
  isOpen,
  onClose,
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

    if (formData.sendWhatsApp) {
      const text = encodeURIComponent(
        `*JSPT Urgent Prayer Request*\n*Name:* ${formData.isAnonymous ? 'Anonymous' : formData.name || 'Friend'}\n*Category:* ${formData.category}\n*Need:* ${formData.request}\n*Phone:* ${formData.phone || 'N/A'}`
      );
      window.open(`https://wa.me/91${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X size={18} />
          </button>

          {!submitted ? (
            <div>
              <div className="mb-6 space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider font-cinzel">
                  <HeartHandshake size={12} />
                  <span>{lang === 'ta' ? 'ஜெப விண்ணப்ப படிவம்' : 'Prayer Request Form'}</span>
                </div>
                <h3 className="text-2xl font-bold font-cinzel text-white">
                  {lang === 'ta' ? '🙏 உங்கள் ஜெபக் குறிப்பை அனுப்பவும்' : '🙏 Submit Your Prayer Need'}
                </h3>
                <p className="text-xs text-slate-400">
                  {lang === 'ta'
                    ? 'போதகர் வி. அருள் தாஸ் மற்றும் ஜெபக்குழுவினர் உங்களுக்காக ஜெபிப்பார்கள்.'
                    : 'Our intercessory prayer warriors will lift your burden in prayer.'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Anonymous toggle */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-2">
                    <Lock size={14} className="text-amber-400" />
                    <span className="text-xs font-semibold text-slate-200">
                      {lang === 'ta' ? 'பெயர் வெளியிடாமல் ஜெபிக்க (Anonymous)' : 'Submit Anonymously'}
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={formData.isAnonymous}
                    onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
                    className="w-4 h-4 rounded text-amber-500 bg-slate-900 border-slate-700"
                  />
                </div>

                {!formData.isAnonymous && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-cinzel">
                      {lang === 'ta' ? 'பெயர்' : 'Your Name'}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={lang === 'ta' ? 'உங்கள் பெயர்' : 'Your name'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-cinzel">
                    {lang === 'ta' ? 'வாட்ஸ்அப் / தொலைபேசி எண்' : 'WhatsApp Number'}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 94899 19343"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-cinzel">
                    {lang === 'ta' ? 'ஜெப பிரிவு' : 'Prayer Category'}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                  >
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value} className="bg-slate-900 text-white">
                        {lang === 'ta' ? cat.ta : cat.en}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-cinzel">
                    {lang === 'ta' ? 'ஜெப விண்ணப்பம்' : 'Your Prayer Burden'} *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.request}
                    onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                    placeholder={lang === 'ta' ? 'ஜெபக் குறிப்பை இங்கே பதிவிடவும்...' : 'Please describe your prayer request...'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500 resize-none"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <input
                    type="checkbox"
                    id="modal-wa-check"
                    checked={formData.sendWhatsApp}
                    onChange={(e) => setFormData({ ...formData, sendWhatsApp: e.target.checked })}
                    className="w-3.5 h-3.5 rounded text-amber-500"
                  />
                  <label htmlFor="modal-wa-check">
                    {lang === 'ta' ? 'வாட்ஸ்அப் மூலமும் அனுப்ப (9489919343)' : 'Send to Pastor’s WhatsApp Line'}
                  </label>
                </div>

                <div className="pt-2 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    <span>Confidential</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs tracking-wider font-cinzel shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all cursor-pointer"
                  >
                    <Send size={13} />
                    <span>{isSubmitting ? 'Submitting...' : (lang === 'ta' ? 'விண்ணப்பத்தை அனுப்புக' : 'SUBMIT PRAYER')}</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                <CheckCircle2 size={30} />
              </div>
              <h3 className="text-xl font-bold font-cinzel text-amber-200">
                {lang === 'ta' ? 'ஜெப விண்ணப்பம் பெறப்பட்டது!' : 'Prayer Request Received!'}
              </h3>
              <p className="text-xs text-slate-300">
                {lang === 'ta'
                  ? 'எங்கள் ஜெபக்குழுவினர் உங்களுக்காக ஜெபிப்பார்கள். கர்த்தர் உங்களை ஆசீர்வதிப்பாராக.'
                  : 'Our intercessors will pray for your need. Stand firm in faith.'}
              </p>
              <div className="pt-3">
                <button
                  onClick={handleClose}
                  className="px-6 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs font-cinzel shadow-md"
                >
                  {lang === 'ta' ? 'முடிந்தது (Close)' : 'Done'}
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
