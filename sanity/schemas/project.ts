import { defineField, defineType } from 'sanity'

const SERVICE_CATEGORIES = [
  { title: 'Signage & LED', value: 'signage-led' },
  { title: 'Large Format Printing', value: 'large-format' },
  { title: 'Branding & Wrapping', value: 'branding' },
  { title: 'Retail Display Manufacturing', value: 'retail' },
  { title: 'Mall & In-Store Activation', value: 'mall' },
  { title: 'Promotional Items', value: 'promo' },
]

export default defineType({
  name: 'project',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Service Category',
      type: 'string',
      options: { list: SERVICE_CATEGORIES, layout: 'radio' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Project Photo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'string',
      description: 'One-line caption shown in the carousel (e.g. "40-truck fleet wrap — Dubai logistics company")',
    }),
    defineField({
      name: 'featured',
      title: 'Show on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'heroFeatureCard',
      title: 'Use as Hero Feature Card',
      type: 'boolean',
      description: 'When enabled, this project will appear as a prominent feature card in the hero masonry with a logo overlay.',
      initialValue: false,
    }),
    defineField({
      name: 'heroOverlayLogo',
      title: 'Hero Overlay Logo (PNG)',
      type: 'image',
      description: 'Upload a transparent PNG logo to display over the image in the hero card (e.g. client brand mark). Recommended: white or light logo on transparent background.',
      hidden: ({ document }) => !document?.heroFeatureCard,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'client', media: 'image' },
  },
})
