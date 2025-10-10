'use client';
import Image from 'next/image';
import { ABOUT_US, PRODUCTS_PAGE } from '@/utils/constants';
import { BlurElement } from '../shared/blur-element';

export default function WhoWeAre() {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl text-center space-y-8 sm:space-y-12">
        {/* Header Section */}
        <div className="space-y-4 sm:space-y-6">
          {/* Subtitle */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px bg-accent/60 w-16"></div>
            <span className="text-accent/80 text-sm font-bold font-[Poppins] leading-[14px] uppercase">
              {ABOUT_US.subtitle}
            </span>
            <div className="h-px bg-accent/60 w-16"></div>
          </div>

          {/* Main Title */}
          <h1 className="gradient-heading1 py-2">{ABOUT_US.title}</h1>
        </div>

        {/* Content Section */}
        <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          {/* First Paragraph */}
          <p className="mx-auto font-normal text-center text-muted-foreground text-base leading-[1.89] sm:text-xl md:leading-[1.78] lg:max-w-5xl">
            {ABOUT_US.description.paragraph1}
          </p>

          {/* Second Paragraph */}
          <p className="mx-auto font-normal text-center text-muted-foreground text-base leading-[1.89] sm:text-xl md:leading-[1.78] lg:max-w-5xl">
            {ABOUT_US.description.paragraph2}
          </p>

          {/* Tagline */}
          <div className="pt-4">
            <span className="font-medium font-[Poppins] text-center text-lg leading-[1.82] md:text-2xl md:leading-[2.16]">
              <span>Empowering Humans. Protecting Businesses. That's the</span>
              <span className="text-accent font-semibold"> NMCYBER </span>
              <span>way.</span>
            </span>
          </div>
        </div>

        {/* Video */}
        <div className="relative mx-auto max-w-4xl pt-8 sm:pt-12">
          <div className="relative aspect-video group hover:border-t-2 hover:border-r-2 hover:border-l-2 hover:border-t-accent/50 hover:border-r-accent/50 hover:border-l-accent/50 transition-all duration-300 rounded-lg overflow-hidden">
            <iframe
              src={PRODUCTS_PAGE.whyChoose.video.url}
              title="Watch Our Team in Action"
              allow="encrypted-media; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
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
            objectPosition: 'center top',
          }}
          quality={90}
          priority
        />
        {/* Left Binary Background  */}
        <div className="absolute left-0 bottom-0 h-[90dvh] w-2/10">
          <Image
            src="/images/binary.svg"
            alt="Binary Background"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      <BlurElement
        position="top"
        positionValue="10%"
        zIndex={-5}
        opacity={0.6}
        size="200px"
        blur="60px"
        className="left-[10%] top-[40%]"
      />
      <BlurElement
        position="top"
        positionValue="10%"
        zIndex={-5}
        opacity={0.4}
        size="300px"
        blur="80px"
        className="right-[40%] top-[0%]"
      />
    </section>
  );
}
