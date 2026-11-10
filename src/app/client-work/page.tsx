import type { Metadata } from 'next';
import { ExternalLink, Sparkles } from 'lucide-react';
import { CLIENT_WEBSITES, ClientWebsite } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: 'Selected Client Work & Websites — Arif Mahmood',
  description:
    'Documented previous client websites, corporate portals, and e-commerce platforms engineered by Arif Mahmood across 13+ years of professional practice.',
};

export default function ClientWorkPage() {
  const categories: Array<ClientWebsite['category']> = [
    'Business & Corporate',
    'E-commerce',
    'Healthcare & Services',
    'Tech & Recruitment',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Header Section */}
      <div className="border-b border-surface-border pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-soft border border-surface-border text-xs font-mono font-medium text-ink-forest font-bold">
          <Sparkles className="w-3.5 h-3.5 text-accent-forest" />
          <span>Proven Commercial Deployments</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-ink-primary tracking-tight">
          Selected Client Websites
        </h1>
        <p className="text-base sm:text-lg text-ink-secondary max-w-3xl leading-relaxed">
          These website references are documented directly in my official CV. They represent commercial projects, client deliverables, and custom web implementations completed over 13+ years across corporate, e-commerce, and healthcare domains.
        </p>
        <div className="text-xs font-mono text-ink-secondary bg-surface-pure border border-surface-border p-4 rounded-2xl shadow-soft">
          <strong className="text-ink-primary font-bold">Verification Note:</strong> These references reflect historical and ongoing project deliveries and custom engineering scopes. They do not imply current ownership or operational administration of third-party domains.
        </div>
      </div>

      {/* Categorized Displays */}
      <div className="space-y-16">
        {categories.map((cat) => {
          const sites = CLIENT_WEBSITES.filter((s) => s.category === cat);
          if (sites.length === 0) return null;

          return (
            <section key={cat} className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-surface-forest" />
                <h2 className="text-2xl font-display font-bold text-ink-primary">
                  {cat}
                </h2>
                <span className="text-xs font-mono text-ink-forest font-bold px-3 py-1 rounded-full bg-surface-soft border border-surface-border">
                  {sites.length} Reference{sites.length > 1 ? 's' : ''}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sites.map((site, idx) => (
                  <div
                    key={idx}
                    className="bg-surface-pure border border-surface-border hover:border-surface-forest rounded-3xl p-6 sm:p-7 space-y-5 transition-all shadow-card hover:shadow-elevated flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-mono text-ink-forest font-bold px-3 py-1 rounded-full bg-surface-soft border border-surface-border truncate max-w-[200px]">
                          {site.url.replace('https://', '')}
                        </span>
                        <a
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-surface-forest hover:bg-surface-forestDark text-surface-pure transition-colors shadow-sm"
                          aria-label={`Open ${site.name}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-accent-lime" />
                        </a>
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-display font-bold text-ink-primary">
                          {site.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-ink-secondary mt-1.5 leading-relaxed">
                          {site.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-surface-border text-xs font-mono text-ink-secondary">
                      <span className="text-ink-primary font-bold">Scope of Work:</span>{' '}
                      <span className="text-ink-forest font-semibold">{site.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

    </div>
  );
}
