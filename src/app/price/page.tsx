import type { Metadata } from 'next'
import { LineButton } from '@/components/ui/LineButton'
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { CLINIC } from '@/lib/constants'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: '料金表',
  description:
    '東京LIFEオンラインクリニックの料金一覧。美肌内服薬（イソトレチノイン）・メディカルダイエット（マンジャロ）の処方価格。税込表示。',
}

const BASE = CLINIC.siteUrl

const TH_STYLE: React.CSSProperties = {
  textAlign: 'left',
  padding: '12px 20px',
  backgroundColor: '#E8F8FD',
  fontWeight: 500,
  color: '#1A3A4A',
  fontSize: 12,
  letterSpacing: '0.08em',
  border: '1px solid #D6EEF7',
}

const TD_STYLE: React.CSSProperties = {
  padding: '14px 20px',
  border: '1px solid #D6EEF7',
  color: '#2C3E50',
  fontSize: 14,
}

export default function PricePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'ホーム',  url: BASE },
          { name: '料金表', url: `${BASE}/price` },
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
            Price
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 400,
              color: '#1A3A4A',
            }}
          >
            料金表
          </h1>
        </div>

        {/* Notice */}
        <p
          style={{
            fontSize: 13,
            color: '#7A8F9A',
            marginBottom: 56,
            paddingLeft: 16,
            borderLeft: '2px solid #D6EEF7',
            lineHeight: 1.8,
          }}
        >
          表示価格はすべて税込です。診察の結果により処方できない場合があります。
        </p>

        {/* Beauty table */}
        <section style={{ marginBottom: 64 }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 20,
              fontWeight: 400,
              color: '#1A3A4A',
              marginBottom: 24,
            }}
          >
            美肌内服薬
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={TH_STYLE}>薬剤名</th>
                <th style={TH_STYLE}>用量</th>
                <th style={{ ...TH_STYLE, textAlign: 'right' }}>価格（30日分）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={TD_STYLE}>イソトレチノイン</td>
                <td style={TD_STYLE}>10mg</td>
                {/* TODO: 実際の価格に差し替え */}
                <td style={{ ...TD_STYLE, textAlign: 'right', color: '#7A8F9A' }}>¥ ─,───</td>
              </tr>
              <tr>
                <td style={TD_STYLE}>イソトレチノイン</td>
                <td style={TD_STYLE}>20mg</td>
                {/* TODO: 実際の価格に差し替え */}
                <td style={{ ...TD_STYLE, textAlign: 'right', color: '#7A8F9A' }}>¥ ─,───</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Diet table */}
        <section style={{ marginBottom: 64 }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 20,
              fontWeight: 400,
              color: '#1A3A4A',
              marginBottom: 24,
            }}
          >
            メディカルダイエット
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={TH_STYLE}>薬剤名</th>
                <th style={TH_STYLE}>用量</th>
                <th style={{ ...TH_STYLE, textAlign: 'right' }}>価格（4週分）</th>
              </tr>
            </thead>
            <tbody>
              {[
                { dose: '2.5mg' },
                { dose: '5mg' },
                { dose: '7.5mg' },
              ].map(({ dose }) => (
                <tr key={dose}>
                  <td style={TD_STYLE}>マンジャロ</td>
                  <td style={TD_STYLE}>{dose}</td>
                  {/* TODO: 実際の価格に差し替え */}
                  <td style={{ ...TD_STYLE, textAlign: 'right', color: '#7A8F9A' }}>¥ ─,───</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* CTA */}
        <div style={{ marginBottom: 0 }}>
          <LineButton location="price_page" label="料金についてLINEで相談する" />
        </div>

        <MedicalDisclaimer />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .page-pad { padding: 60px 24px !important; }
        }
      `}</style>
    </>
  )
}
