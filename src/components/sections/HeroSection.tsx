import { motion } from "framer-motion";
import EmailCapture from "@/components/EmailCapture";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow pointer-events-none" />

      <div className="container relative z-10 px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
            AEO & GEO Optimization
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
            AI is rewriting how customers find businesses.{" "}
            <span className="text-primary">Is yours visible?</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Traditional SEO won't save you. ChatGPT, Perplexity, and Google AI Overviews are
            replacing search results with AI answers — and most businesses aren't in them.
          </p>

          <div className="flex justify-center">
            <EmailCapture buttonText="Get Your Free AI Visibility Audit" />
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Free audit · No commitment · Results in 48 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
