// SINGLE SOURCE OF TRUTH for the site's URL structure.
// Generated 2026-10-28 – edit here, then regenerate sitemap.xml / vercel.json.

export const SITE_URL = "https://www.muneezahmed.com";

export const ROUTES = {
  home: "/",
  services: "/services",
  industries: "/industries",
  dubai: "/dubai",
  dubaiSpecialist: "/dubai/digital-marketing-specialist",
  caseStudies: "/case-studies",
  blog: "/blog",
  portfolio: "/portfolio",
  contact: "/contact",
  bookMeeting: "/book-a-meeting",
  thankYou: "/thank-you",
  technicalSeo: "/technical-seo",
  performanceMarketingSeo: "/performance-marketing-seo",
  campusProposal: "/campus-proposal",
} as const;

export interface ServiceEntry { slug: string; name: string; short: string; group: string; component: string; legacy: string; blurb: string; }
export interface IndustryEntry { slug: string; name: string; short: string; component: string; legacy: string; home: string; blurb: string; }

export const SERVICE_GROUPS: { id: string; name: string }[] = [
  {
    "id": "strategy",
    "name": "Strategy & Growth"
  },
  {
    "id": "paid",
    "name": "Paid Advertising"
  },
  {
    "id": "search",
    "name": "SEO"
  },
  {
    "id": "cro",
    "name": "Conversion & Analytics"
  },
  {
    "id": "retention",
    "name": "Email, Automation & Messaging"
  },
  {
    "id": "web",
    "name": "Web Development"
  }
];

export const SERVICES: ServiceEntry[] = [
  {
    "slug": "digital-marketing",
    "name": "Digital Marketing",
    "short": "Digital Marketing",
    "group": "strategy",
    "component": "DigitalMarketingExpert",
    "legacy": "digital-marketing-expert",
    "blurb": "Full-funnel strategy across paid media, SEO and conversion optimisation."
  },
  {
    "slug": "performance-marketing",
    "name": "Performance Marketing",
    "short": "Performance Marketing",
    "group": "strategy",
    "component": "PerformanceMarketingExpert",
    "legacy": "performance-marketing-expert",
    "blurb": "ROAS-driven campaigns measured on revenue, not clicks."
  },
  {
    "slug": "lead-generation",
    "name": "Lead Generation",
    "short": "Lead Generation",
    "group": "strategy",
    "component": "LeadGenerationExpert",
    "legacy": "lead-generation-expert",
    "blurb": "Multi-channel systems that deliver qualified leads at a predictable cost."
  },
  {
    "slug": "paid-advertising",
    "name": "Paid Advertising",
    "short": "Paid Ads",
    "group": "paid",
    "component": "PaidAdsExpert",
    "legacy": "paid-ads-expert",
    "blurb": "Google, Meta, TikTok and LinkedIn ads managed for profitable scale."
  },
  {
    "slug": "google-ads",
    "name": "Google Ads",
    "short": "Google Ads",
    "group": "paid",
    "component": "GoogleAdsExpert",
    "legacy": "google-ads-expert",
    "blurb": "Search, Shopping, Performance Max and YouTube campaigns built for ROI."
  },
  {
    "slug": "ppc-management",
    "name": "PPC Management",
    "short": "PPC",
    "group": "paid",
    "component": "PPCExpert",
    "legacy": "ppc-expert",
    "blurb": "Pay-per-click management with tight bidding, testing and reporting."
  },
  {
    "slug": "facebook-ads",
    "name": "Facebook Ads",
    "short": "Facebook Ads",
    "group": "paid",
    "component": "FacebookAdsExpert",
    "legacy": "facebook-ads-expert",
    "blurb": "Meta campaigns with creative testing, audiences and catalogue sales."
  },
  {
    "slug": "instagram-ads",
    "name": "Instagram Ads",
    "short": "Instagram Ads",
    "group": "paid",
    "component": "InstagramAdvertisingExpert",
    "legacy": "instagram-advertising-expert",
    "blurb": "Reels, Stories and feed ads that turn attention into sales."
  },
  {
    "slug": "linkedin-ads",
    "name": "LinkedIn Ads",
    "short": "LinkedIn Ads",
    "group": "paid",
    "component": "LinkedInAdsExpert",
    "legacy": "linkedin-ads-expert",
    "blurb": "B2B lead generation with precise job-title and company targeting."
  },
  {
    "slug": "tiktok-ads",
    "name": "TikTok Ads",
    "short": "TikTok Ads",
    "group": "paid",
    "component": "TikTokAdsExpert",
    "legacy": "tiktok-ads-expert",
    "blurb": "Native-feeling TikTok creative and Spark Ads that convert."
  },
  {
    "slug": "snapchat-ads",
    "name": "Snapchat Ads",
    "short": "Snapchat Ads",
    "group": "paid",
    "component": "SnapchatAdsExpert",
    "legacy": "snapchat-ads-expert",
    "blurb": "Reach Gen Z and GCC audiences with full-screen Snapchat ads."
  },
  {
    "slug": "youtube-ads",
    "name": "YouTube Ads",
    "short": "YouTube Ads",
    "group": "paid",
    "component": "YouTubeAdsExpert",
    "legacy": "youtube-ads-expert",
    "blurb": "Video campaigns that build demand and drive measurable action."
  },
  {
    "slug": "pinterest-ads",
    "name": "Pinterest Ads",
    "short": "Pinterest Ads",
    "group": "paid",
    "component": "PinterestAdsExpert",
    "legacy": "pinterest-ads-expert",
    "blurb": "Visual discovery ads for e-commerce, fashion and home brands."
  },
  {
    "slug": "social-media-ads",
    "name": "Social Media Advertising",
    "short": "Social Media Ads",
    "group": "paid",
    "component": "SocialMediaAdsExpert",
    "legacy": "social-media-ads-expert",
    "blurb": "Cross-platform social ads planned around one budget and one goal."
  },
  {
    "slug": "seo",
    "name": "SEO",
    "short": "SEO",
    "group": "search",
    "component": "SEOExpert",
    "legacy": "seo-expert",
    "blurb": "Technical, on-page and local SEO that compounds organic traffic."
  },
  {
    "slug": "conversion-rate-optimization",
    "name": "Conversion Rate Optimization",
    "short": "CRO",
    "group": "cro",
    "component": "CROExpert",
    "legacy": "cro-expert",
    "blurb": "Audits and experiments that lift conversion rate without more ad spend."
  },
  {
    "slug": "landing-page-optimization",
    "name": "Landing Page Optimization",
    "short": "Landing Page",
    "group": "cro",
    "component": "LandingPageOptimizationExpert",
    "legacy": "landing-page-optimization-expert",
    "blurb": "High-converting landing pages built and tested for paid traffic."
  },
  {
    "slug": "ab-testing",
    "name": "A/B Testing",
    "short": "A/B Testing",
    "group": "cro",
    "component": "ABTestingExpert",
    "legacy": "ab-testing-expert",
    "blurb": "Statistically sound experiments on pages, offers and creative."
  },
  {
    "slug": "funnel-optimization",
    "name": "Funnel Optimization",
    "short": "Funnel Optimization",
    "group": "cro",
    "component": "FunnelOptimizationExpert",
    "legacy": "funnel-optimization-expert",
    "blurb": "Fix the leaks from first click to purchase and repeat order."
  },
  {
    "slug": "analytics",
    "name": "Marketing Analytics",
    "short": "Analytics",
    "group": "cro",
    "component": "AnalyticsExpert",
    "legacy": "analytics-expert",
    "blurb": "Dashboards and attribution that show which spend actually works."
  },
  {
    "slug": "google-analytics",
    "name": "Google Analytics 4",
    "short": "GA4",
    "group": "cro",
    "component": "GoogleAnalyticsExpert",
    "legacy": "google-analytics-expert",
    "blurb": "GA4 setup, events and reporting done right the first time."
  },
  {
    "slug": "conversion-tracking",
    "name": "Conversion Tracking",
    "short": "Conversion Tracking",
    "group": "cro",
    "component": "ConversionTrackingExpert",
    "legacy": "conversion-tracking-expert",
    "blurb": "Server-side tracking, pixels and CAPI so every sale is counted."
  },
  {
    "slug": "email-marketing",
    "name": "Email Marketing",
    "short": "Email Marketing",
    "group": "retention",
    "component": "EmailMarketingExpert",
    "legacy": "email-marketing-expert",
    "blurb": "Flows and campaigns that grow lifetime value and repeat revenue."
  },
  {
    "slug": "marketing-automation",
    "name": "Marketing Automation",
    "short": "Marketing Automation",
    "group": "retention",
    "component": "MarketingAutomationExpert",
    "legacy": "marketing-automation-expert",
    "blurb": "Automated nurture, CRM and lead-scoring workflows."
  },
  {
    "slug": "whatsapp-marketing",
    "name": "WhatsApp Marketing",
    "short": "WhatsApp Marketing",
    "group": "retention",
    "component": "WhatsAppMarketingExpert",
    "legacy": "whatsapp-marketing-expert",
    "blurb": "WhatsApp Business API campaigns, chatbots and broadcast flows."
  },
  {
    "slug": "website-development",
    "name": "Website Development",
    "short": "Website Development",
    "group": "web",
    "component": "WebsiteDevelopmentExpert",
    "legacy": "website-development-expert",
    "blurb": "Fast, mobile-first websites designed to convert visitors."
  },
  {
    "slug": "shopify-development",
    "name": "Shopify Development",
    "short": "Shopify",
    "group": "web",
    "component": "ShopifyDevelopmentExpert",
    "legacy": "shopify-development-expert",
    "blurb": "Shopify stores built, migrated and optimised for sales."
  },
  {
    "slug": "wordpress-development",
    "name": "WordPress Development",
    "short": "WordPress",
    "group": "web",
    "component": "WordPressDevelopmentExpert",
    "legacy": "wordpress-development-expert",
    "blurb": "Custom WordPress sites that are quick, secure and easy to edit."
  }
];

