import Image from 'next/image';
import { PRODUCTS_PAGE } from '@/utils/constants';

export default function ProductsHero() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl text-center space-y-8 sm:space-y-12">
        {/* Header Section */}
        <div className="space-y-4 sm:space-y-6">
          {/* Subtitle */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px bg-accent/60 w-16"></div>
            <span className="text-accent/80 text-sm font-bold font-[Poppins] leading-[14px] uppercase">
              {PRODUCTS_PAGE.hero.subtitle}
            </span>
            <div className="h-px bg-accent/60 w-16"></div>
          </div>

          {/* Main Title */}
          <h1 className="gradient-heading1 py-2">{PRODUCTS_PAGE.hero.title}</h1>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto">
          <p className="mx-auto font-normal text-center text-muted-foreground text-base leading-[1.89] sm:text-xl md:leading-[1.78]">
            {PRODUCTS_PAGE.hero.description}
          </p>
        </div>
      </div>

      {/* Hero Background Image */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        {/* Hero Net Background Image */}
        <Image
          src="/images/hero-bg.svg"
          alt="Hero Background"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center top',
            opacity: 0.5,
          }}
          quality={90}
          priority
          className="translate-y-1/5 scale-[1.25]"
        />
      </div>
    </section>
  );
}
