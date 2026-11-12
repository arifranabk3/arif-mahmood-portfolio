import type { Metadata } from 'next';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Terminal, Sparkles, Layers, Cpu, Code2, Globe2, ShieldCheck, GitBranch } from 'lucide-react';
import ServicesTechShowcase from '@/components/ServicesTechShowcase';

export const metadata: Metadata = {
  title: 'Technical Skills & Architecture — Arif Mahmood',
  description:
    'Full-stack engineering capabilities, CMS frameworks, UI/UX tools, and AI workflows mastered by Arif Mahmood over 13+ years.',
};

export default function SkillsPage() {
  const categoryIcons = [Layers, Cpu, Terminal, GitBranch, ShieldCheck, Sparkles];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Header Section */}
      <div className="border-b border-surface-border pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-soft border border-surface-border text-xs font-mono font-medium text-ink-forest font-bold">
          <Sparkles className="w-3.5 h-3.5 text-accent-forest" />
          <span>Technical Stack & Ecosystem</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-ink-primary tracking-tight">
          Technical Skills & Architecture
        </h1>
        <p className="text-base sm:text-lg text-ink-secondary max-w-3xl leading-relaxed">
          Categorized overview of frontend, backend, CMS, and AI workflows actively utilized in production environments. Grounded strictly in verified CV experience without fabricated proficiency percentages.
        </p>
      </div>

      {/* Visual Services & Tech Stack Banner */}
      <ServicesTechShowcase />

      {/* Grid of Skill Categories: Balanced 4 Light / 2 Deep Contrast Rhythm */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((cat, idx) => {
          const isDark = idx === 0 || idx === 3; // Strategic visual anchor cards
          const Icon = categoryIcons[idx % categoryIcons.length];

          return (
            <section
              key={idx}
              className={`rounded-3xl p-6 sm:p-8 space-y-6 transition-all border ${
                isDark
                  ? 'bg-surface-forest border-surface-borderDark text-surface-pure shadow-darkCard'
                  : 'bg-surface-pure border-surface-border text-ink-primary shadow-card hover:shadow-elevated'
              }`}
            >
              <div className={`flex items-start justify-between gap-3 border-b pb-4 ${
                isDark ? 'border-surface-borderDark' : 'border-surface-border'
              }`}>
                <div className="space-y-1">
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider ${
                    isDark ? 'text-accent-lime' : 'text-ink-forest'
                  }`}>
                    CATEGORY 0{idx + 1}
                  </span>
                  <h2 className={`text-xl sm:text-2xl font-display font-bold ${
                    isDark ? 'text-surface-pure' : 'text-ink-primary'
                  }`}>
                    {cat.category}
                  </h2>
                  <p className={`text-xs leading-relaxed ${
                    isDark ? 'text-ink-onDarkMuted' : 'text-ink-secondary'
                  }`}>
                    {cat.tagline}
                  </p>
                </div>
                <div className={`p-2.5 rounded-2xl border ${
                  isDark 
                    ? 'bg-surface-forestDark border-accent-lime/40 text-accent-lime' 
                    : 'bg-surface-soft border-surface-border text-accent-forest'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                      skill.highlight
                        ? isDark
                          ? 'bg-accent-lime text-surface-forest font-bold shadow-sm'
                          : 'bg-surface-forest text-surface-pure font-bold shadow-sm'
                        : isDark
                          ? 'bg-surface-forestDark border border-surface-borderDark text-ink-onDarkMuted'
                          : 'bg-surface-soft text-ink-primary border border-surface-border'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        skill.highlight 
                          ? isDark ? 'bg-surface-forest' : 'bg-accent-lime'
                          : isDark ? 'bg-accent-lime/60' : 'bg-ink-forest'
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

      {/* Engineering Philosophy Notice: Deep Charcoal Contrast Block */}
      <div className="bg-surface-charcoal border border-surface-borderCharcoal text-surface-pure rounded-3xl p-6 sm:p-8 space-y-4 shadow-darkCard">
        <h3 className="text-lg font-display font-bold text-surface-pure flex items-center gap-2.5">
          <Terminal className="w-5 h-5 text-accent-lime" />
          <span>Core Engineering Philosophy</span>
        </h3>
        <p className="text-sm sm:text-base text-ink-onDarkMuted leading-relaxed">
          Technology choices are driven by business requirements, performance criteria, and long-term maintainability. Rather than chasing fleeting framework trends, solutions prioritize battle-tested architectures: Next.js and TypeScript for reactive client applications, Laravel and Node.js for robust APIs, and customized WordPress engines for seamless content authoring.
        </p>
      </div>

    </div>
  );
}
