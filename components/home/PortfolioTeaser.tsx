'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    id: '01',
    image: '/projects/1.jpg',
    category: 'Large Format Printing',
    client: 'Retail Storefront',
    description: 'Full-facade wall graphics — retail storefront, Al Qusais',
  },
  {
    id: '02',
    image: '/projects/2.jpg',
    category: 'Mall & In-Store Activation',
    client: 'FMCG Brand',
    description: 'Full in-store concept — 3 activation zones, 10-day execution',
  },
  {
    id: '03',
    image: '/projects/3.jpg',
    category: 'Signage & LED',
    client: 'Restaurant Chain',
    description: 'LED signage rollout across 12 UAE locations',
  },
  {
    id: '04',
    image: '/projects/4.jpg',
    category: 'Branding & Wrapping',
    client: 'Logistics Fleet',
    description: '40-truck fleet wrap — Dubai logistics company',
  },
  {
    id: '05',
    image: '/projects/5.jpg',
    category: 'Retail Display Manufacturing',
    client: 'Consumer Brand',
    description: 'Custom FSU and podium displays — nationwide rollout',
  },
  {
    id: '06',
    image: '/projects/6.jpg',
    category: 'Large Format Printing',
    client: 'Sheikh Zayed Road',
    description: 'Full-facade building wrap — Sheikh Zayed Road',
  },
  {
    id: '07',
    image: '/projects/7.jpg',
    category: 'Branding & Wrapping',
    client: 'Corporate Office',
    description: 'Wall branding and frosted glass works — corporate HQ',
  },
  {
    id: '08',
    image: '/projects/8.jpg',
    category: 'Signage & LED',
    client: 'Retail Chain',
    description: 'Acrylic 3D signage — full chain rollout across Dubai',
  },
]

const N = projects.length
const ANGLE_STEP = 360 / N
// radius so cards don't overlap: r = (cardWidth/2) / tan(π/N)
const CARD_W = 300
const CARD_H = 400
const RADIUS = Math.round((CARD_W / 2) / Math.tan(Math.PI / N)) + 80 // ~490px

export default function PortfolioTeaser() {
  const [rotation, setRotation] = useState(0)   // accumulates — no mod, so Framer Motion spins correctly
  const [activeIndex, setActiveIndex] = useState(0)

  const prev = useCallback(() => {
    setRotation(r => r + ANGLE_STEP)
    setActiveIndex(i => (i - 1 + N) % N)
  }, [])

  const next = useCallback(() => {
    setRotation(r => r - ANGLE_STEP)
    setActiveIndex(i => (i + 1) % N)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  const active = projects[activeIndex]

  return (
    <section className="bg-bor-foreground py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <p className="font-body text-[13px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-7">
              Our Work
            </p>
            <h2
              className="font-heading font-medium text-white leading-[1] tracking-[0.1px]"
              style={{ fontSize: 'clamp(48px, 6vw, 96px)', maxWidth: '750px' }}
            >
              Decades of making{' '}
              <i className="font-serif italic font-normal text-bor-primary opacity-90">
                Dubai look good.
              </i>
            </h2>
          </div>
          <Link
            href="/our-work"
            className="shrink-0 self-end inline-flex items-center px-6 py-3 rounded-full border border-white/20 text-white text-[14px] font-body font-bold uppercase tracking-wide hover:bg-white/10 transition-all duration-200"
          >
            View All Work
          </Link>
        </div>

        {/* Carousel */}
        <div className="flex flex-col items-center">

          {/* Stage — perspective wraps the cylinder */}
          <div
            className="relative w-full flex items-center justify-center"
            style={{
              height: CARD_H + 80,
              perspective: '1100px',
              perspectiveOrigin: '50% 50%',
            }}
          >
            {/* Left arrow */}
            <button
              onClick={prev}
              aria-label="Previous project"
              className="absolute left-2 md:left-8 z-30 flex items-center justify-center w-12 h-12 rounded-full border border-white/15 text-white/60 hover:border-white/40 hover:text-white transition-all duration-200 bg-white/5 hover:bg-white/10"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11 4L6 9l5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Cylinder — this whole div rotates */}
            <motion.div
              style={{
                width: CARD_W,
                height: CARD_H,
                position: 'relative',
                transformStyle: 'preserve-3d',
              }}
              animate={{ rotateY: rotation }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              {projects.map((project, i) => {
                const angle = i * ANGLE_STEP
                return (
                  <div
                    key={project.id}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      transform: `rotateY(${angle}deg) translateZ(${RADIUS}px)`,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      borderRadius: 8,
                      overflow: 'hidden',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.category}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                    {/* bottom gradient on active card */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)',
                      }}
                    />
                  </div>
                )
              })}
            </motion.div>

            {/* Right arrow */}
            <button
              onClick={next}
              aria-label="Next project"
              className="absolute right-2 md:right-8 z-30 flex items-center justify-center w-12 h-12 rounded-full border border-white/15 text-white/60 hover:border-white/40 hover:text-white transition-all duration-200 bg-white/5 hover:bg-white/10"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Active card description */}
          <div className="mt-10 h-24 flex items-start justify-center w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <p className="font-body text-[11px] font-bold uppercase tracking-[0.22em] text-bor-primary mb-2">
                  {active.category}
                </p>
                <p className="font-heading font-medium text-white text-[20px] md:text-[23px] leading-snug">
                  {active.description}
                </p>
                <p className="mt-1 font-body text-[13px] text-white/40">
                  {active.client}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-2 mt-5">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const delta = i - activeIndex
                  setRotation(r => r - delta * ANGLE_STEP)
                  setActiveIndex(i)
                }}
                aria-label={`Go to project ${i + 1}`}
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? 'w-6 h-[3px] bg-bor-primary'
                      : 'w-[3px] h-[3px] bg-white/25 hover:bg-white/50'
                  }`}
                />
              </button>
            ))}
          </div>

          <p className="mt-3 font-body text-[11px] font-medium text-white/25 tabular-nums tracking-widest">
            {String(activeIndex + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-10 relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/10" />
          <p className="font-body text-[14px] font-medium text-white/50">
            500+ projects delivered. All in-house. Al Qusais, Dubai.
          </p>
          <Link
            href="/our-work"
            className="inline-flex items-center px-6 py-3 rounded-full bg-bor-primary text-bor-foreground-inverted text-[14px] font-body font-bold uppercase tracking-wide hover:opacity-90 transition-opacity duration-200"
          >
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  )
}
