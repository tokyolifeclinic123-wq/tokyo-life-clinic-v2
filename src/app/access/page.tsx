import type { Metadata } from 'next'
import { CLINIC } from '@/lib/constants'
import { LineButton } from '@/components/ui/LineButton'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'クリニック案内・アクセス',
  description:
    '東京LIFEオンラインクリニックのご案内。院長：佐々木隆飛。東京都港区赤坂。24時間受付。',
}

const INFO_ROWS = [
  { label: '診療形態', value: '完全オンライン診療' },
  { label: '受付時間', value: CLINIC.hours },
  { label: '所在地',   value: `${CLINIC.address}` },
  { label: '予約方法', value: 'LINEにてご予約' },
]

const TH_STYLE: React.CSSProperties = {
  textAlign: 'left',
  padding: '14px 20px',
  backgroundColor: '#E8F8FD',
  fontWeight: 500,
  color: '#1A3A4A',
  fontSize: 13,
  border: '1px solid #D6EEF7',
  width: '30%',
  verticalAlign: 'top',
}

const TD_STYLE: React.CSSProperties = {
  padding: '14px 20px',
  border: '1px solid #D6EEF7',
  color: '#2C3E50',
  fontSize: 14,
  lineHeight: 1.7,
}

export default function AccessPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'ホーム',       url: CLINIC.siteUrl },
          { name: 'クリニック案内', url: `${CLINIC.siteUrl}/access` },
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
            About
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(24px, 3vw, 42px)',
              fontWeight: 400,
              color: '#1A3A4A',
            }}
          >
            クリニック案内
          </h1>
        </div>

        {/* Intro */}
        <section style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 15, color: '#2C3E50', lineHeight: 1.9, maxWidth: 720 }}>
            全国どこからでも、スマホひとつでいつものお薬を。待ち時間ゼロのオンライン診療。お住まいの地域に関わらず、専門的な医療アドバイスを受けられるオンライン診療サービスです。画面越しでも対面診療と変わらない丁寧なヒアリングを行い、お一人おひとりの症状に合わせた最適な処方・アドバイスをご提案します。
          </p>
        </section>

        {/* Director profile */}
        <section style={{ marginBottom: 64 }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 20,
              fontWeight: 400,
              color: '#1A3A4A',
              marginBottom: 28,
            }}
          >
            院長プロフィール
          </h2>
          <div>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 22,
                fontWeight: 400,
                color: '#1A3A4A',
                marginBottom: 4,
              }}
            >
              {CLINIC.director}
            </p>
            <p style={{ fontSize: 13, color: '#7A8F9A', marginBottom: 20 }}>院長・医師</p>
            <p style={{ fontSize: 14, color: '#2C3E50', lineHeight: 1.9, maxWidth: 560 }}>
              患者様一人ひとりに寄り添い、丁寧な診察を心がけています。
              オンラインでも対面と変わらない質の高い医療を提供することをお約束します。
            </p>
          </div>
        </section>

        {/* Info table */}
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
            診療情報
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {INFO_ROWS.map(({ label, value }) => (
                <tr key={label}>
                  <th style={TH_STYLE}>{label}</th>
                  <td style={TD_STYLE}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Address */}
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
            所在地
          </h2>
          <p style={{ fontSize: 14, color: '#2C3E50' }}>
            〒107-0052 東京都港区赤坂6丁目4-18-406
          </p>
        </section>

        {/* CTA */}
        <LineButton location="access_page" label="LINEで予約する" />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .page-pad { padding: 60px 24px !important; }
          .profile-row { flex-direction: column !important; gap: 24px !important; }
        }
      `}</style>
    </>
  )
}
