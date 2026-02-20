import React from 'react';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  return (
    <footer className="shrink-0 relative">
      {/* Solid separator line */}
      <div className="w-full h-px bg-white/20" />

      <div className="py-5 px-6">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          {/* Copyright — tegas, high contrast */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/90 text-xs sm:text-sm tracking-wide"
            style={{ fontWeight: 500 }}
          >
            © 2026 SMP IT Thoriqul Jannah. All rights reserved.
          </motion.p>

          {/* Social Links — tegas */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-6"
          >
            {['Instagram', 'Facebook', 'YouTube'].map((social, i) => (
              <motion.a
                key={social}
                href="#"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="text-white/80 text-xs sm:text-sm tracking-wide hover:text-white transition-colors duration-300 relative group"
                style={{ fontWeight: 600 }}
              >
                {social}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
