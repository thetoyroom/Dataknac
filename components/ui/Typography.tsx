import React from 'react';
import { motion } from 'framer-motion';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const Headline: React.FC<TypographyProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.h1 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0, 0.2, 1] }}
      className={`font-sans text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.95] text-textMain ${className}`}
    >
      {children}
    </motion.h1>
  );
};

export const Subheadline: React.FC<TypographyProps> = ({ children, className = "", delay = 0.1 }) => {
  return (
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0, 0.2, 1] }}
      className={`font-sans text-2xl md:text-3xl lg:text-4xl font-light tracking-tight leading-snug text-textMain ${className}`}
    >
      {children}
    </motion.h2>
  );
};

export const BodyText: React.FC<TypographyProps> = ({ children, className = "", delay = 0.2 }) => {
  return (
    <motion.p 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0, 0.2, 1] }}
      className={`font-sans text-lg md:text-xl font-normal leading-relaxed text-textMuted tracking-normal ${className}`}
    >
      {children}
    </motion.p>
  );
};

export const Label: React.FC<TypographyProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.span 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`block font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4 ${className}`}
    >
      {children}
    </motion.span>
  );
};