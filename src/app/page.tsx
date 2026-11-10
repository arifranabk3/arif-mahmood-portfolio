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
  Cpu,
  Workflow,
  Laptop,
  Palette,
  Boxes,
  MapPin,
  Calendar,
  Send,
  ShieldCheck,
  TrendingUp,
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
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: 'easeOut',
    },
  }),
};

export default function RedesignedLightHomePage() {
  const featuredProjects = PROJECTS.slice(0, 3);
  const selectedClients = CLIENT_WEBSITES.slice(0, 6);

  return (
    <div className="relative overflow-hidden bg-canvas text-ink-primary">
      
      {/* Background Ambient Textures */}
      <div className="absolute inset-0 light-dot-grid pointer-events-none opacity-40" />
      <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-accent-green/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-150px] w-[500px] h-[500px] bg-accent-lavender/30 rounded-full blur-[140px] pointer-events-none" />

      {/* =========================================================================
          02 — HERO SECTION: Predominantly Light Editorial Hero with Verified Portrait
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas-pure border border-canvas-border shadow-soft text-xs font-mono text-ink-secondary">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            <span className="text-ink-primary font-semibold">Arif Mahmood</span>
            <span className="text-canvas-border">/</span>
            <span>AI-Powered Full-Stack Developer</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-canvas-soft border border-canvas-border text-xs font-mono text-ink-secondary">
            <MapPin className="w-3.5 h-3.5 text-accent-greenDark" />
            <span>Islamabad, Pakistan · Available Worldwide</span>
          </div>
        </motion.div>

        {/* Main Hero Content Grid */}
        <div className="my-auto py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Expressive Light Typography */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tight leading-[0.98] uppercase text-ink-primary">
                Building <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-greenDark via-ink-primary to-accent-greenDark">
                  Digital
                </span> <br />
                <span className="relative inline-block">
                  Experiences
                  <span className="absolute -bottom-2 left-0 w-full h-2.5 bg-accent-green/40 rounded-full" />
                </span> <br />
                <span className="text-accent-greenDark">
                  That Matter.
                </span>
              </h1>
            </motion.div>

            <motion.p 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-base sm:text-lg text-ink-secondary max-w-xl leading-relaxed"
            >
              I am Arif Mahmood, an AI-powered Full-Stack Developer with 13+ years of experience delivering scalable web applications, enterprise SaaS architectures, and high-performance WordPress systems.
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
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-accent-greenDark hover:bg-accent-greenDarkHover text-canvas-pure font-display font-bold text-sm tracking-tight transition-all duration-300 shadow-card hover:scale-[1.02]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-canvas-pure hover:bg-canvas-soft text-ink-primary border border-canvas-border hover:border-canvas-borderSoft font-mono text-xs transition-all shadow-soft"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent-greenDark" />
              </Link>

              <a
                href={PERSONAL_INFO.cvPath}
                download={PERSONAL_INFO.cvFileName}
                className="inline-flex items-center gap-2 px-5 py-4 rounded-full bg-canvas-soft hover:bg-canvas-pure text-ink-secondary hover:text-ink-primary border border-canvas-border font-mono text-xs transition-all"
              >
                <FileDown className="w-3.5 h-3.5 text-accent-greenDark" />
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
              
              {/* Soft Ambient Pastel Glow */}
              <div className="absolute -inset-1.5 rounded-4xl bg-gradient-to-tr from-accent-green/30 via-accent-lavender/40 to-accent-peach/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative bg-canvas-pure border border-canvas-border rounded-4xl p-4 sm:p-5 shadow-elevated space-y-4">
                
                {/* Real Black Suit Portrait Image */}
                <div className="relative aspect-[4/4.3] w-full rounded-3xl overflow-hidden bg-canvas-soft border border-canvas-borderSoft">
                  <Image
                    src={PERSONAL_INFO.heroImageUrl}
                    alt="Arif Mahmood — AI-Powered Full-Stack Developer"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-top filter brightness-[1.01] group-hover:scale-[1.02] transition-transform duration-500"
                    priority
                  />
                  
                  {/* Floating Glass Pill */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-2xl bg-canvas-pure/92 backdrop-blur-md border border-canvas-border shadow-card flex items-center justify-between">
                    <div>
                      <p className="text-xs font-display font-bold text-ink-primary">Arif Mahmood</p>
                      <p className="text-[10px] font-mono text-ink-secondary">Islamabad, PK · Available for Hire</p>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-accent-greenDark bg-accent-green/20 px-2.5 py-1 rounded-lg border border-accent-green/40">
                      13+ Yrs
                    </span>
                  </div>
                </div>

                {/* Light Micro Metric Badges */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-canvas-soft border border-canvas-borderSoft text-center">
                    <p className="text-2xl font-display font-extrabold text-accent-greenDark">13+</p>
                    <p className="text-[10px] font-mono text-ink-secondary uppercase tracking-wider mt-0.5">Years Experience</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-canvas-soft border border-canvas-borderSoft text-center">
                    <p className="text-2xl font-display font-extrabold text-ink-primary">08</p>
                    <p className="text-[10px] font-mono text-ink-secondary uppercase tracking-wider mt-0.5">Software Assets</p>
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
          className="flex items-center justify-between pt-4 border-t border-canvas-border text-xs font-mono text-ink-muted"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-greenDark" />
            <span>Next.js 14 App Router · TypeScript · Tailwind CSS</span>
          </div>

          <a 
            href="#projects" 
            className="flex items-center gap-1.5 text-ink-secondary hover:text-accent-greenDark transition-colors"
          >
            <span>Explore sections</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </motion.div>

      </section>

      {/* =========================================================================
          03 — FEATURED PROJECTS: High-Impact Oversized Light Project Cards
      ========================================================================= */}
      <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-canvas-border pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-greenDark font-bold">
              <span>// 03 — Software Engineering Assets</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight uppercase text-ink-primary">
              Featured Case Studies
            </h2>
            <p className="text-sm sm:text-base text-ink-secondary max-w-2xl leading-relaxed">
              Production-grade automotive marketplaces, multi-tenant digital commerce, and corporate applicant tracking systems engineered from architecture to interface.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-canvas-pure hover:bg-canvas-soft border border-canvas-border text-xs font-mono text-accent-greenDark font-bold transition-all shadow-soft self-start sm:self-auto"
          >
            <span>View All 8 Platforms</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Alternating Project Cards */}
        <div className="space-y-16 sm:space-y-20">
          {featuredProjects.map((project, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="group relative rounded-4xl bg-canvas-pure border border-canvas-border hover:border-accent-green/60 p-6 sm:p-10 lg:p-12 transition-all duration-300 shadow-card hover:shadow-elevated overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Left Specs & Narrative */}
                  <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs font-bold text-accent-greenDark bg-accent-green/20 px-3 py-1 rounded-md border border-accent-green/40">
                        CASE 0{idx + 1}
                      </span>
                      <span
                        className={`text-[11px] font-mono px-3 py-0.5 rounded-full font-semibold uppercase tracking-wider ${
                          project.status === 'Live'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : project.status === 'Development'
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-canvas-soft text-ink-secondary border border-canvas-border'
                        }`}
                      >
                        ● {project.status}
                      </span>
                      <span className="text-xs font-mono text-ink-muted">
                        {project.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-ink-primary group-hover:text-accent-greenDark transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-mono text-ink-secondary mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                      {project.description}
                    </p>

                    {/* Verified Capabilities */}
                    <div className="space-y-2.5 pt-1">
                      <p className="text-xs font-mono uppercase text-ink-muted tracking-wider">
                        Verified Implementation Highlights:
                      </p>
                      <div className="space-y-1.5 text-xs text-ink-secondary">
                        {project.features.slice(0, 3).map((f, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent-greenDark flex-shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-canvas-soft border border-canvas-borderSoft text-xs font-mono text-ink-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent-greenDark hover:bg-accent-greenDarkHover text-canvas-pure font-display font-bold text-xs tracking-tight transition-all shadow-sm"
                      >
                        <span>View Project Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full bg-canvas-soft hover:bg-canvas-border/50 text-ink-primary border border-canvas-border text-xs font-mono font-medium transition-all"
                        >
                          <span>Live Deployment</span>
                          <ExternalLink className="w-3.5 h-3.5 text-accent-greenDark" />
                        </a>
                      )}
                    </div>

                  </div>

                  {/* Right Column: Visual Architecture Preview */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-3xl bg-canvas-soft border border-canvas-border p-6 sm:p-8 space-y-5 shadow-soft">
                      
                      {/* Window Header */}
                      <div className="flex items-center justify-between border-b border-canvas-border pb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                          <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                          <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                        </div>
                        <span className="font-mono text-[10px] text-ink-muted">
                          {project.slug}.architecture.sys
                        </span>
                      </div>

                      {/* Architecture Blueprint Card */}
                      <div className="aspect-[16/10] rounded-2xl bg-canvas-pure border border-canvas-borderSoft p-6 flex flex-col justify-between shadow-soft">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-accent-greenDark uppercase tracking-wider font-bold">
                              Architecture Blueprint
                            </span>
                            <span className="text-[10px] font-mono text-ink-muted">
                              Isolated Project
                            </span>
                          </div>

                          <div className="space-y-2 text-xs font-mono text-ink-secondary">
                            {project.architecture.map((arch, aIdx) => (
                              <div key={aIdx} className="flex items-start gap-2">
                                <span className="text-accent-greenDark font-bold">▹</span>
                                <span className="line-clamp-1">{arch}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Metric Highlights */}
                        <div className="grid grid-cols-2 gap-2 pt-4 border-t border-canvas-borderSoft">
                          {project.metrics?.slice(0, 2).map((m, mIdx) => (
                            <div key={mIdx} className="p-2.5 rounded-xl bg-canvas-soft/80 border border-canvas-borderSoft">
                              <p className="text-[10px] font-mono text-ink-muted">{m.label}</p>
                              <p className="text-xs font-mono font-bold text-ink-primary mt-0.5">{m.value}</p>
                            </div>
                          ))}
                        </div>
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
          04 — EXPERTISE BENTO GRID: Multi-Color Pastel Bento Layout
      ========================================================================= */}
      <section id="expertise" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        
        <div className="space-y-3 border-b border-canvas-border pb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-greenDark font-bold">
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
          
          {/* Card 1: Full-Stack Web Development (Span 7) - Lavender Subtle Tint */}
          <div className="md:col-span-7 rounded-4xl bg-accent-lavender/50 border border-accent-lavenderBorder p-8 sm:p-10 flex flex-col justify-between space-y-6 hover:shadow-card transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-canvas-pure border border-accent-lavenderBorder flex items-center justify-center text-accent-greenDark shadow-soft">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-ink-primary">
                Full-Stack Web Development
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed max-w-md">
                End-to-end web architectures built with React, Next.js 14 (App Router), PHP, Laravel, Node.js, and TypeScript. Optimized for sub-second Core Web Vitals and zero layout shift.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-accent-lavenderBorder/60">
              {['Next.js', 'React', 'TypeScript', 'Laravel', 'Node.js', 'Tailwind CSS'].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-canvas-pure border border-accent-lavenderBorder text-xs font-mono text-ink-secondary">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: SaaS Application Architecture (Span 5) - Pure White */}
          <div className="md:col-span-5 rounded-4xl bg-canvas-pure border border-canvas-border p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-soft hover:shadow-card transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-canvas-soft border border-canvas-border flex items-center justify-center text-accent-greenDark">
                <Boxes className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-ink-primary">
                SaaS Application Architecture
              </h3>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                Multi-tenant database schema isolation, role-based authorization (RBAC), token rotation, and tenant rewrite routing for enterprise-grade B2B platforms.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-canvas-soft border border-canvas-border text-xs font-mono text-accent-greenDark font-bold">
              <span>● Strict Tenant Data Segregation</span>
            </div>
          </div>

          {/* Card 3: AI Integration & Automation (Span 5) - Peach Subtle Tint */}
          <div className="md:col-span-5 rounded-4xl bg-accent-peach/50 border border-accent-peachBorder p-8 sm:p-10 flex flex-col justify-between space-y-6 hover:shadow-card transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-canvas-pure border border-accent-peachBorder flex items-center justify-center text-accent-greenDark shadow-soft">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-ink-primary">
                AI Integration & Automation
              </h3>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                Embedding intelligent AI coding agents and prompt-driven automation workflows into development cycles to accelerate scaffolding and maintain high code quality.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono text-ink-secondary">
              <span className="px-3 py-1 rounded-full bg-canvas-pure border border-accent-peachBorder">AI Coding</span>
              <span className="px-3 py-1 rounded-full bg-canvas-pure border border-accent-peachBorder">Workflow Automation</span>
            </div>
          </div>

          {/* Card 4: WordPress & Custom Themes (Span 7) - Soft Green */}
          <div className="md:col-span-7 rounded-4xl bg-canvas-soft border border-canvas-border p-8 sm:p-10 flex flex-col justify-between space-y-6 hover:shadow-card transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-canvas-pure border border-canvas-border flex items-center justify-center text-accent-greenDark shadow-soft">
                <Workflow className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-ink-primary">
                WordPress & Headless CMS Engineering
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed max-w-md">
                13+ years building high-performance bespoke WordPress themes and plugins from scratch without bloated visual builders. Seamless decoupled headless architectures connecting WordPress or Laravel backends to Next.js clients.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-canvas-border">
              {['Custom Themes', 'Plugin Development', 'WooCommerce', 'Headless CMS', 'RESTful APIs'].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-canvas-pure border border-canvas-border text-xs font-mono text-ink-secondary">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 5: UI/UX Engineering (Span 6) */}
          <div className="md:col-span-6 rounded-4xl bg-canvas-pure border border-canvas-border p-8 sm:p-10 space-y-4 shadow-soft hover:shadow-card transition-all">
            <div className="w-12 h-12 rounded-2xl bg-canvas-soft border border-canvas-border flex items-center justify-center text-accent-greenDark">
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
          <div className="md:col-span-6 rounded-4xl bg-canvas-pure border border-canvas-border p-8 sm:p-10 space-y-4 shadow-soft hover:shadow-card transition-all">
            <div className="w-12 h-12 rounded-2xl bg-canvas-soft border border-canvas-border flex items-center justify-center text-accent-greenDark">
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
          05 — PROFESSIONAL EXPERIENCE: Clean Vertical Career Timeline
      ========================================================================= */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-canvas-border pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-greenDark font-bold">
              <span>// 05 — Chronological Timeline</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight uppercase text-ink-primary">
              13+ Years Journey
            </h2>
            <p className="text-sm text-ink-secondary max-w-xl">
              Consistent record delivering web applications and custom systems across leading tech companies.
            </p>
          </div>

          <Link
            href="/experience"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-greenDark font-bold hover:underline self-start sm:self-auto"
          >
            <span>Detailed Career Record</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l-2 border-canvas-border pl-6 sm:pl-10 ml-3 sm:ml-6 space-y-10">
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
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 ${
                  exp.isCurrent
                    ? 'bg-accent-green border-accent-greenDark shadow-glowGreen animate-pulse'
                    : 'bg-canvas-pure border-canvas-border'
                }`}
              />

              <div className="rounded-3xl bg-canvas-pure border border-canvas-border p-6 sm:p-8 space-y-4 shadow-soft hover:shadow-card transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-display font-bold text-ink-primary">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-mono text-accent-greenDark font-bold">
                      {exp.company} <span className="text-ink-muted font-normal">· {exp.location}</span>
                    </p>
                  </div>
                  <span className="text-xs font-mono text-ink-secondary px-3 py-1 rounded-full bg-canvas-soft border border-canvas-borderSoft w-fit">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-ink-secondary">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-accent-greenDark font-mono mt-0.5">▹</span>
                      <span className="leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>

                {exp.achievements && (
                  <div className="pt-3 border-t border-canvas-borderSoft space-y-2">
                    <p className="text-[11px] font-mono uppercase text-ink-muted tracking-wider">
                      CV Documented Achievements:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-accent-greenDark font-semibold">
                      {exp.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-center gap-2 p-2.5 rounded-xl bg-accent-green/15 border border-accent-green/30">
                          <TrendingUp className="w-3.5 h-3.5 flex-shrink-0" />
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

      </section>

      {/* =========================================================================
          06 — SELECTED CLIENT WORK: Verified Commercial Track Record
      ========================================================================= */}
      <section id="client-work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-canvas-border pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-greenDark font-bold">
              <span>// 06 — Commercial Track Record</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight uppercase text-ink-primary">
              Selected Client Work
            </h2>
            <p className="text-sm text-ink-secondary max-w-xl">
              Verified corporate websites, e-commerce storefronts, and healthcare portals documented from CV experience.
            </p>
          </div>

          <Link
            href="/client-work"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-greenDark font-bold hover:underline self-start sm:self-auto"
          >
            <span>View All 15 Client References</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedClients.map((client, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-canvas-pure border border-canvas-border p-6 space-y-4 shadow-soft hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-accent-greenDark bg-accent-green/20 px-2.5 py-0.5 rounded border border-accent-green/40 font-bold">
                    {client.category}
                  </span>
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-canvas-soft text-ink-secondary hover:text-ink-primary border border-canvas-border transition-colors"
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

              <div className="pt-3 border-t border-canvas-borderSoft text-xs font-mono text-ink-muted">
                <span className="text-ink-primary font-medium">Scope:</span> {client.role}
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* =========================================================================
          07 — CLOSING SECTION: Dark Contrast Closing Callout
      ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-4xl bg-canvas-dark border border-canvas-darkCard p-8 sm:p-14 lg:p-20 text-center space-y-8 relative overflow-hidden shadow-elevated">
          
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-green font-bold">
              // 07 — Initiate Collaboration
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight uppercase leading-[0.98] text-canvas-pure">
              Let's Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-green via-emerald-300 to-accent-green">
                Something Exceptional.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-ink-inverse/80 max-w-xl mx-auto leading-relaxed">
              Available for full-time international remote roles, enterprise SaaS architecture, and custom WordPress/Laravel engagements.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-green hover:bg-accent-greenHover text-canvas-dark font-display font-bold text-sm tracking-tight transition-all shadow-glowGreen hover:scale-[1.02]"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={PERSONAL_INFO.cvPath}
              download={PERSONAL_INFO.cvFileName}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-canvas-pure border border-white/15 font-mono text-xs transition-all"
            >
              <FileDown className="w-4 h-4 text-accent-green" />
              <span>Download CV (PDF)</span>
            </a>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6 text-xs font-mono text-ink-inverse/60">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-accent-green transition-colors">
              {PERSONAL_INFO.email}
            </a>
            <span>·</span>
            <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-accent-green transition-colors">
              {PERSONAL_INFO.phone}
            </a>
            <span>·</span>
            <span>Islamabad, Pakistan</span>
          </div>

        </div>
      </section>

    </div>
  );
}
