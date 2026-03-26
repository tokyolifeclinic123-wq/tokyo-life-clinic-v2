import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記',
}

const TH_STYLE: React.CSSProperties = {
  padding: '14px 20px',
  backgroundColor: '#E8F8FD',
  fontWeight: 500,
  color: '#1A3A4A',
  fontSize: 13,
  border: '1px solid #D6EEF7',
  verticalAlign: 'top',
  width: '30%',
}

const TD_STYLE: React.CSSProperties = {
  padding: '14px 20px',
  border: '1px solid #D6EEF7',
  color: '#2C3E50',
  fontSize: 14,
  lineHeight: 1.8,
  verticalAlign: 'top',
}

const ROWS = [
  { label: '販売業者',           value: '東京LIFEオンラインクリニック' },
  { label: '運営統括責任者',     value: '院長 佐々木 隆飛' },
  { label: '所在地',             value: '東京都港区赤坂6丁目4-18-406' },
  { label: 'E-mail',             value: 'info@tokyo-life-online-clinic.com' },
  { label: 'ウェブサイト運営業者', value: '東京LIFEオンラインクリニック' },
  { label: '価格等表記',         value: 'サービスごとに記載' },
  { label: '配送業者',           value: '日本郵政・ヤマト運輸株式会社' },
  { label: '送料',               value: 'サービス代金に含まず。別途掲載の通り。' },
  { label: '決済手数料',         value: 'クレジットカード：無料' },
  { label: '代金の支払方法',     value: 'クレジットカード（支払時期は各カード会社による）／銀行振込' },
  { label: '配送時期',           value: '14:00までの決済完了は原則当日発送（土日祝・休業日は翌営業日）。製品到着はご購入日から通常1日〜5日程。' },
  { label: '返品',               value: '医薬品のため、キャンセル・返品は一切お受けしておりません。発送製品に間違いがある場合等、当院に瑕疵がある場合は、ご返送いただいた上で返金いたします。' },
  { label: '領収書の発行',       value: 'クレジットカード決済の支払証明書が領収書として機能するため、別途発行はお受けしておりません。' },
]

export default function TokushoPage() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '120px 40px 80px' }}>
      <p style={{ fontSize: 11, letterSpacing: 3, color: '#7A8F9A', marginBottom: 16 }}>LEGAL</p>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, color: '#1A3A4A', marginBottom: 48 }}>
        特定商取引法に基づく表記
      </h1>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          {ROWS.map(({ label, value }) => (
            <tr key={label}>
              <th style={TH_STYLE}>{label}</th>
              <td style={TD_STYLE}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
