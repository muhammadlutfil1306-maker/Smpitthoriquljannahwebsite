import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MorphReveal } from './ui/MorphReveal';
import { Trophy, BookOpen, Star, Moon, Mic, FlaskConical, Calculator, Languages, PenTool, Volleyball, Compass, Target } from 'lucide-react';

interface ProgramItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  img: string;
}

const programUnggulan: ProgramItem[] = [
  {
    title: "Tahsin & Tahfidz Al-Qur'an",
    desc: 'Metode Ummi',
    icon: <BookOpen size={16} />,
    color: 'bg-emerald-500',
    img: 'https://images.unsplash.com/photo-1732584044835-6efdfd8df087?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdXJhbiUyMHRhaGZpZHolMjBtZW1vcml6YXRpb258ZW58MXx8fHwxNzcxNDgwNDA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Pendidikan Aqil Baligh',
    desc: 'Kesiapan dewasa',
    icon: <Star size={16} />,
    color: 'bg-blue-500',
    img: 'https://images.unsplash.com/photo-1638040895680-59de2786b189?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNsaW0lMjB0ZWVuYWdlciUyMG1vcmFsJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3MTQ4MDQxNXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Akhlakul Karimah',
    desc: 'Pembinaan karakter',
    icon: <Moon size={16} />,
    color: 'bg-purple-500',
    img: 'https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGNoYXJhY3RlciUyMGJ1aWxkaW5nJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3MTQ4MDQwOHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Mabit',
    desc: 'Malam bina iman & taqwa',
    icon: <Moon size={16} />,
    color: 'bg-indigo-500',
    img: 'https://images.unsplash.com/photo-1762907567890-f2dc682c8442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwbmlnaHQlMjBvdXRkb29yJTIwdGVudCUyMHlvdXRofGVufDF8fHx8MTc3MTQ4MDQxMnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Khitobah',
    desc: 'Pidato & public speaking',
    icon: <Mic size={16} />,
    color: 'bg-rose-500',
    img: 'https://images.unsplash.com/photo-1765020553499-1ec9aeb21298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBzcGVha2luZyUyMHBvZGl1bSUyMHlvdXRofGVufDF8fHx8MTc3MTQ4MDQxMXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Olimpiade IPA',
    desc: 'Kelas binaan sains',
    icon: <FlaskConical size={16} />,
    color: 'bg-cyan-500',
    img: 'https://images.unsplash.com/photo-1618053448748-b7251851d014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwb2x5bXBpYWQlMjBsYWJvcmF0b3J5JTIwc3R1ZGVudHN8ZW58MXx8fHwxNzcxNDgwNDA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Olimpiade Matematika',
    desc: 'Kelas binaan matematik',
    icon: <Calculator size={16} />,
    color: 'bg-amber-500',
    img: 'https://images.unsplash.com/photo-1663247455965-b63fa4048b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoJTIwb2x5bXBpYWQlMjBzdHVkZW50cyUyMGNvbXBldGl0aW9ufGVufDF8fHx8MTc3MTQ3MzE1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'English Class',
    desc: 'Kelas bahasa Inggris',
    icon: <Languages size={16} />,
    color: 'bg-sky-500',
    img: 'https://images.unsplash.com/photo-1660795469319-9956a233a54d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdsaXNoJTIwY2xhc3MlMjBzdHVkZW50cyUyMHNwZWFraW5nfGVufDF8fHx8MTc3MTQ4MDQwOXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: "Kelas Bahasa Arab",
    desc: "Penguasaan bahasa Al-Qur'an",
    icon: <PenTool size={16} />,
    color: 'bg-teal-500',
    img: 'https://images.unsplash.com/photo-1696513553729-17129c427356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiaWMlMjBjYWxsaWdyYXBoeSUyMGxhbmd1YWdlJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzcxNDgwNDEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const ekstrakurikuler: ProgramItem[] = [
  {
    title: 'Futsal',
    desc: 'Olahraga tim & sportivitas',
    icon: <Volleyball size={16} />,
    color: 'bg-orange-500',
    img: 'https://images.unsplash.com/photo-1720716428816-4c42d9c0cbd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXRzYWwlMjBpbmRvb3IlMjBzb2NjZXIlMjB5b3V0aHxlbnwxfHx8fDE3NzE0ODA0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Pramuka',
    desc: 'Kepemimpinan & kemandirian',
    icon: <Compass size={16} />,
    color: 'bg-yellow-600',
    img: 'https://images.unsplash.com/photo-1707147926037-818bc0581233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY291dCUyMHByYW11a2ElMjBvdXRkb29yJTIwYWN0aXZpdGllcyUyMHlvdXRofGVufDF8fHx8MTc3MTQ4MDQxMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Panahan',
    desc: 'Sunnah Rasulullah & fokus',
    icon: <Target size={16} />,
    color: 'bg-red-500',
    img: 'https://images.unsplash.com/photo-1768743165783-7a1d6850cb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoZXJ5JTIweW91dGglMjBzcG9ydCUyMHRyYWluaW5nfGVufDF8fHx8MTc3MTQ4MDQxMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export const CoCurricular: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'unggulan' | 'ekskul'>('unggulan');
  const [activeIndex, setActiveIndex] = useState(0);

  const items = activeTab === 'unggulan' ? programUnggulan : ekstrakurikuler;
  const currentItem = items[activeIndex] || items[0];

  const handleTabSwitch = (tab: 'unggulan' | 'ekskul') => {
    setActiveTab(tab);
    setActiveIndex(0);
  };

  return (
    <div className="w-full h-full relative overflow-hidden">

      {/* Fullscreen Background Image — crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`${activeTab}-${activeIndex}`}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={currentItem.img}
            alt={currentItem.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col pt-14 pb-6 px-5 sm:px-8 lg:px-12">

        {/* Top: Header + Tabs */}
        <div className="shrink-0 mb-4 md:mb-6">
          <MorphReveal animation="slideDown" delay={0.1}>
            <div className="flex items-center gap-3 mb-3">
              <Trophy size={16} className="text-white/60" />
              <span
                className="text-xs uppercase tracking-[0.2em] text-white/60"
                style={{ fontWeight: 600 }}
              >
                Ko-Kurikuler
              </span>
            </div>
          </MorphReveal>

          <MorphReveal animation="clip" delay={0.2} duration={1}>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-white tracking-tighter mb-4"
              style={{ fontWeight: 900 }}
            >
              Lebih dari <span className="text-emerald-300">Akademik</span>
            </h2>
          </MorphReveal>

          {/* Tab Switcher */}
          <MorphReveal animation="slideUp" delay={0.3}>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleTabSwitch('unggulan')}
                className={`relative px-4 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all duration-400 ${
                  activeTab === 'unggulan'
                    ? 'bg-white text-slate-900'
                    : 'bg-white/10 text-white/50 hover:bg-white/15 hover:text-white/70'
                }`}
                style={{ fontWeight: 600, letterSpacing: '0.06em' }}
              >
                Program Unggulan
              </button>
              <button
                onClick={() => handleTabSwitch('ekskul')}
                className={`relative px-4 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all duration-400 ${
                  activeTab === 'ekskul'
                    ? 'bg-white text-slate-900'
                    : 'bg-white/10 text-white/50 hover:bg-white/15 hover:text-white/70'
                }`}
                style={{ fontWeight: 600, letterSpacing: '0.06em' }}
              >
                Ekstrakurikuler
              </button>
            </div>
          </MorphReveal>
        </div>

        {/* Main: Split — Menu List (left) + Active Info (right) */}
        <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-0">

          {/* Left: Point Menu Navigation */}
          <div className="lg:w-1/2 xl:w-2/5 flex flex-col min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 overflow-y-auto no-scrollbar-cocur pr-2"
              >
                <ul className="space-y-1">
                  {items.map((item, i) => {
                    const isActive = activeIndex === i;
                    return (
                      <motion.li
                        key={item.title}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <button
                          onClick={() => setActiveIndex(i)}
                          className={`w-full text-left group flex items-center gap-3 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl transition-all duration-400 ${
                            isActive
                              ? 'bg-white/15'
                              : 'bg-transparent hover:bg-white/8'
                          }`}
                        >
                          {/* Number */}
                          <span
                            className={`text-xs tabular-nums shrink-0 transition-colors duration-300 ${
                              isActive ? 'text-white' : 'text-white/25'
                            }`}
                            style={{ fontWeight: 600, width: '1.5rem' }}
                          >
                            {String(i + 1).padStart(2, '0')}
                          </span>

                          {/* Icon */}
                          <div
                            className={`w-7 h-7 rounded-lg shrink-0 flex items-center justify-center transition-all duration-300 ${
                              isActive ? item.color + ' text-white shadow-lg' : 'bg-white/10 text-white/40'
                            }`}
                          >
                            {item.icon}
                          </div>

                          {/* Text */}
                          <div className="flex-1 min-w-0">
                            <p
                              className={`text-sm sm:text-base truncate transition-colors duration-300 ${
                                isActive ? 'text-white' : 'text-white/50 group-hover:text-white/70'
                              }`}
                              style={{ fontWeight: isActive ? 700 : 400 }}
                            >
                              {item.title}
                            </p>
                            {isActive && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-xs text-white/40 mt-0.5"
                                style={{ fontWeight: 400 }}
                              >
                                {item.desc}
                              </motion.p>
                            )}
                          </div>

                          {/* Active indicator line */}
                          {isActive && (
                            <motion.div
                              layoutId="menuIndicator"
                              className="w-1 h-6 rounded-full bg-white shrink-0"
                              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                            />
                          )}
                        </button>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Active Program Info Panel */}
          <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 items-end justify-end pb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${activeIndex}`}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-md"
              >
                {/* Active Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1, type: 'spring', stiffness: 300 }}
                  className={`w-14 h-14 rounded-2xl ${currentItem.color} flex items-center justify-center text-white shadow-2xl mb-5`}
                >
                  <div className="scale-125">{currentItem.icon}</div>
                </motion.div>

                <h3
                  className="text-3xl xl:text-4xl text-white mb-3 tracking-tight"
                  style={{
                    fontWeight: 800,
                    textShadow: '0 4px 20px rgba(0,0,0,0.4)',
                  }}
                >
                  {currentItem.title}
                </h3>
                <p
                  className="text-base xl:text-lg text-white/70 leading-relaxed"
                  style={{ fontWeight: 300 }}
                >
                  {currentItem.desc}
                </p>

                {/* Slide counter */}
                <div className="mt-5 flex items-center gap-2">
                  <span className="text-white text-sm" style={{ fontWeight: 700 }}>
                    {String(activeIndex + 1).padStart(2, '0')}
                  </span>
                  <div className="w-16 h-[2px] bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-white rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: `${((activeIndex + 1) / items.length) * 100}%` }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <span className="text-white/40 text-sm" style={{ fontWeight: 500 }}>
                    {String(items.length).padStart(2, '0')}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Mobile: Active info banner at bottom */}
        <div className="lg:hidden shrink-0 mt-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${activeIndex}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10"
              style={{ backdropFilter: 'blur(12px)' }}
            >
              <div className={`w-10 h-10 rounded-xl ${currentItem.color} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                {currentItem.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm truncate" style={{ fontWeight: 700 }}>
                  {currentItem.title}
                </p>
                <p className="text-white/50 text-xs" style={{ fontWeight: 400 }}>
                  {currentItem.desc}
                </p>
              </div>
              <span className="text-white/30 text-xs shrink-0" style={{ fontWeight: 600 }}>
                {activeIndex + 1}/{items.length}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      <style>{`
        .no-scrollbar-cocur::-webkit-scrollbar { display: none; }
        .no-scrollbar-cocur { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};
