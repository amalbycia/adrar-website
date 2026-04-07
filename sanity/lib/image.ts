import { createImageUrlBuilder } from '@sanity/image-url'
import { client } from './client'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any

const builder = createImageUrlBuilder(client)

/**
 * Usage: urlFor(image).width(800).format('webp').url()
 * Works with next/image src prop directly.
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source).auto('format').fit('max')
}
