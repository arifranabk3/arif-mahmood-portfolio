import type { Metadata } from 'next';
import { TrendingUp, MapPin, Calendar, CheckCircle2, FileDown } from 'lucide-react';
import { EXPERIENCES, PERSONAL_INFO } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: 'Professional Experience & Career History',
  description:
    '13+ years professional timeline of Arif Mahmood across Zam Solutions, Spearhead Technology, Irtifa Group, and Global Technology Coverage.',
};

export default function ExperiencePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="border-b border-charcoal-800 pb-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono tracking-widest text-lime-400 uppercase">
            // Chronological Work Record
          </span>
          <a
            href={PERSONAL_INFO.cvPath}
            download={PERSONAL_INFO.cvFileName}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-charcoal-900 border border-charcoal-700 text-xs font-mono text-sand-50 hover:text-lime-400"
          >
            <FileDown className="w-3.5 h-3.5 text-lime-400" />
            <span>Download Official CV (PDF)</span>
          </a>
        </div>

        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-sand-50 tracking-tight">
          Professional Experience
        </h1>
        <p className="text-base sm:text-lg text-charcoal-300 max-w-3xl leading-relaxed">
          Over thirteen years of focused full-stack software development, custom CMS engineering, and UI/UX design across high-velocity teams.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-charcoal-800 pl-6 sm:pl-10 ml-3 sm:ml-6 space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <article key={idx} className="relative group">
            
            {/* Timeline Dot */}
            <div
              className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 ${
                exp.isCurrent
                  ? 'bg-lime-400 border-lime-400 shadow-lime-glow animate-pulse'
                  : 'bg-charcoal-900 border-charcoal-700'
              }`}
            />

            <div className="bg-charcoal-900 border border-charcoal-800 hover:border-charcoal-700 rounded-2xl p-6 sm:p-8 space-y-5 transition-all shadow-editorial">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-1">
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-sand-50">
                    {exp.role}
                  </h2>
                  <p className="text-base font-mono text-lime-400 font-semibold">
                    {exp.company}
                  </p>
                  <p className="text-xs font-mono text-charcoal-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-charcoal-300 px-3 py-1 rounded-full bg-charcoal-950 border border-charcoal-800 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-lime-400" />
                    <span>{exp.period}</span>
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase text-charcoal-400 tracking-wider">
                  Key Scope & Deliverables:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-charcoal-300">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5">
                      <span className="text-lime-400 font-mono mt-0.5">▹</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Achievements from CV */}
              {exp.achievements && (
                <div className="pt-4 border-t border-charcoal-800 space-y-2.5">
                  <p className="text-[11px] font-mono uppercase text-charcoal-400 tracking-wider">
                    Documented CV Achievements:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-lime-300">
                    {exp.achievements.map((ach, aIdx) => (
                      <div
                        key={aIdx}
                        className="flex items-start gap-2 p-3 rounded-xl bg-charcoal-950 border border-charcoal-800"
                      >
                        <TrendingUp className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}

