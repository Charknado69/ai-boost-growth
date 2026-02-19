import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "In a few years, the majority of online interactions will start with AI. If your brand isn't part of those conversations, you're invisible.",
    author: "Sam Altman",
    role: "CEO, OpenAI",
  },
  {
    text: "SEO isn't dying — it's evolving. The brands that win will be the ones optimizing for AI-generated answers, not just traditional rankings.",
    author: "Rand Fishkin",
    role: "Co-founder, SparkToro",
  },
  {
    text: "We're moving from a world of ten blue links to one where AI gives you the answer. Being that answer is the new competitive advantage.",
    author: "Sundar Pichai",
    role: "CEO, Google",
  },
];

const QuotesSection = () => {
  return (
    <section id="quotes" className="py-24 px-6">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            The experts <span className="text-primary">agree</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-8 rounded-xl bg-card border border-border relative"
            >
              <Quote className="w-8 h-8 text-primary/30 absolute top-6 right-6" />
              <p className="text-foreground/90 italic leading-relaxed mb-6 text-sm">"{q.text}"</p>
              <div>
                <p className="font-semibold text-sm">{q.author}</p>
                <p className="text-xs text-muted-foreground">{q.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
