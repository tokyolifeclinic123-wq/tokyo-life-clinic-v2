'use client'

import Image from 'next/image'
import { CLINIC } from '@/lib/constants'

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export function FloatingLineBanner() {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer ?? []
      window.dataLayer.push({
        event: 'click_line_cta',
        location: 'floating_banner',
      })
    }
  }

  return (
    <a
      className="md:hidden"
      href={CLINIC.lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        display: 'block',
      }}
    >
      <Image
        src="/cta-line.webp"
        alt="LINEで診療予約"
        width={390}
        height={80}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </a>
  )
}
