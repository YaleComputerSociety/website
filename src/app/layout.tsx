import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { DM_Sans, IBM_Plex_Mono } from 'next/font/google';
import '@styles/globals.css';

import Navbar from '@components/Navbar';
import { Footer } from '@components/Footer';
import { AuthProvider } from '@components/AuthContext';
import RevealObserver from '@components/site/RevealObserver';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
});

const description =
  "Yale's premier tech organization and developer community. Students building CourseTable, Yalies, YaleMeals and more for 20,000+ people.";

export const metadata: Metadata = {
  metadataBase: new URL('https://yalecomputersociety.org'),
  title: 'Yale Computer Society',
  description,
  icons: {
    icon: './favicon.ico',
  },
  openGraph: {
    title: 'Yale Computer Society',
    description,
    url: 'https://yalecomputersociety.org',
    siteName: 'Yale Computer Society',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'A packed room at y/cs Demo Day' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yale Computer Society',
    description,
    images: ['/og.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${plexMono.variable}`}>
      <body className="bg-ink font-sans text-cream antialiased">
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
          <RevealObserver />
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  );
}
