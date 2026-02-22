import { motion } from "framer-motion";
import EmailCapture from "@/components/EmailCapture";

const FinalCTASection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-card">
      {/* Ambient glow — centred and visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, hsl(41 91% 44% / 0.14) 0%, hsl(41 91% 44% / 0.04) 45%, transparent 70%)",
        }}
      />

      {/* Subtle top border accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label mb-6 block">Get started</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
            The window to be{" "}
            <em style={{ fontStyle: "italic" }} className="text-primary">first</em>{" "}
            is closing.
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Claim your free audit and see exactly where you stand. You'll get a clear
            breakdown of your brand's AI citations across ChatGPT, Perplexity, and Google
            AI Overviews — benchmarked against your top competitors. No credit card.
            No sales call unless you want one.
          </p>

          <div className="flex justify-center mb-6">
            <EmailCapture buttonText="Claim My Free Audit" />
          </div>

          <p className="text-xs text-muted-foreground font-sans">
            Free audit · No credit card · Results in 48 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
