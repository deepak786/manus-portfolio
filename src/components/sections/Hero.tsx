import { ArrowRight, Sparkles } from 'lucide-react';
import { HeroBackground } from '@/components/HeroBackground';
import { links } from '@/lib/site';
import { compactNumber, type IntercomStats } from '@/lib/stats';

export function Hero({ stats }: { stats: IntercomStats }) {
  const highlights = [
    { value: '10+', label: 'years of software development' },
    { value: `${compactNumber(stats.monthlyDownloads)}+`, label: 'monthly downloads of intercom_flutter' },
  ];

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="animate-drift pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />
      <div className="animate-drift-alt pointer-events-none absolute right-[-10%] top-40 h-[360px] w-[480px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <HeroBackground />

      <div className="container relative">
        <a
          href={links.agendaBoa}
          target="_blank"
          rel="noopener noreferrer"
          className="chip mb-8 gap-2 text-foreground/80 hover:border-white/20"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Tech Lead at Agenda Boa
        </a>

        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
          I build products, maintain open source, and{' '}
          <span className="gradient-text">make complex systems simple.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I&apos;m Deepak, a Tech Lead with 10+ years of software development, focused on Flutter, Android and iOS. I lead engineering at Agenda Boa,
          maintain the open-source intercom_flutter plugin, and teach system design through interactive demos.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#contact" className="btn btn-primary">
            Work with me <ArrowRight size={16} />
          </a>
          <a href={links.playground} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <Sparkles size={16} /> Explore the playground
          </a>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07]">
          {highlights.map((item) => (
            <div key={item.label} className="bg-background/90 p-6">
              <dt className="sr-only">{item.label}</dt>
              <dd className="text-3xl font-semibold text-white">{item.value}</dd>
              <dd className="mt-1 text-sm text-muted-foreground">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
