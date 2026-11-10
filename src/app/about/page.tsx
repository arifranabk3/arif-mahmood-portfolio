import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  FileDown,
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
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
      desc: 'Code is only as valuable as the real business outcome it delivers. Every architectural decision is evaluated on reliability, speed-to-market, and maintainability.',
      icon: Layers,
      tint: 'bg-pastel-lavender/50 text-indigo-900',
    },
    {
      title: 'Full-Stack Fluidity',
      desc: 'Seamlessly bridging high-performance Next.js/React frontends with rock-solid Laravel, PHP, and Node.js backend services and relational databases.',
      icon: Code2,
      tint: 'bg-pastel-peach/50 text-amber-900',
    },
    {
      title: 'AI-Augmented Productivity',
      desc: 'Integrating AI pair-programming, automated schema validation, and intelligent workflows to deliver enterprise-grade projects with 3x velocity.',
      icon: Cpu,
      tint: 'bg-accent-moss/30 text-forest-900',
    },
    {
      title: 'Pixel-Precise Craft',
      desc: 'Obsessive attention to Core Web Vitals, accessible semantic structure, fluid responsiveness, and ergonomic micro-interactions.',
      icon: Award,
      tint: 'bg-canvas-soft text-forest-900',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Header Section */}
      <div className="border-b border-canvas-border pb-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-soft border border-canvas-border text-xs font-mono font-medium text-forest-800">
          <Sparkles className="w-3.5 h-3.5 text-forest-700" />
          <span>Profile & Professional Background</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-ink-primary tracking-tight">
          About Arif Mahmood
        </h1>
        <p className="text-lg sm:text-xl font-mono text-forest-700 font-medium">
          {PERSONAL_INFO.roleTitle}
        </p>
      </div>

      {/* Main Bio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Column: Narrative & Experience Overview */}
        <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-ink-secondary leading-relaxed">
          <div className="p-6 rounded-3xl bg-canvas-pure border border-canvas-border shadow-elevated space-y-4">
            <h2 className="text-xl font-display font-bold text-ink-primary">
              13+ Years of Production Engineering
            </h2>
            <p className="text-base text-ink-secondary leading-relaxed">
              I am a senior AI-powered Full-Stack Developer with over <strong className="text-ink-primary font-semibold">13 years of professional hands-on experience</strong> architecting, building, and deploying high-traffic web applications, custom enterprise software, and scalable SaaS platforms.
            </p>
            <p className="text-base text-ink-secondary leading-relaxed">
              My engineering stack unites modern reactive frameworks (<strong className="text-ink-primary font-semibold">React, Next.js, TypeScript</strong>) with resilient backend ecosystems (<strong className="text-ink-primary font-semibold">PHP, Laravel, Node.js, Express, MySQL, PostgreSQL</strong>) and custom WordPress development (bespoke themes, custom plugin architecture, and headless CMS integrations).
            </p>
            <p className="text-base text-ink-secondary leading-relaxed">
              Throughout my journey—leading and shipping software across organizations including <strong className="text-ink-primary font-semibold">Zam Solutions, Spearhead Technology, Irtifa Group, and Global Technology Coverage</strong>—I have held an unwavering focus on code quality, performance optimization, and clean architectural separation of concerns.
            </p>
          </div>

          {/* Education Block */}
          <div className="p-6 rounded-3xl bg-canvas-pure border border-canvas-border shadow-elevated space-y-4">
            <h3 className="text-lg font-display font-bold text-ink-primary flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-forest-900 text-accent-moss">
                <GraduationCap className="w-5 h-5" />
              </span>
              <span>Formal Education</span>
            </h3>
            <div className="p-5 rounded-2xl bg-canvas-soft border border-canvas-border space-y-1">
              <p className="text-ink-primary font-bold text-base">{PERSONAL_INFO.education.degree}</p>
              <p className="text-ink-secondary text-sm font-mono">{PERSONAL_INFO.education.institution}</p>
              <p className="text-forest-700 text-xs font-mono font-medium pt-1">{PERSONAL_INFO.education.years}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Real Portrait & Fast Info Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-canvas-pure border border-canvas-border rounded-3xl p-3 sm:p-4 shadow-elevated overflow-hidden group">
            <div className="relative w-full aspect-[4/4.8] rounded-2xl overflow-hidden bg-canvas-soft border border-canvas-border">
              <Image
                src={PERSONAL_INFO.aboutImageUrl}
                alt="Arif Mahmood — Full-Stack Developer"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white/40 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono text-ink-secondary">Current Location</p>
                  <p className="text-sm font-bold text-ink-primary flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-forest-700" />
                    <span>{PERSONAL_INFO.location}</span>
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-forest-900 text-accent-moss text-xs font-mono font-bold">
                  13+ Yrs
                </span>
              </div>
            </div>
          </div>

          {/* Quick Facts Card */}
          <div className="bg-canvas-pure border border-canvas-border rounded-3xl p-6 space-y-5 shadow-elevated">
            <p className="text-xs font-mono text-forest-700 uppercase tracking-widest font-semibold">
              // Professional Coordinates
            </p>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-center justify-between pb-3 border-b border-canvas-border">
                <span className="text-ink-secondary text-xs font-mono">Location</span>
                <span className="text-ink-primary font-semibold">{PERSONAL_INFO.location}</span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-canvas-border">
                <span className="text-ink-secondary text-xs font-mono">Experience</span>
                <span className="text-ink-primary font-semibold">{PERSONAL_INFO.experienceYears} Years</span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-canvas-border">
                <span className="text-ink-secondary text-xs font-mono">Direct Email</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-forest-700 font-semibold hover:underline text-xs font-mono truncate max-w-[180px]"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-canvas-border">
                <span className="text-ink-secondary text-xs font-mono">Phone / WA</span>
                <span className="text-ink-primary font-semibold text-xs font-mono">{PERSONAL_INFO.phone}</span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-ink-secondary text-xs font-mono">Status</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-moss/30 border border-forest-600/30 text-forest-900 font-mono text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-forest-600 animate-pulse" />
                  <span>Available for Hire</span>
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-canvas-border space-y-2.5">
              <a
                href={PERSONAL_INFO.cvPath}
                download={PERSONAL_INFO.cvFileName}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-canvas-soft hover:bg-canvas text-ink-primary border border-canvas-border text-sm font-semibold transition-all shadow-sm"
              >
                <FileDown className="w-4 h-4 text-forest-700" />
                <span>Download Verified CV (PDF)</span>
              </a>

              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-forest-900 hover:bg-forest-800 text-white font-bold text-sm tracking-tight transition-all shadow-md"
              >
                <span>Initiate Conversation</span>
                <ArrowRight className="w-4 h-4 text-accent-moss" />
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Engineering Philosophy Bento Grid */}
      <div className="space-y-6 pt-6">
        <div className="space-y-1">
          <span className="text-xs font-mono font-medium text-forest-700 uppercase tracking-widest">
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
                className="p-6 sm:p-7 rounded-3xl bg-canvas-pure border border-canvas-border shadow-elevated space-y-3 transition-all hover:-translate-y-1"
              >
                <div className={`w-11 h-11 rounded-2xl ${item.tint} flex items-center justify-center`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-bold text-ink-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed">
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
