import { Check } from "lucide-react";
import { WHY_HUMAN_CENTRIC } from "@/utils/constants";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { BlurElement } from "../shared/blur-element";

export default function WhyHumanCentric() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Row - 2 columns */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Column 1: Text Content */}
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="p-0 space-y-8">
              <h2 className="text-4xl md:gradient-text md:text-5xl">
                {WHY_HUMAN_CENTRIC.title}
              </h2>
              <div className="space-y-6">
                <p className="mx-auto text-base text-muted-foreground sm:text-lg lg:max-w-5xl">
                  {WHY_HUMAN_CENTRIC.description}
                </p>
                <p className="mx-auto text-base text-muted-foreground sm:text-lg lg:max-w-5xl">
                  {WHY_HUMAN_CENTRIC.explanation}
                </p>
              </div>
            </CardContent>
            <BlurElement 
              position="top" 
              positionValue="10%" 
              zIndex={-5}
              opacity={0.8}
              size="150px" 
              blur="60px"
              className="left-[35%] top-[2%]" 
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
          </Card>

          {/* Column 2: Human Head Graphic */}
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="p-0 flex items-center justify-center">
              <Image
                src={WHY_HUMAN_CENTRIC.human_head.image}
                alt={WHY_HUMAN_CENTRIC.human_head.title}
                width={1252}
                height={856}
                className="object-contain"
              />
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row - 2 columns */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Column 3: Video Thumbnail */}
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="p-0">
              <div className="relative group cursor-pointer">
                <Image
                  src={WHY_HUMAN_CENTRIC.video.image}
                  alt={WHY_HUMAN_CENTRIC.video.title}
                  width={710}
                  height={521}
                  className="rounded-[20px] outline outline-accent object-cover"
                />
                {/* video play icon */}
                <div className="absolute inset-0 bg-black/40 rounded-[20px] flex items-center justify-center group-hover:bg-black/50 transition-colors">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-[20px]"></div>
              </div>
            </CardContent>
          </Card>

          {/* Column 4: Benefits List */}
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="p-0 space-y-6">
              <p className="mx-auto text-base text-muted-foreground sm:text-lg lg:max-w-5xl">
                {WHY_HUMAN_CENTRIC.intro}
              </p>
              <div className="space-y-4">
                {WHY_HUMAN_CENTRIC.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-xl font-semibold sm:text-[22px]">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}