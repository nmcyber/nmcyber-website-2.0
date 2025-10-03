import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#', className: 'hover:bg-blue-600' },
  { icon: Twitter, href: '#', className: 'hover:bg-blue-400' },
  {
    icon: Instagram,
    href: '#',
    className: 'bg-[var(--color-secondary-pink-50)] hover:bg-[var(--color-secondary-pink-60)]',
  },
  { icon: Linkedin, href: '#', className: 'hover:bg-blue-700' },
];

export function SocialLinks() {
  return (
    <div className="flex gap-3 pt-4">
      {socialLinks.map((social,idx) => {
        const Icon = social.icon;
        return ( // replace 'key' with 'idx' as key requires unique requirement
          <a
          key={`${social.label ?? 'social'}-${idx}`}
          href={social.href}
          className={`w-8 h-8 bg-secondary rounded-md flex items-center justify-center transition-colors ${social.className}`}
          aria-label={social.label ?? 'social link'}
        >
          <Icon className="w-4 h-4" />
        </a>
        );
      })}
    </div>
  );
}
