import Hero from '@/components/home/Hero'
import LogoStrip from '@/components/home/LogoStrip'
import TrustBar from '@/components/home/TrustBar'
import WhyAdrar from '@/components/home/WhyAdrar'
import Testimonials from '@/components/home/Testimonials'
import PortfolioTeaser from '@/components/home/PortfolioTeaser'
import { getTestimonials, getHeroGallery, getFeaturedProjects } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import type { SanityHeroCard } from '@/sanity/lib/queries'

function resolveCard(card: SanityHeroCard | undefined, isFeature = false) {
  if (!card?.image) return null
  return {
    url: urlFor(card.image).width(600).height(800).format('webp').url(),
    alt: card.altText ?? '',
    overlayLogoUrl: card.overlayLogo
      ? urlFor(card.overlayLogo).width(800).url()
      : undefined,
    isFeature,
  }
}

export default async function HomePage() {
  const [testimonials, heroGallery, featuredProjects] = await Promise.all([
    getTestimonials(),
    getHeroGallery(),
    getFeaturedProjects(),
  ])

  const heroCards = {
    col1: [
      resolveCard(heroGallery?.col1_a),
      resolveCard(heroGallery?.col1_b),
      resolveCard(heroGallery?.col1_c),
      resolveCard(heroGallery?.col1_d),
    ],
    col2: [
      resolveCard(heroGallery?.col2_feature, true),
      resolveCard(heroGallery?.col2_b),
      resolveCard(heroGallery?.col2_c),
    ],
    col3: [
      resolveCard(heroGallery?.col3_a),
      resolveCard(heroGallery?.col3_b),
      resolveCard(heroGallery?.col3_c),
      resolveCard(heroGallery?.col3_d),
    ],
  }



  const portfolioItems = featuredProjects.map((p) => ({
    id: p._id,
    title: p.title,
    client: p.client,
    category: p.category,
    description: p.description ?? '',
    imageUrl: urlFor(p.image).width(800).height(1060).format('webp').quality(90).url(),
  }))

  return (
    <>
      <Hero heroCards={heroCards} />
      <LogoStrip />
      <TrustBar />
      <WhyAdrar />
      <PortfolioTeaser projects={portfolioItems} />
      <Testimonials testimonials={testimonials} />
    </>
  )
}
