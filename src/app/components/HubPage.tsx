import React from "react";
import { ArrowRight } from "lucide-react";
import { SEO } from "./SEO";
import { Navigation } from "./Navigation";
import { OptimizedFooter } from "./AppFooter";
import { useRouter } from "./Router";
import { SiteLink } from "./SiteLink";
import { SERVICES, SERVICE_GROUPS, INDUSTRIES, PAGE_META, SITE_URL, ROUTES } from "./routing/SiteStructure";
import { DUBAI_KEYWORDS } from "./dubai-landing-pages/keywords";

type Kind = "services" | "industries";

const COPY: Record<Kind, { eyebrow: string; h1: string; intro: string }> = {
  services: {
    eyebrow: "Services",
    h1: "Digital Marketing Services",
    intro: "Every service I offer, grouped by what it does for your business. Based in Dubai, working with brands across the UAE and worldwide.",
  },
  industries: {
    eyebrow: "Industries",
    h1: "Industries I Work With",
    intro: "Strategies shaped by how each industry buys. Pick yours to see the approach, channels and results.",
  },
};

function Card({ to, title, text }: { to: string; title: string; text: string }) {
  return (
    <SiteLink
      to={to}
      className="group block p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{title}</h3>
        <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
      </div>
      <p className="text-sm text-muted-foreground mt-2">{text}</p>
    </SiteLink>
  );
}

export function HubPage({ kind }: { kind: Kind }) {
  const { navigate } = useRouter();
  const path = kind === "services" ? ROUTES.services : ROUTES.industries;
  const meta = PAGE_META[path];
  const copy = COPY[kind];

  const items = kind === "services"
    ? SERVICES.map(s => ({ name: s.name, url: `/services/${s.slug}` }))
    : INDUSTRIES.map(i => ({ name: i.name, url: `/industries/${i.slug}` }));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": copy.h1,
    "url": `${SITE_URL}${path}`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": items.length,
      "itemListElement": items.map((it, i) => ({ "@type": "ListItem", "position": i + 1, "name": it.name, "url": `${SITE_URL}${it.url}` })),
    },
  };

  return (
    <>
      <SEO title={meta?.title} description={meta?.description} structuredData={structuredData} />
      <Navigation />
      <main className="pt-32 pb-16 px-6 bg-background min-h-screen">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
            <SiteLink to="/" className="hover:text-primary">Home</SiteLink>
            <span className="mx-2">/</span>
            <span className="text-foreground">{copy.eyebrow}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{copy.h1}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-12">{copy.intro}</p>

          {kind === "services" ? (
            <div className="space-y-12">
              {SERVICE_GROUPS.map(group => (
                <section key={group.id}>
                  <h2 className="text-2xl font-bold text-foreground mb-6">{group.name}</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.filter(s => s.group === group.id).map(s => (
                      <Card key={s.slug} to={`/services/${s.slug}`} title={s.name} text={s.blurb} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INDUSTRIES.map(i => (
                <Card key={i.slug} to={`/industries/${i.slug}`} title={i.name} text={i.blurb} />
              ))}
            </div>
          )}

          <section className="mt-16 p-8 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <h2 className="text-2xl font-bold text-foreground mb-2">Based in Dubai?</h2>
            <p className="text-muted-foreground mb-6">Local pages for UAE businesses, with Dubai-specific pricing, benchmarks and case studies.</p>
            <div className="flex flex-wrap gap-3">
              {DUBAI_KEYWORDS.slice(0, 8).map(k => (
                <SiteLink key={k.slug} to={`/dubai/${k.slug}`} className="px-4 py-2 rounded-md border border-border bg-background text-sm text-foreground hover:border-primary/50 hover:text-primary transition-colors">
                  {k.h1}
                </SiteLink>
              ))}
              <SiteLink to="/dubai" className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium">All Dubai services →</SiteLink>
            </div>
          </section>
        </div>
      </main>
      <OptimizedFooter navigate={navigate} />
    </>
  );
}
