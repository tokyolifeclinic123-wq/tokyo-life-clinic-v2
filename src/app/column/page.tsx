import { getColumns } from '@/lib/microcms'
import { ColumnList } from '@/components/column/ColumnList'
import { Column, ColumnCategory } from '@/types/microcms'
import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'コラム',
  description: '東京LIFEオンラインクリニックの医療コラム。',
}

const PER_PAGE = 9

export default async function ColumnPage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const page = Number(searchParams.page ?? 1)
  const offset = (page - 1) * PER_PAGE

  let posts: Column[] = []
  let totalCount = 0

  try {
    const res = await getColumns(PER_PAGE, offset)
    posts = res.contents
    totalCount = res.totalCount
  } catch (e) {
    console.error(e)
  }

  const totalPages = Math.ceil(totalCount / PER_PAGE)
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
        <>
          <ColumnList posts={posts} categories={categories} />
          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 60, alignItems: 'center' }}>
              {page > 1 && (
                <Link
                  href={`/column?page=${page - 1}`}
                  style={{
                    padding: '12px 32px',
                    border: '1px solid #1A3A4A',
                    color: '#1A3A4A',
                    textDecoration: 'none',
                    fontSize: 14,
                    letterSpacing: 1,
                  }}
                >
                  ← 前のページ
                </Link>
              )}
              <span style={{ fontSize: 14, color: '#7A8F9A' }}>
                {page} / {totalPages}
              </span>
              {page < totalPages && (
                <Link
                  href={`/column?page=${page + 1}`}
                  style={{
                    padding: '12px 32px',
                    background: '#1A3A4A',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: 14,
                    letterSpacing: 1,
                  }}
                >
                  次のページ →
                </Link>
              )}
            </div>
          )}
        </>
      )}
    </main>
  )
}
