import Footer from './footer'
import NavBar from './navbar'

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="flex relative min-w-screen min-h-screen flex-col pt-[4rem] items-center dark:bg-background bg-background justify-between">
        {/* <div className="absolute z-[-99] pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" /> */}
        <div className='absolute inset-0 bg-additional-blury-blue z-10 w-full h-full' />
        <div className="bg-amber-500 z-0 blur-3xl absolute inset-0 mx-auto my-auto aspect-square w-24 rounded-full"></div>
        {children}
      </main>
      <Footer />
    </>
  )
}