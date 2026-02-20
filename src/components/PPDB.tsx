import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { MorphReveal } from './ui/MorphReveal';
import { SectionReveal } from './ui/SectionReveal';

export const PPDB: React.FC = () => {
  return (
    <SectionReveal direction="zoom" className="flex-1 flex items-center justify-center px-6 pt-14 pb-4">
      <div className="w-full max-w-4xl text-center">

        <MorphReveal animation="zoom" duration={0.8} delay={0.2}>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 md:mb-6 tracking-tighter" style={{ fontWeight: 900 }}>
            Siap <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-blue-200 inline-block"
            >
              Bergabung?
            </motion.span>
          </h2>
        </MorphReveal>

        <MorphReveal animation="slideUp" delay={0.4}>
          <p className="text-base sm:text-lg md:text-2xl text-blue-100/90 mb-8 md:mb-12 max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
            Pendaftaran Tahun Ajaran 2026/2027 telah dibuka. Amankan kursi Anda sekarang.
          </p>
        </MorphReveal>

        <MorphReveal animation="slideUp" delay={0.6} easing="bouncy">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="px-8 py-4 bg-white text-blue-700 text-base md:text-lg rounded-2xl shadow-2xl shadow-black/15 flex items-center gap-3 group border border-white/50"
              style={{ fontWeight: 700 }}
            >
              Daftar Online <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="px-8 py-4 bg-transparent border-2 border-white/25 text-white text-base md:text-lg rounded-2xl hover:bg-white/10 transition-colors"
              style={{ fontWeight: 600 }}
            >
              Hubungi Kami
            </motion.button>
          </div>
        </MorphReveal>

        <MorphReveal animation="fade" delay={1} className="mt-8 md:mt-12">
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.4em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.2em' }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs sm:text-sm text-blue-200/50 uppercase"
            style={{ fontWeight: 600 }}
          >
            Kuota Terbatas • Gelombang 1 Segera Ditutup
          </motion.p>
        </MorphReveal>

      </div>
    </SectionReveal>
  );
};
