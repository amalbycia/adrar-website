import Hero from '@/components/home/Hero'
import LogoStrip from '@/components/home/LogoStrip'
import TrustBar from '@/components/home/TrustBar'
import WhyAdrar from '@/components/home/WhyAdrar'
import Testimonials from '@/components/home/Testimonials'
import { getTestimonials, getHeroGallery, getClientLogos } from '@/sanity/lib/queries'
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
  const [testimonials, heroGallery, clientLogos] = await Promise.all([
    getTestimonials(),
    getHeroGallery(),
    getClientLogos(),
  ])

  // Build hero cards in exact slot order matching the masonry STRUCTURE
  const heroCards = {
    col1: [
      resolveCard(heroGallery?.col1_a),
      resolveCard(heroGallery?.col1_b),
      resolveCard(heroGallery?.col1_c),
      resolveCard(heroGallery?.col1_d),
    ],
    col2: [
      resolveCard(heroGallery?.col2_feature, true), // ← feature card slot
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

  const logoItems = clientLogos.map((l) => ({
    name: l.name,
    url: urlFor(l.logo).height(80).format('webp').url(),
  }))

  return (
    <>
      <Hero heroCards={heroCards} />
      <LogoStrip logos={logoItems} />
      <TrustBar />
<WhyAdrar />
      <Testimonials testimonials={testimonials} />
    </>
  )
}
