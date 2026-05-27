'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { HeroProps, HeroCardData } from './HeroDesktop'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

// ─── Mobile hero — fully independent, no shared layout with desktop ───────────
// This component has its own section, its own height logic, its own scrolling.
// Desktop cannot see this (wrapped in lg:hidden in Hero.tsx).
export default function HeroMobile({ heroCards }: HeroProps) {
  // Flatten all Sanity cards from all 3 columns into a single array for the marquee
  const allCards: HeroCardData[] = [
    ...(heroCards?.col1 ?? []),
    ...(heroCards?.col2 ?? []),
    ...(heroCards?.col3 ?? []),
  ].filter((c): c is HeroCardData => !!c)

  // If no Sanity cards yet, use placeholder dark tiles so the marquee still shows
  const row1 = allCards.length > 0 ? allCards : Array(6).fill(null)
  const row2 = allCards.length > 0 ? [...allCards].reverse() : Array(6).fill(null)

  return (
    <div className="bg-bor-foreground w-full">

      {/* ── Text block — sits at top, no fixed height, no overflow-hidden ── */}
      <div className="px-6 pt-28 pb-10">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="font-body text-[11px] font-bold uppercase tracking-[0.22em] text-bor-primary mb-5"
        >
          Dubai&apos;s Leading Advertising Company Since 2000
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease }}
          className="font-heading font-medium text-white leading-[0.92] tracking-[-0.01em]"
          style={{ fontSize: 'clamp(38px, 10vw, 56px)' }}
        >
          We make your brand{' '}
          <i className="font-serif italic font-normal opacity-85">impossible</i>{' '}
          to miss.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease }}
          className="mt-5 font-body text-[15px] text-white/55 leading-[1.7]"
        >
          Signage, branding, large-format printing and retail display —
          all produced in-house in Dubai since 2000.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.36, ease }}
          className="mt-8 flex flex-col gap-3"
        >
          <button
            onClick={() => window.dispatchEvent(new Event('adrar:open-chat'))}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-bor-primary text-white text-[15px] font-body font-bold tracking-wide"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Talk to an Agent
          </button>
          <Link
            href="/our-work"
            className="w-full inline-flex items-center justify-center px-6 py-4 rounded-full border border-white/20 text-white text-[15px] font-body font-semibold"
          >
            View Our Work
          </Link>
        </motion.div>

      </div>

      {/* ── Two-row horizontal marquee ── */}
      {/* Own block, own overflow, nothing shared with the text above */}
      <div
        className="pb-10 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(90deg, transparent 0%, #000 7%, #000 93%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, #000 7%, #000 93%, transparent 100%)',
        }}
      >

        {/* Row 1 — slides LEFT (25s) */}
        <div className="overflow-hidden mb-3">
          <div
            className="flex gap-3 animate-marquee-mobile-left"
            style={{ width: 'max-content' }}
          >
            {[...row1, ...row1].map((card, i) => (
              <div
                key={`r1-${i}`}
                className="relative flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-[#1e2b28]"
                style={{ width: '160px', height: '210px' }}
              >
                {card && (
                  <Image
                    src={(card as HeroCardData).url}
                    alt={(card as HeroCardData).alt || 'Adrar project'}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — slides RIGHT (30s) */}
        <div className="overflow-hidden">
          <div
            className="flex gap-3 animate-marquee-mobile-right"
            style={{ width: 'max-content' }}
          >
            {[...row2, ...row2].map((card, i) => (
              <div
                key={`r2-${i}`}
                className="relative flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-[#1e2b28]"
                style={{ width: '160px', height: '210px' }}
              >
                {card && (
                  <Image
                    src={(card as HeroCardData).url}
                    alt={(card as HeroCardData).alt || 'Adrar project'}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
