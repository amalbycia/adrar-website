import type { Metadata } from 'next'
import { getAllProjects } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import OurWorkClient from './OurWorkClient'

export const metadata: Metadata = {
  title: 'Our Work — Adrar Advertising LLC Dubai',
  description:
    'Portfolio of signage, branding, large format printing and retail display projects delivered across Dubai and the UAE.',
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

  return <OurWorkClient projects={projects} />
}
