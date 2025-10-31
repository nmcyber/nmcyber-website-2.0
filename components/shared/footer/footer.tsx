import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { PLATFORM_LINKS, QUICK_LINKS, SOCIAL_LINKS } from '@/utils/constants';

// Navigation Links Component
interface NavigationLinksProps {
  title: string;
  links: Array<{ label: string; href: string }>;
}

function NavigationLinks({ title, links }: NavigationLinksProps) {
  return (
    <div>
      <div className="mb-4 sm:mb-6">
        <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-white lg:sm:text-nowrap mb-2 sm:mb-4 leading-tight font-plus-jakarta-sans">
          {title}
        </span>
        <div className="mt-1 h-[2px] sm:h-[3px] w-12 sm:w-16 bg-accent rounded-full" />
      </div>
      <ul className="space-y-2 sm:space-y-3">
        {links.map((link, index) => (
          <li key={`${title}-${link.label}-${index}`}>
            <a
              href={link.href}
              className="text-xs sm:text-sm font-[Poppins] font-medium md:text-base text-muted-foreground hover:text-white transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Footer Logo Component
function FooterLogo() {
  return (
    <div className="flex gap-1 sm:gap-3 md:gap-5">
      {/* left */}
      <div className="flex-shrink-0">
        <Link href="/" className="relative" aria-label="go to home page">
          <Image
            src="/images/NMCyber.svg"
            alt="NMCyber icon"
            width={100}
            height={100}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 object-contain"
          />
        </Link>
      </div>

      {/* right */}
      <div className="flex-shrink-0">
        <Image
          src="/images/NMCyber_OPT.svg"
          alt="NMCyber logo"
          width={200}
          height={200}
          className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 lg:w-36 lg:h-18 xl:w-44 xl:h-22 object-contain"
        />
      </div>
    </div>
  );
}

// Newsletter Form Component
function NewsletterForm() {
  return (
    <div className="space-y-2">
      <span className="uppercase tracking-wider text-xs text-muted-foreground font-semibold lg:sm:text-nowrap mb-2 leading-tight font-plus-jakarta-sans">
        Subscribe to our newsletter
      </span>
      <div className="relative flex w-full sm:w-4/5">
        <Input
          type="email"
          placeholder="Enter your e-mail"
          className="flex-1 h-8 sm:h-10 bg-gray-800 border-gray-800 text-white pl-6 sm:pl-8 pr-0 rounded-xl sm:rounded-l-2xl rounded-r-none text-xs sm:text-sm border-r-0"
        />
        <Button
          size="sm"
          className="bg-accent hover:bg-accent/90 text-black px-2 py-1 rounded-r-xl sm:rounded-r-2xl rounded-l-none h-8 sm:h-10 border-l-0"
        >
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
        </Button>
        <Mail className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
      </div>
    </div>
  );
}

// Awards Badge Component
function AwardsBadge() {
  return (
    <div className="w-full max-w-[120px] sm:max-w-[150px]">
      <Image
        src={'/images/31st-Belmont-awards-2024.svg'}
        alt="Awards Badge"
        width={150}
        height={150}
        className="w-full h-auto object-contain"
      />
    </div>
  );
}

// Contact Info Component
function ContactInfo() {
  return (
    <div>
      <div className="mb-4 sm:mb-6">
        <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-white lg:sm:text-nowrap mb-2 sm:mb-4 leading-tight font-plus-jakarta-sans">
          Contact Info
        </span>
        <div className="mt-1 h-[2px] sm:h-[3px] w-12 sm:w-16 bg-accent rounded-full" />
      </div>
      <div className="space-y-2 sm:space-y-3">
        <div className="flex items-center gap-2 sm:gap-3">
          <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
          <span className="text-xs sm:text-sm font-[Poppins] font-medium text-gray-400">
            (+806) 000 88 99
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
          <span className="text-xs sm:text-sm font-[Poppins] font-medium text-gray-400 break-words">
            info@nmcyber.com.au
          </span>
        </div>

        <div className="flex items-start gap-2 sm:gap-3">
          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-accent mt-0.5 flex-shrink-0" />
          <div className="text-xs sm:text-sm font-[Poppins] font-medium text-gray-400">
            <span>1811 Silverside Rd,</span>
            <br />
            <span>Wilmington, DE 19810, USA</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Social Links Component
function SocialLinks() {
  return (
    <div className="flex gap-2 sm:gap-3 pt-2 sm:pt-4">
      {SOCIAL_LINKS.map((social) => {
        const Icon = social.icon;
        return (
          <Link
            key={social.href}
            href={social.href}
            className={`w-7 h-7 sm:w-8 sm:h-8 bg-secondary rounded-md flex items-center justify-center transition-colors ${social.className}`}
          >
            <Icon className="w-3 h-3 sm:w-4 sm:h-4 aspect-square text-white" />
          </Link>
        );
      })}
    </div>
  );
}

// Footer Bottom Component
function FooterBottom() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 items-center justify-center text-xs sm:text-sm">
      {/* Row 1: Copyright Text */}
      <div className="leading-[1.75] tracking-normal font-[Poppins] font-normal text-muted-foreground text-center sm:text-left">
        &copy; {currentYear} NMCYBER. All Rights Reserved
      </div>

      {/* Row 2: Terms & Policies */}
      <div className="flex items-center gap-2 sm:gap-6 text-nowrap justify-center">
        <a
          href="/terms-and-policies"
          className="leading-[1.75] font-[Poppins] font-normal text-muted-foreground hover:text-foreground/70 transition-colors"
        >
          Terms & Policies
        </a>
      </div>

      {/* Row 3: System Status */}
      <div className="flex items-center justify-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-2 sm:px-5 sm:py-3 text-accent backdrop-blur-sm">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full" />
          <span className="font-[Poppins] font-medium text-xs sm:text-sm">All Systems Normal</span>
        </div>
      </div>
    </div>
  );
}

// Main Footer Component
export default function Footer({ className = '' }: { className?: string }) {
  return (
    <footer
      className={cn(
        `mt-16 sm:mt-20 lg:mt-24 mx-auto ${className} relative z-30 container px-3 sm:px-4 md:px-6 lg:px-8`
      )}
    >
      <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-4xl border border-white/10 gradient-bg2 backdrop-blur-sm overflow-hidden hover:border-t-accent/50 hover:border-r-accent/50 hover:border-l-accent/50 transition-all duration-300 z-10">
        <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 z-10 relative">
          <div className="grid grid-cols-2 lg:grid-cols-9 gap-6 lg:gap-10">
            {/* Column 1: Company Info & Newsletter - Wider */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:col-span-3">
              <FooterLogo />
              <NewsletterForm />
              <AwardsBadge />
            </div>

            {/* Column 2: Quick Links */}
            <div className=" lg:col-span-2">
              <NavigationLinks title="Quick Links" links={QUICK_LINKS} />
            </div>

            {/* Column 3: Platform */}
            <div className=" lg:col-span-2">
              <NavigationLinks title="Platform" links={PLATFORM_LINKS} />
            </div>

            {/* Column 4: Contact Info & Social */}
            <div className="space-y-4 sm:space-y-6 lg:col-span-2">
              <ContactInfo />
              <SocialLinks />
            </div>
          </div>

          {/* Separator Line */}
          <div className="w-full h-[1px] sm:h-[2px] bg-gray-400 my-6 sm:my-8"></div>

          {/* Bottom Section */}
          <FooterBottom />
        </div>
        {/* Background inside the constrained container */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={'/images/footer_wave.svg'}
            alt="Footer Background"
            fill
            className="absolute bottom-0 left-0 w-full h-full object-cover opacity-30"
          />
        </div>
      </div>
    </footer>
  );
}
