'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Headline } from '@/components/ui/Typography';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Engage: React.FC = () => {
    return (
        <Section id="engage" className="bg-[#030303] py-40 min-h-[90vh] flex items-center justify-center relative border-t border-white/5 overflow-hidden">

            {/* Portal Effect Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                    className="w-[1000px] h-[1000px] rounded-full bg-[conic-gradient(from_0deg_at_50%_50%,rgba(255,255,255,0.05)_0deg,transparent_60deg,rgba(255,255,255,0.05)_120deg,transparent_180deg,rgba(255,255,255,0.05)_240deg,transparent_300deg,rgba(255,255,255,0.05)_360deg)] blur-3xl"
                />
            </div>
            <motion.div
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_70%)]"
            />

            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                <motion.span
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-mono text-xs text-blue-500 mb-8 block tracking-[0.3em] uppercase"
                >
                    Final Directive
                </motion.span>

                <Headline className="text-6xl md:text-8xl lg:text-9xl mb-12 tracking-tighter mix-blend-screen text-white">
                    Ready to <br /> evolve?
                </Headline>

                <motion.p
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-neutral-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed"
                >
                    The audit is the first step. We identify the friction points in your intelligence architecture and map the path to clarity.
                </motion.p>

                <motion.div
                    initial={{ opacity: 1, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-8"
                >
                    <Link to="/contact">
                        <ShimmerButton className="shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)] transition-shadow duration-500 scale-110 md:scale-125">
                            <span className="whitespace-pre-wrap text-center text-sm font-semibold leading-none tracking-wider text-white uppercase px-4">
                                Begin Assessment
                            </span>
                        </ShimmerButton>
                    </Link>

                    <button className="text-neutral-500 hover:text-white transition-colors text-sm font-medium tracking-widest uppercase border-b border-transparent hover:border-white pb-1">
                        View Calibration Data
                    </button>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-0 w-full text-center">
                <p className="text-[10px] text-neutral-800 font-mono tracking-widest">DATAKNAC © 2024 // ALL SYSTEMS NOMINAL</p>
            </div>
        </Section>
    );
};
