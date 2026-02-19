import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Problem", href: "#problem" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#testimonials" },
  { label: "How It Works", href: "#how-it-works" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-border/30">
      <div className="container max-w-6xl mx-auto flex items-center justify-between h-14 px-6">
        <a href="#" className="font-mono text-lg font-semibold tracking-tight">
          <span className="text-primary crt-glow">Vyzora</span><span className="text-muted-foreground">.ai</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button size="sm" className="text-xs font-mono uppercase tracking-[0.15em] h-9 px-5" asChild>
            <a href="#why-now">[ Get Audit ]</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/30 px-6 pb-6 pt-2 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button size="sm" className="w-full text-xs font-mono uppercase tracking-[0.15em]" asChild>
            <a href="#why-now" onClick={() => setOpen(false)}>[ Get Audit ]</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
