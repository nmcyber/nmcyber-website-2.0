import ProductsContactCTA from '@/components/products/contact-us';
import ProductLineup from '@/components/products/product-lineup';
import ProductsHero from '@/components/products/products-hero';
import WhyChooseNMCyberProducts from '@/components/products/why-choose-nmcyber-products';

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <ProductsHero />

      {/* Product Lineup Section */}
      <ProductLineup />

      {/* Why Choose NMCYBER Products Section */}
      <WhyChooseNMCyberProducts />

      {/* Contact CTA Section */}
      <ProductsContactCTA />
    </>
  );
}
