'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section, Grid } from '@/components/ui/Section';
import { Headline, Subheadline, Label } from '@/components/ui/Typography';
import { Cpu, Network, Share2, Activity } from 'lucide-react';

export const System: React.FC = () => {
    return (
        <Section id="system" className="bg-black py-32 md:py-48 border-t border-white/5 relative overflow-hidden">
            {/* Background Grid Animation */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <Grid className="relative z-10">
                <div className="col-span-4 md:col-span-12 text-center mb-24">
                    <Label className="mb-6 block text-neutral-500">02 / The System</Label>
                    <Headline className="text-center mx-auto max-w-5xl text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter">
                        A self-correcting <br />
                        <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">intelligence architecture.</span>
                    </Headline>
                </div>

                {/* Schematic Cards */}
                <div className="col-span-4 md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "Ingest", icon: Share2, desc: "Omnichannel data absorption via low-latency API hooks.", delay: 0 },
                        { title: "Process", icon: Cpu, desc: "Real-time neural rendering of complex datasets.", delay: 0.2 },
                        { title: "Deploy", icon: Network, desc: "Autonomous execution of strategic directives.", delay: 0.4 }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 1, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: item.delay, duration: 0.8 }}
                            whileHover={{ y: -5 }}
                            className="bg-neutral-900/40 border border-white/5 p-10 rounded-xl hover:bg-neutral-900/60 hover:border-white/20 transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="mb-8 w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-colors shadow-lg">
                                <item.icon size={24} className="text-neutral-400 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
                                {item.title}
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono text-neutral-500 ml-auto">0{i + 1}</span>
                            </h3>
                            <p className="text-neutral-500 group-hover:text-neutral-300 transition-colors text-sm leading-relaxed">{item.desc}</p>

                            {/* Technical Activity Line */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
                                <motion.div
                                    className="h-full bg-white blur-[2px]"
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1.5, delay: 0.5 + item.delay, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Central System Monitor */}
                <div className="col-span-4 md:col-span-12 mt-24 relative">
                    <div className="h-[400px] border border-white/10 rounded-2xl overflow-hidden bg-black relative flex items-center justify-center">
                        {/* Status Overlay */}
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="font-mono text-[10px] text-green-500 tracking-widest">SYSTEM ONLINE</span>
                        </div>
                        <div className="absolute top-4 right-4 font-mono text-[10px] text-neutral-600">
                            CPU: 4% // RAM: 12GB
                        </div>

                        {/* Central Pulse Animation */}
                        <div className="relative z-10">
                            <div className="relative flex items-center justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"
                                />
                                <div className="w-40 h-40 rounded-full border border-white/10 flex items-center justify-center bg-black/50 backdrop-blur-sm relative">
                                    <div className="absolute inset-0 rounded-full border border-white/5 border-t-white/30 animate-spin transition-all duration-[10s]"></div>
                                    <div className="absolute inset-2 rounded-full border border-white/5 border-b-white/20 animate-spin transition-all duration-[7s] direction-reverse"></div>

                                    <Activity className="text-white opacity-80" size={40} />
                                </div>
                            </div>
                        </div>

                        {/* Background Data Stream Lines */}
                        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>
                </div>
            </Grid>
        </Section>
    );
};
