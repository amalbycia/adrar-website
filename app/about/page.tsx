import type { Metadata } from 'next'
import Image from 'next/image'
import SectionHeading from '@/components/shared/SectionHeading'
import Button from '@/components/shared/Button'
import { stats } from '@/data/stats'

export const metadata: Metadata = {
  title: 'About � Adrar Advertising LLC Dubai',
  description:
    'Learn about Adrar Advertising LLC � established in 2000, based in Al Qusais Dubai, with 25+ years of in-house advertising, signage and branding production.',
}

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-32">
      <div className="max-w-[1600px] mx-auto px-6">
        {/* Hero */}
        <div className="py-16 md:py-20 max-w-3xl">
          <SectionHeading
            eyebrow="About Adrar"
            title="25 years making Dubai's brands impossible to ignore."
          />
          <p className="mt-8 font-body text-base md:text-lg text-white/70 leading-relaxed">
            Adrar Advertising Requisites LLC was founded in 2000 in Al Qusais, Dubai. What started as a small print and signage operation has grown into one of Dubai&apos;s most capable full-service advertising production companies � handling everything from LED signs to full mall activations without ever outsourcing.
          </p>
          <p className="mt-5 font-body text-base md:text-lg text-white/70 leading-relaxed">
            Our in-house facility means faster turnarounds, consistent quality, and a single point of accountability. No subcontractors, no surprises.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <span className="font-heading font-black text-5xl text-white">{stat.value}</span>
              <p className="mt-2 font-body text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-20">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
              Everything in-house. Nothing farmed out.
            </h2>
            <p className="font-body text-base text-white/70 leading-relaxed mb-4">
              From design and pre-press through to fabrication, printing, and on-site installation � our team handles every stage. This isn&apos;t just a cost-saving measure; it&apos;s how we maintain quality across 30+ service categories.
            </p>
            <p className="font-body text-base text-white/70 leading-relaxed mb-8">
              When you work with Adrar, you&apos;re working with the people who actually build, print, and install your brand materials. Not a middleman.
            </p>
            <Button href="/contact">Get in Touch</Button>
          </div>

          {/* Placeholder image */}
          <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
            <Image
              src="/projects/1.jpg"
              alt="Adrar team and facility"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
