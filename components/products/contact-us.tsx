import Image from 'next/image';
import { PRODUCTS_PAGE } from '@/utils/constants';
import { BlurElement } from '../shared/blur-element';

export default function ProductsContactCTA() {
  return (
    <section className="relative">
      <div className="w-full max-w-7xl py-20 text-center space-y-8 sm:space-y-12 gradient-bg1 backdrop-blur-[2px] border border-white/10 rounded-2xl p-8 hover:border-t-accent/50 hover:border-r-accent/50 hover:border-l-accent/50 transition-all duration-300">
        {/* Header Section */}
        <div className="space-y-4 sm:space-y-6">
          {/* Subtitle */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px bg-accent/60 w-16"></div>
            <span className="text-accent/80 text-sm font-bold font-[Poppins] leading-[14px] uppercase">
              {PRODUCTS_PAGE.cta.subtitle}
            </span>
            <div className="h-px bg-accent/60 w-16"></div>
          </div>

          {/* Main Title */}
          <h2 className="gradient-heading2">{PRODUCTS_PAGE.cta.title}</h2>
        </div>

        {/* Description */}
        <div className="max-w-5xl mx-auto">
          <p className="mx-auto font-normal text-center text-muted-foreground text-base leading-[1.89] sm:text-xl md:leading-[1.78]">
            {PRODUCTS_PAGE.cta.description}
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex items-center justify-center gap-1 sm:gap-2">
          {/* Email Icon */}
          <div className="flex items-center gap-3">
            <Image src={PRODUCTS_PAGE.cta.email} alt="email" width={24} height={24} />
          </div>
          {/* Contact Text */}
          <div className="text-center">
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              {PRODUCTS_PAGE.cta.contactText.split('info@nmcyber.com.au')[0]}
              <a
                href="mailto:info@nmcyber.com.au"
                className="text-accent hover:text-accent/80 font-semibold transition-colors duration-300"
              >
                info@nmcyber.com.au
              </a>
              {PRODUCTS_PAGE.cta.contactText.split('info@nmcyber.com.au')[1]}
            </p>
          </div>
        </div>
      </div>

      {/* Background */}
      <BlurElement
        position="top"
        positionValue="10%"
        zIndex={-5}
        opacity={0.4}
        size="300px"
        blur="100px"
        className="left-[2%] top-[60%]"
      />
      {/*LoopBackground */}
      <div className="hidden md:block">
        <Image
          src={PRODUCTS_PAGE.cta.background1}
          alt="Background"
          className="hidden md:block absolute left-0 top-3/4 -translate-y-1/2 w-1/3 h-auto opacity-30"
          priority
          width={400}
          height={300}
          sizes="(max-width: 768px) 50vw, 33vw"
          style={{ objectFit: 'contain' }}
        />
      </div>
      {/* Chatbot Icon using CSS variables */}
      <div className="absolute bottom-1 right-0 z-50 scale-50 md:scale-100">
        <Image
          src={PRODUCTS_PAGE.cta.background2}
          alt="Chatbot"
          width={60}
          height={60}
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}
