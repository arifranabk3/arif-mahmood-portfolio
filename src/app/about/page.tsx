import type { Metadata } from 'next';
import Link from 'next/link';
import { FileDown, MapPin, Mail, Phone, Calendar, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: 'About Arif Mahmood — AI-Powered Full-Stack Developer',
  description:
    'Professional background, philosophy, and education of Arif Mahmood, an AI-powered full-stack developer with 13+ years of experience based in Islamabad, Pakistan.',
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="border-b border-charcoal-800 pb-8 space-y-4">
        <span className="text-xs font-mono tracking-widest text-lime-400 uppercase">
          // Profile & Background
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-sand-50 tracking-tight">
          About Arif Mahmood
        </h1>
        <p className="text-xl font-mono text-lime-400 font-medium">
          {PERSONAL_INFO.roleTitle}
        </p>
      </div>

      {/* Main Bio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Narrative */}
        <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-charcoal-300 leading-relaxed">
          <p>
            I am a senior AI-powered Full-Stack Developer with over <span className="text-sand-50 font-semibold">13 years of professional experience</span> architecting and delivering responsive websites, enterprise SaaS applications, and high-performance digital platforms.
          </p>

          <p>
            My engineering expertise spans the full stack: modern reactive frontends with <span className="text-sand-50 font-semibold">React, Next.js, and TypeScript</span>, resilient backend architectures with <span className="text-sand-50 font-semibold">PHP, Laravel, Node.js, and Express</span>, as well as bespoke WordPress ecosystems (custom themes, plugins, and headless CMS integrations).
          </p>

          <p>
            Over the course of my career—spanning leadership and developer roles at <span className="text-sand-50 font-semibold">Zam Solutions, Spearhead Technology, Irtifa Group, and Global Technology Coverage</span>—I have focused on delivering clean code, optimizing Core Web Vitals, and translating complex business requirements into intuitive user experiences.
          </p>

          <p>
            Today, I leverage modern <span className="text-sand-50 font-semibold">AI-augmented development workflows</span> to accelerate prototyping, automate boilerplate tasks, and ensure high code quality across large-scale software projects.
          </p>

          {/* Education Block */}
          <div className="pt-6 border-t border-charcoal-800 space-y-3">
            <h2 className="text-xl font-display font-bold text-sand-50 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-lime-400" />
              <span>Formal Education</span>
            </h2>
            <div className="p-5 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-1">
              <p className="text-sand-50 font-semibold text-base">{PERSONAL_INFO.education.degree}</p>
              <p className="text-charcoal-400 text-xs font-mono">{PERSONAL_INFO.education.institution}</p>
              <p className="text-lime-400 text-xs font-mono">{PERSONAL_INFO.education.years}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Fast Info Card */}
        <div className="lg:col-span-4 bg-charcoal-900 border border-charcoal-800 rounded-2xl p-6 sm:p-7 space-y-6 shadow-editorial">
          <p className="text-xs font-mono text-charcoal-400 uppercase tracking-wider">
            Quick Facts
          </p>

          <div className="space-y-4 text-xs font-mono">
            <div>
              <span className="text-charcoal-500">Location</span>
              <p className="text-sand-50 font-semibold mt-0.5">{PERSONAL_INFO.location}</p>
            </div>

            <div>
              <span className="text-charcoal-500">Experience</span>
              <p className="text-sand-50 font-semibold mt-0.5">{PERSONAL_INFO.experienceYears} Years (Since 2013)</p>
            </div>

            <div>
              <span className="text-charcoal-500">Primary Email</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lime-400 font-semibold hover:underline block mt-0.5 break-all">
                {PERSONAL_INFO.email}
              </a>
            </div>

            <div>
              <span className="text-charcoal-500">Phone / WhatsApp</span>
              <p className="text-sand-50 font-semibold mt-0.5">{PERSONAL_INFO.phone}</p>
            </div>

            <div>
              <span className="text-charcoal-500">Availability</span>
              <p className="text-lime-400 font-semibold mt-0.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                <span>Open to Remote & Contracts</span>
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-charcoal-800 space-y-2">
            <a
              href={PERSONAL_INFO.cvPath}
              download={PERSONAL_INFO.cvFileName}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-charcoal-950 hover:bg-charcoal-800 text-sand-50 border border-charcoal-700 text-xs font-mono transition-all"
            >
              <FileDown className="w-4 h-4 text-lime-400" />
              <span>Download CV (PDF)</span>
            </a>

            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-1.5 py-3 rounded-xl bg-lime-400 hover:bg-lime-500 text-charcoal-950 font-bold text-xs tracking-tight transition-all shadow-lime-glow"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}

