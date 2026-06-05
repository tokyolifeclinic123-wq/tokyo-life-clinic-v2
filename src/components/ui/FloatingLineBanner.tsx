'use client'
import Image from 'next/image'
import { CLINIC } from '@/lib/constants'

export function FloatingLineBanner() {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      const w = window as Window & { dataLayer?: object[] }
      if (w.dataLayer) {
        w.dataLayer.push({
          event: 'click_line_cta',
          location: 'floating_banner',
        })
      }
    }
  }

  return (
    <>
      <style>{`
        .floating-banner-sp {
          display: none;
        }
        @media (max-width: 767px) {
          .floating-banner-sp {
            display: block;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 9999;
          }
        }
      `}</style>
      <a
        href={CLINIC.lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="floating-banner-sp"
      >
        <Image
          src="/cta-line.webp"
          alt="LINEで診療予約"
          width={750}
          height={188}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </a>
    </>
  )
}
