'use client';
import { Play } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { ABOUT_US } from '@/utils/constants';
import { BlurElement } from '../shared/blur-element';

export default function WhoWeAre() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoClick = () => {
    setVideoLoaded(true);
  };
  return (
    <section id="who-we-are">
      <div className="mx-auto w-full max-w-7xl text-center space-y-8 sm:space-y-12">
        {/* Header Section */}
        <div className="space-y-4 sm:space-y-6">
          {/* Subtitle */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px bg-accent/60 w-16"></div>
            <span className="text-accent/80 text-sm font-bold font-plus-jakarta-sans leading-[14px] uppercase">
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
              <span>Empowering Humans. Protecting Businesses. That&#39;s the</span>
              <span className="text-accent font-semibold"> NMCYBER </span>
              <span>way.</span>
            </span>
          </div>
        </div>

        {/* Video */}
        <div className="relative mx-auto max-w-4xl pt-8 sm:pt-12">
          <div className="relative aspect-video group hover:border-t-2 hover:border-r-2 hover:border-l-2 hover:border-t-accent/50 hover:border-r-accent/50 hover:border-l-accent/50 transition-all duration-300 rounded-lg overflow-hidden">
            {!videoLoaded ? (
              <>
                {/* Video Thumbnail Background */}
                {ABOUT_US.video.thumbnail && (
                  <Image
                    src={ABOUT_US.video.thumbnail}
                    alt={ABOUT_US.video.title}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
                <button
                  type="button"
                  onClick={handleVideoClick}
                  className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors cursor-pointer z-10"
                  aria-label={ABOUT_US.video.title}
                >
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300" />
                    <Play className="w-8 h-8 text-white fill-white relative z-10" />
                  </div>
                </button>
              </>
            ) : (
              <iframe
                src={`${ABOUT_US.video.url}&autoplay=1`}
                title={ABOUT_US.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
            )}
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
          quality={75}
          loading="lazy"
        />
        {/* Left Binary Background  */}
        <div className="absolute left-0 bottom-0 h-[90dvh] w-2/10">
          <Image
            src="/images/binary.svg"
            alt="Binary Background"
            fill
            style={{ objectFit: 'contain' }}
            loading="lazy"
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
