import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: '4w668b16',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // CDN for public reads — fast, cached
})
