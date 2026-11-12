import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles, Layers, Cpu, Code2, Globe2 } from 'lucide-react';
import { SERVICES } from '@/data/portfolioData';
import ServicesTechShowcase from '@/components/ServicesTechShowcase';

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
      <div className="border-b border-surface-border pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-soft border border-surface-border text-xs font-mono font-medium text-ink-forest font-bold">
          <Sparkles className="w-3.5 h-3.5 text-accent-forest" />
          <span>Professional Engagement Models</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-ink-primary tracking-tight">
          Services & Capabilities
        </h1>
        <p className="text-base sm:text-lg text-ink-secondary max-w-3xl leading-relaxed">
          High-precision development services for international remote engineering teams, fast-growing software companies, and bespoke digital clients.
        </p>
      </div>

      {/* Interactive Services & Technologies Visual Showcase */}
      <ServicesTechShowcase />

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((srv, idx) => {
          const Icon = serviceIcons[idx % serviceIcons.length];
          const isDark = idx === 1; // Subtle 1-in-4 contrast anchor

          return (
            <section
              key={idx}
              className={`rounded-4xl p-6 sm:p-8 space-y-6 transition-all border flex flex-col justify-between ${
                isDark
                  ? 'bg-surface-forest border-surface-borderDark text-surface-pure shadow-darkCard'
                  : 'bg-surface-pure border-surface-border text-ink-primary shadow-card hover:shadow-elevated'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono text-sm font-bold border ${
                    isDark
                      ? 'bg-surface-forestDark border-surface-borderDark text-accent-lime'
                      : 'bg-surface-forest border-surface-forestDark text-accent-lime'
                  }`}>
                    0{idx + 1}
                  </div>
                  <div className={`p-2.5 rounded-2xl border ${
                    isDark 
                      ? 'bg-surface-forestDark border-accent-lime/30 text-accent-lime' 
                      : 'bg-surface-soft border-surface-border text-accent-forest'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h2 className={`text-xl sm:text-2xl font-display font-bold ${
                  isDark ? 'text-surface-pure' : 'text-ink-primary'
                }`}>
                  {srv.title}
                </h2>

                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-ink-onDarkMuted' : 'text-ink-secondary'
                }`}>
                  {srv.description}
                </p>
              </div>

              <div className={`pt-4 border-t space-y-4 ${
                isDark ? 'border-surface-borderDark' : 'border-surface-border'
              }`}>
                <div className="flex flex-wrap gap-2">
                  {srv.tags.map((t) => (
                    <span
                      key={t}
                      className={`text-[11px] font-mono font-semibold px-3 py-1 rounded-lg border ${
                        isDark
                          ? 'bg-surface-forestDark border-surface-borderDark text-ink-onDarkMuted'
                          : 'bg-surface-soft border-surface-border text-ink-primary'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold transition-colors ${
                    isDark 
                      ? 'text-accent-lime hover:text-white' 
                      : 'text-ink-forest hover:underline'
                  }`}
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
