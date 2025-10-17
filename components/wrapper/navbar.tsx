'use client';
import { Toggle } from '@radix-ui/react-toggle';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { COMPANY_INFO, MAIN_NAV_LINKS } from '@/utils/constants';

export default function NavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="flex h-24 min-w-full fixed items-center justify-between px-2 sm:px-4 z-30 backdrop-blur-sm sm:text-nowrap">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center h-full mt-5 md:mt-13">
          <Image
            src="/images/NMCyber.svg"
            alt="NMCyber logo"
            width={110}
            height={110}
            quality={90}
            className="h-8 md:h-full w-auto"
          />
        </Link>

        {/* Desktop Navigation (from md and up) */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-5 xl:space-x-8">
          {MAIN_NAV_LINKS.slice(0, -1).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`nav-link transition-all px-3 md:px-2 lg:px-3 py-2 rounded ${
                pathname === item.href
                  ? 'font-[Poppins] text-sm md:text-[13px] lg:text-base xl:text-lg font-semibold text-white shadow-[0px_2px_0px_0px_var(--color-accent)] bg-gradient-to-b from-transparent to-white/14 w-fit h-9 flex items-center justify-center'
                  : 'font-[Poppins] text-xs md:text-[13px] lg:text-sm xl:text-base font-normal text-muted-foreground hover:text-white hover:shadow-[0px_2px_0px_0px_var(--color-accent)]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right side - Contact & Mobile Menu */}
        <div className="flex items-center space-x-1 md:ml-4 lg:ml-8">
          <div className="relative">
            {/* Desktop: show icon + number, no toggle */}
            <div className="hidden md:flex outline outline-accent rounded-5xl px-2 md:px-3 lg:px-4 py-1.5 md:py-2 items-center gap-1 text-muted-foreground">
              <Image
                src="/images/phoneicon.svg"
                alt="phoneicon"
                width={22}
                height={22}
                className="w-6 h-6 sm:w-[24px] sm:h-[24px]"
              />
              <span className="font-[poppins] text-nowrap text-sm md:text-[13px] lg:text-base xl:text-xl font-medium">
                {COMPANY_INFO.phone}
              </span>
            </div>

            {/* Mobile: toggle controls showing the number inside the button */}
            <Toggle
              pressed={showPhone}
              onPressedChange={setShowPhone}
              className="md:hidden outline outline-accent text-white font-[poppins] hover:bg-accent/10 rounded-5xl h-9 px-1 data-[state=on]:bg-accent/10"
              aria-label="Show phone number"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <Image
                  src="/images/phoneicon.svg"
                  alt="phoneicon"
                  width={22}
                  height={22}
                  className="w-4 h-4 md:w-[20px] md:h-[20px]"
                />
                {showPhone && <span className="text-sm font-medium">{COMPANY_INFO.phone}</span>}
              </div>
            </Toggle>
          </div>
          {/* Mobile Hamburger Button moved next to phone toggle */}
          <button
            type="button"
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={toggleMobileMenu}
          >
            <Image
              src="/images/navhamberg_icon.svg"
              alt="Menu"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-24 bg-black/80 backdrop-blur-sm z-50 md:hidden">
          <div className="flex justify-start">
            <div className="bg-background/95 backdrop-blur-sm">
              <div className="flex flex-col space-y-2 py-4">
                {MAIN_NAV_LINKS.slice(0, -1).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`nav-link transition-all py-3 px-4 rounded ${
                      pathname === item.href
                        ? 'text-white bg-accent/20 border-l-4 border-accent font-[Poppins] font-semibold text-xl'
                        : 'text-muted-foreground hover:text-white hover:bg-white/10 font-[Poppins] font-normal text-base'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
