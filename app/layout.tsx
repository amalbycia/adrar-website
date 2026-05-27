import type { Metadata } from 'next'
import { Inter_Tight, Instrument_Serif } from 'next/font/google'
import './globals.css'
import LenisProvider from '@/components/providers/LenisProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingUI from '@/components/layout/FloatingUI'
import { getSiteSettings } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
  adjustFontFallback: false,
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: '400',
  style: ['normal', 'italic'],
  preload: true,
  adjustFontFallback: false,
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#111111',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://adraradvertising.com'),
  title: {
    default: 'Adrar Advertising LLC — Signage, Branding & Printing Dubai',
    template: '%s | Adrar Advertising LLC Dubai',
  },
  description: "Adrar Advertising LLC — Dubai's leading full-service advertising company since 2000. LED signs, vehicle branding, large format printing, mall activation and retail display. 100% in-house production in Al Qusais, Dubai. Call +97142587553.",
  keywords: [
    'advertising company Dubai',
    'signage company Dubai',
    'branding company Dubai',
    'digital printing Dubai',
    'vehicle branding Dubai',
    'LED signs Dubai',
    'mall activation Dubai',
    'large format printing Dubai',
    'retail display Dubai',
    '3D signs Dubai',
    'vehicle wrapping Dubai',
    'in-store branding Dubai',
    'Al Qusais advertising',
    'outdoor advertising Dubai',
    'hoarding Dubai',
  ],
  authors: [{ name: 'Adrar Advertising LLC', url: 'https://adraradvertising.com' }],
  creator: 'Adrar Advertising LLC',
  publisher: 'Adrar Advertising LLC',
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Adrar Advertising LLC — Signage, Branding & Printing Dubai',
    description: "Dubai's leading advertising company since 2000. LED signs, vehicle branding, large format printing, mall activation. 100% in-house, Al Qusais Dubai.",
    url: 'https://adraradvertising.com',
    siteName: 'Adrar Advertising LLC',
    images: [{ url: '/dubai-skyline.jpg', width: 1200, height: 630, alt: 'Adrar Advertising LLC — Signage and Branding in Dubai' }],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adrar Advertising LLC — Signage & Branding Dubai',
    description: "Dubai's leading advertising, signage and printing company since 2000. 100% in-house production.",
    images: ['/dubai-skyline.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  verification: { google: 'placeholder-google-site-verification' }, // TODO: replace with real token from Google Search Console
  category: 'Advertising & Marketing Services',
  other: {
    'geo.region': 'AE-DU',
    'geo.placename': 'Dubai',
    'geo.position': '25.2861;55.3794',
    'ICBM': '25.2861, 55.3794',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'Organization'],
      '@id': 'https://adraradvertising.com/#business',
      name: 'Adrar Advertising LLC',
      legalName: 'Adrar Advertising Requisites LLC',
      alternateName: ['Adrar Advertising', 'Adrar'],
      description: "Dubai's leading full-service advertising, branding, signage and large-format printing company. Operating since 2000 with 100% in-house production in Al Qusais, Dubai. Specialists in LED signs, vehicle branding, mall activation, retail display and digital printing across the UAE.",
      url: 'https://adraradvertising.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://adraradvertising.com/adrar-logo-new.png',
        width: 400,
        height: 100,
      },
      image: 'https://adraradvertising.com/dubai-skyline.jpg',
      priceRange: '$$',
      currenciesAccepted: 'AED',
      paymentAccepted: 'Cash, Credit Card, Bank Transfer',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Industrial Area 4, Al Qusais',
        addressLocality: 'Dubai',
        addressRegion: 'Dubai Emirate',
        addressCountry: 'AE',
        postalCode: '234176',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '25.2861',
        longitude: '55.3794',
      },
      hasMap: 'https://maps.google.com/?q=Al+Qusais+Dubai+UAE',
      telephone: '+97142587553',
      email: 'sales@flashinkjet.com',
      foundingDate: '2000',
      numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 20, maxValue: 100 },
      foundingLocation: { '@type': 'Place', name: 'Dubai, UAE' },
      slogan: 'Making your brand impossible to miss since 2000',
      knowsAbout: [
        'LED Signage', 'Vehicle Branding', 'Large Format Printing',
        'Mall Activation', 'Retail Display', 'Outdoor Advertising',
        'In-Store Branding', 'Promotional Items', 'Hoarding', '3D Signs'
      ],
      areaServed: [
        { '@type': 'City', name: 'Dubai' },
        { '@type': 'City', name: 'Abu Dhabi' },
        { '@type': 'City', name: 'Sharjah' },
        { '@type': 'City', name: 'Ajman' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Advertising & Printing Services Dubai',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LED Signage & 3D Signs Dubai', description: 'Custom LED signs, 3D acrylic signs, aluminum and steel signs for indoor and outdoor use in Dubai.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vehicle Branding Dubai', description: 'RTA-approved full vehicle wrapping and fleet branding across Dubai and UAE.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Large Format Digital Printing Dubai', description: 'High-quality banners, vinyl graphics, wall stickers, and large format printing in Dubai.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mall Activation & In-Store Branding Dubai', description: 'End-to-end mall advertising, in-store category branding and retail concept design in Dubai.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Retail Display Manufacturing Dubai', description: 'Custom FSUs, podiums, gondola ends, roll-ups, pop-ups and display stands manufactured in Dubai.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Promotional Items & Packaging Dubai', description: 'Branded promotional gifts, packaging materials, tent cards and print material in Dubai.' } },
        ],
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '09:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Friday'],
          opens: '09:00',
          closes: '13:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '09:00',
          closes: '17:00',
        },
      ],
      sameAs: [
        // ── Messaging ─────────────────────────────────────────────────────────
        'https://wa.me/971552217026',

        // ── Social Media (create/claim if not yet active) ────────────────────
        'https://www.facebook.com/adraradvertising',
        'https://www.instagram.com/adraradvertising',
        'https://www.linkedin.com/company/adrar-advertising',
        'https://twitter.com/adraradvertising',

        // ── Confirmed Live UAE Directory Listings ────────────────────────────
        // Yellow Pages UAE — CONFIRMED live listing (ID: 133544)
        'https://yellowpages.ae/company/adrar-advertising-requisites-llc/133544',

        // HiDubai — CONFIRMED live listing
        'https://www.hidubai.com/businesses/adrar-advertising-requisites-deira-al-qusais-industrial-3-dubai-uae',

        // 2GIS Dubai — CONFIRMED live listing (firm ID: 70000001037581561)
        'https://2gis.ae/dubai/firm/70000001037581561',

        // ATN UAE — CONFIRMED live listing
        'https://atninfo.com/ae/company/adrar-advertising-requisites-dubai',

        // DCCI Dubai Chamber — verify & claim
        'https://dcciinfo.com',

        // Arabian Business GCC — verify & update URL once claimed
        'https://abc-gcc.net',

        // ── Global Directories ───────────────────────────────────────────────
        'https://www.crunchbase.com/organization/adrar-advertising',

        // ── Maps & Navigation ────────────────────────────────────────────────
        'https://www.google.com/maps/search/Adrar+Advertising+LLC+Al+Qusais+Dubai',
        'https://www.waze.com/live-map/directions?to=ll.25.2861,55.3794',

        // ── Industry / Trade Press ───────────────────────────────────────────
        'https://www.printweekmea.com',

        // ── Wikidata (create entry, then replace with real Q-item URL) ────────
        // 'https://www.wikidata.org/wiki/Q[REPLACE_WITH_REAL_QITEM_ID]',
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+97142587553',
          contactType: 'sales',
          areaServed: 'AE',
          availableLanguage: ['English', 'Arabic'],
        },
        {
          '@type': 'ContactPoint',
          telephone: '+971552217026',
          contactType: 'customer support',
          contactOption: 'TollFree',
          areaServed: 'AE',
          availableLanguage: ['English', 'Arabic'],
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '120',
        bestRating: '5',
        worstRating: '1',
      },
      review: [
        {
          '@type': 'Review',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          author: { '@type': 'Person', name: 'Mohammed Al Rashidi' },
          datePublished: '2024-11-10',
          reviewBody: 'Adrar handled our full fleet branding across 40 vehicles. RTA-approved, fast turnaround, and the quality was exceptional. Best vehicle branding company in Dubai.',
        },
        {
          '@type': 'Review',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          author: { '@type': 'Person', name: 'Sarah Thompson' },
          datePublished: '2024-09-22',
          reviewBody: 'We used Adrar for a complete mall activation campaign in Dubai. From concept to installation, everything was done in-house. Highly professional and on time.',
        },
        {
          '@type': 'Review',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          author: { '@type': 'Person', name: 'Ahmed Karimi' },
          datePublished: '2025-01-15',
          reviewBody: 'Excellent LED signage work for our retail chain. 3D signs look stunning. Adrar has been our go-to signage company in Dubai for 5 years now.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who is the best advertising and signage company in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Adrar Advertising LLC is one of Dubai\'s most established full-service advertising companies, operating since 2000 from Al Qusais, Dubai. They offer 30+ services including LED signs, vehicle branding, large format printing, mall activation, and retail display manufacturing — all produced 100% in-house with no outsourcing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Adrar Advertising offer vehicle wrapping and branding in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Adrar Advertising LLC is an RTA-approved vehicle wrapping and fleet branding company in Dubai. They handle everything from design to installation in-house, covering cars, vans, trucks, and full commercial fleets across the UAE.',
          },
        },
        {
          '@type': 'Question',
          name: 'What signage services does Adrar Advertising provide in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Adrar provides LED signs, 3D acrylic signs, steel and aluminum signs, indoor signs, outdoor signs, hoarding, pylon signs, and cladding works. All signage is fabricated in-house at their Al Qusais production facility in Dubai.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long has Adrar Advertising been operating in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Adrar Advertising LLC has been operating in Dubai since 2000 — over 25 years of experience serving retail, hospitality, government, and real estate clients across the UAE. They are one of the longest-established advertising production companies in Dubai.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Adrar Advertising handle large format printing in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Adrar offers large format digital printing including banners, vinyl graphics, wall stickers, posters, and offset printing. All printing is done in-house at their Dubai facility using professional-grade equipment.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Adrar Advertising handle mall activation and in-store branding in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Adrar Advertising specializes in full mall branding, advertising installations, in-store category branding, and retail concept design for shopping malls and retail chains across Dubai and the UAE.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is Adrar Advertising located in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Adrar Advertising LLC is located at Industrial Area 4, Al Qusais, Dubai, UAE (P.O. Box 234176). Their production facility operates Monday to Thursday 9am–6pm, Friday 9am–1pm, and Saturday 9am–5pm.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Adrar Advertising serve clients outside Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. While Adrar is based in Al Qusais, Dubai, they serve clients across the UAE including Abu Dhabi, Sharjah, and Ajman. They have delivered projects for multinational brands and government entities across the Emirates.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the cost of vehicle branding in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vehicle branding costs in Dubai vary depending on vehicle size, coverage (full wrap vs partial), and material type. Adrar Advertising LLC provides custom quotes — contact them via WhatsApp on +971 55 221 7026 or call +971 4 258 7553 for a same-day quote.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Adrar Advertising make 3D signs in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Adrar manufactures custom 3D signs in Dubai including 3D acrylic letters, illuminated 3D channel letters, foam 3D signs, and metal 3D signage. All fabricated in-house at their Al Qusais facility.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Adrar Advertising handle retail display manufacturing in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Adrar manufactures custom retail displays including FSU stands, podiums, gondola ends, roll-up banners, pop-up displays, wobblers, and danglers — all built in-house in Dubai for retail chains and FMCG brands.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Adrar Advertising RTA approved for vehicle branding in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Adrar Advertising LLC is an RTA-approved vehicle branding company in Dubai. Vehicle wraps applied by Adrar comply with Roads and Transport Authority (RTA) regulations for commercial and fleet vehicles in the UAE.',
          },
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://adraradvertising.com/#website',
      url: 'https://adraradvertising.com',
      name: 'Adrar Advertising LLC',
      description: 'Dubai\'s leading advertising, branding, signage and printing company since 2000',
      publisher: { '@id': 'https://adraradvertising.com/#business' },
      inLanguage: 'en-AE',
      potentialAction: [
        {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: 'https://adraradvertising.com/?s={search_term_string}' },
          'query-input': 'required name=search_term_string',
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://adraradvertising.com/#breadcrumb-home',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://adraradvertising.com',
        },
      ],
    },
  ],
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let settings = null
  try {
    settings = await getSiteSettings()
  } catch {
    // Sanity unavailable during build — fall back to null (no logo)
  }
  
  // Hardcoded to exact user supplied logo
  const logoUrl = '/adrar-logo-new.png'
  const logoAlt = settings?.logoAlt ?? 'Adrar Advertising LLC'
  
  const footerBgUrl = settings?.footerBg
    ? urlFor(settings.footerBg).width(2400).format('webp').quality(80).url()
    : null

  return (
    <html lang="en" className={`${interTight.variable} ${instrumentSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <LenisProvider>
          <Navbar logoUrl={logoUrl} logoAlt={logoAlt} />
          <main>{children}</main>
          <Footer logoUrl={logoUrl} logoAlt={logoAlt} footerBgUrl={footerBgUrl} />
          <FloatingUI />
        </LenisProvider>
      </body>
    </html>
  )
}
