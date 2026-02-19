const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border/40">
      <div className="container max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="font-mono text-lg font-semibold tracking-tight">
          <span className="text-primary crt-glow">Vyzora</span><span className="text-muted-foreground">.ai</span>
        </div>
        <div className="flex gap-8 text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Vyzora.ai
        </p>
      </div>
    </footer>
  );
};

export default Footer;
