import type { Metadata } from 'next'
import Image from 'next/image'
import { CLINIC } from '@/lib/constants'
import { LineButton } from '@/components/ui/LineButton'
import { InteriorSlider } from '@/components/ui/InteriorSlider'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'クリニック案内・アクセス',
  description:
    '東京LIFEオンラインクリニックのご案内。院長：佐々木隆飛。東京都港区赤坂。24時間受付。',
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

        {/* クリニック案内・院長プロフィール画像 */}
        <section style={{ marginBottom: 64 }}>
          {/* PC用画像 */}
          <div className="hidden md:block">
            <Image
              src="/clinic-pc.png"
              alt="クリニック案内・院長プロフィール"
              width={1280}
              height={640}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          {/* SP用画像 */}
          <div className="block md:hidden">
            <Image
              src="/clinic-sp.png"
              alt="クリニック案内・院長プロフィール"
              width={750}
              height={1200}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
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

      <InteriorSlider />

      <style>{`
        @media (max-width: 768px) {
          .page-pad { padding: 60px 24px !important; }
        }
      `}</style>
    </>
  )
}
