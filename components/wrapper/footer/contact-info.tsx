import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactInfo() {
  return (
    <div>
      <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Phone className="w-4 h-4 text-cyan-400" />
          <span className="text-sm" style={{ color: 'hsl(240, 5%, 64.9%)' }}>
            (+806) 000 88 99
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="w-4 h-4 text-cyan-400" />
          <span className="text-sm" style={{ color: 'hsl(240, 5%, 64.9%)' }}>
            contactinfo@nm.com
          </span>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
          <div className="text-sm" style={{ color: 'hsl(240, 5%, 64.9%)' }}>
            <div>1811 Silverside Rd,</div>
            <div>Wilmington, DE 19810, USA</div>
          </div>
        </div>
      </div>
    </div>
  );
}