export const INDUSTRIES: IndustryEntry[] = [
  {
    "slug": "ecommerce",
    "name": "E-commerce & Retail",
    "short": "E-commerce",
    "component": "EcommerceMarketing",
    "legacy": "ecommerce-marketing",
    "home": "best-ecommerce-marketer",
    "blurb": "Online stores, marketplaces and D2C brands."
  },
  {
    "slug": "education",
    "name": "Education & E-Learning",
    "short": "Education",
    "component": "EducationMarketing",
    "legacy": "education-marketing",
    "home": "best-education-marketer",
    "blurb": "Universities, institutes, coaching and online courses."
  },
  {
    "slug": "fintech",
    "name": "FinTech & Finance",
    "short": "FinTech",
    "component": "FintechMarketing",
    "legacy": "fintech-marketing",
    "home": "best-fintech-marketer",
    "blurb": "Banks, investment platforms and financial services."
  },
  {
    "slug": "healthcare",
    "name": "Healthcare & Wellness",
    "short": "Healthcare",
    "component": "HealthcareMarketing",
    "legacy": "healthcare-marketing",
    "home": "best-healthcare-marketer",
    "blurb": "Clinics, home care, supplements and fitness."
  },
  {
    "slug": "real-estate",
    "name": "Real Estate",
    "short": "Real Estate",
    "component": "RealEstateMarketing",
    "legacy": "real-estate-marketing",
    "home": "best-real-estate-marketer",
    "blurb": "Brokers, developers and off-plan projects."
  },
  {
    "slug": "saas",
    "name": "SaaS & Technology",
    "short": "SaaS",
    "component": "SaasMarketing",
    "legacy": "saas-marketing",
    "home": "best-saas-marketer",
    "blurb": "Software platforms, startups and apps."
  },
  {
    "slug": "travel-hospitality",
    "name": "Travel & Hospitality",
    "short": "Travel & Hospitality",
    "component": "TravelMarketing",
    "legacy": "travel-marketing",
    "home": "best-travel-marketer",
    "blurb": "Hotels, tourism and travel agencies."
  },
  {
    "slug": "fashion-beauty",
    "name": "Fashion & Beauty",
    "short": "Fashion & Beauty",
    "component": "FashionMarketing",
    "legacy": "fashion-marketing",
    "home": "best-fashion-marketer",
    "blurb": "Apparel, cosmetics and accessories brands."
  },
  {
    "slug": "food-beverage",
    "name": "Food & Beverage",
    "short": "Food & Beverage",
    "component": "FoodBeverageMarketing",
    "legacy": "food-beverage-marketing",
    "home": "best-food-beverage-marketer",
    "blurb": "Restaurants, delivery and CPG food brands."
  },
  {
    "slug": "automotive",
    "name": "Automotive",
    "short": "Automotive",
    "component": "AutomotiveMarketing",
    "legacy": "automotive-marketing",
    "home": "best-automotive-marketer",
    "blurb": "Dealerships, auto services and parts."
  },
  {
    "slug": "gaming",
    "name": "Gaming & Entertainment",
    "short": "Gaming",
    "component": "GamingMarketing",
    "legacy": "gaming-marketing",
    "home": "best-gaming-marketer",
    "blurb": "Games, platforms and entertainment apps."
  },
  {
    "slug": "professional-services",
    "name": "Professional Services",
    "short": "Professional Services",
    "component": "ProfessionalServicesMarketing",
    "legacy": "professional-services-marketing",
    "home": "best-professional-services-marketer",
    "blurb": "Consulting, legal, accounting and agencies."
  },
  {
    "slug": "telecom",
    "name": "Telecommunications",
    "short": "Telecom",
    "component": "TelecomMarketing",
    "legacy": "telecom-marketing",
    "home": "best-telecom-marketer",
    "blurb": "Telecom operators and mobile services."
  },
  {
    "slug": "manufacturing",
    "name": "Manufacturing & B2B",
    "short": "Manufacturing & B2B",
    "component": "ManufacturingMarketing",
    "legacy": "manufacturing-marketing",
    "home": "best-manufacturing-marketer",
    "blurb": "Industrial equipment and B2B suppliers."
  },
  {
    "slug": "non-profit",
    "name": "Non-Profit & NGOs",
    "short": "Non-Profit",
    "component": "NonProfitMarketing",
    "legacy": "non-profit-marketing",
    "home": "best-nonprofit-marketer",
    "blurb": "Charities, foundations and social causes."
  }
];

export const DUBAI_SLUGS: string[] = [
  "freelance-ai-consultant",
  "independent-ai-consultant",
  "ai-business-consultant",
  "whatsapp-ai-chatbot",
  "ai-voice-agents",
  "ai-customer-service",
  "ai-sales-automation",
  "custom-ai-assistant",
  "ai-content-creation",
  "ai-for-marketing-agencies",
  "ai-website-development",
  "custom-ai-development",
  "ai-for-small-business",
  "ai-for-startups",
  "ai-consultant",
  "ai-strategy",
  "ai-implementation",
  "ai-automation",
  "ai-agents",
  "custom-crm-development",
  "custom-erp-development",
  "business-dashboards",
  "ai-marketing",
  "ai-seo",
  "ai-training",
  "ai-for-real-estate",
  "ai-for-ecommerce",
  "ai-for-healthcare",
  "digital-marketing-specialist",
  "digital-marketing",
  "digital-marketing-consultant",
  "b2b-marketing",
  "digital-marketing-courses",
  "performance-marketing",
  "google-ads",
  "ppc",
  "facebook-ads",
  "seo",
  "search-engine-marketing",
  "content-marketing",
  "social-media-marketing",
  "social-media-management",
  "social-media-advertising",
  "web-design",
  "website-development"
];

export const AWARDS: { slug: string; component: string; name: string }[] = [
  {
    "slug": "best-performance-marketing-specialist-dubai-2025",
    "component": "BestPerformanceMarketingSpecialist",
    "name": "Best Performance Marketing Specialist Dubai 2025"
  },
  {
    "slug": "digital-marketing-specialist-dubai-uae",
    "component": "DigitalMarketingSpecialist",
    "name": "Digital Marketing Specialist Dubai UAE"
  },
  {
    "slug": "google-ads-partner-dubai-2025",
    "component": "GoogleAdsPartnerAward",
    "name": "Google Ads Partner Excellence 2025"
  },
  {
    "slug": "meta-marketing-partner-dubai-2025",
    "component": "MetaMarketingPartnerAward",
    "name": "Meta Marketing Partner Award 2025"
  },
  {
    "slug": "performance-marketing-award-dubai-2025",
    "component": "PerformanceMarketingAward",
    "name": "Performance Marketing Award Dubai 2025"
  }
];

