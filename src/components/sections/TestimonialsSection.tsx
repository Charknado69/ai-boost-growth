import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Within 5 weeks of the sprint, our brand started appearing in ChatGPT responses for our core service queries. Organic inbound leads increased by 40%.",
    name: "Sarah Mitchell",
    role: "Head of Marketing",
    company: "CloudSync Solutions",
  },
  {
    quote:
      "We had no idea AI was already shaping how our customers discovered us. Vyzora's audit was eye-opening, and the sprint delivered results faster than any SEO campaign we've ever run.",
    name: "James Carter",
    role: "CEO",
    company: "Meridian Financial Group",
  },
  {
    quote:
      "The in-house training transformed how our content team thinks about search. We now create content that ranks in both traditional and AI-driven results.",
    name: "Elena Rodriguez",
    role: "VP of Content",
    company: "NovaBrand Agency",
  },
  {
    quote:
      "Our competitors still don't show up in AI answers. Thanks to Vyzora, we do — and it's become our biggest competitive advantage this year.",
    name: "David Park",
    role: "Founder",
    company: "TechPulse Ventures",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Real results from <span className="text-primary">real clients</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-xl bg-card border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6 text-sm">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">
                  {t.role}, {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
