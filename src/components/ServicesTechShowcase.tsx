'use client';

import React from 'react';

export interface TechServiceItem {
  id: string;
  label: string;
  sublabel?: string;
  icon: React.ReactNode;
}

const CORE_SERVICES_ROW: TechServiceItem[] = [
  {
    id: 'web-design-dev',
    label: 'Website Design & Development',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="40" height="28" rx="3" fill="#F9FAFB" />
        <path d="M16 42h16M24 34v8" />
        <path d="M18 16l-5 4 5 4M30 16l5 4-5 4M26 14l-4 12" stroke="#143D30" strokeWidth="2.8" />
      </svg>
    ),
  },
  {
    id: 'wordpress',
    label: 'WordPress Development',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <circle cx="24" cy="24" r="20" fill="#21759B" />
        <circle cx="24" cy="24" r="17.5" stroke="#ffffff" strokeWidth="1.5" fill="none" />
        <path
          d="M9.5 24c0 5.7 3.3 10.7 8.1 13L11 19.1C10 20.6 9.5 22.3 9.5 24zm24.4-.7c0-1.8-.6-3.1-1.2-4.1-.8-1.2-1.5-2.2-1.5-3.4 0-1.3 1-2.6 2.5-2.6.1 0 .2 0 .3.1-2.6-2.4-6.1-3.8-10-3.8-5.1 0-9.6 2.6-12.2 6.6.3 0 .7.1 1 .1 1.6 0 4-.2 4-.2.8-.1.9 1.1.1 1.2 0 0-.8.1-1.7.2l5.5 16.3 3.3-9.9-2.4-6.4c-.8-.1-1.6-.2-1.6-.2-.8-.1-.7-1.3.1-1.2 0 0 2.5.2 4 .2 1.6 0 4-.2 4-.2.8-.1.9 1.1.1 1.2 0 0-.8.1-1.7.2l5.4 16.1 1.5-5c.7-2.2 1.1-3.8 1.1-5.2zM24.3 25.3l-4.5 13.1c1.4.4 2.8.6 4.2.6 1.7 0 3.4-.3 4.9-.9-.1-.1-.1-.3-.2-.4l-4.4-12.4zm12.5-8.4c.1.5.1 1.1.1 1.7 0 1.7-.3 3.6-1.3 6l-5.1 14.8c4.6-2.7 7.7-7.7 7.7-13.4 0-3.4-1.1-6.5-2.9-9.1h1.5z"
          fill="#ffffff"
        />
      </svg>
    ),
  },
  {
    id: 'shopify',
    label: 'Shopify Solutions',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <path d="M35.6 13.2c-.1-.2-.3-.3-.5-.3-.2 0-3.6-.1-3.6-.1s-2.7-2.6-3-2.9c-.3-.3-.8-.2-1-.1 0 0-.5.2-1.4.4-.8-2.4-2.3-4.6-4.9-4.6h-.2c-.7-.9-1.6-1.3-2.4-1.3-5.9 0-8.7 7.4-9.6 11.1-2.3.7-3.9 1.2-4.1 1.3-1.3.4-1.3.4-1.5 1.7C3.2 19.6 0 44 0 44l27.8 4.8L40 46.1S35.7 13.4 35.6 13.2zM24.9 10.6l-3.6 1.1c.5-1.9 1.5-3.8 2.8-4.5.5.9.8 2.2.8 3.4zm-5.4 1.7l-4.8 1.5c.9-3.5 2.7-5.2 4.2-5.8-.7 1.3-1.1 2.9-1.2 4.3h1.8zm2-4.5c.3 0 .5.1.8.3-1.5.7-3.1 2.6-3.8 6.4l-3.8 1.2c1.1-3.7 3.6-7.9 6.8-7.9z" fill="#95BF47" transform="translate(4, -1) scale(0.9)" />
        <path d="M35.1 12.9c-.2 0-3.6-.1-3.6-.1s-2.7-2.6-3-2.9c-.1-.1-.2-.1-.4-.2l-1.3 39.1 12.2-2.7S35.7 13.4 35.6 13.2c-.1-.2-.3-.3-.5-.3z" fill="#5E8E3E" transform="translate(4, -1) scale(0.9)" />
        <path d="M22.2 21.5l-1.5 4.5s-1.3-.7-2.9-.7c-2.3 0-2.5 1.5-2.5 1.8 0 2 5.2 2.8 5.2 7.5 0 3.7-2.3 6.1-5.5 6.1-3.8 0-5.7-2.4-5.7-2.4l1-3.3s2 1.7 3.7 1.7c1.1 0 1.6-.9 1.6-1.5 0-2.6-4.3-2.7-4.3-7 0-3.6 2.6-7.1 7.8-7.1 2 0 3.1.4 3.1.4z" fill="#ffffff" transform="translate(4, -1) scale(0.9)" />
      </svg>
    ),
  },
  {
    id: 'wix',
    label: 'Wix Development',
    icon: (
      <svg viewBox="0 0 64 48" className="w-12 h-10" fill="none">
        <text
          x="50%"
          y="58%"
           dominantBaseline="middle"
          textAnchor="middle"
          fill="#111827"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="24"
          letterSpacing="-1"
        >
          WiX
        </text>
      </svg>
    ),
  },
  {
    id: 'webflow',
    label: 'Webflow Development',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <path
          d="M36.5 12L30.8 26.5L26.5 15H20.8L16.5 26.5L11.5 12H5L13.2 36H19.4L23.6 24.8L27.8 36H34L43 12H36.5Z"
          fill="#146EF5"
        />
      </svg>
    ),
  },
  {
    id: 'custom-web',
    label: 'Custom Web Solutions',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="#111827" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 14 5 24 15 34" />
        <polyline points="33 14 43 24 33 34" />
        <line x1="28" y1="10" x2="20" y2="38" stroke="#143D30" />
      </svg>
    ),
  },
  {
    id: 'redesign-opt',
    label: 'Website Redesign & Optimization',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M28.5 9.5C34.5 9.5 39.5 11 41 12.5C39.5 18.5 34.5 26.5 27.5 31.5L18.5 22.5C23.5 15.5 24.5 9.5 28.5 9.5Z" fill="#ECFDF5" />
        <path d="M18.5 22.5L11.5 24.5L9.5 30.5L15.5 28.5" />
        <path d="M27.5 31.5L25.5 38.5L19.5 40.5L21.5 34.5" />
        <circle cx="31" cy="19" r="2.5" fill="#143D30" />
        <path d="M12 36C10 38 9 41 9 41C9 41 12 40 14 38" stroke="#143D30" strokeWidth="2.5" />
      </svg>
    ),
  },
];

