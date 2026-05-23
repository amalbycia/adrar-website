import type { Metadata } from 'next'
import Image from 'next/image'
import SectionHeading from '@/components/shared/SectionHeading'
import { serviceCategories } from '@/data/services'
import Button from '@/components/shared/Button'

export const metadata: Metadata = {
  title: 'Advertising Services Dubai — Signage, Branding, Printing | Adrar',
  description: 'Adrar Advertising LLC offers 30+ services: LED signs, vehicle branding, large format printing, retail display, mall activation and promotional items. 100% in-house in Al Qusais, Dubai.',
}

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
        <SectionHeading
          eyebrow="Our Services"
          title="30+ services. One facility. Zero outsourcing."
          description="Every service we offer is produced in-house at our Al Qusais facility � from design to installation."
        />
      </div>

      {/* Service categories */}
      <div className="max-w-[1280px] mx-auto px-6 pb-24 md:pb-32">
        {serviceCategories.map((category, i) => (
          <div
            key={category.id}
            id={category.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 py-16 md:py-20 ${
              i < serviceCategories.length - 1 ? 'border-b border-white/10' : ''
            }`}
          >
            {/* Text */}
            <div className={i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>
              <span className="font-heading font-black text-6xl text-white/10 block mb-3">
                {category.number}
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight">
                {category.title}
              </h2>
              <p className="mt-4 font-body text-base md:text-lg text-white/70 leading-relaxed">
                {category.description}
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-2">
                {category.services.map((service) => (
                  <li key={service} className="flex items-center gap-2 font-body text-sm text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8500A] shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <Button href="https://wa.me/971552217026" external size="md">WhatsApp Us</Button>
              </div>
            </div>

            {/* Project image */}
            <div className={`aspect-[4/3] rounded-lg overflow-hidden relative order-last ${i % 2 === 1 ? 'lg:order-1' : 'lg:order-none'}`}>
              <Image
                src={`/projects/${i + 2}.jpg`}
                alt={`${category.title} project showcase`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Advertising Services by Adrar Advertising LLC Dubai',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Signage & LED', url: 'https://adraradvertising.com/services#signage-led', description: 'LED signs, 3D signs, acrylic, steel and aluminum signs, indoor & outdoor signage in Dubai.' },
              { '@type': 'ListItem', position: 2, name: 'Large Format Printing', url: 'https://adraradvertising.com/services#large-format', description: 'Digital printing, vinyl graphics, banners, posters and wall stickers in Dubai.' },
              { '@type': 'ListItem', position: 3, name: 'Branding & Wrapping', url: 'https://adraradvertising.com/services#branding', description: 'Vehicle branding, wall branding, floor branding, glass frosting and hoarding in Dubai.' },
              { '@type': 'ListItem', position: 4, name: 'Retail Display Manufacturing', url: 'https://adraradvertising.com/services#retail', description: 'FSUs, podiums, gondola ends, display stands, roll-ups and pop-ups in Dubai.' },
              { '@type': 'ListItem', position: 5, name: 'Mall & In-Store Activation', url: 'https://adraradvertising.com/services#mall', description: 'Mall branding, in-store category branding, retail concepts and design in Dubai.' },
              { '@type': 'ListItem', position: 6, name: 'Promotional Items', url: 'https://adraradvertising.com/services#promo', description: 'Promotional gifts, packaging, tent cards, stickers and print material in Dubai.' },
            ],
          }),
        }}
      />
    </div>
  )
}