export const PORTFOLIO_PAGES: { slug: string; legacy: string; component: string }[] = [
  {
    "slug": "best-digital-marketer",
    "legacy": "best-digital-marketer-portfolio",
    "component": "BestDigitalMarketerPortfolio"
  },
  {
    "slug": "netflix-style",
    "legacy": "netflix-style-portfolio",
    "component": "NetflixStylePortfolio"
  },
  {
    "slug": "inspiring-digital-marketing",
    "legacy": "inspiring-digital-marketing-portfolio",
    "component": "InspiringDigitalMarketingPortfolio"
  }
];

export const CASE_STUDY_SLUGS: string[] = [
  "compass-jewelry",
  "house-of-nutrition",
  "jarvis-invest",
  "dubai-smile-dental",
  "flavored-pb-co",
  "lana-life-care",
  "atlantis-hospitality",
  "emirates-digital-bank",
  "al-barsha-fitness",
  "yallatoys",
  "ielts-google",
  "ielts-facebook",
  "university-lead-gen",
  "multi-course-institute",
  "lark-ellen-farm",
  "sassind-melbourne",
  "house-of-jersey",
  "kaye-co"
];

export const BLOG_SLUGS: string[] = [
  "ecommerce-marketing-guide-dubai-2025",
  "google-ads-mastery-complete-guide-2025",
  "facebook-instagram-advertising-strategy-guide",
  "conversion-rate-optimization-complete-guide",
  "fintech-marketing-strategies-dubai-2025",
  "linkedin-advertising-b2b-lead-generation",
  "healthcare-marketing-guide-patient-acquisition",
  "real-estate-marketing-dubai-luxury-properties",
  "saas-marketing-complete-strategy-guide-2025",
  "education-marketing-online-course-promotion",
  "tiktok-advertising-guide-business-growth",
  "youtube-advertising-video-marketing-strategy",
  "email-marketing-automation-customer-retention",
  "seo-strategy-guide-local-business-dubai",
  "snapchat-advertising-young-audience-engagement",
  "pinterest-advertising-visual-marketing-guide",
  "google-analytics-conversion-tracking-guide",
  "website-development-conversion-optimization-2025",
  "landing-page-optimization-conversion-rates",
  "ab-testing-complete-guide-optimization",
  "funnel-optimization-sales-conversion",
  "whatsapp-marketing-business-communication",
  "paid-advertising-complete-strategy-guide",
  "social-media-advertising-platform-comparison",
  "digital-marketing-trends-2025-uae",
  "mobile-marketing-app-promotion-strategies",
  "content-marketing-strategy-business-growth",
  "shopify-development-ecommerce-optimization",
  "wordpress-development-business-websites",
  "fashion-beauty-marketing-social-media-influence",
  "food-beverage-marketing-restaurant-growth",
  "automotive-marketing-car-dealership-strategies",
  "gaming-entertainment-marketing-audience-engagement",
  "professional-services-marketing-b2b-strategies",
  "telecom-marketing-digital-transformation",
  "manufacturing-b2b-marketing-industrial-sector",
  "nonprofit-marketing-fundraising-donor-engagement",
  "travel-hospitality-marketing-post-pandemic",
  "influencer-marketing-roi-measurement",
  "lead-generation-b2b-sales-funnel",
  "performance-marketing-data-driven-strategies",
  "ppc-management-optimization-guide",
  "customer-journey-mapping-optimization",
  "marketing-attribution-measurement-models",
  "cross-platform-advertising-integration",
  "voice-search-optimization-local-seo",
  "marketing-automation-workflow-optimization",
  "video-marketing-engagement-strategies",
  "remarketing-retargeting-customer-recovery",
  "brand-building-digital-presence"
];

export const NOINDEX_ROUTES: string[] = [
  "/thank-you",
  "/campus-proposal"
];

// AI keyword pages
export const AI_ROUTES: string[] = ["/dubai/ai-consultant","/dubai/ai-strategy","/dubai/ai-implementation","/dubai/ai-automation","/dubai/ai-agents","/dubai/custom-crm-development","/dubai/custom-erp-development","/dubai/business-dashboards","/dubai/ai-marketing","/dubai/ai-seo","/dubai/ai-training","/dubai/ai-for-real-estate","/dubai/ai-for-ecommerce","/dubai/ai-for-healthcare","/dubai/independent-ai-consultant","/dubai/freelance-ai-consultant","/dubai/ai-business-consultant","/dubai/whatsapp-ai-chatbot","/dubai/ai-voice-agents","/dubai/ai-customer-service","/dubai/ai-sales-automation","/dubai/custom-ai-assistant","/dubai/ai-content-creation","/dubai/ai-for-marketing-agencies","/dubai/ai-website-development","/dubai/custom-ai-development","/dubai/ai-for-small-business","/dubai/ai-for-startups","/services/ai-consulting","/services/business-automation","/services/ai-agent-development","/services/custom-crm-development","/services/custom-erp-development","/services/ai-implementation"];

