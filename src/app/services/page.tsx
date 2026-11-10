import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles, Layers, Cpu, Code2, Globe2 } from 'lucide-react';
import { SERVICES } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: 'Services & Engineering Capabilities — Arif Mahmood',
  description:
    'Full-stack web application development, custom WordPress & plugin engineering, headless CMS architecture, and performance optimization services by Arif Mahmood.',
};

export default function ServicesPage() {
  const serviceIcons = [Code2, Layers, Globe2, Cpu];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Header Section */}
      <div className="border-b border-canvas-border pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-soft border border-canvas-border text-xs font-mono font-medium text-forest-800">
          <Sparkles className="w-3.5 h-3.5 text-forest-700" />
          <span>Professional Engagement Models</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-ink-primary tracking-tight">
          Services & Capabilities
        </h1>
        <p className="text-base sm:text-lg text-ink-secondary max-w-3xl leading-relaxed">
          High-precision development services for international remote engineering teams, fast-growing software companies, and bespoke digital clients.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((srv, idx) => {
          const Icon = serviceIcons[idx % serviceIcons.length];
          return (
            <section
              key={idx}
              className="bg-canvas-pure border border-canvas-border hover:border-forest-300 rounded-3xl p-6 sm:p-8 space-y-6 transition-all shadow-elevated flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-canvas-soft border border-canvas-border flex items-center justify-center text-forest-900 font-mono text-sm font-bold">
                    0{idx + 1}
                  </div>
                  <div className="p-2.5 rounded-2xl bg-forest-900 text-accent-moss">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-display font-bold text-ink-primary">
                  {srv.title}
                </h2>

                <p className="text-sm text-ink-secondary leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="pt-4 border-t border-canvas-border space-y-4">
                <div className="flex flex-wrap gap-2">
                  {srv.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg bg-canvas-soft border border-canvas-border text-ink-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-forest-700 hover:text-forest-900 font-bold"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>
          );
        })}
      </div>

    </div>
  );
}
