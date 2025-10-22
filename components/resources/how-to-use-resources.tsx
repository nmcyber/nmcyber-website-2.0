'use client';
import Image from 'next/image';
import { RESOURCES_PAGE } from '@/utils/constants';
import BlurElement from '../shared/blur-element';

export default function HowToUseResources() {
  const { howToUseResources } = RESOURCES_PAGE;

  return (
    <section>
      <div className="mx-auto w-full space-y-8 sm:space-y-12">
        {/* Content Layout - Text Left, Icon Right */}
        <div className="flex items-cente max-w-5xl mx-auto">
          {/* Left side - Text content */}
          <div className="space-y-6 text-left">
            <h2 className="gradient-heading2 text-left max-w-2xl">{howToUseResources.title}</h2>
            <p className="text-white/80 text-lg leading-relaxed">{howToUseResources.description}</p>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <BlurElement
        position="right"
        positionValue="10%"
        zIndex={-5}
        opacity={0.3}
        size="300px"
        blur="100px"
        className="right-[0%] top-[40%]"
      />
      <BlurElement
        position="top"
        positionValue="10%"
        zIndex={-5}
        opacity={0.3}
        size="250px"
        blur="100px"
        className="left-[25%] top-[10%]"
      />
      <div className="absolute z-10 right-10 top-60 hidden md:block">
        <Image
          src={howToUseResources.shieldIcon}
          alt="Shield Icon"
          width={100}
          height={100}
          className="object-cover"
        />
      </div>
      <div className="absolute right-0 top-0 hidden md:block">
        <Image
          src={howToUseResources.looperIcon}
          alt="Looper Icon"
          width={200}
          height={200}
          className=" object-contain"
        />
      </div>
    </section>
  );
}
