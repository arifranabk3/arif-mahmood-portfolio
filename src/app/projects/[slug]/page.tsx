import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Code2 as Github, CheckCircle2, Terminal, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { PROJECTS, ProjectItem } from '@/data/portfolioData';

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
    title: `${project.title} — Case Study`,
    description: project.description,
  };
}

export default function ProjectCaseStudyPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Back Link */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-charcoal-400 hover:text-lime-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Case Study Header */}
      <header className="space-y-6 border-b border-charcoal-800 pb-12">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs font-bold text-lime-400 px-3 py-1 rounded bg-charcoal-900 border border-charcoal-800">
            PROJECT {project.number}
          </span>
          <span
            className={`text-xs font-mono px-3 py-0.5 rounded-full font-semibold uppercase tracking-wider ${
              project.status === 'Live'
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                : project.status === 'Development'
                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                : 'bg-charcoal-800 text-charcoal-400 border border-charcoal-700'
            }`}
          >
            ● {project.status} Status
          </span>
          <span className="text-xs font-mono text-charcoal-400">
            {project.category}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-sand-50 tracking-tight leading-[1.08]">
          {project.title}
        </h1>

        <p className="text-xl sm:text-2xl font-mono text-lime-400 font-medium">
          {project.tagline}
        </p>

        <p className="text-base sm:text-lg text-charcoal-300 max-w-3xl leading-relaxed">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-lime-400 hover:bg-lime-500 text-charcoal-950 font-bold text-xs tracking-tight transition-all shadow-lime-glow"
            >
              <span>View Live Deployment</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-sand-50 border border-charcoal-700 text-xs font-mono transition-all"
            >
              <Github className="w-4 h-4 text-lime-400" />
              <span>Explore GitHub Repository</span>
            </a>
          )}
        </div>
      </header>

      {/* Challenge vs Solution */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-charcoal-900 border border-charcoal-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>The Challenge</span>
          </div>
          <p className="text-sm sm:text-base text-charcoal-300 leading-relaxed">
            {project.challenge}
          </p>
        </div>

        <div className="bg-charcoal-900 border border-charcoal-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-lime-400 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-lime-400" />
            <span>The Engineering Solution</span>
          </div>
          <p className="text-sm sm:text-base text-charcoal-300 leading-relaxed">
            {project.solution}
          </p>
        </div>
      </section>

      {/* Architectural Decisions */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-sand-50">
          Architectural Decisions
        </h2>
        <div className="bg-charcoal-900 border border-charcoal-800 rounded-2xl p-6 sm:p-8 space-y-3">
          {project.architecture.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm text-charcoal-300">
              <span className="font-mono text-lime-400 font-bold mt-0.5">0{idx + 1}.</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Breakdown */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-sand-50">
          Verified Feature Set
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.features.map((feat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-charcoal-900/60 border border-charcoal-800 flex items-start gap-3 text-xs sm:text-sm text-charcoal-300"
            >
              <CheckCircle2 className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Matrix */}
      <section className="space-y-6 border-t border-charcoal-800 pt-10">
        <h2 className="text-xl font-display font-bold text-sand-50">
          Technologies Utilized
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 rounded-xl bg-charcoal-900 border border-charcoal-700 font-mono text-xs text-lime-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Next Projects Navigation */}
      <nav className="border-t border-charcoal-800 pt-10 flex items-center justify-between">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-charcoal-400 hover:text-sand-50"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Case Studies</span>
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-lime-400 hover:text-lime-300 font-bold"
        >
          <span>Discuss Similar Project</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </nav>

    </article>
  );
}
