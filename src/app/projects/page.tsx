import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, Code2 as Github, CheckCircle2, ArrowRight, Sparkles, Layers } from 'lucide-react';
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
      <div className="border-b border-canvas-border pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-soft border border-canvas-border text-xs font-mono font-medium text-forest-800">
          <Sparkles className="w-3.5 h-3.5 text-forest-700" />
          <span>Software Engineering Catalog</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-ink-primary tracking-tight">
          Independent Software Projects
        </h1>
        <p className="text-base sm:text-lg text-ink-secondary max-w-3xl leading-relaxed">
          A collection of nine distinct products built with modern full-stack architectures. Each project features its own visual identity, data isolation, and deployment lifecycle.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-10">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className="group bg-canvas-pure border border-canvas-border hover:border-forest-300 rounded-3xl p-6 sm:p-10 transition-all shadow-elevated"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Main Content */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs font-bold text-forest-900 px-3 py-1 rounded-full bg-canvas-soft border border-canvas-border">
                    PROJECT {project.number}
                  </span>
                  <span
                    className={`text-[11px] font-mono px-3 py-1 rounded-full font-bold uppercase tracking-wider ${
                      project.status === 'Live'
                        ? 'bg-accent-moss/30 text-forest-950 border border-forest-600/30'
                        : project.status === 'Development'
                        ? 'bg-pastel-peach text-amber-950 border border-amber-300'
                        : 'bg-canvas-soft text-ink-secondary border border-canvas-border'
                    }`}
                  >
                    ● {project.status}
                  </span>
                  <span className="text-xs font-mono text-ink-secondary">
                    {project.category}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-4xl font-display font-bold text-ink-primary group-hover:text-forest-700 transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h2>
                  <p className="text-sm font-mono text-forest-700 font-medium mt-1">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2.5">
                  <p className="text-xs font-mono uppercase text-forest-800 tracking-wider font-semibold">
                    Core Capabilities & Specs:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-ink-secondary">
                    {project.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-forest-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-canvas-soft border border-canvas-border text-[11px] font-mono font-medium text-ink-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-canvas-soft hover:bg-canvas text-ink-primary border border-canvas-border font-mono text-xs font-semibold transition-all shadow-sm"
                  >
                    <span>Detailed Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 text-forest-700" />
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-forest-900 hover:bg-forest-800 text-white font-bold text-xs transition-all shadow-md"
                    >
                      <span>Live Deployment</span>
                      <ExternalLink className="w-3.5 h-3.5 text-accent-moss" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-canvas-pure hover:bg-canvas-soft text-ink-secondary hover:text-ink-primary border border-canvas-border text-xs font-mono font-medium transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Sidebar Metrics */}
              <div className="lg:col-span-4 bg-canvas-soft border border-canvas-border rounded-2xl p-6 space-y-4">
                <p className="text-xs font-mono text-forest-800 uppercase tracking-wider font-semibold">
                  Platform Snapshot
                </p>
                <div className="space-y-2.5">
                  {project.metrics?.map((m, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-canvas-pure border border-canvas-border text-xs font-mono"
                    >
                      <span className="text-ink-secondary">{m.label}</span>
                      <span className="text-ink-primary font-bold">{m.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[11px] text-ink-secondary font-mono leading-relaxed border-t border-canvas-border">
                  {project.status === 'Live' && 'Verified functional production deployment.'}
                  {project.status === 'Development' && 'Core architecture and APIs verified under active iteration.'}
                  {project.status === 'Planned' && 'Documented system design and planned roadmap.'}
                </div>
              </div>

            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
