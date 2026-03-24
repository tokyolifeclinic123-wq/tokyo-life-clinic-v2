import Image from 'next/image'
import Link from 'next/link'
import type { Column, ColumnCategory } from '@/types/microcms'

interface ColumnCardProps {
  post: Column
}

const CATEGORY_COLORS: Record<ColumnCategory, { bg: string; color: string }> = {
  '美肌内服薬':         { bg: '#E8F8FD', color: '#5BC8E8' },
  'メディカルダイエット': { bg: '#F0FBE8', color: '#5CA83A' },
  'オンライン診療':      { bg: '#F5F0FB', color: '#7A5CA8' },
}

function formatDate(iso: string) {
  const d = new Date(iso)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}

export function ColumnCard({ post }: ColumnCardProps) {
  const primaryCategory = post.category[0]
  const badge = (primaryCategory && CATEGORY_COLORS[primaryCategory]) ?? { bg: '#F0F0F0', color: '#7A8F9A' }

  return (
    <Link
      href={`/column/${post.slug}`}
      style={{
        display: 'block',
        border: '1px solid #D6EEF7',
        borderRadius: 0,
        textDecoration: 'none',
        color: 'inherit',
        overflow: 'hidden',
        transition: 'border-color 0.2s',
      }}
      className="column-card"
    >
      {/* Eyecatch */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          backgroundColor: '#E8F8FD',
          overflow: 'hidden',
        }}
      >
        {post.eyecatch?.url ? (
          <Image
            src={post.eyecatch.url}
            alt={post.eyecatch.alt ?? post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontSize: 11, color: '#A8DFF2', letterSpacing: '0.08em' }}>NO IMAGE</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: '20px 20px 24px' }}>
        {/* Category badge */}
        <span
          style={{
            display: 'inline-block',
            backgroundColor: badge.bg,
            color: badge.color,
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.06em',
            padding: '3px 10px',
            marginBottom: 12,
          }}
        >
          {post.category[0]}
        </span>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 15,
            fontWeight: 400,
            color: '#1A3A4A',
            lineHeight: 1.6,
            marginBottom: 10,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {post.title}
        </h3>

        {/* Meta description */}
        <p
          style={{
            fontSize: 12,
            color: '#7A8F9A',
            lineHeight: 1.7,
            marginBottom: 16,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {post.meta_description}
        </p>

        {/* Date */}
        <time
          dateTime={post.publishedAt}
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 12,
            color: '#A8DFF2',
            letterSpacing: '0.08em',
          }}
        >
          {formatDate(post.publishedAt)}
        </time>
      </div>

      <style>{`
        .column-card:hover { border-color: #5BC8E8; }
      `}</style>
    </Link>
  )
}
