export interface Testimonial {
  id: string
  quote: string
  author: string
  company: string
  role?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "Adrar has been our go-to for all signage and in-store branding for over a decade. The quality is consistent, turnaround is fast, and they never need hand-holding.",
    author: 'Retail Operations Manager',
    company: 'Major FMCG Brand, Dubai',
  },
  {
    id: '2',
    quote: "We briefed them on a full mall activation — 3 zones, 10 days to execute. They delivered on time, on budget, and the finish was flawless. Impressive operation.",
    author: 'Brand Manager',
    company: 'Consumer Electronics Company, UAE',
  },
  {
    id: '3',
    quote: "The vehicle branding they did for our fleet across 40 trucks is still turning heads two years later. Great material quality and the colour matching was exact.",
    author: 'Fleet & Logistics Director',
    company: 'Logistics Company, Dubai',
  },
]
