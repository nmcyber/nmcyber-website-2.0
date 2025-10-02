import FreeResources from '@/components/landing/free-resources';
import Hero from '@/components/landing/hero';
import PricePlans from '@/components/landing/price-plans';
import Products from '@/components/landing/products';
import WhyHumanCentric from '@/components/landing/why-human-centric';
import WhyNMCyber from '@/components/landing/why-nmcyber';
import StructuredData from '@/components/structured-data';
import { generateCompanyStructuredData } from '@/utils/structured-data';

export default function Home() {
  const structuredData = generateCompanyStructuredData();

  return (
    <>
      {/* Add structured data for SEO */}
      <StructuredData data={structuredData} />
      {/* Sections for the Landing Page should be added here */}
      <Hero />
      {/* Add the rest of the sections here */}
      <WhyHumanCentric />
      <Products />
      <WhyNMCyber />
      <PricePlans />
      <FreeResources />
    </>
  );
}
