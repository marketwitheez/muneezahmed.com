import React, { Suspense } from "react";
import * as LazyPages from "./AppLazyComponents";
import {
  MainPortfolio,
  Contact,
  ThankYou,
  AllCaseStudies,
  BlogPage,
  CampusProposal,
  ScheduleMeeting,
  TechnicalSEO,
  PerformanceMarketingTechnicalSEO,
  BestDigitalMarketingSpecialistDubai,
  BestPerformanceMarketingSpecialist,
  DigitalMarketingSpecialist,
  GoogleAdsPartnerAward,
  MetaMarketingPartnerAward,
  PerformanceMarketingAward,
  CASE_STUDY_COMPONENTS,
  BLOG_COMPONENTS
} from "./routing/RouteComponents";
import { FastLoader } from "./AppLoaders";
import { DUBAI_KEYWORDS } from "./dubai-landing-pages/keywords";
import { DubaiPageErrorBoundary } from "./dubai-landing-pages/DubaiPageWrapper";
import { BestDigitalMarketerPortfolio, NetflixStylePortfolio, InspiringDigitalMarketingPortfolio, PortfolioHub } from "./portfolio-pages";
import { ROUTES, SERVICES, INDUSTRIES, AWARDS, PORTFOLIO_PAGES, normalizePath } from "./routing/SiteStructure";

import { registerAIRoutes } from "./ai-landing-pages/AIRoutes";
import { registerCityRoutes } from "./city-pages/CityRoutes";
const PrivacyPolicy = React.lazy(() => import("./legal/PrivacyPolicy"));
const Terms = React.lazy(() => import("./legal/Terms"));
const DubaiHub = React.lazy(() => import("./dubai-landing-pages/DubaiHub").then(m => ({ default: m.DubaiHub })));
const DubaiLandingPageTemplate = React.lazy(() => import("./dubai-landing-pages/DubaiLandingPageTemplate").then(m => ({ default: m.DubaiLandingPageTemplate })));
const HubPage = React.lazy(() => import("./HubPage").then(m => ({ default: m.HubPage })));
const NotFound = React.lazy(() => import("./NotFound").then(m => ({ default: m.NotFound })));

type Renderer = () => JSX.Element;
const routeConfig: Record<string, Renderer> = {};

// Core pages
routeConfig[ROUTES.home] = () => <MainPortfolio />;
routeConfig[ROUTES.contact] = () => <Contact />;
routeConfig[ROUTES.thankYou] = () => <ThankYou />;
routeConfig[ROUTES.caseStudies] = () => <AllCaseStudies />;
routeConfig[ROUTES.blog] = () => <BlogPage />;
routeConfig[ROUTES.bookMeeting] = () => <ScheduleMeeting />;
routeConfig[ROUTES.technicalSeo] = () => <TechnicalSEO />;
routeConfig[ROUTES.performanceMarketingSeo] = () => <PerformanceMarketingTechnicalSEO />;
routeConfig[ROUTES.campusProposal] = () => <CampusProposal />;

// Hubs
routeConfig[ROUTES.services] = () => <HubPage kind="services" />;
routeConfig[ROUTES.industries] = () => <HubPage kind="industries" />;
routeConfig[ROUTES.dubai] = () => (
  <DubaiPageErrorBoundary keywordSlug="hub">
    <DubaiHub />
  </DubaiPageErrorBoundary>
);

// /services/:slug and /industries/:slug → the dedicated page components
const lazyMap = LazyPages as unknown as Record<string, React.ComponentType | undefined>;
SERVICES.forEach(s => {
  const Page = lazyMap[s.component];
  if (Page) routeConfig[`/services/${s.slug}`] = () => <Page />;
});
INDUSTRIES.forEach(i => {
  const Page = lazyMap[i.component];
  if (Page) routeConfig[`/industries/${i.slug}`] = () => <Page />;
});

// /dubai/:slug location pages
DUBAI_KEYWORDS.forEach(keyword => {
  routeConfig[`/dubai/${keyword.slug}`] = () => (
    <DubaiPageErrorBoundary keywordSlug={keyword.slug}>
      <DubaiLandingPageTemplate keywordData={keyword} />
    </DubaiPageErrorBoundary>
  );
});
routeConfig[ROUTES.dubaiSpecialist] = () => <BestDigitalMarketingSpecialistDubai />;

// AI + rewritten marketing keyword pages (override the old DubaiLandingPageTemplate for the same URLs)
registerAIRoutes(routeConfig);
// City × service pages (rollout controlled by LIVE_WAVE)
registerCityRoutes(routeConfig);
// Legal
routeConfig["/privacy-policy"] = () => <PrivacyPolicy />;
routeConfig["/terms"] = () => <Terms />;

// /awards/:slug
const awardComponents: Record<string, React.ComponentType> = {
  BestPerformanceMarketingSpecialist,
  DigitalMarketingSpecialist,
  GoogleAdsPartnerAward,
  MetaMarketingPartnerAward,
  PerformanceMarketingAward,
};
AWARDS.forEach(a => {
  const Page = awardComponents[a.component];
  if (Page) routeConfig[`/awards/${a.slug}`] = () => <Page />;
});

// /portfolio and /portfolio/:slug
const portfolioComponents: Record<string, React.ComponentType> = {
  BestDigitalMarketerPortfolio,
  NetflixStylePortfolio,
  InspiringDigitalMarketingPortfolio,
};
routeConfig[ROUTES.portfolio] = () => <PortfolioHub />;
PORTFOLIO_PAGES.forEach(p => {
  const Page = portfolioComponents[p.component];
  if (Page) routeConfig[`/portfolio/${p.slug}`] = () => <Page />;
});

// /case-studies/:slug and /blog/:slug
Object.entries(CASE_STUDY_COMPONENTS).forEach(([slug, Page]) => {
  routeConfig[`/case-studies/${slug}`] = () => <Page />;
});
Object.entries(BLOG_COMPONENTS).forEach(([slug, Page]) => {
  routeConfig[`/blog/${slug}`] = () => <Page />;
});

export const REGISTERED_ROUTES = Object.keys(routeConfig);

export function usePageRouting(currentRoute: string) {
  const renderPage = () => {
    const path = normalizePath(currentRoute);
    const render = routeConfig[path];
    return (
      <Suspense fallback={<FastLoader />}>
        {render ? render() : <NotFound />}
      </Suspense>
    );
  };
  return renderPage;
}
