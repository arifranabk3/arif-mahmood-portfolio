'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle, FileDown } from 'lucide-react';
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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="border-b border-charcoal-800 pb-8 space-y-4">
        <span className="text-xs font-mono tracking-widest text-lime-400 uppercase">
          // Direct Communication
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-sand-50 tracking-tight">
          Let’s Work Together
        </h1>
        <p className="text-base sm:text-lg text-charcoal-300 max-w-2xl leading-relaxed">
          Have an upcoming project, open engineering role, or custom WordPress/Laravel requirement? Reach out directly via the form or contact coordinates below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-7 bg-charcoal-900 border border-charcoal-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-editorial">
          
          {success && (
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-emerald-400 text-xs sm:text-sm">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold text-sand-50">Message Sent Successfully!</p>
                <p className="text-charcoal-300">
                  Thank you for reaching out. Arif has received your message and will reply shortly.
                </p>
              </div>
            </div>
          )}

          {error && (
            <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-400 text-xs sm:text-sm">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
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
              <label htmlFor="name" className="block text-xs font-mono text-charcoal-300 mb-2">
                Your Full Name <span className="text-lime-400">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sarah Jenkins"
                className="w-full px-4 py-3 rounded-xl bg-charcoal-950 border border-charcoal-800 text-sand-50 placeholder-charcoal-600 text-sm focus:outline-none focus:border-lime-400 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono text-charcoal-300 mb-2">
                Work Email Address <span className="text-lime-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. sarah@company.com"
                className="w-full px-4 py-3 rounded-xl bg-charcoal-950 border border-charcoal-800 text-sand-50 placeholder-charcoal-600 text-sm focus:outline-none focus:border-lime-400 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-mono text-charcoal-300 mb-2">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Next.js SaaS Project / Remote Role"
                className="w-full px-4 py-3 rounded-xl bg-charcoal-950 border border-charcoal-800 text-sand-50 placeholder-charcoal-600 text-sm focus:outline-none focus:border-lime-400 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-charcoal-300 mb-2">
                Your Message <span className="text-lime-400">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your project, timeline, and requirements..."
                className="w-full px-4 py-3 rounded-xl bg-charcoal-950 border border-charcoal-800 text-sand-50 placeholder-charcoal-600 text-sm focus:outline-none focus:border-lime-400 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-lime-400 hover:bg-lime-500 disabled:opacity-50 text-charcoal-950 font-bold text-sm tracking-tight transition-all shadow-lime-glow"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transmitting Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Column: Direct Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-charcoal-900 border border-charcoal-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-display font-bold text-sand-50">
              Direct Contact Coordinates
            </h2>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-charcoal-950 border border-charcoal-800">
                <Mail className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-charcoal-500 block text-[10px] uppercase">Email</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sand-50 font-semibold hover:text-lime-400">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-charcoal-950 border border-charcoal-800">
                <Phone className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-charcoal-500 block text-[10px] uppercase">Phone / WhatsApp</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sand-50 font-semibold hover:text-lime-400">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-charcoal-950 border border-charcoal-800">
                <MapPin className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-charcoal-500 block text-[10px] uppercase">Location</span>
                  <span className="text-sand-50 font-semibold">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-charcoal-800 space-y-3">
              <p className="text-xs text-charcoal-400">
                Looking for an immediate overview of my technical qualifications and career timeline?
              </p>
              <a
                href={PERSONAL_INFO.cvPath}
                download={PERSONAL_INFO.cvFileName}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-charcoal-950 hover:bg-charcoal-850 text-sand-50 border border-charcoal-700 text-xs font-mono transition-all"
              >
                <FileDown className="w-4 h-4 text-lime-400" />
                <span>Download Official CV (PDF)</span>
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

