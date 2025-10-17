'use client';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { SERVICES_PAGE } from '@/utils/constants';
import BlurElement from '../shared/blur-element';

export default function ServicePackages() {
  const { packageHeader, servicePackagesCarousel } = SERVICES_PAGE;
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % servicePackagesCarousel.packages.length);
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
              {packageHeader.subtitle}
            </span>
            <div className="h-px bg-accent/60 w-16"></div>
          </div>

          {/* Main Title */}
          <h2 className="gradient-heading2 py-2">{packageHeader.title}</h2>
        </div>
        {/* Service Packages Carousel */}
        <div className="space-y-6 sm:space-y-8">
          <div className="mx-auto max-w-7xl items-center justify-center relative">
            {/* Main Package Card */}
            <div className="w-full p-8 space-y-8 sm:space-y-12 gradient-bg1 opacity-90 backdrop-blur-[108.8px] border border-white/10 rounded-2xl hover:border-t-accent/50 hover:border-r-accent/50 hover:border-l-accent/50 transition-all duration-300">
              <div className="space-y-6 text-left">
                {/* Package Title */}
                <h2 className="gradient-heading2 text-white py-2 mb-4">
                  {currentSlide + 1}. {servicePackagesCarousel.packages[currentSlide].title}
                </h2>

                {/* Package Description */}
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  {servicePackagesCarousel.packages[currentSlide].description}
                </p>
                <p className="font-bold font-plus-jakarta-sans text-base sm:text-xl">Include:</p>
                {/* Includes Section */}
                <div className="space-y-3">
                  {servicePackagesCarousel.packages[currentSlide].includes.map((item, index) => (
                    <div
                      key={`package-include-${item.slice(0, 20)}-${index}`}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-white text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextSlide}
              className="absolute -right-4 top-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110"
            >
              <Image
                src={servicePackagesCarousel.arrowsIcon}
                alt="Arrows icon"
                width={80}
                height={80}
                className="w-20 h-20"
              />
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {servicePackagesCarousel.packages.map((pkg, index) => (
                <button
                  key={`service-dot-${pkg.title.slice(0, 10)}-${index}`}
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
      <BlurElement
        position="top"
        positionValue="10%"
        zIndex={-5}
        opacity={0.3}
        size="500px"
        blur="100px"
        className="left-[10%] top-[40%]"
      />
    </section>
  );
}
