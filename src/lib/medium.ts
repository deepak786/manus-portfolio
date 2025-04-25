interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  thumbnail?: string;
  categories: string[];
}

export async function getMediumArticles(username: string): Promise<MediumArticle[]> {
  try {
    // Using RSS feed to fetch Medium articles
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch Medium articles');
    }
    
    const data = await response.json();
    
    if (data.status !== 'ok') {
      throw new Error('Invalid RSS feed');
    }
    
    return data.items.map((item: any) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      content: item.content,
      thumbnail: item.thumbnail,
      categories: item.categories
    }));
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    return [];
  }
}
