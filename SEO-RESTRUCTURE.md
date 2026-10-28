# muneezahmed.com — SEO restructure

## New structure (147 indexable pages, every old URL redirected)

```
/                                   Home
/services                           Hub → 28 service pages   /services/google-ads, /services/seo …
/industries                         Hub → 15 industry pages  /industries/real-estate …
/dubai                              Hub → 17 Dubai pages     /dubai/google-ads, /dubai/web-design …
/case-studies                       Hub → 18 case studies
/blog                               Hub → 50 guides
/portfolio                          Hub → 3 portfolio pages  /portfolio/netflix-style …
/awards/<slug>                      5 award pages
/book-a-meeting  /contact  /technical-seo  /performance-marketing-seo
noindex: /thank-you  /campus-proposal  (+ every unknown URL shows a noindex 404 page)
```

Intent split:
- **/services/** = international, location-neutral pages (dedicated content components that existed but were never routed).
- **/dubai/** = local-intent pages for UAE searches. 170 near-duplicate keyword pages are consolidated into 17 (one per search intent); each old URL 301s to its closest match.
- **/industries/** = one page per vertical (dedicated components, previously unrouted).

## Problems this fixes
1. 44 dedicated service/industry pages (`/google-ads-expert`, `/real-estate-marketing` …) were imported but **never routed** — those URLs silently showed the homepage.
2. Unknown URLs rendered the homepage (soft-404s / duplicate homepage). Now a noindex 404 page.
3. Same topic on up to 3 URLs (`/google-ads-expert`, `/home/dubai/best-google-ads-expert`, `/dubai/google-ads-freelancer`) → one URL per topic + one Dubai version.
4. ~150 doorway-style Dubai pages (`digital-marketing-is-what`, `social-media-media-marketing` …) → merged.
5. Canonicals mixed `muneezahmed.com` / `www.`; 6 blog posts had canonicals pointing to URLs that didn't exist (so Google could drop them). Canonical is now generated from the route, always `https://www.muneezahmed.com/...`.
6. Dozens of internal links pointed at pages that never existed (`/home/dubai/best-digital-marketing-expert`, `/home/dubai/content-marketing-expert` …). All now resolve via the central redirect map.
7. Most internal links were JS `onClick` buttons — Google couldn't crawl the structure. Footer now has real `<a href>` links to all hubs and top pages, and hubs link to every child.
8. Sitemap listed URLs that didn't exist and used the non-www host. New sitemap = exactly the 147 live pages.
9. Breadcrumb structured data added to every page; Person schema `sameAs` fixed to your real profiles.

## Files (drop into the project, same paths)
| File | Status |
|---|---|
| `src/app/components/routing/SiteStructure.ts` | NEW — single source of truth: URLs, meta, 308 redirects, resolver |
| `src/app/components/AppRouting.tsx` | REPLACE |
| `src/app/components/Router.tsx` | REPLACE — resolves legacy URLs on load + on navigate |
| `src/app/components/SEO.tsx` | REPLACE — canonical, central meta, noindex list, breadcrumbs |
| `src/app/components/AppFooter.tsx` | REPLACE — crawlable link columns |
| `src/app/components/dubai-landing-pages/keywords.ts` | REPLACE — 18 consolidated Dubai pages |
| `src/app/components/HubPage.tsx` | NEW — /services and /industries hubs |
| `src/app/components/NotFound.tsx` | NEW |
| `src/app/components/SiteLink.tsx` | NEW — crawlable link that navigates client-side |
| `public/sitemap.xml`, `public/robots.txt` | NEW (project-root `public/`, served at /sitemap.xml) |
| `vercel.json` | NEW at repo root — server-side 301s + www redirect (only used if hosted on Vercel) |

Delete the old copies so they can't be served by mistake: `src/app/sitemap.xml`, `src/app/public/sitemap.xml`, `src/app/robots.txt`, `src/app/vercel.json`.
`routing/RouteConstants.tsx` and `routing/RouteHelpers.tsx` are no longer imported and can be deleted.

## After deploying
1. Search Console → Sitemaps → submit `https://www.muneezahmed.com/sitemap.xml`; remove any old sitemap.
2. URL Inspection on 5–10 old URLs (e.g. `/dubai/social-media-mktg`) — confirm they land on the new URL.
3. If hosting is not Vercel, set up a host-level redirect `muneezahmed.com → www.muneezahmed.com` in your DNS/hosting panel. The in-app redirects still work everywhere.
4. Expect 2–6 weeks of reshuffling in Search Console while Google consolidates the merged pages.

## Next content steps (not done — needs your input)
- The 17 Dubai pages share one template; give each 300–500 words of unique copy (local pricing, Dubai case study, FAQs specific to that service).
- Several service components still say "Dubai" in their titles/H1; the central meta now makes titles location-neutral, but the on-page copy could be softened for international visitors.
- SEO defaults said "8+ years / 100+ brands" while the site says "5+ years / 50+ businesses". Defaults now match the site; confirm the right numbers.


## AI keyword pages (added 2026-10-28)

33 pages rendered by one template (`ai-landing-pages/AILandingPage.tsx`, data in `aiPages.ts`). Add `{aiRoutes()}` from `AIRoutes.tsx` to the router.

| URL | Primary keyword | Secondary |
|---|---|---|
| /dubai/ai-consultant | best ai consultant in dubai | 10 |
| /dubai/ai-strategy | ai strategy consultant dubai | 7 |
| /dubai/ai-implementation | ai implementation services dubai | 6 |
| /dubai/ai-automation | ai automation agency dubai | 11 |
| /dubai/ai-agents | ai chatbot development dubai | 7 |
| /dubai/custom-crm-development | custom crm development dubai | 6 |
| /dubai/custom-erp-development | custom erp software development dubai | 5 |
| /dubai/business-dashboards | business intelligence dashboard dubai | 4 |
| /dubai/ai-marketing | ai marketing agency dubai | 10 |
| /dubai/ai-seo | ai seo dubai | 6 |
| /dubai/ai-training | ai training for business dubai | 5 |
| /dubai/ai-for-real-estate | ai for real estate dubai | 5 |
| /dubai/ai-for-ecommerce | ai for ecommerce dubai | 4 |
| /dubai/ai-for-healthcare | ai for healthcare dubai | 4 |
| /dubai/freelance-ai-consultant | freelance ai consultant dubai | 7 |
| /dubai/independent-ai-consultant | independent ai consultant uae | 4 |
| /dubai/ai-business-consultant | ai business consultant dubai | 4 |
| /dubai/whatsapp-ai-chatbot | whatsapp ai chatbot dubai | 4 |
| /dubai/ai-voice-agents | ai voice agent development uae | 4 |
| /dubai/ai-customer-service | ai customer service automation dubai | 4 |
| /dubai/ai-sales-automation | ai sales automation dubai | 5 |
| /dubai/custom-ai-assistant | custom ai assistant development dubai | 4 |
| /dubai/ai-content-creation | ai content creation services dubai | 4 |
| /dubai/ai-for-marketing-agencies | ai tools implementation for marketing agencies | 4 |
| /dubai/ai-website-development | ai website development dubai | 4 |
| /dubai/custom-ai-development | custom ai application development dubai | 4 |
| /dubai/ai-for-small-business | ai solutions for smes in uae | 4 |
| /dubai/ai-for-startups | ai consulting for startups dubai | 4 |
| /services/ai-consulting | ai consulting services | 5 |
| /services/business-automation | business automation services | 5 |
| /services/ai-agent-development | ai agent development | 5 |
| /services/custom-crm-development | custom crm development | 5 |
| /services/custom-erp-development | custom erp development | 5 |
| /services/ai-implementation | ai implementation services | 5 |

### The 50 target keywords → page

| # | Keyword | Page | Role |
|---|---|---|---|
| 1 | best AI consultant in Dubai | /dubai/ai-consultant | primary |
| 2 | AI consultant in Dubai | /dubai/ai-consultant | secondary |
| 3 | AI consulting services in Dubai | /dubai/ai-consultant | secondary |
| 4 | AI consultant UAE | /dubai/ai-consultant | secondary |
| 5 | freelance AI consultant Dubai | /dubai/freelance-ai-consultant | primary |
| 6 | independent AI consultant UAE | /dubai/independent-ai-consultant | primary |
| 7 | AI business consultant Dubai | /dubai/ai-business-consultant | primary |
| 8 | AI strategy consultant Dubai | /dubai/ai-strategy | primary |
| 9 | AI solutions provider Dubai | /dubai/ai-consultant | secondary |
| 10 | AI consulting company Dubai | /dubai/ai-consultant | secondary |
| 11 | AI automation consultant Dubai | /dubai/ai-automation | secondary |
| 12 | AI automation services Dubai | /dubai/ai-automation | secondary |
| 13 | business automation using AI Dubai | /dubai/ai-automation | secondary |
| 14 | AI workflow automation consultant | /dubai/ai-automation | secondary |
| 15 | AI implementation consultant Dubai | /dubai/ai-implementation | secondary |
| 16 | AI integration services UAE | /dubai/ai-implementation | secondary |
| 17 | business process automation consultant Dubai | /dubai/ai-automation | secondary |
| 18 | AI transformation consultant UAE | /dubai/ai-strategy | secondary |
| 19 | AI-powered business solutions Dubai | /dubai/ai-business-consultant | secondary |
| 20 | AI productivity consultant Dubai | /dubai/ai-business-consultant | secondary |
| 21 | AI agent development Dubai | /dubai/ai-agents | secondary |
| 22 | AI agents for business UAE | /dubai/ai-agents | secondary |
| 23 | AI chatbot development Dubai | /dubai/ai-agents | primary |
| 24 | custom AI assistant development Dubai | /dubai/custom-ai-assistant | primary |
| 25 | AI voice agent development UAE | /dubai/ai-voice-agents | primary |
| 26 | AI customer service automation Dubai | /dubai/ai-customer-service | primary |
| 27 | WhatsApp AI chatbot Dubai | /dubai/whatsapp-ai-chatbot | primary |
| 28 | AI sales automation Dubai | /dubai/ai-sales-automation | primary |
| 29 | AI lead generation automation Dubai | /dubai/ai-sales-automation | secondary |
| 30 | custom AI solutions for businesses Dubai | /dubai/custom-ai-development | secondary |
| 31 | AI marketing consultant Dubai | /dubai/ai-marketing | secondary |
| 32 | AI digital marketing services UAE | /dubai/ai-marketing | secondary |
| 33 | AI-powered marketing automation Dubai | /dubai/ai-marketing | secondary |
| 34 | AI advertising automation consultant | /dubai/ai-marketing | secondary |
| 35 | AI SEO consultant Dubai | /dubai/ai-seo | secondary |
| 36 | AI content creation services Dubai | /dubai/ai-content-creation | primary |
| 37 | AI social media automation Dubai | /dubai/ai-content-creation | secondary |
| 38 | AI lead generation services UAE | /dubai/ai-sales-automation | secondary |
| 39 | AI marketing strategy consultant Dubai | /dubai/ai-marketing | secondary |
| 40 | AI tools implementation for marketing agencies | /dubai/ai-for-marketing-agencies | primary |
| 41 | AI website development Dubai | /dubai/ai-website-development | primary |
| 42 | AI-powered website development UAE | /dubai/ai-website-development | secondary |
| 43 | custom AI application development Dubai | /dubai/custom-ai-development | primary |
| 44 | AI software development consultant UAE | /dubai/custom-ai-development | secondary |
| 45 | AI integration consultant for small businesses | /dubai/ai-for-small-business | secondary |
| 46 | AI consulting for startups Dubai | /dubai/ai-for-startups | primary |
| 47 | AI solutions for SMEs in UAE | /dubai/ai-for-small-business | primary |
| 48 | AI business process optimization Dubai | /dubai/ai-business-consultant | secondary |
| 49 | AI consulting for real estate companies Dubai | /dubai/ai-for-real-estate | secondary |
| 50 | AI training and consulting Dubai | /dubai/ai-training | secondary |

Note: "freelance" wording is used only on keyword landing pages, never in the homepage hero or About.


## City pages (added 2026-10-28)

219 cities × 8 services = 1752 service pages + 219 city hubs (1971 URLs). URL: /{country}/{city}/{service}. Routes: {cityRoutes()} from city-pages/CityRoutes.tsx. Sitemap: sitemap-cities.xml.

Cities by region:
- North America (34): New York, San Francisco, Los Angeles, Miami, Chicago, Austin, Boston, Toronto, Vancouver, Seattle, Dallas, Houston, Atlanta, Washington DC, Las Vegas, Denver, Montreal, Calgary, Philadelphia, Phoenix, San Diego, San Jose, Orlando, Tampa, Nashville, Charlotte, Minneapolis, Detroit, Portland, Salt Lake City, Raleigh, Honolulu, Ottawa, Edmonton
- Europe (63): London, Manchester, Paris, Berlin, Amsterdam, Dublin, Zurich, Madrid, Milan, Stockholm, Birmingham, Edinburgh, Munich, Frankfurt, Hamburg, Brussels, Lisbon, Barcelona, Vienna, Copenhagen, Oslo, Helsinki, Warsaw, Prague, Istanbul, Athens, Leeds, Glasgow, Bristol, Liverpool, Cambridge, Cork, Lyon, Marseille, Nice, Cologne, Düsseldorf, Stuttgart, Rotterdam, The Hague, Eindhoven, Geneva, Basel, Luxembourg City, Rome, Turin, Valencia, Málaga, Porto, Kraków, Budapest, Bucharest, Sofia, Belgrade, Zagreb, Tallinn, Riga, Vilnius, Limassol, Valletta, Reykjavik, Ankara, Tbilisi
- Middle East (21): Abu Dhabi, Riyadh, Jeddah, Doha, Kuwait City, Manama, Muscat, Amman, Beirut, Sharjah, Dammam, Baku, Tel Aviv, Erbil, Mecca, Medina, Ajman, Ras Al Khaimah, Al Ain, Salalah, Al Wakrah
- Asia (54): Singapore, Hong Kong, Tokyo, Mumbai, Bangalore, Delhi, Hyderabad, Pune, Chennai, Karachi, Lahore, Dhaka, Colombo, Kolkata, Ahmedabad, Kochi, Jaipur, Chandigarh, Kuala Lumpur, Bangkok, Jakarta, Ho Chi Minh City, Manila, Seoul, Shanghai, Taipei, Almaty, Tashkent, Noida, Gurugram, Indore, Lucknow, Coimbatore, Thiruvananthapuram, Mangalore, Visakhapatnam, Nagpur, Surat, Goa, Bhubaneswar, Kathmandu, Malé, Islamabad, Jurong, Penang, Phuket, Hanoi, Bali, Cebu, Shenzhen, Beijing, Guangzhou, Osaka, Busan
- Oceania (10): Sydney, Melbourne, Brisbane, Perth, Auckland, Adelaide, Gold Coast, Canberra, Wellington, Christchurch
- Africa (24): Cairo, Lagos, Johannesburg, Nairobi, Casablanca, Accra, Cape Town, Kigali, Alexandria, Tunis, Algiers, Marrakech, Rabat, Dakar, Abidjan, Abuja, Addis Ababa, Dar es Salaam, Kampala, Port Louis, Durban, Lusaka, Gaborone, Luanda
- Latin America (13): Mexico City, São Paulo, Buenos Aires, Bogotá, Santiago, Monterrey, Guadalajara, Lima, Rio de Janeiro, Panama City, San José, Montevideo, Santo Domingo


### Rollout waves

- Wave 1 (live now, 30 cities, 270 URLs): GCC, top India, London, Manchester, New York, Miami, San Francisco, Los Angeles, Toronto, Singapore, Sydney, Melbourne.
- Wave 2 (40 cities): queued, noindex, sitemap ready as sitemap-cities-wave2.xml.ready.
- Wave 3 (149 cities): queued, noindex, sitemap-cities-wave3.xml.ready.

To release a wave: set LIVE_WAVE in city-pages/cities.ts, rename the .ready sitemap to .xml and add it to sitemap-index.xml. Release only after ~80% of the previous wave shows as indexed in Search Console.
