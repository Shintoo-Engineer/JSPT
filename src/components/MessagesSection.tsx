import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Youtube, Clock, Eye, ExternalLink, Flame, X, Sparkles } from 'lucide-react';
import { Language, YouTubeVideo } from '../types';
import { YOUTUBE_VIDEOS, YOUTUBE_CHANNEL_URL } from '../data/content';

interface MessagesSectionProps {
  lang: Language;
}

export const MessagesSection: React.FC<MessagesSectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);

  const categories = [
    { key: 'ALL', en: 'ALL MESSAGES', ta: 'அனைத்து செய்திகள்' },
    { key: 'WARNING', en: 'WARNING MESSAGES', ta: 'எச்சரிப்பு செய்திகள்' },
    { key: 'END_TIME', en: 'END TIME', ta: 'கடைசி காலம்' },
    { key: 'SERMONS', en: 'SERMONS', ta: 'பிரசங்கங்கள்' },
    { key: 'PRAYER', en: 'PRAYER', ta: 'ஜெபம்' },
    { key: 'GOSPEL', en: 'GOSPEL', ta: 'சுவிசேஷம்' },
    { key: 'BIBLE_TEACHING', en: 'BIBLE TEACHING', ta: 'வேதாகம போதனை' },
    { key: 'WORSHIP', en: 'WORSHIP', ta: 'துதி ஆராதனை' },
  ];

  const filteredVideos = YOUTUBE_VIDEOS.filter((video) => {
    if (activeCategory === 'ALL') return true;
    return video.category === activeCategory;
  });

  return (
    <section
      id="messages"
      className="relative py-24 px-4 bg-[#050914] text-white overflow-hidden border-t border-slate-900"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-widest mb-3">
              <Youtube size={15} className="text-red-400" />
              <span>{lang === 'ta' ? 'அபிஷேக செய்திகள்' : 'Prophetic Sermons'}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-cinzel tracking-wider text-white">
              🎥 {lang === 'ta' ? 'சமீபத்திய செய்திகள்' : 'LATEST MESSAGES'}
            </h2>

            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              {lang === 'ta'
                ? 'போதகர் வி. அருள் தாஸ் அவர்களின் கடைசி கால எச்சரிப்பு மற்றும் எழுப்புதல் செய்திகளைப் பாருங்கள்.'
                : 'Watch end-time prophetic revelations, deliverance prayers, and spirit-filled sermons by Pr. V. Arul Dhas.'}
            </p>
          </div>

          <a
            id="messages-view-all-yt-btn"
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-bold font-cinzel shadow-lg hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all self-start md:self-auto"
          >
            <Youtube size={16} />
            <span>{lang === 'ta' ? 'அனைத்து வீடியோக்களும் (யூடியூப்)' : 'VIEW ALL ON YOUTUBE'}</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all font-cinzel ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md'
                  : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {lang === 'ta' ? cat.ta : cat.en}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div
                className="relative h-48 w-full overflow-hidden bg-slate-950 cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <img
                  src={video.thumbnailUrl}
                  alt={video.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600/90 border border-white/30 text-white flex items-center justify-center shadow-2xl group-hover:scale-115 group-hover:bg-red-500 transition-all duration-300">
                    <Play size={20} className="fill-white ml-0.5" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                  {video.category}
                </div>

                {/* Duration */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-slate-950/90 text-[11px] font-mono text-slate-200">
                  {video.duration}
                </div>
              </div>

              {/* Card Information */}
              <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm sm:text-base font-bold font-cinzel text-white group-hover:text-amber-300 transition-colors leading-snug line-clamp-2">
                    {lang === 'ta' ? video.titleTa : video.titleEn}
                  </h3>

                  {lang === 'ta' ? (
                    <p className="text-xs text-slate-400 font-sans line-clamp-1">{video.titleEn}</p>
                  ) : (
                    <p className="text-xs text-amber-400/90 font-tamil line-clamp-1">{video.titleTa}</p>
                  )}
                </div>

                {/* Metadata row & Watch CTA */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {video.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye size={12} /> {video.views}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedVideo(video)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 font-cinzel cursor-pointer"
                  >
                    <span>{lang === 'ta' ? 'பார்க்க' : 'WATCH'}</span>
                    <Play size={10} className="fill-amber-400" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Player Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl rounded-3xl overflow-hidden bg-slate-900 border border-slate-700 shadow-2xl p-4 sm:p-6"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 z-20"
                >
                  <X size={20} />
                </button>

                {/* Video Player Embed (or Direct YouTube Channel Viewer) */}
                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black mb-4">
                  <iframe
                     className="w-full h-full"
                     src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                     title={selectedVideo.titleEn}
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     allowFullScreen
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-cinzel text-white">
                      {lang === 'ta' ? selectedVideo.titleTa : selectedVideo.titleEn}
                    </h3>
                    <p className="text-xs text-amber-400 mt-0.5">
                      Pr. V. Arul Dhas • Jesus Saves Chruch
                    </p>
                  </div>

                  <a
                    href={`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold font-cinzel"
                  >
                    <Youtube size={16} />
                    <span>Watch Full Sermon on YouTube</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
