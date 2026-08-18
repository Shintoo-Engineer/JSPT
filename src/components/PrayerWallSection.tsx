import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, PlusCircle, CheckCircle, Flame, Filter, MessageSquareHeart } from 'lucide-react';
import { Language, PrayerWallItem } from '../types';
import { INITIAL_PRAYER_WALL } from '../data/content';

interface PrayerWallSectionProps {
  lang: Language;
  onOpenPrayerModal: () => void;
}

export const PrayerWallSection: React.FC<PrayerWallSectionProps> = ({
  lang,
  onOpenPrayerModal,
}) => {
  const [items, setItems] = useState<PrayerWallItem[]>(() => {
    try {
      const saved = localStorage.getItem('jspt_prayer_wall_items');
      return saved ? JSON.parse(saved) : INITIAL_PRAYER_WALL;
    } catch {
      return INITIAL_PRAYER_WALL;
    }
  });

  const [activeTab, setActiveTab] = useState<'requests' | 'answered'>('requests');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const handlePray = (id: string, e: React.MouseEvent<HTMLButtonElement>) => {
    // Trigger celebratory particle animation
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 25,
      spread: 60,
      origin: { x, y },
      colors: ['#F59E0B', '#FBBF24', '#38BDF8', '#10B981'],
      ticks: 150,
      gravity: 1.2,
      scalar: 0.8,
    });

    setItems((prev) => {
      const updated = prev.map((item) => {
        if (item.id === id) {
          const alreadyPrayed = item.hasPrayed;
          return {
            ...item,
            prayerCount: alreadyPrayed ? item.prayerCount : item.prayerCount + 1,
            hasPrayed: true,
          };
        }
        return item;
      });
      try {
        localStorage.setItem('jspt_prayer_wall_items', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const filteredItems = items.filter((item) => {
    if (activeTab === 'answered') {
      return item.isAnswered;
    }
    const matchesCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
    return !item.isAnswered && matchesCategory;
  });

  const categories = ['ALL', 'Healing', 'Finance', 'Spiritual Growth', 'Salvation'];

  return (
    <section
      id="prayer-wall"
      className="relative py-24 px-4 bg-[#030611] text-white overflow-hidden border-t border-slate-900"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-sky-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-amber-300 text-xs font-bold uppercase tracking-widest">
            <MessageSquareHeart size={14} className="text-amber-400" />
            <span>{lang === 'ta' ? 'விசுவாசிகளின் ஜெப சுவர்' : 'Interactive Community Intercession'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-cinzel tracking-wider text-white">
            {lang === 'ta' ? 'ஜெப சுவர் & சாட்சிகள்' : 'COMMUNITY PRAYER WALL'}
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            {lang === 'ta'
              ? 'ஒருவருக்காக ஒருவர் பாரங்களை சுமந்து ஜெபியுங்கள். “ஒருவருக்காக ஒருவர் ஜெபம்பண்ணுங்கள், அப்பொழுது சொஸ்தமாவீர்கள்.” — யாக்கோபு 5:16'
              : 'Stand in agreement with fellow believers across the world. Click “I Prayed” to lift up a sister or brother in need.'}
          </p>
        </div>

        {/* Tab Selection: Active Requests vs Answered Praise Reports */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center p-1 rounded-xl bg-slate-900/90 border border-slate-800">
            <button
              onClick={() => setActiveTab('requests')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold font-cinzel transition-all ${
                activeTab === 'requests'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              🙏 {lang === 'ta' ? 'ஜெப விண்ணப்பங்கள்' : 'Active Prayer Needs'}
            </button>
            <button
              onClick={() => setActiveTab('answered')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold font-cinzel transition-all ${
                activeTab === 'answered'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              ❤️ {lang === 'ta' ? 'பதில்பெற்ற ஜெபங்கள் (சாட்சிகள்)' : 'Answered Prayers / Praise'}
            </button>
          </div>

          {/* Category Filter Chips for Requests */}
          {activeTab === 'requests' && (
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-slate-500 mr-1 flex items-center gap-1">
                <Filter size={12} /> Filter:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    selectedCategory === cat
                      ? 'bg-slate-800 text-amber-300 border border-amber-500/40'
                      : 'bg-slate-950 text-slate-400 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Quick Add Button */}
          <button
            onClick={onOpenPrayerModal}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-500/50 text-amber-300 hover:text-amber-200 text-xs font-bold font-cinzel transition-colors"
          >
            <PlusCircle size={14} />
            <span>{lang === 'ta' ? '+ விண்ணப்பம் சேர்க்க' : '+ Add Prayer Request'}</span>
          </button>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-2xl p-6 flex flex-col justify-between border transition-all duration-300 ${
                  item.isAnswered
                    ? 'bg-gradient-to-br from-slate-900 via-emerald-950/20 to-slate-900 border-emerald-500/40 shadow-[0_4px_25px_rgba(16,185,129,0.15)]'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 shadow-xl'
                }`}
              >
                <div>
                  {/* Top metadata */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">🙏</span>
                      <span className="text-xs font-bold text-slate-200 font-cinzel">
                        {item.isAnonymous ? 'Anonymous' : item.author}
                      </span>
                      {item.location && (
                        <span className="text-[10px] text-slate-500">• {item.location}</span>
                      )}
                    </div>

                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                        item.isAnswered
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                      }`}
                    >
                      {item.isAnswered ? '❤️ Answered' : item.category}
                    </span>
                  </div>

                  {/* Title & Body */}
                  <h4 className="text-base font-bold font-cinzel text-white mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    “{item.content}”
                  </p>

                  {/* Praise Testimony if answered */}
                  {item.isAnswered && item.answeredTestimony && (
                    <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 mb-4 text-xs text-emerald-200 space-y-1">
                      <div className="font-bold flex items-center gap-1 text-emerald-300">
                        <Sparkles size={12} />
                        <span>Praise Report:</span>
                      </div>
                      <p>{item.answeredTestimony}</p>
                    </div>
                  )}
                </div>

                {/* Bottom Action & Live Count */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="text-xs text-slate-400 font-medium">
                    <span className="text-amber-400 font-bold text-sm mr-1">
                      {item.prayerCount}
                    </span>
                    {lang === 'ta' ? 'பேர் ஜெபித்தனர்' : 'people prayed'}
                  </div>

                  <button
                    id={`i-prayed-btn-${item.id}`}
                    onClick={(e) => handlePray(item.id, e)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold font-cinzel transition-all transform active:scale-95 cursor-pointer ${
                      item.hasPrayed
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                    }`}
                  >
                    {item.hasPrayed ? (
                      <>
                        <CheckCircle size={14} className="text-emerald-400" />
                        <span>{lang === 'ta' ? 'ஜெபித்தேன் ✓' : 'Prayed ✓'}</span>
                      </>
                    ) : (
                      <>
                        <span>🙏</span>
                        <span>{lang === 'ta' ? 'நான் ஜெபித்தேன்' : 'I PRAYED'}</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
