'use client';
import { Mail } from 'lucide-react';
import Image from 'next/image';
import { RESOURCES_PAGE } from '@/utils/constants';
export default function ContactUs() {
  const { contactUs } = RESOURCES_PAGE;

  return (
    <section>
      <div className="mx-auto max-w-6xl p-12 sm:p-20 gradient-bg1 opacity-90 backdrop-blur-[108.8px] border border-white/10 rounded-2xl  hover:border-t-accent/50 hover:border-r-accent/50 hover:border-l-accent/50 transition-all duration-300">
        <div className="space-y-4 sm:space-y-6">
          {/* Subtitle */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px bg-accent/60 w-16" />
            <span className="text-accent/80 text-sm font-bold font-plus-jakarta-sans uppercase">
              {contactUs.subtitle}
            </span>
            <div className="h-px bg-accent/60 w-16" />
          </div>

          {/* Main Title */}
          <h2 className="gradient-heading2 py-2 text-center">{contactUs.title}</h2>
          {/* Description and Email CTA */}
          <div className="mx-auto space-y-4">
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed text-center">
              {contactUs.description}
            </p>
            <div className="flex items-start justify-center gap-1 text-center">
              <Mail className="w-6 h-6 text-accent flex-shrink-0" />
              <p className="text-white text-sm sm:text-base font-medium">
                Contact us at <span className="font-semibold text-accent">info@nmcyber.com.au</span>{' '}
                to learn more or request access to premium resources.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Chatbot Icon using CSS variables */}
      <div className="absolute z-10 right-0 bottom-0 scale-35 md:scale-100">
        <Image
          src={contactUs.icon}
          alt="Icon"
          width={60}
          height={60}
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}
