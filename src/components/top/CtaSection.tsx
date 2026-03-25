import { LineButton } from '@/components/ui/LineButton'

export function CtaSection() {
  return (
    <section
      style={{
        backgroundColor: '#1A3A4A',
        padding: '100px 80px',
        textAlign: 'center',
      }}
      className="cta-section"
    >
      <h2
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(20px, 2.5vw, 28px)',
          fontWeight: 400,
          color: '#fff',
          lineHeight: 1.6,
          marginBottom: 20,
        }}
      >
        まずはLINEで、気軽にご相談ください。
      </h2>

      <p
        style={{
          fontSize: 13,
          color: 'rgba(255,255,255,0.6)',
          letterSpacing: '0.1em',
          marginBottom: 40,
        }}
      >
        24時間受付中 ｜ 初診・再診・ご相談０円 ｜ プライバシー完全保護
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
        <LineButton
          location="cta_section"
          label="LINEを友だち追加して相談する"
        />
      </div>

      <p
        style={{
          fontSize: 11,
          color: 'rgba(255,255,255,0.4)',
          lineHeight: 1.8,
        }}
      >
        ※本サービスは医薬品を取り扱います。副作用・リスクについては診察時に詳しくご説明します。
      </p>

      <style>{`
        @media (max-width: 768px) {
          .cta-section { padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  )
}
