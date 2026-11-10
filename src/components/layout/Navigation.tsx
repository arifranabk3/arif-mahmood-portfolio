'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  FileDown, 
  Sparkles,
  Layers,
  Briefcase,
  Terminal,
  Compass
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const Navigation: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '/#projects' },
    { label: 'Expertise', href: '/#expertise' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Clients', href: '/#client-work' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-4">
      <motion.div 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#15191D]/85 backdrop-blur-xl border border-white/10 shadow-2xl py-2 px-4 sm:px-6' 
            : 'bg-[#15191D]/50 backdrop-blur-md border border-white/5 py-3 px-5 sm:px-7'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Personal Monogram / Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/15 group-hover:border-accent transition-colors flex-shrink-0">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt="Arif Mahmood"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-text-primary group-hover:text-accent transition-colors">
                Arif Mahmood
              </span>
              <span className="text-[10px] font-mono text-text-secondary flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>Available for Q2/Q3 Roles</span>
              </span>
            </div>
          </Link>

          {/* Center Pill Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-accent/15 text-accent border border-accent/30 font-semibold'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Button: Download CV & Contact */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.cvPath}
              download={PERSONAL_INFO.cvFileName}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-text-secondary hover:text-text-primary border border-white/10 text-xs font-mono transition-all"
            >
              <FileDown className="w-3.5 h-3.5 text-accent" />
              <span>CV</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-accent hover:bg-accent-hover text-bg-dark font-bold text-xs tracking-tight transition-all shadow-sm hover:scale-[1.02]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-text-secondary hover:text-text-primary"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

        </div>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 mx-auto max-w-sm rounded-2xl bg-bg-card border border-white/10 p-5 shadow-2xl space-y-4"
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-xl text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.cvPath}
                download={PERSONAL_INFO.cvFileName}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-text-primary"
              >
                <FileDown className="w-3.5 h-3.5 text-accent" />
                <span>Download CV (PDF)</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-accent text-bg-dark font-bold text-xs"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
