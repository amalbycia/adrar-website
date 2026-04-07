import type { Metadata } from 'next'
import SectionHeading from '@/components/shared/SectionHeading'
import Button from '@/components/shared/Button'

export const metadata: Metadata = {
  title: 'Contact � Adrar Advertising LLC Dubai',
  description:
    'Get in touch with Adrar Advertising LLC. Call, WhatsApp or email us for a quote on signage, branding, printing and retail display in Dubai.',
}

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-32">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 py-16 md:py-20">
          {/* Left � heading + contact details */}
          <div>
            <SectionHeading
              eyebrow="Get in Touch"
              title="Let's talk about your project."
              description="Tell us what you need and we'll get back to you within one business day with a clear quote."
            />

            <div className="mt-12 flex flex-col gap-8">
              {/* Phone */}
              <div>
                <p className="text-[11px] font-body font-medium uppercase tracking-widest text-white/70 mb-2">Phone</p>
                <a
                  href="tel:+97142587553"
                  className="font-heading font-bold text-2xl text-white hover:text-[#E8500A] transition-colors"
                >
                  04 2587553
                </a>
              </div>

              {/* WhatsApp */}
              <div>
                <p className="text-[11px] font-body font-medium uppercase tracking-widest text-white/70 mb-2">WhatsApp</p>
                <a
                  href="https://wa.me/971552217026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading font-bold text-2xl text-white hover:text-[#E8500A] transition-colors"
                >
                  +971 55 221 7026
                </a>
              </div>

              {/* Email */}
              <div>
                <p className="text-[11px] font-body font-medium uppercase tracking-widest text-white/70 mb-2">Email</p>
                <a
                  href="mailto:sales@flashinkjet.com"
                  className="font-heading font-bold text-2xl text-white hover:text-[#E8500A] transition-colors"
                >
                  sales@flashinkjet.com
                </a>
              </div>

              {/* Address */}
              <div>
                <p className="text-[11px] font-body font-medium uppercase tracking-widest text-white/70 mb-2">Location</p>
                <p className="font-body text-base text-white leading-relaxed">
                  Al Qusais, Dubai, UAE<br />
                  P.O. Box 234176
                </p>
              </div>

              <Button
                href="https://wa.me/971552217026"
                external
                size="lg"
                className="w-fit"
              >
                WhatsApp Us Now
              </Button>
            </div>
          </div>

          {/* Right � quote form */}
          <div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 md:p-10">
              <h2 className="font-heading font-bold text-2xl text-white mb-8">
                Request a Quote
              </h2>

              <form className="flex flex-col gap-5">
                <div>
                  <label className="block text-[11px] font-body font-medium uppercase tracking-widest text-white/70 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full border border-white/10 rounded bg-transparent px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#E8500A] transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-body font-medium uppercase tracking-widest text-white/70 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full border border-white/10 rounded bg-transparent px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#E8500A] transition-colors"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-body font-medium uppercase tracking-widest text-white/70 mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full border border-white/10 rounded bg-transparent px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#E8500A] transition-colors"
                    placeholder="+971 50 000 0000"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-body font-medium uppercase tracking-widest text-white/70 mb-2">
                    Service Required
                  </label>
                  <select
                    name="service"
                    className="w-full border border-white/10 rounded bg-transparent px-4 py-3 font-body text-sm text-white focus:outline-none focus:border-[#E8500A] transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option>Signage &amp; LED</option>
                    <option>Large Format Printing</option>
                    <option>Branding &amp; Wrapping</option>
                    <option>Retail Display Manufacturing</option>
                    <option>Mall &amp; In-Store Activation</option>
                    <option>Promotional Items</option>
                    <option>Multiple / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-body font-medium uppercase tracking-widest text-white/70 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full border border-white/10 rounded bg-transparent px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#E8500A] transition-colors resize-none"
                    placeholder="Brief description, quantity, timeline, location�"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full mt-2">
                  Send Request
                </Button>

                <p className="font-body text-xs text-white/70 text-center">
                  We respond within 1 business day. For urgent jobs � WhatsApp us directly.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* LocalBusiness JSON-LD schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
              url: 'https://adrar.ae',
            }),
          }}
        />
      </div>
    </div>
  )
}
