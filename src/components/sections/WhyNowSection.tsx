import { motion } from "framer-motion";
import EmailCapture from "@/components/EmailCapture";

const timeline = [
  { year: "2023", event: "ChatGPT reaches 100M users in 60 days — the fastest product adoption in history. AI search goes mainstream overnight." },
  { year: "2024", event: "Google launches AI Overviews to 1B+ users globally. Organic click-through rates drop. The landscape shifts permanently." },
  { year: "2025", event: "Perplexity, Copilot, and Claude enter the mainstream. Multiple AI platforms are now actively recommending brands to buyers. AI-first discovery becomes the default for every high-intent decision." },
  { year: "2026", event: "Brands that moved early are building durable AI visibility advantages. Those that haven't started are facing a steeper climb — and a more crowded space." },
];

const WhyNowSection = () => {
  return (
    <section id="why-now" className="py-32 px-6">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-xs text-primary/60 tracking-[0.2em] uppercase mb-4 block crt-glow">/// timeline.render()</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium mb-6 matrix-heading-glow">
            Why <span className="italic text-primary">now</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            The brands moving now are staking out AI citation positions that compound like backlinks once did — and become nearly impossible to displace. Your category's default recommendation in ChatGPT is being written this year.
          </p>
        </motion.div>

        <div className="space-y-0 mb-20">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 items-baseline py-6 border-t border-border/50 last:border-b"
            >
              <span className="font-mono text-3xl md:text-4xl font-medium text-primary crt-glow">{item.year}</span>
              <p className="text-foreground/70 text-sm md:text-base leading-relaxed">{item.event}</p>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-border/50 pt-16">
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
      </div>
    </section>
  );
};

export default WhyNowSection;
