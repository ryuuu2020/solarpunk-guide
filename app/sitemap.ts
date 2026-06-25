import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://solarpunk-game-wiki.vercel.app';

  const pages = [
    { path: '', priority: 1.0, changefreq: 'weekly' as const },
    { path: '/survival', priority: 0.9, changefreq: 'weekly' as const },
    { path: '/building', priority: 0.9, changefreq: 'weekly' as const },
    { path: '/resources', priority: 0.9, changefreq: 'weekly' as const },
    { path: '/airship', priority: 0.9, changefreq: 'weekly' as const },
    { path: '/faq', priority: 0.8, changefreq: 'monthly' as const },
    { path: '/news', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/about', priority: 0.5, changefreq: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changefreq: 'yearly' as const },
    { path: '/terms', priority: 0.3, changefreq: 'yearly' as const },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changefreq,
    priority: page.priority,
  }));
}
