import { motion } from "framer-motion";

// ⚠️  REPLACED: Previous version used unverified quotes attributed to Sam Altman,
// Sundar Pichai, and Rand Fishkin. These were paraphrased/fabricated — a serious
// credibility risk. This version uses real, cited research data instead.

const dataPoints = [
  {
    stat: "35%",
    text: "More organic clicks earned by brands cited in AI Overviews compared to those that aren't — plus 91% more paid clicks. Being cited doesn't just protect your traffic. It actively grows it.",
    source: "Seer Interactive — 25M impressions across 42 organisations, 2024–2025",
  },
  {
    stat: "15.9%",
    text: "Conversion rate for visitors referred by ChatGPT, versus 1.76% from Google organic. AI sends fewer clicks — but the people who arrive are already sold on the recommendation.",
    source: "SE Ranking, 2025",
  },
  {
    stat: "12%",
    text: "Of URLs cited by ChatGPT, Perplexity, and Copilot rank in Google's top 10. AI citations and Google rankings are almost entirely separate. What your SEO agency is doing has almost no bearing on your AI visibility.",
    source: "SE Ranking / Ahrefs, 2025",
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
          <span className="section-label mb-5 block">Market data</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
            The numbers{" "}
            <em style={{ fontStyle: "italic" }}>don't lie.</em>
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
              <div className="font-display text-5xl md:text-6xl gold-accent">
                {d.stat}
              </div>
              <div>
                <p className="font-display text-lg sm:text-xl md:text-2xl text-foreground/90 leading-snug mb-3">
                  {d.text}
                </p>
                <span className="text-xs text-muted-foreground/60 font-sans">
                  {d.source}
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
