'use client'
import Image from 'next/image'

export function InteriorSlider() {
  const images = [
    { src: '/interior-01.png', alt: '内装イメージ1' },
    { src: '/interior-02.png', alt: '内装イメージ2' },
    { src: '/interior-03.png', alt: '内装イメージ3' },
    { src: '/interior-04.png', alt: '内装イメージ4' },
  ]

  // 無限ループのために画像を2回繰り返す
  const doubled = [...images, ...images]

  return (
    <section style={{ overflow: 'hidden', background: '#fff', padding: '60px 0' }}>
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .interior-track {
          display: flex;
          animation: scroll-left 20s linear infinite;
          width: max-content;
        }
        .interior-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="interior-track">
        {doubled.map((img, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: 360,
              height: 240,
              marginRight: 16,
              overflow: 'hidden',
              borderRadius: 8,
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={360}
              height={240}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
