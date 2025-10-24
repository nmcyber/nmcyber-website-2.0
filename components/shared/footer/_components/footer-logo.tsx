import Image from 'next/image';
import Link from 'next/link';

export function FooterLogo() {
  return (
    <div className="grid grid-cols-2 items-center">
      {/* left */}
      <div className="flex justify-start">
        <Link href="/" className="relative" aria-label="go to home page">
          <Image
            src="/images/NMCyber.svg"
            alt="NMCyber icon"
            width={110}
            height={110}
            className="object-top object-cover"
          />
        </Link>
      </div>

      {/* right） */}
      <div className="min-w-0 w-full h-full">
        <div className="flex items-baseline gap-1">
          <Image
            src="/images/NMCyber_OPT.svg"
            alt="NMCyber logo"
            width={200}
            height={100}
            className="object-top object-cover"
          />
        </div>
      </div>
    </div>
  );
}
