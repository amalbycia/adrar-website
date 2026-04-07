import { unstable_cache } from 'next/cache'
import { client } from './client'

export interface SanityTestimonial {
  _id: string
  name: string
  role: string
  company: string
  quote: string
  order: number
}

export interface SanityProject {
  _id: string
  title: string
  client: string
  category: string
  description?: string
  image: { asset: { _ref: string }; hotspot?: object }
  featured: boolean
  heroFeatureCard?: boolean
  heroOverlayLogo?: { asset: { _ref: string } }
  order: number
}

export interface SanityClientLogo {
  _id: string
  name: string
  logo: { asset: { _ref: string } }
  order: number
}

export interface SanitySettings {
  logo?: { asset: { _ref: string } }
  logoAlt?: string
}

export const getSiteSettings = unstable_cache(
  async (): Promise<SanitySettings | null> => {
    return client.fetch(`*[_type == "siteSettings"][0] { logo, logoAlt }`)
  },
  ['site-settings'],
  { revalidate: 3600, tags: ['site-settings'] }
)

// ── Hero Gallery ──────────────────────────────────────────────────────────────

export interface SanityHeroCard {
  image?: { asset: { _ref: string }; hotspot?: object }
  overlayLogo?: { asset: { _ref: string } }
  altText?: string
}

export interface SanityHeroGallery {
  col1_a?: SanityHeroCard
  col1_b?: SanityHeroCard
  col1_c?: SanityHeroCard
  col1_d?: SanityHeroCard
  col2_feature?: SanityHeroCard
  col2_b?: SanityHeroCard
  col2_c?: SanityHeroCard
  col3_a?: SanityHeroCard
  col3_b?: SanityHeroCard
  col3_c?: SanityHeroCard
  col3_d?: SanityHeroCard
}

export async function getHeroGallery(): Promise<SanityHeroGallery | null> {
  return client.fetch(
    `*[_type == "heroGallery"][0] {
      col1_a { image, overlayLogo, altText },
      col1_b { image, overlayLogo, altText },
      col1_c { image, overlayLogo, altText },
      col1_d { image, overlayLogo, altText },
      col2_feature { image, overlayLogo, altText },
      col2_b { image, overlayLogo, altText },
      col2_c { image, overlayLogo, altText },
      col3_a { image, overlayLogo, altText },
      col3_b { image, overlayLogo, altText },
      col3_c { image, overlayLogo, altText },
      col3_d { image, overlayLogo, altText }
    }`,
    {},
    { next: { revalidate: 3600, tags: ['hero-gallery'] } }
  )
}

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  return client.fetch(
    `*[_type == "testimonial"] | order(order asc) {
      _id, name, role, company, quote, order
    }`,
    {},
    { next: { revalidate: 3600, tags: ['testimonials'] } }
  )
}

export async function getFeaturedProjects(): Promise<SanityProject[]> {
  return client.fetch(
    `*[_type == "project" && featured == true] | order(order asc) {
      _id, title, client, category, image, featured, heroFeatureCard, heroOverlayLogo, order
    }`,
    {},
    { next: { revalidate: 3600, tags: ['projects'] } }
  )
}

export async function getAllProjects(): Promise<SanityProject[]> {
  return client.fetch(
    `*[_type == "project"] | order(order asc) {
      _id, title, client, category, description, image, featured, order
    }`,
    {},
    { next: { revalidate: 3600, tags: ['projects'] } }
  )
}

export async function getClientLogos(): Promise<SanityClientLogo[]> {
  return client.fetch(
    `*[_type == "clientLogo"] | order(order asc) {
      _id, name, logo, order
    }`,
    {},
    { next: { revalidate: 3600, tags: ['client-logos'] } }
  )
}
