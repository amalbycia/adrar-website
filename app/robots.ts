import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
      // OpenAI — ChatGPT search & GPT browsing
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      // Anthropic — Claude AI
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      // Perplexity AI
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // Google — Gemini & AI Overviews
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      // Apple — Apple Intelligence
      {
        userAgent: 'Applebot',
        allow: '/',
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
      // Meta — Meta AI
      {
        userAgent: 'meta-externalagent',
        allow: '/',
      },
      // Cohere AI
      {
        userAgent: 'cohere-ai',
        allow: '/',
      },
      // Bytedance — Doubao AI
      {
        userAgent: 'Bytespider',
        allow: '/',
      },
      // Amazon — Alexa / Amazon AI
      {
        userAgent: 'Amazonbot',
        allow: '/',
      },
      // Common research/AI crawlers
      {
        userAgent: 'CCBot',
        allow: '/',
      },
    ],
    sitemap: 'https://adraradvertising.com/sitemap.xml',
    host: 'https://adraradvertising.com',
  }
}
