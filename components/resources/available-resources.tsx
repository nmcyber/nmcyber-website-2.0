'use client';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { RESOURCES_PAGE } from '@/utils/constants';
import BlurElement from '../shared/blur-element';

export default function AvailableResources() {
  const { availableResources } = RESOURCES_PAGE;

  return (
    <section>
      <div className="mx-auto w-full text-center space-y-8 sm:space-y-12">
        {/* Header Section */}
        <div className="space-y-4 sm:space-y-6">
          {/* Main Title */}
          <h2 className="gradient-heading2 py-2">{availableResources.title}</h2>
        </div>

        {/* Resources Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {availableResources.resources.map((resource, index) => (
            <div
              key={`resource-${resource.id}-${index}`}
              className="group rounded-2xl relative p-6 sm:p-8 space-y-4 bg-transparent border border-muted-foreground/50 hover:bg-primary-foreground hover:border-l-4 hover:border-l-accent transition-all duration-300"
            >
              {/* Resource Icon */}
              <div className="flex items-center justify-start w-16 h-16 border-1 border-l-accent/50 border-r-accent/50 border-t-accent/50 rounded-xl hover:bg-accent">
                <Image
                  src={resource.icon}
                  alt={resource.title}
                  width={32}
                  height={32}
                  className="object-contain mx-auto"
                />
              </div>

              {/* Resource Content */}
              <div className="space-y-4 text-center">
                <h3 className="text-white text-xl font-semibold font-plus-jakarta-sans text-left">
                  {resource.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed text-left">
                  {resource.description}
                </p>

                {/* Resource Items List */}
                <div className="space-y-2 text-left">
                  {resource.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-white text-sm text-left font-semibold">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <BlurElement
        position="top"
        positionValue="10%"
        zIndex={-5}
        opacity={0.3}
        size="250px"
        blur="100px"
        className="left-[0%] top-[0%]"
      />
    </section>
  );
}
