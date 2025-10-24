import Link from 'next/link';
import { SOCIAL_LINKS } from '@/utils/constants';

export function SocialLinks() {
  return (
    <div className="flex gap-3 pt-4">
      {SOCIAL_LINKS.map((social) => {
        const Icon = social.icon;
        return (
          <Link
            key={social.href}
            href={social.href}
            className={`w-8 h-8 bg-secondary rounded-md flex items-center justify-center transition-colors ${social.className}`}
          >
            <Icon className="w-4 aspect-square text-white" />
          </Link>
        );
      })}
    </div>
  );
}
