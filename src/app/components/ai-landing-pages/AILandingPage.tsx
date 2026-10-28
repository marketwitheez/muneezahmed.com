import { useEffect, useState } from "react";
import { SEO } from "../SEO";
import { SiteLink } from "../SiteLink";
import { AlertCircle, Check, ArrowRight, ArrowUpRight, Calendar, MessageCircle, Plus, Minus, Star } from "lucide-react";
import { AIPage, AI_PAGES } from "./aiPages";
import { SITE_URL } from "../routing/SiteStructure";

const STEPS = [
  { n: "01", t: "Understand", d: "Learn how your business really works: processes, data, tools and bottlenecks." },
  { n: "02", t: "Simplify", d: "Design and build the solution, automating the work with AI." },
  { n: "03", t: "Scale", d: "Launch, train your team, measure results and improve as you grow." },
];
// Same assets the homepage uses (copy from src/assets if paths differ)
const PORTRAIT = "/images/muneez-ahmed.png";
const TESTIMONIALS = [
  { name: "Sarah Johnson", position: "Marketing Director", company: "Fashion Forward", image: "/images/testimonials/sarah-johnson.png", content: "ROAS increased by 300% within the first quarter. Customer acquisition cost dropped by 40%. Data-driven approach with exceptional results.", results: "300% ROAS increase" },
  { name: "Ahmed Al-Rashid", position: "CEO", company: "PropTech Solutions", image: "/images/testimonials/ahmed-al-rashid.png", content: "Game-changer for our real estate platform. Deep understanding of the UAE market. Generated 200+ qualified leads in 5 months.", results: "200+ qualified leads" },
  { name: "Dr. Priya Sharma", position: "Clinic Director", company: "HealthPlus Clinic", image: "/images/testimonials/priya-sharma.png", content: "Navigated healthcare advertising compliance perfectly. Patient bookings increased by 250%. Strong online presence achieved.", results: "250% booking increase" },
];
const Stars = ({ size = 16 }: { size?: number }) => <span className="flex gap-0.5">{[0,1,2,3,4].map(i => <Star key={i} size={size} className="fill-yellow-400 text-yellow-400" />)}</span>;
const TRUST = [{ v: "6.2x", l: "Average client ROAS" }, { v: "50+", l: "Businesses scaled" }, { v: "$2M+", l: "Client revenue generated" }];

