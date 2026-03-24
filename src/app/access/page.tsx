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
            東京LIFEオンラインクリニックは、忙しい現代人のために生まれたオンライン専門クリニックです。
            通院不要・24時間受付・薬を自宅にお届けする仕組みで、あなたのペースで治療を続けられます。
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
          <div
            style={{
              display: 'flex',
              gap: 40,
              alignItems: 'flex-start',
            }}
            className="profile-row"
          >
            {/* Avatar placeholder */}
            <div
              style={{
                width: 120,
                height: 120,
                backgroundColor: '#E8F8FD',
                border: '1px solid #D6EEF7',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: 11, color: '#A8DFF2', letterSpacing: '0.05em' }}>PHOTO</span>
            </div>

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

        {/* Map placeholder */}
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
          {/* TODO: Google Maps 埋め込みURLを差し替え */}
          <div
            style={{
              width: '100%',
              height: 320,
              backgroundColor: '#E8F8FD',
              border: '1px solid #D6EEF7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <p style={{ fontSize: 13, color: '#A8DFF2', letterSpacing: '0.08em' }}>地図を表示予定</p>
          </div>
          <p style={{ fontSize: 12, color: '#7A8F9A', marginTop: 12 }}>
            〒{CLINIC.postalCode} {CLINIC.address}
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
