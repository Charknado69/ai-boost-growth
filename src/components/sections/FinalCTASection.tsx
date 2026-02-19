import { motion } from "framer-motion";
import EmailCapture from "@/components/EmailCapture";

const FinalCTASection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium mb-6">
            Don't let AI make you{" "}
            <span className="italic text-primary">invisible</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Limited sprint slots available each quarter. Secure your spot and get a free AI
            visibility audit for your business.
          </p>

          <div className="flex justify-center mb-5">
            <EmailCapture buttonText="Secure Your Sprint Slot" />
          </div>

          <p className="text-xs text-muted-foreground uppercase tracking-[0.15em]">
            Join 100+ companies already optimizing for AI search
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