// Central title/description overrides (pages without their own tuned meta)
export const PAGE_META: Record<string, { title: string; description: string }> = {
  "/": {
    "title": "Muneez Ahmed – AI & Growth Consultant in Dubai",
    "description": "Dubai-based performance marketer helping brands in the UAE and worldwide scale with Google Ads, Meta Ads, SEO and CRO. 6.2x average ROAS. Free consultation."
  },
  "/services": {
    "title": "Digital Marketing Services | Muneez Ahmed",
    "description": "All services in one place: Google Ads, Meta and TikTok ads, SEO, CRO, analytics, email, WhatsApp and website development. Dubai-based, working worldwide."
  },
  "/industries": {
    "title": "Industries I Market For | Muneez Ahmed",
    "description": "Performance marketing for e-commerce, real estate, healthcare, education, fintech, SaaS and 9 more industries across the UAE and internationally."
  },
  "/dubai": {
    "title": "Digital Marketing Services in Dubai | Muneez Ahmed",
    "description": "Hire a Dubai-based digital marketing specialist for Google Ads, social media, SEO and web design. Local market expertise, transparent pricing, free consultation."
  },
  "/services/digital-marketing": {
    "title": "Digital Marketing Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "Digital Marketing services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. Full-funnel strategy across paid media, SEO and conversion optimisation. Free consultation."
  },
  "/services/performance-marketing": {
    "title": "Performance Marketing Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "Performance Marketing services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. ROAS-driven campaigns measured on revenue, not clicks. Free consultation."
  },
  "/services/lead-generation": {
    "title": "Lead Generation Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "Lead Generation services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. Multi-channel systems that deliver qualified leads at a predictable cost. Free consultation."
  },
  "/services/paid-advertising": {
    "title": "Paid Ads Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "Paid Advertising services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. Google, Meta, TikTok and LinkedIn ads managed for profitable scale. Free consultation."
  },
  "/services/google-ads": {
    "title": "Google Ads Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "Google Ads services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. Search, Shopping, Performance Max and YouTube campaigns built for ROI. Free consultation."
  },
  "/services/ppc-management": {
    "title": "PPC Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "PPC Management services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. Pay-per-click management with tight bidding, testing and reporting. Free consultation."
  },
  "/services/facebook-ads": {
    "title": "Facebook Ads Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "Facebook Ads services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. Meta campaigns with creative testing, audiences and catalogue sales. Free consultation."
  },
  "/services/instagram-ads": {
    "title": "Instagram Ads Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "Instagram Ads services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. Reels, Stories and feed ads that turn attention into sales. Free consultation."
  },
  "/services/linkedin-ads": {
    "title": "LinkedIn Ads Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "LinkedIn Ads services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. B2B lead generation with precise job-title and company targeting. Free consultation."
  },
  "/services/tiktok-ads": {
    "title": "TikTok Ads Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "TikTok Ads services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. Native-feeling TikTok creative and Spark Ads that convert. Free consultation."
  },
  "/services/snapchat-ads": {
    "title": "Snapchat Ads Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "Snapchat Ads services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. Reach Gen Z and GCC audiences with full-screen Snapchat ads. Free consultation."
  },
  "/services/youtube-ads": {
    "title": "YouTube Ads Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "YouTube Ads services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. Video campaigns that build demand and drive measurable action. Free consultation."
  },
  "/services/pinterest-ads": {
    "title": "Pinterest Ads Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "Pinterest Ads services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. Visual discovery ads for e-commerce, fashion and home brands. Free consultation."
  },
  "/services/social-media-ads": {
    "title": "Social Media Ads Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "Social Media Advertising services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. Cross-platform social ads planned around one budget and one goal. Free consultation."
  },
  "/services/seo": {
    "title": "SEO Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "SEO services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. Technical, on-page and local SEO that compounds organic traffic. Free consultation."
  },
  "/services/conversion-rate-optimization": {
    "title": "CRO Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "Conversion Rate Optimization services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. Audits and experiments that lift conversion rate without more ad spend. Free consultation."
  },
  "/services/landing-page-optimization": {
    "title": "Landing Page Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "Landing Page Optimization services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. High-converting landing pages built and tested for paid traffic. Free consultation."
  },
  "/services/ab-testing": {
    "title": "A/B Testing Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "A/B Testing services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. Statistically sound experiments on pages, offers and creative. Free consultation."
  },
  "/services/funnel-optimization": {
    "title": "Funnel Optimization Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "Funnel Optimization services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. Fix the leaks from first click to purchase and repeat order. Free consultation."
  },
  "/services/analytics": {
    "title": "Analytics Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "Marketing Analytics services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. Dashboards and attribution that show which spend actually works. Free consultation."
  },
  "/services/google-analytics": {
    "title": "GA4 Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "Google Analytics 4 services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. GA4 setup, events and reporting done right the first time. Free consultation."
  },
  "/services/conversion-tracking": {
    "title": "Conversion Tracking Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "Conversion Tracking services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. Server-side tracking, pixels and CAPI so every sale is counted. Free consultation."
  },
  "/services/email-marketing": {
    "title": "Email Marketing Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "Email Marketing services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. Flows and campaigns that grow lifetime value and repeat revenue. Free consultation."
  },
  "/services/marketing-automation": {
    "title": "Marketing Automation Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "Marketing Automation services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. Automated nurture, CRM and lead-scoring workflows. Free consultation."
  },
  "/services/whatsapp-marketing": {
    "title": "WhatsApp Marketing Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "WhatsApp Marketing services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. WhatsApp Business API campaigns, chatbots and broadcast flows. Free consultation."
  },
  "/services/website-development": {
    "title": "Website Development Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "Website Development services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. Fast, mobile-first websites designed to convert visitors. Free consultation."
  },
  "/services/shopify-development": {
    "title": "Shopify Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "Shopify Development services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. Shopify stores built, migrated and optimised for sales. Free consultation."
  },
  "/services/wordpress-development": {
    "title": "WordPress Expert | Dubai & Worldwide – Muneez Ahmed",
    "description": "WordPress Development services by Muneez Ahmed, a Dubai-based specialist working with brands worldwide. Custom WordPress sites that are quick, secure and easy to edit. Free consultation."
  },
  "/industries/ecommerce": {
    "title": "E-commerce Marketing Specialist | Muneez Ahmed",
    "description": "Performance marketing for e-commerce & retail: online stores, marketplaces and d2c brands. Proven campaigns in Dubai and worldwide. Book a free strategy call."
  },
  "/industries/education": {
    "title": "Education Marketing Specialist | Muneez Ahmed",
    "description": "Performance marketing for education & e-learning: universities, institutes, coaching and online courses. Proven campaigns in Dubai and worldwide. Book a free strategy call."
  },
  "/industries/fintech": {
    "title": "FinTech Marketing Specialist | Muneez Ahmed",
    "description": "Performance marketing for fintech & finance: banks, investment platforms and financial services. Proven campaigns in Dubai and worldwide. Book a free strategy call."
  },
  "/industries/healthcare": {
    "title": "Healthcare Marketing Specialist | Muneez Ahmed",
    "description": "Performance marketing for healthcare & wellness: clinics, home care, supplements and fitness. Proven campaigns in Dubai and worldwide. Book a free strategy call."
  },
  "/industries/real-estate": {
    "title": "Real Estate Marketing Specialist | Muneez Ahmed",
    "description": "Performance marketing for real estate: brokers, developers and off-plan projects. Proven campaigns in Dubai and worldwide. Book a free strategy call."
  },
  "/industries/saas": {
    "title": "SaaS Marketing Specialist | Muneez Ahmed",
    "description": "Performance marketing for saas & technology: software platforms, startups and apps. Proven campaigns in Dubai and worldwide. Book a free strategy call."
  },
  "/industries/travel-hospitality": {
    "title": "Travel & Hospitality Marketing Specialist | Muneez Ahmed",
    "description": "Performance marketing for travel & hospitality: hotels, tourism and travel agencies. Proven campaigns in Dubai and worldwide. Book a free strategy call."
  },
  "/industries/fashion-beauty": {
    "title": "Fashion & Beauty Marketing Specialist | Muneez Ahmed",
    "description": "Performance marketing for fashion & beauty: apparel, cosmetics and accessories brands. Proven campaigns in Dubai and worldwide. Book a free strategy call."
  },
  "/industries/food-beverage": {
    "title": "Food & Beverage Marketing Specialist | Muneez Ahmed",
    "description": "Performance marketing for food & beverage: restaurants, delivery and cpg food brands. Proven campaigns in Dubai and worldwide. Book a free strategy call."
  },
  "/industries/automotive": {
    "title": "Automotive Marketing Specialist | Muneez Ahmed",
    "description": "Performance marketing for automotive: dealerships, auto services and parts. Proven campaigns in Dubai and worldwide. Book a free strategy call."
  },
  "/industries/gaming": {
    "title": "Gaming Marketing Specialist | Muneez Ahmed",
    "description": "Performance marketing for gaming & entertainment: games, platforms and entertainment apps. Proven campaigns in Dubai and worldwide. Book a free strategy call."
  },
  "/industries/professional-services": {
    "title": "Professional Services Marketing Specialist | Muneez Ahmed",
    "description": "Performance marketing for professional services: consulting, legal, accounting and agencies. Proven campaigns in Dubai and worldwide. Book a free strategy call."
  },
  "/industries/telecom": {
    "title": "Telecom Marketing Specialist | Muneez Ahmed",
    "description": "Performance marketing for telecommunications: telecom operators and mobile services. Proven campaigns in Dubai and worldwide. Book a free strategy call."
  },
  "/industries/manufacturing": {
    "title": "Manufacturing & B2B Marketing Specialist | Muneez Ahmed",
    "description": "Performance marketing for manufacturing & b2b: industrial equipment and b2b suppliers. Proven campaigns in Dubai and worldwide. Book a free strategy call."
  },
  "/industries/non-profit": {
    "title": "Non-Profit Marketing Specialist | Muneez Ahmed",
    "description": "Performance marketing for non-profit & ngos: charities, foundations and social causes. Proven campaigns in Dubai and worldwide. Book a free strategy call."
  }
};

