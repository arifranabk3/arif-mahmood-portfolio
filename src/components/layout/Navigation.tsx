'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    { label: 'Work', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Experience', href: '/experience' },
    { label: 'Expertise', href: '/skills' },
    { label: 'Client Work', href: '/client-work' },
    { label: 'Services', href: '/services' },
    { label: 'Resume', href: '/resume' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-4">
      <motion.div 
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled 
            ? 'glass-pure shadow-card py-2.5 px-5 sm:px-7 border border-canvas-border' 
            : 'bg-canvas-pure/90 backdrop-blur-md shadow-soft py-3 px-5 sm:px-7 border border-canvas-borderSoft'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Personal Monogram / Logo with Actual Avatar */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-canvas-border group-hover:border-accent-greenDark transition-colors flex-shrink-0 shadow-sm">
              <Image
                src={PERSONAL_INFO.avatarUrl}
                alt="Arif Mahmood"
                width={36}
                height={36}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-ink-primary group-hover:text-accent-greenDark transition-colors">
                Arif Mahmood
              </span>
              <span className="text-[10px] font-mono text-ink-muted flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                <span>13+ Yrs Exp · Available</span>
              </span>
            </div>
          </Link>

          {/* Desktop Center Pill Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-canvas-soft/80 p-1 rounded-full border border-canvas-border">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-canvas-pure text-accent-greenDark font-bold shadow-sm'
                      : 'text-ink-secondary hover:text-ink-primary hover:bg-canvas-pure/50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons: CV & Contact */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.cvPath}
              download={PERSONAL_INFO.cvFileName}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-canvas-soft hover:bg-canvas-border/70 text-ink-secondary hover:text-ink-primary border border-canvas-border text-xs font-mono font-medium transition-all"
            >
              <FileDown className="w-3.5 h-3.5 text-accent-greenDark" />
              <span>CV (PDF)</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent-greenDark hover:bg-accent-greenDarkHover text-canvas-pure font-bold text-xs tracking-tight transition-all shadow-sm hover:scale-[1.02]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-full bg-canvas-soft border border-canvas-border text-ink-secondary hover:text-ink-primary"
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
            className="lg:hidden mt-2 mx-auto max-w-sm rounded-3xl bg-canvas-pure border border-canvas-border p-5 shadow-elevated space-y-4"
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                    pathname === link.href
                      ? 'bg-accent-lavender text-accent-greenDark font-bold'
                      : 'text-ink-secondary hover:text-ink-primary hover:bg-canvas-soft'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-canvas-border flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.cvPath}
                download={PERSONAL_INFO.cvFileName}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-canvas-soft border border-canvas-border text-xs font-mono text-ink-primary font-medium"
              >
                <FileDown className="w-3.5 h-3.5 text-accent-greenDark" />
                <span>Download Official CV (PDF)</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-accent-greenDark text-canvas-pure font-bold text-xs shadow-sm"
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
