'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { LineButton } from '@/components/ui/LineButton'

const SLIDES = [
  {
    id: 'beauty',
    imageUrl: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1600&q=80',
    tagLabel: '美肌内服薬',
    tagBg: '#5BC8E8',
    tagColor: '#fff',
    h1: '医師が処方する本格的なニキビ治療を自宅から。',
    sub: 'イソトレチノインは、重症ニキビ・繰り返すニキビに高い効果が認められた医療用内服薬。オンライン診療で、手軽に・確実に。',
    drugs: [
      { name: 'イソトレチノイン 10mg', target: '軽度〜中等度' },
      { name: 'イソトレチノイン 20mg', target: '中等度〜重度' },
    ],
  },
  {
    id: 'diet',
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1600&q=80',
    tagLabel: 'メディカルダイエット',
    tagBg: '#5CA83A',
    tagColor: '#fff',
    h1: 'GLP-1受容体作動薬マンジャロで科学的な減量を。',
    sub: '週1回の自己注射で、食欲をコントロール。医師のサポートと定期フォローで安全・確実に体重管理を実現します。',
    drugs: [
      { name: 'マンジャロ 2.5mg', target: '導入期' },
      { name: 'マンジャロ 5mg',   target: '維持期' },
      { name: 'マンジャロ 7.5mg', target: '強化期' },
    ],
  },
] as const

const INTERVAL = 5000

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [])

  const slide = SLIDES[current]

  return (
    <section
      style={{
        position: 'relative',
        height: '90vh',
        minHeight: 600,
        overflow: 'hidden',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            padding: '0 80px',
          }}
        >
          {/* Background image */}
          <Image
            src={slide.imageUrl}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority={slide.id === 'beauty'}
          />

          {/* White overlay for readability */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(255,255,255,0.55)',
            }}
          />

          {/* Left content */}
          <div style={{ flex: 1, maxWidth: 600, position: 'relative', zIndex: 1 }}>
            {/* Tag */}
            <span
              style={{
                display: 'inline-block',
                backgroundColor: slide.tagBg,
                color: slide.tagColor,
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '0.1em',
                padding: '4px 14px',
                marginBottom: 28,
              }}
            >
              {slide.tagLabel}
            </span>

            {/* H1 */}
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(22px, 3vw, 38px)',
                fontWeight: 400,
                color: '#1A3A4A',
                lineHeight: 1.6,
                marginBottom: 24,
              }}
            >
              {slide.h1}
            </h1>

            {/* Sub */}
            <p
              style={{
                fontSize: 14,
                color: '#2C3E50',
                lineHeight: 1.9,
                marginBottom: 40,
                maxWidth: 480,
              }}
            >
              {slide.sub}
            </p>

            <LineButton location="hero" label="LINEで無料相談する" />
          </div>

          {/* Right: drug table (PC only) */}
          <div
            className="hero-drug-table"
            style={{
              flexShrink: 0,
              width: 300,
              marginLeft: 60,
              position: 'relative',
              zIndex: 1,
            }}
          >
            <p
              style={{
                fontSize: 11,
                color: '#7A8F9A',
                letterSpacing: '0.1em',
                marginBottom: 12,
                textTransform: 'uppercase',
              }}
            >
              処方薬剤
            </p>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: 13,
                backgroundColor: 'rgba(255,255,255,0.85)',
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '8px 12px',
                      borderBottom: '1px solid rgba(26,58,74,0.2)',
                      fontWeight: 500,
                      color: '#1A3A4A',
                      fontSize: 11,
                      letterSpacing: '0.05em',
                    }}
                  >
                    薬剤名
                  </th>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '8px 12px',
                      borderBottom: '1px solid rgba(26,58,74,0.2)',
                      fontWeight: 500,
                      color: '#1A3A4A',
                      fontSize: 11,
                      letterSpacing: '0.05em',
                    }}
                  >
                    対象
                  </th>
                </tr>
              </thead>
              <tbody>
                {slide.drugs.map((d) => (
                  <tr key={d.name}>
                    <td
                      style={{
                        padding: '10px 12px',
                        borderBottom: '1px solid rgba(26,58,74,0.1)',
                        color: '#2C3E50',
                      }}
                    >
                      {d.name}
                    </td>
                    <td
                      style={{
                        padding: '10px 12px',
                        borderBottom: '1px solid rgba(26,58,74,0.1)',
                        color: '#7A8F9A',
                        fontSize: 12,
                      }}
                    >
                      {d.target}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 10,
          zIndex: 10,
        }}
      >
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setCurrent(i)}
            aria-label={`スライド ${i + 1}`}
            style={{
              width: i === current ? 28 : 8,
              height: 8,
              backgroundColor: i === current ? '#1A3A4A' : 'rgba(26,58,74,0.3)',
              border: 'none',
              borderRadius: 0,
              cursor: 'pointer',
              padding: 0,
              transition: 'width 0.3s, background-color 0.3s',
            }}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-drug-table { display: none !important; }
        }
      `}</style>
    </section>
  )
}
