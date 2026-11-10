import type { Metadata } from 'next';
import { FileDown, Eye, GraduationCap, MapPin, Mail, Phone, Calendar, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: 'Resume & Curriculum Vitae (CV)',
  description:
    'Official Resume of Arif Mahmood: 13+ years experience as AI-powered Full-Stack Developer, WordPress Architect, and Web Application Developer.',
};

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      
      {/* Top Banner Action */}
      <div className="bg-charcoal-900 border border-charcoal-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-editorial">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-xs font-mono uppercase text-lime-400 tracking-wider">
            Verified Curriculum Vitae
          </span>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-sand-50">
            Arif Mahmood — Resume
          </h1>
          <p className="text-xs text-charcoal-400">
            Original PDF preserved and directly available for recruiter and client download.
          </p>
        </div>

        <a
          href={PERSONAL_INFO.cvPath}
          download={PERSONAL_INFO.cvFileName}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-lime-400 hover:bg-lime-500 text-charcoal-950 font-bold text-xs tracking-tight transition-all shadow-lime-glow flex-shrink-0"
        >
          <FileDown className="w-4 h-4" />
          <span>Download Original CV (PDF)</span>
        </a>
      </div>

      {/* Styled Printable CV Sheet */}
      <div className="bg-charcoal-900/90 border border-charcoal-800 rounded-3xl p-8 sm:p-12 space-y-10 shadow-editorial">
        
        {/* CV Header */}
        <div className="border-b border-charcoal-800 pb-8 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-sand-50">
            {PERSONAL_INFO.name}
          </h2>
          <p className="text-sm font-mono text-lime-400 font-semibold">
            {PERSONAL_INFO.roleTitle}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-charcoal-400 pt-1">
            <span>{PERSONAL_INFO.location}</span>
            <span>·</span>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-lime-400">{PERSONAL_INFO.email}</a>
            <span>·</span>
            <span>{PERSONAL_INFO.phone}</span>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-widest text-lime-400">
            // Professional Summary
          </h3>
          <p className="text-sm sm:text-base text-charcoal-300 leading-relaxed">
            {PERSONAL_INFO.shortBio} Expertise includes PHP, Laravel, JavaScript, React, Next.js, and WordPress, alongside custom theme and plugin development, headless CMS architecture, RESTful API integration, performance optimization, and AI-assisted development workflows.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-widest text-lime-400">
            // Professional Experience
          </h3>
          <div className="space-y-8">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <span className="font-display font-bold text-sand-50">
                    {exp.role} — <span className="text-lime-400">{exp.company}</span>
                  </span>
                  <span className="text-xs font-mono text-charcoal-400">
                    {exp.period} | {exp.location}
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs text-charcoal-300 pl-4 list-disc">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-lime-400">
            // Technical Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-charcoal-950 border border-charcoal-800 space-y-2">
                <p className="text-sand-50 font-bold">{cat.category}</p>
                <p className="text-charcoal-400">
                  {cat.skills.map((s) => s.name).join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-3 pt-4 border-t border-charcoal-800">
          <h3 className="text-xs font-mono uppercase tracking-widest text-lime-400">
            // Education
          </h3>
          <div className="text-xs font-mono text-charcoal-300 space-y-0.5">
            <p className="text-sand-50 font-semibold">{PERSONAL_INFO.education.degree}</p>
            <p className="text-charcoal-400">{PERSONAL_INFO.education.institution} ({PERSONAL_INFO.education.years})</p>
          </div>
        </div>

      </div>

    </div>
  );
}

