import { useEffect } from 'react';
import { useRouter } from './Router';
import { SITE_URL, PAGE_META, NOINDEX_ROUTES, normalizePath } from './routing/SiteStructure';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string; // kept for compatibility – canonical is now always derived from the route
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: any;
  noIndex?: boolean;
  noFollow?: boolean;
}

const BREADCRUMB_LABELS: Record<string, string> = {
  services: 'Services',
  industries: 'Industries',
  dubai: 'Dubai',
  'case-studies': 'Case Studies',
  blog: 'Blog',
  awards: 'Awards',
  portfolio: 'Portfolio',
};

const titleCase = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

function buildBreadcrumbs(path: string, pageTitle: string) {
  const parts = path.split('/').filter(Boolean);
  if (parts.length === 0) return null;
  const items = [{ name: 'Home', url: `${SITE_URL}/` }];
  let acc = '';
  parts.forEach((part, i) => {
    acc += '/' + part;
    const isLast = i === parts.length - 1;
    const name = isLast ? (pageTitle.split('|')[0].split(' – ')[0].trim() || titleCase(part)) : (BREADCRUMB_LABELS[part] || titleCase(part));
    items.push({ name, url: `${SITE_URL}${acc}` });
  });
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
  };
}

export function SEO({
  title = "Muneez Ahmed – AI & Growth Consultant in Dubai",
  description = "Dubai-based AI and growth consultant: AI implementation, business automation, custom CRM and ERP software, and data-driven performance marketing.",
  keywords = "ai consultant dubai, ai automation dubai, custom crm development dubai, ai chatbot dubai, performance marketing specialist dubai, digital marketing consultant dubai",
  ogImage = `${SITE_URL}/og-image.png`,
  ogType = "website",
  structuredData,
  noIndex = false,
}: SEOProps) {
  const { currentRoute } = useRouter();
  const path = normalizePath(currentRoute);
  const override = PAGE_META[path];
  const finalTitle = override?.title || title;
  const finalDescription = override?.description || description;
  const finalNoIndex = noIndex || NOINDEX_ROUTES.includes(path);
  // One canonical rule for the whole site: www + the resolved route, no trailing slash.
  const canonicalHref = `${SITE_URL}${path === '/' ? '/' : path}`;

  useEffect(() => {
    document.title = finalTitle;
    setRobotsMetaTag(finalNoIndex);

    updateMetaTag('description', finalDescription);
    updateMetaTag('keywords', keywords);

    updateMetaTag('og:title', finalTitle, 'property');
    updateMetaTag('og:description', finalDescription, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:type', ogType, 'property');
    updateMetaTag('og:url', canonicalHref, 'property');
    updateMetaTag('og:site_name', 'Muneez Ahmed', 'property');
    updateMetaTag('og:locale', 'en_US', 'property');
    updateMetaTag('og:image:width', '1200', 'property');
    updateMetaTag('og:image:height', '630', 'property');
    updateMetaTag('og:image:alt', 'Muneez Ahmed – AI & Growth Consultant, Dubai', 'property');
    updateMetaTag('twitter:image:alt', 'Muneez Ahmed – AI & Growth Consultant, Dubai', 'name');
    updateMetaTag('theme-color', '#0f0f0f');

    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', finalTitle, 'name');
    updateMetaTag('twitter:description', finalDescription, 'name');
    updateMetaTag('twitter:image', ogImage, 'name');
    updateMetaTag('twitter:site', '@muneez_ahmed', 'name');
    updateMetaTag('twitter:creator', '@muneez_ahmed', 'name');

    updateCanonicalTag(canonicalHref);
    updateMetaTag('viewport', 'width=device-width, initial-scale=1, shrink-to-fit=no');
    updateMetaTag('author', 'Muneez Ahmed');
    updateMetaTag('language', 'en');

    updateStructuredData(structuredData || DEFAULT_STRUCTURED_DATA);
    updateBreadcrumbs(buildBreadcrumbs(path, finalTitle));
  }, [finalTitle, finalDescription, keywords, canonicalHref, ogImage, ogType, structuredData, finalNoIndex, path]);

  return null;
}

const DEFAULT_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Muneez Ahmed",
  "jobTitle": "AI & Growth Consultant",
  "image": `${SITE_URL}/og-image.png`,
  "description": "Dubai-based AI and growth consultant: AI implementation, business automation, custom CRM development and data-driven performance marketing for brands in the UAE and worldwide.",
  "url": SITE_URL,
  "email": "hello@muneezahmed.com",
  "telephone": "+971586388362",
  "sameAs": [
    "https://www.linkedin.com/in/mrmnz/",
    "https://www.facebook.com/muneezahmed183",
    "https://www.instagram.com/mr_mnz/",
    "https://x.com/muneez_ahmed"
  ],
  "address": { "@type": "PostalAddress", "addressLocality": "Dubai", "addressCountry": "AE" },
  "knowsAbout": ["AI Consulting", "AI Implementation", "Business Automation", "AI Agents", "Custom CRM Development", "ERP Systems", "Performance Marketing", "Google Ads", "SEO"],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "AI & Growth Consultant",
    "occupationLocation": { "@type": "City", "name": "Dubai" }
  }
};

