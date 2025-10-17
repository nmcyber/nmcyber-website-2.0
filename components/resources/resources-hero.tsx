'use client';
import Image from 'next/image';
import { RESOURCES_PAGE } from '@/utils/constants';

export default function ResourcesHero() {
  const { resourcesHero } = RESOURCES_PAGE;

  return (
    <section>
      <div className="mx-auto w-full text-center space-y-8 sm:space-y-12">
        {/* Header Section */}
        <div className="space-y-6 sm:space-y-8">
          {/* Subtitle */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px bg-accent/60 w-16"></div>
            <span className="text-accent/80 text-sm font-bold font-plus-jakarta-sans leading-[14px] uppercase">
              {resourcesHero.subtitle}
            </span>
            <div className="h-px bg-accent/60 w-16"></div>
          </div>

          {/* Main Title */}
          <h1 className="gradient-heading1 py-2">{resourcesHero.title}</h1>

          {/* Description */}
          <p className="text-white/80 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed">
            {resourcesHero.description}
          </p>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 hidden md:block mt-16">
        {/* Hero Background Image */}
        <Image
          src={resourcesHero.backgroundHero}
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
      <div className="absolute left-0 top-0 h-[100dvh] w-3/10">
        <Image
          src="/images/binary.svg"
          alt="Binary Background"
          fill
          style={{ objectFit: 'contain', opacity: 0.4 }}
        />
      </div>
    </section>
  );
}
