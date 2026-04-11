'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface ProjectItem {
  id: string
  title: string
  client: string
  category: string
  description: string
  imageUrl: string
}

interface Props {
  projects: ProjectItem[]
}

// Card dimensions
const CARD_W = 280
const CARD_H = 380

export default function PortfolioTeaser({ projects }: Props) {
  const N = Math.max(1, projects.length)
  const ANGLE_STEP = 360 / N
  
  // Radius calculation with safeguards for small project counts
  let RADIUS = 400
  if (N > 2) {
    RADIUS = Math.round((CARD_W / 2) / Math.tan(Math.PI / N)) + 90
  } else if (N === 2) {
    RADIUS = 200
  }
  // Ensure a minimum radius so cards don't clip through each other
  RADIUS = Math.max(RADIUS, Math.ceil(CARD_W / 2) + 20)

  const [rotation, setRotation] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const prev = useCallback(() => {
    setRotation(r => r + ANGLE_STEP)
    setActiveIndex(i => (i - 1 + N) % N)
  }, [ANGLE_STEP, N])

  const next = useCallback(() => {
    setRotation(r => r - ANGLE_STEP)
    setActiveIndex(i => (i + 1) % N)
  }, [ANGLE_STEP, N])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  const active = projects[activeIndex]

  if (!projects.length) return null

  return (
    <section className="bg-bor-foreground py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
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

        {/* ── Mobile flat card (md:hidden) ── */}
        <div className="md:hidden w-full">
          <div className="relative w-full rounded-xl overflow-hidden" style={{ height: 340 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                <Image
                  src={active.imageUrl}
                  alt={active.category}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="100vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)' }} />
            {/* Arrows */}
            <button onClick={prev} aria-label="Previous project"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-black/50 border border-white/20 text-white">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M11 4L6 9l5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button onClick={next} aria-label="Next project"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-black/50 border border-white/20 text-white">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {/* Caption inside card */}
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
              <p className="font-body text-[10px] font-bold uppercase tracking-[0.22em] text-bor-primary mb-1">{active.category}</p>
              <p className="font-heading font-medium text-white text-[17px] leading-snug">{active.title}</p>
              <p className="font-body text-[11px] text-white/50 mt-0.5">{active.client}</p>
            </div>
          </div>
          {/* Dots */}
          <div className="flex items-center gap-2 mt-5">
            {projects.map((_, i) => (
              <button key={i} onClick={() => { const d = i - activeIndex; setRotation(r => r - d * ANGLE_STEP); setActiveIndex(i) }} aria-label={`Go to project ${i + 1}`}>
                <span className={`block rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 h-[3px] bg-bor-primary' : 'w-[3px] h-[3px] bg-white/25'}`} />
              </button>
            ))}
          </div>
          <p className="mt-2 font-body text-[11px] font-medium text-white/25 tabular-nums tracking-widest">
            {String(activeIndex + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}
          </p>
        </div>

        {/* ── Desktop 3D cylinder (hidden on mobile) ── */}
        <div className="hidden md:block w-full">

          {/* Stage */}
          <div
            className="relative w-full flex items-center justify-center"
            style={{
              height: CARD_H + 100,
              perspective: '1400px',
              perspectiveOrigin: '50% 50%',
            }}
          >
            {/* Left arrow — outside the cylinder, always visible */}
            <button
              onClick={prev}
              aria-label="Previous project"
              className="absolute left-6 z-40 flex items-center justify-center w-14 h-14 rounded-full border border-white/20 text-white hover:border-white/50 hover:text-white transition-all duration-200 bg-black/40 hover:bg-black/60 backdrop-blur-sm"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                <path d="M11 4L6 9l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Cylinder */}
            <motion.div
              style={{
                width: CARD_W,
                height: CARD_H,
                position: 'relative',
                transformStyle: 'preserve-3d',
              }}
              initial={{ z: -RADIUS, rotateY: rotation }}
              animate={{ z: -RADIUS, rotateY: rotation }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              {projects.map((project, i) => {
                const angle = i * ANGLE_STEP
                const isActive = i === activeIndex
                return (
                  <div
                    key={project.id}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      transform: `rotateY(${angle}deg) translateZ(${RADIUS}px)`,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      borderRadius: 12,
                      overflow: 'hidden',
                      boxShadow: isActive
                        ? '0 32px 80px rgba(0,0,0,0.6)'
                        : '0 12px 40px rgba(0,0,0,0.35)',
                    }}
                  >
                    <Image
                      src={project.imageUrl}
                      alt={project.category}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes={`${CARD_W}px`}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)',
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
              className="absolute right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full border border-white/20 text-white hover:border-white/50 hover:text-white transition-all duration-200 bg-black/40 hover:bg-black/60 backdrop-blur-sm"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Active project description — clearly below carousel */}
          <div className="mt-8 flex flex-col items-center" style={{ minHeight: 100 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28 }}
                className="text-center px-4"
              >
                <p className="font-body text-[11px] font-bold uppercase tracking-[0.25em] text-bor-primary mb-2">
                  {active.category}
                </p>
                <p className="font-heading font-medium text-white text-[26px] leading-snug">
                  {active.title}
                </p>
                <p className="mt-1.5 font-body text-[14px] text-white/45">
                  {active.client}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
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

          <p className="mt-3 text-center font-body text-[11px] font-medium text-white/25 tabular-nums tracking-widest">
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
