'use client'

export default function QuoteCTA() {
  return (
    <section className="bg-bor-primary py-28 md:py-40 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8">

        <p className="font-body text-[13px] font-semibold uppercase tracking-[0.2em] text-bor-foreground/60 mb-8">
          Get Started
        </p>

        <h2
          className="font-heading font-medium text-bor-foreground leading-[1] tracking-[0.1px]"
          style={{ fontSize: 'clamp(52px, 8vw, 120px)', maxWidth: '1000px' }}
        >
          Ready to make{' '}
          <i className="font-serif italic font-normal text-bor-foreground opacity-90">
            an impression?
          </i>
        </h2>

        <div className="mt-12 pt-10 border-t border-bor-foreground/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <p className="font-body text-[15px] text-bor-foreground/70 leading-relaxed max-w-xs font-medium">
            Tell us what you need. We&apos;ll respond within one business day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button
              onClick={() => window.dispatchEvent(new Event('adrar:open-chat'))}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-bor-foreground text-white text-[14px] font-body font-bold uppercase tracking-wide hover:opacity-90 transition-opacity duration-200 shadow-sm"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Talk to an Agent
            </button>
            <a
              href="https://wa.me/971552217026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-bor-foreground/30 text-bor-foreground text-[14px] font-body font-bold uppercase tracking-wide hover:border-bor-foreground/50 hover:bg-bor-foreground/5 transition-all duration-200"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        <p className="mt-8 font-body text-[14px] font-medium text-bor-foreground/50">
          Or call:{' '}
          <a href="tel:+97142587553" className="text-bor-foreground hover:text-bor-foreground/70 transition-colors">
            04 2587553
          </a>
        </p>
      </div>
    </section>
  )
}
