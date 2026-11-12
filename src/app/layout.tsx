import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '@/app/globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { PERSONAL_INFO } from '@/data/portfolioData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#F1F0E9',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://arifmahmood.dev'),
  title: {
    default: 'Arif Mahmood — Senior AI-Powered Full-Stack Developer (13+ Years Experience)',
    template: '%s | Arif Mahmood Portfolio',
  },
  description:
    'Senior AI-Powered Full-Stack Developer with 13+ years of experience delivering responsive websites, scalable web applications, custom WordPress/Laravel solutions, and modern digital architectures.',
  keywords: [
    'Arif Mahmood',
    'Full-Stack Developer',
    'AI-Powered Developer',
    'Next.js Developer',
    'React Developer',
    'Laravel Developer',
    'PHP Developer',
    'WordPress Developer',
    'Headless CMS',
    'UI/UX Designer',
    'Islamabad Pakistan',
  ],
  authors: [{ name: 'Arif Mahmood', url: 'https://arifmahmood.dev' }],
  creator: 'Arif Mahmood',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arifmahmood.dev',
    title: 'Arif Mahmood — Senior AI-Powered Full-Stack Developer',
    description:
      '13+ years of professional full-stack development experience delivering scalable web applications, WordPress systems, and bespoke digital software.',
    siteName: 'Arif Mahmood Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arif Mahmood — Senior AI-Powered Full-Stack Developer',
    description: '13+ years of experience in Full-Stack, WordPress, Next.js, and Laravel development.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSONAL_INFO.name,
    jobTitle: 'Senior AI-Powered Full-Stack Developer',
    description: PERSONAL_INFO.shortBio,
    email: PERSONAL_INFO.email,
    telephone: PERSONAL_INFO.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Islamabad',
      addressCountry: 'Pakistan',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Punjab University, Lahore',
    },
    url: 'https://arifmahmood.dev',
    sameAs: [PERSONAL_INFO.github],
    knowsAbout: [
      'Full-Stack Development',
      'Next.js',
      'React',
      'PHP',
      'Laravel',
      'WordPress',
      'Headless CMS',
      'RESTful APIs',
      'UI/UX Design',
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
      </head>
      <body className="bg-canvas text-ink-primary font-sans antialiased min-h-screen flex flex-col selection:bg-accent-green selection:text-canvas-dark">
        <Navigation />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
