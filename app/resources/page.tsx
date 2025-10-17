import AvailableResources from '@/components/resources/available-resources';
import ContactUs from '@/components/resources/contact-us';
import HowToUseResources from '@/components/resources/how-to-use-resources';
import ResourcesHero from '@/components/resources/resources-hero';

export default function ResourcePage() {
  return (
    <>
      <ResourcesHero />
      <AvailableResources />
      <HowToUseResources />
      <ContactUs />
    </>
  );
}
