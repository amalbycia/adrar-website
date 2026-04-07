import { defineField, defineType } from 'sanity'

// Reusable field group for each card slot
function cardSlot(name: string, title: string) {
  return defineField({
    name,
    title,
    type: 'object',
    fields: [
      defineField({
        name: 'image',
        title: 'Background Image',
        type: 'image',
        description: 'Main photo for this hero card.',
        options: { hotspot: true },
      }),
      defineField({
        name: 'overlayLogo',
        title: 'Overlay Logo / Heading (PNG)',
        type: 'image',
        description:
          'Optional: upload a transparent PNG logo/heading to show over this card (e.g. client brand logo). Use white or light logos on transparent background.',
      }),
      defineField({
        name: 'altText',
        title: 'Image Description',
        type: 'string',
        description: 'Brief description, e.g. "Ma Hawa retail activation"',
      }),
    ],
    preview: {
      select: { media: 'image', title: 'altText' },
      prepare({ media, title }: { media?: unknown; title?: string }) {
        return { title: title ?? '(no title)', media: media as string }
      },
    },
  })
}

export default defineType({
  name: 'heroGallery',
  title: 'Hero Gallery',
  type: 'document',
  fields: [
    // ── Column 1 (scrolls up) — 4 slots ──
    cardSlot('col1_a', 'Column 1 — Card A'),
    cardSlot('col1_b', 'Column 1 — Card B'),
    cardSlot('col1_c', 'Column 1 — Card C'),
    cardSlot('col1_d', 'Column 1 — Card D'),

    // ── Column 2 (scrolls down) — 3 slots, first is the big feature card ──
    cardSlot('col2_feature', '⭐ Column 2 — Feature Card (Big — best for branded work with logo overlay)'),
    cardSlot('col2_b', 'Column 2 — Card B'),
    cardSlot('col2_c', 'Column 2 — Card C'),

    // ── Column 3 (scrolls up slow) — 4 slots ──
    cardSlot('col3_a', 'Column 3 — Card A'),
    cardSlot('col3_b', 'Column 3 — Card B'),
    cardSlot('col3_c', 'Column 3 — Card C'),
    cardSlot('col3_d', 'Column 3 — Card D'),
  ],
  preview: {
    prepare: () => ({ title: '🖼️ Hero Gallery' }),
  },
})
