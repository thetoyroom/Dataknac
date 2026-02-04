'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Headline, Subheadline } from '@/components/ui/Typography';
import { ArrowLeft, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
    return (
        <div className="min-h-screen bg-black relative overflow-hidden flex flex-col">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 flex-1 flex items-center justify-center p-6">
                <div className="max-w-xl w-full">
                    <Link to="/" className="inline-flex items-center gap-2 text-neutral-500 hover:text-white mb-12 transition-colors text-sm font-medium group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Return to Transmission
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-10"
                    >
                        <span className="font-mono text-xs text-blue-500 mb-4 block tracking-widest uppercase">SECURE CHANNEL OPEN</span>
                        <Headline className="mb-4">Initiate Protocol</Headline>
                        <Subheadline className="text-neutral-400">
                            Establish a direct line. Our architects are standing by to audit your intelligence infrastructure.
                        </Subheadline>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Identity</label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Coordinates</label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Directive</label>
                            <textarea
                                placeholder="Brief breakdown of your intelligence needs..."
                                headers="4"
                                className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors h-32 resize-none"
                            />
                        </div>

                        <button className="w-full bg-white text-black py-4 rounded-sm font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors flex items-center justify-center gap-3 group">
                            Transmit Signal
                            <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.form>
                </div>
            </div>

            <div className="relative z-10 p-6 text-center">
                <p className="text-[10px] text-neutral-700 font-mono">ENCRYPTED // END-TO-END</p>
            </div>
        </div>
    );
};

export default Contact;
