import { motion } from "framer-motion";
import EmailCapture from "@/components/EmailCapture";

// Abstract SVG citation network — amber nodes representing AI platforms citing your brand
const CitationGraph = () => (
  <svg
    viewBox="0 0 520 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    aria-hidden="true"
  >
    {/* Connecting arcs — stronger opacity */}
    <path d="M120 210 Q260 80 390 150" stroke="hsl(41 91% 44% / 0.35)" strokeWidth="1.5" />
    <path d="M120 210 Q200 320 340 310" stroke="hsl(41 91% 44% / 0.22)" strokeWidth="1" />
    <path d="M390 150 Q430 240 340 310" stroke="hsl(41 91% 44% / 0.28)" strokeWidth="1" />
    <path d="M390 150 Q460 100 470 180" stroke="hsl(41 91% 44% / 0.20)" strokeWidth="1" />
    <path d="M120 210 Q80 140 100 80" stroke="hsl(41 91% 44% / 0.20)" strokeWidth="1" />
    <path d="M260 200 Q260 280 340 310" stroke="hsl(41 91% 44% / 0.22)" strokeWidth="1" />
    <path d="M260 200 Q320 170 390 150" stroke="hsl(41 91% 44% / 0.40)" strokeWidth="2" />

    {/* Outer nodes */}
    <circle cx="100" cy="80" r="6" fill="hsl(41 91% 44% / 0.40)" />
    <circle cx="470" cy="180" r="7" fill="hsl(41 91% 44% / 0.35)" />
    <circle cx="340" cy="310" r="8" fill="hsl(41 91% 44% / 0.38)" />
    <circle cx="70" cy="300" r="5" fill="hsl(41 91% 44% / 0.25)" />

    {/* Secondary nodes */}
    <circle cx="120" cy="210" r="14" fill="hsl(41 91% 44% / 0.12)" />
    <circle cx="120" cy="210" r="6" fill="hsl(41 91% 44% / 0.60)" />

    <circle cx="260" cy="200" r="16" fill="hsl(41 91% 44% / 0.10)" />
    <circle cx="260" cy="200" r="7" fill="hsl(41 91% 44% / 0.55)" />

    {/* Primary node — "Your Brand" — pulsing outer ring */}
    <circle cx="370" cy="150" r="36" fill="hsl(41 91% 44% / 0.06)" className="animate-[node-pulse_3s_ease-in-out_infinite]" />
    <circle cx="370" cy="150" r="24" fill="hsl(41 91% 44% / 0.12)" />
    <circle cx="370" cy="150" r="14" fill="hsl(41 91% 44% / 0.25)" />
    <circle cx="370" cy="150" r="7" fill="hsl(41 91% 44% / 0.90)" />

    {/* Platform labels */}
    <text x="86" y="72" fill="hsl(38 53% 93% / 0.50)" fontSize="10" fontFamily="DM Sans, sans-serif">ChatGPT</text>
    <text x="446" y="175" fill="hsl(38 53% 93% / 0.45)" fontSize="10" fontFamily="DM Sans, sans-serif">Perplexity</text>
    <text x="316" y="334" fill="hsl(38 53% 93% / 0.45)" fontSize="10" fontFamily="DM Sans, sans-serif">Gemini</text>
    <text x="92" y="232" fill="hsl(38 53% 93% / 0.45)" fontSize="10" fontFamily="DM Sans, sans-serif">Claude</text>
    <text x="228" y="218" fill="hsl(38 53% 93% / 0.42)" fontSize="9" fontFamily="DM Sans, sans-serif">AI Overview</text>

    {/* "Your Brand" label — below node with amber colour */}
    <text x="348" y="200" fill="hsl(41 91% 44% / 0.95)" fontSize="11" fontWeight="600" fontFamily="DM Sans, sans-serif">Your Brand</text>
  </svg>
);

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
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 55% 38%, hsl(41 91% 44% / 0.12) 0%, transparent 60%)",
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
