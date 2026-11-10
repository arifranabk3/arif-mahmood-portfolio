import type { Metadata } from 'next';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Cpu, CheckCircle2, ShieldCheck, Terminal, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technical Skills & Architecture',
  description:
    'Full-stack engineering capabilities, CMS frameworks, UI/UX tools, and AI workflows mastered by Arif Mahmood.',
};

export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="border-b border-charcoal-800 pb-8 space-y-4">
        <span className="text-xs font-mono tracking-widest text-lime-400 uppercase">
          // Technical Stack & Ecosystem
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-sand-50 tracking-tight">
          Technical Skills & Architecture
        </h1>
        <p className="text-base sm:text-lg text-charcoal-300 max-w-3xl leading-relaxed">
          Categorized overview of frontend, backend, CMS, and AI workflows actively utilized in production environments. Grounded in actual CV skills without fabricated proficiency percentages.
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <section
            key={idx}
            className="bg-charcoal-900 border border-charcoal-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-editorial"
          >
            <div className="space-y-1.5 border-b border-charcoal-800 pb-4">
              <span className="text-xs font-mono text-lime-400 font-bold uppercase tracking-wider">
                CATEGORY 0{idx + 1}
              </span>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-sand-50">
                {cat.category}
              </h2>
              <p className="text-xs text-charcoal-400 leading-relaxed">
                {cat.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                    skill.highlight
                      ? 'bg-charcoal-950 text-lime-400 border border-lime-400/40 shadow-sm'
                      : 'bg-charcoal-950/70 text-charcoal-300 border border-charcoal-800'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${skill.highlight ? 'bg-lime-400' : 'bg-charcoal-500'}`} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Engineering Philosophy Notice */}
      <div className="bg-charcoal-900/60 border border-charcoal-800 rounded-2xl p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-display font-bold text-sand-50 flex items-center gap-2">
          <Terminal className="w-4 h-4 text-lime-400" />
          <span>Core Engineering Philosophy</span>
        </h3>
        <p className="text-sm text-charcoal-300 leading-relaxed">
          Technology choices are driven by business requirements, performance criteria, and long-term maintainability. Rather than chasing every passing trend, solutions prioritize battle-tested architectures: Next.js and TypeScript for reactive client applications, Laravel and Node.js for robust APIs, and customized WordPress engines for seamless content authoring.
        </p>
      </div>

    </div>
  );
}

