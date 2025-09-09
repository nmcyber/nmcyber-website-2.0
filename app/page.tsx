import PageWrapper from "@/components/wrapper/page-wrapper";

export default function Home() {
  return (
    <PageWrapper>
      <section className="flex z-20 flex-col justify-center items-center w-full max-w-4xl mx-auto py-20 px-6">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Welcome to 
            <span className="bg-gradient-to-r from-primary-green-50 to-secondary-pink-50 bg-clip-text text-transparent">
              {" "}NMCyber
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A clean, modern web application built with Next.js 15 and Tailwind CSS v4.
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}
