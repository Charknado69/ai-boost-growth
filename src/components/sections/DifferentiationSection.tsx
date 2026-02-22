import { motion } from "framer-motion";

const rows = [
  {
    topic: "Primary focus",
    traditional: "Google search rankings",
    vyzora: "AI platform citations across ChatGPT, Perplexity, Claude & Gemini",
  },
  {
    topic: "What we measure",
    traditional: "Keyword rankings & organic traffic",
    vyzora: "Brand citations, share of voice in AI answers, recommendation rate",
  },
  {
    topic: "Content approach",
    traditional: "Keyword density & backlinks",
    vyzora: "Semantic authority, entity optimisation, structured data for AI crawlers",
  },
  {
    topic: "Platform scope",
    traditional: "Single channel (Google)",
    vyzora: "Cross-platform: all major AI search surfaces tracked simultaneously",
  },
  {
    topic: "Reporting",
    traditional: "Monthly rankings PDF",
    vyzora: "Citation growth, competitor benchmarking, query-level AI visibility data",
  },
];

const DifferentiationSection = () => {
  return (
    <section id="differentiation" className="py-32 px-6">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="section-label mb-5 block">Why Vyzora</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight max-w-2xl mb-6">
            Not your typical{" "}
            <em style={{ fontStyle: "italic" }}>SEO agency.</em>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            Most agencies optimise for Google's algorithm. We optimise for what happens
            after the search — when AI decides what to recommend to your customer.
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-x-auto"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/60">
                <th className="text-left py-4 pr-8 text-muted-foreground font-sans font-medium text-xs uppercase tracking-wider w-40">
                  &nbsp;
                </th>
                <th className="text-left py-4 pr-8 text-muted-foreground font-sans font-medium text-xs uppercase tracking-wider">
                  Traditional SEO Agency
                </th>
                <th className="text-left py-4 font-sans font-medium text-xs uppercase tracking-wider text-primary/80">
                  Vyzora AEO/GEO
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="border-t border-border/40"
                >
                  <td className="py-5 pr-8 text-muted-foreground/60 font-sans text-xs uppercase tracking-wide align-top whitespace-nowrap">
                    {row.topic}
                  </td>
                  <td className="py-5 pr-8 text-muted-foreground align-top">
                    {row.traditional}
                  </td>
                  <td className="py-5 text-foreground/90 font-sans align-top">
                    {row.vyzora}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
