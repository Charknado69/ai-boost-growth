import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Audit",
    description:
      "We scan your brand across ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews, then benchmark against your top competitors. You see exactly where you're invisible and what they're winning.",
  },
  {
    step: "02",
    title: "Strategise",
    description:
      "We build a custom AEO/GEO roadmap based on your market, your competitors, and the specific queries your customers are already asking AI. No generic playbooks.",
  },
  {
    step: "03",
    title: "Execute",
    description:
      "Four to six weeks of focused execution: rewriting your content for AI citation, technical markup, and building authority across the sources AI models trust. No strategy decks.",
  },
  {
    step: "04",
    title: "Measure",
    description:
      "We track citation growth weekly, benchmark your brand against competitors monthly, and flag every meaningful platform shift. AI search changes fast — you'll never be caught off guard.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-32 px-6 bg-card">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="section-label mb-5 block">Process</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
            A clear process.{" "}
            <em style={{ fontStyle: "italic" }}>Results you can measure.</em>
          </h2>
        </motion.div>

        {/* Steps — horizontal on desktop */}
        <div className="grid md:grid-cols-4 gap-0">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="px-0 md:px-8 py-10 first:pl-0 last:pr-0 border-t md:border-t-0 md:border-l border-border/40 first:border-l-0 first:border-t-0"
            >
              <p className="font-display text-5xl gold-accent mb-5">{s.step}</p>
              <h3 className="font-display text-xl mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Connecting line — desktop only */}
        <div className="hidden md:block mt-0 amber-line" />
      </div>
    </section>
  );
};

export default HowItWorksSection;
