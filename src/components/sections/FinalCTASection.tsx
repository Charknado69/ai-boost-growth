import { motion } from "framer-motion";
import EmailCapture from "@/components/EmailCapture";
import retroCrt from "@/assets/retro-crt.jpeg";

const FinalCTASection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="container max-w-3xl mx-auto relative z-10">
        {/* CRT image as a visible design element, blended into background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-14"
        >
          <div className="relative w-[320px] sm:w-[400px] md:w-[480px] aspect-[4/3] overflow-hidden">
            <img
              src={retroCrt}
              alt="Retro CRT monitor"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center"
        >
          <span className="font-mono text-xs text-primary/60 tracking-[0.2em] uppercase mb-4 block crt-glow">/// final_prompt</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium mb-6 matrix-heading-glow">
            The window to be{" "}
            <span className="italic text-primary">first</span>{" "}
            is closing.
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto leading-relaxed font-medium">
            We take a limited number of sprint clients each quarter. Claim your free AI visibility
            audit — see exactly where you stand vs. competitors in ChatGPT, Perplexity, and Google
            AI Overviews. No credit card. No sales pitch. Just data.
          </p>

          <div className="flex justify-center mb-5">
            <EmailCapture buttonText=">>> Claim My Free Audit" />
          </div>

          <p className="text-xs text-muted-foreground font-mono uppercase tracking-[0.15em]">
            // free_audit · no_credit_card · results_in_48hrs
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
