import type { Metadata } from 'next'
import { LineButton } from '@/components/ui/LineButton'
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { CLINIC } from '@/lib/constants'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: '料金表',
  description:
    '東京LIFEオンラインクリニックの料金一覧。メディカルダイエット・美肌内服薬・不眠症治療薬の処方価格。税込表示。',
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
  { label: '送料(通常)',  price: '¥500' },
  { label: '送料(クール便)', price: '¥1,000' },
]

const yen = (n: number) => `¥${n.toLocaleString()}`

type Plan = '定期配送' | '1ヶ月分' | '3ヶ月まとめ買い定期便' | '6ヶ月まとめ買い定期便' | '12ヶ月まとめ買い定期便'
const PLANS: Plan[] = ['定期配送', '1ヶ月分', '3ヶ月まとめ買い定期便', '6ヶ月まとめ買い定期便', '12ヶ月まとめ買い定期便']

type DoseRow = { dose: string; prices: [number, number, number, number, number] }
type FlatRow = { prices: [number, number, number, number, number] }

const MOUNJARO_ROWS: DoseRow[] = [
  { dose: '2.5mg',  prices: [16000, 18000, 45000,  84000,  151200] },
  { dose: '5mg',    prices: [28000, 30000, 78000,  144000, 264000] },
  { dose: '7.5mg',  prices: [39000, 41000, 111000, 210000, 384000] },
  { dose: '10mg',   prices: [52500, 55000, 150000, 285000, 528000] },
]

const RYBELSUS_ROWS: DoseRow[] = [
  { dose: '3mg',   prices: [6500,  7500,  21000, 36000,  66000]  },
  { dose: '7mg',   prices: [16500, 17500, 51000, 96000,  172800] },
  { dose: '14mg',  prices: [25000, 27000, 78000, 144000, 259200] },
]

const METFORMIN_ROWS: DoseRow[] = [
  { dose: '250mg', prices: [5000, 5500, 13500, 24000, 42000] },
  { dose: '500mg', prices: [6000, 6500, 16500, 30000, 54000] },
]

const ISO_ROWS: DoseRow[] = [
  { dose: '10mg', prices: [5000,  5500,  13500, 24000, 42000]  },
  { dose: '20mg', prices: [7000,  7500,  19500, 36000, 60000]  },
  { dose: '30mg', prices: [12000, 13000, 33000, 60000, 102000] },
  { dose: '40mg', prices: [14000, 15000, 39000, 72000, 120000] },
]

const SKIN_SINGLE_ROW: FlatRow = { prices: [2250, 2500, 6000,  10500, 18000] }
const SKIN_SINGLE_HIGH_ROW: FlatRow = { prices: [3250, 3500, 9000,  16500, 30000] }
const SKIN_SET_ROW: FlatRow = { prices: [5000, 5500, 13500, 24000, 42000] }

const DAYVIGO_ROWS: DoseRow[] = [
  { dose: '2.5mg', prices: [5750, 6000, 16500, 31500, 60000] },
  { dose: '5mg',   prices: [6250, 6500, 18000, 34500, 66000] },
]

const ESZOPICLONE_ROWS: DoseRow[] = [
  { dose: '1mg', prices: [3000, 3250, 8250,  15000, 27000] },
  { dose: '2mg', prices: [3750, 4000, 10500, 19500, 36000] },
]

const RHYTHMY_ROWS: DoseRow[] = [
  { dose: '1mg', prices: [3000, 3250, 8250,  15000, 27000] },
  { dose: '2mg', prices: [3750, 4000, 10500, 19500, 36000] },
]

const RAMELTEON_ROWS: DoseRow[] = [
  { dose: '8mg', prices: [3750, 4000, 10500, 19500, 36000] },
]

const SECTION_H2: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontSize: 22,
  fontWeight: 400,
  color: '#1A3A4A',
  marginBottom: 28,
  paddingBottom: 12,
  borderBottom: '1px solid #D6EEF7',
}

const SUB_H3: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontSize: 16,
  fontWeight: 500,
  color: '#1A3A4A',
  marginBottom: 8,
}

const SUB_NOTE: React.CSSProperties = {
  fontSize: 12,
  color: '#7A8F9A',
  lineHeight: 1.7,
  marginBottom: 16,
}

