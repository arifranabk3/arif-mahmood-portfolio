import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Code2 as Github, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
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
          className="inline-flex items-center gap-2 text-xs font-mono text-ink-secondary hover:text-forest-700 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Case Study Header */}
      <header className="space-y-6 border-b border-canvas-border pb-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs font-bold text-forest-900 px-3 py-1 rounded-full bg-canvas-soft border border-canvas-border">
            PROJECT {project.number}
          </span>
          <span
            className={`text-xs font-mono px-3 py-0.5 rounded-full font-bold uppercase tracking-wider ${
              project.status === 'Live'
                ? 'bg-accent-moss/30 text-forest-950 border border-forest-600/30'
                : project.status === 'Development'
                ? 'bg-pastel-peach text-amber-950 border border-amber-300'
                : 'bg-canvas-soft text-ink-secondary border border-canvas-border'
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

        <p className="text-xl sm:text-2xl font-mono text-forest-700 font-medium">
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
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-forest-900 hover:bg-forest-800 text-white font-bold text-xs tracking-tight transition-all shadow-md"
            >
              <span>View Live Deployment</span>
              <ExternalLink className="w-4 h-4 text-accent-moss" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-canvas-pure hover:bg-canvas-soft text-ink-primary border border-canvas-border text-xs font-mono font-medium transition-all shadow-sm"
            >
              <Github className="w-4 h-4 text-forest-700" />
              <span>Explore GitHub Repository</span>
            </a>
          )}
        </div>
      </header>

      {/* Challenge vs Solution Bento */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-pastel-peach/30 border border-amber-200/80 rounded-3xl p-6 sm:p-8 space-y-3.5 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-950 uppercase tracking-wider font-bold">
            <span className="w-2 h-2 rounded-full bg-amber-600" />
            <span>The Challenge</span>
          </div>
          <p className="text-sm sm:text-base text-ink-primary leading-relaxed">
            {project.challenge}
          </p>
        </div>

        <div className="bg-accent-moss/20 border border-forest-300/80 rounded-3xl p-6 sm:p-8 space-y-3.5 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-mono text-forest-950 uppercase tracking-wider font-bold">
            <span className="w-2 h-2 rounded-full bg-forest-600" />
            <span>The Engineering Solution</span>
          </div>
          <p className="text-sm sm:text-base text-ink-primary leading-relaxed">
            {project.solution}
          </p>
        </div>
      </section>

      {/* Architectural Decisions */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-mono font-medium text-forest-700 uppercase tracking-widest">
            // Architecture & Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-ink-primary tracking-tight">
            Architectural Decisions
          </h2>
        </div>
        <div className="bg-canvas-pure border border-canvas-border rounded-3xl p-6 sm:p-8 space-y-4 shadow-elevated">
          {project.architecture.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3.5 text-sm sm:text-base text-ink-secondary">
              <span className="font-mono text-forest-700 font-bold mt-0.5">0{idx + 1}.</span>
              <span className="leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Breakdown */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-mono font-medium text-forest-700 uppercase tracking-widest">
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
              className="p-4 rounded-2xl bg-canvas-pure border border-canvas-border flex items-start gap-3 text-xs sm:text-sm text-ink-secondary shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-forest-600 flex-shrink-0 mt-0.5" />
              <span className="leading-snug">{feat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Matrix */}
      <section className="space-y-6 border-t border-canvas-border pt-10">
        <h2 className="text-xl font-display font-bold text-ink-primary">
          Technologies Utilized
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 rounded-xl bg-canvas-soft border border-canvas-border font-mono text-xs text-ink-primary font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Navigation Footer */}
      <nav className="border-t border-canvas-border pt-10 flex items-center justify-between">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-ink-secondary hover:text-ink-primary font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Case Studies</span>
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-forest-700 hover:text-forest-900 font-bold"
        >
          <span>Discuss Similar Architecture</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </nav>

    </article>
  );
}
