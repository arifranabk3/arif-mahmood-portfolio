import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: 'Services & Engineering Capabilities',
  description:
    'Full-stack web application development, custom WordPress & plugin engineering, headless CMS architecture, and performance optimization services by Arif Mahmood.',
};

export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="border-b border-charcoal-800 pb-8 space-y-4">
        <span className="text-xs font-mono tracking-widest text-lime-400 uppercase">
          // Engagement Models
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-sand-50 tracking-tight">
          Services & Capabilities
        </h1>
        <p className="text-base sm:text-lg text-charcoal-300 max-w-3xl leading-relaxed">
          High-precision development services for international remote engineering teams, fast-growing software companies, and bespoke digital clients.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((srv, idx) => (
          <section
            key={idx}
            className="bg-charcoal-900 border border-charcoal-800 hover:border-charcoal-700 rounded-2xl p-6 sm:p-8 space-y-5 transition-all shadow-editorial flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-charcoal-950 border border-charcoal-800 flex items-center justify-center text-lime-400 font-mono text-sm font-bold">
                0{idx + 1}
              </div>

              <h2 className="text-xl sm:text-2xl font-display font-bold text-sand-50">
                {srv.title}
              </h2>

              <p className="text-sm text-charcoal-300 leading-relaxed">
                {srv.description}
              </p>
            </div>

            <div className="pt-4 border-t border-charcoal-800/80 space-y-4">
              <div className="flex flex-wrap gap-2">
                {srv.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-charcoal-950 border border-charcoal-800 text-charcoal-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-lime-400 hover:text-lime-300 font-bold"
              >
                <span>Inquire About This Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
        ))}
      </div>

    </div>
  );
}

