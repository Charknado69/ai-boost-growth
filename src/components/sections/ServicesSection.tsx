import { motion } from "framer-motion";
import retroKeyboard from "@/assets/retro-keyboard.jpeg";

const services = [
  {
    num: "01",
    title: "AEO/GEO Sprint",
    duration: "4–6 weeks",
    description:
      "We get your brand cited in ChatGPT, Perplexity, and Google AI Overviews — fast. A focused 4–6 week engagement: audit, restructure, optimize, and position. Built for ambitious brands that don't have time to wait.",
    features: ["Full AI visibility audit", "Content restructuring for LLMs", "Entity & authority building", "Citation tracking & reporting"],
  },
  {
    num: "02",
    title: "Retainer & Consulting",
    duration: "Ongoing",
    description:
      "AI search is rewriting the rules every quarter. We stay on top of every shift so you stay cited while competitors scramble. Your dedicated AI visibility team — without the overhead.",
    features: ["Monthly citation tracking", "Competitor monitoring", "Platform algorithm updates", "Quarterly strategy sessions"],
  },
  {
    num: "03",
    title: "In-House Training",
    duration: "Custom",
    description:
      "We teach your team to build content that AI cites. Workshops, custom playbooks, and templates — everything they need to win in AI search independently. We build the capability. You own it.",
    features: ["Full-day team workshops", "Custom AEO/GEO playbooks", "Content templates & SOPs", "Post-training support calls"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden">
      {/* Background accent image */}
      <div className="absolute inset-0">
        <img src={retroKeyboard} alt="" className="w-full h-full object-cover opacity-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>
      <div className="container max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-xs text-primary/60 tracking-[0.2em] uppercase mb-4 block crt-glow">/// services.init()</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium mb-6 matrix-heading-glow">
            What we <span className="italic text-primary">do</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Sprint-based engagements designed for speed and measurable results.
          </p>
        </motion.div>

        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="grid md:grid-cols-[100px_1fr_1fr] gap-6 md:gap-10 py-10 border-t border-border/50 last:border-b items-start"
            >
              <span className="font-mono text-5xl font-medium text-primary/30 crt-glow">{service.num}</span>
              <div>
                <h3 className="font-display text-2xl font-medium mb-1">{service.title}</h3>
                <span className="text-xs text-primary font-mono uppercase tracking-[0.2em]">{service.duration}</span>
                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{service.description}</p>
              </div>
              <ul className="space-y-2 md:pt-1">
                {service.features.map((f, j) => (
                  <li key={j} className="text-sm text-foreground/70 flex items-center gap-3 font-mono">
                    <span className="text-primary/50 text-xs">▸</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
