// Dubai location pages – one page per search intent.
// The previous 170 near-duplicate keyword pages are merged into these 17
// (old URLs 301 to the matching page – see routing/SiteStructure.ts → LEGACY_REDIRECTS).

export interface KeywordData {
  keyword: string;
  slug: string;
  category: string;
  title: string;
  metaDescription: string;
  h1: string;
  focus: string;
  secondaryKeywords?: string[];
}

export const DUBAI_KEYWORDS: KeywordData[] = [
  // Digital Marketing
  {
    keyword: "digital marketing specialist dubai",
    slug: "digital-marketing-specialist",
    category: "Digital Marketing",
    title: "Digital Marketing Specialist in Dubai | Muneez Ahmed",
    metaDescription: "Muneez Ahmed is a Dubai-based digital marketing specialist with a 6.2x average ROAS across Google Ads, Meta Ads, SEO and CRO. Book a free consultation.",
    h1: "Digital Marketing Specialist in Dubai",
    focus: "Digital Marketing",
    secondaryKeywords: ["best digital marketer in uae", "digital marketing expert in dubai", "top digital marketing expert in dubai", "certified digital marketing expert", "marketing specialist dubai"]
  },
  {
    keyword: "digital marketing services dubai",
    slug: "digital-marketing",
    category: "Digital Marketing",
    title: "Digital Marketing Services in Dubai | Senior Consultant-Led",
    metaDescription: "Full-service digital marketing in Dubai: paid ads, SEO, social media and conversion optimisation run by one senior specialist. Transparent pricing and weekly reporting.",
    h1: "Digital Marketing Services in Dubai",
    focus: "Digital Marketing",
    secondaryKeywords: ["digital marketing agency dubai", "digital marketing company dubai", "online marketing dubai", "marketing company dubai", "media marketing agency dubai"]
  },
  // Consulting & Training
  {
    keyword: "digital marketing consultant dubai",
    slug: "digital-marketing-consultant",
    category: "Consulting & Training",
    title: "Digital Marketing Consultant in Dubai | Strategy & Audits",
    metaDescription: "Independent digital marketing consultant in Dubai. Channel audits, growth strategy and hands-on guidance for founders and in-house teams. Book a strategy session.",
    h1: "Digital Marketing Consultant in Dubai",
    focus: "Digital Marketing Consulting",
    secondaryKeywords: ["marketing consultant dubai", "independent digital marketing consultant", "online marketing consultant", "digital marketing consulting services", "digital marketing consultant for small business"]
  },
  {
    keyword: "b2b marketing dubai",
    slug: "b2b-marketing",
    category: "Consulting & Training",
    title: "B2B Marketing in Dubai | LinkedIn, Google Ads & Lead Gen",
    metaDescription: "B2B marketing for Dubai companies: LinkedIn Ads, Google Ads and lead-generation funnels that deliver qualified sales meetings, not just form fills.",
    h1: "B2B Marketing in Dubai",
    focus: "B2B Marketing",
    secondaryKeywords: ["b2b marketing consultant dubai", "marketing to companies"]
  },
  {
    keyword: "digital marketing courses dubai",
    slug: "digital-marketing-courses",
    category: "Consulting & Training",
    title: "Digital Marketing Training in Dubai | Team Workshops",
    metaDescription: "Practical digital marketing training in Dubai for teams and founders: Google Ads, Meta Ads, GA4 and CRO taught on your own accounts by a working specialist.",
    h1: "Digital Marketing Training in Dubai",
    focus: "Digital Marketing Training",
    secondaryKeywords: ["digital marketing courses in dubai", "digital marketing workshop dubai"]
  },
  // Paid Advertising
  {
    keyword: "performance marketing dubai",
    slug: "performance-marketing",
    category: "Paid Advertising",
    title: "Performance Marketing in Dubai | 6.2x Average ROAS",
    metaDescription: "Performance marketing in Dubai measured on revenue and ROAS. Paid media, tracking and CRO run by one specialist with $2M+ revenue generated for clients.",
    h1: "Performance Marketing in Dubai",
    focus: "Performance Marketing",
    secondaryKeywords: ["performance marketing agency dubai", "performance marketing company", "paid media consultant dubai", "targeted marketing dubai"]
  },
  {
    keyword: "google ads expert dubai",
    slug: "google-ads",
    category: "Paid Advertising",
    title: "Google Ads Expert in Dubai | Search, Shopping & PMax",
    metaDescription: "Google Ads management in Dubai: Search, Shopping, Performance Max and YouTube campaigns built for leads and sales. Free account audit for new clients.",
    h1: "Google Ads Expert in Dubai",
    focus: "Google Ads",
    secondaryKeywords: ["google ads consultant dubai", "google ads agency dubai", "google ads management dubai"]
  },
  {
    keyword: "ppc management dubai",
    slug: "ppc",
    category: "Paid Advertising",
    title: "PPC Management in Dubai | Pay-Per-Click Experts",
    metaDescription: "Pay-per-click management in Dubai across Google, Microsoft and social platforms. Tight bidding, ad testing and clear reporting on cost per lead and ROAS.",
    h1: "PPC Management in Dubai",
    focus: "PPC Management",
    secondaryKeywords: ["pay per click dubai", "ppc agency dubai", "paid search consultant dubai"]
  },
  {
    keyword: "facebook ads dubai",
    slug: "facebook-ads",
    category: "Paid Advertising",
    title: "Facebook & Instagram Ads in Dubai | Meta Ads Specialist",
    metaDescription: "Meta Ads management in Dubai: Facebook and Instagram campaigns with creative testing, lead forms and catalogue sales that scale profitably.",
    h1: "Facebook & Instagram Ads in Dubai",
    focus: "Facebook Advertising",
    secondaryKeywords: ["facebook ads agency dubai", "meta ads dubai", "instagram ads dubai"]
  },
  // SEO & Search
  {
    keyword: "seo services dubai",
    slug: "seo",
    category: "SEO & Search",
    title: "SEO Services in Dubai | Technical, Local & Content SEO",
    metaDescription: "SEO in Dubai that grows organic leads: technical fixes, local SEO, Google Business Profile and content built around how UAE customers search.",
    h1: "SEO Services in Dubai",
    focus: "SEO",
    secondaryKeywords: ["seo expert dubai", "seo company dubai", "search engine optimization dubai", "local seo dubai"]
  },
  {
    keyword: "search engine marketing dubai",
    slug: "search-engine-marketing",
    category: "SEO & Search",
    title: "Search Engine Marketing in Dubai | SEO + Google Ads",
    metaDescription: "Search engine marketing in Dubai combining SEO and Google Ads into one plan, so paid and organic search work together instead of competing for budget.",
    h1: "Search Engine Marketing in Dubai",
    focus: "Search Engine Marketing",
    secondaryKeywords: ["sem dubai", "seo and sem services", "search marketing dubai"]
  },
  {
    keyword: "content marketing dubai",
    slug: "content-marketing",
    category: "SEO & Search",
    title: "Content Marketing in Dubai | SEO Content That Converts",
    metaDescription: "Content marketing in Dubai: keyword-led articles, landing pages and social content that rank, earn trust and turn readers into enquiries.",
    h1: "Content Marketing in Dubai",
    focus: "Content Marketing",
    secondaryKeywords: ["content marketing agency dubai", "content writing dubai"]
  },
  // Social Media
  {
    keyword: "social media marketing dubai",
    slug: "social-media-marketing",
    category: "Social Media",
    title: "Social Media Marketing in Dubai | Strategy, Content & Ads",
    metaDescription: "Social media marketing in Dubai across Instagram, TikTok, LinkedIn and Snapchat. Strategy, content and paid promotion focused on leads and sales.",
    h1: "Social Media Marketing in Dubai",
    focus: "Social Media Marketing",
    secondaryKeywords: ["social media marketing agency dubai", "social media marketing company dubai", "smm dubai", "social media services dubai"]
  },
  {
    keyword: "social media management dubai",
    slug: "social-media-management",
    category: "Social Media",
    title: "Social Media Management in Dubai | Monthly Plans",
    metaDescription: "Social media management in Dubai: content calendars, posting, community management and monthly reporting for brands that want consistent, on-brand channels.",
    h1: "Social Media Management in Dubai",
    focus: "Social Media Management",
    secondaryKeywords: ["social media management company dubai", "social media manager dubai"]
  },
  {
    keyword: "social media advertising dubai",
    slug: "social-media-advertising",
    category: "Social Media",
    title: "Social Media Advertising in Dubai | Paid Social Campaigns",
    metaDescription: "Paid social advertising in Dubai on Meta, TikTok, Snapchat and LinkedIn. Audience research, creative testing and budget scaling tied to real revenue.",
    h1: "Social Media Advertising in Dubai",
    focus: "Social Media Advertising",
    secondaryKeywords: ["social media ad campaigns dubai", "paid social dubai", "social media advertising company dubai"]
  },
  // Web Design & Development
  {
    keyword: "web design dubai",
    slug: "web-design",
    category: "Web Design & Development",
    title: "Web Design in Dubai | Conversion-Focused Websites",
    metaDescription: "Website design in Dubai built to convert: clear UX, fast mobile pages and landing pages designed around your ads and SEO. Free design consultation.",
    h1: "Web Design in Dubai",
    focus: "Website Design",
    secondaryKeywords: ["website design company dubai", "web design agency dubai", "website designers dubai"]
  },
  {
    keyword: "website development dubai",
    slug: "website-development",
    category: "Web Design & Development",
    title: "Website Development in Dubai | Shopify, WordPress & React",
    metaDescription: "Website development in Dubai on Shopify, WordPress and React. Fast, secure, SEO-ready builds with tracking set up from day one.",
    h1: "Website Development in Dubai",
    focus: "Website Development",
    secondaryKeywords: ["web development company dubai", "website developer dubai"]
  },
];

export function getKeywordBySlug(slug: string): KeywordData | undefined {
  return DUBAI_KEYWORDS.find(k => k.slug === slug);
}

export function getKeywordsByCategory(category: string): KeywordData[] {
  return DUBAI_KEYWORDS.filter(k => k.category === category);
}

export function getAllCategories(): string[] {
  const order = ["Digital Marketing", "Paid Advertising", "SEO & Search", "Social Media", "Web Design & Development", "Consulting & Training"];
  const present = new Set(DUBAI_KEYWORDS.map(k => k.category));
  return order.filter(c => present.has(c));
}

export function getKeywordRoutePath(slug: string): string {
  return `/dubai/${slug}`;
}
