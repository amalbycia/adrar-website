import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Adrar Advertising LLC Dubai',
  description: 'Reach Adrar Advertising LLC by phone, WhatsApp or email. Based in Al Qusais, Dubai. Call +97142587553 or WhatsApp +971552217026.',
}

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="py-16 md:py-20 max-w-2xl">

          <p className="text-[11px] font-body font-medium uppercase tracking-widest text-white/50 mb-6">
            Contact
          </p>
          <h1 className="font-heading font-bold text-white leading-tight mb-12" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Let&apos;s talk about your project.
          </h1>

          <div className="flex flex-col gap-10">
            {/* Phone */}
            <div>
              <p className="text-[11px] font-body font-medium uppercase tracking-widest text-white/50 mb-2">Phone</p>
              <a
                href="tel:+97142587553"
                className="font-heading font-bold text-white hover:text-[#E8500A] transition-colors"
                style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}
              >
                04 2587553
              </a>
            </div>

            {/* WhatsApp */}
            <div>
              <p className="text-[11px] font-body font-medium uppercase tracking-widest text-white/50 mb-2">WhatsApp</p>
              <a
                href="https://wa.me/971552217026"
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading font-bold text-white hover:text-[#E8500A] transition-colors"
                style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}
              >
                +971 55 221 7026
              </a>
            </div>

            {/* Email */}
            <div>
              <p className="text-[11px] font-body font-medium uppercase tracking-widest text-white/50 mb-2">Email</p>
              <a
                href="mailto:sales@flashinkjet.com"
                className="font-heading font-bold text-white hover:text-[#E8500A] transition-colors"
                style={{ fontSize: 'clamp(18px, 2.5vw, 28px)' }}
              >
                sales@flashinkjet.com
              </a>
            </div>

            {/* Address */}
            <div>
              <p className="text-[11px] font-body font-medium uppercase tracking-widest text-white/50 mb-2">Location</p>
              <p className="font-body text-base text-white leading-relaxed">
                Industrial Area 4, Al Qusais<br />
                Dubai, UAE<br />
                P.O. Box 234176
              </p>
            </div>

            {/* Hours */}
            <div>
              <p className="text-[11px] font-body font-medium uppercase tracking-widest text-white/50 mb-2">Hours</p>
              <p className="font-body text-base text-white/70 leading-relaxed">
                Mon – Thu: 09:00 – 18:00<br />
                Fri: 09:00 – 13:00<br />
                Sat: 09:00 – 17:00
              </p>
            </div>

            <a
              href="https://wa.me/971552217026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#E8500A] text-white text-[14px] font-body font-bold uppercase tracking-wide hover:bg-[#C94008] transition-colors duration-200 w-fit"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us Now
            </a>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Adrar Advertising LLC',
              legalName: 'Adrar Advertising Requisites LLC',
              description: "Dubai's leading advertising, branding, signage and large-format printing company since 2000. 100% in-house production in Al Qusais, Dubai.",
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Industrial Area 4, Al Qusais',
                addressLocality: 'Dubai',
                addressRegion: 'Dubai Emirate',
                addressCountry: 'AE',
                postalCode: '234176',
              },
              telephone: '+97142587553',
              email: 'sales@flashinkjet.com',
              foundingDate: '2000',
              areaServed: ['Dubai', 'Abu Dhabi', 'Sharjah', 'UAE'],
              url: 'https://adraradvertising.com',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+971552217026',
                contactType: 'sales',
                availableLanguage: ['English', 'Arabic'],
              },
            }),
          }}
        />
      </div>
    </div>
  )
}
