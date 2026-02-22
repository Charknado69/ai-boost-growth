import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface EmailCaptureProps {
  buttonText?: string;
  className?: string;
}

const EmailCapture = ({ buttonText = "Get Your Free Audit", className = "" }: EmailCaptureProps) => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "You're in.",
      description: "We'll deliver your AI visibility audit within 48 hours.",
    });
    setEmail("");
  };

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
        className="h-12 flex-1 rounded-xl border border-border bg-secondary/60 px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
      />
      <button
        type="submit"
        className="h-12 px-6 rounded-xl bg-primary text-primary-foreground text-sm font-sans font-medium whitespace-nowrap hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default EmailCapture;
