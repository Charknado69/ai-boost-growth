import { motion } from "framer-motion";
import { Zap, RefreshCw, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "AEO/GEO Sprint",
    duration: "4–6 weeks",
    description:
      "A fast, focused engagement to get your brand cited in AI-generated answers. We audit, optimize, and position your content where AI models look first.",
  },
  {
    icon: RefreshCw,
    title: "Retainer & Consulting",
    duration: "Ongoing",
    description:
      "Continuous optimization and strategic consulting to keep you ahead as AI search evolves. We become your AI visibility team.",
  },
  {
    icon: GraduationCap,
    title: "In-House Training",
    duration: "Custom",
    description:
      "Equip your marketing team with the knowledge and frameworks to leverage AI effectively — from prompt strategy to content optimization.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6 bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What we <span className="text-primary">do</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sprint-based engagements designed for speed and measurable results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors group"
            >
              <service.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
              <span className="text-xs text-primary font-medium uppercase tracking-wider">{service.duration}</span>
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
