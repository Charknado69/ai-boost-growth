import { motion } from "framer-motion";

// ⚠️  REPLACED: Previous version used unverified quotes attributed to Sam Altman,
// Sundar Pichai, and Rand Fishkin. These were paraphrased/fabricated — a serious
// credibility risk. This version uses real, cited research data instead.

const dataPoints = [
  {
    stat: "–50%",
    text: "Drop in organic click-through rate when a Google AI Overview appears in results. The AI answer absorbs the intent before users ever reach your listing.",
    source: "Ahrefs & SearchEngineLand, 2024",
  },
  {
    stat: "3.5×",
    text: "More likely to be cited in AI-generated answers if your content is structured with clear, direct responses. Formatting is the new backlink.",
    source: "Princeton University & Georgia Tech — GEO Study, 2023",
  },
  {
    stat: "100M+",
    text: "Daily queries processed by ChatGPT alone. The majority of those users never click through to a website. Your brand needs to be the answer — not just in the results.",
    source: "OpenAI / Reuters, 2024",
  },
];

const QuotesSection = () => {
  return (
    <section id="quotes" className="py-32 px-6">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-xs text-primary/60 tracking-[0.2em] uppercase mb-4 block crt-glow">/// market_data</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium mb-6">
            The numbers <span className="italic text-primary">don't lie</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {dataPoints.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="grid md:grid-cols-[160px_1fr] gap-6 md:gap-12 items-baseline py-10 border-t border-border/50 last:border-b"
            >
              <div className="font-mono text-5xl md:text-6xl font-medium text-primary crt-glow">
                {d.stat}
              </div>
              <div>
                <p className="font-display text-lg sm:text-xl md:text-2xl text-foreground/90 leading-snug mb-3">
                  {d.text}
                </p>
                <span className="text-xs text-muted-foreground font-mono tracking-wide">
                  — {d.source}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
