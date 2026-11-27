'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav } from '@/lib/site';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open ? 'border-b border-white/[0.06] bg-background/80 backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 font-mono text-sm font-bold text-white">
            DG
          </span>
          <span className="font-medium text-white">Deepak Goyal</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted-foreground transition hover:text-white">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary px-4 py-2">
            Work with me
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-muted-foreground hover:text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="container flex flex-col gap-1 pb-6 lg:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-muted-foreground hover:bg-white/[0.04] hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary mt-3">
            Work with me
          </a>
        </nav>
      )}
    </header>
  );
}
