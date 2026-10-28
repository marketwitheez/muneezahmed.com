// AI + marketing keyword pages, registered into routeConfig by AppRouting.tsx (registerAIRoutes).
import React from "react";
import AILandingPage from "./AILandingPage";
import { AI_PAGES } from "./aiPages";

export function registerAIRoutes(routeConfig: Record<string, () => React.ReactNode>) {
  AI_PAGES.forEach(p => { routeConfig[p.url] = () => <AILandingPage page={p} />; });
}
