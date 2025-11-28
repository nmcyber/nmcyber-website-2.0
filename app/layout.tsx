import { Analytics } from '@vercel/analytics/react';
import { GeistSans } from 'geist/font/sans';
import type { Viewport } from 'next';
import { Plus_Jakarta_Sans, Poppins } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';
import Footer from '@/components/shared/footer';
import NavBar from '@/components/shared/navbar';
import { SITE_METADATA } from '@/utils/constants';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap', // Prevents render-blocking, shows fallback font immediately
  preload: true, // Preload critical fonts
  adjustFontFallback: true, // Reduces layout shift by matching font metrics
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap', // Prevents render-blocking, shows fallback font immediately
  preload: true, // Preload critical fonts
  adjustFontFallback: true, // Reduces layout shift by matching font metrics
});

export const metadata = SITE_METADATA;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`
          ${GeistSans.className} 
          ${plusJakartaSans.variable} 
          ${poppins.variable} 
          dark 
          dark:bg-background bg-background
        `}
      >
        <div className="pointer-events-none fixed inset-0 z-0 bg-additional-blury-blue" />
        <header className="relative z-50">
          <NavBar />
        </header>

        <main className="flex relative w-full z-10 flex-col pt-[4rem] items-center justify-between">
          {children}
        </main>

        <Footer />
        <Analytics />
        <div className="fixed inset-0 pointer-events-none z-[100]">
          <Toaster position="bottom-right" richColors />
        </div>
      </body>
    </html>
  );
}