const TECH_STACK_ROW: TechServiceItem[] = [
  {
    id: 'nextjs-react',
    label: 'Next.js & React Apps',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <circle cx="24" cy="24" r="20" fill="#111827" />
        <path d="M16.5 32V16h3.2l11.8 15.2V16h2.8v16h-3L19.3 16.6V32h-2.8z" fill="#ffffff" />
      </svg>
    ),
  },
  {
    id: 'nodejs-express',
    label: 'Node.js & Express APIs',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <path d="M24 5L40 14.2v18.6L24 42 8 32.8V14.2L24 5z" fill="#339933" />
        <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontFamily="monospace" fontWeight="bold" fontSize="13">JS</text>
      </svg>
    ),
  },
  {
    id: 'php-laravel',
    label: 'PHP & Laravel Systems',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#FF2D20">
        <path d="M23.642 5.43a.364.364 0 0 1 .014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 0 1-.188.326L9.93 23.949a.316.316 0 0 1-.066.027c-.008.002-.016.008-.024.01a.348.348 0 0 1-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 0 1-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 0 1 .023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 0 1 .375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 0 1 .024-.059c.007-.012.018-.02.026-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 0 1 .375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003a.404.404 0 0 1-.062-.047c-.01-.01-.023-.016-.033-.027-.01-.012-.015-.026-.024-.04a.4.4 0 0 1-.028-.047c-.006-.014-.009-.03-.014-.046a.375.375 0 0 1-.012-.05c-.002-.017-.001-.033-.001-.05V5.88L2.685 4.625 1.092 3.624zM5.23.809L1.472 2.974l3.757 2.164 3.758-2.164zm1.954 13.508l2.181-1.256V3.624L7.78 4.53l-2.182 1.256v9.855zm11.581-10.95L14.999 5.53l3.758 2.163 3.758-2.163zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.577.908zm-8.65 9.654l6.114-3.493 2.162-1.233-3.757-2.164-4.329 2.493-4.191 2.413z" />
      </svg>
    ),
  },
  {
    id: 'typescript',
    label: 'TypeScript & JavaScript',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <rect x="6" y="6" width="36" height="36" rx="6" fill="#3178C6" />
        <text x="54%" y="62%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontFamily="sans-serif" fontWeight="800" fontSize="18">TS</text>
      </svg>
    ),
  },
  {
    id: 'tailwind',
    label: 'Tailwind CSS & Bootstrap',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <path d="M24 14c-5.3 0-8.7 2.7-10 8 2-2.7 4.3-3.7 7-3 1.5.4 2.6 1.5 3.8 2.7 2 2 4.3 4.3 9.2 4.3 5.3 0 8.7-2.7 10-8-2 2.7-4.3 3.7-7 3-1.5-.4-2.6-1.5-3.8-2.7C31.2 16.3 28.9 14 24 14zM14 26c-5.3 0-8.7 2.7-10 8 2-2.7 4.3-3.7 7-3 1.5.4 2.6 1.5 3.8 2.7 2 2 4.3 4.3 9.2 4.3 5.3 0 8.7-2.7 10-8-2 2.7-4.3 3.7-7 3-1.5-.4-2.6-1.5-3.8-2.7C21.2 28.3 18.9 26 14 26z" fill="#06B6D4" />
      </svg>
    ),
  },
  {
    id: 'mongodb-sql',
    label: 'MongoDB & MySQL Databases',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <ellipse cx="24" cy="12" rx="14" ry="5" fill="#10B981" />
        <path d="M10 12v12c0 2.8 6.3 5 14 5s14-2.2 14-5V12" stroke="#059669" strokeWidth="2.5" fill="#D1FAE5" />
        <path d="M10 24v12c0 2.8 6.3 5 14 5s14-2.2 14-5V24" stroke="#059669" strokeWidth="2.5" fill="#A7F3D0" />
        <ellipse cx="24" cy="12" rx="14" ry="5" stroke="#059669" strokeWidth="2.5" fill="#34D399" />
      </svg>
    ),
  },
  {
    id: 'figma-uiux',
    label: 'Figma & UI/UX Design',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <path d="M17 24a6 6 0 1 1 6-6v6h-6z" fill="#A259FF" />
        <path d="M17 12a6 6 0 0 1 6-6h6v12h-6a6 6 0 0 1-6-6z" fill="#F24E1E" />
        <path d="M23 6h6a6 6 0 1 1 0 12h-6V6z" fill="#FF7262" />
        <path d="M23 24a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" fill="#1ABCFE" />
        <path d="M17 36a6 6 0 0 1 6-6h6v6a6 6 0 1 1-12 0z" fill="#0ACF83" />
      </svg>
    ),
  },
  {
    id: 'ai-automation',
    label: 'AI-Powered Development',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="#143D30" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="12" y="12" width="24" height="24" rx="5" fill="#ECFDF5" />
        <rect x="18" y="18" width="12" height="12" rx="2" fill="#143D30" />
        <path d="M20 6v6M28 6v6M20 36v6M28 36v6M6 20h6M6 28h6M36 20h6M36 28h6" />
      </svg>
    ),
  },
];

