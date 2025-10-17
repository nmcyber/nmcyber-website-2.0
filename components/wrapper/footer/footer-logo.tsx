import Image from 'next/image';
import Link from 'next/link';

export function FooterLogo() {
  return (
    <div className="grid grid-cols-2 items-center gap-2">
      {/* left */}
      <div className="flex justify-start">
        <Link
          href="/"
          className="relative overflow-hidden -ml-15 -mt-5 w-[200px] sm:w-[220px] md:w-[240px] h-[100px] sm:h-[110px] md:h-[120px]"
          aria-label="go to home page"
        >
          <Image
            src="/images/NMCyber.svg"
            alt="NMCyber icon"
            width={200}
            height={100}
            className="object-top object-cover"
          />
        </Link>
      </div>

      {/* right） */}
      <div className="min-w-0 w-full h-full">
        <div className="flex items-baseline gap-1">
          <span className="text-white font-[Poppins] font-semibold text-[22px] sm:text-[26px] leading-none">
            NM
          </span>
          <span className="text-accent font-[Poppins] font-semibold text-[22px] sm:text-[26px] leading-none">
            CYBER
          </span>
        </div>
        <div className="w-fit mt-1 text-xs sm:text-sm text-white font-[Poppins] leading-snug text-center">
          <span>Turning Cyber Security</span>
          <span>Pains Into Gains</span>
        </div>
      </div>
    </div>
  );
}
