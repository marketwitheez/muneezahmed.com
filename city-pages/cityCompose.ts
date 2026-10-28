// @ts-nocheck
// Composes a city × service landing page from seo/cities.json + the matching Dubai page (for deliverables).
const fill = (s, c) => s.replace(/\{c\}/g, c);
const tz = utc => { const d = utc - 4; if (d === 0) return 'the same time zone as Dubai'; const h = Math.abs(d); return `${h} hour${h === 1 ? '' : 's'} ${d > 0 ? 'ahead of' : 'behind'} Dubai`; };
const list = a => a.length < 2 ? a.join('') : a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1];
const overlap = utc => { const d = Math.abs(utc - 4); return d <= 4 ? 'a full working-day overlap' : d <= 7 ? 'a shared morning or afternoon window every working day' : 'scheduled calls at the start or end of your day, with asynchronous updates in between'; };

const META = {
  'ai-consulting': 'AI strategy, implementation and adoption that turns AI into measurable results',
  'ai-automation': 'AI workflows that automate repetitive work across sales, operations and finance',
  'ai-chatbots': 'AI agents on WhatsApp, web and voice that answer, qualify and book 24/7',
  'custom-crm-erp': 'custom CRM and ERP systems built around how your business works',
  'performance-marketing': 'revenue-focused campaigns on Google, Meta, TikTok and LinkedIn',
  'google-ads': 'Search, Performance Max and Shopping campaigns that bring buyers',
  'seo': 'technical SEO, content and AI search optimisation that wins customers',
  'digital-marketing': 'one plan across ads, SEO and social, measured on revenue',
};
function metaFor(service, c) {
  const p = META[service.slug] || service.pitch;
  const full = `${service.role} for ${c} businesses: ${p}. Remote from Dubai, book a free call.`;
  return full.length <= 160 ? full : `${service.role} for ${c} businesses: ${p}.`;
}

const USE = {
  'ai-consulting': i => `identifying where AI cuts cost or grows revenue in ${i}, then building the first working use case`,
  'ai-automation': i => `automating the repetitive admin, reporting and follow-ups that slow down ${i} teams`,
  'ai-chatbots': i => `answering ${i} customers instantly, qualifying enquiries and booking meetings around the clock`,
  'custom-crm-erp': i => `one connected system for the sales, operations and finance workflows specific to ${i}`,
  'performance-marketing': i => `campaigns that win ${i} customers profitably, optimised on real revenue rather than clicks`,
  'google-ads': i => `capturing high-intent searches from people looking for ${i} products and services`,
  'seo': i => `ranking for the questions ${i} buyers ask on Google and in AI answers`,
  'digital-marketing': i => `an integrated plan that brings ${i} brands steady, measurable demand`,
};
const Cap = s => s[0].toUpperCase() + s.slice(1);

export function cityUrl(city, service) { return `/${city.countrySlug}/${city.slug}${service ? '/' + service.slug : ''}`; }

export function compose(city, service, base, allServices) {
  const c = city.city, inds = list(city.industries), cap = s => s[0].toUpperCase() + s.slice(1);
  const kw = service.kw.map(k => fill(k, c.toLowerCase()));
  const h1 = fill(service.h1, c);
  const title = `${h1} | Muneez Ahmed`.length <= 65 ? `${h1} | Muneez Ahmed` : h1;
  return {
    url: cityUrl(city, service), slug: service.slug, market: 'city', city: c, country: city.country, cluster: service.name,
    keyword: kw[0], secondary: kw.slice(1).concat([`${service.role.toLowerCase()} ${city.country.toLowerCase()}`]),
    title, meta: metaFor(service, c),
    h1, eyebrow: `${service.name} · ${c}, ${city.country}`,
    intro: `${service.pitch} I work with ${c} companies in ${inds}, delivering remotely from Dubai with ${overlap(city.utc)}. ${city.note}`,
    problems: base.problems,
    deliverables: base.deliverables,
    useCases: city.industries.map((i, k) => `${Cap(i)} businesses in ${city.areas[k % city.areas.length]}, ${c}`).concat(base.useCases.slice(0, 1)),
    faqs: [
      { q: `Do you work with businesses in ${c}?`, a: `Yes. I work with ${c} companies remotely from Dubai, with video calls, shared dashboards and regular written updates. ${c} is ${tz(city.utc)}, which gives ${overlap(city.utc)}.` },
      { q: `How is pricing handled for ${c} clients?`, a: `Every engagement is quoted after a discovery call, in ${city.currency} or USD, with scope, timeline and total agreed before work begins.` },
      { q: `Which industries in ${c} do you support?`, a: `Common sectors include ${inds}, alongside clients in other industries with similar challenges.` },
      { q: `Can we meet in person?`, a: `Most work is delivered remotely. In-person workshops in ${c} can be arranged for larger engagements.` },
      ...base.faqs.slice(0, 2),
    ],
    guide: [
      { h: `Why ${c} businesses invest in ${service.name.toLowerCase()}`, t: `${city.note} For companies in ${inds}, ${service.name.toLowerCase()} is a way to grow without adding the same amount of cost or headcount. The focus is always on a small number of changes with clear, measurable impact.` },
      { h: `Working with a ${service.role.toLowerCase()} from Dubai`, t: `Engagements run remotely with a clear weekly rhythm: a planning call, shared progress in your tools and a short written report. Because ${c} is ${tz(city.utc)}, we plan around ${overlap(city.utc)}. Documentation and access stay with your team throughout.` },
      { h: `${service.name} for ${inds} in ${c}`, t: `In ${c}, the strongest demand comes from ${inds}. For these sectors, ${service.name.toLowerCase()} means ${(USE[service.slug] || (x => x))(city.industries[0])}, adapted to how each industry sells and operates. Engagements typically start with one priority workflow or channel, prove the result, then expand across the business, whether you are based in ${list(city.areas)} or elsewhere in ${city.country}.` },
      { h: `What to expect in the first 90 days`, t: `Weeks one to two cover discovery and priorities. The first working improvement typically ships within four to six weeks, followed by measurement, refinement and a plan for the next phase, so results are visible early rather than at the end of a long project.` },
      ...(base.guide || []).slice(0, 1),
    ],
    related: allServices.filter(s => s.slug !== service.slug).slice(0, 4).map(s => ({ label: fill(s.h1, c), url: cityUrl(city, s) })),
    wave: city.wave || 1, indexable: (city.wave || 1) <= 1,
    dubaiUrl: service.dubai, languages: city.languages, areas: city.areas,
  };
}

export function hub(city, services) {
  return { url: cityUrl(city), title: `AI, Automation & Growth Consulting in ${city.city} | Muneez Ahmed`, h1: `Consulting Services in ${city.city}`,
    intro: `${city.note} I help ${city.city} businesses with AI, automation, custom software and performance marketing, delivered remotely from Dubai.`,
    links: services.map(s => ({ label: fill(s.h1, city.city), url: cityUrl(city, s) })) };
}