function DoseTable({ rows }: { rows: DoseRow[] }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ ...TH_STYLE, width: '15%' }}>用量</th>
          <th style={TH_STYLE}>プラン</th>
          <th style={{ ...TH_STYLE, textAlign: 'right', width: '24%' }}>価格(税込)</th>
        </tr>
      </thead>
      <tbody>
        {rows.flatMap((r) =>
          PLANS.map((plan, i) => (
            <tr key={`${r.dose}-${plan}`}>
              {i === 0 ? (
                <td style={TD_STYLE} rowSpan={PLANS.length}>{r.dose}</td>
              ) : null}
              <td style={TD_STYLE}>{plan}</td>
              <td style={{ ...TD_STYLE, textAlign: 'right' }}>{yen(r.prices[i])}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}

function FlatTable({ row }: { row: FlatRow }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={TH_STYLE}>プラン</th>
          <th style={{ ...TH_STYLE, textAlign: 'right', width: '24%' }}>価格(税込)</th>
        </tr>
      </thead>
      <tbody>
        {PLANS.map((plan, i) => (
          <tr key={plan}>
            <td style={TD_STYLE}>{plan}</td>
            <td style={{ ...TD_STYLE, textAlign: 'right' }}>{yen(row.prices[i])}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function DrugBlock({
  title,
  note,
  children,
}: {
  title: string
  note?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h3 style={SUB_H3}>{title}</h3>
      {note ? <p style={SUB_NOTE}>{note}</p> : null}
      {children}
    </div>
  )
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
        <section style={{ marginBottom: 72 }}>
          <h2 style={SECTION_H2}>共通費用</h2>
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

        {/* Medical diet */}
        <section style={{ marginBottom: 72 }}>
          <h2 style={SECTION_H2}>メディカルダイエット</h2>

          <DrugBlock title="マンジャロ">
            <DoseTable rows={MOUNJARO_ROWS} />
          </DrugBlock>

          <DrugBlock title="リベルサス">
            <DoseTable rows={RYBELSUS_ROWS} />
          </DrugBlock>

          <DrugBlock title="メトホルミン" note="60錠/月">
            <DoseTable rows={METFORMIN_ROWS} />
          </DrugBlock>
        </section>

        {/* Skin oral */}
        <section style={{ marginBottom: 72 }}>
          <h2 style={SECTION_H2}>美肌内服薬</h2>

          <DrugBlock title="イソトレチノイン">
            <DoseTable rows={ISO_ROWS} />
          </DrugBlock>

          <DrugBlock
            title="美肌内服薬 単品"
            note={
              <>
                下記の医薬品からいずれかお選びください。<br />
                シナール / ユベラ50mg / グルタチオン(タチオン)50mg / トラネキサム酸(トランサミン)250mg / ノイロビタン / ハイチオール錠<br />
                ※60錠/月
              </>
            }
          >
            <FlatTable row={SKIN_SINGLE_ROW} />
          </DrugBlock>

          <DrugBlock
            title="美肌内服薬(増量) 単品"
            note={
              <>
                下記の医薬品からいずれかお選びください。<br />
                グルタチオン(タチオン)100mg / トラネキサム酸(トランサミン)500mg<br />
                ※60錠/月
              </>
            }
          >
            <FlatTable row={SKIN_SINGLE_HIGH_ROW} />
          </DrugBlock>

          <DrugBlock
            title="美肌内服セット"
            note={
              <>
                シナール / ユベラ / トラネキサム酸(トランサミン)250mg<br />
                ※各60錠/月
              </>
            }
          >
            <FlatTable row={SKIN_SET_ROW} />
          </DrugBlock>
        </section>

        {/* Insomnia */}
        <section style={{ marginBottom: 64 }}>
          <h2 style={SECTION_H2}>不眠症治療薬</h2>

          <DrugBlock title="デエビゴ">
            <DoseTable rows={DAYVIGO_ROWS} />
          </DrugBlock>

          <DrugBlock title="エスゾピクロン">
            <DoseTable rows={ESZOPICLONE_ROWS} />
          </DrugBlock>

          <DrugBlock title="リスミー">
            <DoseTable rows={RHYTHMY_ROWS} />
          </DrugBlock>

          <DrugBlock title="ラメルテオン">
            <DoseTable rows={RAMELTEON_ROWS} />
          </DrugBlock>
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
