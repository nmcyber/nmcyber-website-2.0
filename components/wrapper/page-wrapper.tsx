import Footer from './footer'
import NavBar from './navbar'
import BlurElement from '../shared/blur-element'

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
  <main className="flex relative flex-col pt-[4rem] items-center dark:bg-background bg-background justify-between">
        {/* <div className="absolute z-[-99] pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" /> */}
        <div className='absolute inset-0 bg-additional-blury-blue z-10 w-full h-full' />
        
        {/* Example of using the BlurElement component */}
        {/* <BlurElement 
          position="bottom" 
          positionValue="10%" 
          zIndex={30} 
          size="150px" 
          blur="60px"
          className="left-[10%] bg-amber-600" 
        /> */}
        
        {/* <BlurElement 
          position="top" 
          positionValue="20%" 
          zIndex={10} 
          size="200px" 
          blur="80px"
          className="right-[15%] bg-amber-600" 
        /> */}
        {children}
      </main>
      <Footer className="relative w-full" />
    </>
  )
}