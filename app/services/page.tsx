import type { Metadata } from 'next'
import Image from 'next/image'
import SectionHeading from '@/components/shared/SectionHeading'
import { serviceCategories } from '@/data/services'
import Button from '@/components/shared/Button'

export const metadata: Metadata = {
  title: 'Services � Adrar Advertising LLC Dubai',
  description:
    'Signage & LED, large format printing, branding & wrapping, retail display, mall activation and promotional items � all in-house in Dubai.',
}

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Header */}
      <div className="max-w-[1600px] mx-auto px-6 py-16 md:py-20">
        <SectionHeading
          eyebrow="Our Services"
          title="30+ services. One facility. Zero outsourcing."
          description="Every service we offer is produced in-house at our Al Qusais facility � from design to installation."
        />
      </div>

      {/* Service categories */}
      <div className="max-w-[1600px] mx-auto px-6 pb-24 md:pb-32">
        {serviceCategories.map((category, i) => (
          <div
            key={category.id}
            id={category.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 py-16 md:py-20 ${
              i < serviceCategories.length - 1 ? 'border-b border-white/10' : ''
            }`}
          >
            {/* Text */}
            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
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
                <Button href="/contact" size="md">Get a Quote</Button>
                <Button href="https://wa.me/971552217026" external variant="outline" size="md">
                  WhatsApp Us
                </Button>
              </div>
            </div>

            {/* Project image */}
            <div className={`aspect-[4/3] rounded-lg overflow-hidden relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
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
    </div>
  )
}
