import React from 'react';
import { motion } from 'motion/react';

export const DynamicBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-[-25%] w-[150%] h-[150%]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 65%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 65%)',
        }}
      />

      {/* Floating geometric shapes — animated in/out */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[12%] left-[8%] w-28 h-28 border border-blue-400/15 rounded-2xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[18%] right-[8%] w-40 h-40 border border-indigo-400/10 rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 45 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[60%] left-[70%] w-16 h-16 border border-emerald-400/10 rounded-lg"
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.6)_100%)]" />
    </div>
  );
};
