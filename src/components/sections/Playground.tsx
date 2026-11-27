import { ArrowUpRight, Play, Youtube } from 'lucide-react';
import { links, playgroundDemos } from '@/lib/site';

export function Playground() {
  return (
    <section id="playground" className="section relative overflow-hidden border-t border-white/[0.06]">
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="container relative">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">System Thinking Playground</p>
            <h2 className="section-title">See how real systems work, by playing with them.</h2>
            <p className="section-lead">
              Interactive, animated explainers of the systems behind apps you use every day, from
              how WhatsApp delivers messages to how ChatGPT reads your PDF, built alongside my YouTube channel.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a href={links.playground} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <Play size={16} /> Open the playground
            </a>
            <a href={links.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <Youtube size={16} className="text-red-400" /> Watch on YouTube
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {playgroundDemos.map((demo) => (
            <a
              key={demo.id}
              href={`${links.playground}/${demo.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="panel panel-hover group flex flex-col p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{demo.tag}</span>
                <ArrowUpRight size={16} className="text-muted-foreground transition group-hover:text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{demo.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{demo.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {demo.concepts.map((concept) => (
                  <span key={concept} className="chip px-2.5 py-0.5 text-[11px]">
                    {concept}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
