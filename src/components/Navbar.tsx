import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <header className={cn('sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur', className)}>
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">Deepak</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-end space-x-6">
          <Link href="/#about" className="nav-link">About</Link>
          <Link href="/#articles" className="nav-link">Articles</Link>
          <Link href="/#contributions" className="nav-link">Contributions</Link>
          <Link href="/#support" className="nav-link">Support</Link>
          <Link href="/#contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
