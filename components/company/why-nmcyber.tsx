import{Accordion, AccordionItem, AccordionTrigger, AccordionContent} from "@/components/ui/accordion";
import { WHY_NMCYBER } from "@/utils/constants";
import Image from "next/image";
import { BlurElement } from "../shared/blur-element";

export default function WhyNMCyber() {


  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-primary-green-80/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="text-left mb-4">
          <div className="inline-flex items-center gap-4">
            <div className="h-px bg-accent/60 w-16"></div>
            <span className="text-accent/80 text-sm font-medium tracking-wider uppercase">WHY NMCYBER</span>
            <div className="h-px bg-accent/60 w-16"></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Side - Content Area (2/3 width) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-white gradient-text">
              {WHY_NMCYBER.subtitle}
            </h2>

            {/* Description */}
            <p className="text-xl text-muted-foreground leading-relaxed">
              {WHY_NMCYBER.description}
            </p>

            {/* Accordion Items */}
            <Accordion type="single" collapsible className="space-y-4">
              {WHY_NMCYBER.accordionItems.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border border-border/50 rounded-md bg-card/50 backdrop-blur-sm">
                  <AccordionTrigger className="px-6 py-4 text-left hover:bg-accent/5">
                    <div className="flex items-center gap-4">
                      <span className="w-6 h-6 bg-accent rounded-full text-white flex items-center justify-center transition-transform">+</span>
                      <span className="text-accent text-lg font-medium">{item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-muted-foreground border-t border-border/30">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Side - Graphics Area (1/3 width) */}
          <div className="lg:col-span-1 translate-x-60 relative overflow-visible hidden md:block">
            {/* Background Pattern */}
            <div className="absolute inset-0">
              <Image
                src={WHY_NMCYBER.graphics.looper}
                alt="Background loop pattern"
                width={792}
                height={763}
                className="w-full h-full object-contain object-right"
              />
            </div>

            {/* Main Graphics Container */}
            <div className="relative z-10 flex flex-col items-center justify-center space-y-8 min-h-[500px]">
              {/* Drone Graphic */}
              <div className="relative">
                <Image
                  src={WHY_NMCYBER.graphics.drone}
                  alt="Security drone"
                  width={188}
                  height={258}
                  className="w-48 h-48 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blur Elements for specific cards */}

      <BlurElement 
        position="top" 
        positionValue="10%" 
        zIndex={-5}
        opacity={0.6}
        size="300px" 
        blur="80px"
        className="right-[5%] top-[20%]" 
      />
    </section>
  );
}