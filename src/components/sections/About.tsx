import { Briefcase } from 'lucide-react';
import { links, skills } from '@/lib/site';

const responsibilities = [
  'Lead the architecture and technical roadmap for the mobile apps and backend',
  'Build and evolve the Flutter apps for Android and iOS',
  'Design and ship Python REST APIs and Firebase backend services',
  'Mentor engineers and work with leadership on product direction',
];

export function About() {
  return (
    <section id="about" className="section border-t border-white/[0.06]">
      <div className="container grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="section-title">Engineering leader, hands on the code.</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              I&apos;ve spent more than a decade building software, and since 2017 I&apos;ve been part of the
              team behind Agenda Boa, the business management app used by hundreds of thousands of small businesses
              and independent professionals across Brazil.
            </p>
            <p>
              Today I lead its engineering as Tech Lead: I own the architecture, still write a lot of the code, and
              help the team ship reliable software. Outside work, I maintain open-source Flutter packages and build
              interactive explainers that make system design click.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {skills.map((group) => (
              <div key={group.group}>
                <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {group.group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip text-foreground/85">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel h-fit p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-indigo-500/15 text-indigo-300">
              <Briefcase size={20} />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-white">Tech Lead</h3>
              <a
                href={links.agendaBoa}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline"
              >
                Agenda Boa
              </a>
              <p className="mt-1 font-mono text-xs text-muted-foreground">2017 – Present · Remote</p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            A business management app that helps microentrepreneurs create quotes, service orders and receipts, manage
            clients and appointments, and keep track of billing.
          </p>
          <ul className="mt-6 space-y-3">
            {responsibilities.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-foreground/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
