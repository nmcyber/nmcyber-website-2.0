import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/utils/constants";
import Image from "next/image";
import BlurElement from '../shared/blur-element';

export default function Testimonials() {
  return (
    <section className="relative py-20 px-6 z-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-start gap-4 text-blue-300/80 mb-6">
            <div className="h-px bg-accent/60 w-16"></div>
            <span className="text-accent/80 text-sm font-medium tracking-wider uppercase">TESTIMONIALS</span>
            <div className="h-px bg-accent/60 w-16"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-start">
            {TESTIMONIALS.title}
          </h2>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 ">
          {TESTIMONIALS.testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300"
            >
              <CardContent className="p-8 relative z-20">
                {/* Left Quote Mark */}
                <div className="absolute top-6 left-6 z-10">
                  <Image 
                    src={testimonial.leftcomma} 
                    alt="leftcomma" 
                    width={40} 
                    height={40}
                    className="opacity-70"
                  />
                </div>

                {/* Right Quote Mark */}
                <div className="absolute bottom-6 right-6 z-10">
                  <Image 
                    src={testimonial.rightcomma} 
                    alt="rightcomma" 
                    width={40} 
                    height={40}
                    className="opacity-70"
                  />
                </div>

                {/* Testimonial Text */}
                <div className="text-center px-8 py-4">
                  <blockquote className="text-lg text-white/95 leading-relaxed mb-6">
                    {testimonial.text}
                  </blockquote>
                  
                  {/* Author Information */}
                  <div className="text-left">
                    <div className="text-white/80 text-sm font-medium">
                      - {testimonial.author}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

     {/* Background Elements */}
     <div className="absolute inset-0 -z-10">
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
          className="translate-y-10"
        />

        {/* Map Background */}
        <div className="absolute right-0 top-15 h-[90dvh] w-3/10">
          <Image
            src="/images/map.svg"
            alt="map Background"
            width={1300}
            height={700}
            style={{ objectFit: 'contain' }}
          />
        </div>
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
        opacity={0.3}
        size="650px"
        blur="60px"
        className="right-0 top-[2%]"
      /> 
    </section>
  );
}