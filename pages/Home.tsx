import React from 'react';
import { motion } from 'framer-motion';
import { Philosophy } from '../components/sections/Philosophy';
import { System } from '../components/sections/System';
import { Intelligence } from '../components/sections/Intelligence';
import { Engage } from '../components/sections/Engage';
import { SplineSceneBasic } from '../components/SplineSceneBasic';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen">
            {/* HERO SECTION */}
            {/* HERO SECTION - Full Width without Constraints */}
            <div className="w-full h-screen flex items-center justify-center relative overflow-hidden pt-0">
                <SplineSceneBasic />
            </div>

            {/* PHILOSOPHY SECTION */}
            <Philosophy />

            {/* SYSTEM SECTION */}
            <System />

            {/* INTELLIGENCE SECTION */}
            <Intelligence />

            {/* ENGAGE SECTION */}
            <Engage />
        </div>
    );
};

export default Home;