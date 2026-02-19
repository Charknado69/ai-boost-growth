import { motion } from "framer-motion";
import { TrendingDown, Search, AlertTriangle } from "lucide-react";

const stats = [
  {
    icon: Search,
    stat: "40%",
    label: "of Google searches now show AI Overviews",
  },
  {
    icon: TrendingDown,
    stat: "-30%",
    label: "average organic click-through rate decline since AI answers launched",
  },
  {
    icon: AlertTriangle,
    stat: "90%",
    label: "of businesses have zero presence in AI-generated answers",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 px-6">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            The rules of search have <span className="text-primary">changed</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your potential customers are asking AI for answers — not scrolling through
            search results. If your brand isn't in those answers, you don't exist.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-6 rounded-xl bg-card border border-border text-center"
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
              <p className="text-muted-foreground text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
