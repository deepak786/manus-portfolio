import { Coffee, Heart, Wallet } from 'lucide-react';
import { links } from '@/lib/site';

const options = [
  {
    title: 'GitHub Sponsors',
    description: 'Monthly or one-time support, with tiers for individuals and companies. The best way to support ongoing work.',
    href: links.sponsors,
    cta: 'Become a sponsor',
    icon: Heart,
    iconClass: 'text-pink-400 bg-pink-500/10',
    primary: true,
  },
  {
    title: 'Buy Me a Coffee',
    description: 'A quick one-time thank-you for a package, demo or article that helped you.',
    href: links.buyMeACoffee,
    cta: 'Buy me a coffee',
    icon: Coffee,
    iconClass: 'text-amber-300 bg-amber-400/10',
    primary: false,
  },
  {
    title: 'PayPal',
    description: 'Prefer PayPal? Send any amount you like.',
    href: links.paypal,
    cta: 'Support via PayPal',
    icon: Wallet,
    iconClass: 'text-sky-300 bg-sky-400/10',
    primary: false,
  },
];

export function Support() {
  return (
    <section id="support" className="section border-t border-white/[0.06]">
      <div className="container">
        <p className="eyebrow">Support</p>
        <h2 className="section-title">Keep the open-source work going.</h2>
        <p className="section-lead">
          My packages, including intercom_flutter, and the System Thinking Playground are free and built in my spare
          time. If they help you or your team, your support keeps them maintained and growing.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {options.map((option) => (
            <div key={option.title} className="panel flex flex-col p-7">
              <span className={`grid h-11 w-11 place-items-center rounded-xl ${option.iconClass}`}>
                <option.icon size={20} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{option.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{option.description}</p>
              <a
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn mt-6 ${option.primary ? 'btn-primary' : 'btn-ghost'}`}
              >
                {option.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
