import type { Metadata } from 'next';
import ServicesDirectory from '@/components/services/services-directory';
import ServicesHero from '@/components/services/services-hero';
import { SERVICE_DIRECTORY } from '@/utils/constants';

const { title, description } = SERVICE_DIRECTORY.seo;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/services' },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'NMCYBER',
    url: '/services',
    title,
    description,
    images: [{ url: '/images/cybersecurity_desktop.png', width: 409, height: 312, alt: '' }],
  },
  twitter: { card: 'summary', title, description, images: ['/images/cybersecurity_desktop.png'] },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesDirectory />
    </>
  );
}
