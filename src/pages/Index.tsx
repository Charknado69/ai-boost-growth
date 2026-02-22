import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import DifferentiationSection from "@/components/sections/DifferentiationSection";
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
      <HowItWorksSection />
      <DifferentiationSection />
      <AuditPreviewClean />
      <WhyNowSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
