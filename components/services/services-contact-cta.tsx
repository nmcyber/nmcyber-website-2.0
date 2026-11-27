import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CONTACT_CTA_LINK, SERVICE_DIRECTORY } from '@/utils/constants';

export default function ServicesContactCTA() {
  const { contact } = SERVICE_DIRECTORY;

  return (
    <div className="mt-10 flex flex-col items-start gap-6 rounded-3xl border border-accent/25 bg-accent/[0.04] p-6 sm:flex-row sm:items-center sm:justify-between lg:p-8">
      <div>
        <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-cyan-100">
          {contact.title}
        </h2>
        <p className="mt-2 text-base text-cyan-200/80">{contact.description}</p>
      </div>
      <Button
        asChild
        variant="outline"
        className="has-[>svg]:px-5 group h-11 rounded-5xl border-accent/40 bg-accent/[0.06] px-5 font-[family-name:var(--font-poppins)] font-semibold text-cyan-100 hover:bg-accent/15 hover:text-white motion-reduce:transition-none"
      >
        <Link href={CONTACT_CTA_LINK.href}>
          <span className="leading-4">{contact.action}</span>
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </Link>
      </Button>
    </div>
  );
}
