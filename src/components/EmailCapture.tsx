import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import GlitchButtonText from "@/components/GlitchButtonText";

interface EmailCaptureProps {
  buttonText?: string;
  className?: string;
}

const EmailCapture = ({ buttonText = ">>> Initialize Audit", className = "" }: EmailCaptureProps) => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: ">>> I'M IN.",
      description: "We'll be in touch within 24 hours with your AI visibility audit.",
    });
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 w-full max-w-md ${className}`}>
      <Input
        type="email"
        placeholder=">> enter_work_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-12 bg-secondary/50 border-primary/20 text-foreground font-mono text-sm placeholder:text-primary/30 focus:border-primary/50 terminal-border"
      />
      <Button type="submit" size="lg" className="h-12 px-6 font-mono font-medium whitespace-nowrap text-sm tracking-wide">
        <GlitchButtonText text={buttonText} />
      </Button>
    </form>
  );
};

export default EmailCapture;
