import type { Metadata } from 'next'
import { getAllProjects } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import OurWorkClient from './OurWorkClient'

export const metadata: Metadata = {
  title: 'Our Work — Adrar Advertising LLC Dubai',
  description:
    'Portfolio of signage, branding, large format printing and retail display projects delivered across Dubai and the UAE. Vehicle branding, LED signs, mall activations, retail displays and more.',
  alternates: { canonical: '/our-work' },
  openGraph: {
    title: 'Our Work — Adrar Advertising LLC Dubai Portfolio',
    description: 'Real project photography across vehicle branding, LED signs, mall activations, retail displays and large format printing in Dubai and UAE.',
    url: 'https://adraradvertising.com/our-work',
    type: 'website',
  },
}

const portfolioSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://adraradvertising.com/our-work#page',
      url: 'https://adraradvertising.com/our-work',
      name: 'Our Work — Adrar Advertising LLC Project Portfolio',
      description: 'Real project photography and portfolio from Adrar Advertising LLC Dubai. Includes vehicle branding, LED signage, mall activations, retail displays, large format printing and in-store branding projects across Dubai and UAE.',
      isPartOf: { '@id': 'https://adraradvertising.com/#website' },
      about: { '@id': 'https://adraradvertising.com/#business' },
      inLanguage: 'en-AE',
      creator: { '@id': 'https://adraradvertising.com/#business' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://adraradvertising.com' },
        { '@type': 'ListItem', position: 2, name: 'Our Work', item: 'https://adraradvertising.com/our-work' },
      ],
    },
  ],
}


const CATEGORY_LABELS: Record<string, string> = {
  'signage-led':  'Signage & LED',
  'large-format': 'Large Format Printing',
  'branding':     'Branding & Wrapping',
  'retail':       'Retail Display Manufacturing',
  'mall':         'Mall & In-Store Activation',
  'promo':        'Promotional Items',
}

export default async function OurWorkPage() {
  const sanityProjects = await getAllProjects()

  const projects = sanityProjects.map((p, i) => ({
    id: String(i + 1).padStart(2, '0'),
    image: p.image ? urlFor(p.image).width(600).height(800).format('webp').url() : null,
    category: CATEGORY_LABELS[p.category] ?? p.category,
    client: p.client ?? '',
    description: p.description ?? p.title,
  }))

  return (
    <>
      <OurWorkClient projects={projects} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
    </>
  )
}

