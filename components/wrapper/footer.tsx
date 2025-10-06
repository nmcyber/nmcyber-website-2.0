import Image from 'next/image';
import { cn } from '@/lib/utils';
import { PLATFORM_LINKS, QUICK_LINKS } from '@/utils/constants';
import { AwardsBadge } from './footer/awards-badge';
import { ContactInfo } from './footer/contact-info';
import { FooterBottom } from './footer/footer-bottom';
import { FooterLogo } from './footer/footer-logo';
import { NavigationLinks } from './footer/navigation-links';
import { NewsletterForm } from './footer/newsletter-form';
import { SocialLinks } from './footer/social-links';

export default function Footer({ className = '' }: { className?: string }) {
  return (
    <footer className={cn(`py-16 ${className} relative`)}>
      {/* Outer rounded container to match design */}
      <div className="relative mx-4 md:mx-8 rounded-[56px] border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
        <div className="container mx-auto px-6 py-12 z-10 relative gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Column 1: Company Info & Newsletter */}
            <div className="space-y-6">
              <FooterLogo />
              <NewsletterForm />
              <AwardsBadge />
            </div>

            {/* Column 2: Quick Links */}
            <NavigationLinks title="Quick Links" links={QUICK_LINKS} />

            {/* Column 3: Platform */}
            <NavigationLinks title="Platform" links={PLATFORM_LINKS} />

            {/* Column 4: Contact Info & Social */}
            <div className="space-y-6">
              <ContactInfo />
              <SocialLinks />
            </div>
          </div>

          {/* Bottom Section */}
          <FooterBottom />
        </div>
      </div>
      {/* {Background} */}
      <div className="absolute item-center bottom-25 left-25 z-5">
        <Image src={'/images/footer_wave.svg'} alt="Footer Background" width={1000} height={1000} />
      </div>
    </footer>
  );
}
