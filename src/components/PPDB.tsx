import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { MorphReveal } from './ui/MorphReveal';
import { SectionReveal } from './ui/SectionReveal';
import { ContactForm } from './ContactForm';

export const PPDB: React.FC = () => {
  return (
    <SectionReveal direction="zoom" className="flex-1 flex items-center justify-center px-6 pt-14 pb-4 w-full h-full">
      {/* Menggunakan Grid: 1 Kolom di HP, 2 Kolom di Laptop/Desktop */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* BAGIAN KIRI: Teks dan Tombol Daftar */}
        <div className="text-center lg:text-left">
          <MorphReveal animation="zoom" duration={0.8} delay={0.2}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-6 tracking-tighter" style={{ fontWeight: 900 }}>
              Siap <br className="hidden lg:block" />
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
            <p className="text-base sm:text-lg md:text-xl text-blue-100/90 mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0" style={{ fontWeight: 300 }}>
              Pendaftaran Tahun Ajaran 2026/2027 telah dibuka. Amankan kursi Anda sekarang atau tanyakan informasi lebih lanjut.
            </p>
          </MorphReveal>

          <MorphReveal animation="slideUp" delay={0.6} easing="bouncy">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.button
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="px-8 py-4 bg-white text-blue-700 text-base md:text-lg rounded-2xl shadow-2xl shadow-black/15 flex items-center gap-3 group border border-white/50"
                style={{ fontWeight: 700 }}
              >
                Daftar Online <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
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

        {/* BAGIAN KANAN: Form Kontak */}
        <MorphReveal animation="slideLeft" delay={0.8}>
          <div className="w-full flex justify-center lg:justify-end">
            <ContactForm />
          </div>
        </MorphReveal>

      </div>
    </SectionReveal>
  );
};
