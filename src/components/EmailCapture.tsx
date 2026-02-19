import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
      title: "You're in!",
      description: "We'll be in touch within 24 hours with your AI visibility audit.",
    });
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 w-full max-w-md ${className}`}>
      <Input
        type="email"
        placeholder="Enter your work email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-12 bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary/50"
      />
      <Button type="submit" size="lg" className="h-12 px-6 font-medium whitespace-nowrap text-sm tracking-wide">
        {buttonText}
      </Button>
    </form>
  );
};

export default EmailCapture;
