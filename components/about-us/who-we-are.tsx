'use client';
import Image from 'next/image';
import { ABOUT_US } from '@/utils/constants';
import { BlurElement } from '../shared/blur-element';
import { Play } from 'lucide-react';
import { useState } from 'react';




export default function WhoWeAre() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    
    <section className="relative z-20 flex w-full flex-col items-center justify-center px-4 py-12 sm:px-6 sm:py-20">
      <div className="mx-auto w-full max-w-7xl text-center space-y-8 sm:space-y-12">
        {/* Header Section */}
        <div className="space-y-4 sm:space-y-6">
          {/* Subtitle */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px bg-accent w-8"></div>
            <span className="text-accent text-sm font-medium tracking-wider uppercase">
              {ABOUT_US.subtitle}
            </span>
            <div className="h-px bg-accent w-8"></div>
          </div>
          
          {/* Main Title */}
          <h1 className="gradient-heading py-2">
            {ABOUT_US.title}
          </h1>
        </div>

        {/* Content Section */}
        <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          {/* First Paragraph */}
          <p className="mx-auto text-base text-muted-foreground sm:text-lg lg:max-w-5xl">
            {ABOUT_US.description.paragraph1}
          </p>

          {/* Second Paragraph */}
          <p className="mx-auto text-base text-muted-foreground sm:text-lg lg:max-w-5xl">
            {ABOUT_US.description.paragraph2}
          </p>

          {/* Tagline */}
          <div className="pt-4">
            <h2 className="text-xl font-semibold sm:text-2xl">
             <span>Empowering Humans. Protecting Businesses. That's the</span>
             <span className="text-accent"> NMCYBER </span>
             <span>way.</span>
            </h2>
          </div>
        </div>

      {/* Video */}
      <div className="pt-8 sm:pt-12">
          <div className="relative mx-auto max-w-4xl">
            <div className="relative aspect-video">
              {!isPlaying ? (
                <>
                  {/* Video Thumbnail */}
                  <Image
                    src={ABOUT_US.video.thumbnail}
                    alt={ABOUT_US.video.title}
                    fill
                    className="object-center"
                    priority
                  />
                  {/* Overlay Button */}
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    aria-label="Play video"
                    className="absolute inset-0 grid place-items-center bg-black/30 hover:bg-black/40 transition-colors"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-accent rounded-full grid place-items-center shadow-2xl">
                      <Play className="w-10 h-10 sm:w-12 sm:h-12 text-white ml-1" />
                    </div>
                  </button>
                </>
              ) : (
                <iframe
                  src="https://www.youtube.com/watch?v=6oqU4zANZf8"
                  title="Intro"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              )}
            </div>
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



