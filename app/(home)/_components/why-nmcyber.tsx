import { Compass, MessagesSquare, Repeat2, TrophyIcon } from 'lucide-react';
import { SectionLabel } from '@/components/shared/section-label';
import { HOME_WHY_NMCYBER } from '@/utils/constants';
import styles from './why-nmcyber.module.css';

const pillarIcons = { discover: Compass, transform: MessagesSquare, thrive: Repeat2 };

export default function WhyNMCyber() {
  const { label, title, pillars, scenario } = HOME_WHY_NMCYBER;
  return (
    <section id="why-nmcyber" className="px-4" aria-labelledby="why-nmcyber-title">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[11fr_9fr] lg:gap-16">
        <div>
          <SectionLabel className="justify-center text-sky-300">{label}</SectionLabel>
          <h2
            id="why-nmcyber-title"
            className="font-plus-jakarta-sans my-8 max-w-[19ch] text-center text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl"
          >
            {title}
          </h2>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {pillars.map(({ name, description, id }) => {
              const Icon = pillarIcons[id];
              return (
                <li
                  key={id}
                  className="group grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 py-4 text-left sm:gap-5"
                >
                  <span className="grid size-14 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent group-hover:border-accent/50 group-hover:bg-accent/20 group-hover:shadow-[0_0_18px_var(--tw-shadow-color)] group-hover:shadow-accent/30 motion-safe:transition-[background-color,border-color,box-shadow] motion-safe:duration-200">
                    <Icon className="size-7 sm:size-8" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          data-nosnippet=""
          className={`${styles.panel} ${styles.reveal} overflow-hidden rounded-3xl border border-accent/30 shadow-xl`}
        >
          <div
            className={`${styles.cover} relative isolate overflow-hidden px-6 pb-6 pt-7 sm:px-9`}
          >
            <p className="flex items-center gap-2 text-sm font-semibold text-sky-200">
              <TrophyIcon aria-hidden="true" className="size-4 shrink-0" />
              <span>
                {scenario.label} · {scenario.status}
              </span>
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
              <span className="sr-only">{scenario.label}: </span>
              {scenario.title}
            </h3>
          </div>
          <dl className="px-6 py-7 sm:px-9">
            {scenario.steps.map(({ label, detail }) => (
              <div
                key={label}
                className="relative pb-6 border-l border-accent/30 pl-5 before:absolute before:-left-[3.5px] before:top-2 before:size-1.5 before:rounded-full before:bg-accent"
              >
                <dt className="font-semibold text-foreground">{label}</dt>
                <dd className="mt-1 leading-relaxed text-muted-foreground">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
