import type { MetadataRoute } from 'next'
import { getAllColumnSlugs } from '@/lib/microcms'

export const revalidate = 3600

const BASE = process.env.NEXT_PUBLIC_APP_URL ?? 'https://www.tokyo-life-online-clinic.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let columnEntries: MetadataRoute.Sitemap = []

  try {
    const slugs = await getAllColumnSlugs()
    columnEntries = slugs.map(({ slug, revisedAt }) => ({
      url: `${BASE}/column/${slug}`,
      lastModified: new Date(revisedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  } catch (e) {
    console.error('sitemap: failed to fetch column slugs', e)
  }

  return [
    { url: BASE, changeFrequency: 'weekly', priority: 1.0, lastModified: new Date() },
    { url: `${BASE}/menu/isotretinoin`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/menu/mounjaro`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/price`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/column`, changeFrequency: 'daily', priority: 0.8, lastModified: new Date() },
    { url: `${BASE}/access`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/legal/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/legal/tokusho`, changeFrequency: 'yearly', priority: 0.3 },
    ...columnEntries,
  ]
}
