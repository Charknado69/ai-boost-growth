import { motion } from "framer-motion";
import { Search, TrendingUp, BarChart3, BookOpen } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "AI Visibility Audit",
    description:
      "A comprehensive scan of how your brand appears — or doesn't — across ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews. Benchmarked against your top competitors.",
    detail: "Free to start. Delivered in 48 hours.",
  },
  {
    icon: TrendingUp,
    title: "Answer Engine Optimisation",
    description:
      "We restructure your content for zero-click visibility: featured snippets, knowledge panels, voice search, and AI Overviews. Schema markup, entity optimisation, and FAQ architecture included.",
    detail: "4–6 week sprint.",
  },
  {
    icon: BookOpen,
    title: "Generative Engine Optimisation",
    description:
      "We build the semantic authority and topical depth that causes generative AI models to cite and recommend your brand. Cross-platform citation strategy across all major AI platforms.",
    detail: "Ongoing retainer.",
  },
  {
    icon: BarChart3,
    title: "Citation Monitoring & Reporting",
    description:
      "Track exactly how and where AI platforms reference your brand each month. Citation growth, share of voice against competitors, and clear reporting your leadership team will understand.",
    detail: "Monthly reporting.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mb-16"
        >
          <span className="section-label mb-5 block">Services</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
            Everything you need to{" "}
            <em style={{ fontStyle: "italic" }}>win AI search.</em>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Built for B2B companies whose buyers research vendors on AI platforms before
            ever speaking to sales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="premium-card p-8 flex flex-col gap-5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon size={18} className="text-primary" strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="font-display text-2xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>

                <p className="text-xs text-primary/70 font-sans mt-auto">{service.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
