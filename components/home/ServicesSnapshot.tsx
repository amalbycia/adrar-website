'use client'

import Link from 'next/link'

const serviceRows = [
  [
    { label: 'LED Signs',          filled: true,  href: '/services#signage-led'   },
    { label: 'Acrylic Signs',      filled: false, href: '/services#signage-led'   },
    { label: '3D Signs',           filled: false, href: '/services#signage-led'   },
    { label: 'Indoor Signs',       filled: false, href: '/services#signage-led'   },
    { label: 'Outdoor Signs',      filled: true,  href: '/services#signage-led'   },
    { label: 'Cladding Work',      filled: false, href: '/services#signage-led'   },
  ],
  [
    { label: 'Digital Printing',   filled: false, href: '/services#large-format'  },
    { label: 'Vinyl Graphics',     filled: true,  href: '/services#large-format'  },
    { label: 'Banners & Posters',  filled: false, href: '/services#large-format'  },
    { label: 'Wall Stickers',      filled: false, href: '/services#large-format'  },
    { label: 'Large Format',       filled: false, href: '/services#large-format'  },
  ],
  [
    { label: 'Vehicle Branding',   filled: true,  href: '/services#branding'      },
    { label: 'Wall Branding',      filled: false, href: '/services#branding'      },
    { label: 'Floor Branding',     filled: false, href: '/services#branding'      },
    { label: 'Glass & Frosted',    filled: false, href: '/services#branding'      },
    { label: 'Hoarding',           filled: true,  href: '/services#branding'      },
    { label: 'Building Wrap',      filled: false, href: '/services#branding'      },
  ],
  [
    { label: 'Display Stands',     filled: false, href: '/services#retail'        },
    { label: 'Roll-ups',           filled: false, href: '/services#retail'        },
    { label: 'Pop-ups',            filled: true,  href: '/services#retail'        },
    { label: 'Gondola Ends',       filled: false, href: '/services#retail'        },
    { label: 'Podiums & Pallets',  filled: false, href: '/services#retail'        },
  ],
  [
    { label: 'Mall Branding',      filled: true,  href: '/services#mall'          },
    { label: 'In-Store Branding',  filled: false, href: '/services#mall'          },
    { label: 'Retail Concepts',    filled: false, href: '/services#mall'          },
    { label: 'Category Branding',  filled: false, href: '/services#mall'          },
  ],
  [
    { label: 'Promo Gifts',        filled: false, href: '/services#promo'         },
    { label: 'Packaging',          filled: true,  href: '/services#promo'         },
    { label: 'Tent Cards',         filled: false, href: '/services#promo'         },
    { label: 'Stickers',           filled: false, href: '/services#promo'         },
    { label: 'Print Material',     filled: false, href: '/services#promo'         },
    { label: '...and more',        filled: false, href: '/services'               },
  ],
]

// All services as pill tags

export default function ServicesSnapshot() {
  return (
    <section className="bg-bor-background py-24 md:py-36">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8">

        {/* Eyebrow */}
        <p className="text-center font-body text-[13px] font-semibold uppercase tracking-[0.2em] text-bor-foreground-muted mb-7">
          Our Services
        </p>

        {/* Headline */}
        <h2
          className="text-center font-heading font-medium text-bor-foreground leading-[1] tracking-[0.1px] mb-16 mx-auto"
          style={{ fontSize: 'clamp(48px, 6vw, 96px)', maxWidth: '900px' }}
        >
          30+ advertising services,{' '}
          <i className="font-serif italic font-normal text-bor-foreground opacity-90">
            all under one roof.
          </i>
        </h2>

        {/* Service pill rows */}
        <div className="flex flex-col gap-3">
          {serviceRows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className={`flex flex-wrap gap-2.5 ${rowIdx % 2 === 1 ? 'sm:pl-8' : ''}`}
            >
              {row.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  className={`inline-flex items-center px-5 py-3 rounded-full text-[14px] font-body font-semibold uppercase tracking-wide transition-all duration-200 ${
                    service.filled
                      ? 'bg-bor-foreground text-white hover:bg-bor-primary hover:text-bor-foreground-inverted'
                      : 'bg-transparent text-bor-foreground border border-bor-foreground/20 hover:border-bor-primary hover:text-bor-primary'
                  }`}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10 border-t border-bor-border">
          <p className="font-body text-[14px] font-medium text-bor-foreground-muted">
            Everything produced in-house — Al Qusais, Dubai.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[14px] font-body font-bold text-bor-foreground hover:gap-3 hover:text-bor-foreground-muted transition-all duration-200 uppercase tracking-wide"
          >
            See all services
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
