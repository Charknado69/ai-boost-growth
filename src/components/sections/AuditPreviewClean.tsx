import { motion } from "framer-motion";
import EmailCapture from "@/components/EmailCapture";

// Conversion-optimised audit preview — no terminal aesthetic.
// Designed to answer the #1 skeptic objection: "What exactly am I getting?"
// Each deliverable is framed as a business outcome, not a feature.

const deliverables = [
  {
    number: "01",
    title: "AI Citation Scan",
    description:
      "We check every major AI platform — ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews — to see exactly when and how your brand is mentioned. Most businesses have never seen this data.",
    outcome: "You see your AI footprint for the first time.",
  },
  {
    number: "02",
    title: "Competitor Benchmarking",
    description:
      "We run the same scan on your top competitors. You'll see which queries they're winning in AI answers that you're not — and how large the gap actually is.",
    outcome: "You know exactly where you're losing business to competitors.",
  },
  {
    number: "03",
    title: "Gap & Opportunity Map",
    description:
      "We identify the specific queries where your buyers are asking for recommendations — and where you're invisible. These are your highest-value AI search opportunities.",
    outcome: "You have a prioritised list of where to focus first.",
  },
  {
    number: "04",
    title: "Quick Win Recommendations",
    description:
      "Based on your audit, we highlight the three highest-leverage actions you can take immediately to improve your AI visibility — no agency required to start.",
    outcome: "You leave with actionable steps, not just a report.",
  },
];

const AuditPreviewClean = () => {
  return (
    <section id="audit-preview" className="py-32 px-6">
      <div className="container max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <span className="font-mono text-xs text-primary/60 tracking-[0.2em] uppercase mb-4 block crt-glow">/// what you'll receive</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium mb-6 matrix-heading-glow">
            Your free audit,{" "}
            <span className="italic text-primary">unpacked</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-medium">
            Not a sales call disguised as a report. A genuine breakdown of where you
            stand in AI search — delivered in 48 hours, no strings attached.
          </p>
        </motion.div>

        {/* Deliverables */}
        <div className="space-y-0 mb-20">
          {deliverables.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-10 py-10 border-t border-border/50 last:border-b items-start"
            >
              {/* Number */}
              <span className="font-mono text-4xl font-medium text-primary/20 crt-glow">
                {item.number}
              </span>

              {/* Title + description */}
              <div>
                <h3 className="font-display text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Outcome */}
              <div className="flex items-start gap-3 md:pt-0.5">
                <span className="text-primary crt-glow mt-0.5 shrink-0">▸</span>
                <p className="text-foreground/80 text-sm font-medium leading-relaxed italic">
                  {item.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-x-10 gap-y-3 mb-14 text-xs font-mono text-muted-foreground tracking-wide"
        >
          <span>✓ No credit card</span>
          <span>✓ No sales call unless you want one</span>
          <span>✓ Delivered in 48 hours</span>
          <span>✓ Yours to keep, no obligation</span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <EmailCapture buttonText=">>> Get My Free Audit" />
        </motion.div>

      </div>
    </section>
  );
};

export default AuditPreviewClean;
