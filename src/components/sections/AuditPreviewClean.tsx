import { motion } from "framer-motion";
import EmailCapture from "@/components/EmailCapture";

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
      "We identify the specific queries where your customers are searching for recommendations — and where you're invisible. These are your highest-value AI search opportunities.",
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
    <section id="audit-preview" className="py-32 px-6 bg-card">
      <div className="container max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <span className="section-label mb-5 block">Free audit</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
            Your free audit,{" "}
            <em style={{ fontStyle: "italic" }}>unpacked.</em>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Not a sales call disguised as a report. A genuine breakdown of where you stand
            in AI search — delivered in 48 hours, no strings attached.
          </p>
        </motion.div>

        {/* Deliverables */}
        <div className="space-y-0 mb-20">
          {deliverables.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid md:grid-cols-[64px_1fr_1fr] gap-6 md:gap-10 py-10 border-t border-border/50 last:border-b items-start"
            >
              {/* Number */}
              <span className="font-display text-4xl text-primary/30">{item.number}</span>

              {/* Title + description */}
              <div>
                <h3 className="font-display text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>

              {/* Outcome */}
              <div className="flex items-start gap-3 md:pt-0.5">
                <span className="text-primary mt-0.5 shrink-0 text-base">→</span>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  <em style={{ fontStyle: "italic" }}>{item.outcome}</em>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-x-10 gap-y-3 mb-14 text-xs font-sans text-muted-foreground tracking-wide"
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
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <EmailCapture buttonText="Get My Free Audit" />
        </motion.div>

      </div>
    </section>
  );
};

export default AuditPreviewClean;
