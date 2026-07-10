import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/business'

export default function sitemap(): MetadataRoute.Sitemap {
  // Build-time timestamp: Google largely ignores changefreq/priority and
  // leans on lastmod as its recrawl signal.
  const lastModified = new Date()

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/menu`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
