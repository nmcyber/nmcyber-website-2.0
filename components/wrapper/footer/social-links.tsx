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
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.href}
            href={social.href}
            className={`w-8 h-8 bg-secondary rounded-md flex items-center justify-center transition-colors ${social.className}`}
          >
            <Icon className="w-4 h-4 text-white" />
          </a>
        );
      })}
    </div>
  );
}
