import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Audit",
    description: "We analyze your current AI visibility — where you show up, where you don't, and where your competitors do.",
  },
  {
    step: "02",
    title: "Sprint",
    description: "A focused 4–6 week engagement to optimize your content, structure, and authority for AI-generated answers.",
  },
  {
    step: "03",
    title: "Dominate",
    description: "Your brand becomes the answer. We monitor, refine, and expand your AI presence for long-term dominance.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-32 px-6">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-xs text-primary/60 tracking-[0.2em] uppercase mb-4 block crt-glow">/// process.execute()</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium mb-6">
            How it <span className="italic text-primary">works</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-0">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center px-8 py-10 border-t md:border-t-0 md:border-l border-border/50 first:border-l-0 first:border-t-0"
            >
              <span className="font-mono text-6xl md:text-7xl font-medium text-primary/20 crt-glow">{s.step}</span>
              <h3 className="font-display text-2xl font-medium mt-4 mb-4">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
