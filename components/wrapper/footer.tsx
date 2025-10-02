import { cn } from '@/lib/utils';
import { AwardsBadge } from './footer/awards-badge';
import { ContactInfo } from './footer/contact-info';
import { FooterBottom } from './footer/footer-bottom';
import { FooterLogo } from './footer/footer-logo';
import { NavigationLinks } from './footer/navigation-links';
import { NewsletterForm } from './footer/newsletter-form';
import { SocialLinks } from './footer/social-links';

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact Us', href: '#' },
];

const platformLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact Us', href: '#' },
];

export default function Footer({ className = '' }: { className?: string }) {
  return (
    <footer className={cn(`py-16 ${className} relative dark:bg-background bg-background`)}>
      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Company Info & Newsletter */}
          <div className="space-y-6">
            <FooterLogo />
            <NewsletterForm />
            <AwardsBadge />
          </div>

          {/* Column 2: Quick Links */}
          <NavigationLinks title="Quick Links" links={quickLinks} />

          {/* Column 3: Platform */}
          <NavigationLinks title="Platform" links={platformLinks} />

          {/* Column 4: Contact Info & Social */}
          <div className="space-y-6">
            <ContactInfo />
            <SocialLinks />
          </div>
        </div>

        {/* Bottom Section */}
        <FooterBottom />
      </div>
      <div className="absolute inset-0 bg-additional-blury-blue z-0 w-full h-full" />
    </footer>
  );
}
