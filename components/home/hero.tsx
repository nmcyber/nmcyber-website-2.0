import { Download } from "lucide-react";
import { COMPANY_INFO } from "@/utils/constants";
import Link from "next/link";
import Image from "next/image";
import React from 'react';
import BlurElement from '../shared/blur-element';

export default function Hero() {
  return (
    <section className="flex z-20 flex-col relative justify-center items-center w-full py-20 px-6">
    <div className="text-center space-y-10 max-w-7xl mx-auto">
      <div className='space-y-6'>
      {/* Main hero heading with gradient effect */}
      <h1 className="gradient-heading py-2">
        {COMPANY_INFO.tagline}
      </h1>
      
      {/* Subheading with call to action */}
      <h2 className="text-2xl md:text-2xl font-semibold">
      {COMPANY_INFO.shortDescription}
      </h2>
      </div>
      {/* Company description optimized for SEO */}
      <p className="text-lg text-muted-foreground lg:max-w-5xl mx-auto">
        {COMPANY_INFO.longDescription}
      </p>

        {/* CTA Buttons */}
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact-us"
              className="w-[426px] h-[74px] rounded-[56px] text-white text-[20px] font-semibold leading-[14px] flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:opacity-95"
              style={{ background: 'linear-gradient(90deg, #045B7D 0%, #64CDF6 100%)', padding: '22px 53px' }}
              >
              Book a Free Strategy Call Today
            </Link>

            <Link
              href="/resources/checklist"
              className="flex items-stretch p-0  transition-opacity duration-200 hover:opacity-95"
              aria-label="Download the Cybersecurity Risk Checklist"
            >
              {/* Left text background (498 + 74 = total 572) */}
              <div
                className="flex flex-nowrap text-nowrap justify-center"
              >
                <span
                  className="flex items-center text-center rounded-l-5xl outline outline-accent w-full backdrop-blur-sm px-8 "
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: 20,
                    lineHeight: '14px',
                    letterSpacing: 0,
                    color: '#2CA8DC',
                  }}
                >
                  Download the Cybersecurity Risk Checklist
                </span>
              </div>

              {/* Right pill (keeps total height 74) */}
              <div
                className="flex items-center justify-center aspect-square outline outline-accent rounded-r-5xl w-18 bg-accent"
              >
                <Image src="/images/download-icon.svg" alt="Download" width={40} height={40} />
              </div>
            </Link>
        </div>

        {/* Trusted Partners Section */}
        <div className="pt-16">
          <div className="flex items-center justify-center mb-8">
            <span className="text-white/60 text-sm font-medium">Trusted by 3,200+ partners</span>
            <div className="flex ml-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
          </div>
          
          {/* Partner Logos */}
          <div className="mx-auto flex flex-wrap items-center justify-center gap-16 max-w-full">
            <Image src="/images/sophos.svg" alt="SOPHOS" width={154} height={27.181} className="h-[27.181px] w-[154px] object-contain" />
            <Image src="/images/chartere-accountants-australia-logo-2-1024x236_1.svg" alt="CA ANZ" width={192} height={44} className="h-[44px] w-[192px] object-contain" />
            <Image src="/images/huntress_security.svg" alt="Huntress" width={142} height={35} className="h-[35px] w-[142px] object-contain" />
            <Image src="/images/Proofpoint_R_Logo-2048x417.svg" alt="Proofpoint" width={190} height={38.687} className="h-[38.687px] w-[190px] object-contain" />
         </div>
        </div>

      </div>
      {/* IMAGE LAYER */}
      <Image src="/images/hero-bg.svg" alt="Hero Background" fill style={{ objectFit: 'contain', objectPosition: 'center bottom' }} quality={90} priority className='-z-10 translate-y-10' />

      {/* ECLIPSE  BLUR */}
      <BlurElement 
          position="top" 
          positionValue="10%" 
          zIndex={-5}
          opacity={0.8}
          size="150px" 
          blur="60px"
          className="left-[35%] top-[2%] bg-amber-600" 
        />
      <BlurElement 
          position="top" 
          positionValue="10%" 
          zIndex={-5}
          opacity={0.3}
          size="650px" 
          blur="60px"
          className="right-[0] top-[2%] bg-amber-600" 
        />
        {/* binary image layer */}
        <div className="absolute -z-10 !h-[90dvh] w-3/10 right-0 top-0">
        <Image src="/images/binary.svg" alt="Eclipse Background" fill style={{ objectFit: 'contain' }} />
        </div>
    </section>
  );
}
