'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle, FileDown, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState(''); // anti-spam
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to send message. Please try again.');
      }

      setSuccess(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err: any) {
      setError(err?.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Header Section */}
      <div className="border-b border-surface-border pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-soft border border-surface-border text-xs font-mono font-medium text-ink-forest font-bold">
          <Sparkles className="w-3.5 h-3.5 text-accent-forest" />
          <span>Direct Communication</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-ink-primary tracking-tight">
          Let’s Work Together
        </h1>
        <p className="text-base sm:text-lg text-ink-secondary max-w-2xl leading-relaxed">
          Have an upcoming project, open engineering role, or custom WordPress/Laravel requirement? Reach out directly via the form or contact coordinates below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Column: Contact Form (Crisp White Surface) */}
        <div className="lg:col-span-7 bg-surface-pure border border-surface-border rounded-4xl p-6 sm:p-10 space-y-6 shadow-card">
          
          {success && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 flex items-start gap-3 text-emerald-950 text-xs sm:text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-bold text-emerald-950">Message Sent Successfully!</p>
                <p className="text-emerald-900 leading-relaxed">
                  Thank you for reaching out. Arif has received your message and will reply shortly.
                </p>
              </div>
            </div>
          )}

          {error && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-300 flex items-start gap-3 text-rose-950 text-xs sm:text-sm">
              <AlertCircle className="w-5 h-5 text-rose-700 flex-shrink-0 mt-0.5" />
              <span className="font-medium">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot hidden input */}
            <input
              type="text"
              name="company_fax"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label htmlFor="name" className="block text-xs font-mono text-ink-primary mb-2 font-bold uppercase tracking-wider">
                Your Full Name <span className="text-rose-600">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sarah Jenkins"
                className="w-full px-4 py-3.5 rounded-2xl bg-surface-canvas border border-surface-border text-ink-primary placeholder:text-ink-secondary text-sm focus:outline-none focus:border-surface-forest focus:bg-surface-pure transition-colors font-medium"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono text-ink-primary mb-2 font-bold uppercase tracking-wider">
                Work Email Address <span className="text-rose-600">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. sarah@company.com"
                className="w-full px-4 py-3.5 rounded-2xl bg-surface-canvas border border-surface-border text-ink-primary placeholder:text-ink-secondary text-sm focus:outline-none focus:border-surface-forest focus:bg-surface-pure transition-colors font-medium"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-mono text-ink-primary mb-2 font-bold uppercase tracking-wider">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Next.js SaaS Project / Remote Role"
                className="w-full px-4 py-3.5 rounded-2xl bg-surface-canvas border border-surface-border text-ink-primary placeholder:text-ink-secondary text-sm focus:outline-none focus:border-surface-forest focus:bg-surface-pure transition-colors font-medium"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-ink-primary mb-2 font-bold uppercase tracking-wider">
                Your Message <span className="text-rose-600">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your project, timeline, and requirements..."
                className="w-full px-4 py-3.5 rounded-2xl bg-surface-canvas border border-surface-border text-ink-primary placeholder:text-ink-secondary text-sm focus:outline-none focus:border-surface-forest focus:bg-surface-pure transition-colors font-medium"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-surface-forest hover:bg-surface-forestDark disabled:opacity-50 text-surface-pure font-bold text-sm tracking-tight transition-all shadow-md hover:scale-[1.01]"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-accent-lime" />
                  <span>Transmitting Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4 text-accent-lime" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Column: Direct Info (Deep Forest Green Surface - 25% Balance Anchor) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-surface-forest border border-surface-borderDark text-surface-pure rounded-4xl p-6 sm:p-8 space-y-6 shadow-darkCard">
            <div className="space-y-1">
              <span className="text-xs font-mono text-accent-lime uppercase tracking-widest font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
                <span>// Direct Coordinates</span>
              </span>
              <h2 className="text-2xl font-display font-bold text-surface-pure">
                Contact Information
              </h2>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-surface-forestDark border border-surface-borderDark">
                <Mail className="w-4 h-4 text-accent-lime flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-ink-onDarkMuted block text-[10px] uppercase font-bold">Email</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-surface-pure font-bold hover:text-accent-lime text-xs break-all">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-surface-forestDark border border-surface-borderDark">
                <Phone className="w-4 h-4 text-accent-lime flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-ink-onDarkMuted block text-[10px] uppercase font-bold">Phone / WhatsApp</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-surface-pure font-bold hover:text-accent-lime text-xs">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-surface-forestDark border border-surface-borderDark">
                <MapPin className="w-4 h-4 text-accent-lime flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-ink-onDarkMuted block text-[10px] uppercase font-bold">Location</span>
                  <span className="text-surface-pure font-bold text-xs">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-surface-borderDark space-y-3">
              <p className="text-xs text-ink-onDarkMuted leading-relaxed">
                Looking for an immediate overview of my technical qualifications and career timeline?
              </p>
              <a
                href={PERSONAL_INFO.cvPath}
                download={PERSONAL_INFO.cvFileName}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-surface-forestDark hover:bg-surface-charcoal text-surface-pure border border-surface-borderDark text-xs font-mono font-bold transition-all shadow-sm"
              >
                <FileDown className="w-4 h-4 text-accent-lime" />
                <span>Download Official CV (PDF)</span>
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
