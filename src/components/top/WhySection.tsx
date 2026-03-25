const REASONS = [
  {
    num: '01',
    title: '24時間いつでも受付',
    desc: '深夜でも、忙しい日中でも、LINEからいつでも予約・相談が可能です。',
  },
  {
    num: '02',
    title: '最短当日受診・当日発送',
    desc: '予約から処方まで最短当日対応。お薬もすぐにお手元に届きます。',
  },
  {
    num: '03',
    title: '初診からオンライン診療OK',
    desc: '初めての方もオンラインで完結。クリニックに行く必要はありません。',
  },
  {
    num: '04',
    title: '診察料・ご相談０円',
    desc: '初診・再診・ご相談は何度でも無料。安心してご利用いただけます。',
  },
  {
    num: '05',
    title: 'アプリ不要！LINEで完結',
    desc: '特別なアプリは不要です。普段使いのLINEだけで全て完結します。',
  },
  {
    num: '06',
    title: '国内最安値級の価格設定',
    desc: 'いつでも気軽に相談、継続しやすいフォロー体制と安心の価格を実現。',
  },
]

export function WhySection() {
  return (
    <section
      style={{
        padding: '100px 80px',
        backgroundColor: '#E8F8FD',
      }}
      className="why-section"
    >
      {/* Title */}
      <div style={{ marginBottom: 56 }}>
        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 13,
            fontWeight: 300,
            color: '#5BC8E8',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: 10,
          }}
        >
          Why Choose Us
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(24px, 2.8vw, 40px)',
            fontWeight: 400,
            color: '#1A3A4A',
          }}
        >
          選ばれる理由
        </h2>
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1,
          backgroundColor: '#D6EEF7',
        }}
        className="why-grid"
      >
        {REASONS.map((r) => (
          <div
            key={r.num}
            style={{
              backgroundColor: '#fff',
              padding: '36px 32px',
              border: '1px solid #D6EEF7',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 36,
                fontWeight: 300,
                color: '#A8DFF2',
                lineHeight: 1,
                marginBottom: 16,
                letterSpacing: '-0.02em',
              }}
            >
              {r.num}
            </div>
            <h3
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: '#1A3A4A',
                marginBottom: 12,
                lineHeight: 1.5,
              }}
            >
              {r.title}
            </h3>
            <p
              style={{
                fontSize: 13,
                color: '#7A8F9A',
                lineHeight: 1.8,
              }}
            >
              {r.desc}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-section { padding: 60px 24px !important; }
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
