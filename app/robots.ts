import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/private/',
          '/*.json$',
          '/dashboard/',
          '/internal/',
        ]
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/private/',
          '/*.json$',
          '/dashboard/',
          '/internal/',
        ]
      }
    ],
    sitemap: 'https://nmcyber.com.au/sitemap.xml',
    host: 'https://nmcyber.com.au',
  }
}