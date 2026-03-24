'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LineButton } from '@/components/ui/LineButton'

const NAV_LINKS = [
  { href: '/menu/isotretinoin', label: '施術メニュー' },
  { href: '/price',             label: '料金表' },
  { href: '/column',            label: 'コラム' },
  { href: '/access',            label: 'クリニック案内' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 70,
        backgroundColor: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid #D6EEF7',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        padding: '0 32px',
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ textDecoration: 'none', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
        <Image
          src="/logo.png"
          alt="東京LIFEオンラインクリニック"
          width={180}
          height={50}
          style={{ objectFit: 'contain' }}
          priority
        />
      </Link>

      {/* Center nav (hidden on SP) */}
      <nav
        className="pc-nav"
        style={{
          display: 'flex',
          gap: 32,
          margin: '0 auto',
        }}
      >
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            style={{
              fontSize: 14,
              color: '#7A8F9A',
              textDecoration: 'none',
              fontWeight: 400,
              letterSpacing: '0.05em',
            }}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Right: LINE button (hidden on SP) + hamburger */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
        <div className="pc-nav">
          <LineButton location="header" label="LINEで無料相談" />
        </div>

        {/* Hamburger (SP only) */}
        <button
          className="sp-menu-btn"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="メニューを開く"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 4,
            display: 'none',
          }}
        >
          <span
            style={{
              display: 'block',
              width: 24,
              height: 2,
              backgroundColor: '#1A3A4A',
              margin: '5px 0',
              transition: 'transform 0.2s',
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: 24,
              height: 2,
              backgroundColor: '#1A3A4A',
              margin: '5px 0',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 0.2s',
            }}
          />
          <span
            style={{
              display: 'block',
              width: 24,
              height: 2,
              backgroundColor: '#1A3A4A',
              margin: '5px 0',
              transition: 'transform 0.2s',
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* SP drawer */}
      {menuOpen && (
        <div
          className="sp-drawer"
          style={{
            position: 'fixed',
            top: 70,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(255,255,255,0.98)',
            borderBottom: '1px solid #D6EEF7',
            padding: '24px 32px',
            display: 'none',
            flexDirection: 'column',
            gap: 20,
            zIndex: 99,
          }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 15,
                color: '#2C3E50',
                textDecoration: 'none',
                fontWeight: 400,
              }}
            >
              {label}
            </Link>
          ))}
          <LineButton location="header_sp" label="LINEで無料相談" />
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .pc-nav { display: none !important; }
          .sp-menu-btn { display: block !important; }
          .sp-drawer { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
