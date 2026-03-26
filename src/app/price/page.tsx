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

const COMMON_ROWS = [
  { label: '診察料',        price: '無料' },
  { label: '再診料',        price: '無料' },
  { label: '送料（通常）',  price: '¥500' },
  { label: '送料（クール便）', price: '¥1,000' },
]

const MOUNJARO_ROWS = [
  { dose: '2.5mg', plan: '定期配送',            price: '¥16,000' },
  { dose: '2.5mg', plan: '1ヶ月分',             price: '¥18,000' },
  { dose: '2.5mg', plan: '3ヶ月まとめ買い定期便', price: '¥45,000' },
  { dose: '2.5mg', plan: '6ヶ月まとめ買い定期便', price: '¥84,000' },
  { dose: '5mg',   plan: '定期配送',            price: '¥28,000' },
  { dose: '5mg',   plan: '1ヶ月分',             price: '¥30,000' },
  { dose: '5mg',   plan: '3ヶ月まとめ買い定期便', price: '¥78,000' },
  { dose: '5mg',   plan: '6ヶ月まとめ買い定期便', price: '¥144,000' },
  { dose: '7.5mg', plan: '定期配送',            price: '¥39,000' },
  { dose: '7.5mg', plan: '1ヶ月分',             price: '¥41,000' },
  { dose: '7.5mg', plan: '3ヶ月まとめ買い定期便', price: '¥111,000' },
  { dose: '7.5mg', plan: '6ヶ月まとめ買い定期便', price: '¥210,000' },
]

const ISO_ROWS = [
  { dose: '10mg', plan: '定期配送',            price: '¥5,000' },
  { dose: '10mg', plan: '1ヶ月分',             price: '¥5,500' },
  { dose: '10mg', plan: '3ヶ月まとめ買い定期便', price: '¥13,500' },
  { dose: '10mg', plan: '6ヶ月まとめ買い定期便', price: '¥24,000' },
  { dose: '20mg', plan: '定期配送',            price: '¥7,000' },
  { dose: '20mg', plan: '1ヶ月分',             price: '¥7,500' },
  { dose: '20mg', plan: '3ヶ月まとめ買い定期便', price: '¥19,500' },
  { dose: '20mg', plan: '6ヶ月まとめ買い定期便', price: '¥36,000' },
]

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
              fontSize: 'clamp(24px, 3vw, 42px)',
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

        {/* Common fees */}
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
            共通費用
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={TH_STYLE}>項目</th>
                <th style={{ ...TH_STYLE, textAlign: 'right' }}>金額</th>
              </tr>
            </thead>
            <tbody>
              {COMMON_ROWS.map(({ label, price }) => (
                <tr key={label}>
                  <td style={TD_STYLE}>{label}</td>
                  <td style={{ ...TD_STYLE, textAlign: 'right' }}>{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Mounjaro table */}
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
            メディカルダイエット（マンジャロ）
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={TH_STYLE}>用量</th>
                <th style={TH_STYLE}>プラン</th>
                <th style={{ ...TH_STYLE, textAlign: 'right' }}>価格（税込）</th>
              </tr>
            </thead>
            <tbody>
              {MOUNJARO_ROWS.map(({ dose, plan, price }, i) => (
                <tr key={i}>
                  <td style={TD_STYLE}>{dose}</td>
                  <td style={TD_STYLE}>{plan}</td>
                  <td style={{ ...TD_STYLE, textAlign: 'right' }}>{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Isotretinoin table */}
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
            美肌内服薬（イソトレチノイン）
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={TH_STYLE}>用量</th>
                <th style={TH_STYLE}>プラン</th>
                <th style={{ ...TH_STYLE, textAlign: 'right' }}>価格（税込）</th>
              </tr>
            </thead>
            <tbody>
              {ISO_ROWS.map(({ dose, plan, price }, i) => (
                <tr key={i}>
                  <td style={TD_STYLE}>{dose}</td>
                  <td style={TD_STYLE}>{plan}</td>
                  <td style={{ ...TD_STYLE, textAlign: 'right' }}>{price}</td>
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
