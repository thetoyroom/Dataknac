import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Philosophy', href: '/#philosophy' },
    { label: 'System', href: '/#system' },
    { label: 'Intelligence', href: '/#intelligence' },
  ];

  return (
    <>
      <div
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2"
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        {/* Main Pill */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="h-[52px] rounded-full border border-white/10 bg-black/50 backdrop-blur-xl flex items-center pl-4 pr-2 shadow-2xl relative z-50 min-w-16 cursor-pointer"
        >
          <div className="flex items-center gap-5">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
              <span className="font-sans text-sm tracking-tight font-bold text-white drop-shadow-md">Dataknac</span>
            </Link>

            <div className="w-[1px] h-3 bg-white/10"></div>

            <div
              className="flex items-center gap-2 px-2 py-1.5 rounded-full text-[10px] font-medium text-white/90 uppercase tracking-widest"
            >
              <span>Menu</span>
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={12} className={isMenuOpen ? "block" : "hidden"} />
                <Menu size={12} className={!isMenuOpen ? "block" : "hidden"} />
              </motion.div>
            </div>
          </div>
        </motion.header>

        {/* Expandable Menu Window */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10, filter: "blur(5px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, y: -10, filter: "blur(5px)" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="w-[280px] bg-black/90 backdrop-blur-3xl border border-white/10 rounded-2xl p-2 shadow-2xl flex flex-col gap-1 overflow-hidden"
            >
              <div className="p-2">
                <span className="text-[10px] text-neutral-500 font-mono pl-2 block mb-2 tracking-widest">NAVIGATION</span>
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group"
                  >
                    {link.label}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white">→</span>
                  </Link>
                ))}
              </div>

              <div className="border-t border-white/10 p-2">
                <Link to="/contact" className="w-full block bg-white text-black py-2.5 rounded-lg text-xs font-bold hover:bg-neutral-200 transition-colors tracking-wide text-center">
                  ENGAGE PROTOCOL
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Header;