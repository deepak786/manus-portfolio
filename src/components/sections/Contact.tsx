'use client';

import { useState } from 'react';
import { CheckCircle2, Github, Linkedin, Loader2, Send } from 'lucide-react';
import { links } from '@/lib/site';

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = { state: 'idle' | 'sending' | 'sent' | 'error'; message?: string };

const topics = [
  'Freelance project',
  'Software consulting',
  'Code review',
  'Intercom integration',
  'Sponsorship',
  'Something else',
];

export function Contact() {
  const [status, setStatus] = useState<Status>({ state: 'idle' });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get('botcheck')) return;

    if (!accessKey) {
      setStatus({ state: 'error', message: 'The contact form is not set up yet. Please reach out on LinkedIn instead.' });
      return;
    }

    setStatus({ state: 'sending' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `deepakdroid.xyz: ${data.get('topic')}`,
          from_name: 'deepakdroid.xyz',
          name: data.get('name'),
          email: data.get('email'),
          topic: data.get('topic'),
          message: data.get('message'),
        }),
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message);
      }

      form.reset();
      setStatus({ state: 'sent' });
    } catch {
      setStatus({
        state: 'error',
        message: 'Your message could not be sent. Please try again, or reach out on LinkedIn.',
      });
    }
  }

  return (
    <section id="contact" className="section border-t border-white/[0.06]">
      <div className="container grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let&apos;s build something.</h2>
          <p className="section-lead">
            Have a project, an Intercom integration question, or want to sponsor my work? Send me a message and
            I&apos;ll get back to you by email.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-muted-foreground transition hover:text-white"
            >
              <Linkedin size={18} /> linkedin.com/in/deepakdroid
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-muted-foreground transition hover:text-white"
            >
              <Github size={18} /> github.com/deepak786
            </a>
          </div>
        </div>

        <div className="panel p-7 md:p-8">
          {status.state === 'sent' ? (
            <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
              <CheckCircle2 size={44} className="text-emerald-400" />
              <h3 className="mt-5 text-xl font-semibold text-white">Message sent</h3>
              <p className="mt-2 max-w-sm text-muted-foreground">
                Thanks for reaching out. I&apos;ll reply to the email address you provided.
              </p>
              <button type="button" className="btn btn-ghost mt-8" onClick={() => setStatus({ state: 'idle' })}>
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm text-foreground/85">Name</span>
                  <input name="name" required maxLength={100} className="field" placeholder="Your name" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-foreground/85">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    maxLength={200}
                    className="field"
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-sm text-foreground/85">What&apos;s it about?</span>
                <select name="topic" className="field" defaultValue={topics[0]}>
                  {topics.map((topic) => (
                    <option key={topic} className="bg-background">
                      {topic}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-foreground/85">Message</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  maxLength={5000}
                  className="field resize-y"
                  placeholder="Tell me a bit about your project or question..."
                />
              </label>

              {status.state === 'error' && (
                <p role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {status.message}
                </p>
              )}

              <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={status.state === 'sending'}>
                {status.state === 'sending' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
