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

// Spring configs
const springSnappy  = { type: 'spring', stiffness: 500, damping: 32 } as const
const springMorph   = { type: 'spring', stiffness: 340, damping: 30 } as const
const springElastic = { type: 'spring', stiffness: 320, damping: 22 } as const

interface NavbarProps {
  logoUrl?: string | null
  logoAlt?: string
}

export default function Navbar({ logoUrl, logoAlt = 'Adrar Advertising LLC' }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)

  const fullBarRef = useRef<HTMLDivElement>(null)
  const pillRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fullBar = fullBarRef.current
    const pill    = pillRef.current
    if (!fullBar || !pill) return

    gsap.set(pill, { opacity: 0, y: -10 })

    const qFullOpacity = gsap.quickTo(fullBar, 'opacity', { duration: 0.22, ease: 'power2.out' })
    const qFullY       = gsap.quickTo(fullBar, 'y',       { duration: 0.5,  ease: 'elastic.out(1, 0.7)' })
    const qPillOpacity = gsap.quickTo(pill,    'opacity', { duration: 0.25, ease: 'power2.out' })
    const qPillY       = gsap.quickTo(pill,    'y',       { duration: 0.55, ease: 'elastic.out(1, 0.65)' })

    const onScroll = () => {
      const sy = window.scrollY

      if (sy <= SCROLL_START) {
        qFullOpacity(1); qFullY(0)
        qPillOpacity(0); qPillY(-10)
        fullBar.style.pointerEvents = 'auto'
        pill.style.pointerEvents    = 'none'
      } else if (sy >= SCROLL_END) {
        qFullOpacity(0); qFullY(-20)
        qPillOpacity(1); qPillY(0)
        fullBar.style.pointerEvents = 'none'
        pill.style.pointerEvents    = 'auto'
      } else {
        const p = (sy - SCROLL_START) / (SCROLL_END - SCROLL_START)
        qFullOpacity(1 - p); qFullY(-20 * p)
        qPillOpacity(p);     qPillY(-10 * (1 - p))
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

  useEffect(() => {
    document.body.style.overflow = (drawerOpen || menuOpen) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen, menuOpen])

  const logoNode = logoUrl
    ? <Image src={logoUrl} alt={logoAlt} width={160} height={56} className="h-[56px] w-auto object-contain" priority />
    : <span className="font-heading font-black text-white tracking-tight" style={{ fontSize: 20 }}>adrar</span>

  const pillLogo = logoUrl
    ? <Image src={logoUrl} alt={logoAlt} width={100} height={32} className="h-[32px] w-auto object-contain" />
    : <span className="font-heading font-black text-white" style={{ fontSize: 19, letterSpacing: '-0.01em' }}>adrar</span>

  return (
    <>
      {/* ── Full bar ── */}
      <header
        ref={fullBarRef}
        className="fixed top-0 left-0 right-0 z-40"
        style={{ pointerEvents: 'auto' }}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={springSnappy}>
            <Link href="/" aria-label="Adrar — Home" className="flex items-center">
              {logoNode}
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <motion.div
                key={l.href}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
                transition={springSnappy}
              >
                <Link
                  href={l.href}
                  className="nav-link text-[13px] font-body font-semibold uppercase tracking-[0.1em] text-white/70 hover:text-white transition-colors duration-150"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:block">
            <motion.button
              onClick={() => window.dispatchEvent(new Event('adrar:open-chat'))}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              transition={springSnappy}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-bor-primary text-bor-foreground-inverted text-[14px] font-body font-bold uppercase tracking-wide hover:bg-white hover:text-bor-foreground transition-colors duration-150"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Talk to an Agent
            </motion.button>
          </div>

          <motion.button
            className="md:hidden flex flex-col gap-[6px] p-2 cursor-pointer"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9, rotate: 5 }}
            transition={springSnappy}
          >
            <span className="w-6 h-[1.5px] bg-white block rounded-full" />
            <span className="w-6 h-[1.5px] bg-white block rounded-full" />
            <span className="w-4 h-[1.5px] bg-white block rounded-full" />
          </motion.button>
        </div>
      </header>

      {/* ── Pill + expanded panel — share layoutId so Framer morphs between them ── */}
      <div
        ref={pillRef}
        className="fixed z-50"
        style={{
          top: 14,
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: 0,
          pointerEvents: 'none',
        }}
      >
        <AnimatePresence mode="wait">
          {!menuOpen ? (
            /* ── Collapsed pill ── */
            <motion.button
              key="pill"
              layoutId="nav-pill"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation"
              transition={springMorph}
              style={{
                display: 'flex',
                alignItems: 'center',
                height: 58,
                borderRadius: 9999,
                background: 'rgba(28, 28, 28, 0.72)',
                backdropFilter: 'blur(24px) saturate(1.8)',
                WebkitBackdropFilter: 'blur(24px) saturate(1.8)',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 2px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.07)',
                padding: '0 8px',
                cursor: 'pointer',
                willChange: 'transform',
              }}
            >
              {/* Desktop pill content */}
              <div className="hidden md:flex items-center">
                <span className="px-6 h-full flex items-center text-[12px] font-body font-bold uppercase tracking-[0.15em] text-white/60 hover:text-white/80 transition-colors duration-150">
                  Home
                </span>
                <span className="w-px h-4 bg-white/15 shrink-0" />
                <span className="px-6 h-full flex items-center font-heading font-black text-white" style={{ fontSize: 19, letterSpacing: '-0.01em' }}>
                  {pillLogo}
                </span>
                <span className="w-px h-4 bg-white/15 shrink-0" />
                <span className="px-6 h-full flex items-center text-[12px] font-body font-bold uppercase tracking-[0.15em] text-white/60 hover:text-white/80 transition-colors duration-150">
                  About
                </span>
                <span className="ml-1 mr-3 flex items-center text-white/25">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>

              {/* Mobile pill content */}
              <div className="flex md:hidden items-center gap-3 px-4">
                <span className="font-heading font-black text-white" style={{ fontSize: 17 }}>adrar</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 5l4 4 4-4" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.button>

          ) : (
            /* ── Expanded panel — same layoutId morphs from pill ── */
            <motion.div
              key="panel"
              layoutId="nav-pill"
              transition={springMorph}
              style={{
                width: 'clamp(320px, 90vw, 420px)',
                borderRadius: 24,
                background: 'rgba(18, 18, 18, 0.92)',
                backdropFilter: 'blur(32px) saturate(2)',
                WebkitBackdropFilter: 'blur(32px) saturate(2)',
                border: '1px solid rgba(255,255,255,0.11)',
                boxShadow: '0 8px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)',
                overflow: 'hidden',
                willChange: 'transform',
              }}
            >
              {/* Content fades in after container morph starts */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.12 }}
              >
                {/* Header row */}
                <div className="flex items-center justify-between px-7 pt-6 pb-5 border-b border-white/8">
                  <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="font-heading font-black text-white hover:text-white/80 transition-colors duration-150"
                    style={{ fontSize: 18, letterSpacing: '-0.01em' }}
                  >
                    {logoUrl
                      ? <Image src={logoUrl} alt={logoAlt} width={90} height={28} className="h-[28px] w-auto object-contain" />
                      : 'adrar'
                    }
                  </Link>
                  <motion.button
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                    whileHover={{ scale: 1.12, rotate: 90 }}
                    whileTap={{ scale: 0.88 }}
                    transition={springSnappy}
                    className="w-8 h-8 flex items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors duration-150"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M13 1L1 13M1 1l12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                  </motion.button>
                </div>

                {/* Nav links — stagger in */}
                <nav className="px-7 py-6 flex flex-col">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 28, delay: 0.14 + i * 0.04 }}
                    >
                      <motion.div
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.97 }}
                        transition={springSnappy}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="group flex items-center justify-between py-3.5 border-b border-white/[0.07] last:border-0"
                        >
                          <span
                            className="font-heading font-extrabold text-white group-hover:text-bor-primary transition-colors duration-150"
                            style={{ fontSize: 'clamp(22px, 4vw, 28px)', letterSpacing: '-0.01em' }}
                          >
                            {link.label}
                          </span>
                          <svg
                            width="16" height="16" viewBox="0 0 16 16" fill="none"
                            className="text-white/20 group-hover:text-bor-primary transition-colors duration-150 group-hover:translate-x-1 transition-transform"
                          >
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Link>
                      </motion.div>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28, delay: 0.34 }}
                  className="px-7 pb-6"
                >
                  <motion.button
                    onClick={() => { setMenuOpen(false); window.dispatchEvent(new Event('adrar:open-chat')) }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    transition={springSnappy}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-bor-primary text-bor-foreground-inverted text-[13px] font-body font-bold uppercase tracking-wide hover:opacity-90 transition-opacity duration-150"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Talk to an Agent
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Backdrop — separate from the morph so it doesn't interfere */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
            onClick={() => setMenuOpen(false)}
          />
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
              transition={{ duration: 0.18 }}
              className="fixed inset-0 bg-bor-foreground/60 backdrop-blur-md z-50 md:hidden"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={springElastic}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-bor-foreground border-l border-white/10 z-50 flex flex-col p-8 md:hidden"
            >
              <motion.button
                className="self-end mb-12 p-1 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.88 }}
                transition={springSnappy}
              >
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                  <path d="M15 5L5 15M5 5l10 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </motion.button>

              <nav className="flex flex-col">
                {drawerLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 28, delay: 0.05 + i * 0.04 }}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center justify-between py-4 border-b border-white/10 text-[16px] font-body font-semibold uppercase tracking-[0.1em] text-white/50 hover:text-bor-primary transition-colors duration-150"
                      onClick={() => setDrawerOpen(false)}
                    >
                      {link.label}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-30">
                        <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="mt-auto"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28, delay: 0.28 }}
              >
                <motion.button
                  onClick={() => { setDrawerOpen(false); window.dispatchEvent(new Event('adrar:open-chat')) }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  transition={springSnappy}
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full bg-bor-primary text-bor-foreground-inverted text-[14px] font-body font-bold uppercase tracking-wide"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Talk to an Agent
                </motion.button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
