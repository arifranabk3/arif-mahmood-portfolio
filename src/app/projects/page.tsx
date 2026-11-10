import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, Code2 as Github, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { PROJECTS } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: 'Projects & Case Studies — Arif Mahmood',
  description:
    'Nine independent software engineering projects spanning autonomous AI systems, automotive marketplaces, multi-tenant e-commerce platforms, applicant tracking systems, and developer tools.',
};

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Header Section */}
      <div className="border-b border-surface-border pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-soft border border-surface-border text-xs font-mono font-medium text-ink-forest font-bold">
          <Sparkles className="w-3.5 h-3.5 text-accent-forest" />
          <span>Software Engineering Catalog</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-ink-primary tracking-tight">
          Independent Software Projects
        </h1>
        <p className="text-base sm:text-lg text-ink-secondary max-w-3xl leading-relaxed">
          A collection of nine distinct products built with modern full-stack architectures. Each project features its own visual identity, data isolation, and deployment lifecycle.
        </p>
      </div>

      {/* Projects List: Alternating Light & Dark Surfaces for Dynamic Visual Rhythms */}
      <div className="space-y-12">
        {PROJECTS.map((project, idx) => {
          const isDark = idx % 2 === 1;

          return (
            <article
              key={project.id}
              className={`group rounded-4xl p-6 sm:p-10 transition-all border ${
                isDark
                  ? 'bg-surface-charcoal border-surface-borderCharcoal text-surface-pure shadow-darkCard'
                  : 'bg-surface-pure border-surface-border text-ink-primary shadow-card hover:shadow-elevated'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Main Content */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`font-mono text-xs font-bold px-3 py-1 rounded-full border ${
                      isDark
                        ? 'bg-surface-forest text-accent-lime border-surface-borderDark'
                        : 'bg-surface-soft text-ink-forest border-surface-border'
                    }`}>
                      PROJECT {project.number}
                    </span>
                    <span
                      className={`text-[11px] font-mono px-3 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                        project.status === 'Live'
                          ? isDark
                            ? 'bg-accent-lime/20 text-accent-lime border border-accent-lime/40'
                            : 'bg-emerald-100 text-emerald-950 border border-emerald-300'
                          : project.status === 'Development'
                          ? isDark
                            ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                            : 'bg-amber-100 text-amber-950 border border-amber-300'
                          : isDark
                            ? 'bg-surface-charcoalDark text-ink-onDarkMuted border border-surface-borderCharcoal'
                            : 'bg-surface-soft text-ink-secondary border border-surface-border'
                      }`}
                    >
                      ● {project.status}
                    </span>
                    <span className={`text-xs font-mono ${isDark ? 'text-ink-onDarkMuted' : 'text-ink-secondary'}`}>
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h2 className={`text-2xl sm:text-4xl font-display font-bold transition-colors ${
                      isDark 
                        ? 'text-surface-pure group-hover:text-accent-lime' 
                        : 'text-ink-primary group-hover:text-ink-forest'
                    }`}>
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h2>
                    <p className={`text-sm font-mono mt-1 ${isDark ? 'text-accent-lime font-medium' : 'text-ink-forest font-semibold'}`}>
                      {project.tagline}
                    </p>
                  </div>

                  <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-ink-onDarkMuted' : 'text-ink-secondary'}`}>
                    {project.description}
                  </p>

                  <div className="space-y-2.5">
                    <p className={`text-xs font-mono uppercase tracking-wider font-semibold ${isDark ? 'text-surface-pure' : 'text-ink-primary'}`}>
                      Core Capabilities & Specs:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                      {project.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            isDark ? 'text-accent-lime' : 'text-accent-forest'
                          }`} />
                          <span className={`leading-snug ${isDark ? 'text-ink-onDarkMuted' : 'text-ink-secondary'}`}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium border ${
                          isDark
                            ? 'bg-surface-charcoalDark border-surface-borderCharcoal text-ink-onDarkMuted'
                            : 'bg-surface-soft border-surface-border text-ink-primary'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className={`inline-flex items-center gap-1.5 px-5 py-3 rounded-xl font-mono text-xs font-bold transition-all shadow-sm ${
                        isDark
                          ? 'bg-accent-lime hover:bg-accent-limeHover text-surface-forest'
                          : 'bg-surface-forest hover:bg-surface-forestDark text-surface-pure'
                      }`}
                    >
                      <span>Detailed Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 px-4 py-3 rounded-xl font-bold text-xs transition-all shadow-md ${
                          isDark
                            ? 'bg-surface-forest hover:bg-surface-forestDark text-surface-pure border border-surface-borderDark'
                            : 'bg-surface-soft hover:bg-surface-pure text-ink-primary border border-surface-border'
                        }`}
                      >
                        <span>Live Deployment</span>
                        <ExternalLink className={`w-3.5 h-3.5 ${isDark ? 'text-accent-lime' : 'text-accent-forest'}`} />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 px-3.5 py-3 rounded-xl border text-xs font-mono font-medium transition-all ${
                          isDark
                            ? 'bg-surface-charcoalDark border-surface-borderCharcoal text-ink-onDarkMuted hover:text-surface-pure'
                            : 'bg-surface-pure hover:bg-surface-soft text-ink-secondary hover:text-ink-primary border-surface-border'
                        }`}
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Repository</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Sidebar Metrics */}
                <div className={`lg:col-span-4 rounded-3xl p-6 space-y-4 border ${
                  isDark
                    ? 'bg-surface-charcoalDark border-surface-borderCharcoal text-surface-pure'
                    : 'bg-surface-soft border-surface-border text-ink-primary'
                }`}>
                  <p className={`text-xs font-mono uppercase tracking-wider font-bold ${
                    isDark ? 'text-accent-lime' : 'text-ink-forest'
                  }`}>
                    Platform Snapshot
                  </p>
                  <div className="space-y-2.5">
                    {project.metrics?.map((m, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-mono ${
                          isDark
                            ? 'bg-surface-charcoal border-surface-borderCharcoal'
                            : 'bg-surface-pure border-surface-border'
                        }`}
                      >
                        <span className={isDark ? 'text-ink-onDarkMuted' : 'text-ink-secondary'}>{m.label}</span>
                        <span className={`font-bold ${isDark ? 'text-surface-pure' : 'text-ink-primary'}`}>{m.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className={`pt-2 text-[11px] font-mono leading-relaxed border-t ${
                    isDark ? 'border-surface-borderCharcoal text-ink-onDarkMuted' : 'border-surface-border text-ink-secondary'
                  }`}>
                    {project.status === 'Live' && 'Verified functional production deployment.'}
                    {project.status === 'Development' && 'Core architecture and APIs verified under active iteration.'}
                    {project.status === 'Planned' && 'Documented system design and planned roadmap.'}
                  </div>
                </div>

              </div>
            </article>
          );
        })}
      </div>

    </div>
  );
}
