import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  FileDown,
  MapPin,
  GraduationCap,
  ArrowRight,
  Sparkles,
  Code2,
  Cpu,
  Layers,
  Award,
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: 'About Arif Mahmood — AI-Powered Full-Stack Developer',
  description:
    'Professional background, philosophy, and education of Arif Mahmood, an AI-powered full-stack developer with 13+ years of experience based in Islamabad, Pakistan.',
};

export default function AboutPage() {
  const corePrinciples = [
    {
      title: 'Business-First Engineering',
      desc: 'Code is only as valuable as the real business outcome it delivers. Every architectural decision is evaluated on reliability, speed-to-market, and long-term maintainability.',
      icon: Layers,
      cardStyle: 'bg-surface-pure border-surface-border text-ink-primary shadow-soft',
      iconStyle: 'bg-surface-soft text-ink-forest',
    },
    {
      title: 'Full-Stack Fluidity',
      desc: 'Seamlessly bridging high-performance Next.js/React frontends with rock-solid Laravel, PHP, and Node.js backend services and relational database clustering.',
      icon: Code2,
      cardStyle: 'bg-surface-charcoal border-surface-borderCharcoal text-surface-pure shadow-darkCard',
      iconStyle: 'bg-surface-forest text-accent-lime',
      textSecondary: 'text-ink-onDarkMuted',
    },
    {
      title: 'AI-Augmented Productivity',
      desc: 'Integrating AI pair-programming, autonomous agent verification, and intelligent workflows to deliver enterprise-grade software with 3x velocity.',
      icon: Cpu,
      cardStyle: 'bg-surface-forest border-surface-borderDark text-surface-pure shadow-darkCard',
      iconStyle: 'bg-surface-forestDark text-accent-lime',
      textSecondary: 'text-ink-onDarkMuted',
    },
    {
      title: 'Pixel-Precise Craft',
      desc: 'Obsessive attention to Core Web Vitals, accessible semantic structure, fluid responsiveness, and ergonomic micro-interactions.',
      icon: Award,
      cardStyle: 'bg-surface-soft border-surface-border text-ink-primary shadow-soft',
      iconStyle: 'bg-surface-pure text-ink-forest',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Header Section */}
      <div className="border-b border-surface-border pb-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-soft border border-surface-border text-xs font-mono font-medium text-ink-forest">
          <Sparkles className="w-3.5 h-3.5 text-accent-forest" />
          <span>Profile & Professional Background</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-ink-primary tracking-tight">
          About Arif Mahmood
        </h1>
        <p className="text-lg sm:text-xl font-mono text-ink-forest font-semibold">
          {PERSONAL_INFO.roleTitle}
        </p>
      </div>

      {/* Main Bio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Column: Narrative & Experience Overview */}
        <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-ink-secondary leading-relaxed">
          <div className="p-6 sm:p-8 rounded-3xl bg-surface-pure border border-surface-border shadow-card space-y-4">
            <h2 className="text-2xl font-display font-bold text-ink-primary">
              13+ Years of Production Engineering
            </h2>
            <p className="text-base text-ink-secondary leading-relaxed">
              I am a senior AI-powered Full-Stack Developer with over <strong className="text-ink-primary font-semibold">13 years of professional hands-on experience</strong> architecting, building, and deploying high-traffic web applications, custom enterprise software, and scalable SaaS platforms.
            </p>
            <p className="text-base text-ink-secondary leading-relaxed">
              My engineering stack unites modern reactive frameworks (<strong className="text-ink-primary font-semibold">React, Next.js, TypeScript</strong>) with resilient backend ecosystems (<strong className="text-ink-primary font-semibold">PHP, Laravel, Node.js, Express, MySQL, MongoDB</strong>) and custom WordPress development (bespoke themes, custom plugin architecture, and headless CMS integrations).
            </p>
            <p className="text-base text-ink-secondary leading-relaxed">
              Throughout my journey—leading and shipping software across organizations including <strong className="text-ink-primary font-semibold">Zam Solutions, Spearhead Technology, Irtifa Group, and Global Technology Coverage</strong>—I have held an unwavering focus on code quality, performance optimization, and clean architectural separation of concerns.
            </p>
          </div>

          {/* Education Block */}
          <div className="p-6 sm:p-8 rounded-3xl bg-surface-soft border border-surface-border shadow-soft space-y-4">
            <h3 className="text-lg font-display font-bold text-ink-primary flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-surface-forest text-accent-lime">
                <GraduationCap className="w-5 h-5" />
              </span>
              <span>Formal Education</span>
            </h3>
            <div className="p-5 rounded-2xl bg-surface-pure border border-surface-border space-y-1">
              <p className="text-ink-primary font-bold text-base">{PERSONAL_INFO.education.degree}</p>
              <p className="text-ink-secondary text-sm font-mono">{PERSONAL_INFO.education.institution}</p>
              <p className="text-ink-forest text-xs font-mono font-bold pt-1">{PERSONAL_INFO.education.years}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Real Portrait & Deep Forest Green Quick Facts Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-surface-pure border border-surface-border rounded-3xl p-3 sm:p-4 shadow-card overflow-hidden group">
            <div className="relative w-full aspect-[4/4.8] rounded-2xl overflow-hidden bg-surface-soft border border-surface-border">
              <Image
                src={PERSONAL_INFO.aboutImageUrl}
                alt="Arif Mahmood — Full-Stack Developer"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 bg-surface-charcoal p-3.5 rounded-xl border border-surface-borderCharcoal shadow-xl flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-mono text-ink-onDarkMuted uppercase">Base Location</p>
                  <p className="text-sm font-bold text-surface-pure flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent-lime" />
                    <span>{PERSONAL_INFO.location}</span>
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-accent-lime text-surface-forest text-xs font-mono font-bold">
                  13+ Yrs
                </span>
              </div>
            </div>
          </div>

          {/* Quick Facts Card: Deep Forest Green (25% Weight Element) */}
          <div className="bg-surface-forest border border-surface-borderDark text-surface-pure rounded-3xl p-6 sm:p-7 space-y-5 shadow-darkCard">
            <p className="text-xs font-mono text-accent-lime uppercase tracking-widest font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
              <span>// Professional Coordinates</span>
            </p>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-center justify-between pb-3 border-b border-surface-borderDark">
                <span className="text-ink-onDarkMuted text-xs font-mono">Location</span>
                <span className="text-surface-pure font-bold">{PERSONAL_INFO.location}</span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-surface-borderDark">
                <span className="text-ink-onDarkMuted text-xs font-mono">Experience</span>
                <span className="text-surface-pure font-bold">{PERSONAL_INFO.experienceYears} Years (Since 2013)</span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-surface-borderDark">
                <span className="text-ink-onDarkMuted text-xs font-mono">Direct Email</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-accent-lime font-bold hover:underline text-xs font-mono truncate max-w-[190px]"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-surface-borderDark">
                <span className="text-ink-onDarkMuted text-xs font-mono">Phone / WhatsApp</span>
                <span className="text-surface-pure font-bold text-xs font-mono">{PERSONAL_INFO.phone}</span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-ink-onDarkMuted text-xs font-mono">Status</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-forestDark border border-accent-lime/40 text-accent-lime font-mono text-xs font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-lime animate-pulse" />
                  <span>Available for Hire</span>
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-surface-borderDark space-y-2.5">
              <a
                href={PERSONAL_INFO.cvPath}
                download={PERSONAL_INFO.cvFileName}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-surface-forestDark hover:bg-surface-charcoal text-surface-pure border border-surface-borderDark text-sm font-semibold transition-all shadow-sm"
              >
                <FileDown className="w-4 h-4 text-accent-lime" />
                <span>Download Verified CV (PDF)</span>
              </a>

              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-accent-lime hover:bg-accent-limeHover text-surface-forest font-bold text-sm tracking-tight transition-all shadow-md"
              >
                <span>Initiate Conversation</span>
                <ArrowRight className="w-4 h-4 text-surface-forest" />
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Engineering Philosophy Bento Grid */}
      <div className="space-y-6 pt-6">
        <div className="space-y-1">
          <span className="text-xs font-mono font-medium text-ink-forest uppercase tracking-widest font-bold">
            // Core Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-ink-primary tracking-tight">
            How I Approach Software Development
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {corePrinciples.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl border space-y-4 transition-all hover:-translate-y-1 ${item.cardStyle}`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.iconStyle}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold">
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed ${item.textSecondary || 'text-ink-secondary'}`}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
