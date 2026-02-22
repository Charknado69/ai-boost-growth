import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Now", href: "#why-now" },
  { label: "Contact", href: "#audit-preview" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-background/85 border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-xl text-foreground hover:text-primary transition-colors"
          >
            Vyzora<span className="text-primary">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#audit-preview"
              className="hidden md:inline-flex h-9 px-5 rounded-lg bg-primary text-primary-foreground text-sm font-sans font-medium items-center hover:bg-primary/90 transition-colors"
            >
              Free Audit
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col">
          <div className="container max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="#" className="font-display text-xl text-foreground">
              Vyzora<span className="text-primary">.</span>
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-3xl text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#audit-preview"
              onClick={() => setMenuOpen(false)}
              className="mt-4 h-12 px-8 rounded-xl bg-primary text-primary-foreground font-sans font-medium text-base flex items-center hover:bg-primary/90 transition-colors"
            >
              Get Free Audit
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
