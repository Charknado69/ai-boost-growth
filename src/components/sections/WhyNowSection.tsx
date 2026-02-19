import { motion } from "framer-motion";
import EmailCapture from "@/components/EmailCapture";

const timeline = [
  { year: "2023", event: "ChatGPT reaches 100M users — AI search goes mainstream" },
  { year: "2024", event: "Google launches AI Overviews to 1B+ users globally" },
  { year: "2025", event: "Perplexity, Copilot, and AI assistants reshape discovery" },
  { year: "2026", event: "Businesses without AEO/GEO lose 50%+ of organic visibility" },
];

const WhyNowSection = () => {
  return (
    <section id="why-now" className="py-24 px-6">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why <span className="text-primary">now</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Early movers are capturing AI visibility that will be exponentially harder to win later.
          </p>
        </motion.div>

        <div className="space-y-0 mb-16">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="flex items-start gap-6 py-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-1" />
                {i < timeline.length - 1 && <div className="w-px h-full bg-border min-h-[2rem]" />}
              </div>
              <div>
                <span className="text-primary font-bold text-sm">{item.year}</span>
                <p className="text-foreground/80 text-sm">{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <EmailCapture buttonText="Claim Your Audit Now" />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyNowSection;
