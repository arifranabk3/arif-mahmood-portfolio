'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  FileDown, 
  Terminal, 
  Layers, 
  Briefcase, 
  Cpu, 
  Mail, 
  Globe 
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const Navigation: React.FC = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '/projects' },
    { label: 'Client Work', href: '/client-work' },
    { label: 'Experience', href: '/experience' },
    { label: 'Skills', href: '/skills' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Resume', href: '/resume' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#090A0C]/85 backdrop-blur-md border-b border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Wordmark with Live Availability Indicator */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-charcoal-900 border border-charcoal-700 flex items-center justify-center text-lime-400 font-mono text-sm font-bold group-hover:border-lime-400/60 group-hover:shadow-lime-glow transition-all">
              AM
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-sand-50 group-hover:text-lime-400 transition-colors">
                Arif Mahmood
              </span>
              <span className="text-[11px] font-mono text-charcoal-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                <span>13+ Yrs Experience · Available</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-charcoal-900/60 p-1.5 rounded-full border border-charcoal-800">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-charcoal-800 text-lime-400 border border-charcoal-700'
                      : 'text-charcoal-300 hover:text-sand-50 hover:bg-charcoal-800/40'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.cvPath}
              download={PERSONAL_INFO.cvFileName}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-charcoal-900 hover:bg-charcoal-800 text-charcoal-300 hover:text-sand-50 border border-charcoal-700 text-xs font-mono font-medium transition-all"
            >
              <FileDown className="w-3.5 h-3.5 text-lime-400" />
              <span>CV (PDF)</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-lime-400 hover:bg-lime-500 text-charcoal-950 font-bold text-xs tracking-tight transition-all shadow-lime-glow hover:translate-y-[-1px]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg bg-charcoal-900 border border-charcoal-700 text-charcoal-300 hover:text-sand-50"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-charcoal-800 bg-[#090A0C] px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-xs font-medium ${
                  pathname === link.href
                    ? 'bg-charcoal-800 text-lime-400 border border-charcoal-700'
                    : 'text-charcoal-300 hover:bg-charcoal-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-charcoal-800 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.cvPath}
              download={PERSONAL_INFO.cvFileName}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-charcoal-900 border border-charcoal-700 text-xs font-mono text-sand-50"
            >
              <FileDown className="w-4 h-4 text-lime-400" />
              <span>Download Original CV (PDF)</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-lime-400 text-charcoal-950 font-bold text-xs"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

