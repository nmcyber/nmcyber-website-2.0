import { Check } from 'lucide-react';
import { PRODUCTS_PAGE } from '@/utils/constants';
import { BlurElement } from '../shared/blur-element';

export default function WhyChooseNMCyberProducts() {
  return (
    <section className="relative">
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