function setRobotsMetaTag(noIndex: boolean) {
  document.querySelectorAll('meta[name="robots"], meta[name="ROBOTS"], meta[name="Robots"]').forEach(tag => tag.remove());
  const robotsTag = document.createElement('meta');
  robotsTag.name = 'robots';
  robotsTag.content = noIndex ? 'noindex, follow' : 'index, follow, max-image-preview:large';
  const firstMetaTag = document.head.querySelector('meta');
  if (firstMetaTag) document.head.insertBefore(robotsTag, firstMetaTag);
  else document.head.appendChild(robotsTag);
}

function updateMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  if (name === 'robots') return;
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function updateCanonicalTag(url: string) {
  const links = document.querySelectorAll('link[rel="canonical"]');
  links.forEach((l, i) => { if (i > 0) l.remove(); });
  let link = links[0] as HTMLLinkElement | undefined;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = url;
}

function updateStructuredData(data: any) {
  document.getElementById('seo-page-ld')?.remove();
  const script = document.createElement('script');
  script.id = 'seo-page-ld';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

function updateBreadcrumbs(data: any) {
  document.getElementById('seo-breadcrumb-ld')?.remove();
  if (!data) return;
  const script = document.createElement('script');
  script.id = 'seo-breadcrumb-ld';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

export const SEOConfigs = {
  home: {
    title: "Muneez Ahmed – AI & Growth Consultant in Dubai",
    description: "Dubai-based AI and growth consultant: AI implementation, business automation, custom CRM and ERP software, and data-driven performance marketing.",
    keywords: "ai consultant dubai, ai automation dubai, custom crm development dubai, ai chatbot dubai, performance marketing specialist dubai, digital marketing consultant dubai",
    canonicalUrl: `${SITE_URL}/`,
    noIndex: false
  },

  caseStudy: (title: string, industry: string) => ({
    title: `${title} Case Study | Muneez Ahmed`,
    description: `How performance marketing helped ${title} grow in ${industry}. Real numbers, the channels used and what moved the needle.`,
    keywords: `${title.toLowerCase()} case study, ${industry.toLowerCase()} marketing, performance marketing results`,
    noIndex: false
  }),

  service: (service: string, industry: string) => ({
    title: `${service} Expert for ${industry} | Muneez Ahmed`,
    description: `${service} for ${industry} businesses in Dubai and worldwide. Proven campaigns that increase conversions and ROI.`,
    keywords: `${service.toLowerCase()} expert, ${industry.toLowerCase()} marketing, ${service.toLowerCase()} dubai`,
    noIndex: false
  }),

  expertise: (expertise: string) => ({
    title: `${expertise} Expert | Dubai & Worldwide – Muneez Ahmed`,
    description: `${expertise} services by a Dubai-based specialist working with brands worldwide. Performance-driven campaigns with measurable ROI.`,
    keywords: `${expertise.toLowerCase()} expert, ${expertise.toLowerCase()} specialist dubai, performance marketing`,
    noIndex: false
  }),

  award: (award: string) => ({
    title: `${award} | Muneez Ahmed`,
    description: `Muneez Ahmed recognised with ${award} for performance marketing results.`,
    keywords: `${award.toLowerCase()}, performance marketing award, dubai marketing expert`,
    noIndex: false
  }),

  scheduleMeeting: {
    title: "Book a Free 30-Minute Strategy Call | Muneez Ahmed",
    description: "Book a free 30-minute consultation with performance marketing specialist Muneez Ahmed and get a clear plan to grow your business.",
    keywords: "marketing consultation dubai, free marketing audit, performance marketing consultation",
    noIndex: false
  },

  caseStudies: {
    title: "Case Studies – Real Campaign Results | Muneez Ahmed",
    description: "18 performance marketing case studies across e-commerce, real estate, healthcare, education and fintech, with verified revenue and ROAS.",
    keywords: "performance marketing case studies, digital marketing portfolio, roi case studies dubai",
    noIndex: false
  }
};
