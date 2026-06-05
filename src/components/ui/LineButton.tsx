'use client'

import Image from 'next/image'
import { CLINIC } from '@/lib/constants'

interface LineButtonProps {
  location: string
  label?: string
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export function LineButton({ location }: LineButtonProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer ?? []
      window.dataLayer.push({
        event: 'click_line_cta',
        location,
      })
    }
  }

  return (
    <a
      href={CLINIC.lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      <Image
        src="/cta-line.webp"
        alt="LINEで診療予約"
        width={320}
        height={80}
        style={{ width: '100%', maxWidth: 320, height: 'auto' }}
      />
    </a>
  )
}
