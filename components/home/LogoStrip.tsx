'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const CLIENT_LOGOS = [
  { name: 'Client 1',  file: '/logos/client-logo-1.png' },
  { name: 'Client 2',  file: '/logos/client-logo-2.png' },
  { name: 'Client 3',  file: '/logos/client-logo-3.png' },
  { name: 'Client 4',  file: '/logos/client-logo-4.png' },
  { name: 'Client 5',  file: '/logos/client-logo-5.png' },
  { name: 'Client 6',  file: '/logos/client-logo-6.png' },
  { name: 'Client 7',  file: '/logos/client-logo-7.png' },
  { name: 'Client 8',  file: '/logos/client-logo-8.png' },
  { name: 'Client 9',  file: '/logos/client-logo-9.png' },
  { name: 'Client 10', file: '/logos/client-logo-10.png' },
  { name: 'Client 11', file: '/logos/client-logo-11.png' },
]

// Row 2 is a genuinely scrambled order — visually distinct from row 1
const ROW2_ORDER = [4, 9, 1, 6, 10, 2, 7, 0, 5, 3, 8]
const ROW2_BASE  = ROW2_ORDER.map(i => CLIENT_LOGOS[i])

interface LogoItem { name: string; url: string }
interface LogoStripProps { logos?: LogoItem[] }

// Spacing baked into padding-right so translateX(-50%) is always pixel-perfect
const ITEM_PAD = 80   // px gap between logos
const BOX_H    = 44   // px — uniform height cap; object-contain scales within this

function LogoImage({ name, file }: { name: string; file: string }) {
  return (
    <div
      style={{
        flexShrink: 0,
        paddingRight: ITEM_PAD,
        height: BOX_H,
        // Width is auto so the logo's natural aspect ratio determines rendered width,
        // but we cap it with a max-width so nothing gets too dominant
        width: 140 + ITEM_PAD,
        position: 'relative',
      }}
    >
      <Image
        src={file}
        alt={name}
        fill
        sizes="140px"
        className="object-contain transition-opacity duration-300"
        style={{ filter: 'brightness(0)', opacity: 0.72 }}
        onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.opacity = '1' }}
        onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.opacity = '0.72' }}
      />
    </div>
  )
}

function MarqueeRow({
  items,
  direction = 'forward',
}: {
  items: typeof CLIENT_LOGOS
  direction?: 'forward' | 'reverse'
}) {
  // Duplicate exactly 2× — animation goes 0 → -50% = perfect seamless loop
  const track     = [...items, ...items]
  const animClass = direction === 'reverse' ? 'animate-marquee-reverse' : 'animate-marquee'

  return (
    <div className="overflow-hidden gradient-mask-x group">
      <div
        className={`flex items-center ${animClass} group-hover:[animation-play-state:paused]`}
        style={{ minWidth: 'max-content', willChange: 'transform' }}
      >
        {track.map((logo, i) => (
          <LogoImage key={i} name={logo.name} file={logo.file} />
        ))}
      </div>
    </div>
  )
}

export default function LogoStrip({ logos = [] }: LogoStripProps) {
  return (
    <section
      className="bg-bor-background overflow-hidden"
      style={{ paddingTop: '72px', paddingBottom: '80px' }}
    >
      <p className="text-center font-body text-[20px] font-normal text-bor-foreground mb-12 relative z-10">
        Trusted by Dubai&apos;s leading brands &amp; retailers
      </p>

      <div className="flex flex-col gap-8">
        <MarqueeRow items={CLIENT_LOGOS} direction="forward" />
        <MarqueeRow items={ROW2_BASE}    direction="reverse" />
      </div>
    </section>
  )
}
