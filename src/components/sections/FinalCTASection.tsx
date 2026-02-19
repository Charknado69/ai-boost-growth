import { motion } from "framer-motion";
import EmailCapture from "@/components/EmailCapture";

const FinalCTASection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Don't let AI make you <span className="text-primary">invisible</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Limited sprint slots available each quarter. Secure your spot and get a free AI
            visibility audit for your business.
          </p>

          <div className="flex justify-center mb-4">
            <EmailCapture buttonText="Secure Your Sprint Slot" />
          </div>

          <p className="text-sm text-muted-foreground">
            Join 100+ companies already optimizing for AI search
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
