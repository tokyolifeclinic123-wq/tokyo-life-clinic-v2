import { getColumns } from '@/lib/microcms'
import Link from 'next/link'
import type { Column } from '@/types/microcms'

export const revalidate = 0

export default async function ColumnPage() {
  let posts: Column[] = []
  try {
    const res = await getColumns(9, 0)
    posts = res.contents
  } catch (e) {
    console.error(e)
  }

  return (
    <main style={{ padding: '120px 40px 80px', maxWidth: 1200, margin: '0 auto' }}>
      <h1 style={{ fontSize: 32, marginBottom: 40 }}>コラム</h1>
      {posts.length === 0 ? (
        <p>記事がありません（取得件数: {posts.length}）</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {posts.map((post) => (
            <Link key={post.id} href={`/column/${post.slug}`}>
              <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8 }}>
                <p style={{ fontSize: 12, color: '#888' }}>{post.category}</p>
                <h2 style={{ fontSize: 18, marginTop: 8 }}>{post.title}</h2>
                <p style={{ fontSize: 14, marginTop: 8 }}>{post.meta_description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}
