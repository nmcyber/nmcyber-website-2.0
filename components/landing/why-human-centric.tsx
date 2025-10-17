import { Check } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { WHY_HUMAN_CENTRIC } from '@/utils/constants';
import { BlurElement } from '../shared/blur-element';

export default function WhyHumanCentric() {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl space-y-6 sm:space-y-10">
        {/* Top Row - 2 columns */}
        <div className="grid lg:grid-cols-2 gap-9 mb-16">
          {/* Column 1: Text Content */}
          <div className="col-span-1 p-0 space-y-9">
            <h2 className="gradient-heading2 py-2">{WHY_HUMAN_CENTRIC.title}</h2>
            <div className="space-y-6">
              <p className="mx-auto text-base font-normal leading-[2.16] text-muted-foreground sm:text-xl lg:max-w-5xl">
                {WHY_HUMAN_CENTRIC.description}
              </p>
              <p className="mx-auto text-base font-normal leading-[2.16] text-muted-foreground sm:text-xl lg:max-w-5xl">
                {WHY_HUMAN_CENTRIC.explanation}
              </p>
            </div>
            <BlurElement
              position="top"
              positionValue="10%"
              zIndex={-5}
              opacity={0.5}
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
          </div>

          {/* Column 2: Human Head Graphic */}
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="w-full flex items-center justify-center scale-170 md:scale-200 items-left">
              <Image
                src={WHY_HUMAN_CENTRIC.human_head.image}
                alt={WHY_HUMAN_CENTRIC.human_head.title}
                width={1252}
                height={856}
                className="object-contain w-full h-auto transform -translate-x-[6%] -translate-y-[-20%] md:-translate-x-[8%] md:-translate-y-[-10%]"
              />
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row - 2 columns */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {/* Column 3: Video Thumbnail */}
          <div className="col-span-1 h-full">
            <Card className="bg-transparent border-none shadow-none h-full hover:border-t-accent/50 hover:border-r-accent/50 hover:border-l-accent/50 transition-all duration-300">
              <div className="relative mx-auto h-full">
                <div className="relative h-full group">
                  <iframe
                    src={WHY_HUMAN_CENTRIC.video.url}
                    title={WHY_HUMAN_CENTRIC.video.title}
                    allow="encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full rounded-[20px]"
                  />
                  {/* <div className="absolute inset-0 rounded-[20px] pointer-events-none border-t-2 border-r-2 border-l-2 border-t-transparent border-r-transparent border-l-transparent group-hover:border-t-accent/50 group-hover:border-r-accent/50 group-hover:border-l-accent/50 transition-all duration-300" /> */}
                </div>
              </div>
            </Card>
          </div>

          {/* Column 4: Benefits List */}
          <div className="col-span-1 h-full">
            <Card className="bg-transparent border-none shadow-none h-full">
              <CardContent className="p-0 space-y-6 h-full">
                <p className="mx-auto text-base font-normal leading-[2.16] text-muted-foreground sm:text-xl lg:max-w-5xl">
                  {WHY_HUMAN_CENTRIC.intro}
                </p>
                <div className="space-y-6">
                  {WHY_HUMAN_CENTRIC.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-4">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-semibold text-white leading-[1.7] sm:text-[22px] lg:max-w-5xl">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
