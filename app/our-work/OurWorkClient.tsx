'use client'

import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type ProjectItem = {
  id: string
  image: string | null
  category: string
  client: string
  description: string
}

// Fallback static data — used when Sanity has no projects yet
const STATIC_PROJECTS: ProjectItem[] = [
  { id: '01', image: '/projects/1.jpg',  category: 'Large Format Printing',        client: 'Retail Storefront',  description: 'Full-facade wall graphics — retail storefront, Al Qusais' },
  { id: '02', image: '/projects/2.jpg',  category: 'Mall & In-Store Activation',   client: 'FMCG Brand',         description: 'Full in-store concept — 3 activation zones, 10-day execution' },
  { id: '03', image: '/projects/3.jpg',  category: 'Signage & LED',                client: 'Restaurant Chain',   description: 'LED signage rollout across 12 UAE locations' },
  { id: '04', image: '/projects/4.jpg',  category: 'Branding & Wrapping',          client: 'Logistics Fleet',    description: '40-truck fleet wrap — Dubai logistics company' },
  { id: '05', image: '/projects/5.jpg',  category: 'Retail Display Manufacturing', client: 'Consumer Brand',     description: 'Custom FSU and podium displays — nationwide rollout' },
  { id: '06', image: '/projects/6.jpg',  category: 'Large Format Printing',        client: 'Sheikh Zayed Road',  description: 'Full-facade building wrap — Sheikh Zayed Road' },
  { id: '07', image: '/projects/7.jpg',  category: 'Branding & Wrapping',          client: 'Corporate Office',   description: 'Wall branding and frosted glass — corporate HQ' },
  { id: '08', image: '/projects/8.jpg',  category: 'Signage & LED',                client: 'Retail Chain',       description: 'Acrylic 3D signage — full chain rollout across Dubai' },
  { id: '09', image: '/projects/9.jpg',  category: 'Mall & In-Store Activation',   client: 'Fashion Brand',      description: 'In-store category branding — multi-zone mall activation' },
  { id: '10', image: '/projects/10.jpg', category: 'Promotional Items',            client: 'Corporate Client',   description: 'Custom packaging and promo gift kits — product launch' },
]

// Card dimensions — fixed, independent of project count
const CARD_W = 190
const CARD_H = 255
const PERSPECTIVE = 1000

