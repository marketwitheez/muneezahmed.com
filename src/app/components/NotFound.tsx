import React from "react";
import { SEO } from "./SEO";
import { Navigation } from "./Navigation";
import { OptimizedFooter } from "./AppFooter";
import { useRouter } from "./Router";
import { SiteLink } from "./SiteLink";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/dubai", label: "Dubai services" },
  { to: "/case-studies", label: "Case studies" },
  { to: "/blog", label: "Blog" },
];

// Rendered for any unknown URL. noindex stops it being treated as a duplicate homepage (soft 404).
export function NotFound() {
  const { navigate } = useRouter();
  return (
    <>
      <SEO title="Page Not Found | Muneez Ahmed" description="This page doesn't exist. Browse services, industries, case studies or the blog." noIndex />
      <Navigation />
      <main className="min-h-[70vh] pt-32 pb-16 px-6 bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary font-semibold mb-2">404</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Page not found</h1>
          <p className="text-lg text-muted-foreground mb-10">The page you're looking for has moved or never existed. Try one of these:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {LINKS.map(l => (
              <SiteLink key={l.to} to={l.to} className="px-5 py-2 rounded-md border border-primary/30 text-primary hover:bg-primary/10 transition-colors text-sm font-medium">
                {l.label}
              </SiteLink>
            ))}
          </div>
        </div>
      </main>
      <OptimizedFooter navigate={navigate} />
    </>
  );
}
