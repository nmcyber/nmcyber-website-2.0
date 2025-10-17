import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactInfo() {
  return (
    <div>
      <div className="mb-6">
        <span
          className="text-xl  font-semibold text-white lg:sm:text-nowrap mb-4 sm:text-2xl leading-tight"
          style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
        >
          Contact Info
        </span>
        <div className="mt-1 h-[3px] w-16 bg-accent rounded-full" />
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Phone className="w-4 h-4 text-accent" />
          <span
            className="text-sm font-[Poppins] font-medium"
            style={{ color: 'hsl(240, 5%, 64.9%)' }}
          >
            (+806) 000 88 99
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="w-4 h-4 text-accent" />
          <span
            className="text-sm font-[Poppins] font-medium"
            style={{ color: 'hsl(240, 5%, 64.9%)' }}
          >
            contactinfo@nm.com
          </span>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-accent mt-0.5" />
          <div
            className="text-sm font-[Poppins] font-medium"
            style={{ color: 'hsl(240, 5%, 64.9%)' }}
          >
            <span>1811 Silverside Rd,</span>
            <span>Wilmington, DE 19810, USA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
