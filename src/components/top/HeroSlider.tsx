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
    sub: 'イソトレチノインで皮脂を抑え、毛穴から変える。理想の滑らか肌へ。',
  },
  {
    id: 'diet',
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1600&q=80',
    tagLabel: 'メディカルダイエット',
    tagBg: '#5CA83A',
    tagColor: '#fff',
    h1: 'GLP-1受容体作動薬マンジャロで科学的な減量を。',
    sub: 'マンジャロで週に一度、自分を変える。効率的に目指す理想の体。',
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

          {/* Content */}
          <div style={{ maxWidth: 680, position: 'relative', zIndex: 1 }}>
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
                fontSize: 'clamp(22px, 3.5vw, 52px)',
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
                maxWidth: 540,
              }}
            >
              {slide.sub}
            </p>

            <LineButton location="hero" label="LINEで無料相談する" />
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
    </section>
  )
}
