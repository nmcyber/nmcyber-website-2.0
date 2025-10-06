import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO } from '@/utils/constants';
import BlurElement from '../shared/blur-element';

// Star rating component for cleaner code
const STAR_COUNT = 5;
const StarRating = () => {
  const stars = Array.from({ length: STAR_COUNT }, (_, i) => `star-${i}`);
  return (
    <div className="flex">
      {stars.map((starKey) => (
        <Star key={starKey} className="w-4 h-4 text-yellow-400 fill-current" aria-hidden="true" />
      ))}
    </div>
  );
};

// Partner logos data for easier maintenance
const partnerLogos = [
  { src: '/images/sophos.svg', alt: 'SOPHOS', width: 154, height: 27.181 },
  {
    src: '/images/chartere-accountants-australia-logo-2-1024x236_1.svg',
    alt: 'CA ANZ',
    width: 192,
    height: 44,
  },
  { src: '/images/huntress_security.svg', alt: 'Huntress', width: 142, height: 35 },
  { src: '/images/Proofpoint_R_Logo-2048x417.svg', alt: 'Proofpoint', width: 190, height: 38.687 },
];

export default function Hero() {
  return (
    <section className="relative z-20 flex w-full flex-col items-center justify-center px-4 py-12 sm:px-6 sm:py-20">
      <div className="mx-auto w-full max-w-7xl text-center space-y-6 sm:space-y-10">
        {/* Hero Headlines */}
        <div className="space-y-4 sm:space-y-6">
          <h1 className="gradient-heading py-2">{COMPANY_INFO.tagline}</h1>
          <h2 className="text-xl font-semibold sm:text-2xl">{COMPANY_INFO.shortDescription}</h2>
        </div>

        {/* Company Description */}
        <p className="mx-auto text-base text-muted-foreground sm:text-lg lg:max-w-5xl">
          {COMPANY_INFO.longDescription}
        </p>

        {/* CTA Buttons */}
        <div className="flex w-full md:max-w-4xl mx-auto flex-col items-center justify-center gap-4 md:flex-row">
          {/* Primary CTA Button */}
          <Button
            asChild
            size="lg"
            className="h-auto w-full rounded-5xl px-6 py-5 bg-gradient-to-r from-[var(--button-gradient-start)] to-[var(--button-gradient-end)] sm:w-auto sm:px-10"
          >
            <Link
              href="/contact-us"
              className="text-lg font-semibold leading-tight text-white transition-all duration-300 hover:opacity-95 hover:shadow-xl sm:text-xl sm:leading-[14px]"
            >
              Book a Free Strategy Call Today
            </Link>
          </Button>

          {/* Secondary CTA Button - Custom Design */}
          <Button
            asChild
            variant="outline"
            className="h-auto w-full p-0 overflow-hidden border-none outline outline-accent bg-transparent rounded-5xl sm:w-auto"
          >
            <Link
              href="/resources/checklist"
              className="flex items-stretch transition-opacity duration-200 hover:opacity-95"
              aria-label="Download the Cybersecurity Risk Checklist"
            >
              {/* Text Section */}
              <span className="flex flex-1 items-center justify-center px-4 py-3 text-center backdrop-blur-[2px] outline outline-accent rounded-l-5xl font-semibold text-base text-accent  sm:flex-none sm:px-8 sm:text-nowrap sm:text-xl md:text-lg">
                <span className="block sm:hidden">Get Checklist</span>
                <span className="hidden sm:block">Download the Cybersecurity Risk Checklist</span>
              </span>

              {/* Icon Section */}
              <div className="flex aspect-square w-10 items-center justify-center bg-accent outline outline-accent sm:w-12">
                <Image
                  src="/images/download-icon.svg"
                  alt="Download"
                  width={30}
                  height={30}
                  className="w-6 h-6 sm:w-[30px] sm:h-[30px]"
                />
              </div>
            </Link>
          </Button>
        </div>

        {/* Trusted Partners Section */}
        <div className="pt-8 space-y-6 sm:pt-16 sm:space-y-8">
          {/* Trust Indicator */}
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
            <span className="text-sm font-medium text-white/60">Trusted by 3,200+ partners</span>
            <StarRating />
          </div>

          {/* Partner Logos Grid */}
          <div className="mx-auto flex max-w-full flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {partnerLogos.map((logo) => (
              <div key={logo.src} className="flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-auto w-auto max-w-[120px] object-contain sm:max-w-none"
                  style={{
                    maxHeight: `${Math.min(logo.height, 44)}px`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Hero Background Image */}
        <Image
          src="/images/hero-bg.svg"
          alt="Hero Background"
          fill
          style={{
            objectFit: 'contain',
            objectPosition: 'center bottom',
          }}
          quality={90}
          priority
          className="translate-y-10"
        />

        {/* Binary Background */}
        <div className="absolute right-0 top-0 h-[90dvh] w-3/10">
          <Image
            src="/images/binary.svg"
            alt="Binary Background"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* Blur Elements */}
      <BlurElement
        position="top"
        positionValue="10%"
        zIndex={-5}
        opacity={0.8}
        size="150px"
        blur="60px"
        className="left-[35%] top-[2%]"
      />
      <BlurElement
        position="top"
        positionValue="10%"
        zIndex={-5}
        opacity={0.3}
        size="650px"
        blur="60px"
        className="right-0 top-[2%]"
      />
    </section>
  );
}
