import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/business'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      // The catering app is served under /catering via rewrite and has its own sitemap.
      `${SITE_URL}/catering/sitemap.xml`,
    ],
  }
}
