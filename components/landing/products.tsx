import { Check } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { PRODUCTS } from '@/utils/constants';
import { BlurElement } from '../shared/blur-element';

export default function Products() {
  return (
    <section>
      <div className="max-w-7xl mx-auto w-full px-4">
        {/* Section Label */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-4">
            <div className="h-px bg-accent/60 w-16"></div>
            <span className="text-accent/80 text-sm font-bold font-[Poppins] leading-[14px] uppercase">
              PRODUCTS
            </span>
            <div className="h-px bg-accent/60 w-16"></div>
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="gradient-heading3 mb-16">{PRODUCTS.title}</h2>
          <p className="text-[15px] sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-[2.16]">
            {PRODUCTS.description}
          </p>
        </div>

        {/* Services Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 lg:gap-2 mb-4">
          {PRODUCTS.services.map((service, _index) => (
            <Card
              key={service.id}
              className="bg-transparent border-0 rounded-lg hover:border-accent/50 transition-all duration-300 group p-6"
            >
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/40 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={service.icon}
                    alt={`${service.name} icon`}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <span
                  className="text-lg  font-semibold text-white lg:sm:text-nowrap mb-4 sm:text-2xl leading-tight"
                  style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
                >
                  {service.name}
                </span>
              </CardHeader>

              <CardContent className="pt-0 text-left">
                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-left">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="leading-tight text-sm sm:text-base lg:sm: font-[Poppins] font-semibold text-white">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center items-center justify-center">
          <Button
            size="sm"
            className="text-accent-foreground text-[18px] font-[Poppins] font-medium h-auto w-full rounded-2xl px-1 py-1 bg-gradient-to-r from-[#045B7D] to-[#64CDF6] sm:w-auto sm:px-10"
          >
            Read All
          </Button>
        </div>
      </div>

      {/*Background */}

      <BlurElement
        position="top"
        positionValue="10%"
        zIndex={-5}
        opacity={0.4}
        size="300px"
        blur="100px"
        className="right-[20%] top-[30%]"
      />

      <BlurElement
        position="top"
        positionValue="10%"
        zIndex={-5}
        opacity={0.4}
        size="300px"
        blur="100px"
        className="left-[20%] top-[75%]"
      />
      {/*LoopBackground */}
      <Image
        src={PRODUCTS.background}
        alt="Background"
        className="hidden md:block absolute left-0 top-3/4 -translate-y-1/2 w-1/3 h-auto opacity-30"
        priority
        width={400}
        height={300}
        sizes="(max-width: 768px) 50vw, 33vw"
        style={{ objectFit: 'contain' }}
      />
    </section>
  );
}
