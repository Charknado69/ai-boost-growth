import { motion } from "framer-motion";

const quotes = [
  {
    text: "In a few years, the majority of online interactions will start with AI. If your brand isn't part of those conversations, you're invisible.",
    author: "Sam Altman",
    role: "CEO, OpenAI",
  },
  {
    text: "SEO isn't dying — it's evolving. The brands that win will be the ones optimizing for AI-generated answers, not just traditional rankings.",
    author: "Rand Fishkin",
    role: "Co-founder, SparkToro",
  },
  {
    text: "We're moving from a world of ten blue links to one where AI gives you the answer. Being that answer is the new competitive advantage.",
    author: "Sundar Pichai",
    role: "CEO, Google",
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
          <span className="font-mono text-xs text-primary/60 tracking-[0.2em] uppercase mb-4 block crt-glow">/// expert_consensus</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium mb-6">
            The experts <span className="italic text-primary">agree</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="py-12 border-t border-border/50 last:border-b"
            >
              <p className="font-display text-xl sm:text-2xl md:text-3xl italic text-foreground/90 leading-snug mb-6">
                "{q.text}"
              </p>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-primary/50">▸▸</span>
                <span className="text-sm font-medium">{q.author}</span>
                <span className="text-xs text-muted-foreground font-mono">{q.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
