import { Analytics } from '@vercel/analytics/react';
import { GeistSans } from 'geist/font/sans';
import { Plus_Jakarta_Sans, Poppins } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';
import Footer from '@/components/wrapper/footer';
import NavBar from '@/components/wrapper/navbar';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta-sans',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="https://utfs.io/f/31dba2ff-6c3b-4927-99cd-b928eaa54d5f-5w20ij.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://utfs.io/f/69a12ab1-4d57-4913-90f9-38c6aca6c373-1txg2.png"
          as="image"
        />
      </head>
      <body
        className={`${GeistSans.className} ${plusJakartaSans.variable} ${poppins.variable} dark`}
      >
        {/* Wrap everything in a page-level background with the blue overlay */}
        <div className="relative min-h-screen overflow-x-hidden dark:bg-background bg-background">
          <div className="pointer-events-none fixed inset-0 z-0 bg-additional-blury-blue" />
          <div className="relative z-10">
            <NavBar />
            <main className="flex relative flex-col pt-[4rem] items-center justify-between">
              {children}
            </main>
            <Footer className="relative w-full" />
          </div>
        </div>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
