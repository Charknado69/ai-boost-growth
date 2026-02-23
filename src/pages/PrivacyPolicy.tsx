import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-32 pb-20 px-6">
        <div className="container max-w-3xl mx-auto">
          <span className="section-label mb-5 block">Legal</span>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-xs text-muted-foreground/60 font-sans mb-12">
            Last updated: February 2026
          </p>

          <div className="space-y-10 text-foreground/80 text-sm leading-relaxed">
            <div>
              <h2 className="font-display text-xl mb-3 text-foreground">1. Information We Collect</h2>
              <p>
                When you request a free AI visibility audit through our website, we collect your
                email address. We may also collect basic analytics data about how you interact with
                our website (pages visited, time on site) through privacy-respecting analytics tools.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl mb-3 text-foreground">2. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Deliver your free AI visibility audit</li>
                <li>Communicate with you about your audit results</li>
                <li>Send relevant follow-up information about our services (you can opt out at any time)</li>
                <li>Improve our website and services</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl mb-3 text-foreground">3. Data Sharing</h2>
              <p>
                We do not sell, rent, or trade your personal information to third parties. We may
                share data with trusted service providers who assist us in operating our website and
                delivering our services (e.g., email delivery platforms), subject to confidentiality
                agreements.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl mb-3 text-foreground">4. Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your
                personal data against unauthorised access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl mb-3 text-foreground">5. Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl mb-3 text-foreground">6. Cookies</h2>
              <p>
                Our website uses essential cookies required for the site to function properly. We do
                not use advertising or tracking cookies. Analytics, if enabled, use privacy-respecting
                tools that do not track individual users across websites.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl mb-3 text-foreground">7. Contact</h2>
              <p>
                If you have any questions about this privacy policy or wish to exercise your data
                rights, please contact us at{" "}
                <a href="mailto:privacy@vyzora.ai" className="text-primary hover:text-primary/80 transition-colors">
                  privacy@vyzora.ai
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
