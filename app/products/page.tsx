import ProductsContactCTA from './_components/contact-us';
import ProductLineup from './_components/product-lineup';
import ProductsHero from './_components/products-hero';
import WhyChooseNMCyberProducts from './_components/why-choose-nmcyber-products';

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductLineup />
      <WhyChooseNMCyberProducts />
      <ProductsContactCTA />
    </>
  );
}
