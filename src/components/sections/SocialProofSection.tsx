import { motion } from "framer-motion";
import { Building2, TrendingUp, Globe, BarChart3 } from "lucide-react";

const proofPoints = [
  {
    icon: BarChart3,
    stat: "6",
    label: "AI platforms monitored",
    detail: "ChatGPT, Perplexity, Claude, Gemini, Copilot, Google AI Overviews",
  },
  {
    icon: TrendingUp,
    stat: "48h",
    label: "Audit turnaround",
    detail: "From sign-up to full AI visibility report in your inbox",
  },
  {
    icon: Globe,
    stat: "100+",
    label: "Prompts tested per audit",
    detail: "Across your industry, competitors, and buyer intent stages",
  },
  {
    icon: Building2,
    stat: "5",
    label: "Core service areas",
    detail: "Audit, AEO, GEO, citation monitoring, and entity optimisation",
  },
];

const idealFor = [
  "SaaS & software companies",
  "Professional services firms",
  "E-commerce brands",
  "B2B companies with considered purchases",
  "Any business where customers research before buying",
];

const SocialProofSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-6xl mx-auto">

        {/* Proof points grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="section-label mb-5 block">At a glance</span>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight max-w-xl mb-12">
            Built for the{" "}
            <em style={{ fontStyle: "italic" }}>AI search era.</em>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {proofPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="premium-card p-6"
                >
                  <Icon size={18} className="text-primary/60 mb-4" strokeWidth={1.5} />
                  <p className="font-display text-3xl gold-accent mb-1">{point.stat}</p>
                  <p className="text-sm text-foreground font-sans font-medium mb-2">{point.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{point.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* "Built for" row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="pt-10 border-t border-border/40"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground/50 font-sans font-medium mb-5">
            Built for
          </p>
          <div className="flex flex-wrap gap-3">
            {idealFor.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-border/60 text-sm text-foreground/70 font-sans"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SocialProofSection;
