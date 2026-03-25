import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '東京LIFEオンラインクリニックのプライバシーポリシーです。',
}

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '120px 40px 80px' }}>
      <p style={{ fontSize: 11, letterSpacing: 3, color: '#7A8F9A', marginBottom: 16 }}>LEGAL</p>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, color: '#1A3A4A', marginBottom: 48 }}>
        プライバシーポリシー
      </h1>

      <p style={{ marginBottom: 32, lineHeight: 1.9, color: '#2C3E50' }}>
        東京LIFEオンラインクリニック（以下「当院」）は、患者様の個人情報の保護を重要な責務と認識し、以下のプライバシーポリシーを定めます。
      </p>

      {[
        {
          title: '個人情報の定義',
          content: '個人情報とは、氏名、生年月日、住所、電話番号、メールアドレス、診療情報など、特定の個人を識別できる情報をいいます。'
        },
        {
          title: '個人情報の収集について',
          content: '当院は、以下の目的のために個人情報を収集することがあります。\n・オンライン診療の実施および処方薬の発送\n・診療予約の管理\n・医療費の請求および決済\n・お問い合わせへの対応\n・サービス改善のための統計分析（個人を特定しない形式）'
        },
        {
          title: '個人情報の利用目的',
          content: '収集した個人情報は、収集目的の範囲内でのみ利用します。法令に基づく場合を除き、患者様の同意なく第三者に提供することはありません。'
        },
        {
          title: '個人情報の第三者提供',
          content: '当院は、以下の場合を除き、患者様の個人情報を第三者に提供しません。\n・患者様本人の同意がある場合\n・法令に基づく開示が必要な場合\n・患者様の生命、身体または財産の保護のために必要な場合\n・処方薬の発送に必要な範囲で配送業者に提供する場合'
        },
        {
          title: '個人情報の管理',
          content: '当院は、個人情報の漏洩、滅失またはき損を防止するため、適切なセキュリティ対策を実施します。'
        },
        {
          title: 'Cookie（クッキー）について',
          content: '当院のウェブサイトでは、サービス改善およびアクセス解析のためにCookieを使用することがあります。ブラウザの設定によりCookieを無効にすることが可能ですが、一部のサービスが利用できなくなる場合があります。'
        },
        {
          title: '個人情報の開示・訂正・削除',
          content: '患者様は、当院が保有するご自身の個人情報の開示、訂正、削除を請求する権利を有します。ご請求の際はLINEよりお問い合わせください。'
        },
        {
          title: 'プライバシーポリシーの変更',
          content: '当院は、法令の変更やサービス内容の変更に伴い、本プライバシーポリシーを変更することがあります。変更後のポリシーは、当ウェブサイトに掲載した時点から効力を生じるものとします。'
        },
        {
          title: 'お問い合わせ',
          content: '個人情報の取り扱いに関するお問い合わせは、LINEよりご連絡ください。\n\n東京LIFEオンラインクリニック\n院長：佐々木 隆飛\n所在地：〒107-0052 東京都港区赤坂6丁目4-18-406\n\n制定日：2024年1月1日'
        },
      ].map((section) => (
        <section key={section.title} style={{ marginBottom: 40, borderTop: '1px solid #D6EEF7', paddingTop: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: '#1A3A4A', marginBottom: 16 }}>
            {section.title}
          </h2>
          <p style={{ lineHeight: 1.9, color: '#2C3E50', whiteSpace: 'pre-line' }}>
            {section.content}
          </p>
        </section>
      ))}
    </main>
  )
}
