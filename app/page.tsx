import PageWrapper from "@/components/wrapper/page-wrapper";
import StructuredData from "@/components/structured-data";
import { generateCompanyStructuredData } from "@/utils/structured-data";
import { COMPANY_INFO } from "@/utils/constants";
import Section from '@/components/section';

export default function Home() {
  // Generate the structured data for the homepage
  const structuredData = generateCompanyStructuredData();

  return (
    <PageWrapper>
      {/* Add structured data for SEO */}
      <StructuredData data={structuredData} />
      
      <section className="flex z-20 flex-col justify-center items-center w-full max-w-4xl mx-auto py-20 px-6">
        <div className="text-center space-y-6">
          {/* Main hero heading with gradient effect */}
          <h1 className="gradient-heading">
            {COMPANY_INFO.tagline}
          </h1>
          
          {/* Subheading with call to action */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-4">
            Turn Your Team Into Cyberwarriors
          </h2>
          
          {/* Company description optimized for SEO */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {COMPANY_INFO.longDescription}
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a 
              href="/contact-us" 
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary-green-50 to-primary-green-70 text-white font-semibold transition-all hover:shadow-lg"
            >
              Book a Free Strategy Call
            </a>
            <a 
              href="/resources/checklist" 
              className="px-6 py-3 rounded-lg border border-primary-green-30 text-white font-semibold transition-all hover:bg-primary-green-80/10"
            >
              Download Risk Checklist
            </a>
          </div>
        </div>
      </section>
      <Section />
      <Section />
      <Section />
      <Section />
    </PageWrapper>
  );
}
