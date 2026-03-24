import type { Metadata } from 'next'
import { getColumns } from '@/lib/microcms'
import { ColumnList } from '@/components/column/ColumnList'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { CLINIC } from '@/lib/constants'
import type { Column, ColumnCategory } from '@/types/microcms'

export const revalidate = 0

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'コラム',
    description:
      '東京LIFEオンラインクリニックの医療コラム。美肌内服薬・メディカルダイエットに関する情報をお届けします。',
  }
}

const CATEGORIES: ColumnCategory[] = ['美肌内服薬', 'メディカルダイエット', 'オンライン診療']

export default async function ColumnPage() {
  let posts: Column[] = []

  try {
    const res = await getColumns(9)
    posts = res.contents
  } catch {
    // microCMS 未設定時はフォールバック
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'ホーム', url: CLINIC.siteUrl },
          { name: 'コラム', url: `${CLINIC.siteUrl}/column` },
        ]}
      />

      <div style={{ padding: '100px 80px', backgroundColor: '#ffffff' }} className="page-pad">

        {/* Page title */}
        <div style={{ marginBottom: 64 }}>
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 13,
              fontWeight: 300,
              color: '#7A8F9A',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            Column
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 400,
              color: '#1A3A4A',
            }}
          >
            コラム
          </h1>
        </div>

        {/* Content */}
        {posts.length === 0 ? (
          <div
            style={{
              padding: '120px 0',
              textAlign: 'center',
              color: '#7A8F9A',
              fontSize: 14,
              lineHeight: 2,
            }}
          >
            <p style={{ marginBottom: 8, fontSize: 16, color: '#1A3A4A' }}>
              コラムはまもなく公開予定です
            </p>
            <p>最新情報はLINEでお知らせします。</p>
          </div>
        ) : (
          <ColumnList posts={posts} categories={CATEGORIES} />
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .page-pad { padding: 60px 24px !important; }
        }
      `}</style>
    </>
  )
}
