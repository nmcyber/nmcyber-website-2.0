'use client';
import Image from 'next/image';
import { useState } from 'react';
import { SERVICES_PAGE } from '@/utils/constants';
import BlurElement from '../shared/blur-element';

export default function ServicesHero() {
  const { servicesHero, coreServicesCarousel } = SERVICES_PAGE;
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % coreServicesCarousel.services.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section>
      <div className="mx-auto w-full text-center space-y-8 sm:space-y-12">
        {/* Header Section */}
        <div className="space-y-4 sm:space-y-6">
          {/* Subtitle */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px bg-accent/60 w-16"></div>
            <span className="text-accent/80 text-sm font-bold font-[Poppins] leading-[14px] uppercase">
              {servicesHero.subtitle}
            </span>
            <div className="h-px bg-accent/60 w-16"></div>
          </div>

          {/* Main Title */}
          <h1 className="gradient-heading1 py-2 mb-60">{servicesHero.title}</h1>
        </div>

        {/* Service Packages Carousel */}
        <div className="space-y-6 sm:space-y-8">
          <div className="mx-auto max-w-7xl items-center justify-center relative">
            {/* Main Package Card */}
            <div className="w-full p-8 space-y-8 sm:space-y-12 gradient-bg1 opacity-90 backdrop-blur-[108.8px] border border-white/10 rounded-2xl hover:border-t-accent/50 hover:border-r-accent/50 hover:border-l-accent/50 transition-all duration-300">
              <div className="space-y-6 text-left">
                {/* Package Title */}
                <h2 className="gradient-heading2 text-white py-2 mb-4">
                  {currentSlide + 1}. {coreServicesCarousel.services[currentSlide].title}
                </h2>

                {/* Includes Section */}
                <div className="space-y-3">
                  {coreServicesCarousel.services[currentSlide].includes.map((item, index) => (
                    <div
                      key={`include-${item.title.slice(0, 20)}-${index}`}
                      className="flex items-start gap-3"
                    >
                      <Image
                        src={coreServicesCarousel.flashIcon}
                        alt="Check icon"
                        width={20}
                        height={20}
                        className="mt-1 flex-shrink-0"
                      />
                      <div className="flex-1 text-left">
                        <h3 className="text-white text-base sm:text-xl font-semibold mb-1">
                          {item.title}
                        </h3>
                        <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextSlide}
              className="absolute -right-4 top-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-70 md:hover:scale-110"
            >
              <Image
                src={coreServicesCarousel.arrowsIcon}
                alt="Arrows icon"
                width={80}
                height={80}
                className="w-20 h-20"
              />
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {coreServicesCarousel.services.map((service, index) => (
                <button
                  key={`dot-${service.title.slice(0, 10)}-${index}`}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                  aria-label={`Go to package ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 hidden md:block mt-16 hidden md:block">
        {/* Hero Net Background Image */}
        <Image
          src={servicesHero.backgroundHero}
          alt="Hero Background"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center top',
            opacity: 0.6,
          }}
          quality={90}
          priority
        />
      </div>
      {/* Binary Background */}
      <div className="absolute right-[35%] top-[10%] h-[80dvh] w-1/10 hidden md:block">
        <Image
          src={servicesHero.backgroundBinary}
          alt="Binary Background"
          fill
          style={{ objectFit: 'contain', opacity: 0.4 }}
        />
      </div>
      <BlurElement
        position="top"
        positionValue="10%"
        zIndex={-5}
        opacity={0.3}
        size="500px"
        blur="100px"
        className="right-[40%] top-[40%]"
      />
    </section>
  );
}
