import { motion } from "framer-motion";

const stats = [
  {
    stat: "40%",
    label: "of Google searches now show AI Overviews — pushing your organic listings below the fold before users even see them.",
  },
  {
    stat: "–50%",
    label: "average drop in organic click-through rate when an AI Overview appears. The answer absorbs the intent. Your listing gets skipped.",
  },
  {
    stat: "9 in 10",
    label: "brands have zero presence in AI-generated answers. That's not a threat — it's your opening. Early movers lock in citations competitors can't easily take.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-32 px-6">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-xs text-primary/60 tracking-[0.2em] uppercase mb-4 block crt-glow">/// system_alert</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium mb-6 matrix-heading-glow">
            The rules of search have{" "}
            <span className="italic text-primary">changed</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Your customers are asking AI for answers — not scrolling through search results.
            If your brand isn't in those answers, you don't exist to them.
          </p>
        </motion.div>

        <div className="space-y-0">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 items-baseline py-8 border-t border-border/50 last:border-b"
            >
              <div className="font-mono text-5xl md:text-6xl font-medium text-primary crt-glow">
                {item.stat}
              </div>
              <p className="text-foreground/70 text-base leading-relaxed">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
