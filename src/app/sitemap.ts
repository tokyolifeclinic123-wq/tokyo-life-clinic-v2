import type { MetadataRoute } from 'next'
import { getAllColumnSlugs } from '@/lib/microcms'

const BASE = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tokyo-life-clinic.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let slugs: { slug: string; revisedAt: string }[] = []
  try {
    slugs = await getAllColumnSlugs()
  } catch {
    // microCMS 未接続時はスラッグなしで生成
  }

  return [
    { url: BASE,                           changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/menu/isotretinoin`,     changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/menu/mounjaro`,         changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/price`,                changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/column`,               changeFrequency: 'daily',   priority: 0.8 },
    { url: `${BASE}/access`,               changeFrequency: 'monthly', priority: 0.7 },
    ...slugs.map(({ slug, revisedAt }) => ({
      url: `${BASE}/column/${slug}`,
      lastModified: new Date(revisedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
