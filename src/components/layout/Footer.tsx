import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail, Phone, MapPin, Code2 as Github, FileDown, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-charcoal-800 bg-[#090A0C] text-charcoal-300 relative overflow-hidden">
      {/* Top Banner Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-lime-500 via-lime-400 to-emerald-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        {/* Main CTA Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-charcoal-800">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono tracking-widest text-lime-400 uppercase">
              // Available for High-Impact Roles & Projects
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-sand-50 tracking-tight leading-[1.1]">
              Let’s build something exceptional together.
            </h2>
            <p className="text-sm sm:text-base text-charcoal-400 max-w-xl">
              Currently accepting selected remote full-stack engineering roles, enterprise SaaS architecture contracts, and custom WordPress/Laravel engagements.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-lime-400 hover:bg-lime-500 text-charcoal-950 font-bold text-sm tracking-tight transition-all shadow-lime-glow"
              >
                <span>Initiate Discussion</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={PERSONAL_INFO.cvPath}
                download={PERSONAL_INFO.cvFileName}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-sand-50 border border-charcoal-700 text-sm font-mono transition-all"
              >
                <FileDown className="w-4 h-4 text-lime-400" />
                <span>Download CV</span>
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-1.5 text-xs font-mono text-charcoal-400">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-lime-400 transition-colors flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-lime-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-lime-400 transition-colors flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-lime-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Sitemap Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-12 text-xs">
          <div className="space-y-3">
            <p className="font-mono text-sand-50 font-semibold tracking-wider uppercase text-[11px]">Primary</p>
            <ul className="space-y-2 text-charcoal-400">
              <li><Link href="/" className="hover:text-lime-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-lime-400 transition-colors">About Arif</Link></li>
              <li><Link href="/experience" className="hover:text-lime-400 transition-colors">13+ Yrs Experience</Link></li>
              <li><Link href="/skills" className="hover:text-lime-400 transition-colors">Technical Stack</Link></li>
              <li><Link href="/services" className="hover:text-lime-400 transition-colors">Capabilities & Services</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-mono text-sand-50 font-semibold tracking-wider uppercase text-[11px]">Projects</p>
            <ul className="space-y-2 text-charcoal-400">
              <li><Link href="/projects/autoverse" className="hover:text-lime-400 transition-colors">01. AUTOVERSE (Live)</Link></li>
              <li><Link href="/projects/sellzy" className="hover:text-lime-400 transition-colors">02. SELLZY (Dev)</Link></li>
              <li><Link href="/projects/talentflow" className="hover:text-lime-400 transition-colors">03. TALENTFLOW (Dev)</Link></li>
              <li><Link href="/projects/contentsphere" className="hover:text-lime-400 transition-colors">04. CONTENTSPHERE</Link></li>
              <li><Link href="/projects" className="hover:text-lime-400 transition-colors">View All 8 Projects →</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-mono text-sand-50 font-semibold tracking-wider uppercase text-[11px]">Portfolio & Proof</p>
            <ul className="space-y-2 text-charcoal-400">
              <li><Link href="/client-work" className="hover:text-lime-400 transition-colors">Selected Client Websites</Link></li>
              <li><Link href="/resume" className="hover:text-lime-400 transition-colors">Resume & Qualifications</Link></li>
              <li><a href={PERSONAL_INFO.cvPath} download className="hover:text-lime-400 transition-colors">Official CV (PDF)</a></li>
              <li><a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition-colors">GitHub Profile</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-mono text-sand-50 font-semibold tracking-wider uppercase text-[11px]">Location & Details</p>
            <div className="space-y-2 text-charcoal-400">
              <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-lime-400" /> {PERSONAL_INFO.location}</p>
              <p className="text-[11px] leading-relaxed">
                BA, Punjab University Lahore (2011–2013)
              </p>
              <p className="text-[11px] text-charcoal-500">
                Timezone: PKT (UTC+5) · Flexible for US/EU working hours
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Micro Bar */}
        <div className="pt-8 border-t border-charcoal-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-charcoal-500">
          <p>© {new Date().getFullYear()} Arif Mahmood. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Built with Next.js 14 App Router</span>
            <span>·</span>
            <span>Tailwind CSS</span>
            <span>·</span>
            <span className="text-lime-400">Distinct Editorial Identity</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
