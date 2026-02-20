import { motion } from "framer-motion";
import retroChimp from "@/assets/retro-chimp.jpeg";

// ⚠️  ACTION REQUIRED: Verify these are real clients before going live.
// CloudSync Solutions, Meridian Financial Group, NovaBrand Agency, and
// TechPulse Ventures do not appear to be verifiable companies. If these are
// placeholder testimonials, replace with real client quotes ASAP — or use
// anonymised case studies (e.g. "Series A SaaS startup, 2024") until you have
// genuine testimonials. Fake social proof destroys trust if discovered.

const testimonials = [
  {
    quote:
      "Within 5 weeks of the sprint, our brand was appearing in ChatGPT responses for our core service queries. Inbound leads up 40%. We didn't touch our existing SEO — Vyzora just added a layer on top.",
    name: "Sarah Mitchell",
    role: "Head of Marketing",
    company: "CloudSync Solutions",
  },
  {
    quote:
      "We had no idea AI was already shaping how customers found us. The audit was eye-opening — and the sprint moved faster than any SEO campaign we've ever run.",
    name: "James Carter",
    role: "CEO",
    company: "Meridian Financial Group",
  },
  {
    quote:
      "The in-house training changed how our entire content team thinks. We now write for AI citation from day one — and it shows up in both traditional rankings and AI answers.",
    name: "Elena Rodriguez",
    role: "VP of Content",
    company: "NovaBrand Agency",
  },
  {
    quote:
      "Our competitors still don't show up in AI answers for our category. We do. That gap is our biggest competitive advantage right now — and it's only getting wider.",
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
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium mb-6 matrix-heading-glow">
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
