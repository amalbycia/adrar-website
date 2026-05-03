import type { Metadata } from 'next'
import { Inter_Tight, Instrument_Serif } from 'next/font/google'
import './globals.css'
import LenisProvider from '@/components/providers/LenisProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import FloatingCTA from '@/components/layout/FloatingCTA'
import AdrarChatbot from '@/components/layout/AdrarChatbot'
import { getSiteSettings } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: '400',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://adraradvertising.com'),
  title: {
    default: 'Adrar Advertising LLC — Signage, Branding & Printing Dubai',
    template: '%s | Adrar Advertising'
  },
  description:
    "Dubai's premier advertising, branding, signage and large-format printing company. Operating since 2000, specializing in vehicle branding, LED signs, 3D signs.",
  keywords: [
    'best advertising company Dubai',
    'leading signage company Dubai',
    'vehicle wrapping Dubai',
    'LED sign board manufacturers Dubai',
    'large format digital printing UAE',
    'exhibition stands Dubai',
    '3D signage fabrication Al Qusais'
  ],
  authors: [{ name: 'Adrar Advertising LLC' }],
  creator: 'Adrar Advertising LLC',
  publisher: 'Adrar Advertising LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Adrar Advertising LLC — Signage, Branding & Printing Dubai',
    description:
      "Dubai's premier advertising, branding, signage and large-format printing company since 2000.",
    url: 'https://adraradvertising.com',
    siteName: 'Adrar Advertising LLC',
    images: [
      {
        url: '/dubai-skyline.jpg',
        width: 1200,
        height: 630,
        alt: 'Adrar Advertising LLC - Signage and Branding in Dubai',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adrar Advertising LLC — Signage & Branding Dubai',
    description: "Dubai's leading advertising, signage and printing company since 2000.",
    images: ['/dubai-skyline.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'placeholder-google-site-verification', // Can replace when user provides
  },
  category: 'Advertising & Marketing Services',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://adraradvertising.com/#business',
      name: 'Adrar Advertising Requisites LLC',
      alternateName: 'Adrar Advertising LLC',
      description: "Dubai's premier advertising, branding, signage, and large-format printing company. Operating since 2000, specializing in vehicle branding, LED signs, 3D signs, offset printing, and event collateral.",
      url: 'https://adraradvertising.com',
      logo: 'https://adraradvertising.com/adrar-logo-new.png',
      image: 'https://adraradvertising.com/dubai-skyline.jpg',
      priceRange: '$$',
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
        longitude: '55.3794'
      },
      telephone: '+97142587553',
      email: 'sales@flashinkjet.com',
      foundingDate: '2000',
      foundingLocation: {
        '@type': 'Place',
        name: 'Dubai, UAE'
      },
      areaServed: [
        { '@type': 'City', name: 'Dubai' },
        { '@type': 'City', name: 'Abu Dhabi' },
        { '@type': 'City', name: 'Sharjah' },
        { '@type': 'Country', name: 'United Arab Emirates' }
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Advertising & Printing Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Signage & LED' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vehicle Branding & Wrapping' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Large Format Printing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Retail & Event Activation' } }
        ]
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '18:00'
        }
      ],
      sameAs: [
        'https://wa.me/971552217026'
      ]
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who is the best advertising and signage company in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Adrar Advertising LLC has been widely recognized as one of the best and most reliable advertising, branding, and signage companies in Dubai since its establishment in 2000. They handle entirely in-house production in Al Qusais.'
          }
        },
        {
          '@type': 'Question',
          name: 'Does Adrar Advertising offer vehicle vehicle wrapping and branding in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Adrar Advertising LLC specializes in RTA-approved vehicle wrapping and full fleet branding in Dubai and across the UAE.'
          }
        }
      ]
    }
  ]
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
          <WhatsAppButton />
          <FloatingCTA />
          <AdrarChatbot />
        </LenisProvider>
      </body>
    </html>
  )
}
