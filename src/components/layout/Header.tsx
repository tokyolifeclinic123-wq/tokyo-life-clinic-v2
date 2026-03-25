'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LineButton } from '@/components/ui/LineButton'

const MENU_LINKS = [
  { href: '/menu/isotretinoin', label: '美肌内服薬' },
  { href: '/menu/mounjaro',     label: 'メディカルダイエット' },
]

const NAV_LINKS = [
  { href: '/price',   label: '料金表' },
  { href: '/column',  label: 'コラム' },
  { href: '/access',  label: 'クリニック案内' },
]

export function Header() {
  const [menuOpen, setMenuOpen]     = useState(false)
  const [dropOpen, setDropOpen]     = useState(false)
  const [spMenuOpen, setSpMenuOpen] = useState(false)

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
        style={{ display: 'flex', gap: 32, margin: '0 auto', alignItems: 'center' }}
      >
        {/* 施術メニュー dropdown */}
        <div
          style={{ position: 'relative' }}
          onMouseEnter={() => setDropOpen(true)}
          onMouseLeave={() => setDropOpen(false)}
        >
          <button
            style={{
              fontSize: 14,
              color: '#7A8F9A',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 400,
              letterSpacing: '0.05em',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            施術メニュー
            <span style={{ fontSize: 10, color: '#A8DFF2' }}>▼</span>
          </button>

          {dropOpen && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                marginTop: 12,
                backgroundColor: '#fff',
                border: '1px solid #D6EEF7',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                minWidth: 200,
                zIndex: 200,
              }}
            >
              {MENU_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    display: 'block',
                    padding: '14px 20px',
                    fontSize: 13,
                    color: '#2C3E50',
                    textDecoration: 'none',
                    borderBottom: '1px solid #F0F8FC',
                    letterSpacing: '0.04em',
                  }}
                  onClick={() => setDropOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Other nav links */}
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

      {/* Right: LINE button + hamburger */}
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
          <span style={{ display: 'block', width: 24, height: 2, backgroundColor: '#1A3A4A', margin: '5px 0', transition: 'transform 0.2s', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span style={{ display: 'block', width: 24, height: 2, backgroundColor: '#1A3A4A', margin: '5px 0', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
          <span style={{ display: 'block', width: 24, height: 2, backgroundColor: '#1A3A4A', margin: '5px 0', transition: 'transform 0.2s', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
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
          {/* 施術メニュー accordion */}
          <div>
            <button
              onClick={() => setSpMenuOpen((v) => !v)}
              style={{
                fontSize: 15,
                color: '#2C3E50',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 400,
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              施術メニュー
              <span style={{ fontSize: 10, color: '#A8DFF2' }}>{spMenuOpen ? '▲' : '▼'}</span>
            </button>
            {spMenuOpen && (
              <div style={{ paddingLeft: 16, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {MENU_LINKS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => { setMenuOpen(false); setSpMenuOpen(false) }}
                    style={{ fontSize: 14, color: '#5BC8E8', textDecoration: 'none' }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: 15, color: '#2C3E50', textDecoration: 'none', fontWeight: 400 }}
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
