import type { Metadata } from 'next';

// This function generates JSON-LD structured data for the company
export function generateCompanyStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NMCYBER',
    description:
      'NMCYBER helps Small and Medium Businesses transform their employees into cyber-aware defenders through custom, human-centric cybersecurity training.',
    url: 'https://nmcyber.com.au',
    logo: 'https://nmcyber.com.au/logo.png',
    email: 'info@nmcyber.com.au',
    sameAs: [
      'https://www.linkedin.com/company/nmcyber',
      'https://twitter.com/nmcyber',
      // Add other social media profiles as needed
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AU',
      addressLocality: 'Sydney', // Update with actual location
      addressRegion: 'NSW', // Update with actual region
    },
    telephone: '+61-XXX-XXX-XXX', // Update with actual phone number
    areaServed: 'Australia',
    // Highlight the organization's specific services
    services: [
      {
        '@type': 'Service',
        name: 'Cybersecurity Awareness Training',
        description:
          'Custom cybersecurity awareness training tailored for small and medium businesses.',
        offers: {
          '@type': 'Offer',
          price: '499',
          priceCurrency: 'AUD',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'Service',
        name: 'Phishing Simulation Campaigns',
        description:
          'Realistic phishing tests followed by practical micro-training to boost defense.',
        offers: {
          '@type': 'Offer',
          price: '250',
          priceCurrency: 'AUD',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'Service',
        name: 'Cybersecurity Culture Development',
        description: 'Long-term programs to shift the mindset and build a security-first culture.',
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
        },
      },
    ],
  };
}

// This function generates JSON-LD structured data for a service page
export function generateServiceStructuredData(
  serviceName: string,
  serviceDescription: string,
  serviceUrl: string,
  price?: string,
  imageUrl?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'Organization',
      name: 'NMCYBER',
      url: 'https://nmcyber.com.au',
    },
    url: serviceUrl,
    ...(imageUrl && { image: imageUrl }),
    ...(price && {
      offers: {
        '@type': 'Offer',
        price: price,
        priceCurrency: 'AUD',
      },
    }),
  };
}

// This function generates JSON-LD structured data for FAQs
export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// This function generates JSON-LD structured data for a product
export function generateProductStructuredData(
  productName: string,
  productDescription: string,
  productUrl: string,
  price?: string,
  imageUrl?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: productName,
    description: productDescription,
    url: productUrl,
    ...(imageUrl && { image: imageUrl }),
    brand: {
      '@type': 'Brand',
      name: 'NMCYBER',
    },
    ...(price && {
      offers: {
        '@type': 'Offer',
        price: price,
        priceCurrency: 'AUD',
        availability: 'https://schema.org/InStock',
        url: productUrl,
        seller: {
          '@type': 'Organization',
          name: 'NMCYBER',
        },
      },
    }),
  };
}

// This function generates metadata for each service page
export function generateServicePageMetadata(
  serviceName: string,
  serviceDescription: string
): Metadata {
  return {
    title: `${serviceName} | NMCYBER`,
    description: serviceDescription,
    openGraph: {
      title: `${serviceName} | NMCYBER`,
      description: serviceDescription,
      url: `https://nmcyber.com.au/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`,
      type: 'website',
      images: [
        {
          url: '/og-service-image.jpg',
          width: 1200,
          height: 630,
          alt: `NMCYBER ${serviceName}`,
        },
      ],
    },
  };
}

// This function generates metadata for each product page
export function generateProductPageMetadata(
  productName: string,
  productDescription: string
): Metadata {
  return {
    title: `${productName} | NMCYBER`,
    description: productDescription,
    openGraph: {
      title: `${productName} | NMCYBER`,
      description: productDescription,
      url: `https://nmcyber.com.au/products/${productName.toLowerCase().replace(/\s+/g, '-')}`,
      type: 'website',
      images: [
        {
          url: '/og-product-image.jpg',
          width: 1200,
          height: 630,
          alt: `NMCYBER ${productName}`,
        },
      ],
    },
  };
}