// Every legacy URL -> its new home (also mirrored as 301s in vercel.json)
export const LEGACY_REDIRECTS: Record<string, string> = {
  "/privacy": "/privacy-policy",
  "/terms-and-conditions": "/terms",
  "/dubai/freelance-digital-marketer": "/dubai/digital-marketing-consultant",
  "/digital-marketing-expert": "/services/digital-marketing",
  "/home/dubai/best-digital-marketing-expert": "/services/digital-marketing",
  "/performance-marketing-expert": "/services/performance-marketing",
  "/home/dubai/best-performance-marketing-expert": "/services/performance-marketing",
  "/lead-generation-expert": "/services/lead-generation",
  "/home/dubai/best-lead-generation-expert": "/services/lead-generation",
  "/paid-ads-expert": "/services/paid-advertising",
  "/home/dubai/best-paid-ads-expert": "/services/paid-advertising",
  "/google-ads-expert": "/services/google-ads",
  "/home/dubai/best-google-ads-expert": "/services/google-ads",
  "/ppc-expert": "/services/ppc-management",
  "/home/dubai/best-ppc-expert": "/services/ppc-management",
  "/facebook-ads-expert": "/services/facebook-ads",
  "/home/dubai/best-facebook-ads-expert": "/services/facebook-ads",
  "/instagram-advertising-expert": "/services/instagram-ads",
  "/home/dubai/best-instagram-advertising-expert": "/services/instagram-ads",
  "/linkedin-ads-expert": "/services/linkedin-ads",
  "/home/dubai/best-linkedin-ads-expert": "/services/linkedin-ads",
  "/tiktok-ads-expert": "/services/tiktok-ads",
  "/home/dubai/best-tiktok-ads-expert": "/services/tiktok-ads",
  "/snapchat-ads-expert": "/services/snapchat-ads",
  "/home/dubai/best-snapchat-ads-expert": "/services/snapchat-ads",
  "/youtube-ads-expert": "/services/youtube-ads",
  "/home/dubai/best-youtube-ads-expert": "/services/youtube-ads",
  "/pinterest-ads-expert": "/services/pinterest-ads",
  "/home/dubai/best-pinterest-ads-expert": "/services/pinterest-ads",
  "/social-media-ads-expert": "/services/social-media-ads",
  "/home/dubai/best-social-media-ads-expert": "/services/social-media-ads",
  "/seo-expert": "/services/seo",
  "/home/dubai/best-seo-expert": "/services/seo",
  "/cro-expert": "/services/conversion-rate-optimization",
  "/home/dubai/best-cro-expert": "/services/conversion-rate-optimization",
  "/landing-page-optimization-expert": "/services/landing-page-optimization",
  "/home/dubai/best-landing-page-optimization-expert": "/services/landing-page-optimization",
  "/ab-testing-expert": "/services/ab-testing",
  "/home/dubai/best-ab-testing-expert": "/services/ab-testing",
  "/funnel-optimization-expert": "/services/funnel-optimization",
  "/home/dubai/best-funnel-optimization-expert": "/services/funnel-optimization",
  "/analytics-expert": "/services/analytics",
  "/home/dubai/best-analytics-expert": "/services/analytics",
  "/google-analytics-expert": "/services/google-analytics",
  "/home/dubai/best-google-analytics-expert": "/services/google-analytics",
  "/conversion-tracking-expert": "/services/conversion-tracking",
  "/home/dubai/best-conversion-tracking-expert": "/services/conversion-tracking",
  "/email-marketing-expert": "/services/email-marketing",
  "/home/dubai/best-email-marketing-expert": "/services/email-marketing",
  "/marketing-automation-expert": "/services/marketing-automation",
  "/home/dubai/best-marketing-automation-expert": "/services/marketing-automation",
  "/whatsapp-marketing-expert": "/services/whatsapp-marketing",
  "/home/dubai/best-whatsapp-marketing-expert": "/services/whatsapp-marketing",
  "/website-development-expert": "/services/website-development",
  "/home/dubai/best-website-development-expert": "/services/website-development",
  "/shopify-development-expert": "/services/shopify-development",
  "/home/dubai/best-shopify-development-expert": "/services/shopify-development",
  "/wordpress-development-expert": "/services/wordpress-development",
  "/home/dubai/best-wordpress-development-expert": "/services/wordpress-development",
  "/ecommerce-marketing": "/industries/ecommerce",
  "/home/dubai/best-ecommerce-marketer": "/industries/ecommerce",
  "/education-marketing": "/industries/education",
  "/home/dubai/best-education-marketer": "/industries/education",
  "/fintech-marketing": "/industries/fintech",
  "/home/dubai/best-fintech-marketer": "/industries/fintech",
  "/healthcare-marketing": "/industries/healthcare",
  "/home/dubai/best-healthcare-marketer": "/industries/healthcare",
  "/real-estate-marketing": "/industries/real-estate",
  "/home/dubai/best-real-estate-marketer": "/industries/real-estate",
  "/saas-marketing": "/industries/saas",
  "/home/dubai/best-saas-marketer": "/industries/saas",
  "/travel-marketing": "/industries/travel-hospitality",
  "/home/dubai/best-travel-marketer": "/industries/travel-hospitality",
  "/fashion-marketing": "/industries/fashion-beauty",
  "/home/dubai/best-fashion-marketer": "/industries/fashion-beauty",
  "/food-beverage-marketing": "/industries/food-beverage",
  "/home/dubai/best-food-beverage-marketer": "/industries/food-beverage",
  "/automotive-marketing": "/industries/automotive",
  "/home/dubai/best-automotive-marketer": "/industries/automotive",
  "/gaming-marketing": "/industries/gaming",
  "/home/dubai/best-gaming-marketer": "/industries/gaming",
  "/professional-services-marketing": "/industries/professional-services",
  "/home/dubai/best-professional-services-marketer": "/industries/professional-services",
  "/telecom-marketing": "/industries/telecom",
  "/home/dubai/best-telecom-marketer": "/industries/telecom",
  "/manufacturing-marketing": "/industries/manufacturing",
  "/home/dubai/best-manufacturing-marketer": "/industries/manufacturing",
  "/non-profit-marketing": "/industries/non-profit",
  "/home/dubai/best-nonprofit-marketer": "/industries/non-profit",
  "/home/dubai/best-influencer-marketing-expert": "/services/social-media-ads",
  "/home/dubai/video-marketing-expert": "/services/youtube-ads",
  "/home/dubai/content-marketing-expert": "/dubai/content-marketing",
  "/home/dubai/best-content-marketing-expert": "/dubai/content-marketing",
  "/home/dubai/best-mobile-marketing-expert": "/services/performance-marketing",
  "/home/dubai/mobile-marketing-expert": "/services/performance-marketing",
  "/home/dubai/fashion-marketing-expert": "/industries/fashion-beauty",
  "/home/dubai/food-beverage-marketing-expert": "/industries/food-beverage",
  "/home/dubai/automotive-marketing-expert": "/industries/automotive",
  "/home/dubai/gaming-marketing-expert": "/industries/gaming",
  "/home/dubai/best-digital-marketing-specialist-in-dubai": "/dubai/digital-marketing-specialist",
  "/best-digital-marketing-specialist-dubai": "/dubai/digital-marketing-specialist",
  "/dubai/freelancer-website-designer": "/dubai/web-design",
  "/dubai/freelance-web-developer": "/dubai/website-development",
  "/dubai/freelance-google-ads": "/dubai/google-ads",
  "/dubai/freelance-seo": "/dubai/seo",
  "/dubai/freelance-marketer": "/dubai/digital-marketing-consultant",
  "/dubai/freelance-marketing-services": "/dubai/digital-marketing-consultant",
  "/dubai/freelance-developer": "/dubai/website-development",
  "/dubai/freelance-website-developer": "/dubai/website-development",
  "/dubai/google-ads-freelancer": "/dubai/google-ads",
  "/dubai/freelance-front-end-developer": "/dubai/website-development",
  "/dubai/freelance-marketing-consultant": "/dubai/digital-marketing-consultant",
  "/dubai/freelance-digital-marketing-consultant": "/dubai/digital-marketing-consultant",
  "/dubai/freelance-digital-marketing-expert": "/dubai/digital-marketing-consultant",
  "/dubai/digital-marketing-and-consulting": "/dubai/digital-marketing-consultant",
  "/dubai/search-engine-optimisation-consulting": "/dubai/seo",
  "/dubai/b2b-marketing-consultant": "/dubai/b2b-marketing",
  "/dubai/social-media-marketing-consultants": "/dubai/social-media-marketing",
  "/dubai/paid-search-consultant": "/dubai/ppc",
  "/dubai/digital-media-consultant": "/dubai/digital-marketing-consultant",
  "/dubai/online-marketing-consultant": "/dubai/digital-marketing-consultant",
  "/dubai/digital-marketing-consulting-company": "/dubai/digital-marketing-consultant",
  "/dubai/digital-advertising-consultant": "/dubai/performance-marketing",
  "/dubai/paid-media-consultant": "/dubai/performance-marketing",
  "/dubai/digital-marketing-consulting-services": "/dubai/digital-marketing-consultant",
  "/dubai/independent-digital-marketing-consultant": "/dubai/digital-marketing-consultant",
  "/dubai/digital-marketing-and-seo-expert": "/dubai/seo",
  "/dubai/internet-marketing-consultants": "/dubai/digital-marketing-consultant",
  "/dubai/online-marketing-consulting-agency": "/dubai/digital-marketing-consultant",
  "/dubai/digital-marketing-consultant-for-small-business": "/dubai/digital-marketing-consultant",
  "/dubai/digital-marketing-strategy-consulting": "/dubai/digital-marketing-consultant",
  "/dubai/certified-digital-marketing-expert": "/dubai/digital-marketing-specialist",
  "/dubai/freelance-jobs-dubai": "/dubai/digital-marketing-consultant",
  "/dubai/social-media-marketing-dubai": "/dubai/social-media-marketing",
  "/dubai/social-media-marketing-company-dubai": "/dubai/social-media-marketing",
  "/dubai/social-media-marketing-agency-dubai": "/dubai/social-media-marketing",
  "/dubai/social-media-agency-dubai": "/dubai/social-media-marketing",
  "/dubai/social-media-advertising-in-dubai": "/dubai/social-media-advertising",
  "/dubai/smm-marketing": "/dubai/social-media-marketing",
  "/dubai/marketing-through-social-media": "/dubai/social-media-marketing",
  "/dubai/social-media-specialist": "/dubai/social-media-marketing",
  "/dubai/social-media-services-in-dubai": "/dubai/social-media-marketing",
  "/dubai/social-media-services-dubai": "/dubai/social-media-marketing",
  "/dubai/social-media-marketing-services-in-dubai": "/dubai/social-media-marketing",
  "/dubai/social-media-marketing-services-dubai": "/dubai/social-media-marketing",
  "/dubai/social-media-marketing-services": "/dubai/social-media-marketing",
  "/dubai/social-media-management-in-dubai": "/dubai/social-media-management",
  "/dubai/social-media-management-dubai": "/dubai/social-media-management",
  "/dubai/social-media-management-company-dubai": "/dubai/social-media-management",
  "/dubai/social-media-management-company": "/dubai/social-media-management",
  "/dubai/social-media-management-companies-in-dubai": "/dubai/social-media-management",
  "/dubai/social-media-company-dubai": "/dubai/social-media-marketing",
  "/dubai/social-media-campaigns": "/dubai/social-media-advertising",
  "/dubai/social-media-advertising-campaign": "/dubai/social-media-advertising",
  "/dubai/social-media-advertising-dubai": "/dubai/social-media-advertising",
  "/dubai/social-media-ad-campaigns": "/dubai/social-media-advertising",
  "/dubai/facebook-ad": "/dubai/facebook-ads",
  "/dubai/social-media-mktg": "/dubai/social-media-marketing",
  "/dubai/social-media-media-marketing": "/dubai/social-media-marketing",
  "/dubai/social-media-marketing-marketing": "/dubai/social-media-marketing",
  "/dubai/social-media-as-marketing": "/dubai/social-media-marketing",
  "/dubai/social-media-and-marketing": "/dubai/social-media-marketing",
  "/dubai/digital-marketing-dubai": "/dubai/digital-marketing",
  "/dubai/digital-marketing-company-dubai": "/dubai/digital-marketing",
  "/dubai/digital-marketing-agency-dubai": "/dubai/digital-marketing",
  "/dubai/digital-marketing-agency": "/dubai/digital-marketing",
  "/dubai/best-digital-marketing-company-in-dubai": "/dubai/digital-marketing",
  "/dubai/best-digital-marketing-agency-dubai": "/dubai/digital-marketing",
  "/dubai/digital-marketing-services-in-dubai": "/dubai/digital-marketing",
  "/dubai/digital-marketing-services-dubai": "/dubai/digital-marketing",
  "/dubai/dubai-digital-marketing-companies": "/dubai/digital-marketing",
  "/dubai/digital-marketing-courses-in-dubai": "/dubai/digital-marketing-courses",
  "/dubai/digital-advertising-companies-in-dubai": "/dubai/performance-marketing",
  "/dubai/marketing-digital-dubai": "/dubai/digital-marketing",
  "/dubai/marketing-digital-marketing": "/dubai/digital-marketing",
  "/dubai/marketing-and-digital-marketing": "/dubai/digital-marketing",
  "/dubai/digital-and-marketing": "/dubai/digital-marketing",
  "/dubai/digital-mktg": "/dubai/digital-marketing",
  "/dubai/digital-marketing-marketing": "/dubai/digital-marketing",
  "/dubai/digital-marketing-is-what": "/dubai/digital-marketing",
  "/dubai/a-digital-marketing": "/dubai/digital-marketing",
  "/dubai/website-and-digital-marketing": "/dubai/digital-marketing",
  "/dubai/digital-marketing-services": "/dubai/digital-marketing",
  "/dubai/specialist-in-digital-marketing": "/dubai/digital-marketing-specialist",
  "/dubai/services-for-digital-marketing": "/dubai/digital-marketing",
  "/dubai/near-me-digital-marketing": "/dubai/digital-marketing",
  "/dubai/media-marketing-agency": "/dubai/digital-marketing",
  "/dubai/media-marketing": "/dubai/digital-marketing",
  "/dubai/media-and-marketing": "/dubai/digital-marketing",
  "/dubai/media-agency-dubai": "/dubai/digital-marketing",
  "/dubai/marketing-specialist": "/dubai/digital-marketing-specialist",
  "/dubai/marketing-company-dubai": "/dubai/digital-marketing",
  "/dubai/marketing-company": "/dubai/digital-marketing",
  "/dubai/marketing-dubai": "/dubai/digital-marketing",
  "/dubai/marketing-content-marketing": "/dubai/content-marketing",
  "/dubai/marketing-to-companies": "/dubai/b2b-marketing",
  "/dubai/marketing-for-seo": "/dubai/seo",
  "/dubai/marketing-research": "/dubai/digital-marketing-consultant",
  "/dubai/marketing-en-social-media": "/dubai/social-media-marketing",
  "/dubai/social-media-and-marketing-companies": "/dubai/social-media-marketing",
  "/dubai/social-media-and-advertising": "/dubai/social-media-advertising",
  "/dubai/social-digital-marketing": "/dubai/social-media-marketing",
  "/dubai/online-marketing": "/dubai/digital-marketing",
  "/dubai/online-marketing-dubai": "/dubai/digital-marketing",
  "/dubai/online-marketing-agency-dubai": "/dubai/digital-marketing",
  "/dubai/online-marketing-online-marketing": "/dubai/digital-marketing",
  "/dubai/online-marketing-marketing": "/dubai/digital-marketing",
  "/dubai/digital-marketer-in-dubai": "/dubai/digital-marketing-specialist",
  "/dubai/search-engine-marketing-dubai": "/dubai/search-engine-marketing",
  "/dubai/search-engine-marketing-and-seo": "/dubai/search-engine-marketing",
  "/dubai/search-engine-marketing-and-search-engine-optimization": "/dubai/search-engine-marketing",
  "/dubai/search-engine-optimization-company": "/dubai/seo",
  "/dubai/seo-marketing": "/dubai/seo",
  "/dubai/seo-for-digital-marketing": "/dubai/seo",
  "/dubai/seo-and-sem-marketing": "/dubai/search-engine-marketing",
  "/dubai/seo-and-search-engine-marketing": "/dubai/search-engine-marketing",
  "/dubai/seo-sem": "/dubai/search-engine-marketing",
  "/dubai/seo-sem-marketing": "/dubai/search-engine-marketing",
  "/dubai/seo-marketing-services": "/dubai/seo",
  "/dubai/pay-per-click-campaign": "/dubai/ppc",
  "/dubai/ppc-in-digital-marketing": "/dubai/ppc",
  "/dubai/pay-per-click-in-digital-marketing": "/dubai/ppc",
  "/dubai/performance-marketing-agency-dubai": "/dubai/performance-marketing",
  "/dubai/performance-marketing-company": "/dubai/performance-marketing",
  "/dubai/targeted-marketing": "/dubai/performance-marketing",
  "/dubai/target-audience": "/dubai/performance-marketing",
  "/dubai/social-media": "/dubai/social-media-marketing",
  "/dubai/website-design-company-dubai": "/dubai/web-design",
  "/dubai/web-design-company-dubai": "/dubai/web-design",
  "/dubai/website-design-websites": "/dubai/web-design",
  "/dubai/web-design-dubai": "/dubai/web-design",
  "/dubai/website-design-dubai": "/dubai/web-design",
  "/dubai/web-design-firms": "/dubai/web-design",
  "/dubai/website-design-firms": "/dubai/web-design",
  "/dubai/website-creator-dubai": "/dubai/web-design",
  "/dubai/website-designers-dubai": "/dubai/web-design",
  "/dubai/web-design-agency-in-dubai": "/dubai/web-design",
  "/dubai/companies-that-design-websites": "/dubai/web-design",
  "/dubai/web-design-company-websites": "/dubai/web-design",
  "/dubai/website-development-company-dubai": "/dubai/website-development",
  "/dubai/website-development-dubai": "/dubai/website-development",
  "/dubai/website-developer-dubai": "/dubai/website-development",
  "/dubai/web-development-company-dubai": "/dubai/website-development",
  "/dubai/web-development-dubai": "/dubai/website-development",
  "/dubai/web-development-agency-dubai": "/dubai/website-development",
  "/dubai/web-development-agency-in-dubai": "/dubai/website-development",
  "/dubai/website-development-agency-in-dubai": "/dubai/website-development",
  "/dubai/website-development-agency-dubai": "/dubai/website-development",
  "/dubai/social-media-dubai": "/dubai/social-media-marketing",
  "/dubai/social-media-marketing-position": "/dubai/social-media-marketing",
  "/dubai/social-media-marketing-digital": "/dubai/social-media-marketing",
  "/dubai/social-media-marketing-what-is": "/dubai/social-media-marketing",
  "/dubai/social-media-marketing-company": "/dubai/social-media-marketing",
  "/dubai/social-media-marketing-agency": "/dubai/social-media-marketing",
  "/dubai/best-digital-marketing-consultant-in-dubai": "/dubai/digital-marketing-specialist",
  "/dubai/digital-marketing-expert-in-dubai": "/dubai/digital-marketing-specialist",
  "/dubai/best-digital-marketing-freelancer-in-dubai": "/dubai/digital-marketing-consultant",
  "/dubai/digital-marketing-freelancer-in-uae": "/dubai/digital-marketing-consultant",
  "/dubai/best-digital-marketer-in-uae": "/dubai/digital-marketing-specialist",
  "/dubai/freelance-digital-marketing-strategist-in-dubai": "/dubai/digital-marketing-consultant",
  "/dubai/top-digital-marketing-expert-in-dubai": "/dubai/digital-marketing-specialist",
  "/dubai/best-performance-marketing-specialist-in-dubai": "/dubai/performance-marketing",
  "/best-digital-marketer-portfolio": "/portfolio/best-digital-marketer",
  "/dubai/best-digital-marketer-portfolio": "/portfolio/best-digital-marketer",
  "/netflix-style-portfolio": "/portfolio/netflix-style",
  "/dubai/netflix-style-portfolio": "/portfolio/netflix-style",
  "/inspiring-digital-marketing-portfolio": "/portfolio/inspiring-digital-marketing",
  "/dubai/inspiring-digital-marketing-portfolio": "/portfolio/inspiring-digital-marketing",
  "/award/best-performance-marketing-specialist-dubai-2025": "/awards/best-performance-marketing-specialist-dubai-2025",
  "/award/digital-marketing-specialist-dubai-uae": "/awards/digital-marketing-specialist-dubai-uae",
  "/award/google-ads-partner-dubai-2025": "/awards/google-ads-partner-dubai-2025",
  "/award/meta-marketing-partner-dubai-2025": "/awards/meta-marketing-partner-dubai-2025",
  "/award/performance-marketing-award-dubai-2025": "/awards/performance-marketing-award-dubai-2025",
  "/case-study/al-barsha-fitness-centre-dubai-lead-generation": "/case-studies/al-barsha-fitness",
  "/case-study/atlantis-the-palm-hospitality-digital-campaigns": "/case-studies/atlantis-hospitality",
  "/case-study/compass-jewelry-online-store-conversion-optimization": "/case-studies/compass-jewelry",
  "/case-study/dubai-smile-dental-clinic-patient-acquisition": "/case-studies/dubai-smile-dental",
  "/case-study/emirates-digital-bank-customer-acquisition": "/case-studies/emirates-digital-bank",
  "/case-study/flavored-pb-co-shopify-ecommerce-growth": "/case-studies/flavored-pb-co",
  "/case-study/house-of-jersey-sports-merchandise-ecommerce": "/case-studies/house-of-jersey",
  "/case-study/house-of-nutrition-supplement-ecommerce-growth": "/case-studies/house-of-nutrition",
  "/case-study/ielts-coaching-facebook-lead-generation": "/case-studies/ielts-facebook",
  "/case-study/ielts-coaching-google-ads-lead-generation": "/case-studies/ielts-google",
  "/case-study/jarvis-invest-fintech-user-acquisition": "/case-studies/jarvis-invest",
  "/case-study/kaye-co-luxury-fashion-instagram-ads": "/case-studies/kaye-co",
  "/case-study/lana-life-care-healthcare-lead-generation": "/case-studies/lana-life-care",
  "/case-study/lark-ellen-farm-organic-products-ecommerce": "/case-studies/lark-ellen-farm",
  "/case-study/multi-course-institute-education-lead-generation": "/case-studies/multi-course-institute",
  "/case-study/sassind-melbourne-real-estate-lead-generation": "/case-studies/sassind-melbourne",
  "/case-study/university-education-qualification-lead-generation": "/case-studies/university-lead-gen",
  "/case-study/yallatoys-toy-store-ecommerce-optimization": "/case-studies/yallatoys",
  "/blog/paid-advertising-complete-guide-ppc-optimization": "/blog/paid-advertising-complete-strategy-guide",
  "/blog/digital-marketing-trends-2025-future-strategies": "/blog/digital-marketing-trends-2025-uae",
  "/blog/content-marketing-strategy-guide": "/blog/content-marketing-strategy-business-growth",
  "/blog/mobile-marketing-strategy-complete-guide": "/blog/mobile-marketing-app-promotion-strategies",
  "/blog/whatsapp-marketing-business-messaging-guide": "/blog/whatsapp-marketing-business-communication",
  "/blog/social-media-advertising-complete-guide": "/blog/social-media-advertising-platform-comparison",
  "/home": "/",
  "/home/dubai": "/dubai",
  "/thankyoupage": "/thank-you",
  "/schedule-a-30-minutes-meeting-with-muneez": "/book-a-meeting",
  "/website-development-offer": "/services/website-development",
  "/website-development-offer-dubai-2025": "/services/website-development",
  "/campus-ambassador-program-dubai": "/campus-proposal",
  "/proposal-mycampus": "/campus-proposal",
  "/technical-seo-audit-dubai-free": "/technical-seo",
  "/performance-marketing-technical-seo-dubai": "/performance-marketing-seo",
  "/72-hour-marketing-roadmap-dubai-free": "/book-a-meeting",
  "/sitemap": "/",
  "/award": "/",
  "/awards": "/"
};

