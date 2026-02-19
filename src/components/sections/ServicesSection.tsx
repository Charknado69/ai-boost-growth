import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "AEO/GEO Sprint",
    duration: "4–6 weeks",
    description:
      "A fast, focused engagement to get your brand cited in AI-generated answers. We audit, optimize, and position your content where AI models look first.",
    features: ["AI visibility audit", "Content restructuring", "Authority building", "Citation optimization"],
  },
  {
    num: "02",
    title: "Retainer & Consulting",
    duration: "Ongoing",
    description:
      "Continuous optimization and strategic consulting to keep you ahead as AI search evolves. We become your AI visibility team.",
    features: ["Monthly optimization", "Competitive monitoring", "Strategy sessions", "Performance reporting"],
  },
  {
    num: "03",
    title: "In-House Training",
    duration: "Custom",
    description:
      "Equip your marketing team with the knowledge and frameworks to leverage AI effectively — from prompt strategy to content optimization.",
    features: ["Team workshops", "Playbooks & frameworks", "Content templates", "Ongoing support"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-xs text-primary/60 tracking-[0.2em] uppercase mb-4 block crt-glow">/// services.init()</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium mb-6">
            What we <span className="italic text-primary">do</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
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
