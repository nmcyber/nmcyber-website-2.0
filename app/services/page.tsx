import AddOnUnique from '@/components/services/addon-unique';
import ServicesAddOns from '@/components/services/addons';
import ServicePackagesForEveryone from '@/components/services/packages-for-everyone';
import ServicesPricingStrategy from '@/components/services/pricing-strategy';
import ServicesHero from '@/components/services/services-hero';
import ServicePackages from '@/components/services/services-packages';

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicePackages />
      <ServicePackagesForEveryone />
      <ServicesPricingStrategy />
      <AddOnUnique />
      <ServicesAddOns />
    </>
  );
}
