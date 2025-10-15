import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SERVICES_PAGE } from '@/utils/constants';

export default function ServicesAddOns() {
  const { addOns, footerCta } = SERVICES_PAGE;
  return (
    <section className="relative py-12 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="gradient-heading2 text-center mb-8">{addOns.title}</h2>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {addOns.services.map((service, index) => (
            <div
              key={`${service.title}-${index}`}
              className="backdrop-blur-sm border border-transparent rounded-xl px-6 py-4 hover:border-t-accent/50 hover:border-b-accent/50 hover:border-l-accent/50 transition-all duration-300 w-fit"
              style={{
                background:
                  'linear-gradient(242.5deg, rgba(44, 168, 220, 0.1) 8.82%, rgba(17, 107, 142, 0.1) 92.41%)',
              }}
            >
              <div className="flex items-center gap-4">
                {/* Plus Icon */}
                <div className="flex-shrink-0">
                  <Image
                    src={addOns.plusIcon}
                    alt="plus"
                    width={16}
                    height={16}
                    className="text-accent"
                  />
                </div>

                {/* Service Content */}
                <div className="flex-1">
                  <p className="text-white text-sm sm:text-base font-semibold leading-relaxed">
                    {service.title} — <span className="text-white">{service.price}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="h-auto rounded-5xl px-6 py-5 bg-gradient-to-r hover:from-[var(--button-gradient-start-hover)] hover:to-[var(--button-gradient-end-hover)] from-[var(--button-gradient-start)] to-[var(--button-gradient-end)]"
          >
            <a
              href={`mailto:${footerCta.email}`}
              className="text-sm font-[poppins] font-medium leading-[1] text-white sm:text-xl"
            >
              {footerCta.subtitle}
            </a>
          </Button>
        </div>
      </div>
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 z-50 hidden md:block">
        <Image
          src={addOns.chatbotIcon}
          alt="chatbot"
          width={60}
          height={60}
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}
