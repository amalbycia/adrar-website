'use client'

import Link from 'next/link'

const stats = [
  {
    value: '25+',
    description: 'Established in Dubai since 2000, serving every major industry.',
    link: null
  },
  {
    value: '500+',
    description: 'Delivered across signage, branding, print and retail.',
    link: null
  },
  {
    value: '30+',
    description: 'From a single roll-up to a full mall activation.',
    link: '/services'
  },
  {
    value: '100%',
    description: 'Design, fabrication, print and installation — our team.',
    link: '/about'
  },
]

export default function TrustBar() {
  return (
    <section className="bg-bor-foreground py-24 md:py-32 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">

        {/* Eyebrow */}
        <p className="text-center font-body text-[12px] font-bold uppercase tracking-[0.2em] text-bor-primary mb-6">
          SUCCESS IN NUMBERS
        </p>

        {/* Headline */}
        <h2
          className="text-center font-heading font-medium text-white leading-[1.1] tracking-[0.1px] mb-20 md:mb-32"
          style={{ fontSize: 'clamp(44px, 5.5vw, 80px)' }}
        >
          The numbers behind{' '}
          <span className="block mt-2">
            <i className="font-serif italic font-normal text-white opacity-100">
              25 years in Dubai.
            </i>
          </span>
        </h2>

        {/* 2x2 Grid Layout */}
        <div className="flex flex-col gap-0 border-t border-white/15">
          {/* Row 1 Container */}
          <div className="relative border-b border-white/15">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 py-16 md:py-24">
              
              {/* Stat 1 */}
              <div className="flex items-center justify-between gap-8 md:pr-12">
                <div className="flex flex-col gap-4">
                  <p className="font-body text-[15px] text-white/70 leading-[1.6] max-w-[280px]">
                    {stats[0].description}
                  </p>
                </div>
                <span className="font-serif font-normal text-white tracking-[-3px] shrink-0" style={{ fontSize: 'clamp(72px, 8vw, 120px)' }}>
                  {stats[0].value}
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center justify-between gap-8 md:pl-12">
                <div className="flex flex-col gap-4">
                  <p className="font-body text-[15px] text-white/70 leading-[1.6] max-w-[280px]">
                    {stats[1].description}
                  </p>
                </div>
                <span className="font-serif font-normal text-white tracking-[-3px] shrink-0" style={{ fontSize: 'clamp(72px, 8vw, 120px)' }}>
                  {stats[1].value}
                </span>
              </div>

            </div>
          </div>

          {/* Row 2 Container */}
          <div className="relative border-b border-white/15">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 py-16 md:py-24">
              
              {/* Stat 3 */}
              <div className="flex items-center justify-between gap-8 md:pr-12">
                <div className="flex flex-col gap-4">
                  <p className="font-body text-[15px] text-white/70 leading-[1.6] max-w-[280px]">
                    {stats[2].description}
                  </p>
                  {stats[2].link && (
                    <Link href={stats[2].link} className="font-body text-[13px] font-semibold text-white tracking-wide hover:opacity-70 transition-opacity flex items-center gap-1 group">
                      Read more on our Services <span className="group-hover:translate-x-1 transition-transform inline-block">↗</span>
                    </Link>
                  )}
                </div>
                <span className="font-serif font-normal text-white tracking-[-3px] shrink-0" style={{ fontSize: 'clamp(72px, 8vw, 120px)' }}>
                  {stats[2].value}
                </span>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center justify-between gap-8 md:pl-12">
                <div className="flex flex-col gap-4">
                  <p className="font-body text-[15px] text-white/70 leading-[1.6] max-w-[280px]">
                    {stats[3].description}
                  </p>
                  {stats[3].link && (
                    <Link href={stats[3].link} className="font-body text-[13px] font-semibold text-white tracking-wide hover:opacity-70 transition-opacity flex items-center gap-1 group">
                      Read more in About <span className="group-hover:translate-x-1 transition-transform inline-block">↗</span>
                    </Link>
                  )}
                </div>
                <span className="font-serif font-normal text-white tracking-[-3px] shrink-0 leading-[0.9]" style={{ fontSize: 'clamp(56px, 6vw, 100px)' }}>
                  {stats[3].value}
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
