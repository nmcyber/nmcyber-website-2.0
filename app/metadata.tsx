import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL("https://nmcyber.com.au"),
  title: {
    default: 'NMCYBER | Human-Centric Cybersecurity Training for SMBs',
    template: `%s | NMCYBER`
  },
  description: 'NMCYBER helps Small and Medium Businesses transform employees into cyber-aware defenders through custom, human-centric cybersecurity training that builds real behavioral change.',
  keywords: [
    'cybersecurity training',
    'human-centric cybersecurity',
    'SMB security awareness',
    'cybersecurity for small business',
    'phishing simulation',
    'security culture',
    'cyber awareness',
    'employee security training',
    'cyber risk management',
    'human firewall'
  ],
  authors: [
    { name: 'NMCYBER' }
  ],
  creator: 'NMCYBER',
  publisher: 'NMCYBER',
  formatDetection: {
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-AU': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://nmcyber.com.au',
    title: 'NMCYBER | Empowering Humans. Protecting Businesses.',
    description: 'Custom Human-Centric Cybersecurity Training for Small and Medium Businesses. Transform your team into cyber-aware defenders.',
    siteName: 'NMCYBER',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NMCYBER - Human-Centric Cybersecurity',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NMCYBER | Human-Centric Cybersecurity for SMBs',
    description: 'Custom cybersecurity awareness training built for humans, not hackers. Transform your team into cyber-aware defenders.',
    images: ['/twitter-image.jpg'],
    creator: '@nmcyber',
  },
  category: 'Cybersecurity',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual verification code when available
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'theme-color': '#086082',
  }
}