'use client'

import { useState } from 'react'
import type { Column, ColumnCategory } from '@/types/microcms'
import { ColumnCard } from './ColumnCard'

interface ColumnListProps {
  posts:      Column[]
  categories: ColumnCategory[]
}

const ALL = 'すべて'

export function ColumnList({ posts, categories }: ColumnListProps) {
  const [active, setActive] = useState(ALL)

  const filtered = active === ALL
    ? posts
    : posts.filter((p) => p.category.includes(active as Column['category'][number]))

  const tabs = [ALL, ...categories]

  return (
    <div>
      {/* Category tabs */}
      <div
        style={{
          display: 'flex',
          gap: 0,
          borderBottom: '1px solid #D6EEF7',
          marginBottom: 48,
          flexWrap: 'wrap',
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              padding: '10px 24px',
              fontSize: 13,
              fontWeight: active === tab ? 500 : 400,
              color: active === tab ? '#1A3A4A' : '#7A8F9A',
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: active === tab ? '2px solid #5BC8E8' : '2px solid transparent',
              cursor: 'pointer',
              letterSpacing: '0.04em',
              transition: 'color 0.2s, border-color 0.2s',
              marginBottom: -1,
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div
          style={{
            padding: '80px 0',
            textAlign: 'center',
            color: '#7A8F9A',
            fontSize: 14,
          }}
        >
          該当する記事がありません
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
          className="column-grid"
        >
          {filtered.map((post) => (
            <ColumnCard key={post.id} post={post} />
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .column-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .column-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  )
}
