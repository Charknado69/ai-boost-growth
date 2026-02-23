import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

// ──────────────────────────────────────────────────
// CONFIGURE YOUR EMAIL ENDPOINT HERE
// Options:
//   - Formspree:    "https://formspree.io/f/YOUR_FORM_ID"
//   - Web3Forms:    "https://api.web3forms.com/submit"
//   - Make webhook: "https://hook.us1.make.com/YOUR_HOOK_ID"
//   - Zapier:       "https://hooks.zapier.com/hooks/catch/YOUR_ID"
//   - Custom API:   "https://your-api.com/leads"
//
// Set to "" to disable submissions (toast-only dev mode).
// ──────────────────────────────────────────────────
const FORM_ENDPOINT = "";

interface EmailCaptureProps {
  buttonText?: string;
  className?: string;
}

const EmailCapture = ({ buttonText = "Get Your Free Audit", className = "" }: EmailCaptureProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "submitting") return;

    // Dev mode — no endpoint configured
    if (!FORM_ENDPOINT) {
      toast({
        title: "You're in.",
        description: "We'll deliver your AI visibility audit within 48 hours.",
      });
      setEmail("");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          source: "vyzora-website",
          submitted_at: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus("success");
      setEmail("");
      toast({
        title: "You're in.",
        description: "We'll deliver your AI visibility audit within 48 hours.",
      });

      // Reset to idle after a few seconds so user could submit again later
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      toast({
        title: "Something went wrong.",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  if (status === "success") {
    return (
      <div className={`flex items-center gap-3 h-12 px-6 rounded-xl border border-primary/30 bg-primary/5 max-w-md ${className}`}>
        <span className="text-primary text-sm">&#10003;</span>
        <p className="text-sm text-foreground">Check your inbox — your audit is on its way.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col sm:flex-row gap-3 w-full max-w-md ${className}`}
    >
      <input
        type="email"
        placeholder="Work email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={status === "submitting"}
        className="h-12 flex-1 rounded-xl border border-border bg-secondary/60 px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="h-12 px-6 rounded-xl bg-primary text-primary-foreground text-sm font-sans font-medium whitespace-nowrap hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </span>
        ) : (
          buttonText
        )}
      </button>
    </form>
  );
};

export default EmailCapture;
