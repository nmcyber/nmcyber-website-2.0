'use client';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { SERVICES_PAGE } from '@/utils/constants';
import BlurElement from '../shared/blur-element';

interface FeatureData {
  name: string;
  starter: { included: boolean; note: string };
  pro: { included: boolean; note: string };
  premium: { included: boolean; note: string };
}

export default function PackagesForEveryone() {
  const { packagesForEveryone } = SERVICES_PAGE;
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);

  const renderFeatureCell = (feature: FeatureData, packageType: 'starter' | 'pro' | 'premium') => {
    const packageData = feature[packageType];

    return (
      <div className="flex items-center gap-2">
        {packageData.included && (
          <Image src={packagesForEveryone.checkIcon} alt="check" width={16} height={16} />
        )}
        {packageData.note && (
          <span className="text-white/80 text-sm font-[Poppins] font-normal">
            {packageData.note}
          </span>
        )}
      </div>
    );
  };

  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
        {/* Header Section */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12">
          {/* Subtitle */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px bg-accent/60 w-16"></div>
            <span className="text-accent/80 text-sm font-bold font-plus-jakarta-sans leading-[14px] uppercase">
              {packagesForEveryone.subtitle}
            </span>
            <div className="h-px bg-accent/60 w-16"></div>
          </div>

          {/* Main Title */}
          <h2 className="gradient-heading2 py-2">{packagesForEveryone.title}</h2>
        </div>

        {/* Pricing Table */}
        <div className="rounded-2xl overflow-hidden relative">
          {/* Desktop Table */}
          <div className="hidden lg:block">
            {/* Always Gray Feature Column Background */}
            <div
              className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-b from-gray-600/20 to-gray-500/20 rounded-l-2xl"
              style={{ zIndex: 1 }}
            />

            {/* Package Column Hover Backgrounds */}
            {hoveredColumn !== null && (
              <div
                className="absolute inset-y-0 transition-all duration-300"
                style={{
                  left: `${25 + (hoveredColumn - 1) * 25}%`,
                  width: '25%',
                  background:
                    'linear-gradient(to bottom, rgba(128, 128, 128, 0.2), rgba(128, 128, 128, 0.2))',
                  zIndex: 1,
                }}
              />
            )}

            {/* Table Header */}
            <div
              className="bg-gradient-to-r from-white/10 to-white/5 border-b border-white/10 relative"
              style={{ zIndex: 2 }}
            >
              <div className="grid grid-cols-4">
                <div className="text-left p-6">
                  <h3 className="text-white font-semibold font-[Poppins] text-xl">Features</h3>
                </div>
                {packagesForEveryone.packages.map((pkg, index) => (
                  <button
                    key={`package-${pkg.name}-${index}`}
                    type="button"
                    className="text-center p-6 cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHoveredColumn(index + 1)}
                    onMouseLeave={() => setHoveredColumn(null)}
                  >
                    <h3 className="text-white font-bold font-[Poppins] text-xl mb-2">{pkg.name}</h3>
                  </button>
                ))}
              </div>
            </div>

            {/* Table Body */}
            <div className="relative" style={{ zIndex: 2 }}>
              {packagesForEveryone.features.map((feature, index) => (
                <div
                  key={`feature-${feature.name}-${index}`}
                  className={`grid grid-cols-4 ${index < packagesForEveryone.features.length - 1 ? 'border-b border-white/10' : ''}`}
                >
                  <div className="text-left p-6">
                    <span className="text-white font-medium font-[Poppins] text-base leading-relaxed">
                      {feature.name}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="text-left flex items-center justify-start p-6 cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHoveredColumn(1)}
                    onMouseLeave={() => setHoveredColumn(null)}
                  >
                    {renderFeatureCell(feature, 'starter')}
                  </button>
                  <button
                    type="button"
                    className="text-left flex items-center justify-start p-6 cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHoveredColumn(2)}
                    onMouseLeave={() => setHoveredColumn(null)}
                  >
                    {renderFeatureCell(feature, 'pro')}
                  </button>
                  <button
                    type="button"
                    className="text-left flex items-center justify-start p-6 cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHoveredColumn(3)}
                    onMouseLeave={() => setHoveredColumn(null)}
                  >
                    {renderFeatureCell(feature, 'premium')}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Scrollable Table */}
          <div className="lg:hidden overflow-x-auto">
            <div className="min-w-[800px] bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden relative">
              {/* Always Gray Feature Column Background */}
              <div
                className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-b from-gray-600/20 to-gray-500/20 rounded-l-2xl"
                style={{ zIndex: 1 }}
              />

              {/* Table Header */}
              <div
                className="bg-gradient-to-r from-white/10 to-white/5 border-b border-white/10 relative"
                style={{ zIndex: 2 }}
              >
                <div className="grid grid-cols-4">
                  <div className="text-left p-4">
                    <h3 className="text-white font-semibold text-base">Features</h3>
                  </div>
                  {packagesForEveryone.packages.map((pkg, index) => (
                    <div key={`mobile-package-${pkg.name}-${index}`} className="text-center p-4">
                      <h3 className="text-white font-bold text-base mb-1">{pkg.name}</h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Table Body */}
              <div className="relative" style={{ zIndex: 2 }}>
                {packagesForEveryone.features.map((feature, index) => (
                  <div
                    key={`mobile-feature-${feature.name}-${index}`}
                    className={`grid grid-cols-4 ${index < packagesForEveryone.features.length - 1 ? 'border-b border-white/10' : ''}`}
                  >
                    <div className="text-left p-4">
                      <h4 className="text-white font-medium text-sm leading-relaxed">
                        {feature.name}
                      </h4>
                    </div>
                    <div className="text-left flex items-center justify-start p-4">
                      {renderFeatureCell(feature, 'starter')}
                    </div>
                    <div className="text-left flex items-center justify-start p-4">
                      {renderFeatureCell(feature, 'pro')}
                    </div>
                    <div className="text-left flex items-center justify-start p-4">
                      {renderFeatureCell(feature, 'premium')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bonuses Section */}
        <div className="mt-12 space-y-6">
          <span className="text-white font-bold font-plus-jakarta-sans text-left text-base sm:text-xl mb-12 leading-11 ">
            Discounts & Bonuses:
          </span>
          <div className="space-y-4">
            {packagesForEveryone.bonuses.map((bonus, index) => (
              <div key={`bonus-${bonus.slice(0, 20)}-${index}`} className="flex items-start gap-3">
                <Check className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-white/90 text-base sm:text-[22px] leading-relaxed text-left font-semibold">
                  {bonus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        {/* World Map Image */}
        <Image
          src={packagesForEveryone.backgroundImage}
          alt="World Map"
          width={412}
          height={393}
          style={{
            objectFit: 'contain',
            objectPosition: 'center bottom',
          }}
          quality={90}
          priority
          className="absolute top-6 left-120"
        />
      </div>

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
        blur="50px"
        className="right-[35%] top-[20%]"
      />
    </section>
  );
}
