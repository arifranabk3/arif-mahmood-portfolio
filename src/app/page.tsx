'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  MousePointer2,
  ChevronDown
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  PROJECTS, 
  EXPERIENCES, 
  CLIENT_WEBSITES,
  ProjectItem
} from '@/data/portfolioData';
import { Variants } from 'framer-motion';

// Animation variants respecting prefers-reduced-motion
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: 'easeOut',
    },
  }),
};

export default function RedesignedHomePage() {
  const featuredProjects = PROJECTS.slice(0, 3);
  const selectedClients = CLIENT_WEBSITES.slice(0, 6);

  return (
    <div className="relative overflow-hidden bg-bg-dark text-text-primary selection:bg-accent selection:text-bg-dark">
      
      {/* Background Interactive Ambient Atmosphere */}
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" />
      <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-150px] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* =========================================================================
          02 — HERO SECTION: Extraordinary Above-the-Fold Creative Presentation
      ========================================================================= */}
      <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Top Badges */}
        <motion.div 
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-wrap items-center gap-3 pt-6 sm:pt-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bg-card border border-white/10 text-xs font-mono text-text-secondary">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-text-primary font-semibold">Arif Mahmood</span>
            <span className="text-white/20">/</span>
            <span>AI-Powered Full-Stack Developer</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-text-secondary">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>Islamabad, Pakistan · Remote Worldwide</span>
          </div>
        </motion.div>

        {/* Main Hero Typography & Portrait Composition */}
        <div className="my-auto py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Oversized Expressive Headline */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tight leading-[0.98] uppercase">
                Building <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-sand-200 to-text-secondary">
                  Digital
                </span> <br />
                <span className="relative inline-block">
                  Experiences
                  <span className="absolute -bottom-2 left-0 w-full h-2 bg-accent/30 rounded-full" />
                </span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-hover to-emerald-400">
                  That Matter.
                </span>
              </h1>
            </motion.div>

            <motion.p 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed"
            >
              I am Arif Mahmood, a Senior Full-Stack Engineer with 13+ years of experience delivering scalable web applications, custom WordPress ecosystems, and modern digital architectures augmented with AI workflows.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-accent hover:bg-accent-hover text-bg-dark font-display font-bold text-sm tracking-tight transition-all duration-300 shadow-accent-glow hover:scale-[1.02]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-bg-card hover:bg-white/10 text-text-primary border border-white/10 hover:border-white/20 font-mono text-xs transition-all"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
              </Link>

              <a
                href={PERSONAL_INFO.cvPath}
                download={PERSONAL_INFO.cvFileName}
                className="inline-flex items-center gap-2 px-5 py-4 rounded-full bg-transparent hover:bg-white/5 text-text-secondary hover:text-text-primary font-mono text-xs transition-all"
              >
                <FileDown className="w-3.5 h-3.5 text-accent" />
                <span>Resume (PDF)</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Interactive Bento Card with Actual Portrait */}
          <motion.div 
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="lg:col-span-5"
          >
            <div className="relative group max-w-md mx-auto lg:max-w-none">
              {/* Creative Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-accent/25 via-emerald-400/10 to-transparent blur-xl opacity-60 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative bg-bg-card border border-white/10 rounded-3xl p-4 sm:p-5 shadow-2xl backdrop-blur-xl space-y-4">
                
                {/* Visual Image Presentation */}
                <div className="relative aspect-[4/4.3] w-full rounded-2xl overflow-hidden bg-bg-dark border border-white/5">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt="Arif Mahmood — AI-Powered Full-Stack Developer"
                    className="w-full h-full object-cover object-top filter brightness-[1.03] contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  
                  {/* Floating Glass Meta Pill */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0B0D0F]/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-display font-bold text-text-primary">Arif Mahmood</p>
                      <p className="text-[10px] font-mono text-text-secondary">Islamabad, PK · Senior Engineer</p>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-accent bg-white/5 px-2.5 py-1 rounded-lg border border-accent/20">
                      13+ Yrs
                    </span>
                  </div>
                </div>

                {/* Micro Metric Ticker */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-bg-dark/80 border border-white/5 text-center">
                    <p className="text-2xl font-display font-extrabold text-accent">13+</p>
                    <p className="text-[10px] font-mono text-text-secondary uppercase tracking-wider mt-0.5">Years Experience</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-bg-dark/80 border border-white/5 text-center">
                    <p className="text-2xl font-display font-extrabold text-text-primary">08</p>
                    <p className="text-[10px] font-mono text-text-secondary uppercase tracking-wider mt-0.5">Software Assets</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Animated Scroll Indicator */}
        <motion.div 
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex items-center justify-between pt-4 border-t border-white/5 text-xs font-mono text-text-muted"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            <span>Next.js App Router · TypeScript · Tailwind CSS</span>
          </div>

          <a 
            href="#projects" 
            className="flex items-center gap-1.5 text-text-secondary hover:text-accent transition-colors"
          >
            <span>Scroll to explore</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </motion.div>

      </section>

      {/* =========================================================================
          03 — FEATURED PROJECTS: Oversized Case-Study Cards (Alternating Layouts)
      ========================================================================= */}
      <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent">
              <span>// 03 — Verified Engineering Assets</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight uppercase">
              Featured Case Studies
            </h2>
            <p className="text-sm sm:text-base text-text-secondary max-w-2xl leading-relaxed">
              Production-grade automotive marketplaces, multi-tenant digital commerce, and corporate applicant tracking systems engineered from architecture to interface.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-accent hover:text-text-primary transition-all self-start sm:self-auto"
          >
            <span>View All 8 Platforms</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Oversized Alternating Project Showcases */}
        <div className="space-y-16 sm:space-y-24">
          {featuredProjects.map((project, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-3xl bg-bg-card border border-white/10 hover:border-white/20 p-6 sm:p-10 lg:p-12 transition-all duration-300 shadow-2xl overflow-hidden"
              >
                {/* Subtle Card Ambient Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/10 transition-colors" />

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Text Specs & Narrative */}
                  <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    {/* Status & Category */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs font-bold text-accent bg-bg-dark px-3 py-1 rounded-md border border-white/10">
                        CASE 0{idx + 1}
                      </span>
                      <span
                        className={`text-[11px] font-mono px-3 py-0.5 rounded-full font-semibold uppercase tracking-wider ${
                          project.status === 'Live'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                            : project.status === 'Development'
                            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                            : 'bg-white/5 text-text-secondary border border-white/10'
                        }`}
                      >
                        ● {project.status}
                      </span>
                      <span className="text-xs font-mono text-text-secondary">
                        {project.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-mono text-text-secondary mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {project.description}
                    </p>

                    {/* Architectural Highlights */}
                    <div className="space-y-2.5 pt-2">
                      <p className="text-xs font-mono uppercase text-text-muted tracking-wider">
                        Verified Implementation:
                      </p>
                      <div className="space-y-1.5 text-xs text-text-secondary">
                        {project.features.slice(0, 3).map((f, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-bg-dark border border-white/5 text-xs font-mono text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-3 pt-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent hover:bg-accent-hover text-bg-dark font-display font-bold text-xs tracking-tight transition-all shadow-sm"
                      >
                        <span>View Project Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full bg-white/5 hover:bg-white/10 text-text-primary border border-white/10 text-xs font-mono transition-all"
                        >
                          <span>Live Deployment</span>
                          <ExternalLink className="w-3.5 h-3.5 text-accent" />
                        </a>
                      )}
                    </div>

                  </div>

                  {/* Right Column: Visual Preview Representation */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl bg-bg-dark border border-white/10 p-5 sm:p-7 space-y-5 shadow-inner">
                      
                      {/* Browser Window Chrome */}
                      <div className="flex items-center justify-between border-b border-white/5 pb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/80" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                          <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <span className="font-mono text-[10px] text-text-muted">
                          {project.slug}.internal.sys
                        </span>
                      </div>

                      {/* Mock Interactive Architecture Screen */}
                      <div className="aspect-[16/10] rounded-xl bg-[#0E1114] border border-white/5 p-5 flex flex-col justify-between">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold">
                              Architecture Blueprint
                            </span>
                            <span className="text-[10px] font-mono text-text-muted">
                              Isolated Monorepo
                            </span>
                          </div>

                          <div className="space-y-2 text-xs font-mono text-text-secondary">
                            {project.architecture.map((arch, aIdx) => (
                              <div key={aIdx} className="flex items-start gap-2">
                                <span className="text-accent">▹</span>
                                <span className="line-clamp-1">{arch}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Metric Badges */}
                        <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/5">
                          {project.metrics?.slice(0, 2).map((m, mIdx) => (
                            <div key={mIdx} className="p-2.5 rounded-lg bg-bg-card/70 border border-white/5">
                              <p className="text-[10px] font-mono text-text-muted">{m.label}</p>
                              <p className="text-xs font-mono font-bold text-text-primary mt-0.5">{m.value}</p>
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
          04 — EXPERTISE BENTO GRID: Unique Visual Treatment per Domain Card
      ========================================================================= */}
      <section id="expertise" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        
        <div className="space-y-3 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent">
            <span>// 04 — Core Competencies</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight uppercase">
            Engineering Expertise
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-xl">
            Specialized engineering capabilities across frontend performance, robust backend APIs, headless content platforms, and AI-assisted workflows.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Full-Stack Web Development (Span 7) */}
          <div className="md:col-span-7 rounded-3xl bg-bg-card border border-white/10 p-8 flex flex-col justify-between space-y-6 hover:border-white/20 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-primary">
                Full-Stack Web Development
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed max-w-md">
                End-to-end web architectures built with React, Next.js 14 (App Router), PHP, Laravel, Node.js, and TypeScript. Optimized for sub-second Core Web Vitals and zero layout shift.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
              {['Next.js', 'React', 'TypeScript', 'Laravel', 'Node.js', 'Tailwind CSS'].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-bg-dark border border-white/5 text-xs font-mono text-text-secondary">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Bento Card 2: SaaS Application Architecture (Span 5) */}
          <div className="md:col-span-5 rounded-3xl bg-bg-card border border-white/10 p-8 flex flex-col justify-between space-y-6 hover:border-white/20 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                <Boxes className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-text-primary">
                SaaS Application Architecture
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Multi-tenant database schema isolation, role-based authorization (RBAC), token rotation, and tenant rewrite routing for enterprise-grade B2B platforms.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-bg-dark/80 border border-white/5 text-xs font-mono text-accent">
              <span>● Strict Tenant Data Segregation</span>
            </div>
          </div>

          {/* Bento Card 3: AI Integration & Automation (Span 5) */}
          <div className="md:col-span-5 rounded-3xl bg-bg-card border border-white/10 p-8 flex flex-col justify-between space-y-6 hover:border-white/20 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-text-primary">
                AI Integration & Automation
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Embedding intelligent AI coding agents and prompt-driven automation workflows into development cycles to accelerate scaffolding and maintain high code quality.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono text-text-secondary">
              <span className="px-3 py-1 rounded-full bg-bg-dark border border-white/5">AI Coding</span>
              <span className="px-3 py-1 rounded-full bg-bg-dark border border-white/5">Workflow Automation</span>
            </div>
          </div>

          {/* Bento Card 4: WordPress & Custom Themes (Span 7) */}
          <div className="md:col-span-7 rounded-3xl bg-bg-card border border-white/10 p-8 flex flex-col justify-between space-y-6 hover:border-white/20 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                <Workflow className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-primary">
                WordPress & Headless CMS Engineering
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed max-w-md">
                13+ years building high-performance bespoke WordPress themes and plugins from scratch without bloated visual builders. Seamless decoupled headless architectures connecting WordPress or Laravel backends to Next.js clients.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
              {['Custom Themes', 'Plugin Development', 'WooCommerce', 'Headless CMS', 'RESTful APIs'].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-bg-dark border border-white/5 text-xs font-mono text-text-secondary">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Bento Card 5: UI/UX Engineering (Span 6) */}
          <div className="md:col-span-6 rounded-3xl bg-bg-card border border-white/10 p-8 space-y-4 hover:border-white/20 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-text-primary">
              UI/UX Design to Production Code
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Converting high-fidelity Figma and Photoshop designs into responsive, accessible, pixel-perfect frontend experiences with bespoke design tokens and subtle micro-interactions.
            </p>
          </div>

          {/* Bento Card 6: RESTful API Engineering (Span 6) */}
          <div className="md:col-span-6 rounded-3xl bg-bg-card border border-white/10 p-8 space-y-4 hover:border-white/20 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-text-primary">
              RESTful API & Integration Engineering
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Architecting secure, well-documented REST APIs in Express.js and Laravel with input sanitization, rate-limiting, and error boundaries protecting external data pipelines.
            </p>
          </div>

        </div>

      </section>

      {/* =========================================================================
          05 — PROFESSIONAL EXPERIENCE: Clean Interactive Career Timeline
      ========================================================================= */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent">
              <span>// 05 — Career Timeline</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight uppercase">
              13+ Years Journey
            </h2>
            <p className="text-sm text-text-secondary max-w-xl">
              Consistent record delivering web applications and custom systems across leading tech companies.
            </p>
          </div>

          <Link
            href="/experience"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline self-start sm:self-auto"
          >
            <span>Detailed Career Record</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-10 ml-3 sm:ml-6 space-y-10">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 ${
                  exp.isCurrent
                    ? 'bg-accent border-accent shadow-accent-glow animate-pulse'
                    : 'bg-bg-dark border-white/20'
                }`}
              />

              <div className="rounded-2xl bg-bg-card border border-white/10 p-6 sm:p-8 space-y-4 hover:border-white/20 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-display font-bold text-text-primary">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-mono text-accent font-semibold">
                      {exp.company} <span className="text-text-muted font-normal">· {exp.location}</span>
                    </p>
                  </div>
                  <span className="text-xs font-mono text-text-secondary px-3 py-1 rounded-full bg-bg-dark border border-white/10 w-fit">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-text-secondary">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-accent font-mono mt-0.5">▹</span>
                      <span className="leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>

                {exp.achievements && (
                  <div className="pt-3 border-t border-white/5 space-y-2">
                    <p className="text-[11px] font-mono uppercase text-text-muted tracking-wider">
                      CV Documented Achievements:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-accent">
                      {exp.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-center gap-2 p-2.5 rounded-xl bg-bg-dark border border-white/5">
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
          06 — SELECTED CLIENT WORK: Verified Commercial References
      ========================================================================= */}
      <section id="client-work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent">
              <span>// 06 — Commercial Track Record</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight uppercase">
              Selected Client Work
            </h2>
            <p className="text-sm text-text-secondary max-w-xl">
              Verified corporate websites, e-commerce storefronts, and healthcare portals documented from CV experience.
            </p>
          </div>

          <Link
            href="/client-work"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline self-start sm:self-auto"
          >
            <span>View All 15 Client References</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedClients.map((client, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-bg-card border border-white/10 p-6 space-y-4 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-accent bg-bg-dark px-2.5 py-0.5 rounded border border-white/10">
                    {client.category}
                  </span>
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-bg-dark text-text-muted hover:text-text-primary border border-white/5 transition-colors"
                    aria-label={`Visit ${client.name}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <h3 className="text-lg font-display font-bold text-text-primary">
                  {client.name}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {client.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 text-xs font-mono text-text-muted">
                <span className="text-text-primary font-medium">Scope:</span> {client.role}
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* =========================================================================
          07 — CLOSING SECTION: Memorable Closing & Working Contact Actions
      ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-b from-bg-card to-bg-dark border border-white/10 p-8 sm:p-14 lg:p-20 text-center space-y-8 relative overflow-hidden shadow-2xl">
          
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-accent">
              // 07 — Initiate Collaboration
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight uppercase leading-[0.98]">
              Let's Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-hover to-emerald-400">
                Something Exceptional.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
              Available for full-time international remote roles, enterprise SaaS architecture, and custom WordPress/Laravel engagements.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent hover:bg-accent-hover text-bg-dark font-display font-bold text-sm tracking-tight transition-all shadow-accent-glow hover:scale-[1.02]"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={PERSONAL_INFO.cvPath}
              download={PERSONAL_INFO.cvFileName}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-text-primary border border-white/10 font-mono text-xs transition-all"
            >
              <FileDown className="w-4 h-4 text-accent" />
              <span>Download CV (PDF)</span>
            </a>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-wrap justify-center gap-6 text-xs font-mono text-text-muted">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-accent transition-colors">
              {PERSONAL_INFO.email}
            </a>
            <span>·</span>
            <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-accent transition-colors">
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
