const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border/40">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="font-display text-xl text-foreground mb-3 block">
              Vyzora<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              AEO & GEO optimization for B2B brands who want to be recommended by AI —
              not just ranked by Google.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground/60 font-sans font-medium mb-4">Navigation</p>
            <nav className="flex flex-col gap-3">
              {["#services", "#how-it-works", "#why-now", "#audit-preview"].map((href, i) => {
                const labels = ["Services", "How It Works", "Why Now", "Free Audit"];
                return (
                  <a
                    key={href}
                    href={href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {labels[i]}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground/60 font-sans font-medium mb-4">Get in touch</p>
            <a
              href="#audit-preview"
              className="inline-flex h-10 px-5 rounded-lg bg-primary text-primary-foreground text-sm font-sans font-medium items-center hover:bg-primary/90 transition-colors mb-4"
            >
              Get Free Audit
            </a>
            <p className="text-xs text-muted-foreground">
              No commitment. Results in 48 hours.
            </p>
          </div>
        </div>

        <div className="amber-line mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/60 font-sans">
          <p>© {new Date().getFullYear()} Vyzora.ai. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-muted-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-muted-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
