# Vyzora.ai — Launch Checklist

## Before Launch (Blocking)

### Email & Lead Capture
- [ ] Choose an email form service (Formspree, ConvertKit, Make webhook, Zapier, or direct CRM)
- [ ] Set the `FORM_ENDPOINT` constant in `src/components/EmailCapture.tsx` to your service URL
- [ ] Test the form end-to-end: submit → receive in your inbox/CRM
- [ ] Set up an auto-reply email for audit requests ("Thanks, we're on it — expect your audit within 48 hours")

### Domain & DNS
- [ ] Purchase/configure vyzora.ai domain
- [ ] Point domain to Lovable hosting (or your preferred host)
- [ ] Set up SSL certificate (usually automatic with Lovable/Vercel)
- [ ] Verify site loads correctly at https://vyzora.ai

### Email Addresses
- [ ] Set up `privacy@vyzora.ai` (referenced on Privacy Policy page)
- [ ] Set up `hello@vyzora.ai` (referenced on Terms of Service page)
- [ ] Set up a general inbox for receiving audit form submissions

### Branding Assets
- [ ] Create OG image (1200x630px) — upload as `public/og-image.png`
- [ ] Update OG image URLs in `index.html` from `https://vyzora.ai/og-image.png` to final URL
- [ ] Generate PNG favicons from `public/favicon.svg`:
  - `public/favicon-32x32.png` (32x32)
  - `public/apple-touch-icon.png` (180x180)
- [ ] Test social sharing preview on https://www.opengraph.xyz/

### Security
- [ ] Revoke the GitHub token that was shared in chat (GitHub → Settings → Developer settings → Personal access tokens)
- [ ] Generate a new token if needed for future deployments

### Legal
- [ ] Review Privacy Policy page at `/privacy` — update if your data practices differ
- [ ] Review Terms of Service page at `/terms` — have a legal professional review if possible
- [ ] Add cookie consent banner if required for your target market (EU/UK = yes)

## Before Launch (Recommended)

### Analytics & Tracking
- [ ] Set up Google Analytics 4 (or Plausible/Fathom for privacy-friendly analytics)
- [ ] Add GA4 tracking snippet to `index.html`
- [ ] Set up conversion event for email form submission
- [ ] Set up Hotjar or Microsoft Clarity for session recordings/heatmaps
- [ ] Create UTM tracking links for any launch promotion

### SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Verify ownership in Google Search Console
- [ ] Test structured data at https://search.google.com/test/rich-results
- [ ] Verify robots.txt allows all crawlers (including AI bots: GPTBot, ClaudeBot, PerplexityBot)

### Performance
- [ ] Run Lighthouse audit — aim for 90+ on all scores
- [ ] Test on real mobile devices (iPhone, Android)
- [ ] Check load time on slow connections (Chrome DevTools → Network → Slow 3G)

## After Launch

### Social Proof (Update as You Get Clients)
- [ ] Replace SocialProofSection stats with real client metrics as you gather them
- [ ] Add client logos when you have permission (even 3-4 logos makes a difference)
- [ ] Add anonymised case study results ("SaaS client: 4% → 23% citation rate in 90 days")
- [ ] Consider adding a real testimonial section once you have 2-3 client quotes

### Content & SEO
- [ ] Create a blog/resources section for AEO/GEO thought leadership
- [ ] Write 3-5 pillar articles targeting key AEO/GEO search queries
- [ ] Add FAQ schema to the homepage (you literally sell this — practice what you preach)
- [ ] Consider adding case study pages as client results come in

### Technical
- [ ] Consider migrating from Vite SPA to Next.js for SSR (better for AI crawlers — again, practice what you preach)
- [ ] Set up automated uptime monitoring (UptimeRobot, Better Stack)
- [ ] Set up error tracking (Sentry)
- [ ] Enable Lovable's preview deployments for testing changes before they go live

### Growth
- [ ] Set up email nurture sequence for audit leads who don't immediately convert
- [ ] Create a "State of AI Search" report using your audit data (lead magnet)
- [ ] Build a free AI visibility checker tool (engineering-as-marketing play)
- [ ] Add live chat or Calendly link for warm leads who want to talk immediately