export function normalizePath(input: string): string {
  let p = (input || "/").split("?")[0].split("#")[0];
  try { p = decodeURIComponent(p); } catch { /* keep raw */ }
  p = p.toLowerCase().replace(/\/index\.html$/, "/").replace(/\/{2,}/g, "/");
  if (!p.startsWith("/")) p = "/" + p;
  if (p.length > 1) p = p.replace(/\/+$/, "");
  return p || "/";
}

const tokens = (s: string) => s.split(/[^a-z0-9]+/).filter(t => t.length > 2 && !["guide", "complete", "dubai", "2025", "strategy", "and", "the", "for"].includes(t));

function closestBlog(slug: string): string | null {
  const want = tokens(slug);
  let best: string | null = null, score = 1;
  for (const s of BLOG_SLUGS) {
    const have = tokens(s);
    const hit = want.filter(t => have.includes(t)).length;
    if (hit > score) { score = hit; best = s; }
  }
  return best;
}

// Returns the path that should be shown for any incoming URL.
export function resolveRoute(input: string): string {
  const p = normalizePath(input);
  if (LEGACY_REDIRECTS[p]) return LEGACY_REDIRECTS[p];
  const [, first, second] = p.split("/");
  if (first === "home" && p.startsWith("/home/dubai/")) return ROUTES.services;
  if (first === "case-study") return ROUTES.caseStudies;
  if (first === "award" && second) return "/awards/" + second;
  if (first === "dubai" && second && !DUBAI_SLUGS.includes(second)) return ROUTES.dubai;
  if (first === "blog" && second && !BLOG_SLUGS.includes(second)) {
    const match = closestBlog(second);
    return match ? "/blog/" + match : ROUTES.blog;
  }
  if (first === "services" && second && !SERVICES.some(s => s.slug === second)) return ROUTES.services;
  if (first === "industries" && second && !INDUSTRIES.some(i => i.slug === second)) return ROUTES.industries;
  return p;
}

