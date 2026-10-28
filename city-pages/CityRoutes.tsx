// City × service pages, registered into routeConfig by AppRouting.tsx (registerCityRoutes).
import React from "react";
import AILandingPage from "../ai-landing-pages/AILandingPage";
import { AI_PAGES } from "../ai-landing-pages/aiPages";
import { CITY_DATA, LIVE_WAVE } from "./cities";
import { compose, hub, cityUrl } from "./cityCompose";
import { SEO } from "../SEO";
import { SiteLink } from "../SiteLink";
import { SITE_URL } from "../routing/SiteStructure";

const base = (s: any) => { const p = AI_PAGES.find(x => x.url === s.dubai)!; return { problems: p.problems, deliverables: p.deliverables.map(d => ({ t: d.title, d: d.text })), useCases: p.useCases, faqs: p.faqs, guide: (p.guide || []).map(g => ({ h: g.heading, t: g.text })) }; };
const toPage = (x: any) => ({ ...x, metaDescription: x.meta, secondaryKeywords: x.secondary, deliverables: x.deliverables.map((d: any) => ({ title: d.t, text: d.d })), guide: x.guide.map((g: any) => ({ heading: g.h, text: g.t })), related: [], cityRelated: x.related, indexable: x.wave <= LIVE_WAVE });

function CityHub({ city }: { city: any }) {
  const h = hub(city, CITY_DATA.services);
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16">
      <SEO title={h.title} description={h.intro.slice(0, 155)} keywords={`consultant ${city.city}, ai consultant ${city.city}, marketing ${city.city}`} ogImage={SITE_URL + "/og-image.png"} noIndex={city.wave > LIVE_WAVE}
        structuredData={{ "@context": "https://schema.org", "@type": "ItemList", name: h.h1, itemListElement: h.links.map((l: any, i: number) => ({ "@type": "ListItem", position: i + 1, name: l.label, url: SITE_URL + l.url })) }} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{h.h1}</h1>
        <p className="text-lg text-muted-foreground mb-8">{h.intro}</p>
        <ul className="grid sm:grid-cols-2 gap-3">{h.links.map((l: any) => <li key={l.url}><SiteLink to={l.url} className="block p-4 border border-border rounded-xl hover:border-primary">{l.label}</SiteLink></li>)}</ul>
      </div>
    </main>
  );
}

export function registerCityRoutes(routeConfig: Record<string, () => React.ReactNode>) {
  CITY_DATA.cities.forEach((c: any) => {
    routeConfig[cityUrl(c)] = () => <CityHub city={c} />;
    CITY_DATA.services.forEach((s: any) => {
      routeConfig[cityUrl(c, s)] = () => <AILandingPage page={toPage(compose(c, s, base(s), CITY_DATA.services)) as any} />;
    });
  });
}
