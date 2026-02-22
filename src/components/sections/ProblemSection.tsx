import { motion } from "framer-motion";

const stats = [
  {
    stat: "1 in 3",
    label: "Google searches now shows an AI Overview — pushing your organic listing below the fold before most users even scroll.",
    source: "Google, 2024",
  },
  {
    stat: "–34%",
    label: "average drop in organic click-through rate when an AI Overview appears. Every AI answer is a lead your listing doesn't get.",
    source: "Ahrefs, 2024",
  },
  {
    stat: "64%",
    label: "of consumers say they're inclined to purchase based on AI recommendations. If AI doesn't recommend your brand, you're invisible.",
    source: "Omnisend, 2025",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-32 px-6 bg-card">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-20"
        >
          <span className="section-label mb-5 block">The shift</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
            Traditional SEO gets you ranked.{" "}
            <em style={{ fontStyle: "italic" }}>AI search gets you recommended.</em>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Your customers are asking AI for vendor recommendations — not scrolling through
            search results. If your brand isn't in those answers, you don't exist to them.
          </p>
        </motion.div>

        <div className="space-y-0">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-16 items-baseline py-10 border-t border-border/50 last:border-b"
            >
              <p className="font-display text-5xl md:text-6xl gold-accent">{item.stat}</p>
              <div>
                <p className="text-foreground/80 text-base leading-relaxed mb-2">{item.label}</p>
                <p className="text-xs text-muted-foreground/60 font-sans">{item.source}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
