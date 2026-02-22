import { motion } from "framer-motion";
import EmailCapture from "@/components/EmailCapture";

// Abstract SVG citation network — animated nodes and arcs in amber/gold
const CitationGraph = () => (
  <svg
    viewBox="0 0 520 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    aria-hidden="true"
  >
    {/* Connecting arcs */}
    <path d="M120 210 Q260 80 390 150" stroke="hsl(41 91% 44% / 0.18)" strokeWidth="1" />
    <path d="M120 210 Q200 320 340 310" stroke="hsl(41 91% 44% / 0.12)" strokeWidth="1" />
    <path d="M390 150 Q430 240 340 310" stroke="hsl(41 91% 44% / 0.15)" strokeWidth="1" />
    <path d="M390 150 Q460 100 470 180" stroke="hsl(41 91% 44% / 0.10)" strokeWidth="1" />
    <path d="M120 210 Q80 140 100 80" stroke="hsl(41 91% 44% / 0.10)" strokeWidth="1" />
    <path d="M260 200 Q260 280 340 310" stroke="hsl(41 91% 44% / 0.12)" strokeWidth="1" />
    <path d="M260 200 Q320 170 390 150" stroke="hsl(41 91% 44% / 0.20)" strokeWidth="1.5" />

    {/* Outer nodes */}
    <circle cx="100" cy="80" r="5" fill="hsl(41 91% 44% / 0.25)" />
    <circle cx="470" cy="180" r="6" fill="hsl(41 91% 44% / 0.20)" />
    <circle cx="340" cy="310" r="7" fill="hsl(41 91% 44% / 0.22)" />
    <circle cx="70" cy="300" r="4" fill="hsl(41 91% 44% / 0.15)" />

    {/* Secondary nodes */}
    <circle cx="120" cy="210" r="10" fill="hsl(41 91% 44% / 0.15)" />
    <circle cx="120" cy="210" r="4" fill="hsl(41 91% 44% / 0.50)" />

    <circle cx="260" cy="200" r="12" fill="hsl(41 91% 44% / 0.12)" />
    <circle cx="260" cy="200" r="5" fill="hsl(41 91% 44% / 0.45)" />

    {/* Primary node — "Your Brand" */}
    <circle cx="390" cy="150" r="22" fill="hsl(41 91% 44% / 0.10)" className="animate-[node-pulse_3s_ease-in-out_infinite]" />
    <circle cx="390" cy="150" r="14" fill="hsl(41 91% 44% / 0.18)" />
    <circle cx="390" cy="150" r="6" fill="hsl(41 91% 44% / 0.80)" />

    {/* Platform labels */}
    <text x="88" y="76" fill="hsl(38 53% 93% / 0.35)" fontSize="9" fontFamily="DM Sans, sans-serif">ChatGPT</text>
    <text x="452" y="177" fill="hsl(38 53% 93% / 0.30)" fontSize="9" fontFamily="DM Sans, sans-serif">Perplexity</text>
    <text x="320" y="330" fill="hsl(38 53% 93% / 0.30)" fontSize="9" fontFamily="DM Sans, sans-serif">Gemini</text>
    <text x="95" y="228" fill="hsl(38 53% 93% / 0.28)" fontSize="9" fontFamily="DM Sans, sans-serif">Claude</text>
    <text x="233" y="217" fill="hsl(38 53% 93% / 0.28)" fontSize="8" fontFamily="DM Sans, sans-serif">AI Overview</text>

    {/* "Your Brand" label */}
    <text x="408" y="154" fill="hsl(41 91% 44% / 0.90)" fontSize="10" fontWeight="500" fontFamily="DM Sans, sans-serif">Your Brand</text>
  </svg>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Warm ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(41 91% 44% / 0.07) 0%, transparent 70%)",
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
              <em className="text-primary not-italic" style={{ fontStyle: "italic" }}>
                Make sure your brand is the answer.
              </em>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg">
              ChatGPT, Perplexity, Claude, and Gemini recommend brands every day —
              before your customers ever visit your website. We get your brand into
              those answers and keep it there.
            </p>

            <div className="mb-8">
              <EmailCapture buttonText="Get Your Free AI Audit" />
            </div>

            {/* Trust bar */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground font-sans">
              <span>✓ No credit card</span>
              <span>✓ Results in 48 hours</span>
              <span>✓ No commitment</span>
            </div>
          </motion.div>

          {/* Right: citation graph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden md:block"
          >
            {/* Glow behind SVG */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 60% 40%, hsl(41 91% 44% / 0.08) 0%, transparent 65%)",
              }}
            />
            <CitationGraph />
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
            { stat: "64%", label: "of people act on AI recommendations" },
            { stat: "35%", label: "more clicks for AI-cited brands" },
            { stat: "48h", label: "audit delivered, no commitment" },
          ].map((item) => (
            <div key={item.stat} className="sm:px-8 first:pl-0 last:pr-0 text-center sm:text-left">
              <p className="font-display text-3xl gold-accent mb-1">{item.stat}</p>
              <p className="text-xs text-muted-foreground leading-snug">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
