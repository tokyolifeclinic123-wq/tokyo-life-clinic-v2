'use client'
import Image from 'next/image'

export function HeroSlider() {
  return (
    <section style={{ position: 'relative', height: '90vh', minHeight: 600, overflow: 'hidden' }}>
      <Image
        src="/hero-main.png"
        alt="東京LIFEオンラインクリニック"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority
      />
    </section>
  )
}
