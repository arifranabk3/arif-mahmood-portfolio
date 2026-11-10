import type { Metadata } from 'next';
import Image from 'next/image';
import { FileDown, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: 'Resume & Curriculum Vitae (CV) — Arif Mahmood',
  description:
    'Official Resume of Arif Mahmood: 13+ years experience as AI-powered Full-Stack Developer, WordPress Architect, and Web Application Developer.',
};

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      
      {/* Top Banner Action — High Contrast Deep Forest Anchor */}
      <div className="bg-surface-forest text-surface-pure border border-surface-borderDark rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-cardDark">
        <div className="space-y-1.5 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-medium text-accent-lime">
            <Sparkles className="w-3.5 h-3.5 text-accent-lime" />
            <span>Verified Curriculum Vitae</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-ink-onDark">
            Arif Mahmood — Resume
          </h1>
          <p className="text-xs sm:text-sm text-ink-onDarkMuted">
            Original PDF preserved and directly available for employer, recruiter, and client download.
          </p>
        </div>

        <a
          href={PERSONAL_INFO.cvPath}
          download={PERSONAL_INFO.cvFileName}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-accent-lime hover:bg-accent-lime/90 text-surface-forest font-bold text-xs tracking-tight transition-all shadow-md flex-shrink-0"
        >
          <FileDown className="w-4 h-4 text-surface-forest" />
          <span>Download Original CV (PDF)</span>
        </a>
      </div>

      {/* Styled Printable CV Sheet (Executive Clean Paper Look) */}
      <div className="bg-surface-pure border border-surface-border rounded-3xl p-8 sm:p-14 space-y-10 shadow-card">
        
        {/* CV Header with Portrait & Coordinates */}
        <div className="border-b border-surface-border pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-ink-primary tracking-tight">
              {PERSONAL_INFO.name}
            </h2>
            <p className="text-sm font-mono text-surface-forest font-semibold">
              {PERSONAL_INFO.roleTitle}
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs font-mono text-ink-secondary pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-surface-forest" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span>·</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-surface-forest font-semibold hover:underline">
                {PERSONAL_INFO.email}
              </a>
              <span>·</span>
              <span>{PERSONAL_INFO.phone}</span>
            </div>
          </div>

          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-surface-border shadow-sm flex-shrink-0 bg-surface-soft">
            <Image
              src={PERSONAL_INFO.cardImageUrl}
              alt="Arif Mahmood"
              width={96}
              height={96}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-widest text-surface-forest font-bold">
            // Professional Summary
          </h3>
          <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
            {PERSONAL_INFO.shortBio} Expertise includes PHP, Laravel, JavaScript, React, Next.js, and WordPress, alongside custom theme and plugin development, headless CMS architecture, RESTful API integration, performance optimization, and AI-assisted development workflows.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-widest text-surface-forest font-bold">
            // Professional Experience
          </h3>
          <div className="space-y-8">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="space-y-3 pb-6 border-b border-surface-border last:border-b-0 last:pb-0">
                <div className="space-y-1">
                  <h4 className="text-base sm:text-lg font-display font-extrabold text-ink-primary tracking-tight">
                    {exp.role}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="font-semibold text-surface-forest text-sm">{exp.company}</span>
                    <span className="text-ink-muted">•</span>
                    <span className="text-ink-secondary">{exp.period}</span>
                    <span className="text-ink-muted">•</span>
                    <span className="text-ink-muted">{exp.location}</span>
                  </div>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-ink-secondary pl-4 list-disc marker:text-surface-forest">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="leading-relaxed">{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Competencies */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-surface-forest font-bold">
            // Technical Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-surface-soft border border-surface-border space-y-1.5">
                <p className="text-ink-primary font-bold">{cat.category}</p>
                <p className="text-ink-secondary leading-relaxed">
                  {cat.skills.map((s) => s.name).join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-3 pt-4 border-t border-surface-border">
          <h3 className="text-xs font-mono uppercase tracking-widest text-surface-forest font-bold flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-surface-forest" />
            <span>Formal Education</span>
          </h3>
          <div className="text-xs font-mono text-ink-secondary space-y-0.5">
            <p className="text-ink-primary font-bold text-sm">{PERSONAL_INFO.education.degree}</p>
            <p className="text-ink-secondary">{PERSONAL_INFO.education.institution} ({PERSONAL_INFO.education.years})</p>
          </div>
        </div>

      </div>

    </div>
  );
}
