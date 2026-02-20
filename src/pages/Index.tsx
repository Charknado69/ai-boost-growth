import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ServicesSection from "@/components/sections/ServicesSection";
import QuotesSection from "@/components/sections/QuotesSection";
import AuditPreviewSection from "@/components/sections/AuditPreviewSection";
import WhyNowSection from "@/components/sections/WhyNowSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <QuotesSection />
      <AuditPreviewSection />
      <WhyNowSection />
      <HowItWorksSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
