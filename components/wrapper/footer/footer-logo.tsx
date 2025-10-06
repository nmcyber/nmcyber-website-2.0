import Image from 'next/image';
export function FooterLogo() {
  return (
    <div className="grid grid-cols-2 items-center gap-2">
      {/* left */}
      <div className="flex justify-start">
        <div className="relative overflow-hidden -ml-15 -mt-5 w-[200px] sm:w-[220px] md:w-[240px] h-[100px] sm:h-[110px] md:h-[120px]">
          <Image
            src="/images/NMCyber.svg"
            alt="NMCyber icon"
            width={200}
            height={100}
            className="object-top object-cover"
          />
        </div>
      </div>

      {/* right） */}
      <div className="min-w-0 w-full h-full">
        <div className="flex items-baseline gap-1">
          <span className="text-white font-semibold text-[22px] sm:text-[26px] leading-none">
            NM
          </span>
          <span className="text-accent font-semibold text-[22px] sm:text-[26px] leading-none">
            CYBER
          </span>
        </div>
        <div className="mt-1 text-xs sm:text-sm text-white/90 leading-snug">
          <div>Turning Cyber Security</div>
          <div>Pains Into Gains</div>
        </div>
      </div>
    </div>
  );
}
