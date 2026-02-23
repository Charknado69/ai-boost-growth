import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

const TermsOfService = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-32 pb-20 px-6">
        <div className="container max-w-3xl mx-auto">
          <span className="section-label mb-5 block">Legal</span>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight mb-6">
            Terms of Service
          </h1>
          <p className="text-xs text-muted-foreground/60 font-sans mb-12">
            Last updated: February 2026
          </p>

          <div className="space-y-10 text-foreground/80 text-sm leading-relaxed">
            <div>
              <h2 className="font-display text-xl mb-3 text-foreground">1. Services</h2>
              <p>
                Vyzora.ai provides Answer Engine Optimisation (AEO) and Generative Engine
                Optimisation (GEO) services to help brands improve their visibility across AI
                platforms. Our services include AI visibility audits, content optimisation, schema
                markup implementation, citation monitoring, and related consulting.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl mb-3 text-foreground">2. Free Audit</h2>
              <p>
                The free AI visibility audit is provided at no cost and with no obligation. By
                submitting your email address, you consent to receiving the audit report and
                limited follow-up communications. You may opt out of further communications at
                any time.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl mb-3 text-foreground">3. Intellectual Property</h2>
              <p>
                All content, tools, methodologies, and materials on this website are the
                intellectual property of Vyzora.ai. You may not reproduce, distribute, or create
                derivative works from our content without prior written consent.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl mb-3 text-foreground">4. Accuracy of Information</h2>
              <p>
                While we strive to ensure all data and statistics presented on our website are
                accurate and properly sourced, AI platform behaviours change frequently. We do not
                guarantee specific outcomes from our optimisation services, as AI platform
                algorithms are outside our control.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl mb-3 text-foreground">5. Limitation of Liability</h2>
              <p>
                Vyzora.ai shall not be liable for any indirect, incidental, or consequential
                damages arising from the use of our website or services. Our total liability for
                any claim shall not exceed the amount paid by you for the specific service giving
                rise to the claim.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl mb-3 text-foreground">6. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with applicable law.
                Any disputes arising from these terms shall be resolved through good-faith
                negotiation before pursuing formal proceedings.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl mb-3 text-foreground">7. Changes to These Terms</h2>
              <p>
                We reserve the right to update these terms at any time. Material changes will be
                communicated via our website. Continued use of our services after changes
                constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl mb-3 text-foreground">8. Contact</h2>
              <p>
                For questions about these terms, contact us at{" "}
                <a href="mailto:hello@vyzora.ai" className="text-primary hover:text-primary/80 transition-colors">
                  hello@vyzora.ai
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

export default TermsOfService;
