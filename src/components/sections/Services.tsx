import { ArrowRight, Compass, Database, MessagesSquare, ScanSearch, Smartphone, Users } from 'lucide-react';
import { services } from '@/lib/site';

const icons = [Compass, ScanSearch, Smartphone, Database, Users, MessagesSquare];

export function Services() {
  return (
    <section id="services" className="section border-t border-white/[0.06]">
      <div className="container">
        <p className="eyebrow">Work with me</p>
        <h2 className="section-title">Freelance and consulting.</h2>
        <p className="section-lead">
          I take on a small number of projects alongside my role at Agenda Boa. Whether you need advice on a product,
          a review of your codebase or an experienced hand to build it, let&apos;s talk.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <div key={service.title} className="panel p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-indigo-500/15 text-indigo-300">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>

        <a href="#contact" className="btn btn-primary mt-10">
          Tell me about your project <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
