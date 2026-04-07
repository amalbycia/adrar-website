import Link from 'next/link'
import Image from 'next/image'

const servicesGrid = [
  // Column 1
  [
    {
      heading: 'Signage & LED',
      href: '/services#signage-led',
      items: ['LED Signs', '3D Signs', 'Acrylic Signs', 'Indoor Signs', 'Outdoor Signs', 'Cladding Work'],
    },
    {
      heading: 'Retail & Activation',
      href: '/services#retail',
      items: ['Mall Branding', 'In-Store Branding', 'Display Stands', 'Roll-ups & Pop-ups', 'Promo Gifts', 'Packaging'],
    }
  ],
  // Column 2
  [
    {
      heading: 'Large Format Printing',
      href: '/services#large-format',
      items: ['Digital Printing', 'Vinyl Graphics', 'Banners & Posters', 'Wall Stickers', 'Large Format Print', 'Offset Print'],
    },
    {
      heading: 'Branding & Wrapping',
      href: '/services#branding',
      items: ['Vehicle Branding', 'Wall Branding', 'Floor Branding', 'Frosted Works', 'Glass Branding', 'Hoarding'],
    }
  ]
]

const navMain = {
  heading: 'Main',
  items: [
    { label: 'Our work',              href: '/our-work' },
    { label: 'Our people',            href: '/about' },
    { label: 'About us',              href: '/about' },
    { label: 'Pricing',               href: '/contact' },
    { label: 'Reviews',               href: '/' },
    { label: 'Careers',               href: '/contact' },
    { label: 'Adrar vs. Alternatives', href: '/' },
  ]
}

const navLearn = {
  heading: 'Learn & Contact',
  items: [
    { label: '04 2587553',            href: 'tel:+97142587553' },
    { label: '+971 55 221 7026',      href: 'https://wa.me/971552217026' },
    { label: 'sales@flashinkjet.com', href: 'mailto:sales@flashinkjet.com' },
    { label: 'Al Qusais, Dubai, UAE', href: '/contact' },
    { label: 'P.O. Box 234176',       href: '/contact' },
  ]
}

function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
    </svg>
  )
}
function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  )
}
function IconWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  )
}
function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

interface FooterProps {
  logoUrl?: string | null
  logoAlt?: string
}

export default function Footer({ logoUrl, logoAlt = 'Adrar Advertising LLC' }: FooterProps) {
  return (
    <footer id="site-footer" className="bg-[#111111] text-white">

      {/* ── HERO IMAGE SECTION ── */}
      <div className="relative w-full overflow-hidden" style={{ height: 'clamp(380px, 50vw, 560px)' }}>
        {/* Dubai skyline background */}
        <Image
          src="/dubai-skyline.jpg"
          alt="Dubai skyline at night"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-center scale-105"
        />

        {/* Multi-stop gradient overlay: dark on edges, transparent in middle */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(17,17,17,0.45) 0%, rgba(17,17,17,0.05) 35%, rgba(17,17,17,0.05) 55%, rgba(17,17,17,0.8) 100%)',
          }}
        />
        {/* Left + right dark vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(17,17,17,0.5) 0%, transparent 20%, transparent 80%, rgba(17,17,17,0.5) 100%)',
          }}
        />

        {/* Centered content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2
            className="font-heading font-medium text-white leading-[1.05] tracking-[-0.5px] mb-8"
            style={{ fontSize: 'clamp(36px, 5.5vw, 80px)', maxWidth: '800px', textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          >
            Dubai&apos;s branding partner,{' '}
            <i className="font-serif italic font-normal opacity-90">
              since 2000.
            </i>
          </h2>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-bor-primary text-white text-[15px] font-body font-bold uppercase tracking-wide hover:bg-[#C94208] transition-colors duration-200 shadow-lg"
          >
            Get a Quote
          </Link>
        </div>

        {/* Bottom fade — blends image into footer nav section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #111111)' }}
        />
      </div>

      {/* ── NAV CONTENT ── */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">

        {/* ── Main grid: Services + Navigation ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-24 pt-16 pb-24">

          {/* ── 1. Services Block ── */}
          <div className="flex flex-col">
            <div className="border-b border-white/20 pb-3 mb-10 w-full">
              <h2 className="font-heading font-medium text-[18px] text-white tracking-wide">
                Services
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
              {servicesGrid.map((column, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-12">
                  {column.map((group) => (
                    <div key={group.heading}>
                      <Link
                        href={group.href}
                        className="group inline-flex items-center gap-1.5 font-heading font-medium text-[16.5px] text-white hover:opacity-80 transition-opacity mb-6"
                      >
                        {group.heading}
                        <span className="text-white/60 text-[14px]">↗</span>
                      </Link>
                      <ul className="flex flex-col gap-3">
                        {group.items.map((item) => (
                          <li key={item}>
                            <Link
                              href={group.href}
                              className="font-body text-[13.5px] text-white/50 hover:text-white transition-colors duration-200"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* ── 2. Navigation Block ── */}
          <div className="flex flex-col">
            <div className="border-b border-white/20 pb-3 mb-10 w-full">
              <h2 className="font-heading font-medium text-[18px] text-white tracking-wide">
                Navigation
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">

              {/* Main Links */}
              <div>
                <p className="font-heading font-medium text-[16.5px] text-white mb-6">
                  {navMain.heading}
                </p>
                <ul className="flex flex-col gap-3">
                  {navMain.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="font-body text-[13.5px] text-white/50 hover:text-white transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learn & Contact */}
              <div>
                <p className="font-heading font-medium text-[16.5px] text-white mb-6">
                  {navLearn.heading}
                </p>
                <ul className="flex flex-col gap-3">
                  {navLearn.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="font-body text-[13.5px] text-white/50 hover:text-white transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 pb-12 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Left — Logo + copyright */}
          <div className="flex flex-col items-center lg:items-start gap-3 flex-1">
            <Link href="/" aria-label="Adrar Advertising — Home" className="block">
              {logoUrl ? (
                <Image
                  src={logoUrl}
                  alt={logoAlt}
                  width={140}
                  height={44}
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              ) : (
                <span className="font-heading font-black text-3xl text-white tracking-tighter">
                  adrar
                </span>
              )}
            </Link>
            <p className="font-body text-[14px] text-[#A3A3A3]">
              © {new Date().getFullYear()} Adrar Advertising LLC. All rights reserved.
            </p>
          </div>

          {/* Middle — Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 flex-[1.5]">
            {['Privacy policy', 'Terms of use', 'Status page', 'DMCA'].map((link) => (
              <Link
                key={link}
                href="/"
                className="font-body text-[14px] text-[#B0B0B0] border-b border-[#B0B0B0]/40 hover:text-white hover:border-white transition-colors pb-0.5"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Right — Social icons */}
          <div className="flex items-center justify-center lg:justify-end gap-3 flex-1">
            {[
              { icon: <IconLinkedIn />,  href: 'https://linkedin.com',          label: 'LinkedIn' },
              { icon: <IconFacebook />,  href: 'https://facebook.com',          label: 'Facebook' },
              { icon: <IconInstagram />, href: 'https://instagram.com',         label: 'Instagram' },
              { icon: <IconWhatsApp />,  href: 'https://wa.me/971552217026',    label: 'WhatsApp' },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full border border-white/25 flex items-center justify-center text-white hover:border-white hover:bg-white/5 transition-all duration-300"
              >
                {icon}
              </a>
            ))}
            <div className="w-11 h-11 ml-2 rounded-[6px] bg-bor-primary flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(232,80,10,0.3)]">
              <span className="font-heading font-black text-xl leading-none">A</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
