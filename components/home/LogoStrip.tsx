'use client'

import Image from 'next/image'

interface LogoItem { name: string; url: string }

const CLIENT_LOGOS: LogoItem[] = [
  { name: 'Client 1',  url: '/logos/client-logo-1.png' },
  { name: 'Client 2',  url: '/logos/client-logo-2.png' },
  { name: 'Client 3',  url: '/logos/client-logo-3.png' },
  { name: 'Client 4',  url: '/logos/client-logo-4.png' },
  { name: 'Client 5',  url: '/logos/client-logo-5.png' },
  { name: 'Client 6',  url: '/logos/client-logo-6.png' },
  { name: 'Client 7',  url: '/logos/client-logo-7.png' },
  { name: 'Client 8',  url: '/logos/client-logo-8.png' },
  { name: 'Client 9',  url: '/logos/client-logo-9.png' },
  { name: 'Client 10', url: '/logos/client-logo-10.png' },
  { name: 'Client 11', url: '/logos/client-logo-11.png' },
]

// Spacing baked into padding-right so translateX(-50%) is always pixel-perfect
const ITEM_PAD = 140   // px gap between logos
const BOX_H    = 80    // px — uniform height cap; object-contain scales within this
const LOGO_W   = 200   // px — max width cap for wide logos

function LogoImage({ name, url }: { name: string; url: string }) {
  return (
    <div
      style={{
        flexShrink: 0,
        paddingRight: ITEM_PAD,
        height: BOX_H,
        width: LOGO_W + ITEM_PAD,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image
          src={url}
          alt={name}
          fill
          sizes={`${LOGO_W}px`}
          className="object-contain transition-opacity duration-300"
          style={{ filter: 'brightness(0)', opacity: 0.72 }}
          onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.opacity = '1' }}
          onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.opacity = '0.72' }}
        />
      </div>
    </div>
  )
}

function MarqueeRow({
  items,
  direction = 'forward',
}: {
  items: LogoItem[]
  direction?: 'forward' | 'reverse'
}) {
  // Ensure the base repetition is wide enough to cover large screens (e.g., 4K monitors)
  // Each logo is ~220px wide (140px + 80px gap). 20 items = 4400px.
  let baseTrack = [...items]
  while (baseTrack.length < 20) {
    baseTrack = [...baseTrack, ...items]
  }
  
  // Duplicate exactly 2× so animation goes 0 → -50% = perfect seamless loop
  const track     = [...baseTrack, ...baseTrack]
  const animClass = direction === 'reverse' ? 'animate-marquee-reverse' : 'animate-marquee'

  return (
    <div className="overflow-hidden gradient-mask-x group">
      <div
        className={`flex items-center ${animClass} group-hover:[animation-play-state:paused]`}
        style={{ minWidth: 'max-content', willChange: 'transform' }}
      >
        {track.map((logo, i) => (
          // Use key={i} safely here since it's a guaranteed stable static list
          <LogoImage key={i} name={logo.name} url={logo.url} />
        ))}
      </div>
    </div>
  )
}

export default function LogoStrip() {
  // Row 2 is visually distinct
  const row2Logos = [...CLIENT_LOGOS].reverse()

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
        <MarqueeRow items={row2Logos} direction="reverse" />
      </div>
    </section>
  )
}
