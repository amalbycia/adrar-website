// Hero.tsx — thin switcher
// ─────────────────────────────────────────────────────────────────────────────
// Desktop and mobile are completely separate components with their own
// DOM trees, layout logic, and animation systems.
//
// CSS does the switching:
//   • hidden lg:block  →  HeroDesktop  (invisible on mobile, exists in DOM)
//   • lg:hidden        →  HeroMobile   (invisible on desktop, exists in DOM)
//
// To edit desktop: open HeroDesktop.tsx
// To edit mobile:  open HeroMobile.tsx
// ─────────────────────────────────────────────────────────────────────────────

import HeroDesktop from './HeroDesktop'
import HeroMobile  from './HeroMobile'
import type { HeroProps } from './HeroDesktop'

export default function Hero({ heroCards }: HeroProps) {
  return (
    <>
      {/* ── Desktop (≥ 1024px) ── zero mobile impact */}
      <div className="hidden lg:block">
        <HeroDesktop heroCards={heroCards} />
      </div>

      {/* ── Mobile (< 1024px) ── zero desktop impact */}
      <div className="lg:hidden">
        <HeroMobile heroCards={heroCards} />
      </div>
    </>
  )
}
