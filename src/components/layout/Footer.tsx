import Link from 'next/link'
import { CLINIC } from '@/lib/constants'

const FOOTER_LINKS = [
  { href: '/treatments', label: '施術メニュー' },
  { href: '/pricing',    label: '料金表' },
  { href: '/privacy',    label: 'プライバシーポリシー' },
  { href: '/legal',      label: '特定商取引法' },
]

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#1A3A4A',
        color: 'rgba(255,255,255,0.6)',
        padding: '50px 80px 30px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 40,
          marginBottom: 40,
        }}
      >
        {/* Left: clinic info */}
        <div>
          <div style={{ marginBottom: 16 }}>
            <div
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 18,
                fontWeight: 300,
                color: 'rgba(255,255,255,0.9)',
                letterSpacing: '0.1em',
                textTransform: 'lowercase',
              }}
            >
              tokyo life online clinic
            </div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 11,
                fontWeight: 300,
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.08em',
                marginTop: 4,
              }}
            >
              東京LIFEオンラインクリニック
            </div>
          </div>

          <dl
            style={{
              fontSize: 12,
              lineHeight: 2,
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '0 12px',
            }}
          >
            <dt style={{ color: 'rgba(255,255,255,0.4)' }}>院長</dt>
            <dd>{CLINIC.director}</dd>
            <dt style={{ color: 'rgba(255,255,255,0.4)' }}>住所</dt>
            <dd>〒{CLINIC.postalCode} {CLINIC.address}</dd>
            <dt style={{ color: 'rgba(255,255,255,0.4)' }}>診療時間</dt>
            <dd>{CLINIC.hours}</dd>
          </dl>
        </div>

        {/* Right: links */}
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            paddingTop: 4,
          }}
        >
          {FOOTER_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                letterSpacing: '0.04em',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Disclaimer */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.12)',
          paddingTop: 24,
          marginBottom: 16,
        }}
      >
        <p style={{ fontSize: 11, lineHeight: 1.9, color: 'rgba(255,255,255,0.4)' }}>
          ※当サービスで提供する情報は医療広告ガイドラインに基づいております。効果・効能を断定する表現は一切使用しておりません。
          薬の処方は、医師の診察を経て個別に判断されます。副作用・リスクについては診察時にご説明します。
        </p>
      </div>

      {/* Copyright */}
      <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
        © 2025 東京LIFEオンラインクリニック All Rights Reserved.
      </p>
    </footer>
  )
}