export const INDEXABLE_ROUTES: string[] = [
  "/",
  "/services",
  "/industries",
  "/dubai",
  "/case-studies",
  "/blog",
  "/portfolio",
  "/contact",
  "/book-a-meeting",
  "/technical-seo",
  "/performance-marketing-seo",
  "/services/digital-marketing",
  "/services/performance-marketing",
  "/services/lead-generation",
  "/services/paid-advertising",
  "/services/google-ads",
  "/services/ppc-management",
  "/services/facebook-ads",
  "/services/instagram-ads",
  "/services/linkedin-ads",
  "/services/tiktok-ads",
  "/services/snapchat-ads",
  "/services/youtube-ads",
  "/services/pinterest-ads",
  "/services/social-media-ads",
  "/services/seo",
  "/services/conversion-rate-optimization",
  "/services/landing-page-optimization",
  "/services/ab-testing",
  "/services/funnel-optimization",
  "/services/analytics",
  "/services/google-analytics",
  "/services/conversion-tracking",
  "/services/email-marketing",
  "/services/marketing-automation",
  "/services/whatsapp-marketing",
  "/services/website-development",
  "/services/shopify-development",
  "/services/wordpress-development",
  "/industries/ecommerce",
  "/industries/education",
  "/industries/fintech",
  "/industries/healthcare",
  "/industries/real-estate",
  "/industries/saas",
  "/industries/travel-hospitality",
  "/industries/fashion-beauty",
  "/industries/food-beverage",
  "/industries/automotive",
  "/industries/gaming",
  "/industries/professional-services",
  "/industries/telecom",
  "/industries/manufacturing",
  "/industries/non-profit",
  "/dubai/digital-marketing-specialist",
  "/dubai/digital-marketing",
  "/dubai/digital-marketing-consultant",
  "/dubai/b2b-marketing",
  "/dubai/digital-marketing-courses",
  "/dubai/performance-marketing",
  "/dubai/google-ads",
  "/dubai/ppc",
  "/dubai/facebook-ads",
  "/dubai/seo",
  "/dubai/search-engine-marketing",
  "/dubai/content-marketing",
  "/dubai/social-media-marketing",
  "/dubai/social-media-management",
  "/dubai/social-media-advertising",
  "/dubai/web-design",
  "/dubai/website-development",
  "/case-studies/compass-jewelry",
  "/case-studies/house-of-nutrition",
  "/case-studies/jarvis-invest",
  "/case-studies/dubai-smile-dental",
  "/case-studies/flavored-pb-co",
  "/case-studies/lana-life-care",
  "/case-studies/atlantis-hospitality",
  "/case-studies/emirates-digital-bank",
  "/case-studies/al-barsha-fitness",
  "/case-studies/yallatoys",
  "/case-studies/ielts-google",
  "/case-studies/ielts-facebook",
  "/case-studies/university-lead-gen",
  "/case-studies/multi-course-institute",
  "/case-studies/lark-ellen-farm",
  "/case-studies/sassind-melbourne",
  "/case-studies/house-of-jersey",
  "/case-studies/kaye-co",
  "/blog/ecommerce-marketing-guide-dubai-2025",
  "/blog/google-ads-mastery-complete-guide-2025",
  "/blog/facebook-instagram-advertising-strategy-guide",
  "/blog/conversion-rate-optimization-complete-guide",
  "/blog/fintech-marketing-strategies-dubai-2025",
  "/blog/linkedin-advertising-b2b-lead-generation",
  "/blog/healthcare-marketing-guide-patient-acquisition",
  "/blog/real-estate-marketing-dubai-luxury-properties",
  "/blog/saas-marketing-complete-strategy-guide-2025",
  "/blog/education-marketing-online-course-promotion",
  "/blog/tiktok-advertising-guide-business-growth",
  "/blog/youtube-advertising-video-marketing-strategy",
  "/blog/email-marketing-automation-customer-retention",
  "/blog/seo-strategy-guide-local-business-dubai",
  "/blog/snapchat-advertising-young-audience-engagement",
  "/blog/pinterest-advertising-visual-marketing-guide",
  "/blog/google-analytics-conversion-tracking-guide",
  "/blog/website-development-conversion-optimization-2025",
  "/blog/landing-page-optimization-conversion-rates",
  "/blog/ab-testing-complete-guide-optimization",
  "/blog/funnel-optimization-sales-conversion",
  "/blog/whatsapp-marketing-business-communication",
  "/blog/paid-advertising-complete-strategy-guide",
  "/blog/social-media-advertising-platform-comparison",
  "/blog/digital-marketing-trends-2025-uae",
  "/blog/mobile-marketing-app-promotion-strategies",
  "/blog/content-marketing-strategy-business-growth",
  "/blog/shopify-development-ecommerce-optimization",
  "/blog/wordpress-development-business-websites",
  "/blog/fashion-beauty-marketing-social-media-influence",
  "/blog/food-beverage-marketing-restaurant-growth",
  "/blog/automotive-marketing-car-dealership-strategies",
  "/blog/gaming-entertainment-marketing-audience-engagement",
  "/blog/professional-services-marketing-b2b-strategies",
  "/blog/telecom-marketing-digital-transformation",
  "/blog/manufacturing-b2b-marketing-industrial-sector",
  "/blog/nonprofit-marketing-fundraising-donor-engagement",
  "/blog/travel-hospitality-marketing-post-pandemic",
  "/blog/influencer-marketing-roi-measurement",
  "/blog/lead-generation-b2b-sales-funnel",
  "/blog/performance-marketing-data-driven-strategies",
  "/blog/ppc-management-optimization-guide",
  "/blog/customer-journey-mapping-optimization",
  "/blog/marketing-attribution-measurement-models",
  "/blog/cross-platform-advertising-integration",
  "/blog/voice-search-optimization-local-seo",
  "/blog/marketing-automation-workflow-optimization",
  "/blog/video-marketing-engagement-strategies",
  "/blog/remarketing-retargeting-customer-recovery",
  "/blog/brand-building-digital-presence",
  "/awards/best-performance-marketing-specialist-dubai-2025",
  "/awards/digital-marketing-specialist-dubai-uae",
  "/awards/google-ads-partner-dubai-2025",
  "/awards/meta-marketing-partner-dubai-2025",
  "/awards/performance-marketing-award-dubai-2025",
  "/portfolio/best-digital-marketer",
  "/portfolio/netflix-style",
  "/portfolio/inspiring-digital-marketing",
  "/dubai/ai-consultant",
  "/dubai/ai-strategy",
  "/dubai/ai-implementation",
  "/dubai/ai-automation",
  "/dubai/ai-agents",
  "/dubai/custom-crm-development",
  "/dubai/custom-erp-development",
  "/dubai/business-dashboards",
  "/dubai/ai-marketing",
  "/dubai/ai-seo",
  "/dubai/ai-training",
  "/dubai/ai-for-real-estate",
  "/dubai/ai-for-ecommerce",
  "/dubai/ai-for-healthcare",
  "/services/ai-consulting",
  "/services/business-automation",
  "/services/ai-agent-development",
  "/services/custom-crm-development",
  "/services/custom-erp-development",
  "/services/ai-implementation",
  "/dubai/independent-ai-consultant",
  "/dubai/ai-business-consultant",
  "/dubai/whatsapp-ai-chatbot",
  "/dubai/ai-voice-agents",
  "/dubai/ai-customer-service",
  "/dubai/ai-sales-automation",
  "/dubai/custom-ai-assistant",
  "/dubai/ai-content-creation",
  "/dubai/ai-for-marketing-agencies",
  "/dubai/ai-website-development",
  "/dubai/custom-ai-development",
  "/dubai/ai-for-small-business",
  "/dubai/ai-for-startups",
  "/dubai/freelance-ai-consultant",
  "/privacy-policy",
  "/terms"
];
