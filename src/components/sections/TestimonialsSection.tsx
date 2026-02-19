import { motion } from "framer-motion";
import retroChimp from "@/assets/retro-chimp.jpeg";
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
    <section id="testimonials" className="py-32 px-6 relative overflow-hidden">
      {/* Background accent image */}
      <div className="absolute inset-0">
        <img src={retroChimp} alt="" className="w-full h-full object-cover opacity-[0.06]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/92 to-background" />
      </div>
      <div className="container max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-xs text-primary/60 tracking-[0.2em] uppercase mb-4 block crt-glow">/// client_output.log</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium mb-6">
            Real results from <span className="italic text-primary">real clients</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 md:p-10 terminal-border bg-card/50"
            >
              <p className="text-foreground/80 leading-relaxed mb-8 text-sm italic">"{t.quote}"</p>
              <div>
                <p className="font-medium text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">
                  {t.role} @ {t.company}
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
