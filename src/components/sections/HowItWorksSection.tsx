import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Audit",
    description: "We scan your brand's presence across ChatGPT, Perplexity, Claude, and Google AI Overviews — then benchmark it against your top competitors. You'll see exactly where you're invisible, what they're winning, and which queries you should own but don't.",
  },
  {
    step: "02",
    title: "Sprint",
    description: "Four to six weeks of focused execution. We edit your content for AI citation, build your brand authority across the right sources, and target the specific queries your buyers are already asking. No strategy decks. Just the work.",
  },
  {
    step: "03",
    title: "Dominate",
    description: "Your brand becomes the answer. We track citation growth weekly, give you a clear monthly view of how you stack up against competitors, and expand your presence as the AI search landscape keeps shifting. You stay ahead. They play catch-up.",
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
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium mb-6 matrix-heading-glow">
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
