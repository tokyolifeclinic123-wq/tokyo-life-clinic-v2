import { createClient } from 'microcms-js-sdk'
import type { Column } from '@/types/microcms'

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey:        process.env.MICROCMS_API_KEY!,
})

// コラム一覧取得
export const getColumns = async (limit = 9, offset = 0) => {
  return client.getList<Column>({
    endpoint: 'column',
    queries: { limit, offset, orders: '-publishedAt' },
  })
}

// slug指定で1件取得
export const getColumnBySlug = async (slug: string) => {
  const res = await client.getList<Column>({
    endpoint: 'column',
    queries: { filters: `slug[equals]${slug}` },
  })
  return res.contents[0] ?? null
}

// 全スラッグ取得（generateStaticParams用）
export const getAllColumnSlugs = async () => {
  const res = await client.getList<Column>({
    endpoint: 'column',
    queries: { fields: 'slug,revisedAt', limit: 100 },
  })
  return res.contents
}
