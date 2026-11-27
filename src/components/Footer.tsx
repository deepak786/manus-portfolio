import { links } from '@/lib/site';

const footerLinks = [
  { label: 'GitHub', href: links.github },
  { label: 'LinkedIn', href: links.linkedin },
  { label: 'YouTube', href: links.youtube },
  { label: 'Medium', href: links.medium },
  { label: 'Stack Overflow', href: links.stackoverflow },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Deepak Goyal</p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
