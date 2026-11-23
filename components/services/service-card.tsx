import {
  ArrowUpRight,
  BookOpen,
  FileSearch,
  type LucideIcon,
  Radar,
  ScanLine,
  ShieldCheck,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { SERVICE_DIRECTORY } from '@/utils/constants';

const iconMap: Record<string, LucideIcon> = {
  scan: ScanLine,
  shield: ShieldCheck,
  radar: Radar,
  education: BookOpen,
  research: FileSearch,
  people: Users,
};

type Service = (typeof SERVICE_DIRECTORY.services)[number];

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? ShieldCheck;

  return (
    <article
      id={service.id}
      tabIndex={-1}
      aria-labelledby={`${service.id}-title`}
      className="group relative scroll-mt-24 overflow-hidden rounded-2xl border border-accent/25 bg-accent/[0.06] p-5 backdrop-blur-md target:border-accent target:bg-accent/[0.1] hover:border-accent/70 hover:shadow-[0_0_20px_-4px_var(--color-accent)] motion-safe:transition-[border-color,box-shadow] motion-safe:duration-300 motion-safe:ease-in-out sm:row-span-3 sm:grid sm:grid-rows-subgrid sm:gap-y-0 sm:p-6 lg:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 motion-safe:transition-opacity motion-safe:duration-300 motion-safe:ease-in-out"
      />
      <div className="flex items-center gap-4 self-start">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/15 text-accent motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out motion-safe:group-hover:scale-105">
          <Icon aria-hidden="true" className="size-5" />
        </span>
        <h3
          id={`${service.id}-title`}
          className="font-[family-name:var(--font-poppins)] text-base font-bold tracking-tight text-cyan-100 sm:text-lg"
        >
          {service.name}
        </h3>
      </div>
      <div className="mt-6">
        <p className="font-[family-name:var(--font-poppins)] text-xl font-semibold leading-snug text-white sm:text-2xl">
          {service.question}
        </p>
        <p className="mt-3 max-w-prose text-base leading-relaxed text-cyan-200/80">
          {service.description}
        </p>
      </div>
      <Link
        href={{ ...SERVICE_DIRECTORY.enquiryDestination, query: { service: service.id } }}
        className="mt-3 inline-flex min-h-11 items-center gap-1.5 justify-self-start self-end rounded-sm font-[family-name:var(--font-poppins)] text-sm font-semibold text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <span>
          {SERVICE_DIRECTORY.enquiryLabel} {service.name.toLowerCase()}
        </span>
        <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
      </Link>
    </article>
  );
}
