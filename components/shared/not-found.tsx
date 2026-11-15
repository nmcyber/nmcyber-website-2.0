'use client';
import Image from 'next/image';
import { NOT_FOUND_PAGE } from '@/utils/constants';
import BlurElement from './blur-element';

export default function NotFound() {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-4">
        {/* 404 headline block */}
        <div className="flex flex-col items-center text-center py-10">
          <div className="w-full max-w-4xl">
            <Image
              src={NOT_FOUND_PAGE.notFoundImage}
              alt="404 Not Found"
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </div>

          <h1 className="gradient-heading1 py-2">{NOT_FOUND_PAGE.title}</h1>

          <div className="mt-10 flex items-center justify-center gap-3">
            <Image src={NOT_FOUND_PAGE.brandLogo} alt="NMCyber Logo" width={100} height={100} />
            <Image src={NOT_FOUND_PAGE.brandLogo2} alt="NMCyber Logo2" width={200} height={200} />
          </div>
        </div>
      </div>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 hidden md:block mt-30">
        <Image
          src={NOT_FOUND_PAGE.backgroundHero}
          alt="Hero Background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top', opacity: 0.2 }}
        />
      </div>
      <div className="absolute z-0 left-0 top-20 h-[100dvh] w-2/10">
        <Image
          src={NOT_FOUND_PAGE.backgroundBinary}
          alt="Binary Background"
          fill
          style={{ objectFit: 'contain', opacity: 0.8 }}
        />
      </div>
      <div className="absolute z-0 right-[-25dvh] bottom-[-90dvh] h-[100dvh] w-3/10">
        <Image
          src={NOT_FOUND_PAGE.backgroundLooper}
          alt="Looper Background"
          width={200}
          height={200}
          style={{ objectFit: 'contain', opacity: 0.5 }}
        />
      </div>
      <BlurElement
        position="top"
        positionValue="10%"
        zIndex={-5}
        opacity={0.4}
        size="300px"
        blur="80px"
        className="left-[5%] top-[20%]"
      />
      <BlurElement
        position="right"
        positionValue="10%"
        zIndex={-5}
        opacity={0.4}
        size="150px"
        blur="80px"
        className="right-[0] bottom-[-20%]"
      />
    </section>
  );
}
