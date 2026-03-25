import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '東京LIFEオンラインクリニックのプライバシーポリシー。患者様の個人情報保護に関する方針を定めます。',
}

const SECTION_TITLE: React.CSSProperties = {
  fontWeight: 500,
  color: '#1A3A4A',
  marginBottom: 8,
  marginTop: 32,
}

const BODY: React.CSSProperties = {
  fontSize: 14,
  color: '#2C3E50',
  lineHeight: 1.9,
}

export default function PrivacyPage() {
  return (
    <div style={{ padding: '100px 80px', backgroundColor: '#ffffff', minHeight: '60vh' }} className="page-pad">
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
          プライバシーポリシー
        </h1>
      </div>

      {/* Body */}
      <div style={{ maxWidth: 760, ...BODY }}>
        <p style={{ marginBottom: 24 }}>
          東京LIFEオンラインクリニック（以下「当院」）は、患者様の個人情報の保護を重要な責務と認識し、以下のプライバシーポリシーを定めます。
        </p>

        <p style={SECTION_TITLE}>【個人情報の定義】</p>
        <p style={{ marginBottom: 16 }}>
          個人情報とは、氏名、生年月日、住所、電話番号、メールアドレス、診療情報など、特定の個人を識別できる情報をいいます。
        </p>

        <p style={SECTION_TITLE}>【個人情報の収集について】</p>
        <p style={{ marginBottom: 8 }}>当院は、以下の目的のために個人情報を収集することがあります。</p>
        <p>・オンライン診療の実施および処方薬の発送</p>
        <p>・診療予約の管理</p>
        <p>・医療費の請求および決済</p>
        <p>・お問い合わせへの対応</p>
        <p style={{ marginBottom: 16 }}>・サービス改善のための統計分析（個人を特定しない形式）</p>

        <p style={SECTION_TITLE}>【個人情報の利用目的】</p>
        <p style={{ marginBottom: 16 }}>
          収集した個人情報は、収集目的の範囲内でのみ利用します。法令に基づく場合を除き、患者様の同意なく第三者に提供することはありません。
        </p>

        <p style={SECTION_TITLE}>【個人情報の第三者提供】</p>
        <p style={{ marginBottom: 8 }}>当院は、以下の場合を除き、患者様の個人情報を第三者に提供しません。</p>
        <p>・患者様本人の同意がある場合</p>
        <p>・法令に基づく開示が必要な場合</p>
        <p>・患者様の生命、身体または財産の保護のために必要な場合</p>
        <p style={{ marginBottom: 16 }}>・処方薬の発送に必要な範囲で配送業者に提供する場合</p>

        <p style={SECTION_TITLE}>【個人情報の管理】</p>
        <p style={{ marginBottom: 16 }}>
          当院は、個人情報の漏洩、滅失またはき損を防止するため、適切なセキュリティ対策を実施します。
        </p>

        <p style={SECTION_TITLE}>【Cookie（クッキー）について】</p>
        <p style={{ marginBottom: 16 }}>
          当院のウェブサイトでは、サービス改善およびアクセス解析のためにCookieを使用することがあります。ブラウザの設定によりCookieを無効にすることが可能ですが、一部のサービスが利用できなくなる場合があります。
        </p>

        <p style={SECTION_TITLE}>【個人情報の開示・訂正・削除】</p>
        <p style={{ marginBottom: 16 }}>
          患者様は、当院が保有するご自身の個人情報の開示、訂正、削除を請求する権利を有します。ご請求の際はLINEよりお問い合わせください。
        </p>

        <p style={SECTION_TITLE}>【プライバシーポリシーの変更】</p>
        <p style={{ marginBottom: 16 }}>
          当院は、法令の変更やサービス内容の変更に伴い、本プライバシーポリシーを変更することがあります。変更後のポリシーは、当ウェブサイトに掲載した時点から効力を生じるものとします。
        </p>

        <p style={SECTION_TITLE}>【お問い合わせ】</p>
        <p style={{ marginBottom: 40 }}>
          個人情報の取り扱いに関するお問い合わせは、LINEよりご連絡ください。
        </p>

        <div
          style={{
            borderTop: '1px solid #D6EEF7',
            paddingTop: 24,
            fontSize: 13,
            color: '#7A8F9A',
            lineHeight: 2,
          }}
        >
          <p>東京LIFEオンラインクリニック</p>
          <p>院長：佐々木 隆飛</p>
          <p>所在地：〒107-0052 東京都港区赤坂6丁目4-18-406</p>
          <p style={{ marginTop: 16 }}>制定日：2024年1月1日</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .page-pad { padding: 60px 24px !important; }
        }
      `}</style>
    </div>
  )
}
