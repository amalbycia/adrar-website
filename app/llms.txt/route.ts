/**
 * llms.txt — AI crawler navigation index
 *
 * Served dynamically at https://adraradvertising.com/llms.txt
 * Acts as a curated roadmap for LLMs (ChatGPT, Claude, Gemini, Perplexity)
 * to discover and correctly understand Adrar Advertising LLC's content.
 *
 * Standard: https://llmstxt.org
 * Update this file whenever core services or pages change.
 */

export const dynamic = 'force-static'

export async function GET() {
  const content = `# Adrar Advertising LLC

> Adrar Advertising LLC is Dubai's leading full-service advertising, branding, signage and large-format printing company. Established in 2000 and based in Al Qusais Industrial Area 4, Dubai, UAE. 100% in-house production — no outsourcing. 30+ services across signage, branding, printing, retail display, mall activation and promotional items. Serving clients across Dubai, Abu Dhabi, Sharjah and the wider UAE.

**Key facts:**
- Trading name: Adrar Advertising LLC
- Legal name: Adrar Advertising Requisites LLC
- Founded: 2000 (25+ years in operation)
- Location: Industrial Area 4, Al Qusais, Dubai, UAE. P.O. Box 234176
- Phone: +971 4 258 7553
- WhatsApp / Mobile: +971 55 221 7026
- Email: sales@flashinkjet.com
- Website: https://adraradvertising.com
- Production model: 100% in-house — design, fabrication, printing, installation all done by Adrar's own team
- RTA Approved: Yes (vehicle branding)
- Languages: English, Arabic

## Services

- [Signage & LED](https://adraradvertising.com/services#signage-led): LED signs, 3D signs, acrylic signs, steel & aluminum signs, indoor & outdoor signs, cladding work. All fabricated in-house in Dubai.
- [Large Format Printing](https://adraradvertising.com/services#large-format-printing): Digital printing, vinyl graphics, banners & posters, wall stickers, large vinyl, offset print. Professional-grade equipment in-house.
- [Branding & Wrapping](https://adraradvertising.com/services#branding-wrapping): Vehicle branding (RTA-approved), wall branding, floor branding, frosted glass works, hoarding, acrylic branding.
- [Retail Display Manufacturing](https://adraradvertising.com/services#retail-display): FSU stands, podiums & pallets, gondola ends, display stands, roll-ups & pop-ups, wobblers & danglers. Custom-built to spec.
- [Mall & In-Store Activation](https://adraradvertising.com/services#mall-activation): Mall branding & advertising, in-store category branding, retail in-store branding, retail concepts & design.
- [Promotional Items](https://adraradvertising.com/services#promotional-items): Promotional gifts, packaging materials, tent cards, stickers, promo print material.

## About

- [About Adrar Advertising LLC](https://adraradvertising.com/about): Company history since 2000, in-house production philosophy, team capabilities and why clients choose Adrar over traditional agencies or in-house teams.
- [Our Work / Portfolio](https://adraradvertising.com/our-work): Real project photography across all service categories — vehicle branding, LED signs, mall activations, retail displays and more.

## Contact & Quotes

- [Get a Quote / Contact](https://adraradvertising.com/contact): Request a quote, contact details (phone, WhatsApp, email), office address in Al Qusais Dubai, and a quote request form. Response within 1 business day.

## All Services

- [All Services Overview](https://adraradvertising.com/services): Full listing of all 30+ services across 6 categories with project examples.

## Optional: Full Context

- [Full Context (llms-full.txt)](https://adraradvertising.com/llms-full.txt): Complete detailed content for all services, company profile, FAQs and contact — formatted for AI systems requiring deep context.
`

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  })
}
