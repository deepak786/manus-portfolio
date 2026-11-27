import { ArrowUpRight } from 'lucide-react';
import { getMediumArticles } from '@/lib/medium';
import { links } from '@/lib/site';
import { formatDate, truncateText } from '@/lib/utils';

function toPlainText(html: string) {
  return html
    .replace(/<[^>]*>?/gm, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export async function Articles() {
  const articles = (await getMediumArticles('deepakdroid')).slice(0, 3);

  return (
    <section id="writing" className="section border-t border-white/[0.06]">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Writing</p>
            <h2 className="section-title">Notes from building things.</h2>
            <p className="section-lead">Articles on Flutter, AI and solving real engineering problems.</p>
          </div>
          <a href={links.medium} target="_blank" rel="noopener noreferrer" className="btn btn-ghost shrink-0">
            All articles on Medium <ArrowUpRight size={16} />
          </a>
        </div>

        {articles.length > 0 && (
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {articles.map((article) => (
              <a
                key={article.link}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="panel panel-hover group flex flex-col p-6"
              >
                <time className="font-mono text-xs text-muted-foreground">{formatDate(article.pubDate)}</time>
                <h3 className="mt-3 font-semibold leading-snug text-white">{toPlainText(article.title)}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {truncateText(toPlainText(article.content), 140)}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm text-foreground/80 group-hover:text-white">
                  Read on Medium <ArrowUpRight size={14} />
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
