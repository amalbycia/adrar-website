import type { Metadata } from 'next'
import Image from 'next/image'
import SectionHeading from '@/components/shared/SectionHeading'
import Button from '@/components/shared/Button'
import { stats } from '@/data/stats'

export const metadata: Metadata = {
  title: 'About Adrar Advertising LLC — 25 Years in Dubai',
  description: 'Adrar Advertising LLC has been Dubai\'s trusted advertising and signage partner since 2000. 100% in-house production in Al Qusais. LED signs, vehicle branding, printing and mall activation — no outsourcing.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Adrar Advertising LLC — 25 Years in Dubai',
    description: 'Dubai\'s most established full-service advertising company. Operating since 2000, 100% in-house production, Al Qusais, Dubai.',
    url: 'https://adraradvertising.com/about',
    type: 'website',
  },
}

const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://adraradvertising.com/about#page',
      url: 'https://adraradvertising.com/about',
      name: 'About Adrar Advertising LLC — 25 Years in Dubai',
      description: 'Adrar Advertising LLC has operated in Dubai since 2000. 100% in-house production of signage, branding, printing and retail displays in Al Qusais, Dubai.',
      isPartOf: { '@id': 'https://adraradvertising.com/#website' },
      about: { '@id': 'https://adraradvertising.com/#business' },
      inLanguage: 'en-AE',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://adraradvertising.com' },
        { '@type': 'ListItem', position: 2, name: 'About', item: 'https://adraradvertising.com/about' },
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://adraradvertising.com/#business',
      name: 'Adrar Advertising LLC',
      legalName: 'Adrar Advertising Requisites LLC',
      foundingDate: '2000',
      foundingLocation: { '@type': 'Place', name: 'Dubai, UAE' },
      description: 'Dubai\'s leading full-service advertising production company since 2000. 100% in-house: signage, vehicle branding, large format printing, mall activation, retail display and promotional items. Based in Al Qusais, Dubai.',
      url: 'https://adraradvertising.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://adraradvertising.com/adrar-logo-new.png',
        width: 400,
        height: 100,
      },
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
      sameAs: [
        'https://wa.me/971552217026',
        'https://www.facebook.com/adraradvertising',
        'https://www.instagram.com/adraradvertising',
        'https://www.linkedin.com/company/adrar-advertising',
        'https://twitter.com/adraradvertising',
        // Confirmed live UAE directory listings
        'https://yellowpages.ae/company/adrar-advertising-requisites-llc/133544',
        'https://www.hidubai.com/businesses/adrar-advertising-requisites-deira-al-qusais-industrial-3-dubai-uae',
        'https://2gis.ae/dubai/firm/70000001037581561',
        'https://atninfo.com/ae/company/adrar-advertising-requisites-dubai',
        'https://www.crunchbase.com/organization/adrar-advertising',
        'https://www.google.com/maps/search/Adrar+Advertising+LLC+Al+Qusais+Dubai',
      ],
      numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 20, maxValue: 100 },
      knowsAbout: [
        'LED Signage', 'Vehicle Branding', 'Large Format Printing',
        'Mall Activation', 'Retail Display', 'Outdoor Advertising',
        'In-Store Branding', 'Promotional Items', 'Hoarding', '3D Signs',
        'Fleet Branding', 'RTA Approved Vehicle Wrapping',
      ],
    },
  ],
}

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-32">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Hero */}
        <div className="py-16 md:py-20 max-w-3xl">
          <SectionHeading
            eyebrow="About Adrar"
            title="25 years making Dubai's brands impossible to ignore."
          />
          <p className="mt-8 font-body text-base md:text-lg text-white/70 leading-relaxed">
            Adrar Advertising Requisites LLC was founded in 2000 in Al Qusais, Dubai. What started as a small print and signage operation has grown into one of Dubai&apos;s most capable full-service advertising production companies — handling everything from LED signs to full mall activations without ever outsourcing.
          </p>
          <p className="mt-5 font-body text-base md:text-lg text-white/70 leading-relaxed">
            Our in-house facility means faster turnarounds, consistent quality, and a single point of accountability. No subcontractors, no surprises.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <span className="font-heading font-black text-5xl text-white">{stat.value}</span>
              <p className="mt-2 font-body text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-20">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
              Everything in-house. Nothing farmed out.
            </h2>
            <p className="font-body text-base text-white/70 leading-relaxed mb-4">
              From design and pre-press through to fabrication, printing, and on-site installation — our team handles every stage. This isn&apos;t just a cost-saving measure; it&apos;s how we maintain quality across 30+ service categories.
            </p>
            <p className="font-body text-base text-white/70 leading-relaxed mb-8">
              When you work with Adrar, you&apos;re working with the people who actually build, print, and install your brand materials. Not a middleman.
            </p>
            <Button href="https://wa.me/971552217026" external>WhatsApp Us</Button>
          </div>

          <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
            <Image
              src="/projects/1.jpg"
              alt="Adrar Advertising LLC — Al Qusais production facility and team, Dubai"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
    </div>
  )
}
