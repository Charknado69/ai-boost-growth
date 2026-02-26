import { motion } from "framer-motion";
import EmailCapture from "@/components/EmailCapture";
import AIConversation from "@/components/AIConversation";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Warm ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(41 91% 44% / 0.09) 0%, transparent 65%)",
        }}
      />

      <div className="container max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
              Your customers ask AI what to buy.{" "}
              <em className="text-primary" style={{ fontStyle: "italic" }}>
                Make sure your brand is the answer.
              </em>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg">
              ChatGPT, Perplexity, Claude, and Gemini don't just answer questions
              anymore — they research, compare, and buy on behalf of your customers.
              If AI doesn't know your brand, neither will they.
            </p>

            <div className="mb-4">
              <EmailCapture buttonText="Get Your Free Audit" />
            </div>

            {/* "Go check" provocation */}
            <p className="text-xs text-muted-foreground/70 font-sans mb-8 max-w-md leading-relaxed">
              Go ask ChatGPT what the best{" "}
              <span className="text-foreground/60">[your product category]</span>{" "}
              is. If your brand isn't in the answer, you have a problem.
              If your competitor is — you have an urgent one.
            </p>

            {/* Trust bar */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground font-sans">
              <span>✓ No credit card</span>
              <span>✓ Results in 48 hours</span>
              <span>✓ No commitment</span>
            </div>
          </motion.div>

          {/* Right: AI conversation mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Glow behind card */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 55% 38%, hsl(41 91% 44% / 0.10) 0%, transparent 60%)",
              }}
            />
            {/* Desktop: full conversation */}
            <div className="hidden md:block">
              <AIConversation />
            </div>
            {/* Mobile: compact version */}
            <div className="md:hidden">
              <AIConversation />
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 pt-8 border-t border-border/40 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x divide-border/40"
        >
          {[
            { stat: "47%", label: "of shoppers now use AI before buying" },
            { stat: "35%", label: "more clicks for AI-cited brands" },
            { stat: "48h", label: "audit delivered, no commitment" },
          ].map((item) => (
            <div key={item.stat} className="sm:px-8 first:pl-0 last:pr-0 text-center sm:text-left">
              <p className="font-display text-4xl gold-accent mb-1">{item.stat}</p>
              <p className="text-xs text-muted-foreground leading-snug">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
