import React from 'react';
import { motion, Variants } from 'motion/react';

type AnimationType = 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'zoom' | 'rotate' | 'clip';
type EasingType = 'smooth' | 'bouncy' | 'sharp' | 'slow';

interface MorphRevealProps {
  children: React.ReactNode;
  delay?: number;
  width?: "fit-content" | "100%" | "full";
  className?: string;
  animation?: AnimationType;
  easing?: EasingType;
  duration?: number;
}

export const MorphReveal: React.FC<MorphRevealProps> = ({ 
  children, 
  delay = 0, 
  width = "fit-content",
  className = "",
  animation = 'slideUp',
  easing = 'smooth',
  duration = 0.8
}) => {
  
  const getVariants = (type: AnimationType): Variants => {
    switch (type) {
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
          exit: { opacity: 0 }
        };
      case 'slideUp':
        return {
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -40 }
        };
      case 'slideDown':
        return {
          hidden: { opacity: 0, y: -40 },
          visible: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 40 }
        };
      case 'slideLeft':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -50 }
        };
      case 'slideRight':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 50 }
        };
      case 'zoom':
        return {
          hidden: { opacity: 0, scale: 0.85 },
          visible: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 1.1 }
        };
      case 'rotate':
        return {
          hidden: { opacity: 0, rotate: -10, scale: 0.9 },
          visible: { opacity: 1, rotate: 0, scale: 1 },
          exit: { opacity: 0, rotate: 10, scale: 0.9 }
        };
      case 'clip':
        return {
          hidden: { opacity: 0, clipPath: 'inset(100% 0 0 0)' },
          visible: { opacity: 1, clipPath: 'inset(0 0 0 0)' },
          exit: { opacity: 0, clipPath: 'inset(0 0 100% 0)' }
        };
      default:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -50 }
        };
    }
  };

  const getTransition = (ease: EasingType) => {
    switch (ease) {
      case 'bouncy': return { type: "spring", stiffness: 300, damping: 15 };
      case 'sharp': return { ease: [0.6, -0.05, 0.01, 0.99] }; // Cubic bezier
      case 'slow': return { ease: [0.25, 0.1, 0.25, 1], duration: duration * 1.5 };
      case 'smooth': default: return { ease: [0.22, 1, 0.36, 1] }; // Liquid default
    }
  };

  return (
    <div style={{ width: width === "full" ? "100%" : width }} className={className}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.3, margin: "0px 0px -100px 0px" }}
        variants={getVariants(animation)}
        transition={{ 
          duration: duration, 
          delay: delay, 
          ...getTransition(easing)
        }}
        style={{ willChange: "transform, opacity" }}
      >
        {children}
      </motion.div>
    </div>
  );
};