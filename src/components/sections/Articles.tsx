import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatDate, truncateText } from '@/lib/utils';
import { getMediumArticles } from '@/lib/medium';

export async function Articles() {
  const articles = await getMediumArticles('deepakdroid');
  
  // Function to extract plain text from HTML content
  const extractPlainText = (html: string) => {
    // Simple regex to remove HTML tags
    return html.replace(/<[^>]*>?/gm, '').trim();
  };

  return (
    <section id="articles" className="section">
      <div className="container">
        <h2 className="section-title">Latest Articles</h2>
        <p className="text-muted-foreground mb-8">
          My latest thoughts and insights on development, technology, and more.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.length > 0 ? (
            articles.slice(0, 6).map((article, index) => (
              <Card key={index} className="flex flex-col">
                {article.thumbnail && (
                  <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                    <img 
                      src={article.thumbnail} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-4 flex-1">
                  <p className="text-sm text-muted-foreground mb-2">
                    {formatDate(article.pubDate)}
                  </p>
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {truncateText(extractPlainText(article.content), 120)}
                  </p>
                </div>
                <div className="p-4 pt-0">
                <Button variant="outline" asChild>
                    <a 
                      href={article.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Read on Medium
                    </a>
                  </Button>
                </div>
              </Card>
            ))
          ) : (
            // Fallback if no articles are found
            <>
              <Card className="flex flex-col">
                <div className="p-4 flex-1">
                  <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                  <p className="text-muted-foreground mb-4">
                    Check back later for new articles or visit my Medium profile directly.
                  </p>
                </div>
                <div className="p-4 pt-0">
                  <Button variant="outline" asChild>
                    <a 
                      href="https://medium.com/@deepakdroid" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Visit Medium Profile
                    </a>
                  </Button>
                </div>
              </Card>
            </>
          )}
        </div>
        
        {articles.length > 6 && (
          <div className="mt-8 text-center">
            <Button asChild>
              <a 
                href="https://medium.com/@deepakdroid" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View All Articles
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
