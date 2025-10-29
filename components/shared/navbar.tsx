'use client';
import { Toggle } from '@radix-ui/react-toggle';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { COMPANY_INFO, NAVIGATION_WITH_SUBMENUS, SOCIAL_LINKS } from '@/utils/constants';

export default function NavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set());

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Reset expanded menus when closing
    if (isMobileMenuOpen) {
      setExpandedMenus(new Set());
    }
  };

  const toggleSubmenu = (menuName: string) => {
    setExpandedMenus((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(menuName)) {
        newSet.delete(menuName);
      } else {
        newSet.add(menuName);
      }
      return newSet;
    });
  };

  return (
    <>
      <nav className="flex flex-row h-20 w-full fixed items-center justify-between px-2 sm:px-4 z-30 backdrop-blur-sm sm:text-nowrap">
        {/* Logo */}
        <Link href="/" className="flex flex-row items-center justify-center h-full">
          <Image
            src="/images/NMCyber.svg"
            alt="NMCyber logo"
            width={110}
            height={110}
            quality={90}
            className="h-12 lg:h-14 w-fit"
          />
        </Link>

        {/* Desktop Navigation (from md and up) */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-5 xl:space-x-8">
          {NAVIGATION_WITH_SUBMENUS.map((item) => {
            const hasSubmenus = item.submenus && item.submenus.length > 0;
            return (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`nav-link transition-all px-3 md:px-2 lg:px-3 py-2 rounded flex items-center gap-1 ${
                    pathname === item.href
                      ? 'font-[Poppins] text-sm md:text-[13px] lg:text-base xl:text-lg font-semibold text-white shadow-[0px_2px_0px_0px_var(--color-accent)] bg-gradient-to-b from-transparent to-white/14 w-fit h-9 flex items-center justify-center'
                      : 'font-[Poppins] text-xs md:text-[13px] lg:text-sm xl:text-base font-normal text-muted-foreground hover:text-white hover:shadow-[0px_2px_0px_0px_var(--color-accent)]'
                  }`}
                >
                  {item.name}
                </Link>

                {/* Desktop Dropdown */}
                {hasSubmenus && (
                  <div className="absolute top-full left-0 mt-2 min-w-48 w-max max-w-80 bg-background/95 backdrop-blur-md border border-gray-200/30 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.submenus.map((submenu) => (
                        <Link
                          key={submenu.href}
                          href={submenu.href}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            pathname === submenu.href
                              ? 'text-white bg-accent/20 border-l-2 border-accent font-[Poppins] font-semibold'
                              : 'text-white hover:text-white hover:bg-white/10 font-[Poppins] font-medium'
                          }`}
                        >
                          <span className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-80 mt-1.5 flex-shrink-0"></span>
                            <span className="text-sm leading-relaxed">{submenu.name}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right side - Contact & Mobile Menu */}
        <div className="flex items-center space-x-1 ">
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
            <Menu className="w-6 h-6" aria-label="Menu" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background backdrop-blur-sm z-50 md:hidden overflow-hidden">
          <div className="flex justify-start h-full bg-additional-blury-blue relative">
            <div className="bg-background/95 backdrop-blur-sm w-full max-w-sm h-full flex flex-col relative z-10">
              {/* Menu Header */}
              <div className="border-b border-gray-200/20 px-4 py-2">
                <div className="flex flex-row items-center justify-between h-full">
                  <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center"
                  >
                    <Image
                      src="/images/NMCyber.svg"
                      alt="NMCyber logo"
                      width={60}
                      height={60}
                      quality={90}
                      className="h-6 w-fit"
                    />
                  </Link>
                  <button
                    type="button"
                    className="p-1 text-white hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close mobile navigation menu"
                  >
                    <X className="w-3 h-3" aria-label="Close menu" />
                  </button>
                </div>
              </div>

              {/* Navigation Menu */}
              <div className="flex flex-col py-2">
                {NAVIGATION_WITH_SUBMENUS.map((item) => {
                  const isExpanded = expandedMenus.has(item.name);
                  const hasSubmenus = item.submenus && item.submenus.length > 0;

                  return (
                    <div key={item.name}>
                      {/* Main Navigation Item */}
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          className={`transition-all py-2 px-4 rounded flex items-center justify-between ${
                            pathname === item.href
                              ? 'text-white bg-accent/20 border-l-4 border-accent font-[Poppins] font-semibold text-sm'
                              : 'text-muted-foreground hover:text-white hover:bg-white/10 font-[Poppins] font-semibold text-sm'
                          }`}
                          onClick={(e) => {
                            if (hasSubmenus) {
                              e.preventDefault();
                              toggleSubmenu(item.name);
                            } else {
                              setIsMobileMenuOpen(false);
                            }
                          }}
                        >
                          <span>{item.name}</span>
                        </Link>
                      </div>

                      {/* Submenu Items */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          hasSubmenus && isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        {hasSubmenus && (
                          <div className="py-2">
                            {item.submenus.map((submenu) => (
                              <Link
                                key={submenu.href}
                                href={submenu.href}
                                className={`block px-4 py-2 text-xs transition-colors ${
                                  pathname === submenu.href
                                    ? 'text-white bg-accent/20 border-l-2 border-accent font-[Poppins] font-semibold'
                                    : 'text-muted-foreground hover:text-white hover:bg-white/10 font-[Poppins] font-normal'
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <span className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-80 mt-1.5 flex-shrink-0"></span>
                                  <span className="text-sm leading-relaxed">{submenu.name}</span>
                                </span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Contact Information */}
              <div className="border-t border-gray-200/20 px-4 py-2">
                <h3 className="text-white font-[Poppins] font-semibold text-sm mb-2">Contact Us</h3>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Image
                      src="/images/phoneicon.svg"
                      alt="phoneicon"
                      width={14}
                      height={14}
                      className="w-3.5 h-3.5"
                    />
                    <span className="font-[poppins] text-xs">{COMPANY_INFO.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Image
                      src="/images/blue-email.svg"
                      alt="email"
                      width={14}
                      height={14}
                      className="w-3.5 h-3.5"
                    />
                    <span className="font-[poppins] text-xs">{COMPANY_INFO.email}</span>
                  </div>
                </div>
              </div>

              {/* Chatbot Section */}
              <div className="border-t border-gray-200/20 px-4 py-2">
                <h3 className="text-white font-[Poppins] font-semibold text-sm mb-2">Need Help?</h3>
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/chatbot.svg"
                    alt="chatbot"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <button
                    type="button"
                    className="text-muted-foreground hover:text-white transition-colors font-[poppins] text-xs hover:underline"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <span>Start a conversation</span>
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="border-t border-gray-200/20 px-4 py-2 mt-auto">
                <h3 className="text-white font-[Poppins] font-semibold text-sm mb-2">Follow Us</h3>
                <div className="flex gap-2">
                  {SOCIAL_LINKS.map((social) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        key={social.href}
                        href={social.href}
                        className={`w-8 h-8 bg-secondary rounded-md flex items-center justify-center transition-colors ${social.className}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Icon className="w-4 aspect-square text-white" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
