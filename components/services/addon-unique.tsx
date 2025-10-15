'use client';

import Image from 'next/image';
import { SERVICES_PAGE } from '@/utils/constants';
import BlurElement from '../shared/blur-element';

export default function AddOnUnique() {
  const { addonUnique } = SERVICES_PAGE;

  return (
    <section className="relative py-12 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="gradient-heading2 text-left mb-8">{addonUnique.title}</h2>
        </div>

        {/* Services List */}
        <div className="space-y-6 mb-12">
          {addonUnique.services.map((service, index) => (
            <div key={`${service.title}-${index}`} className="flex items-start gap-4">
              {/* Flash Icon */}
              <div className="flex-shrink-0 mt-1">
                <Image
                  src={addonUnique.flashIcon}
                  alt="flash"
                  width={20}
                  height={20}
                  className="text-blue-400"
                />
              </div>

              {/* Service Content */}
              <div className="flex-1">
                <h3 className="text-white font-semibold font-[Poppins] text-lg sm:text-xl mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 font-normal font-[Poppins]text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Note */}
        <div className="text-center">
          <p className="text-accent/80 font-semibold font-[Poppins] text-sm sm:text-base italic">
            {addonUnique.pricingNote}
          </p>
        </div>
      </div>
      {/* Blur Elements */}
      <BlurElement
        position="top"
        positionValue="20%"
        zIndex={-5}
        opacity={0.2}
        size="600px"
        blur="120px"
        className="left-[10%] top-[0%]"
      />

      <BlurElement
        position="top"
        positionValue="60%"
        zIndex={-5}
        opacity={0.15}
        size="400px"
        blur="100px"
        className="right-[2%] top-[10%]"
      />
      <div className="absolute right-0 top-0 hidden md:block">
        <Image
          src={addonUnique.backgroundBinary}
          alt="Background Binary"
          fill
          className="absolute right-0 top-0"
          style={{
            objectFit: 'contain',
            objectPosition: 'right top',
          }}
          quality={90}
          priority
        />
      </div>
    </section>
  );
}
