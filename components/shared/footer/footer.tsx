import Image from 'next/image';
import { cn } from '@/lib/utils';
import { PLATFORM_LINKS, QUICK_LINKS } from '@/utils/constants';
import { AwardsBadge } from './_components/awards-badge';
import { ContactInfo } from './_components/contact-info';
import { FooterBottom } from './_components/footer-bottom';
import { FooterLogo } from './_components/footer-logo';
import { NavigationLinks } from './_components/navigation-links';
import { NewsletterForm } from './_components/newsletter-form';
import { SocialLinks } from './_components/social-links';

export default function Footer({ className = '' }: { className?: string }) {
  return (
    <footer className={cn(`py-16 ${className} relative`)}>
      <div className="w-full flex justify-center">
        <div className="relative mx-4 md:mx-8 rounded-[56px] border border-white/10 bg-blue-500/5 backdrop-blur-sm overflow-hidden  hover:border-t-accent/50 hover:border-r-accent/50 hover:border-l-accent/50 transition-all duration-300 z-10">
          <div className="px-6 py-12 z-10 relative gap-10">
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
      </div>
    </footer>
  );
}