export default function OurWorkClient({ projects: sanityProjects }: { projects?: ProjectItem[] }) {
  const projects = (sanityProjects && sanityProjects.length > 0) ? sanityProjects : STATIC_PROJECTS
  const N = Math.max(1, projects.length)
  const ANGLE_STEP = 360 / N
  
  let RADIUS = 300
  if (N > 2) {
    RADIUS = Math.round((CARD_W / 2) / Math.tan(Math.PI / N)) + 60
  } else if (N === 2) {
    RADIUS = 160
  }
  RADIUS = Math.max(RADIUS, Math.ceil(CARD_W / 2) + 20)
  const [rotation, setRotation] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [dragStartX, setDragStartX] = useState(0)
  const [dragStartRot, setDragStartRot] = useState(0)

  const prev = useCallback(() => {
    setRotation(r => r + ANGLE_STEP)
    setActiveIndex(i => (i - 1 + N) % N)
  }, [])

  const next = useCallback(() => {
    setRotation(r => r - ANGLE_STEP)
    setActiveIndex(i => (i + 1) % N)
  }, [])

  const goTo = useCallback((index: number) => {
    let delta = index - activeIndex
    if (delta > N / 2) delta -= N
    if (delta < -N / 2) delta += N
    setRotation(r => r - delta * ANGLE_STEP)
    setActiveIndex(index)
  }, [activeIndex])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true)
    setDragStartX(e.clientX)
    setDragStartRot(rotation)
  }

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging) return
    const delta = e.clientX - dragStartX
    setRotation(dragStartRot + delta * 0.25)
  }, [dragging, dragStartX, dragStartRot])

  const onPointerUp = useCallback(() => {
    if (!dragging) return
    setDragging(false)
    const snapped = Math.round(rotation / ANGLE_STEP)
    setRotation(snapped * ANGLE_STEP)
    setActiveIndex(((-snapped % N) + N) % N)
  }, [dragging, rotation])

  const active = projects[activeIndex]

  return (
    <div className="min-h-screen bg-bor-foreground pt-24 pb-32 overflow-x-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">

        {/* Page header */}
        <div className="pt-8 pb-14 md:pb-20 text-center">
          <p className="font-body text-[12px] font-bold uppercase tracking-[0.22em] text-white/35 mb-5">
            Our Work
          </p>
          <h1
            className="font-heading font-medium text-white leading-[1.0] tracking-tight"
            style={{ fontSize: 'clamp(40px, 6vw, 82px)' }}
          >
            Decades of making{' '}
            <br className="hidden md:block" />
            <i className="font-serif italic font-normal text-bor-primary opacity-90">
              Dubai look good.
            </i>
          </h1>
          <p className="mt-4 font-body text-[14px] text-white/40 max-w-sm mx-auto">
            Drag or use the arrows to spin through projects.
          </p>
        </div>

        {/* ─── Carousel ─────────────────────────────────────────────── */}
        <div className="flex flex-col items-center">

          {/*
            Outer wrapper: position:relative so arrows can sit at the sides
            without being inside the preserve-3d context (which breaks z-index).
          */}
          <div
            className="relative w-full flex items-center justify-center"
            style={{ height: CARD_H + 100 }}
          >
            {/* LEFT ARROW — outside preserve-3d, always on top */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-0 md:left-4 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-200"
              style={{ flexShrink: 0 }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11 4L6 9l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Perspective container — drag zone */}
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                perspective: `${PERSPECTIVE}px`,
                perspectiveOrigin: '50% 50%',
                cursor: dragging ? 'grabbing' : 'grab',
              }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerLeave={onPointerUp}
            >
              {/* Cylinder — this is what rotates */}
              <motion.div
                style={{
                  width: CARD_W,
                  height: CARD_H,
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                }}
                initial={{ z: -RADIUS, rotateY: rotation }}
                animate={{ z: -RADIUS, rotateY: rotation }}
                transition={
                  dragging
                    ? { duration: 0 }
                    : { duration: 1.0, ease: [0.22, 1, 0.36, 1] }
                }
              >
                {projects.map((project, i) => (
                  <div
                    key={project.id}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      transform: `rotateY(${i * ANGLE_STEP}deg) translateZ(${RADIUS}px)`,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      borderRadius: 8,
                      overflow: 'hidden',
                    }}
                    onClick={() => goTo(i)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image ?? ''}
                      alt={project.category}
                      draggable={false}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        pointerEvents: 'none',
                        userSelect: 'none',
                      }}
                    />
                    {/* Gradient vignette */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)',
                    }} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT ARROW — outside preserve-3d */}
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-0 md:right-4 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-200"
              style={{ flexShrink: 0 }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Project info — separate block, no z-index fight with cylinder */}
          <div className="mt-8 w-full max-w-lg text-center" style={{ minHeight: 88 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-body text-[11px] font-bold uppercase tracking-[0.22em] text-bor-primary mb-2">
                  {active.category}
                </p>
                <p className="font-heading font-medium text-white leading-snug" style={{ fontSize: 'clamp(17px, 2vw, 22px)' }}>
                  {active.description}
                </p>
                <p className="mt-1 font-body text-[13px] text-white/35">
                  {active.client}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-[10px] mt-7">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Project ${i + 1}`}
                className="p-1"
              >
                <span className={`block rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-5 h-[3px] bg-bor-primary'
                    : 'w-[3px] h-[3px] bg-white/20 hover:bg-white/40'
                }`} />
              </button>
            ))}
          </div>

          <p className="mt-3 font-body text-[11px] text-white/20 tabular-nums tracking-widest">
            {String(activeIndex + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}
          </p>
        </div>

        {/* ─── All projects grid ────────────────────────────────────── */}
        <div className="mt-28">
          <div className="flex items-center justify-between mb-8 pb-5 border-b border-white/10">
            <p className="font-body text-[12px] font-bold uppercase tracking-[0.2em] text-white/30">
              All Projects
            </p>
            <p className="font-body text-[12px] text-white/25 font-medium">
              19 projects
            </p>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {Array.from({ length: 19 }, (_, i) => i + 1).map((n) => {
              const proj = projects[n - 1]
              const aspectRatio = n % 3 === 0 ? '4/5' : n % 3 === 1 ? '4/3' : '3/4'
              return (
                <div key={n} className="group relative break-inside-avoid rounded-[8px] overflow-hidden">
                  <div className="w-full relative" style={{ aspectRatio }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/projects/${n}.jpg`}
                      alt={proj?.category ?? `Project ${n}`}
                      style={{
                        width: '100%', height: '100%',
                        objectFit: 'cover', display: 'block',
                        transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
                      }}
                      className="group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-300 flex flex-col justify-end p-4">
                      {proj && (
                        <div className="translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          <span className="text-[10px] font-body font-bold uppercase tracking-widest text-white/55 block mb-1">
                            {proj.category}
                          </span>
                          <span className="font-heading font-semibold text-[14px] text-white leading-snug block">
                            {proj.description}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}
