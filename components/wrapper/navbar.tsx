'use client';
import { Toggle } from '@radix-ui/react-toggle';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { COMPANY_INFO, MAIN_NAVIGATION } from '@/utils/constants';

export default function NavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="flex h-24 min-w-full fixed items-center justify-between px-4 z-30 backdrop-blur-sm sm:text-nowrap">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center h-full mt-5 md:mt-13">
          <Image
            src="/images/NMCyber.svg"
            alt="NMCyber logo"
            width={226}
            height={193}
            quality={90}
            className="h-8 md:h-full w-auto transform scale-165"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {MAIN_NAVIGATION.slice(0, -1).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-all px-4 py-2 rounded ${
                pathname === item.href
                  ? 'text-white shadow-[0px_2px_0px_0px_var(--color-accent)] bg-gradient-to-b from-transparent to-white/14 w-24 h-9 flex items-center justify-center'
                  : 'text-muted-foreground hover:text-white hover:shadow-[0px_2px_0px_0px_var(--color-accent)]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right side - Contact & Mobile Menu */}
        <div className="flex items-center space-x-1">
          <div className="relative">
            {/* Desktop: show icon + number, no toggle */}
            <div className="hidden md:flex items-center gap-1 text-muted-foreground">
              <Image
                src="/images/phoneicon.svg"
                alt="phoneicon"
                width={22}
                height={22}
                className="w-6 h-6 sm:w-[22px] sm:h-[22px]"
              />
              <span className="text-sm font-medium">{COMPANY_INFO.phone}</span>
            </div>

            {/* Mobile: toggle controls showing the number inside the button */}
            <Toggle
              pressed={showPhone}
              onPressedChange={setShowPhone}
              className="md:hidden border border-accent text-white hover:bg-accent/10 rounded-full h-9 px-3 data-[state=on]:bg-accent/10"
              aria-label="Show phone number"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <Image
                  src="/images/phoneicon.svg"
                  alt="phoneicon"
                  width={22}
                  height={22}
                  className="w-6 h-6 sm:w-[22px] sm:h-[22px]"
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
                {MAIN_NAVIGATION.slice(0, -1).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-base font-medium transition-all py-3 px-4 rounded ${
                      pathname === item.href
                        ? 'text-white bg-accent/20 border-l-4 border-accent'
                        : 'text-muted-foreground hover:text-white hover:bg-white/10'
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
