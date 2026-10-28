import React, { useState, useEffect } from "react";
import { resolveRoute } from "./routing/SiteStructure";

interface RouterContextType {
  currentRoute: string;
  navigate: (route: string) => void;
}

export const RouterContext = React.createContext<RouterContextType | null>(null);

// Resolve legacy/duplicate URLs and keep the address bar on the canonical path.
function syncAddressBar(target: string) {
  if (typeof window === "undefined") return;
  if (window.location.pathname !== target) {
    window.history.replaceState({}, "", target + window.location.search + window.location.hash);
  }
}

function readLocation(): string {
  if (typeof window === "undefined") return "/";
  try {
    const target = resolveRoute(window.location.pathname || "/");
    syncAddressBar(target);
    return target;
  } catch {
    return "/";
  }
}

export function Router({ children }: { children: React.ReactNode }) {
  const [currentRoute, setCurrentRoute] = useState<string>(readLocation);

  useEffect(() => {
    const onPop = () => setCurrentRoute(readLocation());
    window.addEventListener("popstate", onPop);

    // Fallback for code that changes the URL without calling navigate()
    const intervalId = setInterval(() => {
      const target = resolveRoute(window.location.pathname || "/");
      if (target !== currentRoute) setCurrentRoute(readLocation());
    }, 250);

    return () => {
      window.removeEventListener("popstate", onPop);
      clearInterval(intervalId);
    };
  }, [currentRoute]);

  const navigate = (route: string) => {
    if (/^https?:\/\//i.test(route)) {
      window.location.href = route;
      return;
    }
    const [pathPart, hash] = (route.startsWith("/") ? route : "/" + route).split("#");
    const target = resolveRoute(pathPart);
    if (target !== currentRoute) {
      window.history.pushState({}, "", target + (hash ? "#" + hash : ""));
      setCurrentRoute(target);
      window.scrollTo(0, 0);
    } else if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <RouterContext.Provider value={{ currentRoute, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = React.useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a Router");
  }
  return context;
}
