import type { Metadata } from 'next';
import { ExternalLink, Globe, Shield, ShoppingCart, Building, Briefcase } from 'lucide-react';
import { CLIENT_WEBSITES, ClientWebsite } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: 'Selected Client Work & Websites',
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
      
      {/* Header */}
      <div className="border-b border-charcoal-800 pb-8 space-y-4">
        <span className="text-xs font-mono tracking-widest text-lime-400 uppercase">
          // Proven Client Deployments
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-sand-50 tracking-tight">
          Selected Client Websites
        </h1>
        <p className="text-base sm:text-lg text-charcoal-300 max-w-3xl leading-relaxed">
          These website references are extracted directly from my official CV. They represent commercial projects, client deliveries, and custom web implementations completed over 13+ years across corporate, e-commerce, and healthcare domains.
        </p>
        <p className="text-xs font-mono text-charcoal-400 bg-charcoal-900 border border-charcoal-800 p-3 rounded-xl">
          Note: These references reflect project deliveries and custom development scopes. They do not imply current ownership or ongoing operational management of third-party domains.
        </p>
      </div>

      {/* Categorized Displays */}
      <div className="space-y-16">
        {categories.map((cat) => {
          const sites = CLIENT_WEBSITES.filter((s) => s.category === cat);
          if (sites.length === 0) return null;

          return (
            <section key={cat} className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-lime-400" />
                <h2 className="text-2xl font-display font-bold text-sand-50">
                  {cat}
                </h2>
                <span className="text-xs font-mono text-charcoal-400">
                  ({sites.length} Reference{sites.length > 1 ? 's' : ''})
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sites.map((site, idx) => (
                  <div
                    key={idx}
                    className="bg-charcoal-900 border border-charcoal-800 hover:border-charcoal-700 rounded-2xl p-6 space-y-4 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-lime-400 px-2.5 py-0.5 rounded bg-charcoal-950 border border-charcoal-800">
                        {site.url.replace('https://', '')}
                      </span>
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-charcoal-950 text-charcoal-400 hover:text-sand-50 border border-charcoal-800 transition-colors"
                        aria-label={`Open ${site.name}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    <div>
                      <h3 className="text-lg font-display font-bold text-sand-50">
                        {site.name}
                      </h3>
                      <p className="text-xs text-charcoal-300 mt-1 leading-relaxed">
                        {site.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-charcoal-800/80 text-xs font-mono text-charcoal-400">
                      <span className="text-sand-50 font-semibold">Scope of Work:</span>{' '}
                      <span className="text-charcoal-300">{site.role}</span>
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
