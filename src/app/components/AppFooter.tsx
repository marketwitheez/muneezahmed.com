import React, { Suspense, memo } from "react";
import { Logo, Linkedin, Facebook, Instagram, TwitterXLogo } from "./AppLazyComponents";
import { VisitPortfolioButton } from "./VisitPortfolioButton";
import { SiteLink } from "./SiteLink";
import { SERVICES, INDUSTRIES } from "./routing/SiteStructure";

const MicroLoader = () => (
  <div className="flex items-center justify-center p-4">
    <div className="w-4 h-4 border border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Crawlable site-wide links – this is what lets Google discover every section from every page.
const FOOTER_COLUMNS = [
  {
    title: "Services",
    hub: { to: "/services", label: "All services" },
    links: ["google-ads", "facebook-ads", "performance-marketing", "seo", "lead-generation", "conversion-rate-optimization", "website-development", "shopify-development"]
      .map(slug => SERVICES.find(s => s.slug === slug)!)
      .filter(Boolean)
      .map(s => ({ to: `/services/${s.slug}`, label: s.name })),
  },
  {
    title: "Industries",
    hub: { to: "/industries", label: "All industries" },
    links: ["ecommerce", "real-estate", "healthcare", "education", "fintech", "saas"]
      .map(slug => INDUSTRIES.find(i => i.slug === slug)!)
      .filter(Boolean)
      .map(i => ({ to: `/industries/${i.slug}`, label: i.name })),
  },
  {
    title: "Resources",
    hub: null,
    links: [
      { to: "/case-studies", label: "Case Studies" },
      { to: "/blog", label: "Blog" },
      { to: "/portfolio", label: "Portfolio" },
      { to: "/technical-seo", label: "Free Technical SEO Audit" },
      { to: "/book-a-meeting", label: "Book a Meeting" },
      { to: "/contact", label: "Contact" },
    ],
  },
];

export const OptimizedFooter = memo(function OptimizedFooter({ navigate }: { navigate: (path: string) => void }) {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border">

      <div className="max-w-6xl mx-auto">
        <Suspense fallback={<MicroLoader />}>
          <FooterContent navigate={navigate} />
        </Suspense>
      </div>
    </footer>
  );
});

const FooterContent = memo(function FooterContent({ navigate }: { navigate: (path: string) => void }) {
  return (
    <div>
      <nav aria-label="Footer" className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-left">
        {FOOTER_COLUMNS.map(col => (
          <div key={col.title}>
            <h2 className="text-sm font-semibold text-foreground mb-4">{col.title}</h2>
            <ul className="space-y-2">
              {col.links.map(l => (
                <li key={l.to}>
                  <SiteLink to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</SiteLink>
                </li>
              ))}
              {col.hub && (
                <li>
                  <SiteLink to={col.hub.to} className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">{col.hub.label} →</SiteLink>
                </li>
              )}
            </ul>
          </div>
        ))}
      </nav>

      <div className="text-center border-t border-border pt-10">
        <div className="mb-6 flex justify-center">
          <Suspense fallback={<div className="w-12 h-12 bg-muted animate-pulse rounded"></div>}>
            <Logo size="md" />
          </Suspense>
        </div>

        <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/80 mx-auto mb-6"></div>

        <p className="text-muted-foreground mb-8">
          Helping businesses scale through data-driven marketing strategies and conversion optimization.
        </p>

        <div className="mb-8 flex flex-wrap gap-4 justify-center items-center">
          <VisitPortfolioButton variant="outline" className="border-primary text-primary hover:bg-primary/10" />
        </div>

        <div className="flex items-center justify-center gap-6 mb-8">
          <Suspense fallback={<div className="w-10 h-10 bg-muted animate-pulse rounded-full"></div>}>
            <SocialLinks />
          </Suspense>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Muneez Ahmed. All rights reserved.</span>
          <SiteLink to="/privacy-policy" className="hover:text-primary">Privacy Policy</SiteLink>
          <SiteLink to="/terms" className="hover:text-primary">Terms &amp; Conditions</SiteLink>
          <SiteLink to="/dubai" className="hover:text-primary">Dubai Services</SiteLink>
        </div>
      </div>
    </div>
  );
});

const socialClass = "w-10 h-10 rounded-full bg-muted hover:bg-primary transition-all duration-300 flex items-center justify-center group magnetic-hover";
const iconClass = "w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300";

const SocialLinks = memo(function SocialLinks() {
  return (
    <>
      <a href="https://www.linkedin.com/in/mrmnz/" target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="LinkedIn Profile">
        <Linkedin className={iconClass} />
      </a>
      <a href="https://www.facebook.com/muneezahmed183" target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="Facebook Profile">
        <Facebook className={iconClass} />
      </a>
      <a href="https://www.instagram.com/mr_mnz/" target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="Instagram Profile">
        <Instagram className={iconClass} />
      </a>
      <a href="https://x.com/muneez_ahmed" target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="X Profile">
        <TwitterXLogo className={iconClass} />
      </a>
    </>
  );
});
