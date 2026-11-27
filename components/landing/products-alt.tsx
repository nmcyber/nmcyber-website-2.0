'use client';

import {
  ArrowUpRight,
  ExternalLink,
  GraduationCap,
  Laptop,
  type LucideIcon,
  ShieldCheck,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PRODUCTS_ALT_CONTENT } from '@/utils/constants';

const iconMap: Record<string, LucideIcon> = {
  graduation: GraduationCap,
  laptop: Laptop,
  shield: ShieldCheck,
};

export default function ProductsAlt() {
  const [activeId, setActiveId] = useState(PRODUCTS_ALT_CONTENT.features[0]?.id ?? 'programmes');

  const activeFeature =
    PRODUCTS_ALT_CONTENT.features.find((feature) => feature.id === activeId) ??
    PRODUCTS_ALT_CONTENT.features[0];

  if (!activeFeature) return null;

  return (
    <section id="products" className="relative py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl space-y-4 text-center sm:mb-14">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/25 bg-accent/[0.06] px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
            <span className="text-xs font-medium tracking-wide text-cyan-200 sm:text-sm">
              {PRODUCTS_ALT_CONTENT.badge}
            </span>
          </div>

          <h2 className="gradient-heading1 mx-auto max-w-2xl py-1 text-3xl font-extrabold leading-[1.2] tracking-tight sm:text-5xl lg:text-6xl">
            {PRODUCTS_ALT_CONTENT.heading}
          </h2>

          <p className="mx-auto max-w-2xl text-sm font-medium leading-relaxed text-cyan-200/85 sm:text-base md:text-lg">
            {PRODUCTS_ALT_CONTENT.subheading}
          </p>
        </div>

        {/* Main Interactive Showcase Container */}
        <div className="relative overflow-hidden rounded-3xl border border-accent/25 bg-accent/[0.04] p-4 backdrop-blur-md sm:p-6 lg:p-8">
          {/* Subtle Ambient Top Edge Glow */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-10">
            {/* Interactive Browser Thumbnail Preview (First on mobile, Right on desktop) */}
            <div className="lg:order-2 lg:col-span-7">
              <div className="group relative overflow-hidden rounded-2xl border border-accent/30 bg-slate-950/90 shadow-[0_0_40px_-12px_rgba(34,211,238,0.25)] transition-all duration-300 hover:border-accent/55">
                {/* Mock Browser Chrome Bar */}
                <div className="flex items-center justify-between border-b border-accent/20 bg-slate-900/90 px-3.5 py-2.5 sm:px-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                  </div>

                  {/* Dynamic URL Pill */}
                  <a
                    href={activeFeature.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex max-w-[200px] items-center gap-1.5 truncate rounded-full border border-accent/20 bg-accent/[0.08] px-3 py-1 text-[11px] font-medium text-cyan-200/90 transition-colors hover:border-accent/50 hover:text-white sm:max-w-xs sm:text-xs"
                  >
                    <span className="truncate">{activeFeature.displayUrl}</span>
                    <ExternalLink className="h-3 w-3 shrink-0 text-accent" />
                  </a>

                  <div className="hidden w-10 sm:block" />
                </div>

                {/* Unobstructed Website Screenshot Thumbnail with Crossfade Transition */}
                <a
                  href={activeFeature.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${activeFeature.title}`}
                  className="relative block aspect-[16/10] w-full overflow-hidden bg-slate-950"
                >
                  <div className="relative h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                    {PRODUCTS_ALT_CONTENT.features.map((feature) => {
                      const isActive = feature.id === activeFeature.id;
                      return (
                        <Image
                          key={feature.id}
                          src={feature.image}
                          alt={isActive ? `${feature.title} preview` : ''}
                          aria-hidden={!isActive}
                          fill
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className={`object-cover object-top transition-all duration-500 ease-out ${
                            isActive
                              ? 'z-10 scale-100 opacity-100'
                              : 'pointer-events-none z-0 scale-[1.03] opacity-0'
                          }`}
                        />
                      );
                    })}
                  </div>
                </a>
              </div>
            </div>

            {/* Interactive Controls & CTAs (Below thumbnail on mobile, Left on desktop) */}
            <div className="flex flex-col justify-between space-y-5 lg:order-1 lg:col-span-5 lg:space-y-6">
              {/* Mobile Segmented Pill Tabs */}
              <div className="grid grid-cols-3 gap-2 lg:hidden">
                {PRODUCTS_ALT_CONTENT.features.map((feature) => {
                  const isActive = feature.id === activeFeature.id;
                  return (
                    <button
                      key={feature.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveId(feature.id)}
                      className={`rounded-xl border px-2.5 py-2.5 text-center text-xs font-semibold transition-all duration-200 ${
                        isActive
                          ? 'border-accent/60 bg-accent/15 text-cyan-100 shadow-[0_0_15px_-4px_rgba(34,211,238,0.4)]'
                          : 'border-accent/15 bg-accent/[0.04] text-cyan-200/70 hover:border-accent/35'
                      }`}
                    >
                      {feature.shortLabel}
                    </button>
                  );
                })}
              </div>

              {/* Mobile Active Feature Copy Card */}
              <div className="rounded-2xl border border-accent/25 bg-accent/[0.06] p-4 text-left lg:hidden">
                <h3 className="font-[poppins] text-base font-bold text-cyan-100">
                  {activeFeature.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-cyan-200/80">
                  {activeFeature.description}
                </p>
              </div>

              {/* Desktop Stacked Interactive Cards */}
              <div className="hidden space-y-3 lg:block">
                {PRODUCTS_ALT_CONTENT.features.map((feature) => {
                  const IconComponent = iconMap[feature.icon] ?? ShieldCheck;
                  const isActive = feature.id === activeFeature.id;

                  return (
                    <button
                      key={feature.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveId(feature.id)}
                      className={`group relative w-full overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 ${
                        isActive
                          ? 'border-accent/60 bg-accent/[0.12] shadow-[0_0_25px_-8px_rgba(34,211,238,0.35)]'
                          : 'border-accent/15 bg-accent/[0.03] hover:border-accent/35 hover:bg-accent/[0.07]'
                      }`}
                    >
                      {/* Active Left Indicator Bar */}
                      <span
                        className={`absolute inset-y-3 left-0 w-1 rounded-r-full bg-accent transition-opacity duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                      />

                      <div className="flex items-start gap-3.5 pl-1">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
                            isActive
                              ? 'border-accent/50 bg-accent/20 text-accent shadow-[0_0_12px_-2px_rgba(34,211,238,0.35)]'
                              : 'border-accent/20 bg-accent/[0.08] text-cyan-200/70 group-hover:text-accent'
                          }`}
                        >
                          <IconComponent className="h-5 w-5" />
                        </div>

                        <div className="space-y-1">
                          <h3
                            className={`font-[poppins] text-base font-bold tracking-tight transition-colors ${
                              isActive ? 'text-cyan-100' : 'text-white/80 group-hover:text-cyan-100'
                            }`}
                          >
                            {feature.title}
                          </h3>
                          <p
                            className={`text-xs leading-relaxed transition-colors sm:text-sm ${
                              isActive ? 'text-cyan-200/90' : 'text-cyan-200/60'
                            }`}
                          >
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Dual Action Buttons (Matching Hero CTA Proportions) */}
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Button
                  asChild
                  className="group !h-11 w-full rounded-5xl bg-gradient-to-r from-[var(--button-gradient-start)] to-[var(--button-gradient-end)] px-5 shadow-[0_0_20px_-6px_rgba(34,211,238,0.45)] transition-all duration-200 hover:opacity-95 hover:shadow-[0_0_24px_-4px_rgba(34,211,238,0.6)] sm:flex-1"
                >
                  <a
                    href={PRODUCTS_ALT_CONTENT.cta.primaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-1.5 font-[poppins] text-sm font-semibold whitespace-nowrap text-white"
                  >
                    {PRODUCTS_ALT_CONTENT.cta.primary}
                    <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="group !h-11 w-full rounded-5xl border border-accent/40 bg-accent/[0.06] px-5 text-accent backdrop-blur-md transition-all duration-200 hover:border-accent hover:bg-accent/15 hover:text-white sm:flex-1"
                >
                  <a
                    href={PRODUCTS_ALT_CONTENT.cta.secondaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-1.5 font-[poppins] text-sm font-semibold whitespace-nowrap"
                  >
                    {PRODUCTS_ALT_CONTENT.cta.secondary}
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-accent transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
