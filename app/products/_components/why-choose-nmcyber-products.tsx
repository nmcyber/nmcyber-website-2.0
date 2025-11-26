'use client';
import { Check, Play } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { BlurElement } from '@/components/shared/blur-element';
import { PRODUCTS_PAGE } from '@/utils/constants';

export default function WhyChooseNMCyberProducts() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoClick = () => {
    setVideoLoaded(true);
  };
  return (
    <section id="why-choose" className="relative">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Title */}
            <h2 className="gradient-heading2">{PRODUCTS_PAGE.whyChoose.title}</h2>

            {/* Benefits List */}
            <div className="space-y-6">
              {PRODUCTS_PAGE.whyChoose.points.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  {/* Checkmark Icon */}
                  <Check className="w-6 h-6 text-accent flex-shrink-0" />
                  {/* Point Text */}
                  <p className="text-white font-semibold text-base sm:text-lg leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="relative pt-8 sm:pt-12 w-full">
            <div className="relative aspect-video w-full group hover:border-t-2 hover:border-r-2 hover:border-l-2 hover:border-t-accent/50 hover:border-r-accent/50 hover:border-l-accent/50 transition-all duration-300 rounded-lg overflow-hidden">
              {!videoLoaded ? (
                <>
                  {/* Video Thumbnail Background */}
                  {PRODUCTS_PAGE.whyChoose.video.thumbnail && (
                    <Image
                      src={PRODUCTS_PAGE.whyChoose.video.thumbnail}
                      alt={PRODUCTS_PAGE.whyChoose.video.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  )}
                  <button
                    type="button"
                    onClick={handleVideoClick}
                    className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors cursor-pointer z-10"
                    aria-label={PRODUCTS_PAGE.whyChoose.video.title}
                  >
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300" />
                      <Play className="w-9 h-9 text-white fill-white relative z-10" />
                    </div>
                  </button>
                </>
              ) : (
                <iframe
                  src={`${PRODUCTS_PAGE.whyChoose.video.url}&autoplay=1`}
                  title={PRODUCTS_PAGE.whyChoose.video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Background Elements */}
      <BlurElement
        position="top"
        positionValue="10%"
        zIndex={-5}
        opacity={0.4}
        size="300px"
        blur="80px"
        className="right-[50%] top-[20%]"
      />
    </section>
  );
}
