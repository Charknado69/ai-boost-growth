import { motion } from "framer-motion";
import EmailCapture from "@/components/EmailCapture";
import greenCorridor from "@/assets/green-corridor.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={greenCorridor}
          alt=""
          className="w-full h-full object-cover opacity-[0.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/8 blur-[160px] animate-pulse-glow pointer-events-none" />

      <div className="container relative z-10 px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block mb-8 px-5 py-2 rounded-full terminal-border bg-primary/5 text-primary font-mono text-xs uppercase tracking-[0.2em] font-medium">
            <span className="crt-glow">/// AEO & GEO Optimization</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.05] tracking-tight mb-8">
            AI is rewriting how customers{" "}
            <span className="italic text-primary crt-glow">find</span> businesses
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground mb-14 max-w-2xl mx-auto leading-relaxed">
            Traditional SEO won't save you. ChatGPT, Perplexity, and Google AI Overviews are
            replacing search results with AI answers — and most businesses aren't in them.
          </p>

          <div className="flex justify-center mb-5">
            <EmailCapture buttonText=">>> Initialize Audit" />
          </div>

          <p className="text-xs text-muted-foreground font-mono tracking-wide">
            // free_audit · no_commitment · results_in_48h
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary/50 crt-glow">[ scroll ]</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
