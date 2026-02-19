import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <p className="font-mono text-sm text-primary/60 mb-4 crt-glow">/// 404</p>
        <h1 className="mb-6 font-display text-5xl font-medium">
          <span className="text-primary crt-glow">Lost</span> in the matrix
        </h1>
        <p className="mb-8 text-muted-foreground font-mono text-sm">
          THE QUESTION IS: ARE YOU SURE YOU'RE IN THE RIGHT PLACE?
        </p>
        <a href="/" className="font-mono text-primary hover:text-primary/80 transition-colors text-sm crt-glow">
          [ START OVER ]
        </a>
      </div>
    </div>
  );
};

export default NotFound;
