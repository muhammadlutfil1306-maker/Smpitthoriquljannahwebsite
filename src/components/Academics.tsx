import React from 'react';
import { motion } from 'motion/react';
import { MorphReveal } from './ui/MorphReveal';
import { SectionReveal } from './ui/SectionReveal';
import { Clock, BookOpen, Moon, GraduationCap } from 'lucide-react';

const IMG_MORNING = 'https://images.unsplash.com/photo-1719159381916-062fa9f435a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNsYXNzcm9vbSUyMG1vcm5pbmclMjBsZWFybmluZ3xlbnwxfHx8fDE3NzE0ODA0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080';
const IMG_AFTERNOON = 'https://images.unsplash.com/photo-1703144408348-44c3608db4a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3NxdWUlMjBwcmF5ZXIlMjBhZnRlcm5vb24lMjBjb25ncmVnYXRpb258ZW58MXx8fHwxNzcxNDgwNDE1fDA&ixlib=rb-4.1.0&q=80&w=1080';

export const Academics: React.FC = () => {
  return (
    <SectionReveal direction="up" className="w-full h-full flex flex-col pt-14 pb-6 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto flex flex-col h-full max-w-7xl">

        {/* Header */}
        <div className="text-center mb-4 md:mb-6 shrink-0">
          <MorphReveal animation="slideDown" delay={0.1}>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-600 text-xs uppercase tracking-[0.15em] mb-3"
              style={{ fontWeight: 600 }}
            >
              <GraduationCap size={14} />
              Kurikulum
            </span>
          </MorphReveal>
          <MorphReveal animation="clip" delay={0.2} duration={1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tighter" style={{ fontWeight: 900 }}>
              Konsep <span className="text-blue-600">Full Day School</span>
            </h2>
          </MorphReveal>
        </div>

        {/* Two Columns */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 min-h-0">

          {/* Card 1: Kurikulum Nasional — Morning */}
          <MorphReveal animation="slideRight" duration={0.8} className="h-full">
            <div className="h-full bg-white rounded-2xl md:rounded-3xl shadow-xl shadow-slate-200/40 relative overflow-hidden group flex flex-col">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-32 sm:h-36 md:h-44 shrink-0 overflow-hidden"
              >
                <img
                  src={IMG_MORNING}
                  alt="Pembelajaran Kurikulum Nasional"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                {/* Time Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500 text-white text-xs"
                  style={{ fontWeight: 700, backdropFilter: 'blur(8px)' }}
                >
                  <Clock size={12} />
                  07.30 — 12.30
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 p-5 md:p-7 flex flex-col justify-between">
                <div>
                  <MorphReveal animation="slideUp" delay={0.3}>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen size={18} className="text-amber-500" />
                      <span className="text-xs uppercase tracking-[0.15em] text-slate-400" style={{ fontWeight: 600 }}>
                        Sesi Pagi
                      </span>
                    </div>
                  </MorphReveal>

                  <MorphReveal animation="clip" delay={0.35}>
                    <h3 className="text-xl sm:text-2xl md:text-3xl text-slate-900 mb-2 tracking-tight" style={{ fontWeight: 900 }}>
                      Kurikulum Nasional
                    </h3>
                  </MorphReveal>

                  <MorphReveal animation="fade" delay={0.45}>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed" style={{ fontWeight: 400 }}>
                      Fokus penuntasan materi akademik sesuai standar kurikulum nasional. Pembelajaran intensif untuk membangun fondasi ilmu pengetahuan yang kuat.
                    </p>
                  </MorphReveal>
                </div>

                <MorphReveal animation="slideUp" delay={0.55}>
                  <div className="mt-3 md:mt-4 flex flex-wrap gap-2">
                    {['Matematika', 'IPA', 'Bahasa Indonesia', 'IPS', 'B. Inggris'].map((subj, i) => (
                      <motion.span
                        key={subj}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: 0.6 + i * 0.06 }}
                        className="px-2.5 py-1 bg-amber-50 text-amber-700 rounded-lg text-xs"
                        style={{ fontWeight: 600 }}
                      >
                        {subj}
                      </motion.span>
                    ))}
                  </div>
                </MorphReveal>
              </div>
            </div>
          </MorphReveal>

          {/* Card 2: Pesantren Bina Siswa — Afternoon */}
          <MorphReveal animation="slideLeft" duration={0.8} delay={0.15} className="h-full">
            <div className="h-full bg-slate-900 rounded-2xl md:rounded-3xl shadow-xl relative overflow-hidden group flex flex-col text-white">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-32 sm:h-36 md:h-44 shrink-0 overflow-hidden"
              >
                <img
                  src={IMG_AFTERNOON}
                  alt="Pesantren Bina Siswa"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                {/* Time Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs"
                  style={{ fontWeight: 700 }}
                >
                  <Clock size={12} />
                  12.30 — 16.30
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 p-5 md:p-7 flex flex-col justify-between">
                <div>
                  <MorphReveal animation="slideUp" delay={0.4}>
                    <div className="flex items-center gap-2 mb-2">
                      <Moon size={18} className="text-emerald-400" />
                      <span className="text-xs uppercase tracking-[0.15em] text-slate-400" style={{ fontWeight: 600 }}>
                        Sesi Siang — Sore
                      </span>
                    </div>
                  </MorphReveal>

                  <MorphReveal animation="clip" delay={0.45}>
                    <h3 className="text-xl sm:text-2xl md:text-3xl text-white mb-2 tracking-tight" style={{ fontWeight: 900 }}>
                      Pesantren Bina Siswa
                    </h3>
                  </MorphReveal>

                  <MorphReveal animation="fade" delay={0.55}>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed" style={{ fontWeight: 400 }}>
                      Penguatan karakter Islami melalui Diniyah, Tahfidz, pembinaan prestasi & pembinaan karakter. Pulang setelah Sholat Ashar berjamaah.
                    </p>
                  </MorphReveal>
                </div>

                <MorphReveal animation="slideUp" delay={0.65}>
                  <div className="mt-3 md:mt-4 flex flex-wrap gap-2">
                    {['Diniyah', 'Tahfidz', 'Bina Prestasi', 'Bina Karakter', 'Sholat Ashar'].map((subj, i) => (
                      <motion.span
                        key={subj}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: 0.7 + i * 0.06 }}
                        className="px-2.5 py-1 bg-emerald-500/15 text-emerald-300 rounded-lg text-xs"
                        style={{ fontWeight: 600 }}
                      >
                        {subj}
                      </motion.span>
                    ))}
                  </div>
                </MorphReveal>
              </div>
            </div>
          </MorphReveal>

        </div>
      </div>
    </SectionReveal>
  );
};
