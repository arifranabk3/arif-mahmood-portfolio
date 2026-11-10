'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowUpRight, 
  FileDown, 
  Sparkles, 
  Terminal, 
  Layers, 
  CheckCircle2, 
  Code2, 
  ExternalLink,
  Laptop,
  Boxes,
  Cpu,
  Palette,
  Workflow,
  TrendingUp,
  MapPin,
  ChevronDown
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  PROJECTS, 
  EXPERIENCES, 
  CLIENT_WEBSITES 
} from '@/data/portfolioData';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function RedesignedLightHomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const selectedClients = CLIENT_WEBSITES.slice(0, 6);

  return (
    <div className="relative overflow-hidden bg-surface-canvas text-ink-primary">
      
      {/* Background Ambient Textures */}
      <div className="absolute inset-0 light-dot-grid pointer-events-none opacity-50" />

      {/* =========================================================================
          01 — HERO SECTION: Warm Neutral Hero with Deep Forest Green Typography
      ========================================================================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-between pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Top Eyebrow Badges */}
        <motion.div 
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-wrap items-center gap-3 pt-6 sm:pt-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-pure border border-surface-border shadow-soft text-xs font-mono text-ink-secondary">
            <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse ring-2 ring-accent-forest/30" />
            <span className="text-ink-primary font-bold">Arif Mahmood</span>
            <span className="text-surface-border">/</span>
            <span className="font-medium text-ink-forest">Senior AI-Powered Full-Stack Engineer</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-soft border border-surface-border text-xs font-mono text-ink-secondary">
            <MapPin className="w-3.5 h-3.5 text-accent-forest" />
            <span className="font-medium">Islamabad, Pakistan · Available Worldwide</span>
          </div>
        </motion.div>

        {/* Main Hero Content Grid */}
        <div className="my-auto py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Expressive Typography */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tight leading-[0.98] uppercase text-ink-primary">
                Building <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-forest via-ink-primary to-accent-forest">
                  Digital
                </span> <br />
                <span className="relative inline-block">
                  Experiences
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-accent-lime/45 rounded-full" />
                </span> <br />
                <span className="text-ink-forest">
                  That Matter.
                </span>
              </h1>
            </motion.div>

            <motion.p 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-base sm:text-lg text-ink-secondary max-w-xl leading-relaxed font-normal"
            >
              I am Arif Mahmood, an AI-powered Full-Stack Developer with 13+ years of experience delivering scalable web applications, autonomous software architectures, and high-performance WordPress systems.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-surface-forest hover:bg-surface-forestDark text-surface-pure font-display font-bold text-sm tracking-tight transition-all duration-300 shadow-card hover:scale-[1.02]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 text-accent-lime group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-surface-pure hover:bg-surface-soft text-ink-primary border border-surface-border font-mono text-xs font-semibold transition-all shadow-soft"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent-forest" />
              </Link>

              <a
                href={PERSONAL_INFO.cvPath}
                download={PERSONAL_INFO.cvFileName}
                className="inline-flex items-center gap-2 px-5 py-4 rounded-full bg-surface-soft hover:bg-surface-pure text-ink-primary border border-surface-border font-mono text-xs font-semibold transition-all shadow-soft"
              >
                <FileDown className="w-3.5 h-3.5 text-accent-forest" />
                <span>Resume (PDF)</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Showcase Card with Verified Portrait */}
          <motion.div 
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="lg:col-span-5"
          >
            <div className="relative group max-w-md mx-auto lg:max-w-none">
              
              {/* Subtle Ambient Glow */}
              <div className="absolute -inset-1.5 rounded-4xl bg-gradient-to-tr from-accent-lime/30 via-surface-forest/20 to-accent-peach/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative bg-surface-pure border border-surface-border rounded-4xl p-4 sm:p-5 shadow-elevated space-y-4">
                
                {/* Real Black Suit Portrait Image */}
                <div className="relative aspect-[4/4.3] w-full rounded-3xl overflow-hidden bg-surface-soft border border-surface-borderSoft">
                  <Image
                    src={PERSONAL_INFO.heroImageUrl}
                    alt="Arif Mahmood — AI-Powered Full-Stack Developer"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-top filter brightness-[1.01] group-hover:scale-[1.02] transition-transform duration-500"
                    priority
                  />
                  
                  {/* Floating Glass Pill */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-2xl bg-surface-pure/94 backdrop-blur-md border border-surface-border shadow-card flex items-center justify-between">
                    <div>
                      <p className="text-xs font-display font-bold text-ink-primary">Arif Mahmood</p>
                      <p className="text-[10px] font-mono text-ink-secondary">Islamabad, PK · Available for Hire</p>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-surface-pure bg-surface-forest px-3 py-1 rounded-lg border border-surface-forestDark">
                      13+ Yrs
                    </span>
                  </div>
                </div>

                {/* Metric Badges */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-surface-soft border border-surface-borderSoft text-center">
                    <p className="text-2xl font-display font-extrabold text-ink-forest">13+</p>
                    <p className="text-[10px] font-mono text-ink-secondary uppercase tracking-wider mt-0.5 font-medium">Years Experience</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-surface-soft border border-surface-borderSoft text-center">
                    <p className="text-2xl font-display font-extrabold text-ink-primary">09</p>
                    <p className="text-[10px] font-mono text-ink-secondary uppercase tracking-wider mt-0.5 font-medium">Software Assets</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Banner */}
        <motion.div 
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex items-center justify-between pt-4 border-t border-surface-border text-xs font-mono text-ink-secondary"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-surface-forest" />
            <span className="font-medium">Next.js 14 App Router · TypeScript · Node.js · Laravel · WordPress</span>
          </div>

          <a 
            href="#projects" 
            className="flex items-center gap-1.5 text-ink-forest font-bold hover:underline transition-colors"
          >
            <span>Explore platforms</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </motion.div>

      </section>

      {/* =========================================================================
          02 — INTRODUCTION & CREDIBILITY BAND: White High-Contrast Metric Strip
      ========================================================================= */}
      <section className="border-y border-surface-border bg-surface-pure py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-display font-extrabold text-ink-forest">13+ Years</p>
            <p className="text-xs font-mono text-ink-secondary uppercase tracking-wider font-semibold">Continuous Practice</p>
            <p className="text-xs text-ink-muted">Active since 2013 across high-velocity teams.</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-display font-extrabold text-ink-primary">9 Platforms</p>
            <p className="text-xs font-mono text-ink-secondary uppercase tracking-wider font-semibold">Independent Products</p>
            <p className="text-xs text-ink-muted">Automotive, ATS, SaaS & Autonomous AI.</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-display font-extrabold text-ink-forest">20+ Clients</p>
            <p className="text-xs font-mono text-ink-secondary uppercase tracking-wider font-semibold">Commercial Deliveries</p>
            <p className="text-xs text-ink-muted">Documented in official career CV.</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-display font-extrabold text-ink-primary">100% Core Web</p>
            <p className="text-xs font-mono text-ink-secondary uppercase tracking-wider font-semibold">Performance Rigor</p>
            <p className="text-xs text-ink-muted">Sub-second LCP & accessibility compliance.</p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — FEATURED PROJECTS: Alternating Light Neutral and Deep Charcoal Surfaces
      ========================================================================= */}
      <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-surface-border pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-forest font-bold">
              <span>// 03 — Software Engineering Assets</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight uppercase text-ink-primary">
              Featured Case Studies
            </h2>
            <p className="text-sm sm:text-base text-ink-secondary max-w-2xl leading-relaxed">
              Autonomous AI systems, production-grade automotive marketplaces, multi-tenant digital commerce, and corporate applicant tracking systems engineered from architecture to interface.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-pure hover:bg-surface-soft border border-surface-border text-xs font-mono text-ink-forest font-bold transition-all shadow-soft self-start sm:self-auto"
          >
            <span>View All 9 Platforms</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Alternating Project Cards: Visual Variety & Contrast */}
        <div className="space-y-16 sm:space-y-20">
          {featuredProjects.map((project, idx) => {
            const isDark = idx % 2 === 1; // Alternating surfaces
            const isReversed = idx % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`group relative rounded-4xl p-6 sm:p-10 lg:p-12 transition-all duration-300 overflow-hidden ${
                  isDark
                    ? 'bg-surface-charcoal border border-surface-borderCharcoal text-surface-pure shadow-darkCard'
                    : 'bg-surface-pure border border-surface-border text-ink-primary shadow-card hover:shadow-elevated'
                }`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Left Specs & Narrative */}
                  <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`font-mono text-xs font-bold px-3 py-1 rounded-md border ${
                        isDark 
                          ? 'bg-surface-forest text-accent-lime border-surface-borderDark' 
                          : 'bg-surface-soft text-ink-forest border-surface-border'
                      }`}>
                        CASE 0{idx + 1}
                      </span>
                      <span
                        className={`text-[11px] font-mono px-3 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                          project.status === 'Live'
                            ? isDark
                              ? 'bg-accent-lime/20 text-accent-lime border border-accent-lime/40'
                              : 'bg-emerald-100 text-emerald-950 border border-emerald-300'
                            : project.status === 'Development'
                            ? isDark
                              ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                              : 'bg-amber-100 text-amber-950 border border-amber-300'
                            : 'bg-surface-soft text-ink-secondary border border-surface-border'
                        }`}
                      >
                        ● {project.status}
                      </span>
                      <span className={`text-xs font-mono ${isDark ? 'text-ink-onDarkMuted' : 'text-ink-secondary'}`}>
                        {project.category}
                      </span>
                    </div>

                    <div>
                      <h3 className={`text-3xl sm:text-4xl font-display font-extrabold tracking-tight transition-colors ${
                        isDark 
                          ? 'text-surface-pure group-hover:text-accent-lime' 
                          : 'text-ink-primary group-hover:text-ink-forest'
                      }`}>
                        {project.title}
                      </h3>
                      <p className={`text-sm font-mono mt-1 ${isDark ? 'text-accent-lime font-medium' : 'text-ink-forest font-semibold'}`}>
                        {project.tagline}
                      </p>
                    </div>

                    <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-ink-onDarkMuted' : 'text-ink-secondary'}`}>
                      {project.description}
                    </p>

                    {/* Verified Capabilities */}
                    <div className="space-y-2.5 pt-1">
                      <p className={`text-xs font-mono uppercase tracking-wider font-semibold ${isDark ? 'text-ink-onDarkMuted' : 'text-ink-primary'}`}>
                        Verified Implementation Highlights:
                      </p>
                      <div className="space-y-1.5 text-xs">
                        {project.features.slice(0, 3).map((f, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${isDark ? 'text-accent-lime' : 'text-accent-forest'}`} />
                            <span className={isDark ? 'text-surface-pure' : 'text-ink-secondary'}>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-lg text-xs font-mono font-medium ${
                            isDark
                              ? 'bg-surface-charcoalDark border border-surface-borderCharcoal text-ink-onDarkMuted'
                              : 'bg-surface-soft border border-surface-borderSoft text-ink-secondary'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      <Link
                        href={`/projects/${project.slug}`}
                        className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-display font-bold text-xs tracking-tight transition-all shadow-sm ${
                          isDark
                            ? 'bg-accent-lime hover:bg-accent-limeHover text-surface-forest'
                            : 'bg-surface-forest hover:bg-surface-forestDark text-surface-pure'
                        }`}
                      >
                        <span>View Project Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 px-4 py-3 rounded-full text-xs font-mono font-semibold transition-all ${
                            isDark
                              ? 'bg-surface-forest hover:bg-surface-forestDark text-surface-pure border border-surface-borderDark'
                              : 'bg-surface-soft hover:bg-surface-border/50 text-ink-primary border border-surface-border'
                          }`}
                        >
                          <span>Live Deployment</span>
                          <ExternalLink className={`w-3.5 h-3.5 ${isDark ? 'text-accent-lime' : 'text-accent-forest'}`} />
                        </a>
                      )}
                    </div>

                  </div>

                  {/* Right Column: Visual Preview Panel */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className={`relative rounded-3xl p-6 sm:p-8 space-y-5 border ${
                      isDark 
                        ? 'bg-surface-charcoalDark border-surface-borderCharcoal' 
                        : 'bg-surface-soft border-surface-borderSoft'
                    }`}>
                      
                      {/* Browser Mockup Top Bar */}
                      <div className="flex items-center justify-between border-b border-surface-border/40 pb-4">
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-rose-400" />
                          <span className="w-3 h-3 rounded-full bg-amber-400" />
                          <span className="w-3 h-3 rounded-full bg-emerald-400" />
                        </div>
                        <span className={`text-[11px] font-mono px-3 py-0.5 rounded-full ${
                          isDark ? 'bg-surface-charcoal text-ink-onDarkMuted border border-surface-borderCharcoal' : 'bg-surface-pure text-ink-secondary border border-surface-border'
                        }`}>
                          {project.slug}.production
                        </span>
                      </div>

                      {/* Architecture Callout Items */}
                      <div className="space-y-2.5">
                        <p className={`text-[10px] font-mono uppercase tracking-wider font-semibold ${isDark ? 'text-accent-lime' : 'text-ink-forest'}`}>
                          // Architectural Highlights
                        </p>
                        {project.architecture.slice(0, 3).map((arch, aIdx) => (
                          <div 
                            key={aIdx} 
                            className={`p-3 rounded-xl text-xs font-mono leading-relaxed border ${
                              isDark 
                                ? 'bg-surface-charcoal border-surface-borderCharcoal text-ink-onDarkMuted' 
                                : 'bg-surface-pure border-surface-border text-ink-secondary'
                            }`}
                          >
                            <span className={isDark ? 'text-accent-lime font-bold mr-2' : 'text-ink-forest font-bold mr-2'}>0{aIdx + 1}.</span>
                            <span>{arch}</span>
                          </div>
                        ))}
                      </div>

                      {/* Snapshot Metrics */}
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        {project.metrics?.slice(0, 2).map((m, mIdx) => (
                          <div 
                            key={mIdx} 
                            className={`p-2.5 rounded-xl border text-center ${
                              isDark 
                                ? 'bg-surface-charcoal border-surface-borderCharcoal' 
                                : 'bg-surface-pure border-surface-border'
                            }`}
                          >
                            <p className={`text-[10px] font-mono uppercase ${isDark ? 'text-ink-onDarkMuted' : 'text-ink-muted'}`}>{m.label}</p>
                            <p className={`text-xs font-display font-bold mt-0.5 ${isDark ? 'text-surface-pure' : 'text-ink-primary'}`}>{m.value}</p>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </section>

      {/* =========================================================================
          04 — EXPERTISE BENTO GRID: Warm Neutral Bento Layout
      ========================================================================= */}
      <section id="expertise" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        
        <div className="space-y-3 border-b border-surface-border pb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-forest font-bold">
            <span>// 04 — Specialized Capabilities</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight uppercase text-ink-primary">
            Expertise Bento Grid
          </h2>
          <p className="text-sm sm:text-base text-ink-secondary max-w-xl">
            Specialized engineering capabilities across frontend performance, robust backend APIs, headless content platforms, and AI-assisted workflows.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Full-Stack Web Development (Span 7) */}
          <div className="md:col-span-7 rounded-4xl bg-surface-pure border border-surface-border p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-card hover:shadow-elevated transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-lavender border border-accent-lavenderBorder flex items-center justify-center text-accent-forest shadow-soft">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-ink-primary">
                Full-Stack Web Development
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed max-w-md">
                End-to-end web architectures built with React, Next.js 14 (App Router), PHP, Laravel, Node.js, and TypeScript. Optimized for sub-second Core Web Vitals and zero layout shift.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-surface-border">
              {['Next.js', 'React', 'TypeScript', 'Laravel', 'Node.js', 'Tailwind CSS'].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-surface-soft border border-surface-border text-xs font-mono text-ink-secondary font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: SaaS Application Architecture (Span 5) */}
          <div className="md:col-span-5 rounded-4xl bg-surface-soft border border-surface-border p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-soft hover:shadow-card transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-surface-pure border border-surface-border flex items-center justify-center text-accent-forest">
                <Boxes className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-ink-primary">
                SaaS Application Architecture
              </h3>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                Multi-tenant database schema isolation, role-based authorization (RBAC), token rotation, and tenant rewrite routing for enterprise-grade B2B platforms.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-surface-pure border border-surface-border text-xs font-mono text-ink-forest font-bold">
              <span>● Strict Tenant Data Segregation</span>
            </div>
          </div>

          {/* Card 3: AI Integration & Automation (Span 5) */}
          <div className="md:col-span-5 rounded-4xl bg-surface-pure border border-surface-border p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-card hover:shadow-elevated transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-peach border border-accent-peachBorder flex items-center justify-center text-accent-forest shadow-soft">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-ink-primary">
                AI Integration & Autonomous Systems
              </h3>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                Embedding intelligent AI coding agents, autonomous tool execution pipelines, and prompt-driven automation workflows into software architectures.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono text-ink-secondary font-medium">
              <span className="px-3 py-1 rounded-full bg-surface-soft border border-surface-border">Multi-Agent Systems</span>
              <span className="px-3 py-1 rounded-full bg-surface-soft border border-surface-border">Automation Workflows</span>
            </div>
          </div>

          {/* Card 4: WordPress & Custom Themes (Span 7) */}
          <div className="md:col-span-7 rounded-4xl bg-surface-soft border border-surface-border p-8 sm:p-10 flex flex-col justify-between space-y-6 hover:shadow-card transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-surface-pure border border-surface-border flex items-center justify-center text-accent-forest shadow-soft">
                <Workflow className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-ink-primary">
                WordPress & Headless CMS Engineering
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed max-w-md">
                13+ years building high-performance bespoke WordPress themes and plugins from scratch without bloated visual builders. Seamless decoupled headless architectures connecting WordPress or Laravel backends to Next.js clients.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-surface-border">
              {['Custom Themes', 'Plugin Development', 'WooCommerce', 'Headless CMS', 'RESTful APIs'].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-surface-pure border border-surface-border text-xs font-mono text-ink-secondary font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 5: UI/UX Engineering (Span 6) */}
          <div className="md:col-span-6 rounded-4xl bg-surface-pure border border-surface-border p-8 sm:p-10 space-y-4 shadow-soft hover:shadow-card transition-all">
            <div className="w-12 h-12 rounded-2xl bg-surface-soft border border-surface-border flex items-center justify-center text-accent-forest">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-ink-primary">
              UI/UX Design to Production Code
            </h3>
            <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
              Converting high-fidelity Figma and Photoshop designs into responsive, accessible, pixel-perfect frontend experiences with bespoke design tokens and subtle micro-interactions.
            </p>
          </div>

          {/* Card 6: RESTful API Engineering (Span 6) */}
          <div className="md:col-span-6 rounded-4xl bg-surface-pure border border-surface-border p-8 sm:p-10 space-y-4 shadow-soft hover:shadow-card transition-all">
            <div className="w-12 h-12 rounded-2xl bg-surface-soft border border-surface-border flex items-center justify-center text-accent-forest">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-ink-primary">
              RESTful API & Integration Engineering
            </h3>
            <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
              Architecting secure, well-documented REST APIs in Express.js and Laravel with input sanitization, rate-limiting, and error boundaries protecting external data pipelines.
            </p>
          </div>

        </div>

      </section>

      {/* =========================================================================
          05 — PROFESSIONAL EXPERIENCE: Deep Forest Green Contrast Section (25% Weight)
      ========================================================================= */}
      <section id="experience" className="bg-surface-forest text-surface-pure py-24 sm:py-32 relative overflow-hidden border-y border-surface-borderDark">
        
        {/* Subtle Dark Dot Grid */}
        <div className="absolute inset-0 dark-dot-grid pointer-events-none opacity-40" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-surface-borderDark pb-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-lime font-bold">
                <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
                <span>// 05 — Chronological Career Timeline</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight uppercase text-surface-pure">
                13+ Years Journey
              </h2>
              <p className="text-sm sm:text-base text-ink-onDarkMuted max-w-xl">
                Consistent record delivering web applications and custom systems across leading tech companies.
              </p>
            </div>

            <Link
              href="/experience"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-lime font-bold hover:underline self-start sm:self-auto"
            >
              <span>Detailed Career Record</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Timeline Stack */}
          <div className="relative border-l-2 border-accent-lime/40 pl-6 sm:pl-10 ml-3 sm:ml-6 space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative group"
              >
                {/* Timeline Indicator Dot */}
                <div
                  className={`absolute -left-[33px] sm:-left-[49px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                    exp.isCurrent
                      ? 'bg-accent-lime border-surface-pure shadow-limeGlow animate-pulse'
                      : 'bg-surface-forestDark border-accent-lime/60'
                  }`}
                />

                <div className="rounded-3xl bg-surface-forestDark/90 border border-surface-borderDark p-6 sm:p-8 space-y-5 shadow-darkCard">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-surface-pure">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-mono text-accent-lime font-bold mt-0.5">
                        {exp.company} <span className="text-ink-onDarkMuted font-normal">· {exp.location}</span>
                      </p>
                    </div>
                    <span className="text-xs font-mono text-surface-pure px-3.5 py-1.5 rounded-full bg-surface-forest border border-surface-borderDark w-fit font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-ink-onDarkMuted">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <span className="text-accent-lime font-mono mt-0.5">▹</span>
                        <span className="leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.achievements && (
                    <div className="pt-3 border-t border-surface-borderDark space-y-2.5">
                      <p className="text-[11px] font-mono uppercase text-accent-lime tracking-wider font-semibold">
                        CV Documented Achievements:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-surface-pure">
                        {exp.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-center gap-2 p-3 rounded-xl bg-surface-charcoal/80 border border-surface-borderCharcoal">
                            <TrendingUp className="w-3.5 h-3.5 text-accent-lime flex-shrink-0" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </section>

      {/* =========================================================================
          06 — SELECTED CLIENT WORK: White Surface Cards on Warm Neutral Canvas
      ========================================================================= */}
      <section id="client-work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-surface-border pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-forest font-bold">
              <span>// 06 — Commercial Track Record</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight uppercase text-ink-primary">
              Client Websites
            </h2>
            <p className="text-sm sm:text-base text-ink-secondary max-w-xl">
              Commercial projects, corporate portals, and e-commerce platforms delivered over 13+ years of client practice.
            </p>
          </div>

          <Link
            href="/client-work"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-forest font-bold hover:underline self-start sm:self-auto"
          >
            <span>View All Client Work</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Client Work Grid: Crisp White Cards on Warm Neutral */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedClients.map((client, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-surface-pure border border-surface-border p-6 space-y-4 shadow-soft hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-ink-forest bg-surface-soft px-2.5 py-1 rounded-full border border-surface-border font-bold">
                    {client.category}
                  </span>
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-surface-soft text-ink-secondary hover:text-ink-primary border border-surface-border transition-colors"
                    aria-label={`Visit ${client.name}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <h3 className="text-lg font-display font-bold text-ink-primary">
                  {client.name}
                </h3>
                <p className="text-xs text-ink-secondary leading-relaxed">
                  {client.description}
                </p>
              </div>

              <div className="pt-3 border-t border-surface-border text-xs font-mono text-ink-secondary">
                <span className="text-ink-primary font-bold">Deliverable:</span> {client.role}
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* =========================================================================
          07 — CLOSING CTA: Dark Charcoal High-Contrast Callout
      ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-4xl bg-surface-charcoal border border-surface-borderCharcoal p-8 sm:p-14 lg:p-20 text-center space-y-8 relative overflow-hidden shadow-darkCard">
          
          <div className="absolute inset-0 dark-dot-grid pointer-events-none opacity-30" />

          <div className="relative space-y-4 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-forest text-accent-lime text-xs font-mono font-bold tracking-widest uppercase border border-surface-borderDark">
              <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
              <span>Available for Remote Opportunities Worldwide</span>
            </span>

            <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-surface-pure uppercase leading-[1.05]">
              Let’s create something <br />
              <span className="text-accent-lime">remarkable.</span>
            </h2>

            <p className="text-base sm:text-lg text-ink-onDarkMuted max-w-xl mx-auto leading-relaxed">
              Open to senior full-stack roles, autonomous agent engineering, and high-impact custom web architecture engagements.
            </p>
          </div>

          <div className="relative flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-lime hover:bg-accent-limeHover text-surface-forest font-display font-bold text-sm tracking-tight transition-all shadow-md hover:scale-[1.02]"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4 text-surface-forest" />
            </Link>

            <a
              href={PERSONAL_INFO.cvPath}
              download={PERSONAL_INFO.cvFileName}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-surface-forest hover:bg-surface-forestDark text-surface-pure border border-surface-borderDark font-mono text-xs font-semibold transition-all shadow-sm"
            >
              <FileDown className="w-4 h-4 text-accent-lime" />
              <span>Download CV (PDF)</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
