'use client'

import { motion } from 'framer-motion'
import type { SanityTestimonial } from '@/sanity/lib/queries'

const FALLBACK_TESTIMONIALS = [
  {
    initials: 'AK',
    avatarBg: '#2A2520',
    name: 'Ahmed Al Khoury',
    role: 'Marketing Director',
    company: 'Carrefour UAE',
    quote:
      "Adrar handled our full in-store category rebrand across 12 locations. Execution was flawless — on time, on spec, zero surprises. They're our go-to in Dubai.",
  },
  {
    initials: 'SR',
    avatarBg: '#1E3A2A',
    name: 'Sara Rashed',
    role: 'Brand Manager',
    company: 'Emaar Properties',
    quote:
      "We've worked with many signage companies. Adrar stands apart because they actually produce everything in-house. The quality shows, and the turnaround is genuinely fast.",
  },
  {
    initials: 'MB',
    avatarBg: '#3A2018',
    name: 'Mohammed Bin Zayed',
    role: 'Operations Head',
    company: 'Nesto Hypermarket',
    quote:
      "From vehicle fleet branding to in-store displays, Adrar delivered it all under one contract. Clean project management, great communication.",
  },
  {
    initials: 'LF',
    avatarBg: '#1A2A3A',
    name: 'Layla Fouad',
    role: 'CEO',
    company: 'Dubai Retail Group',
    quote:
      "The mall activation they executed for our launch event was outstanding. The build quality, the speed, the attention to brand consistency — highly recommend.",
  },
  {
    initials: 'RM',
    avatarBg: '#2A1E35',
    name: 'Rajan Menon',
    role: 'Procurement Manager',
    company: 'RTA Dubai',
    quote:
      "Government-grade quality standards met every time. Adrar is one of very few suppliers we trust with large-scale outdoor work on tight deadlines.",
  },
  {
    initials: 'HA',
    avatarBg: '#1E2A1A',
    name: 'Hessa Al Ameri',
    role: 'Creative Director',
    company: 'Talabat',
    quote:
      "They took our brand guidelines and executed vehicle branding across our entire fleet. Consistent, precise, and done in record time. Exceptional partner.",
  },
]

interface TestimonialsProps {
  testimonials?: SanityTestimonial[]
}

interface CardData {
  name: string
  role: string
  company: string
  quote: string
  initials: string
  avatarBg: string
}

const AVATAR_COLORS = ['#2A2520', '#1E3A2A', '#3A2018', '#1A2A3A', '#2A1E35', '#1E2A1A']

function toCardData(t: SanityTestimonial, idx: number): CardData {
  const initials = t.name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
  return {
    name: t.name,
    role: t.role,
    company: t.company,
    quote: t.quote,
    initials,
    avatarBg: AVATAR_COLORS[idx % AVATAR_COLORS.length],
  }
}

function TestimonialCard({ initials, avatarBg, name, role, company, quote }: CardData) {
  // Determine if we should show an avatar placeholder to mimic the image's layout variations.
  // In the dummy data, let's just render the avatar if it's an even index or just unconditionally.
  // The image shows some with avatars, some without. We'll show the avatar conditionally based on initials.
  const hasAvatar = !['LF', 'MB'].includes(initials); // arbitrary logic for visual variety

  return (
    <div className="shrink-0 w-[400px] md:w-[480px] bg-[#F6F7F3] border border-[#DEE1DC] rounded-[8px] p-8 mx-3 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        {hasAvatar && (
          <div
            className="w-[48px] h-[48px] rounded-full flex items-center justify-center shrink-0 object-cover overflow-hidden"
            style={{ backgroundColor: avatarBg }}
          >
            <span className="text-[15px] font-body font-medium text-white tracking-wide">
              {initials}
            </span>
          </div>
        )}
        <div className="flex flex-col justify-center">
          <p className="font-body text-[16px] font-semibold text-[#181D1A] mb-0.5">
            {name}
          </p>
          <p className="font-body text-[14px] text-[#6D726E]">
            {role}, {company}
          </p>
        </div>
      </div>

      {/* Quote */}
      <p className="font-body text-[17px] font-normal text-[#181D1A] leading-[1.6] flex-1">
        {quote}
      </p>

      {/* Company text treated as logo placeholder */}
      <div className="mt-8 pt-1 flex items-center">
        {/* Abstract logo mark placeholder block for variety */}
        {name.length % 2 === 0 ? (
          <div className="bg-[#181D1A] text-white font-heading font-bold text-[10px] leading-tight px-1.5 py-1 uppercase mr-3 rounded-[2px] tracking-wider whitespace-pre-wrap text-center">
            {company.substring(0, 4)}<br/>{company.substring(4, 8)}
          </div>
        ) : (
          <span className="text-[#181D1A] mr-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        )}
        <p className="font-heading font-black text-[18px] text-[#181D1A] tracking-[-0.5px] uppercase">
          {company}
        </p>
      </div>
    </div>
  )
}

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function Testimonials({ testimonials: sanityData = [] }: TestimonialsProps) {
  const source =
    sanityData.length > 0
      ? sanityData.map(toCardData)
      : FALLBACK_TESTIMONIALS.map((t, i) => ({
          ...t,
          initials: t.initials,
          avatarBg: t.avatarBg,
        }))

  // Both rows use the full source doubled — seamless at -50% translation
  // Row 2 is offset by starting mid-array so the two rows feel different
  const sourceMid = [...source.slice(Math.floor(source.length / 2)), ...source.slice(0, Math.floor(source.length / 2))]
  const row1 = [...source, ...source]
  const row2 = [...sourceMid, ...sourceMid]
  return (
    <section className="bg-bor-background py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 mb-20 relative z-10">
        <p className="text-center font-body text-[13px] font-semibold uppercase tracking-[0.2em] text-bor-foreground-muted mb-6">
          Don&apos;t just take it from us
        </p>

        <h2
          className="text-center font-heading font-medium text-bor-foreground leading-[1] tracking-[0.1px] mx-auto"
          style={{ fontSize: 'clamp(48px, 6vw, 96px)', maxWidth: '900px' }}
        >
          Client wins,{' '}
          <i className="font-serif italic font-normal text-bor-foreground opacity-90">
            told by our clients.
          </i>
        </h2>
      </div>

      {/* Marquee Outer Wrapper */}
      <div className="relative py-4">
        {/* Marquee Row 1 */}
        <div className="flex overflow-hidden group mb-6">
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] items-stretch">
            {row1.map((t, i) => (
              <TestimonialCard key={`r1-${i}`} {...t} />
            ))}
          </div>
        </div>

        {/* Marquee Row 2 */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee-reverse group-hover:[animation-play-state:paused] items-stretch">
            {row2.map((t, i) => (
              <TestimonialCard key={`r2-${i}`} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
