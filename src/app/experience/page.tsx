import type { Metadata } from 'next';
import { TrendingUp, MapPin, Calendar, CheckCircle2, FileDown, Sparkles, Building2 } from 'lucide-react';
import { EXPERIENCES, PERSONAL_INFO } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: 'Professional Experience & Career History — Arif Mahmood',
  description:
    '13+ years professional timeline of Arif Mahmood across Zam Solutions, Spearhead Technology, Irtifa Group, and Global Technology Coverage.',
};

export default function ExperiencePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Header Section */}
      <div className="border-b border-canvas-border pb-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-soft border border-canvas-border text-xs font-mono font-medium text-forest-800">
            <Sparkles className="w-3.5 h-3.5 text-forest-700" />
            <span>Chronological Career Record</span>
          </div>
          <a
            href={PERSONAL_INFO.cvPath}
            download={PERSONAL_INFO.cvFileName}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-canvas-pure hover:bg-canvas-soft border border-canvas-border text-xs font-mono text-ink-primary font-semibold transition-all shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5 text-forest-700" />
            <span>Download Official CV (PDF)</span>
          </a>
        </div>

        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-ink-primary tracking-tight">
          Professional Experience
        </h1>
        <p className="text-base sm:text-lg text-ink-secondary max-w-3xl leading-relaxed">
          Over thirteen years of focused full-stack software development, custom CMS engineering, and UI/UX design across high-velocity teams and production environments.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative border-l-2 border-forest-200/80 pl-6 sm:pl-10 ml-3 sm:ml-6 space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <article key={idx} className="relative group">
            
            {/* Timeline Dot */}
            <div
              className={`absolute -left-[33px] sm:-left-[49px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                exp.isCurrent
                  ? 'bg-accent-moss border-forest-900 shadow-sm'
                  : 'bg-canvas-pure border-forest-400'
              }`}
            />

            <div className="bg-canvas-pure border border-canvas-border hover:border-forest-300 rounded-3xl p-6 sm:p-8 space-y-6 transition-all shadow-elevated">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-ink-primary">
                      {exp.role}
                    </h2>
                    {exp.isCurrent && (
                      <span className="px-2.5 py-0.5 rounded-full bg-accent-moss/30 border border-forest-600/30 text-forest-900 text-xs font-mono font-bold">
                        Current Role
                      </span>
                    )}
                  </div>
                  <p className="text-base font-mono text-forest-700 font-semibold flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-forest-600" />
                    <span>{exp.company}</span>
                  </p>
                  <p className="text-xs font-mono text-ink-secondary flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-forest-600" />
                    <span>{exp.location}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-ink-secondary px-3 py-1.5 rounded-full bg-canvas-soft border border-canvas-border flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-forest-700" />
                    <span>{exp.period}</span>
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2.5">
                <p className="text-xs font-mono uppercase text-forest-800 tracking-wider font-semibold">
                  Key Scope & Deliverables:
                </p>
                <ul className="space-y-2 text-sm text-ink-secondary">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5">
                      <span className="text-forest-600 font-bold mt-0.5">▹</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Achievements from CV */}
              {exp.achievements && exp.achievements.length > 0 && (
                <div className="pt-4 border-t border-canvas-border space-y-3">
                  <p className="text-[11px] font-mono uppercase text-forest-800 tracking-wider font-semibold">
                    Documented Career Achievements:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    {exp.achievements.map((ach, aIdx) => (
                      <div
                        key={aIdx}
                        className="flex items-start gap-2.5 p-3 rounded-2xl bg-canvas-soft border border-canvas-border text-ink-primary font-medium"
                      >
                        <TrendingUp className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{ach}</span>
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
