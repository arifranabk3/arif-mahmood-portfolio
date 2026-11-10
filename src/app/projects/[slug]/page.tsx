import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Code2 as Github, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROJECTS } from '@/data/portfolioData';

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — Detailed Engineering Case Study`,
    description: project.description,
  };
}

export default function ProjectCaseStudyPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-14">
      
      {/* Back Link */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-ink-secondary hover:text-ink-forest transition-colors font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Case Study Header */}
      <header className="space-y-6 border-b border-surface-border pb-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs font-bold text-ink-forest px-3 py-1 rounded-full bg-surface-soft border border-surface-border">
            PROJECT {project.number}
          </span>
          <span
            className={`text-xs font-mono px-3 py-0.5 rounded-full font-bold uppercase tracking-wider ${
              project.status === 'Live'
                ? 'bg-emerald-100 text-emerald-950 border border-emerald-300'
                : project.status === 'Development'
                ? 'bg-amber-100 text-amber-950 border border-amber-300'
                : 'bg-surface-soft text-ink-secondary border border-surface-border'
            }`}
          >
            ● {project.status} Status
          </span>
          <span className="text-xs font-mono text-ink-secondary">
            {project.category}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-ink-primary tracking-tight leading-[1.08]">
          {project.title}
        </h1>

        <p className="text-xl sm:text-2xl font-mono text-ink-forest font-semibold">
          {project.tagline}
        </p>

        <p className="text-base sm:text-lg text-ink-secondary max-w-3xl leading-relaxed">
          {project.description}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-surface-forest hover:bg-surface-forestDark text-surface-pure font-bold text-xs tracking-tight transition-all shadow-md hover:scale-[1.02]"
            >
              <span>View Live Deployment</span>
              <ExternalLink className="w-4 h-4 text-accent-lime" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-surface-pure hover:bg-surface-soft text-ink-primary border border-surface-border text-xs font-mono font-bold transition-all shadow-sm"
            >
              <Github className="w-4 h-4 text-ink-forest" />
              <span>Explore GitHub Repository</span>
            </a>
          )}
        </div>
      </header>

      {/* Challenge vs Solution Bento: Muted Peach vs Deep Forest Green */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-accent-peach border border-accent-peachBorder rounded-3xl p-6 sm:p-8 space-y-3.5 shadow-soft">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-950 uppercase tracking-wider font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
            <span>The Challenge</span>
          </div>
          <p className="text-sm sm:text-base text-ink-primary leading-relaxed font-normal">
            {project.challenge}
          </p>
        </div>

        <div className="bg-surface-forest border border-surface-borderDark text-surface-pure rounded-3xl p-6 sm:p-8 space-y-3.5 shadow-darkCard">
          <div className="flex items-center gap-2 text-xs font-mono text-accent-lime uppercase tracking-wider font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-lime" />
            <span>The Engineering Solution</span>
          </div>
          <p className="text-sm sm:text-base text-surface-pure leading-relaxed font-normal">
            {project.solution}
          </p>
        </div>
      </section>

      {/* Architectural Decisions: Deep Charcoal Block */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold text-ink-forest uppercase tracking-widest">
            // Architecture & Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-ink-primary tracking-tight">
            Architectural Decisions
          </h2>
        </div>
        <div className="bg-surface-charcoal border border-surface-borderCharcoal text-surface-pure rounded-3xl p-6 sm:p-8 space-y-4 shadow-darkCard">
          {project.architecture.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3.5 text-sm sm:text-base text-ink-onDarkMuted">
              <span className="font-mono text-accent-lime font-bold mt-0.5">0{idx + 1}.</span>
              <span className="leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Breakdown */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold text-ink-forest uppercase tracking-widest">
            // Functional Scope
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-ink-primary tracking-tight">
            Verified Feature Set
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {project.features.map((feat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-surface-pure border border-surface-border flex items-start gap-3 text-xs sm:text-sm text-ink-secondary shadow-soft"
            >
              <CheckCircle2 className="w-4 h-4 text-accent-forest flex-shrink-0 mt-0.5" />
              <span className="leading-snug text-ink-primary font-medium">{feat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Matrix */}
      <section className="space-y-6 border-t border-surface-border pt-10">
        <h2 className="text-xl font-display font-bold text-ink-primary">
          Technologies Utilized
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 rounded-xl bg-surface-soft border border-surface-border font-mono text-xs text-ink-primary font-bold"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Navigation Footer */}
      <nav className="border-t border-surface-border pt-10 flex items-center justify-between">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-ink-secondary hover:text-ink-primary font-bold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Case Studies</span>
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-forest hover:underline font-bold"
        >
          <span>Discuss Similar Architecture</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </nav>

    </article>
  );
}
