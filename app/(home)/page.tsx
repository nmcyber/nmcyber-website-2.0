import ContactForm from '@/components/landing/contact-form';
import FreeResources from '@/components/landing/free-resources';
import Hero from '@/components/landing/hero';
import PricePlans from '@/components/landing/price-plans';
import Products from '@/components/landing/products';
import Testimonials from '@/components/landing/testimonials';
import WhyHumanCentric from '@/components/landing/why-human-centric';
import WhyNMCyber from '@/components/landing/why-nmcyber';
import StructuredData from '@/components/structured-data';
import { generateCompanyStructuredData } from '@/utils/structured-data';

export default function Home() {
  const structuredData = generateCompanyStructuredData();

  return (
    <>
      <StructuredData data={structuredData} />
      <Hero />
      <WhyHumanCentric />
      <Products />
      <WhyNMCyber />
      <PricePlans />
      <FreeResources />
      <Testimonials />
      <ContactForm />
    </>
  );
}
