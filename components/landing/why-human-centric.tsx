import { BrainCircuit, type LucideIcon, ShieldCheck, Users, Zap } from 'lucide-react';
import { WHY_US_CONTENT } from '@/utils/constants';

const iconMap: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  zap: Zap,
  users: Users,
  brain: BrainCircuit,
};

export default function WhyHumanCentric() {
  return (
    <section id="why-human-centric" className="relative py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          <div className="flex flex-col justify-between gap-6 text-center lg:col-span-5 lg:text-left">
            <div className="space-y-4 sm:space-y-5">
              <h2 className="gradient-heading1 mx-auto max-w-[320px] text-3xl font-extrabold leading-[1.2] tracking-tight sm:max-w-2xl sm:text-5xl lg:mx-0 lg:text-[2.65rem] xl:text-5xl">
                {WHY_US_CONTENT.heading}
              </h2>

              <p className="mx-auto max-w-md text-sm font-medium leading-relaxed text-cyan-200/90 sm:text-base md:text-lg lg:mx-0">
                {WHY_US_CONTENT.subheading}
              </p>
            </div>

            <ul className="mx-auto grid w-full max-w-md grid-cols-2 gap-4 sm:gap-5 lg:mx-0 lg:max-w-none">
              {WHY_US_CONTENT.stats.map((stat, index) => (
                <li
                  key={stat.label}
                  className="flex flex-col justify-between rounded-2xl border border-accent/25 bg-accent/[0.06] p-5 text-left backdrop-blur-md"
                >
                  <div>
                    <p
                      className={`font-[poppins] text-2xl font-extrabold sm:text-3xl ${
                        index === 0 ? 'text-accent' : 'text-cyan-100'
                      }`}
                    >
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-xs leading-snug text-cyan-200/80 sm:text-sm">
                      {stat.label}
                    </p>
                  </div>

                  <a
                    href={stat.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-[11px] text-cyan-200/60 underline transition-colors hover:text-cyan-100"
                  >
                    Source: {stat.sourceLabel}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: 4 Equal-Height Glassmorphic Mini-Cards */}
          <div className="lg:col-span-7">
            <ul className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {WHY_US_CONTENT.cards.map((card) => {
                const IconComponent = iconMap[card.icon] ?? ShieldCheck;
                return (
                  <li
                    key={card.title}
                    className="group relative flex flex-col justify-center overflow-hidden rounded-2xl border border-accent/25 bg-accent/[0.06] p-5 backdrop-blur-md transition-all duration-300 hover:border-accent/50 hover:bg-accent/[0.1] hover:shadow-[0_0_30px_-8px_rgba(34,211,238,0.25)] sm:p-6"
                  >
                    {/* Subtle Top Cyan Glow Line */}
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/15 text-accent shadow-[0_0_12px_-2px_rgba(34,211,238,0.3)] transition-transform duration-300 group-hover:scale-105">
                        <IconComponent className="h-5 w-5" />
                      </div>

                      <div className="space-y-1.5 text-left">
                        <h3 className="font-[poppins] text-base font-bold tracking-tight text-cyan-100 sm:text-lg">
                          {card.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-cyan-200/80 sm:text-sm">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
