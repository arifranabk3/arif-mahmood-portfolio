import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail, Phone, MapPin, Code2 as Github, FileDown, Terminal, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-surface-borderCharcoal bg-surface-charcoal text-ink-onDarkMuted relative overflow-hidden">
      {/* Top Energetic Lime Accent Line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-accent-lime via-surface-forest to-accent-lime" />

      {/* Subtle Dot Mesh */}
      <div className="absolute inset-0 dark-dot-grid pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        {/* Main CTA Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-surface-borderCharcoal">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono tracking-widest text-accent-lime uppercase font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
              <span>// Available for High-Impact Roles & Projects</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-surface-pure tracking-tight leading-[1.1]">
              Let’s build something exceptional together.
            </h2>
            <p className="text-sm sm:text-base text-ink-onDarkMuted max-w-xl leading-relaxed">
              Accepting selected remote full-stack engineering roles, enterprise SaaS architecture contracts, and custom WordPress/Laravel engagements worldwide.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent-lime hover:bg-accent-limeHover text-surface-forest font-bold text-sm tracking-tight transition-all shadow-md hover:scale-[1.02]"
              >
                <span>Initiate Discussion</span>
                <ArrowUpRight className="w-4 h-4 text-surface-forest" />
              </Link>
              <a
                href={PERSONAL_INFO.cvPath}
                download={PERSONAL_INFO.cvFileName}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-surface-forest hover:bg-surface-forestDark text-surface-pure border border-surface-borderDark text-sm font-mono font-semibold transition-all shadow-sm"
              >
                <FileDown className="w-4 h-4 text-accent-lime" />
                <span>Download CV</span>
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-2 text-xs font-mono text-ink-onDarkMuted">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-accent-lime transition-colors flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent-lime" />
                <span className="text-surface-pure font-medium">{PERSONAL_INFO.email}</span>
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-accent-lime transition-colors flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent-lime" />
                <span className="text-surface-pure font-medium">{PERSONAL_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Sitemap Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-12 text-xs">
          <div className="space-y-3">
            <p className="font-mono text-accent-lime font-bold tracking-wider uppercase text-[11px]">Primary Navigation</p>
            <ul className="space-y-2.5 text-ink-onDarkMuted">
              <li><Link href="/" className="hover:text-surface-pure transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-surface-pure transition-colors">About Arif</Link></li>
              <li><Link href="/experience" className="hover:text-surface-pure transition-colors">13+ Yrs Experience</Link></li>
              <li><Link href="/skills" className="hover:text-surface-pure transition-colors">Technical Stack</Link></li>
              <li><Link href="/services" className="hover:text-surface-pure transition-colors">Capabilities & Services</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-mono text-accent-lime font-bold tracking-wider uppercase text-[11px]">Featured Platforms</p>
            <ul className="space-y-2.5 text-ink-onDarkMuted">
              <li><Link href="/projects/fleetos" className="hover:text-surface-pure transition-colors">01. FLEETOS ENTERPRISE (Live)</Link></li>
              <li><Link href="/projects/autoverse" className="hover:text-surface-pure transition-colors">02. AUTOVERSE (Live)</Link></li>
              <li><Link href="/projects/talentflow" className="hover:text-surface-pure transition-colors">03. TALENTFLOW (Live)</Link></li>
              <li><Link href="/projects/ai-software" className="hover:text-surface-pure transition-colors">04. AISOFTWARE (Live)</Link></li>
              <li><Link href="/projects" className="hover:text-accent-lime transition-colors font-bold text-accent-lime">View All 10 Platforms →</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-mono text-accent-lime font-bold tracking-wider uppercase text-[11px]">Portfolio & Verification</p>
            <ul className="space-y-2.5 text-ink-onDarkMuted">
              <li><Link href="/client-work" className="hover:text-surface-pure transition-colors">Selected Client Websites</Link></li>
              <li><Link href="/resume" className="hover:text-surface-pure transition-colors">Resume & Qualifications</Link></li>
              <li><a href={PERSONAL_INFO.cvPath} download className="hover:text-surface-pure transition-colors font-medium">Official CV (PDF)</a></li>
              <li><a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-surface-pure transition-colors">GitHub Profile</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-mono text-accent-lime font-bold tracking-wider uppercase text-[11px]">Location & Credentials</p>
            <div className="space-y-2 text-ink-onDarkMuted">
              <p className="flex items-center gap-1.5 text-surface-pure font-medium">
                <MapPin className="w-3.5 h-3.5 text-accent-lime" /> {PERSONAL_INFO.location}
              </p>
              <p className="text-[11px] leading-relaxed">
                BA, Punjab University Lahore (2011–2013)
              </p>
              <p className="text-[11px] text-ink-onDarkMuted">
                Active in UTC+5 timezone, accommodating US, UK, EU, and APAC remote engineering overlaps.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-surface-borderCharcoal flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-onDarkMuted">
          <p>© {new Date().getFullYear()} Arif Mahmood. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent-lime transition-colors flex items-center gap-1">
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span>·</span>
            <span>TypeScript & Next.js 14</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