export default function AILandingPage({ page }: { page: AIPage }) {
  // FAQPage + ProfessionalService schema; BreadcrumbList, canonical, OG/Twitter and robots come from <SEO>.
  const [open, setOpen] = useState(0);
  useEffect(() => { setOpen(0); window.scrollTo(0, 0); }, [page.url]);
  const canonical = SITE_URL + page.url;
  const cityRelated = (page as any).cityRelated as { label: string; url: string }[] | undefined;
  const related = page.related.map(s => AI_PAGES.find(p => p.slug === s && p.market === page.market)).filter(Boolean) as AIPage[];
  const schema = [
    { "@context": "https://schema.org", "@type": "ProfessionalService", name: "Muneez Ahmed – " + page.h1, url: canonical, description: page.metaDescription,
      areaServed: (page as any).city ? [(page as any).city, (page as any).country] : page.market === "dubai" ? ["Dubai", "United Arab Emirates"] : "Worldwide", provider: { "@type": "Person", name: "Muneez Ahmed", jobTitle: "AI & Growth Consultant", image: SITE_URL + PORTRAIT, url: SITE_URL }, image: SITE_URL + "/og-image.png", priceRange: "$", serviceType: page.cluster },
    { "@context": "https://schema.org", "@type": "WebPage", name: page.title, url: canonical, description: page.metaDescription, inLanguage: "en", primaryImageOfPage: SITE_URL + "/og-image.png", dateModified: "2026-10-28" },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }
  ];
  return (
    <>
      <SEO
        title={page.title}
        description={page.metaDescription}
        keywords={[page.keyword, ...page.secondaryKeywords].join(", ")}
        ogImage={SITE_URL + "/og-image.png"}
        noIndex={(page as any).indexable === false}
        structuredData={{ "@context": "https://schema.org", "@graph": schema.map(({ ["@context"]: _c, ...rest }: any) => rest) }}
      />
      <main className="min-h-screen bg-background text-foreground">
        <section className="px-6 pt-16 pb-12">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
           <div>
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6 flex gap-1.5 flex-wrap">
              <SiteLink to="/">Home</SiteLink><span>/</span><SiteLink to={page.market === "dubai" ? "/dubai" : "/services"}>{page.market === "dubai" ? "Dubai" : "Services"}</SiteLink><span>/</span><span className="text-foreground">{page.h1}</span>
            </nav>
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-5">{page.eyebrow}</span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5 max-w-3xl">{page.h1}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-8">{page.intro}</p>
            <div className="flex flex-wrap items-center gap-2 mb-7"><Stars size={18} /><strong>4.9</strong><span className="text-muted-foreground">from 100+ client reviews</span></div>
            <div className="flex flex-wrap gap-3">
              <SiteLink to="/#contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-lg font-medium"><Calendar size={18} />Book a Strategy Call</SiteLink>
              <a href="https://wa.me/971569623049" className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg text-lg font-medium"><MessageCircle size={18} />WhatsApp</a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-3xl">
              {TRUST.map(t => <div key={t.l} className="border-t-2 border-primary pt-3"><div className="text-2xl font-bold">{t.v}</div><div className="text-sm text-muted-foreground">{t.l}</div></div>)}
            </div>
           </div>
           <div className="relative max-w-sm w-full lg:justify-self-end">
             <div className="rounded-2xl overflow-hidden p-2 border border-border bg-gradient-to-br from-primary/20 to-transparent">
               <img src={PORTRAIT} alt="Muneez Ahmed, AI & Growth Consultant in Dubai" className="block w-full h-auto rounded-xl" width={480} height={600} />
             </div>
             <div className="absolute -left-4 -bottom-5 bg-card border border-border rounded-xl px-4 py-3 shadow-xl">
               <div className="font-bold text-lg">Muneez Ahmed</div>
               <div className="text-sm text-muted-foreground mb-1">AI & Growth Consultant · Dubai</div>
               <div className="flex items-center gap-1.5 text-sm"><Stars size={14} /><strong>4.9</strong><span className="text-muted-foreground">· 100+ reviews</span></div>
             </div>
           </div>
          </div>
        </section>

        <section className="px-6 py-12 bg-muted/30 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Sound familiar?</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {page.problems.map(p => <div key={p} className="flex gap-3 p-6 bg-card border border-border rounded-xl"><AlertCircle className="text-primary shrink-0" size={20} /><p className="leading-relaxed">{p}</p></div>)}
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-3">What you get</h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl">Delivered end to end by one senior consultant, from first workshop to working system.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {page.deliverables.map(d => <div key={d.title} className="p-7 bg-card border border-border rounded-2xl hover:border-primary/50 transition"><div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4"><Check size={20} /></div><h3 className="text-xl font-semibold mb-2">{d.title}</h3><p className="text-muted-foreground leading-relaxed">{d.text}</p></div>)}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-muted/30 border-y border-border">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">How it works</h2>
              <ol className="space-y-6">{STEPS.map(s => <li key={s.n} className="flex gap-4"><span className="text-sm font-bold text-primary min-w-8">{s.n}</span><div><h3 className="text-lg font-semibold mb-1">{s.t}</h3><p className="text-muted-foreground">{s.d}</p></div></li>)}</ol>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Typical use cases</h2>
              <ul className="space-y-3">{page.useCases.map(u => <li key={u} className="flex items-center gap-3 px-5 py-4 bg-card border border-border rounded-xl"><ArrowRight className="text-primary" size={18} />{u}</li>)}</ul>
            </div>
          </div>
        </section>

        {page.guide && page.guide.length > 0 && (
          <section className="px-6 py-16">
            <div className="max-w-3xl mx-auto space-y-10">
              {page.guide.map(g => (
                <article key={g.heading} className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight">{g.heading}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{g.text}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="px-6 py-16 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <h2 className="text-3xl font-bold">What clients say</h2>
              <div className="flex items-center gap-2"><Stars /><strong>4.9</strong><span className="text-muted-foreground">· 100+ verified reviews</span></div>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {TESTIMONIALS.map(tm => (
                <figure key={tm.name} className="flex flex-col gap-4 p-7 bg-card border border-border rounded-2xl">
                  <Stars size={14} />
                  <blockquote className="leading-relaxed flex-1">“{tm.content}”</blockquote>
                  <span className="self-start px-2 py-0.5 rounded-md bg-primary/10 text-primary text-sm font-medium">{tm.results}</span>
                  <figcaption className="flex items-center gap-3 pt-4 border-t border-border">
                    <img src={tm.image} alt={tm.name} className="w-12 h-12 rounded-full object-cover border-2 border-primary/50" loading="lazy" />
                    <div><div className="font-semibold">{tm.name}</div><div className="text-sm text-muted-foreground">{tm.position}, {tm.company}</div></div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Frequently asked questions</h2>
            <div className="space-y-3">
              {page.faqs.map((f, i) => (
                <div key={f.q} className={"bg-card border rounded-xl " + (open === i ? "border-primary/50" : "border-border")}>
                  <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex justify-between items-center gap-4 px-6 py-5 text-left text-lg font-semibold" aria-expanded={open === i}>{f.q}{open === i ? <Minus className="text-primary" size={18} /> : <Plus className="text-primary" size={18} />}</button>
                  {open === i && <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {cityRelated && cityRelated.length > 0 && (
          <section className="px-6 py-12 border-t border-border"><div className="max-w-6xl mx-auto"><h2 className="text-2xl font-bold mb-5">Related services</h2><div className="flex flex-wrap gap-3">{cityRelated.map(r => <SiteLink key={r.url} to={r.url} className="inline-flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-lg hover:border-primary hover:text-primary">{r.label}<ArrowUpRight size={16} /></SiteLink>)}</div></div></section>
        )}
        {related.length > 0 && (
          <section className="px-6 py-12 border-t border-border">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-5">Related services</h2>
              <div className="flex flex-wrap gap-3">{related.map(r => <SiteLink key={r.url} to={r.url} className="inline-flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-lg hover:border-primary hover:text-primary">{r.h1}<ArrowUpRight size={16} /></SiteLink>)}</div>
            </div>
          </section>
        )}

        <section className="px-6 py-16 bg-muted/30 border-t border-border">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-2xl flex gap-5 items-start"><img src={PORTRAIT} alt="Muneez Ahmed" className="w-[72px] h-[72px] rounded-full object-cover object-top border-2 border-primary shrink-0" /><div><h2 className="text-3xl font-bold mb-3">AI & Marketing that grows your business.</h2><p className="text-muted-foreground text-lg">A free 30-minute strategy call with me to map your biggest opportunities and what a solution would look like.</p></div></div>
            <SiteLink to="/#contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg text-lg font-medium">Book a Strategy Call<ArrowRight size={18} /></SiteLink>
          </div>
        </section>
      </main>
    </>
  );
}
