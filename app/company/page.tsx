import Hero from '@/components/company/hero';
import WhyHumanCentric from '@/components/company/why-human-centric';
import Products from '@/components/company/products';
import Testimonials from '@/components/company/testimonials';
import PricePlans from '@/components/company/price_plans';
import FreeResources from '@/components/company/free-resources';
import ContactForm from '@/components/company/contact-form';

export default function Company() {
  return (
    <>
      <Hero />
      <WhyHumanCentric />
      <Products />
      {/* <Testimonials />
      <PricePlans />
      <FreeResources />
      <ContactForm />  */}
    </>
  )
}
