import type { Metadata } from 'next';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Cpu, Terminal, Sparkles, CheckCircle2, ShieldCheck, Layers, GitBranch } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technical Skills & Architecture — Arif Mahmood',
  description:
    'Full-stack engineering capabilities, CMS frameworks, UI/UX tools, and AI workflows mastered by Arif Mahmood over 13+ years.',
};

export default function SkillsPage() {
  const categoryPastels = [
    { badge: 'bg-pastel-lavender/60 text-indigo-950 border-indigo-200/60', icon: Layers },
    { badge: 'bg-pastel-peach/60 text-amber-950 border-amber-200/60', icon: Cpu },
    { badge: 'bg-accent-moss/30 text-forest-950 border-forest-300/60', icon: Terminal },
    { badge: 'bg-canvas-soft text-forest-900 border-canvas-border', icon: GitBranch },
    { badge: 'bg-pastel-lavender/40 text-indigo-950 border-indigo-200/50', icon: ShieldCheck },
    { badge: 'bg-pastel-peach/40 text-amber-950 border-amber-200/50', icon: Sparkles },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Header Section */}
      <div className="border-b border-canvas-border pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-soft border border-canvas-border text-xs font-mono font-medium text-forest-800">
          <Sparkles className="w-3.5 h-3.5 text-forest-700" />
          <span>Technical Stack & Ecosystem</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-ink-primary tracking-tight">
          Technical Skills & Architecture
        </h1>
        <p className="text-base sm:text-lg text-ink-secondary max-w-3xl leading-relaxed">
          Categorized overview of frontend, backend, CMS, and AI workflows actively utilized in production environments. Grounded strictly in verified CV experience without fabricated proficiency percentages.
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((cat, idx) => {
          const style = categoryPastels[idx % categoryPastels.length];
          const Icon = style.icon;
          return (
            <section
              key={idx}
              className="bg-canvas-pure border border-canvas-border hover:border-forest-300 rounded-3xl p-6 sm:p-8 space-y-6 shadow-elevated transition-all"
            >
              <div className="flex items-start justify-between gap-3 border-b border-canvas-border pb-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-forest-700 font-bold uppercase tracking-wider">
                    CATEGORY 0{idx + 1}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-ink-primary">
                    {cat.category}
                  </h2>
                  <p className="text-xs text-ink-secondary leading-relaxed">
                    {cat.tagline}
                  </p>
                </div>
                <div className={`p-2.5 rounded-2xl border ${style.badge}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                      skill.highlight
                        ? 'bg-forest-900 text-white shadow-sm'
                        : 'bg-canvas-soft text-ink-primary border border-canvas-border hover:bg-canvas'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        skill.highlight ? 'bg-accent-moss' : 'bg-forest-500'
                      }`}
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Engineering Philosophy Notice */}
      <div className="bg-canvas-soft border border-canvas-border rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-display font-bold text-ink-primary flex items-center gap-2.5">
          <Terminal className="w-5 h-5 text-forest-700" />
          <span>Core Engineering Philosophy</span>
        </h3>
        <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
          Technology choices are driven by business requirements, performance criteria, and long-term maintainability. Rather than chasing fleeting framework trends, solutions prioritize battle-tested architectures: Next.js and TypeScript for reactive client applications, Laravel and Node.js for robust APIs, and customized WordPress engines for seamless content authoring.
        </p>
      </div>

    </div>
  );
}
