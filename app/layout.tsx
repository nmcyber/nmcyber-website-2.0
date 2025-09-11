import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from 'geist/font/sans'
import { Plus_Jakarta_Sans } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta-sans'
})

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="https://utfs.io/f/31dba2ff-6c3b-4927-99cd-b928eaa54d5f-5w20ij.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://utfs.io/f/69a12ab1-4d57-4913-90f9-38c6aca6c373-1txg2.png"
          as="image"
        />
      </head>
      <body className={`${GeistSans.className} ${plusJakartaSans.variable} dark`}>
          {children}
          <Toaster />
          <Analytics />
      </body>
    </html>
  )
}