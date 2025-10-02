import Footer from './footer';
import NavBar from './navbar';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="flex relative flex-col pt-[4rem] items-center dark:bg-background bg-background justify-between">
        <div className="absolute inset-0 bg-additional-blury-blue z-10 w-full h-full" />
        {children}
      </main>
      <Footer className="relative w-full" />
    </>
  );
}
