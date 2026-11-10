import type { Metadata } from 'next';
import { TrendingUp, MapPin, Calendar, FileDown, Sparkles, Building2 } from 'lucide-react';
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
      <div className="border-b border-surface-border pb-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-soft border border-surface-border text-xs font-mono font-medium text-ink-forest font-bold">
            <Sparkles className="w-3.5 h-3.5 text-accent-forest" />
            <span>Chronological Career Record</span>
          </div>
          <a
            href={PERSONAL_INFO.cvPath}
            download={PERSONAL_INFO.cvFileName}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-pure hover:bg-surface-soft border border-surface-border text-xs font-mono text-ink-primary font-bold transition-all shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5 text-accent-forest" />
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
      <div className="relative border-l-2 border-surface-forest/40 pl-6 sm:pl-10 ml-3 sm:ml-6 space-y-12">
        {EXPERIENCES.map((exp, idx) => {
          const isCurrent = exp.isCurrent;

          return (
            <article key={idx} className="relative group">
              
              {/* Timeline Dot */}
              <div
                className={`absolute -left-[33px] sm:-left-[49px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                  isCurrent
                    ? 'bg-accent-lime border-surface-forest shadow-limeGlow animate-pulse'
                    : 'bg-surface-pure border-surface-forest'
                }`}
              />

              <div className={`rounded-3xl p-6 sm:p-8 space-y-6 transition-all border ${
                isCurrent
                  ? 'bg-surface-forest border-surface-borderDark text-surface-pure shadow-darkCard'
                  : 'bg-surface-pure border-surface-border text-ink-primary shadow-card hover:shadow-elevated'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className={`text-xl sm:text-2xl font-display font-bold ${
                        isCurrent ? 'text-surface-pure' : 'text-ink-primary'
                      }`}>
                        {exp.role}
                      </h2>
                      {isCurrent && (
                        <span className="px-3 py-0.5 rounded-full bg-accent-lime/20 border border-accent-lime/40 text-accent-lime text-xs font-mono font-bold">
                          Current Leadership Role
                        </span>
                      )}
                    </div>
                    <p className={`text-base font-mono font-bold flex items-center gap-2 ${
                      isCurrent ? 'text-accent-lime' : 'text-ink-forest'
                    }`}>
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </p>
                    <p className={`text-xs font-mono flex items-center gap-1.5 ${
                      isCurrent ? 'text-ink-onDarkMuted' : 'text-ink-secondary'
                    }`}>
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-mono px-3.5 py-1.5 rounded-full border flex items-center gap-1.5 font-medium ${
                      isCurrent 
                        ? 'bg-surface-forestDark border-surface-borderDark text-surface-pure' 
                        : 'bg-surface-soft border-surface-border text-ink-secondary'
                    }`}>
                      <Calendar className="w-3.5 h-3.5 text-accent-forest" />
                      <span>{exp.period}</span>
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-2.5">
                  <p className={`text-xs font-mono uppercase tracking-wider font-semibold ${
                    isCurrent ? 'text-accent-lime' : 'text-ink-primary'
                  }`}>
                    Key Scope & Deliverables:
                  </p>
                  <ul className={`space-y-2 text-sm ${
                    isCurrent ? 'text-ink-onDarkMuted' : 'text-ink-secondary'
                  }`}>
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <span className={`font-bold mt-0.5 ${
                          isCurrent ? 'text-accent-lime' : 'text-accent-forest'
                        }`}>▹</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Verified Achievements from CV */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className={`pt-4 border-t space-y-3 ${
                    isCurrent ? 'border-surface-borderDark' : 'border-surface-border'
                  }`}>
                    <p className={`text-[11px] font-mono uppercase tracking-wider font-semibold ${
                      isCurrent ? 'text-accent-lime' : 'text-ink-primary'
                    }`}>
                      Documented Career Achievements:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                      {exp.achievements.map((ach, aIdx) => (
                        <div
                          key={aIdx}
                          className={`flex items-start gap-2.5 p-3 rounded-2xl border font-medium ${
                            isCurrent
                              ? 'bg-surface-charcoal border-surface-borderCharcoal text-surface-pure'
                              : 'bg-surface-soft border-surface-border text-ink-primary'
                          }`}
                        >
                          <TrendingUp className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            isCurrent ? 'text-accent-lime' : 'text-accent-forest'
                          }`} />
                          <span className="leading-relaxed">{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

    </div>
  );
}
