import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Sprout, Lightbulb, Trophy } from 'lucide-react';
import { MorphReveal } from './ui/MorphReveal';
import { SectionReveal } from './ui/SectionReveal';

const values = [
  { icon: <BookOpen />, title: 'Sholeh', color: 'bg-emerald-100 text-emerald-600' },
  { icon: <Sprout />, title: 'Mandiri', color: 'bg-blue-100 text-blue-600' },
  { icon: <Lightbulb />, title: 'Kreatif', color: 'bg-amber-100 text-amber-600' },
  { icon: <Trophy />, title: 'Juara', color: 'bg-pink-100 text-pink-600' },
];

export const About: React.FC = () => {
  return (
    <SectionReveal direction="up" className="container mx-auto px-6 h-full flex flex-col justify-center pt-12 pb-6">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* Left: Typography */}
        <div className="lg:w-1/2">
          <MorphReveal animation="slideRight" easing="sharp">
            <span className="text-blue-600 tracking-[0.3em] uppercase mb-4 block text-sm" style={{ fontWeight: 700 }}>
              Our Philosophy
            </span>
          </MorphReveal>

          <MorphReveal animation="clip" delay={0.1} duration={1}>
            <h2 className="text-5xl md:text-7xl text-slate-900 mb-8 leading-[0.95] tracking-tighter" style={{ fontWeight: 900 }}>
              We Build <br />
              <span className="text-slate-400">Civilization.</span>
            </h2>
          </MorphReveal>

          <MorphReveal animation="fade" delay={0.3}>
            <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-xl" style={{ fontWeight: 500 }}>
              Thoriqul Jannah combines{' '}
              <span className="text-blue-600 underline decoration-blue-200 decoration-4 underline-offset-4" style={{ fontWeight: 700 }}>
                academic excellence
              </span>{' '}
              with spiritual depth. We don't just teach; we inspire the next generation of leaders.
            </p>
          </MorphReveal>

          <div className="grid grid-cols-2 gap-8">
            <MorphReveal animation="slideUp" delay={0.4}>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="border-l-4 border-blue-500 pl-4"
              >
                <h4 className="text-4xl text-slate-900" style={{ fontWeight: 900 }}>15+</h4>
                <p className="text-sm text-slate-400 uppercase tracking-wider" style={{ fontWeight: 700 }}>Years Exp.</p>
              </motion.div>
            </MorphReveal>
            <MorphReveal animation="slideUp" delay={0.5}>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="border-l-4 border-emerald-500 pl-4"
              >
                <h4 className="text-4xl text-slate-900" style={{ fontWeight: 900 }}>A</h4>
                <p className="text-sm text-slate-400 uppercase tracking-wider" style={{ fontWeight: 700 }}>Accredited</p>
              </motion.div>
            </MorphReveal>
          </div>
        </div>

        {/* Right: Icon Grid */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-6">
          {values.map((item, idx) => (
            <MorphReveal key={idx} animation="zoom" delay={0.2 + idx * 0.1} easing="bouncy">
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                className="aspect-square rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col items-center justify-center gap-4 hover:shadow-xl transition-shadow cursor-pointer"
              >
                <motion.div
                  initial={{ rotate: -10, scale: 0.8 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1, type: 'spring', stiffness: 200 }}
                  className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center text-3xl`}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-lg text-slate-800" style={{ fontWeight: 700 }}>{item.title}</h3>
              </motion.div>
            </MorphReveal>
          ))}
        </div>

      </div>
    </SectionReveal>
  );
};
