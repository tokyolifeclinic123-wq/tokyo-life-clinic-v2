const ITEMS = [
  '院長直接診察',
  '完全オンライン診療',
  '24時間365日受付',
  '薬を自宅に郵送',
  'プライバシー保護',
  'LINEで気軽に相談',
]

const SEPARATOR = ' | '

// Duplicate items for seamless loop
const TEXT = [...ITEMS, ...ITEMS].join(SEPARATOR) + SEPARATOR

export function TrustBar() {
  return (
    <div
      style={{
        backgroundColor: '#1A3A4A',
        overflow: 'hidden',
        padding: '14px 0',
      }}
    >
      <div
        style={{
          display: 'flex',
          whiteSpace: 'nowrap',
        }}
      >
        <span
          className="trust-bar-track"
          style={{
            display: 'inline-block',
            fontSize: 13,
            color: 'rgba(255,255,255,0.8)',
            letterSpacing: '2px',
            fontWeight: 300,
          }}
        >
          {TEXT}
        </span>
        <span
          className="trust-bar-track"
          aria-hidden
          style={{
            display: 'inline-block',
            fontSize: 13,
            color: 'rgba(255,255,255,0.8)',
            letterSpacing: '2px',
            fontWeight: 300,
          }}
        >
          {TEXT}
        </span>
      </div>

      <style>{`
        @keyframes trust-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .trust-bar-track {
          animation: trust-scroll 20s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .trust-bar-track { animation: none; }
        }
      `}</style>
    </div>
  )
}
