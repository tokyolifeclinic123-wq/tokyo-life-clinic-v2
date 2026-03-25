import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: '利用規約',
  description: '東京LIFEオンラインクリニックの利用規約。',
}

export default function TermsPage() {
  return (
    <div style={{ padding: '100px 80px', backgroundColor: '#ffffff', minHeight: '60vh' }} className="page-pad">
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
          Legal
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(24px, 3vw, 42px)',
            fontWeight: 400,
            color: '#1A3A4A',
          }}
        >
          利用規約
        </h1>
      </div>
      <p style={{ fontSize: 15, color: '#7A8F9A', lineHeight: 1.9 }}>
        準備中です。近日公開予定です。
      </p>
      <style>{`
        @media (max-width: 768px) {
          .page-pad { padding: 60px 24px !important; }
        }
      `}</style>
    </div>
  )
}
