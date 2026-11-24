import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO, HERO_CONTENT } from '@/utils/constants';
import BlurElement from '../shared/blur-element';

// Star rating component for cleaner code
const STAR_COUNT = 5;
const starIds = Array.from({ length: STAR_COUNT }, (_, i) => `star-${i + 1}`);
const StarRating = () => (
  <div className="flex">
    {starIds.map((id) => (
      <Star key={id} className="w-4 h-4 text-yellow-400 fill-current" aria-hidden="true" />
    ))}
  </div>
);

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
    <section className="pt-8">
      <div className="mx-auto w-full max-w-7xl text-center space-y-2 sm:space-y-10">
        {/* Hero Headlines */}
        <div className="space-y-4 sm:space-y-6 mb-7 sm:mb-0">
          <h1 className="gradient-heading1 mx-auto sm:max-w-2xl lg:max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.5] py-1">
            {COMPANY_INFO.tagline}
          </h1>
          <div className="mx-auto max-w-[300px] sm:max-w-xl md:max-w-3xl flex justify-center">
            <div className="inline-flex items-center justify-center gap-2 sm:rounded-full sm:border sm:border-accent/25 sm:bg-accent/[0.06] sm:px-6 sm:py-2.5 sm:backdrop-blur-md">
              <span className="hidden sm:inline-block h-2 w-2 shrink-0 rounded-full bg-accent animate-pulse shadow-[0_0_8px_var(--accent)]" />
              <p className="text-center text-sm sm:text-base md:text-lg font-medium text-cyan-200 leading-snug">
                {COMPANY_INFO.shortDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Company Description */}
        <p className="hidden sm:block mx-auto max-w-2xl lg:max-w-3xl font-normal text-center text-muted-foreground text-base md:text-lg leading-relaxed !mt-3 md:!mt-4">
          {COMPANY_INFO.longDescriptionAlt}
        </p>

        {/* CTA Buttons */}
        <div className="flex w-full max-w-[300px] sm:max-w-none md:max-w-4xl mx-auto flex-col items-center justify-center gap-3.5 md:flex-row ">
          {/* Primary CTA Button */}
          <Button
            asChild
            className="!h-12 sm:!h-14 w-full sm:w-auto rounded-5xl px-6 sm:px-8 bg-gradient-to-r from-[var(--button-gradient-start)] to-[var(--button-gradient-end)] hover:opacity-90 transition-opacity"
          >
            <Link
              href={HERO_CONTENT.cta.primaryHref}
              className="flex items-center justify-center text-sm sm:text-base lg:text-lg font-[poppins] font-semibold whitespace-nowrap text-white"
            >
              {HERO_CONTENT.cta.primary}
            </Link>
          </Button>

          {/* Secondary CTA Button */}
          <Button
            asChild
            variant="outline"
            className="!h-12 sm:!h-14 w-full sm:w-auto !p-0 overflow-hidden border border-accent bg-transparent rounded-5xl hover:bg-black/50"
          >
            <Link
              href={HERO_CONTENT.cta.secondaryHref}
              className="h-full w-full items-center justify-between transition-opacity duration-200 hover:opacity-95"
              aria-label="Download the Cybersecurity Risk Checklist"
            >
              {/* Text Section */}
              <span className="flex flex-1 items-center justify-center px-5 text-center backdrop-blur-[2px] font-[poppins] font-semibold text-sm sm:text-base lg:text-lg whitespace-nowrap text-accent">
                <span className="block sm:hidden">{HERO_CONTENT.cta.secondaryMobile}</span>
                <span className="hidden sm:block">{HERO_CONTENT.cta.secondary}</span>
              </span>

              {/* Icon Section */}
              <div className="flex h-full w-12 sm:w-14 shrink-0 items-center justify-center bg-accent">
                <Image
                  src="/images/download-icon.svg"
                  alt="Download"
                  width={22}
                  height={22}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </div>
            </Link>
          </Button>
        </div>

        {/* Trusted Partners Section */}
        <div className=" space-y-6 pt-4 sm:pt-0 sm:space-y-8">
          {/* Partner Logos Grid */}
          <div className="mx-auto flex max-w-full flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {partnerLogos.map((logo, index) => (
              <div key={logo.src} className="flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  // Solution for LCP - prioritize first logo, lazy load others
                  priority={index === 0}
                  loading={index === 0 ? undefined : 'lazy'}
                  className="h-auto w-auto max-w-[120px] object-contain sm:max-w-none"
                  style={{
                    maxHeight: `${Math.min(logo.height, 44)}px`,
                  }}
                />
              </div>
            ))}
          </div>
          {/* Trust Indicator */}
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
            <span className="text-sm font-medium text-white/60">{HERO_CONTENT.trustedBy}</span>
            <StarRating />
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        {/* Hero Net Background Image */}
        <Image
          src="/images/hero-bg.svg"
          alt="Hero Background"
          fill
          style={{
            objectFit: 'contain',
            objectPosition: 'center bottom',
            opacity: 0.4,
          }}
          quality={75}
          loading="lazy"
          className="translate-y-1/4"
        />

        {/* Binary Background */}
        <div className="absolute right-0 top-0 h-[90dvh] w-3/10">
          <Image
            src="/images/binary.svg"
            alt="Binary Background"
            fill
            style={{ objectFit: 'contain' }}
            loading="lazy"
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
