import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <span className="section-label mb-6 block">404</span>
        <h1 className="font-display text-5xl sm:text-6xl leading-tight mb-4">
          Page not{" "}
          <em style={{ fontStyle: "italic" }} className="text-primary">found.</em>
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex h-12 px-8 rounded-xl bg-primary text-primary-foreground text-sm font-sans font-medium items-center hover:bg-primary/90 transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
