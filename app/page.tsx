import PageWrapper from "@/components/wrapper/page-wrapper";
import StructuredData from "@/components/structured-data";
import { generateCompanyStructuredData } from "@/utils/structured-data";
import Hero from "@/components/home/hero";  

export default function Home() {
  // Generate the structured data for the homepage
  const structuredData = generateCompanyStructuredData();

  return (
    <PageWrapper>
      {/* Add structured data for SEO */}
      <StructuredData data={structuredData} />
      
      <Hero />
      
     
    </PageWrapper>
  );
}
