'use client'
import Image from 'next/image'

export function HeroSlider() {
  return (
    <section style={{ position: 'relative', width: '100%' }}>
      <Image
        src="/hero-main.png"
        alt="東京LIFEオンラインクリニック"
        width={1280}
        height={720}
        quality={100}
        style={{ width: '100%', height: 'auto', display: 'block' }}
        priority
      />
    </section>
  )
}
