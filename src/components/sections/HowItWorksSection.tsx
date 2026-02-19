import { motion } from "framer-motion";
import { ClipboardCheck, Rocket, Crown } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Audit",
    description: "We analyze your current AI visibility — where you show up, where you don't, and where your competitors do.",
  },
  {
    icon: Rocket,
    step: "02",
    title: "Sprint",
    description: "A focused 4–6 week engagement to optimize your content, structure, and authority for AI-generated answers.",
  },
  {
    icon: Crown,
    step: "03",
    title: "Dominate",
    description: "Your brand becomes the answer. We monitor, refine, and expand your AI presence for long-term dominance.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How it <span className="text-primary">works</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs text-primary font-bold uppercase tracking-widest">{s.step}</span>
              <h3 className="text-xl font-bold mt-1 mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
