import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import DifferentiationSection from "@/components/sections/DifferentiationSection";
import QuotesSection from "@/components/sections/QuotesSection";
import AuditPreviewClean from "@/components/sections/AuditPreviewClean";
import WhyNowSection from "@/components/sections/WhyNowSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <SocialProofSection />
      <HowItWorksSection />
      <DifferentiationSection />
      <QuotesSection />
      <AuditPreviewClean />
      <WhyNowSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
