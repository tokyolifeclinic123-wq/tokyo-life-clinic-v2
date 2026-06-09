import { getColumns } from '@/lib/microcms'
import { ColumnList } from '@/components/column/ColumnList'
import type { Metadata } from 'next'
import type { Column, ColumnCategory } from '@/types/microcms'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'コラム',
  description: '東京LIFEオンラインクリニックの医療コラム。美肌内服薬・メディカルダイエットに関する情報をお届けします。',
}

export default async function ColumnPage() {
  let posts: Column[] = []
  try {
    const res = await getColumns(9, 0)
    posts = res.contents
  } catch (e) {
    console.error(e)
    posts = []
  }

  const categories: ColumnCategory[] = ['美肌内服薬', 'メディカルダイエット', 'オンライン診療']

  return (
    <main style={{ padding: '120px 40px 80px', maxWidth: 1200, margin: '0 auto' }}>
      <p style={{ fontSize: 11, letterSpacing: 3, color: '#7A8F9A', marginBottom: 16 }}>COLUMN</p>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, color: '#1A3A4A', marginBottom: 48 }}>
        コラム
      </h1>
      {posts.length === 0 ? (
        <p style={{ color: '#7A8F9A' }}>コラムはまもなく公開予定です</p>
      ) : (
        <ColumnList posts={posts} categories={categories} />
      )}
    </main>
  )
}
