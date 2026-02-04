import React from 'react';
import { motion } from 'framer-motion';

export const PulseGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050507]/80 to-[#050507]"></div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] gap-px w-[150%] h-[150%] opacity-30 transform -rotate-12 -translate-x-20 -translate-y-20">
             {Array.from({ length: 400 }).map((_, i) => (
                 <div key={i} className="w-full h-full border border-white/5 aspect-square"></div>
             ))}
        </div>
    </div>
  );
};

export const AbstractShape: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg viewBox="0 0 400 400" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M50 200 C50 100 150 50 200 50 S350 150 350 200 S250 350 200 350 S50 300 50 200 Z"
                stroke="url(#gradient)"
                strokeWidth="1"
            />
             <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
                d="M100 200 C100 150 150 100 200 100 S300 150 300 200 S250 300 200 300 S100 250 100 200 Z"
                stroke="url(#gradient)"
                strokeWidth="1"
            />
             <defs>
                <linearGradient id="gradient" x1="50" y1="50" x2="350" y2="350" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4f46e5" stopOpacity="0.5" />
                    <stop offset="1" stopColor="#ececec" stopOpacity="0.1" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export const MetricBar: React.FC<{ label: string; value: string; percentage: number; delay?: number }> = ({ label, value, percentage, delay = 0 }) => {
    return (
        <div className="w-full mb-8">
            <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-mono text-textMuted uppercase tracking-wider">{label}</span>
                <span className="text-sm font-sans text-textMain">{value}</span>
            </div>
            <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    transition={{ duration: 1.5, delay, ease: [0.2, 0, 0.2, 1] }}
                    className="absolute top-0 left-0 h-full bg-white"
                />
            </div>
        </div>
    )
}