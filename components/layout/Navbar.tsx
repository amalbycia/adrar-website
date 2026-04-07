'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'

const SCROLL_START = 60
const SCROLL_END   = 140

const navLinks = [
  { label: 'Home',     href: '/'         },
  { label: 'Services', href: '/services'  },
  { label: 'Our Work', href: '/our-work'  },
  { label: 'About',    href: '/about'     },
  { label: 'Contact',  href: '/contact'   },
]

const drawerLinks = navLinks

interface NavbarProps {
  logoUrl?: string | null
  logoAlt?: string
}

export default function Navbar({ logoUrl, logoAlt = 'Adrar Advertising LLC' }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false) // mobile drawer
  const [menuOpen,   setMenuOpen]   = useState(false) // pill expand

  const fullBarRef = useRef<HTMLDivElement>(null)
  const pillRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fullBar = fullBarRef.current
    const pill    = pillRef.current
    if (!fullBar || !pill) return

    gsap.set(pill, { opacity: 0, y: -8 })

    const qFullOpacity = gsap.quickTo(fullBar, 'opacity', { duration: 0.28, ease: 'power2.out' })
    const qFullY       = gsap.quickTo(fullBar, 'y',       { duration: 0.38, ease: 'power3.out' })
    const qPillOpacity = gsap.quickTo(pill,    'opacity', { duration: 0.32, ease: 'power2.out' })
    const qPillY       = gsap.quickTo(pill,    'y',       { duration: 0.38, ease: 'power3.out' })

    const onScroll = () => {
      const sy = window.scrollY

      if (sy <= SCROLL_START) {
        qFullOpacity(1); qFullY(0)
        qPillOpacity(0); qPillY(-8)
        fullBar.style.pointerEvents = 'auto'
        pill.style.pointerEvents    = 'none'
      } else if (sy >= SCROLL_END) {
        qFullOpacity(0); qFullY(-24)
        qPillOpacity(1); qPillY(0)
        fullBar.style.pointerEvents = 'none'
        pill.style.pointerEvents    = 'auto'
      } else {
        const p = (sy - SCROLL_START) / (SCROLL_END - SCROLL_START)
        qFullOpacity(1 - p); qFullY(-24 * p)
        qPillOpacity(p);     qPillY(-8 * (1 - p))
        fullBar.style.pointerEvents = p < 0.5 ? 'auto' : 'none'
        pill.style.pointerEvents    = p >= 0.5 ? 'auto' : 'none'
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      gsap.killTweensOf([fullBar, pill])
    }
  }, [])

  // Lock scroll when any overlay is open
  useEffect(() => {
    document.body.style.overflow = (drawerOpen || menuOpen) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen, menuOpen])

  const logoNode = logoUrl
    ? <Image src={logoUrl} alt={logoAlt} width={100} height={32} className="h-8 w-auto object-contain" priority />
    : <span className="font-heading font-black text-white tracking-tight" style={{ fontSize: 20 }}>adrar</span>

  const pillLogo = logoUrl
    ? <Image src={logoUrl} alt={logoAlt} width={72} height={22} className="h-[22px] w-auto object-contain" />
    : <span style={{ fontSize: 19, letterSpacing: '-0.01em' }}>adrar</span>

  return (
    <>
      {/* ── Full bar ── */}
      <header
        ref={fullBarRef}
        className="fixed top-0 left-0 right-0 z-40"
        style={{ pointerEvents: 'auto' }}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" aria-label="Adrar — Home" className="flex items-center">
            {logoNode}
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13px] font-body font-semibold uppercase tracking-[0.1em] text-white/70 hover:text-white transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 rounded-full bg-bor-primary text-bor-foreground-inverted text-[14px] font-body font-bold uppercase tracking-wide hover:bg-white hover:text-bor-foreground transition-all duration-200"
            >
              Get a Quote
            </Link>
          </div>

          <button
            className="md:hidden flex flex-col gap-[6px] p-2 cursor-pointer group"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <span className="w-6 h-[1.5px] bg-white block transition-all group-hover:w-5" />
            <span className="w-6 h-[1.5px] bg-white block" />
            <span className="w-4 h-[1.5px] bg-white block transition-all group-hover:w-6" />
          </button>
        </div>
      </header>

      {/* ── Pill ── */}
      {/* Outer div: CSS centering only — GSAP never touches this */}
      <div
        className="fixed z-40"
        style={{ top: 14, left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }}
      >
        {/* Inner div: GSAP animates opacity + y here */}
        <div ref={pillRef} style={{ opacity: 0, pointerEvents: 'none' }}>
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation"
            className="flex items-center cursor-pointer group"
            style={{
              height: 58,
              borderRadius: 9999,
              background: 'rgba(28, 28, 28, 0.72)',
              backdropFilter: 'blur(24px) saturate(1.8)',
              WebkitBackdropFilter: 'blur(24px) saturate(1.8)',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 2px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.07)',
              padding: '0 8px',
            }}
          >
            {/* Desktop pill */}
            <div className="hidden md:flex items-center">
              <span className="px-6 h-full flex items-center text-[12px] font-body font-bold uppercase tracking-[0.15em] text-white/60 group-hover:text-white/80 transition-colors duration-200">
                Home
              </span>

              <span className="w-px h-4 bg-white/15 shrink-0" />

              <span
                className="px-6 h-full flex items-center font-heading font-black text-white"
                style={{ fontSize: 19, letterSpacing: '-0.01em' }}
              >
                {pillLogo}
              </span>

              <span className="w-px h-4 bg-white/15 shrink-0" />

              <span className="px-6 h-full flex items-center text-[12px] font-body font-bold uppercase tracking-[0.15em] text-white/60 group-hover:text-white/80 transition-colors duration-200">
                About
              </span>

              {/* Expand hint */}
              <span className="ml-1 mr-3 flex items-center text-white/25 group-hover:text-white/50 transition-colors duration-200">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>

            {/* Mobile pill */}
            <div className="flex md:hidden items-center gap-3 px-4">
              <span className="font-heading font-black text-white" style={{ fontSize: 17 }}>adrar</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 5l4 4 4-4" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* ── Expanded pill menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50"
              style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Panel — expands from pill position */}
            <div
              className="fixed z-50"
              style={{ top: 14, left: '50%', transform: 'translateX(-50%)' }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: -8 }}
                animate={{ opacity: 1, scale: 1,    y: 0  }}
                exit={{ opacity: 0,    scale: 0.92, y: -8 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  width: 'clamp(320px, 90vw, 420px)',
                  borderRadius: 24,
                  background: 'rgba(18, 18, 18, 0.92)',
                  backdropFilter: 'blur(32px) saturate(2)',
                  WebkitBackdropFilter: 'blur(32px) saturate(2)',
                  border: '1px solid rgba(255,255,255,0.11)',
                  boxShadow: '0 8px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)',
                  overflow: 'hidden',
                  transformOrigin: 'top center',
                }}
              >
                {/* Header row */}
                <div className="flex items-center justify-between px-7 pt-6 pb-5 border-b border-white/8">
                  <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="font-heading font-black text-white hover:text-white/80 transition-colors"
                    style={{ fontSize: 18, letterSpacing: '-0.01em' }}
                  >
                    {logoUrl
                      ? <Image src={logoUrl} alt={logoAlt} width={72} height={22} className="h-[22px] w-auto object-contain" />
                      : 'adrar'
                    }
                  </Link>
                  <button
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                    className="w-8 h-8 flex items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M13 1L1 13M1 1l12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>

                {/* Nav links */}
                <nav className="px-7 py-6 flex flex-col">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.28, delay: 0.06 + i * 0.055, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-center justify-between py-3.5 border-b border-white/[0.07] last:border-0"
                      >
                        <span
                          className="font-heading font-extrabold text-white group-hover:text-bor-primary transition-colors duration-200"
                          style={{ fontSize: 'clamp(22px, 4vw, 28px)', letterSpacing: '-0.01em' }}
                        >
                          {link.label}
                        </span>
                        <svg
                          width="16" height="16" viewBox="0 0 16 16" fill="none"
                          className="text-white/20 group-hover:text-bor-primary group-hover:translate-x-1 transition-all duration-200"
                        >
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.28, delay: 0.38 }}
                  className="px-7 pb-6"
                >
                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center w-full py-3.5 rounded-full bg-bor-primary text-bor-foreground-inverted text-[13px] font-body font-bold uppercase tracking-wide hover:opacity-90 transition-opacity duration-200"
                  >
                    Get a Quote
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-bor-foreground/60 backdrop-blur-md z-50 md:hidden"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-bor-foreground border-l border-white/10 z-50 flex flex-col p-8 md:hidden"
            >
              <button
                className="self-end mb-12 p-1 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                  <path d="M15 5L5 15M5 5l10 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>

              <nav className="flex flex-col gap-8">
                {drawerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[16px] font-body font-semibold uppercase tracking-[0.1em] text-white/50 hover:text-bor-primary transition-colors"
                    onClick={() => setDrawerOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="block text-center px-6 py-4 rounded-full bg-bor-primary text-bor-foreground-inverted text-[14px] font-body font-bold uppercase tracking-wide"
                  onClick={() => setDrawerOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
