import React from 'react';
import { motion } from 'motion/react';

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade';
  delay?: number;
  duration?: number;
}

export const SectionReveal: React.FC<SectionRevealProps> = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.8,
}) => {
  const getInitial = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: 60 };
      case 'down': return { opacity: 0, y: -60 };
      case 'left': return { opacity: 0, x: 60 };
      case 'right': return { opacity: 0, x: -60 };
      case 'zoom': return { opacity: 0, scale: 0.9 };
      case 'fade': return { opacity: 0 };
      default: return { opacity: 0, y: 60 };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case 'up': case 'down': return { opacity: 1, y: 0 };
      case 'left': case 'right': return { opacity: 1, x: 0 };
      case 'zoom': return { opacity: 1, scale: 1 };
      case 'fade': return { opacity: 1 };
      default: return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
