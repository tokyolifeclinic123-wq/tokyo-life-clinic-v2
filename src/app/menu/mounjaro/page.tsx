import type { Metadata } from 'next'
import { LineButton } from '@/components/ui/LineButton'
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { CLINIC } from '@/lib/constants'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'メディカルダイエット（マンジャロ）',
  description:
    'マンジャロ（GLP-1/GIP受容体作動薬）によるメディカルダイエット。医師の管理のもと、安全に体重管理を行います。',
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

const FLOW_STEPS = [
  { num: '01', title: 'LINEで相談・予約',  desc: 'LINEを友だち追加し、症状や気になることをメッセージ。スタッフが対応します。' },
  { num: '02', title: 'オンライン診察',     desc: '医師がテキストまたはビデオで診察。BMI・既往歴・服薬状況を確認のうえ処方を判断します。' },
  { num: '03', title: '処方・お支払い',     desc: '処方内容とお支払い方法をご案内します。クレジットカード・銀行振込に対応。' },
  { num: '04', title: '薬がご自宅に届く',   desc: '処方薬を郵送でお届け。定期フォローもLINEで実施します。' },
]

const SIDE_EFFECTS = [
  '吐き気・嘔吐',
  '下痢・便秘',
  '食欲不振',
  '注射部位の反応',
  '低血糖（他の糖尿病薬と併用時）',
]

export default function MounjaroPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'ホーム',             url: BASE },
          { name: '施術メニュー',       url: `${BASE}/menu` },
          { name: 'メディカルダイエット', url: `${BASE}/menu/mounjaro` },
        ]}
      />

      <div style={{ padding: '100px 80px' }} className="page-pad">

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
            Medical Diet
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 400,
              color: '#1A3A4A',
            }}
          >
            メディカルダイエット
          </h1>
        </div>

        {/* Overview */}
        <section style={{ marginBottom: 64 }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 20,
              fontWeight: 400,
              color: '#1A3A4A',
              marginBottom: 20,
            }}
          >
            マンジャロとは
          </h2>
          <p style={{ fontSize: 15, color: '#2C3E50', lineHeight: 1.9, maxWidth: 720 }}>
            マンジャロ（一般名：チルゼパチド）は、GLP-1/GIP受容体作動薬です。
            食欲を抑制し、血糖値をコントロールすることで、体重管理をサポートします。
            週1回の自己注射で使用します。
          </p>
        </section>

        {/* Indications */}
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
            対象となる方
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              '食欲のコントロールが難しい方',
              '食事制限・運動だけでは結果が出ない方',
              '医師の管理のもとで安全に減量したい方',
              'BMI 25以上の方（目安）',
            ].map((item) => (
              <li
                key={item}
                style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: '#2C3E50' }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: 6,
                    height: 6,
                    backgroundColor: '#5BC8E8',
                    flexShrink: 0,
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Drug lineup */}
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
            処方ラインナップ
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={TH_STYLE}>薬剤名</th>
                <th style={TH_STYLE}>用量</th>
                <th style={TH_STYLE}>投与間隔</th>
              </tr>
            </thead>
            <tbody>
              {['2.5mg', '5mg', '7.5mg'].map((dose) => (
                <tr key={dose}>
                  <td style={TD_STYLE}>マンジャロ</td>
                  <td style={TD_STYLE}>{dose}</td>
                  <td style={{ ...TD_STYLE, color: '#7A8F9A' }}>週1回</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Flow */}
        <section style={{ marginBottom: 64 }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 20,
              fontWeight: 400,
              color: '#1A3A4A',
              marginBottom: 32,
            }}
          >
            治療の流れ
          </h2>
          <div
            style={{ display: 'flex', alignItems: 'flex-start', gap: 0 }}
            className="flow-steps"
          >
            {FLOW_STEPS.map((step, i) => (
              <div key={step.num} style={{ display: 'flex', alignItems: 'flex-start', flex: 1 }}>
                <div style={{ flex: 1, borderTop: '2px solid #5BC8E8', paddingTop: 20 }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 36,
                      fontWeight: 300,
                      color: '#D6EEF7',
                      lineHeight: 1,
                      marginBottom: 10,
                    }}
                  >
                    {step.num}
                  </div>
                  <h3 style={{ fontSize: 14, fontWeight: 500, color: '#1A3A4A', marginBottom: 10 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 12, color: '#7A8F9A', lineHeight: 1.8, paddingRight: i < 3 ? 24 : 0 }}>
                    {step.desc}
                  </p>
                </div>
                {i < FLOW_STEPS.length - 1 && (
                  <div
                    className="flow-arrow"
                    style={{ flexShrink: 0, fontSize: 16, color: '#A8DFF2', padding: '16px 12px 0' }}
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Side effects */}
        <section
          style={{
            marginBottom: 64,
            padding: '32px 36px',
            border: '1px solid #D6EEF7',
            backgroundColor: '#FAFCFE',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 18,
              fontWeight: 400,
              color: '#1A3A4A',
              marginBottom: 16,
            }}
          >
            注意事項・副作用について
          </h2>
          <p style={{ fontSize: 14, color: '#2C3E50', lineHeight: 1.9, marginBottom: 20 }}>
            マンジャロは医師の処方が必要な医薬品です。以下の副作用が現れる場合があります。
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {SIDE_EFFECTS.map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: '#2C3E50' }}>
                <span style={{ display: 'inline-block', width: 6, height: 6, backgroundColor: '#C9A96E', flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: 12, color: '#7A8F9A', lineHeight: 1.8 }}>
            妊娠中・授乳中の方、重篤な消化器疾患のある方は使用できません。診察時に詳しくご説明します。
          </p>
        </section>

        {/* Price */}
        <section style={{ marginBottom: 64 }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 20,
              fontWeight: 400,
              color: '#1A3A4A',
              marginBottom: 20,
            }}
          >
            料金
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 12 }}>
            <thead>
              <tr>
                <th style={TH_STYLE}>薬剤名</th>
                <th style={TH_STYLE}>用量</th>
                <th style={{ ...TH_STYLE, textAlign: 'right' }}>価格（4週分・税込）</th>
              </tr>
            </thead>
            <tbody>
              {['2.5mg', '5mg', '7.5mg'].map((dose) => (
                <tr key={dose}>
                  <td style={TD_STYLE}>マンジャロ</td>
                  <td style={TD_STYLE}>{dose}</td>
                  {/* TODO: 実際の価格に差し替え */}
                  <td style={{ ...TD_STYLE, textAlign: 'right', color: '#7A8F9A' }}>¥ ─,───</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: 12, color: '#9A9A9A' }}>※表示価格はすべて税込です。</p>
        </section>

        {/* CTA */}
        <div style={{ marginBottom: 0 }}>
          <LineButton location="menu_diet" label="マンジャロについてLINEで相談する" />
        </div>

        <MedicalDisclaimer />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .page-pad { padding: 60px 24px !important; }
          .flow-steps { flex-direction: column !important; gap: 28px !important; }
          .flow-arrow { transform: rotate(90deg); align-self: center !important; padding: 0 !important; }
        }
      `}</style>
    </>
  )
}
