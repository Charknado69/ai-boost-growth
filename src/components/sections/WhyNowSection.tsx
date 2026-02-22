import { motion } from "framer-motion";
import EmailCapture from "@/components/EmailCapture";

const timeline = [
  {
    year: "2023",
    event:
      "ChatGPT reaches 100M users in 60 days — the fastest product adoption in history. AI search goes mainstream overnight.",
  },
  {
    year: "2024",
    event:
      "Google launches AI Overviews to 1B+ users globally. Organic click-through rates drop. The landscape shifts permanently.",
  },
  {
    year: "2025",
    event:
      "Perplexity, Copilot, and Claude enter the mainstream. Multiple AI platforms are now actively recommending brands to customers. AI-first discovery becomes the default for every high-intent purchase decision.",
  },
  {
    year: "2026",
    event:
      "Brands that moved early are compounding their advantage — cited more often, recommended more confidently, harder to displace. Those that waited are starting from zero in a market that's already picked its favourites.",
  },
];

const WhyNowSection = () => {
  return (
    <section id="why-now" className="py-32 px-6">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="section-label mb-5 block">Why now</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight max-w-2xl mb-6">
            The category default is being written{" "}
            <em style={{ fontStyle: "italic" }}>this year.</em>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            Brands moving now are staking out AI citation positions that compound like
            backlinks once did — and become nearly impossible to displace. Every month
            you wait, a competitor gets cited in your place.
          </p>
        </motion.div>

        <div className="space-y-0 mb-20">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-8 items-baseline py-8 border-t border-border/50 last:border-b"
            >
              <span className="font-display text-3xl md:text-4xl gold-accent">{item.year}</span>
              <p className="text-foreground/70 text-sm md:text-base leading-relaxed">{item.event}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-start"
        >
          <EmailCapture buttonText="Get Your Free Audit" />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyNowSection;
