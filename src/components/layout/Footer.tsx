import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail, Phone, MapPin, Code2 as Github, FileDown, Terminal, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-canvas-border bg-canvas-pure text-ink-secondary relative overflow-hidden">
      {/* Top Subtle Pastel Accent Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-accent-green via-accent-lavender to-accent-peach" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        {/* Main CTA Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-canvas-border">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono tracking-widest text-accent-greenDark uppercase font-bold">
              // Available for High-Impact Roles & Projects
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink-primary tracking-tight leading-[1.1]">
              Let’s build something exceptional together.
            </h2>
            <p className="text-sm sm:text-base text-ink-secondary max-w-xl leading-relaxed">
              Accepting selected remote full-stack engineering roles, enterprise SaaS architecture contracts, and custom WordPress/Laravel engagements.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent-greenDark hover:bg-accent-greenDarkHover text-canvas-pure font-bold text-sm tracking-tight transition-all shadow-sm hover:scale-[1.02]"
              >
                <span>Initiate Discussion</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={PERSONAL_INFO.cvPath}
                download={PERSONAL_INFO.cvFileName}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-canvas-soft hover:bg-canvas-border/60 text-ink-primary border border-canvas-border text-sm font-mono font-medium transition-all"
              >
                <FileDown className="w-4 h-4 text-accent-greenDark" />
                <span>Download CV</span>
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-1.5 text-xs font-mono text-ink-secondary">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-accent-greenDark transition-colors flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent-greenDark" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-accent-greenDark transition-colors flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent-greenDark" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Sitemap Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-12 text-xs">
          <div className="space-y-3">
            <p className="font-mono text-ink-primary font-bold tracking-wider uppercase text-[11px]">Primary</p>
            <ul className="space-y-2 text-ink-secondary">
              <li><Link href="/" className="hover:text-accent-greenDark transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent-greenDark transition-colors">About Arif</Link></li>
              <li><Link href="/experience" className="hover:text-accent-greenDark transition-colors">13+ Yrs Experience</Link></li>
              <li><Link href="/skills" className="hover:text-accent-greenDark transition-colors">Technical Stack</Link></li>
              <li><Link href="/services" className="hover:text-accent-greenDark transition-colors">Capabilities & Services</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-mono text-ink-primary font-bold tracking-wider uppercase text-[11px]">Featured Projects</p>
            <ul className="space-y-2 text-ink-secondary">
              <li><Link href="/projects/autoverse" className="hover:text-accent-greenDark transition-colors">01. AUTOVERSE (Live)</Link></li>
              <li><Link href="/projects/sellzy" className="hover:text-accent-greenDark transition-colors">02. SELLZY (Dev)</Link></li>
              <li><Link href="/projects/talentflow" className="hover:text-accent-greenDark transition-colors">03. TALENTFLOW (Dev)</Link></li>
              <li><Link href="/projects/contentsphere" className="hover:text-accent-greenDark transition-colors">04. CONTENTSPHERE</Link></li>
              <li><Link href="/projects" className="hover:text-accent-greenDark transition-colors font-semibold">View All 8 Case Studies →</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-mono text-ink-primary font-bold tracking-wider uppercase text-[11px]">Portfolio & Proof</p>
            <ul className="space-y-2 text-ink-secondary">
              <li><Link href="/client-work" className="hover:text-accent-greenDark transition-colors">Selected Client Websites</Link></li>
              <li><Link href="/resume" className="hover:text-accent-greenDark transition-colors">Resume & Qualifications</Link></li>
              <li><a href={PERSONAL_INFO.cvPath} download className="hover:text-accent-greenDark transition-colors font-medium">Official CV (PDF)</a></li>
              <li><a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent-greenDark transition-colors">GitHub Profile</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-mono text-ink-primary font-bold tracking-wider uppercase text-[11px]">Location & Details</p>
            <div className="space-y-2 text-ink-secondary">
              <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-accent-greenDark" /> {PERSONAL_INFO.location}</p>
              <p className="text-[11px] leading-relaxed">
                BA, Punjab University Lahore (2011–2013)
              </p>
              <p className="text-[11px] text-ink-muted">
                Timezone: PKT (UTC+5) · Flexible for US/EU working hours
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Micro Bar */}
        <div className="pt-8 border-t border-canvas-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
          <p>© {new Date().getFullYear()} Arif Mahmood. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Next.js 14 App Router</span>
            <span>·</span>
            <span>Tailwind CSS</span>
            <span>·</span>
            <span className="text-accent-greenDark font-semibold">Predominantly Light Editorial Design</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
