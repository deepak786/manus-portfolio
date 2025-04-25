import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Deepak Goyal - Portfolio',
  description: 'Senior Software Engineer, Developer, and Open Source Contributor with 10+ years of experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <footer className="border-t py-6 md:py-8">
          <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Deepak Goyal. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/deepak786" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                GitHub
              </a>
              <a href="https://medium.com/@deepakdroid" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                Medium
              </a>
              <a href="https://stackoverflow.com/users/3452078/deepak-goyal" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                StackOverflow
              </a>
              <a href="https://www.linkedin.com/in/deepakdroid/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
