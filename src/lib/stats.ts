export interface IntercomStats {
  monthlyDownloads: number;
  points: number;
  maxPoints: number;
  likes: number;
  stars: number;
}

const fallback: IntercomStats = {
  monthlyDownloads: 265000,
  points: 160,
  maxPoints: 160,
  likes: 152,
  stars: 105,
};

export async function getIntercomStats(): Promise<IntercomStats> {
  const [score, repo] = await Promise.all([
    fetchJson<{ downloadCount30Days?: number; grantedPoints?: number; maxPoints?: number; likeCount?: number }>(
      'https://pub.dev/api/packages/intercom_flutter/score',
    ),
    fetchJson<{ stargazers_count?: number }>('https://api.github.com/repos/deepak786/intercom_flutter'),
  ]);

  return {
    monthlyDownloads: score?.downloadCount30Days ?? fallback.monthlyDownloads,
    points: score?.grantedPoints ?? fallback.points,
    maxPoints: score?.maxPoints ?? fallback.maxPoints,
    likes: score?.likeCount ?? fallback.likes,
    stars: repo?.stargazers_count ?? fallback.stars,
  };
}

async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

export function compactNumber(value: number) {
  if (value >= 1_000_000) return `${Math.floor(value / 100_000) / 10}M`;
  if (value >= 1_000) return `${Math.floor(value / 1_000)}k`;
  return `${value}`;
}
