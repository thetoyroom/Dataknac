'use client';

import React, { useEffect, useState } from 'react';
import { Section, Grid } from '@/components/ui/Section';
import { Headline, Subheadline, Label } from '@/components/ui/Typography';
import { motion, AnimatePresence } from 'framer-motion';

const DataPoint = ({ delay, value }: { delay: number, value: number }) => (
    <motion.div
        animate={{ height: `${value}%` }}
        transition={{ duration: 1.5, delay: delay, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 bg-white/10 hover:bg-white/30 transition-colors rounded-sm relative group"
    >
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono text-white bg-black p-1 rounded border border-white/20">
            {value}%
        </div>
    </motion.div>
);

export const Intelligence: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ["Market Vector", "Sentiment", "Supply Chain"];

    // Stable random data for the chart to prevent re-render jumps
    const chartData = React.useMemo(() => {
        return Array.from({ length: 20 }).map((_, i) => ({
            delay: i * 0.05,
            value: Math.random() * 80 + 10
        }));
    }, []); // Empty dependency array means this is calculated once on mount

    // Auto-cycle tabs
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % tabs.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [tabs.length]);

    return (
        <Section id="intelligence" className="bg-black py-32 md:py-48 min-h-screen flex items-center">
            <Grid className="items-center">
                <div className="col-span-4 md:col-span-5 relative z-10">
                    <Label className="mb-8 block text-blue-400">03 / Intelligence</Label>
                    <Headline className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter">
                        Predictive,<br />
                        <span className="text-neutral-500">not just reactive.</span>
                    </Headline>
                    <Subheadline className="text-neutral-400 text-lg leading-relaxed mb-12">
                        History is a map of where you've been. Intelligence is a compass for where you must go. We transition your organization from hindsight to foresight.
                    </Subheadline>

                    <div className="border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm bg-white/[0.02]">
                        {tabs.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(i)}
                                className={`w-full flex items-center gap-4 p-4 text-left transition-colors border-b border-white/5 last:border-0 hover:bg-white/5 ${activeTab === i ? 'bg-white/5 text-white' : 'text-neutral-500'}`}
                            >
                                <span className="text-xs font-mono opacity-50">0{i + 1}</span>
                                <span className={`text-sm tracking-wide ${activeTab === i ? 'font-medium' : 'font-light'}`}>{item}</span>
                                {activeTab === i && (
                                    <motion.div layoutId="indicator" className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="col-span-4 md:col-span-6 lg:col-start-7 lg:col-span-6 relative h-[500px] md:h-[600px] bg-neutral-900/30 rounded-2xl border border-white/10 overflow-hidden flex flex-col shadow-2xl">
                    {/* Header */}
                    <div className="h-12 border-b border-white/10 flex items-center px-4 justify-between bg-black/40">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                        </div>
                        <div className="font-mono text-[10px] text-neutral-500 tracking-widest">LIVE_FEED :: {tabs[activeTab].toUpperCase()}</div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-8 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 1, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-8"
                            >
                                {/* Data Viz Simulation */}
                                <div className="h-full flex flex-col justify-end">
                                    <div className="flex items-end justify-between h-[70%] gap-1 md:gap-2 mb-8 border-b border-white/10 pb-1">
                                        {chartData.map((data, i) => (
                                            <DataPoint
                                                key={i}
                                                delay={data.delay}
                                                value={data.value}
                                            />
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white/5 p-4 rounded border border-white/5">
                                            <div className="text-xs text-neutral-500 font-mono mb-1">CONFIDENCE INTERVAL</div>
                                            <div className="text-2xl text-white font-light">98.4%</div>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded border border-white/5">
                                            <div className="text-xs text-neutral-500 font-mono mb-1">PREDICTED GROWTH</div>
                                            <div className="text-2xl text-blue-400 font-light">+24.8%</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </Grid>
        </Section>
    );
};
