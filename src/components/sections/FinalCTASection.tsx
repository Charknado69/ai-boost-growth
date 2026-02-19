import { motion } from "framer-motion";
import EmailCapture from "@/components/EmailCapture";
import retroCrt from "@/assets/retro-crt.jpeg";

const FinalCTASection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Subtle CRT image background */}
      <div className="absolute inset-0">
        <img src={retroCrt} alt="" className="w-full h-full object-cover opacity-[0.20]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background" />
      </div>

      <div className="container max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="font-mono text-xs text-primary/60 tracking-[0.2em] uppercase mb-4 block crt-glow">/// final_prompt</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium mb-6">
            Don't let AI make you{" "}
            <span className="italic text-primary">invisible</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Limited sprint slots available each quarter. Secure your spot and get a free AI
            visibility audit for your business.
          </p>

          <div className="flex justify-center mb-5">
            <EmailCapture buttonText=">>> Secure Sprint Slot" />
          </div>

          <p className="text-xs text-muted-foreground font-mono uppercase tracking-[0.15em]">
            // join 100+ companies already optimizing for AI search
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
