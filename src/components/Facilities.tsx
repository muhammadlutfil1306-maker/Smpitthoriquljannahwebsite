import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MorphReveal } from './ui/MorphReveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1770827401349-3499200c5e61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBjYW1wdXMlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzE0NDI5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Kampus Modern',
    subtitle: 'Gedung sekolah yang nyaman dan dirancang untuk produktivitas belajar',
    icon: '🏫',
  },
  {
    img: 'https://images.unsplash.com/photo-1758685734153-132c8620c1bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHNjaG9vbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzE0NzM4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Lab Sains',
    subtitle: 'Peralatan laboratorium terkini untuk eksplorasi ilmu pengetahuan',
    icon: '🔬',
  },
  {
    img: 'https://images.unsplash.com/photo-1769852554030-53ed6c909f01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBsaWJyYXJ5JTIwYm9va3NoZWx2ZXN8ZW58MXx8fHwxNzcxNDczODE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Perpustakaan',
    subtitle: 'Koleksi lengkap buku dan akses digital untuk menunjang pembelajaran',
    icon: '📚',
  },
  {
    img: 'https://images.unsplash.com/photo-1731834453355-df041245e7d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjb21wdXRlciUyMGxhYiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxMzk1NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Lab Komputer',
    subtitle: 'Laboratorium komputer modern dengan teknologi terbaru',
    icon: '💻',
  },
  {
    img: 'https://images.unsplash.com/photo-1758936382103-c1dbffcea2ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzcG9ydHMlMjBmaWVsZCUyMG91dGRvb3J8ZW58MXx8fHwxNzcxNDczODE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Lapangan Olahraga',
    subtitle: 'Area olahraga luas untuk pengembangan jasmani dan kompetisi',
    icon: '⚽',
  },
  {
    img: 'https://images.unsplash.com/photo-1768152860286-15fa04f4b1a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3NxdWUlMjBwcmF5ZXIlMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcxNDczODE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Musholla',
    subtitle: 'Tempat ibadah yang nyaman untuk kegiatan keagamaan sehari-hari',
    icon: '🕌',
  },
];

const INTERVAL = 5000;

export const Facilities: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, INTERVAL);
    return () => clearInterval(timer);
  }, [goNext, isPaused]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '8%' : '-8%',
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-8%' : '8%',
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div
      className="w-full h-full relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Carousel */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].img}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        <MorphReveal animation="slideDown" delay={0.1} easing="slow">
          <span
            className="inline-flex items-center gap-2 px-5 py-2 border border-white/20 rounded-full text-xs tracking-[0.2em] uppercase text-white/90 mb-6"
            style={{ fontWeight: 600, backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.08)' }}
          >
            <span>{slides[current].icon}</span>
            Fasilitas Unggulan
          </span>
        </MorphReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <h2
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 tracking-tight"
              style={{
                fontWeight: 900,
                textShadow: '0 4px 30px rgba(0,0,0,0.5)',
              }}
            >
              {slides[current].title}
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl text-white/80 tracking-wide max-w-xl"
              style={{ fontWeight: 300 }}
            >
              {slides[current].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows — animated entrance */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-y-0 left-0 z-30 flex items-center pl-3 sm:pl-6"
      >
        <button
          onClick={goPrev}
          className="group w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center transition-all duration-300 active:scale-90"
          style={{ backdropFilter: 'blur(8px)' }}
        >
          <ChevronLeft size={20} className="text-white/80 group-hover:text-white transition-colors" />
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-y-0 right-0 z-30 flex items-center pr-3 sm:pr-6"
      >
        <button
          onClick={goNext}
          className="group w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center transition-all duration-300 active:scale-90"
          style={{ backdropFilter: 'blur(8px)' }}
        >
          <ChevronRight size={20} className="text-white/80 group-hover:text-white transition-colors" />
        </button>
      </motion.div>

      {/* Progress Indicator — animated entrance */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4"
      >
        {/* Slide Counter */}
        <div className="flex items-center gap-1 text-white/50 text-xs tracking-widest" style={{ fontWeight: 500 }}>
          <motion.span
            key={current}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-white"
            style={{ fontWeight: 700 }}
          >
            {String(current + 1).padStart(2, '0')}
          </motion.span>
          <span>/</span>
          <span>{String(slides.length).padStart(2, '0')}</span>
        </div>

        {/* Progress Bars */}
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className="relative h-1 rounded-full overflow-hidden transition-all duration-500 cursor-pointer"
              style={{ width: idx === current ? 40 : 16, background: 'rgba(255,255,255,0.2)' }}
            >
              {idx === current && (
                <motion.div
                  className="absolute inset-y-0 left-0 bg-white rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: isPaused ? 0 : INTERVAL / 1000, ease: 'linear' }}
                  key={`progress-${current}-${isPaused}`}
                />
              )}
              {idx !== current && idx < current && (
                <div className="absolute inset-0 bg-white/50 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
