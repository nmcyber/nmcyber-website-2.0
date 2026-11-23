import { ArrowRight, ArrowUpRight, GraduationCap, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { QUICK_LINKS, SOCIAL_LINKS } from '@/utils/constants';

interface NavigationLinksProps {
  title: string;
  links: Array<{ label: string; href: string }>;
}

function NavigationLinks({ title, links }: NavigationLinksProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-[poppins] text-sm font-bold uppercase tracking-wider text-cyan-100">
          {title}
        </h3>
        <div className="mt-2 h-[2px] w-10 rounded-full bg-accent/80" />
      </div>

      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-1.5 font-[poppins] text-sm font-medium text-cyan-200/75 transition-colors duration-200 hover:text-cyan-100"
            >
              <span className="h-1 w-1 rounded-full bg-accent/0 transition-colors duration-200 group-hover:bg-accent" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterLogo() {
  return (
    <Link
      href="/"
      aria-label="Go to NMCYBER home page"
      className="inline-flex w-fit items-center gap-3.5 transition-opacity hover:opacity-90"
    >
      <Image
        src="/images/NMCyber.svg"
        alt="NMCYBER icon"
        width={64}
        height={64}
        className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14"
      />
      <span className="font-[poppins] text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
        NM<span className="text-accent">CYBER</span>
      </span>
    </Link>
  );
}

function DefenseQuote() {
  return (
    <figure className="max-w-md border-l-2 border-accent/60 pl-3.5">
      <blockquote className="font-[poppins] text-sm italic leading-relaxed text-cyan-100/90">
        &ldquo;It takes 20 years to build a reputation and a few minutes of cyber-incident to ruin
        it.&rdquo;
      </blockquote>
      <figcaption className="mt-1 font-[poppins] text-xs font-medium text-cyan-200/60">
        &mdash; Stephane Nappo
      </figcaption>
    </figure>
  );
}

function LaunchpadBanner() {
  return (
    <div className="w-full lg:space-y-2.5">
      <p className="hidden pl-4 font-[poppins] text-xs font-semibold uppercase tracking-wider text-cyan-200/80 lg:block">
        Our Product
      </p>

      <a
        href="https://cyberseclaunchpad.com/programmes"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex w-full items-center justify-between gap-3 rounded-2xl border border-accent/30 bg-accent/[0.08] px-4 py-3 backdrop-blur-md transition-all duration-200 hover:border-accent/60 hover:bg-accent/15 hover:shadow-[0_0_24px_-6px_rgba(34,211,238,0.4)] lg:h-11 lg:rounded-xl lg:px-3.5 lg:py-0"
      >
        <div className="flex min-w-0 items-center gap-3 lg:gap-2.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/35 bg-accent/15 text-accent shadow-[0_0_12px_-2px_rgba(34,211,238,0.3)] transition-transform duration-200 group-hover:scale-105 lg:h-7 lg:w-7 lg:rounded-lg">
            <GraduationCap className="h-5 w-5 lg:h-4 lg:w-4" />
          </span>

          <div className="flex min-w-0 flex-col text-left lg:flex-row lg:items-center lg:gap-2">
            <p className="shrink-0 font-[poppins] text-sm font-bold leading-tight text-cyan-100 sm:text-base lg:text-sm">
              CyberSec Launchpad
            </p>
            <span className="hidden text-accent/60 lg:inline" aria-hidden="true">
              &bull;
            </span>
            <p className="truncate font-[poppins] text-xs font-medium text-cyan-200/70">
              Explore training programmes
            </p>
          </div>
        </div>

        <span className="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-lg border border-accent/25 bg-slate-950/60 px-2 text-xs font-semibold text-accent transition-all duration-200 group-hover:border-accent/60 group-hover:bg-accent group-hover:text-slate-950 sm:px-3 lg:h-7">
          <span className="hidden font-[poppins] sm:inline">Explore</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </a>
    </div>
  );
}

function NewsletterForm() {
  return (
    <div className="w-full space-y-2.5">
      <label
        htmlFor="newsletter-email"
        className="block pl-4 font-[poppins] text-xs font-semibold uppercase tracking-wider text-cyan-200/80"
      >
        Subscribe to our newsletter
      </label>

      <form
        aria-label="Newsletter subscription"
        className="flex flex-col gap-2.5 sm:flex-row sm:items-center"
      >
        <div className="group flex h-11 flex-1 items-center rounded-xl border border-accent/25 bg-slate-950/70 px-3.5 backdrop-blur-md transition-all duration-200 focus-within:border-accent/60 focus-within:shadow-[0_0_24px_-6px_rgba(34,211,238,0.4)] hover:border-accent/40">
          <Mail className="h-4 w-4 shrink-0 text-accent/70 transition-colors group-focus-within:text-accent" />

          <Input
            id="newsletter-email"
            type="email"
            required
            placeholder="Enter your email"
            className="h-full flex-1 border-0 bg-transparent px-2.5 font-[poppins] text-sm text-cyan-100 shadow-none placeholder:text-cyan-200/45 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        <Button
          type="submit"
          aria-label="Subscribe to newsletter"
          className="group !h-11 w-full shrink-0 gap-1.5 rounded-xl bg-gradient-to-r from-[var(--button-gradient-start)] to-[var(--button-gradient-end)] px-5 font-[poppins] text-sm font-semibold text-white shadow-[0_0_20px_-6px_rgba(34,211,238,0.45)] transition-all duration-200 hover:opacity-95 hover:shadow-[0_0_24px_-4px_rgba(34,211,238,0.6)] sm:w-auto"
        >
          <span>Subscribe</span>
          <ArrowRight
            className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Button>
      </form>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-[poppins] text-sm font-bold uppercase tracking-wider text-cyan-100">
          Contact Info
        </h3>
        <div className="mt-2 h-[2px] w-10 rounded-full bg-accent/80" />
      </div>

      <div className="space-y-3 font-[poppins] text-sm font-medium text-cyan-200/75">
        <a
          href="tel:+8060008899"
          className="flex items-center gap-3 transition-colors hover:text-cyan-100"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent">
            <Phone className="h-3.5 w-3.5" />
          </span>
          <span>(+806) 000 88 99</span>
        </a>

        <a
          href="mailto:info@nmcyber.com.au"
          className="flex items-center gap-3 transition-colors hover:text-cyan-100"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent">
            <Mail className="h-3.5 w-3.5" />
          </span>
          <span className="break-all">info@nmcyber.com.au</span>
        </a>

        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent">
            <MapPin className="h-3.5 w-3.5" />
          </span>
          <span className="leading-relaxed">
            1811 Silverside Rd,
            <br />
            Wilmington, DE 19810, USA
          </span>
        </div>
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2.5 pt-1">
      {SOCIAL_LINKS.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent/25 bg-accent/[0.06] text-cyan-200/80 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent/15 hover:text-accent hover:shadow-[0_0_15px_-4px_rgba(34,211,238,0.45)]"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}

function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center justify-between gap-2.5 text-xs sm:flex-row">
      <p className="text-center font-[poppins] text-xs text-cyan-200/60 sm:text-left">
        © {currentYear} NMCYBER. All Rights Reserved.
      </p>

      <Link
        href="/terms-and-policies"
        className="whitespace-nowrap font-[poppins] text-cyan-200/75 transition-colors hover:text-cyan-100"
      >
        Terms & Policies
      </Link>
    </div>
  );
}

export default function Footer({ className = '' }: { className?: string }) {
  return (
    <footer
      className={cn(
        'relative z-30 mx-auto mt-16 w-full max-w-7xl px-4 pb-8 sm:mt-24 sm:px-6 lg:px-8',
        className
      )}
    >
      <div className="relative overflow-hidden rounded-3xl border border-accent/25 bg-accent/[0.04] backdrop-blur-md transition-colors duration-300 hover:border-accent/40">
        {/* Ambient Top Cyan Glow Line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

        <div className="relative z-10 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          {/* Mobile keeps exact vertical stack; Desktop locks into a balanced 2-row bento */}
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-8">
            {/* Row 1 Left: Logo + Vertically Centered Quote */}
            <div className="flex flex-col gap-5 sm:col-span-2 lg:col-start-1 lg:col-end-6 lg:row-start-1 lg:h-full">
              <FooterLogo />
              <div className="lg:flex lg:flex-1 lg:items-center">
                <DefenseQuote />
              </div>
            </div>

            {/* Mobile: directly under quote | Desktop Row 2 Right: aligned flush with NewsletterForm */}
            <div className="sm:col-span-2 lg:col-start-6 lg:col-end-13 lg:row-start-2 lg:self-end">
              <LaunchpadBanner />
            </div>

            {/* Mobile: under Launchpad | Desktop Row 2 Left: flush alongside Launchpad */}
            <div className="sm:col-span-2 lg:col-start-1 lg:col-end-6 lg:row-start-2 lg:self-end">
              <NewsletterForm />
            </div>

            {/* Row 1 Middle: Quick Links */}
            <div className="lg:col-start-6 lg:col-end-9 lg:row-start-1">
              <NavigationLinks title="Quick Links" links={QUICK_LINKS} />
            </div>

            {/* Row 1 Right: Contact Info + Social Icons */}
            <div className="space-y-5 lg:col-start-9 lg:col-end-13 lg:row-start-1">
              <ContactInfo />
              <SocialLinks />
            </div>
          </div>

          {/* Subtle Gradient Divider */}
          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

          {/* Bottom Bar */}
          <FooterBottom />
        </div>

        {/* Subtle Background Wave */}
        <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
          <Image
            src="/images/footer_wave.svg"
            alt=""
            fill
            className="object-cover object-bottom opacity-15"
          />
        </div>
      </div>
    </footer>
  );
}
