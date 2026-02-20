import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { MorphReveal } from './ui/MorphReveal';
import { SectionReveal } from './ui/SectionReveal';

export const Hero: React.FC = () => {
  return (
    <SectionReveal direction="fade" className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10 pt-12">

      {/* Decorative Glow — animated */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute top-20 right-20 pointer-events-none mix-blend-overlay"
      >
        <div className="w-80 h-80 rounded-full bg-blue-500/15 blur-[100px]" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
        className="absolute bottom-32 left-10 pointer-events-none mix-blend-overlay"
      >
        <div className="w-52 h-52 rounded-full bg-indigo-500/10 blur-[80px]" />
      </motion.div>

      {/* Gold accent glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-1/3 left-1/4 pointer-events-none"
      >
        <div className="w-64 h-64 rounded-full bg-yellow-500/8 blur-[120px]" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-left max-w-2xl">

          <MorphReveal animation="slideRight" easing="bouncy" delay={0.1}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/8 border border-white/10 mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs tracking-[0.15em] text-emerald-300 uppercase" style={{ fontWeight: 600 }}>
                Pendaftaran Dibuka 2026
              </span>
            </div>
          </MorphReveal>

          {/* Main Heading — Cinzel Font */}
          <MorphReveal animation="clip" easing="sharp" duration={1} delay={0.2}>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-[0.92] tracking-tight"
              style={{ fontFamily: "'Cinzel', serif", fontWeight: 900 }}
            >
              <span style={{ color: '#F9F9F9' }}>SMP IT</span>
              <br />
              <span style={{ color: '#F9F9F9' }}>Thoriqul</span>
              <br />
              <span style={{ color: '#FFD700' }}>Jannah</span>
            </h1>
          </MorphReveal>

          <MorphReveal animation="slideUp" easing="smooth" delay={0.4}>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-lg leading-relaxed border-l-2 border-yellow-500/60 pl-6" style={{ fontWeight: 300 }}>
              SMPIT Thoriqul Jannah adalah sekolah tingkat menengah yang akan mencetak peserta didiknya menjadi pribadi yang Sholeh, Mandiri, Kreatif dan Berprestasi.
            </p>
          </MorphReveal>

          <div className="flex flex-wrap gap-4">
            <MorphReveal animation="zoom" easing="bouncy" delay={0.6}>
              <a
                href="#ppdb"
                className="px-8 py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/30 flex items-center gap-2.5 border border-blue-500/30"
                style={{ fontWeight: 600 }}
              >
                Daftar Sekarang <ArrowRight size={18} />
              </a>
            </MorphReveal>

            <MorphReveal animation="zoom" easing="bouncy" delay={0.7}>
              <button
                className="px-8 py-4 bg-white/5 text-white rounded-2xl hover:bg-white/10 transition-all border border-white/10 flex items-center gap-3 group"
                style={{ fontWeight: 600 }}
              >
                <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={12} fill="currentColor" />
                </div>
                Lihat Video
              </button>
            </MorphReveal>
          </div>
        </div>

        {/* Right Side Visual */}
        <div className="hidden lg:block relative h-[550px]">
          <MorphReveal animation="slideLeft" easing="slow" duration={1.2} className="absolute top-8 right-8 z-10">
            <div className="w-[380px] h-[480px] bg-slate-800 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 relative">
              <img
                src="https://images.unsplash.com/photo-1719159381916-062fa9f435a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwc2Nob29sJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzE0NzMxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Siswa Thoriqul Jannah"
                className="w-full h-full object-cover opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-8 left-8"
              >
                <p className="text-4xl text-white" style={{ fontWeight: 800 }}>98%</p>
                <p className="text-sm text-slate-400 uppercase tracking-[0.15em]" style={{ fontWeight: 600 }}>Lulusan PTN</p>
              </motion.div>
            </div>
          </MorphReveal>

          {/* Background card shape */}
          <MorphReveal animation="slideLeft" easing="slow" delay={0.2} duration={1.2} className="absolute bottom-8 left-8 z-0">
            <div className="w-[300px] h-[400px] bg-gradient-to-br from-yellow-600/30 to-amber-700/30 rounded-3xl opacity-60 scale-95" />
          </MorphReveal>
        </div>
      </div>
    </SectionReveal>
  );
};
