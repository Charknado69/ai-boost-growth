import { motion } from "framer-motion";
import EmailCapture from "@/components/EmailCapture";

const platforms = [
  { name: "ChatGPT", status: "not_cited", competitors: 2 },
  { name: "Perplexity", status: "not_cited", competitors: 3 },
  { name: "Google AI Overviews", status: "cited", competitors: 1 },
  { name: "Claude", status: "not_cited", competitors: 2 },
  { name: "Gemini", status: "not_cited", competitors: 1 },
];

const gaps = [
  { query: '"best [your service] for [industry]"', winner: "competitor-a.com" },
  { query: '"top [your service] providers"', winner: "competitor-b.com" },
  { query: '"how to choose [your service]"', winner: "competitor-a.com" },
  { query: '"[your service] vs [alternative]"', winner: "competitor-c.com" },
];

const quickWins = [
  "Add structured FAQ content to your top service pages",
  "Build citations on G2, Trustpilot, and Capterra",
  "Publish a direct comparison guide against your top competitor",
];

const AuditPreviewSection = () => {
  return (
    <section id="audit-preview" className="py-32 px-6">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-xs text-primary/60 tracking-[0.2em] uppercase mb-4 block crt-glow">/// audit_preview</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium mb-6 matrix-heading-glow">
            Here's exactly what{" "}
            <span className="italic text-primary">you'll receive</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            A free, no-fluff breakdown of your AI visibility — delivered in 48 hours.
            Here's a sample of what lands in your inbox.
          </p>
        </motion.div>

        {/* Audit terminal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="terminal-border bg-card/30 overflow-hidden"
        >
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-background/50">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary/50" />
            </div>
            <span className="font-mono text-xs text-muted-foreground ml-2 tracking-wide">
              vyzora_audit_report.txt
            </span>
          </div>

          <div className="p-6 md:p-10 space-y-10">
            {/* Report header */}
            <div className="font-mono text-xs space-y-1 text-primary/50">
              <p className="crt-glow">// VYZORA AI VISIBILITY AUDIT</p>
              <p>// brand: yourbrand.com</p>
              <p>// generated: 2025-02-20 · 09:41:33 UTC</p>
            </div>

            {/* 01 Platform scan */}
            <div>
              <p className="font-mono text-xs text-primary/60 uppercase tracking-[0.2em] mb-5 crt-glow">
                01 · platform citation scan
              </p>
              <div className="space-y-0">
                {platforms.map((p, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[1fr_auto_auto] gap-4 md:gap-10 items-center py-3 border-t border-border/20 last:border-b"
                  >
                    <span className="font-mono text-sm text-foreground/80">{p.name}</span>
                    <span
                      className={`font-mono text-xs uppercase tracking-widest ${
                        p.status === "cited"
                          ? "text-primary crt-glow"
                          : "text-red-400/70"
                      }`}
                    >
                      {p.status === "cited" ? "✓  cited" : "✗  not found"}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                      {p.competitors} competitor{p.competitors !== 1 ? "s" : ""} cited
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 02 Competitor gap map */}
            <div>
              <p className="font-mono text-xs text-primary/60 uppercase tracking-[0.2em] mb-5 crt-glow">
                02 · competitor gap map
              </p>
              <div className="space-y-0">
                {gaps.map((g, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[1fr_auto] gap-4 md:gap-10 items-center py-3 border-t border-border/20 last:border-b"
                  >
                    <span className="font-mono text-sm text-foreground/60">{g.query}</span>
                    <span className="font-mono text-xs text-red-400/70 whitespace-nowrap">
                      {g.winner}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 03 Quick wins */}
            <div>
              <p className="font-mono text-xs text-primary/60 uppercase tracking-[0.2em] mb-5 crt-glow">
                03 · top quick wins
              </p>
              <ul className="space-y-3">
                {quickWins.map((w, i) => (
                  <li key={i} className="flex items-start gap-3 font-mono text-sm text-foreground/70">
                    <span className="text-primary crt-glow mt-0.5 shrink-0">▸</span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Sample disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center font-mono text-xs text-muted-foreground/50 mt-5 tracking-wide"
        >
          // sample_output · your audit reflects your actual brand, competitors, and queries
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-14"
        >
          <EmailCapture buttonText=">>> Get My Free Audit" />
        </motion.div>
      </div>
    </section>
  );
};

export default AuditPreviewSection;
