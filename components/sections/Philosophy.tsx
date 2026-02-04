'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Section, Grid } from '@/components/ui/Section';
import { Headline, Subheadline, Label } from '@/components/ui/Typography';

export const Philosophy: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

    // Parallax & rotation effects
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);
    const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [0.8, 1]), { stiffness: 100, damping: 20 });

    return (
        <Section id="philosophy" className="relative overflow-hidden bg-black py-32 md:py-48 min-h-screen flex items-center">
            {/* Dynamic Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-neutral-900/0 to-neutral-900/0 via-neutral-900/20" />
                <motion.div
                    style={{ y: y1, rotate, scale }}
                    className="absolute -right-[10%] top-[10%] w-[80vw] md:w-[600px] h-[600px] rounded-full bg-gradient-to-br from-neutral-800 to-transparent blur-[120px] opacity-30"
                />
                <motion.div
                    style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]), scale: 1.2 }}
                    className="absolute -left-[10%] bottom-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-900/20 to-transparent blur-[100px] opacity-20"
                />
            </div>

            <Grid className="relative z-10" ref={containerRef}>
                <div className="col-span-4 md:col-span-12 mb-20 text-center">
                    <Label className="mb-8 block mx-auto">01 / The Philosophy</Label>
                    <Headline className="text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8 text-white">
                        Subtraction is <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">sophistication.</span>
                    </Headline>
                </div>

                <div className="col-span-4 md:col-span-5 lg:col-span-4">
                    <Subheadline className="text-neutral-400 text-lg leading-relaxed">
                        In an era of infinite noise, the rarest asset is focus. We don't add to your data stack; we carve away the superfluous until only the actionable remains.
                    </Subheadline>
                </div>

                <div className="col-span-4 md:col-span-6 lg:col-start-7">
                    {/* Glassmorphism Card */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="glass-card p-10 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <h3 className="text-2xl font-light text-white mb-6 relative z-10">The Signal Ratio</h3>
                        <p className="text-neutral-300 leading-relaxed mb-8 relative z-10">
                            Most organizations operate at a 5% signal ratio. They are drowning in 95% noise. Our proprietary filtering algorithms invert this dynamic.
                        </p>

                        {/* Animated Bar */}
                        <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden relative z-10">
                            <motion.div
                                initial={{ width: "5%" }}
                                whileInView={{ width: "95%" }}
                                transition={{ duration: 2, ease: "circOut" }}
                                className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                            />
                        </div>
                        <div className="mt-4 flex justify-between text-xs font-mono text-neutral-500 relative z-10">
                            <span>Current State: Noise</span>
                            <span className="text-white">Target State: Signal</span>
                        </div>
                    </motion.div>
                </div>
            </Grid>
        </Section>
    );
};
