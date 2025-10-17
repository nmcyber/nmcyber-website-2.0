import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { PRICING_PLANS } from '@/utils/constants';
import BlurElement from '../shared/blur-element';
import { Badge } from '../ui/badge';

export default function PricePlans() {
  return (
    <section>
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 text-blue-300/80">
            <div className="h-px bg-accent/60 w-16"></div>
            <span className="text-accent/80 text-sm font-bold font-plus-jakarta-sans leading-[14px] uppercase">
              PRICE & PLANS
            </span>
            <div className="h-px bg-accent/60 w-16"></div>
          </div>

          <h2 className="gradient-heading2 mt-5 text-4xl md:text-6xl font-bold leading-tight">
            {PRICING_PLANS.title}
          </h2>
        </div>

        {/* Plans */}
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {PRICING_PLANS.plans.map((pkg) => {
            const popular = pkg.popular;
            return (
              <Card
                key={pkg.name}
                className={[
                  'relative rounded-2xl bg-transparent backdrop-blur-sm transition-transform duration-200 outline outline-accent',
                  popular
                    ? 'ring-1 ring-blue-400/30 border-blue-400/50 bg-gradient-to-b from-blue-500/15 to-blue-900/0 shadow-[0_10px_40px_-10px_rgba(59,130,246,0.45)] md:scale-105'
                    : 'border-white/10 hover:border-blue-400/40 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.25)]',
                ].join(' ')}
              >
                {popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--button-gradient-start)] to-[var(--button-gradient-end)] text-white outline outline-accent shadow">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center">
                  <span className="text-base font-bold text-white lg:text-nowrap mb-4 sm:text-xl leading-tight font-plus-jakarta-sans">
                    {pkg.name}
                  </span>
                  <p className="mt-1 text-muted-foreground font-medium text-sm">{pkg.bestFor}</p>
                  <div className="mt-4 text-5xl md:text-6xl font-extrabold text-white">
                    <span className="align-top text-2xl mr-1">
                      {pkg.price.startsWith('$') ? '$' : ''}
                    </span>
                    {pkg.price.replace('$', '')}
                    <span className="ml-2 align-baseline text-lg font-medium text-white lg:text-nowrap mb-4 sm:text-2xl leading-tight font-plus-jakarta-sans">
                      {pkg.frequency}
                    </span>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="mb-8 space-y-4">
                    {pkg.features.map((feature: string) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                        <p className="text-sm font-semibold text-white sm:text-base">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="sm"
                    className={[
                      'w-full transition-all duration-300 font-[Poppins]',
                      popular
                        ? 'rounded-5xl bg-gradient-to-r from-[var(--button-gradient-start)] to-[var(--button-gradient-end)] text-white hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 hover:from-[#034b73] hover:to-[#4fbeeb]'
                        : 'rounded-5xl outline outline-accent text-white hover:scale-105',
                    ].join(' ')}
                    variant={popular ? 'default' : 'outline'}
                  >
                    {pkg.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom link */}
        <div className="mt-12 text-center">
          <Button
            variant="ghost"
            className="h-auto px-0 font-[Poppins] text-accent hover:text-accent/80 hover:bg-transparent group"
          >
            {PRICING_PLANS.compareText}
            <ArrowRight className="ml-2 h-4 w-4 translate-x-0 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        {/* World Map Image */}
        <Image
          src="/images/world_map.svg"
          alt="World Map"
          width={412}
          height={393}
          style={{
            objectFit: 'contain',
            objectPosition: 'center bottom',
          }}
          quality={90}
          priority
          className="absolute top-6 left-20"
        />
      </div>
      {/* Blur Elements */}
      <BlurElement
        position="top"
        positionValue="10%"
        zIndex={-5}
        opacity={0.4}
        size="250px"
        blur="60px"
        className="left-[20%] top-[5%]"
      />
      <BlurElement
        position="top"
        positionValue="10%"
        zIndex={-5}
        opacity={0.5}
        size="300px"
        blur="60px"
        className="right-[20%] top-[40%]"
      />
    </section>
  );
}
