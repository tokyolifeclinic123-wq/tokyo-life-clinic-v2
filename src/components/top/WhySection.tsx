const REASONS = [
  {
    num: '01',
    title: '院長が直接診察・処方',
    desc: '専門医である院長が一人ひとりの状態を丁寧に確認し、最適な治療薬を処方します。',
  },
  {
    num: '02',
    title: '24時間いつでも受付',
    desc: 'LINEから24時間いつでも相談・予約が可能。忙しい方も自分のペースで受診できます。',
  },
  {
    num: '03',
    title: '薬はご自宅に郵送',
    desc: '処方薬はご自宅に直接お届け。薬局に行く手間がなく、プライバシーも守られます。',
  },
  {
    num: '04',
    title: '医療広告ガイドライン準拠',
    desc: '提供するすべての情報は医療広告ガイドラインに基づき、誇大表現を一切排除しています。',
  },
  {
    num: '05',
    title: '継続しやすいフォロー体制',
    desc: '定期的な経過確認と用量調整により、安全に治療を継続できる体制を整えています。',
  },
  {
    num: '06',
    title: '完全プライバシー保護',
    desc: '受診内容・処方情報は厳重に管理。第三者への開示は一切行いません。',
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
