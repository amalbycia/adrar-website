import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description:
        'Upload the Adrar logo (PNG/SVG with transparent background). Leave empty to use the "adrar" text wordmark.',
      options: { hotspot: false },
    }),
    defineField({
      name: 'logoAlt',
      title: 'Logo Alt Text',
      type: 'string',
      initialValue: 'Adrar Advertising LLC',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
})
