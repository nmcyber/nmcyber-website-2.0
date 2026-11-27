import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SERVICE_DIRECTORY, SERVICES_PAGE } from '@/utils/constants';

export default function ServicesHero() {
  const hero = SERVICES_PAGE.servicesHero;

  return (
    <section id="hero" className="isolate overflow-hidden">
      <div className="mx-auto w-full max-w-7xl space-y-6 text-center sm:space-y-8">
        <div className="flex items-center justify-center gap-3">
          <span aria-hidden="true" className="h-px w-16 bg-accent/60" />
          <span className="font-plus-jakarta-sans text-sm font-bold uppercase leading-[14px] text-cyan-200">
            {hero.subtitle}
          </span>
          <span aria-hidden="true" className="h-px w-16 bg-accent/60" />
        </div>
        <h1 className="gradient-heading1 services-heading mx-auto max-w-[22ch] text-balance py-2">
          {hero.title}
        </h1>
        <p className="mx-auto max-w-4xl text-lg leading-relaxed text-white/80 sm:text-xl">
          {hero.description}
        </p>
        <Button
          asChild
          variant={null}
          className="has-[>svg]:px-5 py-5 h-auto rounded-5xl bg-gradient-to-r from-[var(--button-gradient-start)] to-[#087396] font-[family-name:var(--font-poppins)] font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white transition-[--tw-gradient-from,--tw-gradient-to] duration-300 ease-in-out motion-reduce:transition-none hover:from-[var(--button-gradient-start-hover)] hover:to-[#076786]"
        >
          <a href={`#${SERVICE_DIRECTORY.id}`}>
            <span className="leading-4">{hero.action}</span>
            <ArrowDown aria-hidden="true" className="size-4" />
          </a>
        </Button>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={hero.backgroundHero}
          alt=""
          fill
          className="hidden object-cover object-top opacity-60 md:block"
        />
        <div className="absolute inset-y-0 left-0 w-3/10">
          <Image src={hero.backgroundBinary} alt="" fill className="object-contain opacity-40" />
        </div>
      </div>
    </section>
  );
}
