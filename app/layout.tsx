import type { Metadata } from 'next'
import { Inter_Tight, Instrument_Serif } from 'next/font/google'
import './globals.css'
import LenisProvider from '@/components/providers/LenisProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import FloatingCTA from '@/components/layout/FloatingCTA'
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
  title: 'Adrar Advertising LLC — Signage, Branding & Printing Dubai',
  description:
    "Dubai's leading advertising, branding, signage and large-format printing company since 2000. In-house production in Al Qusais. Get a quote today.",
  keywords: [
    'advertising company Dubai',
    'signage company Dubai',
    'branding company Dubai',
    'digital printing Dubai',
    'vehicle branding Dubai',
    'LED signs Dubai',
  ],
  openGraph: {
    title: 'Adrar Advertising LLC — Signage, Branding & Printing Dubai',
    description:
      "Dubai's leading advertising, branding, signage and large-format printing company since 2000.",
    type: 'website',
    locale: 'en_AE',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Adrar Advertising Requisites LLC',
  alternateName: 'Adrar Advertising LLC',
  description:
    "Dubai's leading advertising, branding, signage and large-format printing company since 2000.",
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Al Qusais',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
    postalCode: '234176',
  },
  telephone: '+97142587553',
  email: 'sales@flashinkjet.com',
  foundingDate: '2000',
  areaServed: 'Dubai, UAE',
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
        </LenisProvider>
      </body>
    </html>
  )
}
