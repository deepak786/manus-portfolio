import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

const title = 'Deepak Goyal · Tech Lead & Software Consultant';
const description =
  'Tech Lead at Agenda Boa with 10+ years of software development, focused on Flutter, Android and iOS. Maintainer of intercom_flutter and creator of System Thinking Playground.';

export const metadata: Metadata = {
  metadataBase: new URL('https://deepakdroid.xyz'),
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://deepakdroid.xyz',
    siteName: 'Deepak Goyal',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
