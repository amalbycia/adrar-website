export interface ServiceCategory {
  id: string
  number: string
  title: string
  description: string
  services: string[]
  href: string
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'signage-led',
    number: '01',
    title: 'Signage & LED',
    description: 'High-impact illuminated and dimensional signs that stop people in their tracks — built to last in the Dubai climate.',
    services: ['LED signs', '3D signs', 'Acrylic signs', 'Steel & aluminum signs', 'Indoor & outdoor signs', 'Cladding work'],
    href: '/services#signage-led',
  },
  {
    id: 'large-format-printing',
    number: '02',
    title: 'Large Format Printing',
    description: 'Vivid, large-scale print for any surface. From banners to full building wraps, produced in-house with professional-grade equipment.',
    services: ['Digital printing', 'Vinyl graphics', 'Banners & posters', 'Wall stickers', 'Large vinyl', 'Offset print'],
    href: '/services#large-format-printing',
  },
  {
    id: 'branding-wrapping',
    number: '03',
    title: 'Branding & Wrapping',
    description: 'Turn every surface into a brand statement. Vehicle fleets, glass, floors, walls — we brand it all.',
    services: ['Vehicle branding', 'Wall branding', 'Floor branding', 'Frosted glass works', 'Hoarding', 'Acrylic branding'],
    href: '/services#branding-wrapping',
  },
  {
    id: 'retail-display',
    number: '04',
    title: 'Retail Display Manufacturing',
    description: 'Custom-built display solutions that drive sales at the point of purchase — designed and manufactured under one roof.',
    services: ['FSU stands', 'Podiums & pallets', 'Gondola ends', 'Display stands', 'Roll-ups & pop-ups', 'Wobblers & danglers'],
    href: '/services#retail-display',
  },
  {
    id: 'mall-activation',
    number: '05',
    title: 'Mall & In-Store Activation',
    description: 'Retail environments that convert browsers into buyers — from category branding to complete in-store concepts.',
    services: ['Mall branding', 'In-store category branding', 'Retail in-store branding', 'Retail concepts & design'],
    href: '/services#mall-activation',
  },
  {
    id: 'promotional-items',
    number: '06',
    title: 'Promotional Items',
    description: 'Brand touchpoints your customers keep. Gifts, print materials and packaging that reinforce your identity.',
    services: ['Promotional gifts', 'Packaging materials', 'Tent cards', 'Stickers', 'Promo print material'],
    href: '/services#promotional-items',
  },
]
