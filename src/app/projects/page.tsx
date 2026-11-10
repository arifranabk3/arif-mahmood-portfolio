import type { Metadata } from 'next';
import Link from 'next/link';
import { FileDown, ExternalLink, Code2 as Github, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: 'Projects & Case Studies',
  description:
    'Eight independent software engineering projects spanning automotive marketplaces, multi-tenant e-commerce platforms, applicant tracking systems, and developer tools.',
};

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="border-b border-charcoal-800 pb-8 space-y-4">
        <span className="text-xs font-mono tracking-widest text-lime-400 uppercase">
          // Software Engineering Catalog
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-sand-50 tracking-tight">
          Independent Software Projects
        </h1>
        <p className="text-base sm:text-lg text-charcoal-300 max-w-3xl leading-relaxed">
          A collection of eight distinct products built with modern full-stack architectures. Each project features its own visual identity, data isolation, and deployment lifecycle.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className="group bg-charcoal-900 border border-charcoal-800 hover:border-charcoal-700 rounded-3xl p-6 sm:p-10 transition-all shadow-editorial"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Main Content */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs font-bold text-lime-400 px-2.5 py-1 rounded bg-charcoal-950 border border-charcoal-800">
                    PROJECT {project.number}
                  </span>
                  <span
                    className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider ${
                      project.status === 'Live'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                        : project.status === 'Development'
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                        : 'bg-charcoal-800 text-charcoal-400 border border-charcoal-700'
                    }`}
                  >
                    ● {project.status}
                  </span>
                  <span className="text-xs font-mono text-charcoal-400">
                    {project.category}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-4xl font-display font-bold text-sand-50 group-hover:text-lime-400 transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h2>
                  <p className="text-sm font-mono text-charcoal-400 mt-1">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-charcoal-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <p className="text-xs font-mono uppercase text-charcoal-400 tracking-wider">
                    Core Capabilities & Specs:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal-300">
                    {project.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-charcoal-950 border border-charcoal-800 text-[11px] font-mono text-charcoal-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-sand-50 font-mono text-xs font-medium transition-all"
                  >
                    <span>Detailed Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 text-lime-400" />
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-500 text-charcoal-950 font-bold text-xs transition-all shadow-lime-glow"
                    >
                      <span>Live Deployment</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-charcoal-950 hover:bg-charcoal-800 text-charcoal-300 hover:text-sand-50 border border-charcoal-800 text-xs font-mono transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Sidebar Metrics */}
              <div className="lg:col-span-4 bg-charcoal-950 border border-charcoal-800 rounded-2xl p-6 space-y-4">
                <p className="text-xs font-mono text-charcoal-400 uppercase tracking-wider">
                  Platform Snapshot
                </p>
                <div className="space-y-2.5">
                  {project.metrics?.map((m, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-charcoal-900 border border-charcoal-800 text-xs font-mono"
                    >
                      <span className="text-charcoal-400">{m.label}</span>
                      <span className="text-sand-50 font-semibold">{m.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[11px] text-charcoal-400 font-mono">
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
