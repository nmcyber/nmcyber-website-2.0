import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { TESTIMONIALS } from '@/utils/constants';
import BlurElement from '../shared/blur-element';
import SpotlightCard from '../ui/SpotlightCard';

export default function Testimonials() {
  
  return (
    <section className='outline-0 outline-amber-500'>
      <div className="max-w-7xl mx-auto outline-0 outline-lime-500">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-start gap-4 text-blue-300/80 mb-6">
            <div className="h-px bg-accent/60 w-16"></div>
            <span className="text-accent/80 text-sm font-medium tracking-wider uppercase">
              TESTIMONIALS
            </span>
            <div className="h-px bg-accent/60 w-16"></div>
          </div>
          <h2 className="gradient-heading text-left">
            {TESTIMONIALS.title}
          </h2>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 ">
          {TESTIMONIALS.testimonials.map((testimonial) => (

            <SpotlightCard className="!rounded-2xl custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">

            <Card
              key={testimonial.id}
              className="relative h-full bg-white/5 backdrop-blur-[2px] border border-white/10 rounded-2xl p-8 hover:border-t-accent/50 hover:border-r-accent/50 hover:border-l-accent/50 transition-all duration-300"
            >
              <CardContent className="p-8 relative z-20">
                {/* Left Quote Mark */}
                <div className="absolute top-4 left-4 z-10">
                  <Image
                    src={testimonial.leftcomma}
                    alt="leftcomma"
                    width={50}
                    height={50}
                    className="opacity-70"
                  />
                </div>

                {/* Right Quote Mark */}
                <div className="absolute bottom-4 right-4 z-10">
                  <Image
                    src={testimonial.rightcomma}
                    alt="rightcomma"
                    width={50}
                    height={50}
                    className="opacity-70"
                  />
                </div>

                {/* Testimonial Text */}
                <div className="px-16 py-8">
                  <blockquote className="text-lg text-white/95 leading-relaxed mb-6 text-justify">
                    {testimonial.text}
                  </blockquote>

                  {/* Author Information */}
                  <div className="text-left">
                    <div className="text-white/80 text-sm font-medium">- {testimonial.author}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            </SpotlightCard>
          ))}
        </div>
      </div>

        {/* Net Background Image */}
        <Image
          src="/images/hero-bg.svg"
          alt="Net Background"
          width={1300}
          height={700}
          style={{
            objectFit: 'contain',
            objectPosition: 'center bottom',
          }}
          quality={90}
          priority
          className="absolute right-0 -z-10 translate-y-10 opacity-40"
        />
      
        {/* Map Background */}
        <div className="absolute right-0 -z-10 top-15 h-[90dvh] outline-0 outline-fuchsia-500 w-3/10">
          <Image
            src="/images/map.svg"
            alt="map Background"
            width={1300}
            height={700}
            style={{ objectFit: 'contain' }}
          />
        </div>

      {/* Blur Elements */}
      <BlurElement
        position="top"
        positionValue="10%"
        zIndex={-5}
        opacity={0.8}
        size="150px"
        blur="60px"
        className="left-[25%] top-[5%]"
      />
      <BlurElement
        position="top"
        positionValue="10%"
        zIndex={-5}
        opacity={0.07}
        size="650px"
        blur="60px"
        className="right-0 top-[2%]"
      />
    </section>
  );
}
