import { SERVICE_DIRECTORY } from '@/utils/constants';
import ServiceCard from './service-card';
import ServicesContactCTA from './services-contact-cta';

export default function ServicesDirectory() {
  const { id, title, services } = SERVICE_DIRECTORY;

  return (
    <section
      id={id}
      tabIndex={-1}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-20 px-0 pb-16 sm:px-0 sm:pb-24 sm:pt-0"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id={`${id}-title`}
          className="gradient-heading1 services-heading text-center font-[family-name:var(--font-poppins)] text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl"
        >
          {title}
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <ServicesContactCTA />
      </div>
    </section>
  );
}
