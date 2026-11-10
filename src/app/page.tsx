import React from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  FileDown, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Globe, 
  Layers, 
  ExternalLink, 
  Code2 as Github, 
  Sparkles, 
  TrendingUp, 
  Briefcase, 
  ArrowRight
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  PROJECTS, 
  EXPERIENCES, 
  SKILL_CATEGORIES, 
  CLIENT_WEBSITES, 
  SERVICES 
} from '@/data/portfolioData';

export default function HomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const selectedClientSites = CLIENT_WEBSITES.slice(0, 6);

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      
      {/* =========================================================================
          HERO SECTION — Editorial Asymmetric Composition
      ========================================================================= */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-charcoal-800">
        
        {/* Ambient Subtle Grid & Radial Glow */}
        <div className="absolute inset-0 editorial-grid pointer-events-none opacity-40" />
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-lime-400/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-charcoal-900 border border-charcoal-700 text-xs font-mono text-charcoal-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span className="text-sand-50 font-semibold">{PERSONAL_INFO.experienceYears} Years</span>
            <span className="text-charcoal-500">/</span>
            <span>AI-Augmented Full-Stack Engineering</span>
          </div>

          {/* Main Editorial Headline & Asymmetric Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-sand-50 tracking-tight leading-[1.06]">
                Building Digital Products That Solve{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400">
                  Real Business Problems.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-charcoal-300 leading-relaxed max-w-2xl font-normal">
                {PERSONAL_INFO.supportingText}
              </p>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-lime-400 hover:bg-lime-500 text-charcoal-950 font-bold text-sm tracking-tight transition-all shadow-lime-glow hover:translate-y-[-1px]"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={PERSONAL_INFO.cvPath}
                  download={PERSONAL_INFO.cvFileName}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-sand-50 border border-charcoal-700 hover:border-charcoal-600 font-mono text-xs transition-all"
                >
                  <FileDown className="w-4 h-4 text-lime-400" />
                  <span>Download CV</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-transparent hover:bg-charcoal-900 text-charcoal-300 hover:text-sand-50 font-medium text-xs border border-transparent hover:border-charcoal-700 transition-all"
                >
                  <span>Let’s Work Together</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-lime-400" />
                </Link>
              </div>
            </div>

            {/* Professional Portrait & Interactive Profile Card */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Image Frame with Editorial Lime Accent */}
              <div className="relative group mx-auto max-w-sm lg:max-w-none">
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-lime-400/40 via-emerald-400/20 to-transparent blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />
                
                <div className="relative bg-charcoal-900 border border-charcoal-700 rounded-3xl p-3 overflow-hidden shadow-editorial">
                  <div className="relative w-full aspect-[4/4.5] sm:aspect-[4/4.2] rounded-2xl overflow-hidden bg-charcoal-950">
                    <img
                      src={PERSONAL_INFO.avatarUrl}
                      alt="Arif Mahmood — AI-Powered Full-Stack Developer"
                      className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    
                    {/* Floating Status Badge */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#090A0C]/90 backdrop-blur-md border border-charcoal-700/80 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-pulse" />
                        <div>
                          <p className="text-xs font-display font-bold text-sand-50">Arif Mahmood</p>
                          <p className="text-[10px] font-mono text-charcoal-400">Islamabad, PK · Available for Hire</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-lime-400 bg-charcoal-900 px-2 py-0.5 rounded border border-charcoal-700">
                        13+ Yrs
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Metrics Terminal */}
              <div className="bg-charcoal-900/90 border border-charcoal-800 rounded-2xl p-5 space-y-4 shadow-editorial backdrop-blur">
                <div className="flex items-center justify-between border-b border-charcoal-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-mono text-[10px] text-charcoal-400 uppercase tracking-widest">
                    verified_engineer.sys
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 bg-charcoal-950/60 rounded-xl border border-charcoal-800">
                    <p className="text-2xl font-display font-extrabold text-lime-400">13+</p>
                    <p className="text-[10px] font-mono text-charcoal-400 uppercase mt-0.5">Years Experience</p>
                  </div>
                  <div className="p-3 bg-charcoal-950/60 rounded-xl border border-charcoal-800">
                    <p className="text-2xl font-display font-extrabold text-sand-50">08</p>
                    <p className="text-[10px] font-mono text-charcoal-400 uppercase mt-0.5">Software Assets</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          FEATURED SOFTWARE PROJECTS (Live & In-Dev Platforms)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-charcoal-800 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-widest text-lime-400 uppercase">
              // Proven Engineering Capability
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-sand-50 tracking-tight">
              Featured Software Projects
            </h2>
            <p className="text-sm text-charcoal-400 max-w-xl">
              Independent SaaS platforms, automotive marketplaces, and recruitment software engineered from database to interface.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-lime-400 hover:text-lime-300 font-semibold"
          >
            <span>View All 8 Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Asymmetrical Project Cards */}
        <div className="space-y-10">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`group bg-charcoal-900 border border-charcoal-800 hover:border-charcoal-700 rounded-3xl p-6 sm:p-10 transition-all shadow-editorial ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left/Right Text Specs */}
                <div className="lg:col-span-7 space-y-6">
                  
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs font-bold text-lime-400 px-2.5 py-1 rounded-md bg-charcoal-950 border border-charcoal-800">
                      PROJECT {project.number}
                    </span>
                    <span
                      className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider ${
                        project.status === 'Live'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : project.status === 'Development'
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                          : 'bg-charcoal-800 text-charcoal-400 border border-charcoal-700'
                      }`}
                    >
                      ● {project.status}
                    </span>
                    <span className="text-xs font-mono text-charcoal-400">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-sand-50 group-hover:text-lime-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-mono text-charcoal-400 mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-charcoal-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <p className="text-xs font-mono uppercase text-charcoal-400 tracking-wider">
                      Core Implemented Architecture:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal-300">
                      {project.features.slice(0, 4).map((f, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-charcoal-950 border border-charcoal-800 text-[11px] font-mono text-charcoal-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-sand-50 font-mono text-xs font-medium transition-all"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 text-lime-400" />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-500 text-charcoal-950 font-bold text-xs transition-all shadow-lime-glow"
                      >
                        <span>Launch Live App</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-charcoal-950 hover:bg-charcoal-800 text-charcoal-300 hover:text-sand-50 border border-charcoal-800 text-xs font-mono transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>

                </div>

                {/* Right Interactive Mock Display */}
                <div className="lg:col-span-5 bg-charcoal-950 border border-charcoal-800 rounded-2xl p-6 sm:p-8 space-y-6">
                  <div className="space-y-4">
                    <p className="text-xs font-mono text-charcoal-400 uppercase tracking-wider">
                      Technical Verification
                    </p>
                    <div className="space-y-3">
                      {project.metrics?.map((m, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3 rounded-xl bg-charcoal-900 border border-charcoal-800 text-xs font-mono"
                        >
                          <span className="text-charcoal-400">{m.label}</span>
                          <span className="text-sand-50 font-bold">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-charcoal-900/50 border border-charcoal-800 text-xs text-charcoal-400 space-y-2">
                    <p className="text-sand-50 font-mono font-semibold">Strict Project Isolation</p>
                    <p className="text-[11px] leading-relaxed">
                      Independent codebase, dedicated MongoDB database, and isolated Next.js deployment.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          CAREER TIMELINE & PROVEN HISTORY
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-charcoal-800 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-widest text-lime-400 uppercase">
              // Continuous Professional Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-sand-50 tracking-tight">
              13+ Years of Career Experience
            </h2>
            <p className="text-sm text-charcoal-400 max-w-xl">
              Consistent record delivering web applications, custom CMS solutions, and responsive interfaces across leading software companies.
            </p>
          </div>

          <Link
            href="/experience"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-lime-400 hover:text-lime-300 font-semibold"
          >
            <span>Complete Experience Breakdown</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="relative border-l border-charcoal-800 pl-6 sm:pl-10 ml-3 sm:ml-6 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 ${
                  exp.isCurrent
                    ? 'bg-lime-400 border-lime-400 shadow-lime-glow animate-pulse'
                    : 'bg-charcoal-900 border-charcoal-700'
                }`}
              />

              <div className="bg-charcoal-900/60 border border-charcoal-800 hover:border-charcoal-700 rounded-2xl p-6 sm:p-8 space-y-4 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-sand-50">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-mono text-lime-400 font-semibold">
                      {exp.company} <span className="text-charcoal-500 font-normal">· {exp.location}</span>
                    </p>
                  </div>
                  <span className="text-xs font-mono text-charcoal-400 px-3 py-1 rounded-full bg-charcoal-950 border border-charcoal-800 w-fit">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-charcoal-300">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-lime-400 font-mono mt-1">▹</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                {exp.achievements && (
                  <div className="pt-3 border-t border-charcoal-800/80 space-y-2">
                    <p className="text-[11px] font-mono uppercase text-charcoal-400 tracking-wider">
                      CV Documented Achievements:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-lime-300">
                      {exp.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-center gap-2 p-2 rounded-lg bg-charcoal-950 border border-charcoal-800">
                          <TrendingUp className="w-3.5 h-3.5 text-lime-400 flex-shrink-0" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          TECHNICAL SKILLS MATRIX (Categorized, Honest, No Fake %)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-charcoal-800 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-widest text-lime-400 uppercase">
              // Core Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-sand-50 tracking-tight">
              Technical Skills & Tooling
            </h2>
            <p className="text-sm text-charcoal-400 max-w-xl">
              Strictly reflects the skills, frameworks, and CMS ecosystems documented in the official CV.
            </p>
          </div>

          <Link
            href="/skills"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-lime-400 hover:text-lime-300 font-semibold"
          >
            <span>Explore Skill Categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-charcoal-900 border border-charcoal-800 rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div>
                <h3 className="text-lg font-display font-bold text-sand-50">
                  {cat.category}
                </h3>
                <p className="text-xs text-charcoal-400 mt-1">
                  {cat.tagline}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                      skill.highlight
                        ? 'bg-charcoal-950 text-lime-400 border border-lime-400/30'
                        : 'bg-charcoal-950/60 text-charcoal-300 border border-charcoal-800'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SELECTED PREVIOUS CLIENT WEBSITES (Referenced From CV)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-charcoal-800 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-widest text-lime-400 uppercase">
              // Client & Enterprise Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-sand-50 tracking-tight">
              Selected Client Websites
            </h2>
            <p className="text-sm text-charcoal-400 max-w-xl">
              Past client websites and portal deliveries documented in the CV across corporate, e-commerce, and healthcare sectors.
            </p>
          </div>

          <Link
            href="/client-work"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-lime-400 hover:text-lime-300 font-semibold"
          >
            <span>View All Client References</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedClientSites.map((site, idx) => (
            <div
              key={idx}
              className="group bg-charcoal-900 border border-charcoal-800 hover:border-charcoal-700 rounded-2xl p-6 space-y-4 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-lime-400 uppercase px-2 py-0.5 rounded bg-charcoal-950 border border-charcoal-800">
                  {site.category}
                </span>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-charcoal-950 text-charcoal-400 hover:text-sand-50 border border-charcoal-800"
                  aria-label={`Visit ${site.name}`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div>
                <h3 className="text-lg font-display font-bold text-sand-50 group-hover:text-lime-400 transition-colors">
                  {site.name}
                </h3>
                <p className="text-xs font-mono text-charcoal-400">
                  {site.url.replace('https://', '')}
                </p>
              </div>

              <p className="text-xs text-charcoal-300 leading-relaxed">
                {site.description}
              </p>

              <div className="pt-2 border-t border-charcoal-800/80 text-[11px] font-mono text-charcoal-400">
                <span className="text-sand-50 font-semibold">Scope:</span> {site.role}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SERVICES & CAPABILITIES
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="border-b border-charcoal-800 pb-6 space-y-2">
          <span className="text-xs font-mono tracking-widest text-lime-400 uppercase">
            // Engagement Opportunities
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-sand-50 tracking-tight">
            How I Can Help Your Team
          </h2>
          <p className="text-sm text-charcoal-400 max-w-xl">
            Contract, freelance, and full-time technical contributions tailored for modern product teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv, idx) => (
            <div
              key={idx}
              className="bg-charcoal-900 border border-charcoal-800 rounded-2xl p-6 sm:p-7 space-y-4 hover:border-charcoal-700 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-charcoal-950 border border-charcoal-800 flex items-center justify-center text-lime-400 font-mono text-xs font-bold">
                0{idx + 1}
              </div>
              <h3 className="text-base font-display font-bold text-sand-50">
                {srv.title}
              </h3>
              <p className="text-xs text-charcoal-300 leading-relaxed">
                {srv.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {srv.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-charcoal-950 border border-charcoal-800 text-charcoal-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          EDITORIAL CONCLUDING BANNER
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-charcoal-900 via-charcoal-850 to-charcoal-900 border border-charcoal-800 rounded-3xl p-8 sm:p-12 lg:p-16 text-center space-y-6 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-lime-400">
              // Direct Engagement
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-sand-50 tracking-tight">
              Ready to accelerate your next release?
            </h2>
            <p className="text-sm text-charcoal-300">
              Download my official CV or reach out directly to schedule a conversation about your technical roadmap.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-lime-400 hover:bg-lime-500 text-charcoal-950 font-bold text-sm tracking-tight transition-all shadow-lime-glow"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={PERSONAL_INFO.cvPath}
              download={PERSONAL_INFO.cvFileName}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-charcoal-950 hover:bg-charcoal-800 text-sand-50 border border-charcoal-700 font-mono text-xs transition-all"
            >
              <FileDown className="w-4 h-4 text-lime-400" />
              <span>Download CV (Original PDF)</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
