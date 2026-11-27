import { Compass, MessagesSquare, Repeat2, TrophyIcon } from 'lucide-react';
import { SectionLabel } from '@/components/shared/section-label';
import styles from './why-nmcyber.module.css';

const pillars = [
  {
    name: 'Discover',
    icon: Compass,
    description:
      'We look at how your people handle security decisions and where the next step feels unclear.',
  },
  {
    name: 'Transform',
    icon: MessagesSquare,
    description: 'Your team practises those decisions with scenarios drawn from the work they do.',
  },
  {
    name: 'Thrive',
    icon: Repeat2,
    description:
      'We help your team turn what they practise into routines they can use when work gets busy.',
  },
];

// Temporary example for the design preview, pending an approved client story.
const example = [
  {
    label: 'The challenge',
    detail:
      'A supplier emails new bank details just before a payment run. The finance team needs a clear way to check the request.',
  },
  {
    label: 'The session',
    detail:
      'Staff walk through the request together, practise calling the supplier on a known number and agree who can put the payment on hold.',
  },
  {
    label: 'The takeaway',
    detail: 'A short verification checklist the team can keep beside its payment approvals.',
  },
];

export default function WhyNMCyber() {
  return (
    <section id="why-nmcyber" className="px-4" aria-labelledby="why-nmcyber-title">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[11fr_9fr] lg:gap-16">
        <div>
          <SectionLabel className="justify-center">Why NMCyber</SectionLabel>
          <h2
            id="why-nmcyber-title"
            className="font-plus-jakarta-sans my-8 max-w-[19ch] text-center text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl"
          >
            Security training for the decisions your people make
          </h2>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {pillars.map(({ name, description, icon: Icon }) => (
              <li
                key={name}
                className="group grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 py-4 text-left sm:gap-5"
              >
                <span className="grid size-14 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent group-hover:border-accent/50 group-hover:bg-accent/20 group-hover:shadow-[0_0_18px_var(--tw-shadow-color)] group-hover:shadow-accent/30 motion-safe:transition-[background-color,border-color,box-shadow] motion-safe:duration-200 sm:size-14">
                  <Icon className="size-7 sm:size-8" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <article
          className={`${styles.panel} ${styles.reveal} overflow-hidden rounded-3xl border border-accent/30 shadow-xl`}
        >
          <div
            className={`${styles.cover} relative isolate overflow-hidden px-6 pb-6 pt-7 sm:px-9`}
          >
            <p className="flex items-center gap-2 text-sm font-semibold text-accent">
              <TrophyIcon aria-hidden="true" className="size-4 shrink-0" />
              <span>Success Case · AI-generated draft</span>
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
              When a supplier changes bank details
            </h3>
          </div>
          <dl className="px-6 py-7 sm:px-9">
            {example.map(({ label, detail }) => (
              <div
                key={label}
                className="relative pb-6 border-l border-accent/30 pl-5 before:absolute before:-left-[3.5px] before:top-2 before:size-1.5 before:rounded-full before:bg-accent"
              >
                <dt className="font-semibold text-foreground">{label}</dt>
                <dd className="mt-1 leading-relaxed text-muted-foreground">{detail}</dd>
              </div>
            ))}
          </dl>
        </article>
      </div>
    </section>
  );
}