export default function ServicesTechShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Row 1: Exact Reference Banner - My Services & Technologies */}
      <div className="relative pt-5">
        {/* Top Centered Pill Badge */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
          <div className="px-7 py-2 rounded-full bg-ink-primary text-surface-pure font-display font-bold text-sm sm:text-base tracking-wide shadow-md whitespace-nowrap border border-ink-primary">
            My Services &amp; Technologies
          </div>
        </div>

        {/* Main Outlined Rounded Box with Vertical Dividers */}
        <div className="bg-surface-pure border-2 border-ink-primary/80 rounded-3xl px-4 sm:px-6 pt-9 pb-7 shadow-card">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 divide-y sm:divide-y-0 sm:divide-x divide-surface-border">
            {CORE_SERVICES_ROW.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col items-center justify-start text-center px-3 py-3 sm:py-2 transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="h-12 flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110">
                  {item.icon}
                </div>
                <p className="text-xs sm:text-[13px] font-display font-semibold text-ink-primary leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: Full-Stack Engineering, Frameworks & AI Stack */}
      <div className="relative pt-5">
        {/* Top Centered Pill Badge */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
          <div className="px-7 py-2 rounded-full bg-surface-forest text-surface-pure font-display font-bold text-sm sm:text-base tracking-wide shadow-md whitespace-nowrap border border-surface-forestDark">
            Core Full-Stack, UI/UX &amp; AI Engineering Stack
          </div>
        </div>

        {/* Main Outlined Rounded Box with Vertical Dividers */}
        <div className="bg-surface-pure border-2 border-surface-forest/80 rounded-3xl px-4 sm:px-6 pt-9 pb-7 shadow-card">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 divide-y sm:divide-y-0 sm:divide-x divide-surface-border">
            {TECH_STACK_ROW.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col items-center justify-start text-center px-3 py-3 sm:py-2 transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="h-12 flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110">
                  {item.icon}
                </div>
                <p className="text-xs sm:text-[13px] font-display font-semibold text-ink-primary leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

