import { ArrowUpRight, Heart, Package, Star, Youtube } from 'lucide-react';
import { links } from '@/lib/site';
import { compactNumber, type IntercomStats } from '@/lib/stats';

const otherProjects = [
  {
    name: 'firebase_database (web)',
    description: 'Contributed the web implementation of the FlutterFire Realtime Database plugin, which was mentioned in this video.',
    href: 'https://www.youtube.com/watch?v=-W-xHsbPFuI&t=175s',
    cta: 'Watch the mention',
    icon: Youtube,
  },
  {
    name: 'in_validator',
    description: 'Dart package to validate Indian identification numbers such as PAN, Aadhaar, GST and driving licence.',
    href: 'https://github.com/deepak786/in_validator',
    cta: 'View on GitHub',
    icon: Package,
  },
  {
    name: 'color_parser',
    description: 'A small Dart package for parsing colors in Flutter apps.',
    href: 'https://github.com/deepak786/color_parser',
    cta: 'View on GitHub',
    icon: Package,
  },
];

export function OpenSource({ stats, reputation }: { stats: IntercomStats; reputation: number | null }) {
  const intercomStats = [
    { value: `${compactNumber(stats.monthlyDownloads)}+`, label: 'monthly downloads' },
    { value: `${stats.points}/${stats.maxPoints}`, label: 'pub.dev points' },
    { value: `${stats.likes}`, label: 'pub.dev likes' },
    { value: `${stats.stars}`, label: 'GitHub stars' },
  ];

  return (
    <section id="open-source" className="section border-t border-white/[0.06]">
      <div className="container">
        <p className="eyebrow">Open source</p>
        <h2 className="section-title">Software other developers build on.</h2>
        <p className="section-lead">
          I maintain packages used in production apps around the world, for free, as part of the Flutter community.
        </p>

        <article className="panel relative mt-12 overflow-hidden p-8 md:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-mono text-2xl font-semibold text-white">intercom_flutter</h3>
                <span className="chip">Maintainer</span>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The Flutter plugin for Intercom: in-app messaging, help center and push notifications on Android, iOS
                and Web. I keep it in step with every Intercom SDK release, review community contributions and support
                the developers who use it.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={links.intercomPub} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View on pub.dev <ArrowUpRight size={16} />
                </a>
                <a href={links.intercomGithub} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  <Star size={16} /> Star on GitHub
                </a>
                <a href={links.sponsors} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  <Heart size={16} className="text-pink-400" /> Sponsor
                </a>
              </div>
            </div>
            <dl className="grid grid-cols-2 gap-4">
              {intercomStats.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/[0.07] bg-background/60 p-5">
                  <dd className="text-2xl font-semibold text-white">{item.value}</dd>
                  <dt className="mt-1 text-sm text-muted-foreground">{item.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </article>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {otherProjects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="panel panel-hover group flex flex-col p-6"
            >
              <project.icon size={20} className="text-accent" />
              <h3 className="mt-4 font-mono font-semibold text-white">{project.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm text-foreground/80 group-hover:text-white">
                {project.cta} <ArrowUpRight size={14} />
              </span>
            </a>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          I also answer questions on{' '}
          <a href={links.stackoverflow} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            Stack Overflow
          </a>
          {reputation ? ` (${reputation.toLocaleString('en')} reputation)` : ''} and share more projects on{' '}
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}
