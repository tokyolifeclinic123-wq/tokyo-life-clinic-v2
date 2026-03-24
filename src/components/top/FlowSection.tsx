const STEPS = [
  {
    num: '01',
    title: 'LINEで相談・予約',
    desc: 'LINEを友だち追加し、症状や気になることを気軽にメッセージ。医師またはスタッフが対応します。',
  },
  {
    num: '02',
    title: 'オンライン診察',
    desc: 'テキストまたはビデオで医師が診察。症状・既往歴・服薬状況を確認のうえ処方を判断します。',
  },
  {
    num: '03',
    title: '処方・お支払い',
    desc: '処方内容とお支払い方法をご案内します。クレジットカード・銀行振込に対応しています。',
  },
  {
    num: '04',
    title: '薬がご自宅に届く',
    desc: '処方薬を郵送でお届け。届いたらすぐに服用を開始できます。不明点はLINEでいつでも相談可能。',
  },
]

export function FlowSection() {
  return (
    <section
      style={{
        padding: '100px 80px',
        backgroundColor: '#fff',
      }}
      className="flow-section"
    >
      {/* Title */}
      <div style={{ marginBottom: 56 }}>
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
          How It Works
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(22px, 2.5vw, 30px)',
            fontWeight: 400,
            color: '#1A3A4A',
          }}
        >
          受診の流れ
        </h2>
      </div>

      {/* Steps */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 0,
        }}
        className="flow-steps"
      >
        {STEPS.map((step, i) => (
          <div
            key={step.num}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              flex: 1,
            }}
          >
            {/* Step card */}
            <div
              style={{
                flex: 1,
                borderTop: '2px solid #5BC8E8',
                paddingTop: 24,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 40,
                  fontWeight: 300,
                  color: '#D6EEF7',
                  lineHeight: 1,
                  marginBottom: 12,
                  letterSpacing: '-0.02em',
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: '#1A3A4A',
                  marginBottom: 12,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: '#7A8F9A',
                  lineHeight: 1.8,
                  paddingRight: i < STEPS.length - 1 ? 32 : 0,
                }}
              >
                {step.desc}
              </p>
            </div>

            {/* Arrow (between steps) */}
            {i < STEPS.length - 1 && (
              <div
                className="flow-arrow"
                style={{
                  flexShrink: 0,
                  fontSize: 18,
                  color: '#A8DFF2',
                  padding: '20px 16px 0',
                  alignSelf: 'flex-start',
                }}
              >
                →
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .flow-section { padding: 60px 24px !important; }
          .flow-steps { flex-direction: column !important; gap: 32px !important; }
          .flow-arrow { transform: rotate(90deg); padding: 0 0 0 0 !important; align-self: center !important; }
        }
      `}</style>
    </section>
  )
}
