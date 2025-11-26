'use client';
import { Check, Play } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { WHY_HUMAN_CENTRIC } from '@/utils/constants';
import { BlurElement } from '../shared/blur-element';

export default function WhyHumanCentric() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoClick = () => {
    setVideoLoaded(true);
  };

  return (
    <section id="why-human-centric">
      <div className="mx-auto w-full max-w-7xl space-y-6 sm:space-y-14">
        {/* Top Row - 2 columns */}
        <div className="grid lg:grid-cols-2 gap-9 lg:gap-36 mb-24">
          {/* Column 1: Text Content */}
          <div className="col-span-1 p-0 space-y-9">
            <h2 className="gradient-heading2 py-2">{WHY_HUMAN_CENTRIC.title}</h2>
            <div className="space-y-6">
              <p className="mx-auto text-base font-normal leading-[2.16] text-muted-foreground sm:text-xl lg:max-w-5xl">
                {WHY_HUMAN_CENTRIC.description}
              </p>
              <p className="mx-auto text-base font-normal leading-[2.16] text-muted-foreground sm:text-xl lg:max-w-5xl">
                {WHY_HUMAN_CENTRIC.explanation}
              </p>
            </div>
            {/* Blur Elements */}
            <BlurElement
              position="top"
              positionValue="10%"
              zIndex={-5}
              opacity={0.5}
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
              className="right-[8%] top-[2%]"
            />
          </div>

          {/* Column 2: Human Head Graphic */}
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="w-full flex items-center justify-center lg:scale-110">
              <Image
                src={WHY_HUMAN_CENTRIC.human_head.image}
                alt={WHY_HUMAN_CENTRIC.human_head.title}
                width={1252}
                height={856}
                loading="lazy"
                className="object-contain w-full h-auto transform -translate-x-[6%] -translate-y-[-20%] md:-translate-x-[8%] md:-translate-y-[-10%]"
              />
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6">
          {/* Column 3: Video Thumbnail */}
          <div className="col-span-1 h-full">
            <Card className="bg-transparent border-none shadow-none">
              <div className="relative aspect-video group hover:border-t-2 hover:border-r-2 hover:border-l-2 hover:border-t-accent/50 hover:border-r-accent/50 hover:border-l-accent/50 transition-all duration-300 rounded-[20px] overflow-hidden">
                {!videoLoaded ? (
                  <>
                    {/* Video Thumbnail Background */}
                    {WHY_HUMAN_CENTRIC.video.thumbnail && (
                      <Image
                        src={WHY_HUMAN_CENTRIC.video.thumbnail}
                        alt={WHY_HUMAN_CENTRIC.video.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    )}
                    <button
                      type="button"
                      onClick={handleVideoClick}
                      className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors cursor-pointer z-10"
                      aria-label={WHY_HUMAN_CENTRIC.video.title}
                    >
                      <div className="relative flex items-center justify-center">
                        <div className="absolute w-14 h-14 mb-5 bg-accent rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300" />
                        <Play className="w-9 h-9 text-white fill-white relative z-10 ml-0.5 mb-4" />
                      </div>
                    </button>
                  </>
                ) : (
                  <iframe
                    src={`${WHY_HUMAN_CENTRIC.video.url}&autoplay=1`}
                    title={WHY_HUMAN_CENTRIC.video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0"
                  />
                )}
              </div>
            </Card>
          </div>

          {/* Column 4: Benefits List */}
          <div className="col-span-1 h-full">
            <Card className="bg-transparent border-none shadow-none h-full">
              <CardContent className="p-0 space-y-3 h-full">
                <p className="mx-auto text-base font-normal leading-[2] text-muted-foreground sm:text-xl lg:max-w-5xl">
                  {WHY_HUMAN_CENTRIC.intro}
                </p>
                <div className="space-y-3">
                  {WHY_HUMAN_CENTRIC.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-semibold text-white leading-[1] sm:text-base lg:max-w-5xl">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
