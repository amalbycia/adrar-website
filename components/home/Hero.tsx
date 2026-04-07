'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

// Fades top 12% and bottom 12% of the masonry panel
const MASK_Y =
  'linear-gradient(180deg, transparent 0%, #000 12%, #000 88%, transparent 100%)'

// ─── Card data types from Sanity ──────────────────────────────────────────────
interface HeroCardData {
  url: string
  alt: string
  overlayLogoUrl?: string
  isFeature?: boolean
}

interface HeroProps {
  heroCards?: {
    col1: (HeroCardData | null)[]
    col2: (HeroCardData | null)[]
    col3: (HeroCardData | null)[]
  }
}

// ─── Masonry structure ────────────────────────────────────────────────────────
type TextSlot = { type: 'text'; label: string; bg: string; textColor: string; h: number }
type ImageSlot = { type: 'image'; h: number; card?: HeroCardData | null }
type Slot = TextSlot | ImageSlot

const COL0_HEIGHTS = [260, 160, 220, 150]
const COL0_TEXTS: { afterIndex: number; slot: TextSlot }[] = []

const COL1_HEIGHTS = [320, 180, 200]
const COL1_TEXTS: { afterIndex: number; slot: TextSlot }[] = []

const COL2_HEIGHTS = [180, 260, 200, 170]
const COL2_TEXTS: { afterIndex: number; slot: TextSlot }[] = []

function buildColumn(
  heights: number[],
  texts: { afterIndex: number; slot: TextSlot }[],
  cards: (HeroCardData | null)[]
): Slot[] {
  const slots: Slot[] = []
  texts.filter((t) => t.afterIndex === -1).forEach((t) => slots.push(t.slot))
  heights.forEach((h, i) => {
    slots.push({ type: 'image', h, card: cards[i] ?? null })
    texts.filter((t) => t.afterIndex === i).forEach((t) => slots.push(t.slot))
  })
  return slots
}

const COL_ANIMATION = ['animate-scroll-up', 'animate-scroll-down', 'animate-scroll-up-slow']
const COL_DELAY = ['0s', '0s', '-12s']

export default function Hero({ heroCards }: HeroProps) {
  const col1Cards = heroCards?.col1 ?? []
  const col2Cards = heroCards?.col2 ?? []
  const col3Cards = heroCards?.col3 ?? []

  const cols = [
    buildColumn(COL0_HEIGHTS, COL0_TEXTS, col1Cards),
    buildColumn(COL1_HEIGHTS, COL1_TEXTS, col2Cards),
    buildColumn(COL2_HEIGHTS, COL2_TEXTS, col3Cards),
  ]

  const loopCols = cols.map((col) => [...col, ...col, ...col, ...col])

  return (
    <section
      className="relative w-full bg-bor-foreground overflow-hidden"
      style={{ height: '100svh', minHeight: '660px' }}
    >
      <div className="flex h-full w-full">

        {/* ── LEFT: text panel ── */}
        <div
          className="relative z-10 flex flex-col justify-center shrink-0 h-full
                     pl-6 pr-6 md:pl-10 lg:pl-16 xl:pl-20
                     pt-16
                     w-full lg:w-[58%] xl:w-[56%]"
        >
          <div className="max-w-[520px]">

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease }}
              className="font-body text-[11px] font-bold uppercase tracking-[0.22em] text-bor-primary mb-6"
            >
              Dubai&apos;s Leading Advertising Company Since 2000
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease }}
              className="font-heading font-medium text-white leading-[0.92] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(40px, 5vw, 88px)' }}
            >
              We make your brand{' '}
              <i className="font-serif italic font-normal opacity-85">
                impossible
              </i>{' '}
              to miss.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease }}
              className="mt-6 font-body text-white/55 leading-[1.7]"
              style={{ fontSize: 'clamp(15px, 1.1vw, 17px)' }}
            >
              Signage, branding, large-format printing and retail display —
              all produced in-house in Dubai since 2000.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3, ease }}
              className="mt-9 flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="https://wa.me/971552217026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-bor-primary text-bor-foreground-inverted text-[14px] font-body font-bold tracking-wide hover:brightness-110 transition-all duration-200"
              >
                Get a Quote
              </Link>
              <Link
                href="/our-work"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-white/20 text-white text-[14px] font-body font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                View Our Work
              </Link>
            </motion.div>

          </div>
        </div>

        {/* ── RIGHT: masonry grid ── */}
        <div
          className="hidden lg:flex flex-1 h-full overflow-hidden gap-2.5"
          style={{ maskImage: MASK_Y, WebkitMaskImage: MASK_Y }}
        >
          {loopCols.map((col, colIndex) => (
            <div key={`col-${colIndex}`} className="flex-1 min-w-0 overflow-hidden">
              <div
                className={`flex flex-col gap-2.5 ${COL_ANIMATION[colIndex]}`}
                style={{ animationDelay: COL_DELAY[colIndex] }}
              >
                {col.map((slot, i) => {
                  const card = slot.type === 'image' ? (slot as ImageSlot).card : null
                  const hasOverlay = !!(card?.overlayLogoUrl)

                  return (
                    <div
                      key={`${colIndex}-${i}`}
                      className="w-full relative overflow-hidden rounded-2xl flex-shrink-0 group border border-white/10"
                      style={{
                        height: `${slot.h}px`,
                        backgroundColor:
                          slot.type === 'text'
                            ? (slot as TextSlot).bg
                            : card
                            ? 'transparent'
                            : '#1e2b28',
                      }}
                    >
                      {/* Background image — always shown for any image card */}
                      {slot.type === 'image' && card && (
                        <Image
                          src={card.url}
                          alt={card.alt || 'Project image'}
                          fill
                          sizes="15vw"
                          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05]"
                        />
                      )}

                      {/* Overlay logo: proportional to card height, top-left anchor */}
                      {slot.type === 'image' && card && hasOverlay && (
                        <>
                          {/* Top gradient for legibility */}
                          <div className="absolute top-0 left-0 right-0 h-[60%] bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none" />
                          {/* Logo container — 35% of card height, 80% of card width */}
                          <div
                            className="absolute left-[8%] right-[8%] pointer-events-none"
                            style={{ top: '8%', height: '35%' }}
                          >
                            <div className="relative w-full h-full">
                              <Image
                                src={card.overlayLogoUrl!}
                                alt="Brand logo"
                                fill
                                sizes="20vw"
                                className="object-contain object-left-top drop-shadow-xl"
                              />
                            </div>
                          </div>
                        </>
                      )}

                      {/* Hover scrim for cards without overlay */}
                      {slot.type === 'image' && card && !hasOverlay && (
                        <>
                          <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-3 left-3 right-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            <span className="font-body text-[12px] font-semibold text-white tracking-wide">
                              {card.alt}
                            </span>
                          </div>
                        </>
                      )}

                      {/* Text label card */}
                      {slot.type === 'text' && (
                        <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                          <span
                            className="font-heading font-semibold leading-tight"
                            style={{
                              color: (slot as TextSlot).textColor,
                              fontSize: 'clamp(15px, 1.2vw, 19px)',
                            }}
                          >
                            {(slot as TextSlot).label}
                          </span>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
