'use client';
import { ExternalLink, Mail, Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import {
  COMPANY_INFO,
  CONTACT_CTA_LINK,
  NAVIGATION_WITH_SUBMENUS,
  SOCIAL_LINKS,
} from '@/utils/constants';

export default function NavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set());

  const backdropRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closingAnimation = useRef<Animation | null>(null);

  const closeMobileMenu = () => {
    if (closingAnimation.current) return;

    const finishClosing = () => {
      closingAnimation.current = null;
      setIsMobileMenuOpen(false);
      setExpandedMenus(new Set());
    };

    const panel = panelRef.current;
    if (!panel || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finishClosing();
      return;
    }

    const backdrop = backdropRef.current;

    if (backdrop) {
      const style = getComputedStyle(backdrop);
      backdrop.animate([{ opacity: style.opacity }, { opacity: 0 }], {
        duration: 240,
        easing: 'ease-in-out',
        fill: 'forwards',
      });
    }

    const animation = panel.animate(
      [{ transform: getComputedStyle(panel).transform }, { transform: 'translateX(-100%)' }],
      { duration: 240, easing: 'ease-in-out', fill: 'forwards' }
    );

    closingAnimation.current = animation;
    animation.onfinish = finishClosing;
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
      <nav className="h-18 w-full fixed px-4 z-30 backdrop-blur-sm sm:text-nowrap">
        {/* Logo */}
        <div className="flex h-full justify-between mx-auto w-full max-w-7xl">
          <Link href="/" className="px-4 md:px-0 flex items-center justify-center h-full font-bold">
            <Image
              src="/images/NMCyber.svg"
              alt="NMCyber logo"
              width={110}
              height={110}
              quality={90}
              className="size-7 md:size-12 mr-2"
            />
            NM<span className="text-accent">Cyber</span>
          </Link>

          {/* Desktop Navigation (from md and up) */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-5 xl:space-x-8">
            {NAVIGATION_WITH_SUBMENUS.map((item) => {
              const hasSubmenus = item.submenus && item.submenus.length > 0;
              return (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className={`nav-link font-[Poppins] text-[13px] transition-[color,background-color,box-shadow] px-2 lg:px-3 py-2 rounded flex items-center gap-1 ${
                      pathname === item.href
                        ? 'lg:text-base xl:text-lg font-semibold text-white shadow-[0px_2px_0px_0px_var(--color-accent)] bg-gradient-to-b from-transparent to-white/14 w-fit h-9 justify-center'
                        : 'lg:text-sm xl:text-base font-normal text-muted-foreground hover:text-white hover:shadow-[0px_2px_0px_0px_var(--color-accent)]'
                    }`}
                  >
                    {item.name}
                    {item.external && <ExternalLink className="size-3.5" />}
                  </Link>

                  {/* Desktop Dropdown */}
                  {hasSubmenus && (
                    <div className="absolute top-full left-0 mt-2 min-w-48 bg-background/95 backdrop-blur-md border border-gray-200/30 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-[opacity,visibility] duration-200 z-50">
                      <div className="py-2">
                        {item.submenus.map((submenu) => (
                          <Link
                            key={submenu.name}
                            href={submenu.href}
                            target={submenu.external ? '_blank' : undefined}
                            rel={submenu.external ? 'noopener noreferrer' : undefined}
                            className={`block px-4 py-2 text-sm text-white font-[Poppins] transition-colors ${
                              submenu.href !== item.href && pathname === submenu.href
                                ? 'bg-accent/20 border-l-2 border-accent font-semibold'
                                : 'hover:bg-white/10 font-medium'
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <span className="size-1.5 bg-accent rounded-full opacity-80 shrink-0"></span>
                              <span className="leading-relaxed">{submenu.name}</span>
                              {submenu.external && (
                                <ExternalLink
                                  aria-hidden="true"
                                  className="size-3.5 shrink-0 self-center"
                                />
                              )}
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
          <div className="flex items-center gap-2">
            <Link
              href={CONTACT_CTA_LINK.href}
              className="
              flex items-center justify-center gap-2
              rounded-lg p-2 text-white
              transition-[background-color,filter,box-shadow] duration-300 ease-out
              hover:bg-white/10
              size-12

              sm:rounded-full sm:px-6
              sm:w-auto
              sm:bg-gradient-to-r
              sm:from-[var(--button-gradient-start)]
              sm:to-[var(--button-gradient-end)]

              md:px-10 md:text-lg
              md:hover:brightness-110
              md:hover:shadow-lg
            "
            >
              <i className="sm:hidden size-6 grid place-items-center">
                <Phone color="white" className="size-5 text-accent shrink-0" />
              </i>
              <span className="hidden sm:block">{CONTACT_CTA_LINK.text}</span>
            </Link>

            {/* Mobile Hamburger Button moved next to phone toggle */}
            <button
              type="button"
              className="grid place-items-center md:hidden size-12 text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Toggle mobile menu"
            >
              <Menu className="size-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          data-mobile-menu-overlay=""
          className="fixed inset-0 z-50 overflow-y-auto overscroll-contain md:hidden"
        >
          <button
            ref={backdropRef}
            type="button"
            aria-label="Close mobile menu"
            onClick={closeMobileMenu}
            className="fixed inset-0 h-full w-full bg-additional-blury-blue backdrop-blur-[3px] motion-safe:animate-mobile-backdrop-in"
          />
          <div
            ref={panelRef}
            className="bg-background/95 w-[calc(100%_-_58px)] min-h-full flex flex-col relative z-10 motion-safe:animate-mobile-menu-in"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between px-5 py-3">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="flex items-center justify-center px-5 h-12"
              >
                <Image
                  src="/images/NMCyber.svg"
                  alt="NMCyber logo"
                  className="size-6"
                  width={60}
                  height={60}
                  quality={90}
                />
              </Link>
              <button
                type="button"
                className="size-12 grid place-items-center text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={closeMobileMenu}
                aria-label="Close mobile navigation menu"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <hr className="border-t border-zinc-200/20 mx-5" />

            {/* Navigation Menu */}
            <div className="flex flex-col px-5 py-4">
              {NAVIGATION_WITH_SUBMENUS.map((item) => {
                const isExpanded = expandedMenus.has(item.name);
                const hasSubmenus = item.submenus && item.submenus.length > 0;
                const mobileSubmenus = item.mobileOverviewLabel
                  ? [{ name: item.mobileOverviewLabel, href: item.href }, ...item.submenus]
                  : item.submenus;

                return (
                  <div key={item.name}>
                    {/* Main Navigation Item */}
                    <Link
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className={`font-[Poppins] font-semibold text-sm transition-[color,background-color,border-color,border-width] px-5 h-12 w-full rounded flex items-center justify-between ${
                        pathname === item.href
                          ? 'text-white bg-accent/20 border-l-4 border-accent'
                          : 'text-muted-foreground hover:text-white hover:bg-white/10'
                      }`}
                      onClick={(e) => {
                        if (hasSubmenus) {
                          e.preventDefault();
                          toggleSubmenu(item.name);
                        } else {
                          closeMobileMenu();
                        }
                      }}
                    >
                      {item.name}
                      {item.external && <ExternalLink className="size-3.5" />}
                    </Link>

                    {/* Submenu Items */}
                    {hasSubmenus && (
                      <div
                        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                          isExpanded ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="py-2">
                          {mobileSubmenus.map((submenu) => (
                            <Link
                              key={submenu.name}
                              href={submenu.href}
                              target={submenu.external ? '_blank' : undefined}
                              rel={submenu.external ? 'noopener noreferrer' : undefined}
                              className={`flex items-center gap-2 px-4 py-2 text-sm leading-relaxed before:size-1.5 before:shrink-0 before:rounded-full before:bg-accent before:opacity-80 transition-colors ${
                                submenu.href !== item.href && pathname === submenu.href
                                  ? 'text-white bg-accent/20 border-l-2 border-accent font-[Poppins] font-semibold'
                                  : 'text-muted-foreground hover:text-white hover:bg-white/10 font-[Poppins] font-normal'
                              }`}
                              onClick={closeMobileMenu}
                            >
                              {submenu.name}
                              {submenu.external && (
                                <ExternalLink
                                  aria-hidden="true"
                                  className="size-3.5 shrink-0 self-center"
                                />
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <hr className="border-t border-zinc-200/20 mx-5" />

            {/* Contact Information */}
            <div className="px-5 py-4">
              <h3 className="px-5 text-white font-[Poppins] font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-1">
                <li>
                  <a
                    className="h-12 px-5 flex items-center gap-2 text-muted-foreground"
                    href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                  >
                    <Phone aria-hidden="true" className="size-4" />
                    <span className="font-[poppins] text-xs">{COMPANY_INFO.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    className="h-12 px-5 flex items-center gap-2 text-muted-foreground"
                    href={`mailto:${COMPANY_INFO.email}`}
                  >
                    <Mail aria-hidden="true" className="size-4" />
                    <span className="font-[poppins] text-xs">{COMPANY_INFO.email}</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Chatbot Section */}
            {/* <div className="border-t border-gray-200/20 px-4 py-2">
              <h3 className="px-2 text-white font-[Poppins] font-semibold text-sm mb-2">Need Help?</h3>
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
                    closeMobileMenu();
                  }}
                >
                  <span>Start a conversation</span>
                </button>
              </div>
            </div> */}

            {/* Social Links */}

            <hr className="border-t border-zinc-200/20 mx-5" />

            <div className="px-5 py-4">
              <h3 className="px-5 text-white font-[Poppins] font-semibold mb-4">Follow Us</h3>
              <div className="px-5 flex gap-2">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.href}
                      href={social.href}
                      aria-label={social.label}
                      className={`size-12 bg-secondary rounded-lg grid place-items-center transition-colors ${social.className}`}
                      onClick={closeMobileMenu}
                    >
                      <Icon aria-hidden="true" className="w-4 aspect-square text-white" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
