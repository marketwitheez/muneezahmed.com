// 219 cities × 8 services.
// Rollout: only cities with wave <= LIVE_WAVE are indexable and in sitemap-cities.xml.
// Raise LIVE_WAVE to 2, then 3, once Search Console shows the previous wave indexed,
// and rename the matching public/sitemap-cities-waveN.xml.ready to .xml (add it to sitemap-index.xml).
export const LIVE_WAVE = 1;
export const CITY_DATA = {
  "cities": [
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "New York",
      "slug": "new-york",
      "region": "North America",
      "currency": "USD",
      "utc": -5,
      "languages": "English",
      "industries": [
        "financial services",
        "media",
        "real estate"
      ],
      "areas": [
        "Manhattan",
        "Brooklyn"
      ],
      "note": "New York companies move fast and expect measurable ROI, with intense competition for attention in every category.",
      "wave": 1
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "San Francisco",
      "slug": "san-francisco",
      "region": "North America",
      "currency": "USD",
      "utc": -8,
      "languages": "English",
      "industries": [
        "SaaS",
        "venture-backed startups",
        "AI"
      ],
      "areas": [
        "SoMa",
        "Palo Alto"
      ],
      "note": "In the Bay Area, AI adoption is ahead of most markets, so differentiation comes from execution and integration rather than awareness.",
      "wave": 1
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "Los Angeles",
      "slug": "los-angeles",
      "region": "North America",
      "currency": "USD",
      "utc": -8,
      "languages": "English",
      "industries": [
        "entertainment",
        "e-commerce",
        "consumer brands"
      ],
      "areas": [
        "Santa Monica",
        "Downtown LA"
      ],
      "note": "Los Angeles is a creator and D2C hub where brands compete on content volume and paid social performance.",
      "wave": 1
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "Miami",
      "slug": "miami",
      "region": "North America",
      "currency": "USD",
      "utc": -5,
      "languages": "English, Spanish",
      "industries": [
        "real estate",
        "fintech",
        "hospitality"
      ],
      "areas": [
        "Brickell",
        "Wynwood"
      ],
      "note": "Miami has become a magnet for relocating founders and investors, with bilingual English and Spanish audiences across most sectors.",
      "wave": 1
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "Chicago",
      "slug": "chicago",
      "region": "North America",
      "currency": "USD",
      "utc": -6,
      "languages": "English",
      "industries": [
        "logistics",
        "manufacturing",
        "professional services"
      ],
      "areas": [
        "The Loop",
        "River North"
      ],
      "note": "Chicago businesses often run complex operations where automation and custom systems create outsized efficiency gains.",
      "wave": 2
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "Austin",
      "slug": "austin",
      "region": "North America",
      "currency": "USD",
      "utc": -6,
      "languages": "English",
      "industries": [
        "technology",
        "startups",
        "real estate"
      ],
      "areas": [
        "Downtown Austin",
        "The Domain"
      ],
      "note": "Austin combines a fast-growing startup scene with established tech employers, creating strong demand for lean, automated growth.",
      "wave": 2
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "Boston",
      "slug": "boston",
      "region": "North America",
      "currency": "USD",
      "utc": -5,
      "languages": "English",
      "industries": [
        "healthcare",
        "biotech",
        "education"
      ],
      "areas": [
        "Back Bay",
        "Seaport"
      ],
      "note": "Boston organisations in healthcare and education need AI that respects strict privacy and compliance expectations.",
      "wave": 2
    },
    {
      "country": "Canada",
      "countrySlug": "canada",
      "cc": "CA",
      "city": "Toronto",
      "slug": "toronto",
      "region": "North America",
      "currency": "CAD",
      "utc": -5,
      "languages": "English",
      "industries": [
        "financial services",
        "technology",
        "real estate"
      ],
      "areas": [
        "Financial District",
        "King West"
      ],
      "note": "Toronto is Canada's business capital, with mature buyers who expect bilingual-ready, privacy-conscious solutions.",
      "wave": 1
    },
    {
      "country": "Canada",
      "countrySlug": "canada",
      "cc": "CA",
      "city": "Vancouver",
      "slug": "vancouver",
      "region": "North America",
      "currency": "CAD",
      "utc": -8,
      "languages": "English",
      "industries": [
        "technology",
        "real estate",
        "tourism"
      ],
      "areas": [
        "Downtown Vancouver",
        "Mount Pleasant"
      ],
      "note": "Vancouver businesses frequently sell across North America and Asia-Pacific, making scalable automation especially valuable.",
      "wave": 2
    },
    {
      "country": "United Kingdom",
      "countrySlug": "united-kingdom",
      "cc": "GB",
      "city": "London",
      "slug": "london",
      "region": "Europe",
      "currency": "GBP",
      "utc": 0,
      "languages": "English",
      "industries": [
        "financial services",
        "professional services",
        "e-commerce"
      ],
      "areas": [
        "City of London",
        "Shoreditch"
      ],
      "note": "London is one of the most competitive digital markets in the world, and UK GDPR shapes how data and AI must be handled.",
      "wave": 1
    },
    {
      "country": "United Kingdom",
      "countrySlug": "united-kingdom",
      "cc": "GB",
      "city": "Manchester",
      "slug": "manchester",
      "region": "Europe",
      "currency": "GBP",
      "utc": 0,
      "languages": "English",
      "industries": [
        "e-commerce",
        "digital media",
        "professional services"
      ],
      "areas": [
        "Spinningfields",
        "Northern Quarter"
      ],
      "note": "Manchester has a fast-growing e-commerce and digital sector where performance marketing and automation drive scale.",
      "wave": 1
    },
    {
      "country": "France",
      "countrySlug": "france",
      "cc": "FR",
      "city": "Paris",
      "slug": "paris",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "French, English",
      "industries": [
        "luxury",
        "fashion",
        "technology"
      ],
      "areas": [
        "La Défense",
        "Le Marais"
      ],
      "note": "Paris brands, especially in luxury and fashion, need marketing and AI that protect a premium brand image.",
      "wave": 2
    },
    {
      "country": "Germany",
      "countrySlug": "germany",
      "cc": "DE",
      "city": "Berlin",
      "slug": "berlin",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "German, English",
      "industries": [
        "startups",
        "technology",
        "e-commerce"
      ],
      "areas": [
        "Mitte",
        "Kreuzberg"
      ],
      "note": "Berlin's startup ecosystem values efficient, data-driven growth and strict GDPR-compliant data practices.",
      "wave": 2
    },
    {
      "country": "Netherlands",
      "countrySlug": "netherlands",
      "cc": "NL",
      "city": "Amsterdam",
      "slug": "amsterdam",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "Dutch, English",
      "industries": [
        "technology",
        "logistics",
        "e-commerce"
      ],
      "areas": [
        "Zuidas",
        "Amsterdam Noord"
      ],
      "note": "Amsterdam is a European HQ hub for international companies selling across multiple EU markets.",
      "wave": 2
    },
    {
      "country": "Ireland",
      "countrySlug": "ireland",
      "cc": "IE",
      "city": "Dublin",
      "slug": "dublin",
      "region": "Europe",
      "currency": "EUR",
      "utc": 0,
      "languages": "English",
      "industries": [
        "technology",
        "financial services",
        "pharma"
      ],
      "areas": [
        "Docklands",
        "Grand Canal"
      ],
      "note": "Dublin hosts the EMEA headquarters of many global tech firms, creating demand for scalable, GDPR-ready AI systems.",
      "wave": 2
    },
    {
      "country": "Switzerland",
      "countrySlug": "switzerland",
      "cc": "CH",
      "city": "Zurich",
      "slug": "zurich",
      "region": "Europe",
      "currency": "CHF",
      "utc": 1,
      "languages": "German, English",
      "industries": [
        "banking",
        "insurance",
        "wealth management"
      ],
      "areas": [
        "Paradeplatz",
        "Zurich West"
      ],
      "note": "Zurich's finance sector demands precision, confidentiality and careful governance for any AI deployment.",
      "wave": 2
    },
    {
      "country": "Spain",
      "countrySlug": "spain",
      "cc": "ES",
      "city": "Madrid",
      "slug": "madrid",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "Spanish, English",
      "industries": [
        "real estate",
        "retail",
        "financial services"
      ],
      "areas": [
        "Salamanca",
        "Castellana"
      ],
      "note": "Madrid businesses increasingly sell to Spanish-speaking markets in Europe and Latin America from one base.",
      "wave": 2
    },
    {
      "country": "Italy",
      "countrySlug": "italy",
      "cc": "IT",
      "city": "Milan",
      "slug": "milan",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "Italian, English",
      "industries": [
        "fashion",
        "design",
        "manufacturing"
      ],
      "areas": [
        "Porta Nuova",
        "Brera"
      ],
      "note": "Milan combines world-class fashion and design brands with strong manufacturing, both ripe for AI-driven efficiency.",
      "wave": 2
    },
    {
      "country": "Sweden",
      "countrySlug": "sweden",
      "cc": "SE",
      "city": "Stockholm",
      "slug": "stockholm",
      "region": "Europe",
      "currency": "SEK",
      "utc": 1,
      "languages": "Swedish, English",
      "industries": [
        "technology",
        "fintech",
        "gaming"
      ],
      "areas": [
        "Norrmalm",
        "Södermalm"
      ],
      "note": "Stockholm is one of Europe's most digitally advanced cities, with high expectations for product quality and automation.",
      "wave": 2
    },
    {
      "country": "United Arab Emirates",
      "countrySlug": "united-arab-emirates",
      "cc": "AE",
      "city": "Abu Dhabi",
      "slug": "abu-dhabi",
      "region": "Middle East",
      "currency": "AED",
      "utc": 4,
      "languages": "English, Arabic",
      "industries": [
        "government services",
        "energy",
        "real estate"
      ],
      "areas": [
        "Al Maryah Island",
        "Yas Island"
      ],
      "note": "Abu Dhabi is investing heavily in AI as a national priority, with strong demand from government-linked and private enterprises.",
      "wave": 1
    },
    {
      "country": "Saudi Arabia",
      "countrySlug": "saudi-arabia",
      "cc": "SA",
      "city": "Riyadh",
      "slug": "riyadh",
      "region": "Middle East",
      "currency": "SAR",
      "utc": 3,
      "languages": "Arabic, English",
      "industries": [
        "government",
        "construction",
        "retail"
      ],
      "areas": [
        "King Abdullah Financial District",
        "Olaya"
      ],
      "note": "Vision 2030 is driving rapid digital transformation in Riyadh, with Arabic-first customer experiences in high demand.",
      "wave": 1
    },
    {
      "country": "Saudi Arabia",
      "countrySlug": "saudi-arabia",
      "cc": "SA",
      "city": "Jeddah",
      "slug": "jeddah",
      "region": "Middle East",
      "currency": "SAR",
      "utc": 3,
      "languages": "Arabic, English",
      "industries": [
        "trade",
        "hospitality",
        "retail"
      ],
      "areas": [
        "Al Rawdah",
        "Corniche"
      ],
      "note": "Jeddah's trading and hospitality businesses are modernising quickly, with WhatsApp central to customer communication.",
      "wave": 1
    },
    {
      "country": "Qatar",
      "countrySlug": "qatar",
      "cc": "QA",
      "city": "Doha",
      "slug": "doha",
      "region": "Middle East",
      "currency": "QAR",
      "utc": 3,
      "languages": "Arabic, English",
      "industries": [
        "energy",
        "hospitality",
        "real estate"
      ],
      "areas": [
        "West Bay",
        "Lusail"
      ],
      "note": "Doha businesses are scaling digital channels after major investment in infrastructure and tourism.",
      "wave": 1
    },
    {
      "country": "Kuwait",
      "countrySlug": "kuwait",
      "cc": "KW",
      "city": "Kuwait City",
      "slug": "kuwait-city",
      "region": "Middle East",
      "currency": "KWD",
      "utc": 3,
      "languages": "Arabic, English",
      "industries": [
        "retail",
        "financial services",
        "food and beverage"
      ],
      "areas": [
        "Sharq",
        "Salmiya"
      ],
      "note": "Kuwait has one of the highest per-capita spending levels in the region, with consumers highly active on Instagram and Snapchat.",
      "wave": 1
    },
    {
      "country": "Bahrain",
      "countrySlug": "bahrain",
      "cc": "BH",
      "city": "Manama",
      "slug": "manama",
      "region": "Middle East",
      "currency": "BHD",
      "utc": 3,
      "languages": "Arabic, English",
      "industries": [
        "fintech",
        "banking",
        "logistics"
      ],
      "areas": [
        "Bahrain Bay",
        "Seef"
      ],
      "note": "Manama is a regional fintech hub with a regulatory sandbox that encourages innovation in AI and automation.",
      "wave": 1
    },
    {
      "country": "Oman",
      "countrySlug": "oman",
      "cc": "OM",
      "city": "Muscat",
      "slug": "muscat",
      "region": "Middle East",
      "currency": "OMR",
      "utc": 4,
      "languages": "Arabic, English",
      "industries": [
        "logistics",
        "tourism",
        "energy"
      ],
      "areas": [
        "Al Khuwair",
        "Qurum"
      ],
      "note": "Muscat businesses are digitising operations and marketing, often for the first time, creating quick wins from automation.",
      "wave": 1
    },
    {
      "country": "Singapore",
      "countrySlug": "singapore",
      "cc": "SG",
      "city": "Singapore",
      "slug": "singapore",
      "region": "Asia",
      "currency": "SGD",
      "utc": 8,
      "languages": "English",
      "industries": [
        "financial services",
        "technology",
        "logistics"
      ],
      "areas": [
        "Marina Bay",
        "Raffles Place"
      ],
      "note": "Singapore is Asia's regional HQ capital, with sophisticated buyers and strong government support for AI adoption.",
      "wave": 1
    },
    {
      "country": "Hong Kong",
      "countrySlug": "hong-kong",
      "cc": "HK",
      "city": "Hong Kong",
      "slug": "hong-kong",
      "region": "Asia",
      "currency": "HKD",
      "utc": 8,
      "languages": "English, Cantonese",
      "industries": [
        "financial services",
        "trade",
        "retail"
      ],
      "areas": [
        "Central",
        "Kowloon"
      ],
      "note": "Hong Kong businesses operate at high speed across Asian markets, making automation and multilingual AI valuable.",
      "wave": 2
    },
    {
      "country": "Japan",
      "countrySlug": "japan",
      "cc": "JP",
      "city": "Tokyo",
      "slug": "tokyo",
      "region": "Asia",
      "currency": "JPY",
      "utc": 9,
      "languages": "Japanese, English",
      "industries": [
        "technology",
        "manufacturing",
        "retail"
      ],
      "areas": [
        "Shibuya",
        "Marunouchi"
      ],
      "note": "Tokyo companies are accelerating AI adoption to address labour shortages, with high standards for reliability.",
      "wave": 2
    },
    {
      "country": "India",
      "countrySlug": "india",
      "cc": "IN",
      "city": "Mumbai",
      "slug": "mumbai",
      "region": "Asia",
      "currency": "INR",
      "utc": 5.5,
      "languages": "English, Hindi",
      "industries": [
        "financial services",
        "media",
        "real estate"
      ],
      "areas": [
        "Bandra Kurla Complex",
        "Lower Parel"
      ],
      "note": "Mumbai is India's financial and media capital, where brands compete hard on digital performance and cost efficiency.",
      "wave": 1
    },
    {
      "country": "India",
      "countrySlug": "india",
      "cc": "IN",
      "city": "Bangalore",
      "slug": "bangalore",
      "region": "Asia",
      "currency": "INR",
      "utc": 5.5,
      "languages": "English, Kannada",
      "industries": [
        "technology",
        "SaaS",
        "startups"
      ],
      "areas": [
        "Koramangala",
        "Whitefield"
      ],
      "note": "Bangalore is India's technology capital, home to thousands of startups and global capability centres adopting AI quickly.",
      "wave": 1
    },
    {
      "country": "India",
      "countrySlug": "india",
      "cc": "IN",
      "city": "Delhi",
      "slug": "delhi",
      "region": "Asia",
      "currency": "INR",
      "utc": 5.5,
      "languages": "English, Hindi",
      "industries": [
        "government",
        "e-commerce",
        "education"
      ],
      "areas": [
        "Connaught Place",
        "Gurugram"
      ],
      "note": "Delhi NCR combines a huge consumer market with corporate hubs in Gurugram and Noida, driving demand for scalable marketing.",
      "wave": 1
    },
    {
      "country": "India",
      "countrySlug": "india",
      "cc": "IN",
      "city": "Hyderabad",
      "slug": "hyderabad",
      "region": "Asia",
      "currency": "INR",
      "utc": 5.5,
      "languages": "English, Telugu",
      "industries": [
        "technology",
        "pharma",
        "healthcare"
      ],
      "areas": [
        "HITEC City",
        "Gachibowli"
      ],
      "note": "Hyderabad's tech and pharma sectors are investing in AI to improve operations and customer engagement.",
      "wave": 1
    },
    {
      "country": "India",
      "countrySlug": "india",
      "cc": "IN",
      "city": "Pune",
      "slug": "pune",
      "region": "Asia",
      "currency": "INR",
      "utc": 5.5,
      "languages": "English, Marathi",
      "industries": [
        "manufacturing",
        "IT services",
        "automotive"
      ],
      "areas": [
        "Hinjewadi",
        "Kharadi"
      ],
      "note": "Pune pairs IT services with manufacturing and automotive, where ERP and automation deliver direct cost savings.",
      "wave": 1
    },
    {
      "country": "India",
      "countrySlug": "india",
      "cc": "IN",
      "city": "Chennai",
      "slug": "chennai",
      "region": "Asia",
      "currency": "INR",
      "utc": 5.5,
      "languages": "English, Tamil",
      "industries": [
        "manufacturing",
        "SaaS",
        "healthcare"
      ],
      "areas": [
        "OMR",
        "Guindy"
      ],
      "note": "Chennai is a hub for SaaS companies and manufacturers, both looking to scale with leaner, automated operations.",
      "wave": 1
    },
    {
      "country": "Australia",
      "countrySlug": "australia",
      "cc": "AU",
      "city": "Sydney",
      "slug": "sydney",
      "region": "Oceania",
      "currency": "AUD",
      "utc": 10,
      "languages": "English",
      "industries": [
        "financial services",
        "real estate",
        "e-commerce"
      ],
      "areas": [
        "CBD",
        "North Sydney"
      ],
      "note": "Sydney businesses face high labour costs, making AI automation and efficient marketing especially attractive.",
      "wave": 1
    },
    {
      "country": "Australia",
      "countrySlug": "australia",
      "cc": "AU",
      "city": "Melbourne",
      "slug": "melbourne",
      "region": "Oceania",
      "currency": "AUD",
      "utc": 10,
      "languages": "English",
      "industries": [
        "e-commerce",
        "fashion",
        "education"
      ],
      "areas": [
        "CBD",
        "Richmond"
      ],
      "note": "Melbourne has a strong D2C and fashion scene, where performance marketing results translate directly into growth.",
      "wave": 1
    },
    {
      "country": "Egypt",
      "countrySlug": "egypt",
      "cc": "EG",
      "city": "Cairo",
      "slug": "cairo",
      "region": "Africa",
      "currency": "EGP",
      "utc": 2,
      "languages": "Arabic, English",
      "industries": [
        "real estate",
        "technology",
        "retail"
      ],
      "areas": [
        "New Cairo",
        "Zamalek"
      ],
      "note": "Cairo has one of the fastest-growing startup ecosystems in the region, with large Arabic-speaking audiences online.",
      "wave": 2
    },
    {
      "country": "Nigeria",
      "countrySlug": "nigeria",
      "cc": "NG",
      "city": "Lagos",
      "slug": "lagos",
      "region": "Africa",
      "currency": "NGN",
      "utc": 1,
      "languages": "English",
      "industries": [
        "fintech",
        "e-commerce",
        "media"
      ],
      "areas": [
        "Victoria Island",
        "Lekki"
      ],
      "note": "Lagos is Africa's leading fintech hub, with mobile-first customers and rapid digital adoption.",
      "wave": 2
    },
    {
      "country": "South Africa",
      "countrySlug": "south-africa",
      "cc": "ZA",
      "city": "Johannesburg",
      "slug": "johannesburg",
      "region": "Africa",
      "currency": "ZAR",
      "utc": 2,
      "languages": "English",
      "industries": [
        "financial services",
        "mining",
        "retail"
      ],
      "areas": [
        "Sandton",
        "Rosebank"
      ],
      "note": "Johannesburg is the business heart of Africa's most developed economy, with established enterprises modernising systems.",
      "wave": 2
    },
    {
      "country": "Kenya",
      "countrySlug": "kenya",
      "cc": "KE",
      "city": "Nairobi",
      "slug": "nairobi",
      "region": "Africa",
      "currency": "KES",
      "utc": 3,
      "languages": "English, Swahili",
      "industries": [
        "fintech",
        "agritech",
        "logistics"
      ],
      "areas": [
        "Westlands",
        "Upper Hill"
      ],
      "note": "Nairobi's Silicon Savannah leads East African tech, with mobile money and WhatsApp central to business communication.",
      "wave": 2
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "Seattle",
      "slug": "seattle",
      "region": "North America",
      "currency": "USD",
      "utc": -8,
      "languages": "English",
      "industries": [
        "cloud computing",
        "e-commerce",
        "aerospace"
      ],
      "areas": [
        "South Lake Union",
        "Bellevue"
      ],
      "note": "Seattle is home to cloud and e-commerce giants, so local buyers expect technically strong, scalable solutions.",
      "wave": 2
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "Dallas",
      "slug": "dallas",
      "region": "North America",
      "currency": "USD",
      "utc": -6,
      "languages": "English",
      "industries": [
        "financial services",
        "real estate",
        "telecommunications"
      ],
      "areas": [
        "Uptown",
        "Las Colinas"
      ],
      "note": "Dallas–Fort Worth is one of the fastest-growing US metros, with many companies relocating headquarters to the region.",
      "wave": 2
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "Houston",
      "slug": "houston",
      "region": "North America",
      "currency": "USD",
      "utc": -6,
      "languages": "English",
      "industries": [
        "energy",
        "healthcare",
        "logistics"
      ],
      "areas": [
        "Energy Corridor",
        "Texas Medical Center"
      ],
      "note": "Houston's energy and healthcare sectors run complex operations where automation and data systems drive efficiency.",
      "wave": 2
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "Atlanta",
      "slug": "atlanta",
      "region": "North America",
      "currency": "USD",
      "utc": -5,
      "languages": "English",
      "industries": [
        "logistics",
        "fintech",
        "media"
      ],
      "areas": [
        "Midtown",
        "Buckhead"
      ],
      "note": "Atlanta is a logistics and fintech hub with a large, diverse consumer market.",
      "wave": 2
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "Washington DC",
      "slug": "washington-dc",
      "region": "North America",
      "currency": "USD",
      "utc": -5,
      "languages": "English",
      "industries": [
        "government contracting",
        "associations",
        "professional services"
      ],
      "areas": [
        "Downtown DC",
        "Arlington"
      ],
      "note": "Washington DC organisations need AI that meets strict security, compliance and procurement expectations.",
      "wave": 2
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "Las Vegas",
      "slug": "las-vegas",
      "region": "North America",
      "currency": "USD",
      "utc": -8,
      "languages": "English",
      "industries": [
        "hospitality",
        "entertainment",
        "real estate"
      ],
      "areas": [
        "The Strip",
        "Summerlin"
      ],
      "note": "Las Vegas hospitality and entertainment brands compete on guest experience, where AI chat and automation make a visible difference.",
      "wave": 3
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "Denver",
      "slug": "denver",
      "region": "North America",
      "currency": "USD",
      "utc": -7,
      "languages": "English",
      "industries": [
        "technology",
        "outdoor brands",
        "real estate"
      ],
      "areas": [
        "LoDo",
        "Denver Tech Center"
      ],
      "note": "Denver has a growing tech scene and strong consumer brands that rely on efficient, data-driven growth.",
      "wave": 3
    },
    {
      "country": "Canada",
      "countrySlug": "canada",
      "cc": "CA",
      "city": "Montreal",
      "slug": "montreal",
      "region": "North America",
      "currency": "CAD",
      "utc": -5,
      "languages": "French, English",
      "industries": [
        "AI research",
        "gaming",
        "aerospace"
      ],
      "areas": [
        "Downtown Montreal",
        "Mile End"
      ],
      "note": "Montreal is a global AI research centre, with bilingual French and English markets.",
      "wave": 2
    },
    {
      "country": "Canada",
      "countrySlug": "canada",
      "cc": "CA",
      "city": "Calgary",
      "slug": "calgary",
      "region": "North America",
      "currency": "CAD",
      "utc": -7,
      "languages": "English",
      "industries": [
        "energy",
        "agriculture",
        "technology"
      ],
      "areas": [
        "Beltline",
        "Downtown Calgary"
      ],
      "note": "Calgary businesses are diversifying beyond energy, investing in technology and operational efficiency.",
      "wave": 3
    },
    {
      "country": "Mexico",
      "countrySlug": "mexico",
      "cc": "MX",
      "city": "Mexico City",
      "slug": "mexico-city",
      "region": "Latin America",
      "currency": "MXN",
      "utc": -6,
      "languages": "Spanish, English",
      "industries": [
        "financial services",
        "retail",
        "manufacturing"
      ],
      "areas": [
        "Polanco",
        "Santa Fe"
      ],
      "note": "Mexico City is Latin America's largest business market, with fast-growing e-commerce and fintech sectors.",
      "wave": 3
    },
    {
      "country": "Brazil",
      "countrySlug": "brazil",
      "cc": "BR",
      "city": "São Paulo",
      "slug": "sao-paulo",
      "region": "Latin America",
      "currency": "BRL",
      "utc": -3,
      "languages": "Portuguese, English",
      "industries": [
        "financial services",
        "retail",
        "agribusiness"
      ],
      "areas": [
        "Avenida Paulista",
        "Faria Lima"
      ],
      "note": "São Paulo is the economic engine of Latin America, with a huge, highly digital consumer base.",
      "wave": 3
    },
    {
      "country": "Argentina",
      "countrySlug": "argentina",
      "cc": "AR",
      "city": "Buenos Aires",
      "slug": "buenos-aires",
      "region": "Latin America",
      "currency": "ARS",
      "utc": -3,
      "languages": "Spanish, English",
      "industries": [
        "technology",
        "agribusiness",
        "creative services"
      ],
      "areas": [
        "Puerto Madero",
        "Palermo"
      ],
      "note": "Buenos Aires has a strong tech talent pool and companies selling across Latin America.",
      "wave": 3
    },
    {
      "country": "Colombia",
      "countrySlug": "colombia",
      "cc": "CO",
      "city": "Bogotá",
      "slug": "bogota",
      "region": "Latin America",
      "currency": "COP",
      "utc": -5,
      "languages": "Spanish, English",
      "industries": [
        "financial services",
        "BPO",
        "retail"
      ],
      "areas": [
        "Chapinero",
        "Usaquén"
      ],
      "note": "Bogotá's growing services and fintech sectors are adopting automation quickly.",
      "wave": 3
    },
    {
      "country": "Chile",
      "countrySlug": "chile",
      "cc": "CL",
      "city": "Santiago",
      "slug": "santiago",
      "region": "Latin America",
      "currency": "CLP",
      "utc": -4,
      "languages": "Spanish, English",
      "industries": [
        "mining",
        "financial services",
        "retail"
      ],
      "areas": [
        "Las Condes",
        "Providencia"
      ],
      "note": "Santiago is one of Latin America's most stable business hubs, with strong digital adoption.",
      "wave": 3
    },
    {
      "country": "United Kingdom",
      "countrySlug": "united-kingdom",
      "cc": "GB",
      "city": "Birmingham",
      "slug": "birmingham",
      "region": "Europe",
      "currency": "GBP",
      "utc": 0,
      "languages": "English",
      "industries": [
        "manufacturing",
        "professional services",
        "retail"
      ],
      "areas": [
        "Colmore Row",
        "Jewellery Quarter"
      ],
      "note": "Birmingham combines manufacturing heritage with a growing professional services sector.",
      "wave": 3
    },
    {
      "country": "United Kingdom",
      "countrySlug": "united-kingdom",
      "cc": "GB",
      "city": "Edinburgh",
      "slug": "edinburgh",
      "region": "Europe",
      "currency": "GBP",
      "utc": 0,
      "languages": "English",
      "industries": [
        "financial services",
        "tourism",
        "technology"
      ],
      "areas": [
        "New Town",
        "Leith"
      ],
      "note": "Edinburgh is a major UK financial centre with a fast-growing tech community.",
      "wave": 3
    },
    {
      "country": "Germany",
      "countrySlug": "germany",
      "cc": "DE",
      "city": "Munich",
      "slug": "munich",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "German, English",
      "industries": [
        "automotive",
        "insurance",
        "technology"
      ],
      "areas": [
        "Maxvorstadt",
        "Schwabing"
      ],
      "note": "Munich's automotive and insurance leaders invest heavily in AI, with high standards for quality and data protection.",
      "wave": 2
    },
    {
      "country": "Germany",
      "countrySlug": "germany",
      "cc": "DE",
      "city": "Frankfurt",
      "slug": "frankfurt",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "German, English",
      "industries": [
        "banking",
        "fintech",
        "logistics"
      ],
      "areas": [
        "Bankenviertel",
        "Westend"
      ],
      "note": "Frankfurt is continental Europe's banking capital, where compliance shapes every AI and data project.",
      "wave": 2
    },
    {
      "country": "Germany",
      "countrySlug": "germany",
      "cc": "DE",
      "city": "Hamburg",
      "slug": "hamburg",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "German, English",
      "industries": [
        "logistics",
        "media",
        "e-commerce"
      ],
      "areas": [
        "HafenCity",
        "St. Pauli"
      ],
      "note": "Hamburg's port, media and e-commerce businesses benefit strongly from automation and data systems.",
      "wave": 3
    },
    {
      "country": "Belgium",
      "countrySlug": "belgium",
      "cc": "BE",
      "city": "Brussels",
      "slug": "brussels",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "French, Dutch, English",
      "industries": [
        "public affairs",
        "professional services",
        "technology"
      ],
      "areas": [
        "European Quarter",
        "Louise"
      ],
      "note": "Brussels hosts EU institutions and international organisations, making multilingual, compliant AI essential.",
      "wave": 3
    },
    {
      "country": "Portugal",
      "countrySlug": "portugal",
      "cc": "PT",
      "city": "Lisbon",
      "slug": "lisbon",
      "region": "Europe",
      "currency": "EUR",
      "utc": 0,
      "languages": "Portuguese, English",
      "industries": [
        "technology",
        "tourism",
        "startups"
      ],
      "areas": [
        "Parque das Nações",
        "Chiado"
      ],
      "note": "Lisbon has become a magnet for startups and remote-first companies across Europe.",
      "wave": 2
    },
    {
      "country": "Spain",
      "countrySlug": "spain",
      "cc": "ES",
      "city": "Barcelona",
      "slug": "barcelona",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "Spanish, Catalan, English",
      "industries": [
        "tourism",
        "technology",
        "fashion"
      ],
      "areas": [
        "22@",
        "Eixample"
      ],
      "note": "Barcelona's tech and tourism sectors compete internationally on digital experience.",
      "wave": 2
    },
    {
      "country": "Austria",
      "countrySlug": "austria",
      "cc": "AT",
      "city": "Vienna",
      "slug": "vienna",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "German, English",
      "industries": [
        "professional services",
        "tourism",
        "technology"
      ],
      "areas": [
        "Innere Stadt",
        "Donau City"
      ],
      "note": "Vienna is a gateway to Central and Eastern Europe for many international companies.",
      "wave": 3
    },
    {
      "country": "Denmark",
      "countrySlug": "denmark",
      "cc": "DK",
      "city": "Copenhagen",
      "slug": "copenhagen",
      "region": "Europe",
      "currency": "DKK",
      "utc": 1,
      "languages": "Danish, English",
      "industries": [
        "life sciences",
        "shipping",
        "design"
      ],
      "areas": [
        "Indre By",
        "Ørestad"
      ],
      "note": "Copenhagen businesses are highly digital and expect thoughtful, well-designed solutions.",
      "wave": 3
    },
    {
      "country": "Norway",
      "countrySlug": "norway",
      "cc": "NO",
      "city": "Oslo",
      "slug": "oslo",
      "region": "Europe",
      "currency": "NOK",
      "utc": 1,
      "languages": "Norwegian, English",
      "industries": [
        "energy",
        "shipping",
        "seafood"
      ],
      "areas": [
        "Bjørvika",
        "Aker Brygge"
      ],
      "note": "Oslo companies face high labour costs, making automation and AI particularly valuable.",
      "wave": 3
    },
    {
      "country": "Finland",
      "countrySlug": "finland",
      "cc": "FI",
      "city": "Helsinki",
      "slug": "helsinki",
      "region": "Europe",
      "currency": "EUR",
      "utc": 2,
      "languages": "Finnish, English",
      "industries": [
        "technology",
        "gaming",
        "clean tech"
      ],
      "areas": [
        "Kamppi",
        "Ruoholahti"
      ],
      "note": "Helsinki is a leading European tech hub known for gaming and engineering talent.",
      "wave": 3
    },
    {
      "country": "Poland",
      "countrySlug": "poland",
      "cc": "PL",
      "city": "Warsaw",
      "slug": "warsaw",
      "region": "Europe",
      "currency": "PLN",
      "utc": 1,
      "languages": "Polish, English",
      "industries": [
        "financial services",
        "IT services",
        "e-commerce"
      ],
      "areas": [
        "Mokotów",
        "Wola"
      ],
      "note": "Warsaw is Central Europe's fastest-growing business centre, with a large shared-services sector.",
      "wave": 3
    },
    {
      "country": "Czech Republic",
      "countrySlug": "czech-republic",
      "cc": "CZ",
      "city": "Prague",
      "slug": "prague",
      "region": "Europe",
      "currency": "CZK",
      "utc": 1,
      "languages": "Czech, English",
      "industries": [
        "technology",
        "manufacturing",
        "tourism"
      ],
      "areas": [
        "Karlín",
        "Nové Město"
      ],
      "note": "Prague combines a strong engineering base with a growing startup scene.",
      "wave": 3
    },
    {
      "country": "Türkiye",
      "countrySlug": "turkiye",
      "cc": "TR",
      "city": "Istanbul",
      "slug": "istanbul",
      "region": "Europe",
      "currency": "TRY",
      "utc": 3,
      "languages": "Turkish, English",
      "industries": [
        "textiles",
        "e-commerce",
        "logistics"
      ],
      "areas": [
        "Levent",
        "Maslak"
      ],
      "note": "Istanbul bridges Europe and Asia, with a large, highly active e-commerce market.",
      "wave": 2
    },
    {
      "country": "Greece",
      "countrySlug": "greece",
      "cc": "GR",
      "city": "Athens",
      "slug": "athens",
      "region": "Europe",
      "currency": "EUR",
      "utc": 2,
      "languages": "Greek, English",
      "industries": [
        "tourism",
        "shipping",
        "technology"
      ],
      "areas": [
        "Kifisia",
        "Syntagma"
      ],
      "note": "Athens tourism and shipping businesses are investing in digital channels and automation.",
      "wave": 3
    },
    {
      "country": "Jordan",
      "countrySlug": "jordan",
      "cc": "JO",
      "city": "Amman",
      "slug": "amman",
      "region": "Middle East",
      "currency": "JOD",
      "utc": 3,
      "languages": "Arabic, English",
      "industries": [
        "technology",
        "healthcare",
        "education"
      ],
      "areas": [
        "Abdali",
        "Shmeisani"
      ],
      "note": "Amman is a regional tech talent hub serving clients across the Middle East.",
      "wave": 3
    },
    {
      "country": "Lebanon",
      "countrySlug": "lebanon",
      "cc": "LB",
      "city": "Beirut",
      "slug": "beirut",
      "region": "Middle East",
      "currency": "LBP",
      "utc": 2,
      "languages": "Arabic, French, English",
      "industries": [
        "banking",
        "hospitality",
        "media"
      ],
      "areas": [
        "Downtown Beirut",
        "Achrafieh"
      ],
      "note": "Beirut businesses serve regional and diaspora markets with strong creative and media talent.",
      "wave": 3
    },
    {
      "country": "United Arab Emirates",
      "countrySlug": "united-arab-emirates",
      "cc": "AE",
      "city": "Sharjah",
      "slug": "sharjah",
      "region": "Middle East",
      "currency": "AED",
      "utc": 4,
      "languages": "English, Arabic",
      "industries": [
        "manufacturing",
        "trade",
        "education"
      ],
      "areas": [
        "Al Majaz",
        "Muwaileh"
      ],
      "note": "Sharjah's industrial and trading businesses are modernising operations close to Dubai.",
      "wave": 1
    },
    {
      "country": "Saudi Arabia",
      "countrySlug": "saudi-arabia",
      "cc": "SA",
      "city": "Dammam",
      "slug": "dammam",
      "region": "Middle East",
      "currency": "SAR",
      "utc": 3,
      "languages": "Arabic, English",
      "industries": [
        "energy",
        "petrochemicals",
        "logistics"
      ],
      "areas": [
        "Al Shatea",
        "Khobar"
      ],
      "note": "The Eastern Province's industrial base is investing in digital transformation under Vision 2030.",
      "wave": 1
    },
    {
      "country": "Pakistan",
      "countrySlug": "pakistan",
      "cc": "PK",
      "city": "Karachi",
      "slug": "karachi",
      "region": "Asia",
      "currency": "PKR",
      "utc": 5,
      "languages": "Urdu, English",
      "industries": [
        "textiles",
        "financial services",
        "e-commerce"
      ],
      "areas": [
        "Clifton",
        "Shahrah-e-Faisal"
      ],
      "note": "Karachi is Pakistan's commercial capital with a fast-growing digital economy.",
      "wave": 2
    },
    {
      "country": "Pakistan",
      "countrySlug": "pakistan",
      "cc": "PK",
      "city": "Lahore",
      "slug": "lahore",
      "region": "Asia",
      "currency": "PKR",
      "utc": 5,
      "languages": "Urdu, English",
      "industries": [
        "technology",
        "textiles",
        "education"
      ],
      "areas": [
        "Gulberg",
        "DHA"
      ],
      "note": "Lahore has a strong software services sector and growing startup ecosystem.",
      "wave": 2
    },
    {
      "country": "Bangladesh",
      "countrySlug": "bangladesh",
      "cc": "BD",
      "city": "Dhaka",
      "slug": "dhaka",
      "region": "Asia",
      "currency": "BDT",
      "utc": 6,
      "languages": "Bengali, English",
      "industries": [
        "garments",
        "telecommunications",
        "fintech"
      ],
      "areas": [
        "Gulshan",
        "Banani"
      ],
      "note": "Dhaka's garment and fintech sectors are scaling quickly with mobile-first customers.",
      "wave": 3
    },
    {
      "country": "Sri Lanka",
      "countrySlug": "sri-lanka",
      "cc": "LK",
      "city": "Colombo",
      "slug": "colombo",
      "region": "Asia",
      "currency": "LKR",
      "utc": 5.5,
      "languages": "Sinhala, Tamil, English",
      "industries": [
        "IT services",
        "tourism",
        "apparel"
      ],
      "areas": [
        "Colombo 3",
        "Colombo 7"
      ],
      "note": "Colombo has a strong IT outsourcing sector serving global clients.",
      "wave": 3
    },
    {
      "country": "India",
      "countrySlug": "india",
      "cc": "IN",
      "city": "Kolkata",
      "slug": "kolkata",
      "region": "Asia",
      "currency": "INR",
      "utc": 5.5,
      "languages": "English, Bengali",
      "industries": [
        "manufacturing",
        "IT services",
        "retail"
      ],
      "areas": [
        "Salt Lake",
        "Park Street"
      ],
      "note": "Kolkata is eastern India's business hub, with traditional industries going digital.",
      "wave": 2
    },
    {
      "country": "India",
      "countrySlug": "india",
      "cc": "IN",
      "city": "Ahmedabad",
      "slug": "ahmedabad",
      "region": "Asia",
      "currency": "INR",
      "utc": 5.5,
      "languages": "English, Gujarati",
      "industries": [
        "textiles",
        "pharma",
        "trading"
      ],
      "areas": [
        "SG Highway",
        "GIFT City"
      ],
      "note": "Ahmedabad's entrepreneurial trading and manufacturing businesses benefit directly from ERP and automation.",
      "wave": 2
    },
    {
      "country": "India",
      "countrySlug": "india",
      "cc": "IN",
      "city": "Kochi",
      "slug": "kochi",
      "region": "Asia",
      "currency": "INR",
      "utc": 5.5,
      "languages": "English, Malayalam",
      "industries": [
        "IT services",
        "tourism",
        "spices and trade"
      ],
      "areas": [
        "Infopark",
        "MG Road"
      ],
      "note": "Kochi has a growing IT sector and strong links with Gulf markets through the Kerala diaspora.",
      "wave": 1
    },
    {
      "country": "India",
      "countrySlug": "india",
      "cc": "IN",
      "city": "Jaipur",
      "slug": "jaipur",
      "region": "Asia",
      "currency": "INR",
      "utc": 5.5,
      "languages": "English, Hindi",
      "industries": [
        "tourism",
        "handicrafts",
        "e-commerce"
      ],
      "areas": [
        "C-Scheme",
        "Malviya Nagar"
      ],
      "note": "Jaipur's tourism and handicraft businesses increasingly sell online to global customers.",
      "wave": 3
    },
    {
      "country": "India",
      "countrySlug": "india",
      "cc": "IN",
      "city": "Chandigarh",
      "slug": "chandigarh",
      "region": "Asia",
      "currency": "INR",
      "utc": 5.5,
      "languages": "English, Hindi, Punjabi",
      "industries": [
        "IT services",
        "education",
        "healthcare"
      ],
      "areas": [
        "Sector 17",
        "IT Park"
      ],
      "note": "Chandigarh tricity has a growing IT and education sector serving North India.",
      "wave": 3
    },
    {
      "country": "Malaysia",
      "countrySlug": "malaysia",
      "cc": "MY",
      "city": "Kuala Lumpur",
      "slug": "kuala-lumpur",
      "region": "Asia",
      "currency": "MYR",
      "utc": 8,
      "languages": "Malay, English",
      "industries": [
        "financial services",
        "oil and gas",
        "e-commerce"
      ],
      "areas": [
        "KLCC",
        "Bangsar"
      ],
      "note": "Kuala Lumpur is a regional hub for Islamic finance and Southeast Asian e-commerce.",
      "wave": 2
    },
    {
      "country": "Thailand",
      "countrySlug": "thailand",
      "cc": "TH",
      "city": "Bangkok",
      "slug": "bangkok",
      "region": "Asia",
      "currency": "THB",
      "utc": 7,
      "languages": "Thai, English",
      "industries": [
        "tourism",
        "manufacturing",
        "retail"
      ],
      "areas": [
        "Sukhumvit",
        "Silom"
      ],
      "note": "Bangkok businesses rely heavily on social commerce and chat-based customer service.",
      "wave": 2
    },
    {
      "country": "Indonesia",
      "countrySlug": "indonesia",
      "cc": "ID",
      "city": "Jakarta",
      "slug": "jakarta",
      "region": "Asia",
      "currency": "IDR",
      "utc": 7,
      "languages": "Indonesian, English",
      "industries": [
        "e-commerce",
        "fintech",
        "consumer goods"
      ],
      "areas": [
        "SCBD",
        "Kuningan"
      ],
      "note": "Jakarta is Southeast Asia's largest digital economy, with WhatsApp central to customer communication.",
      "wave": 2
    },
    {
      "country": "Vietnam",
      "countrySlug": "vietnam",
      "cc": "VN",
      "city": "Ho Chi Minh City",
      "slug": "ho-chi-minh-city",
      "region": "Asia",
      "currency": "VND",
      "utc": 7,
      "languages": "Vietnamese, English",
      "industries": [
        "manufacturing",
        "technology",
        "retail"
      ],
      "areas": [
        "District 1",
        "Thu Duc"
      ],
      "note": "Ho Chi Minh City is one of Asia's fastest-growing business markets with a young, digital population.",
      "wave": 3
    },
    {
      "country": "Philippines",
      "countrySlug": "philippines",
      "cc": "PH",
      "city": "Manila",
      "slug": "manila",
      "region": "Asia",
      "currency": "PHP",
      "utc": 8,
      "languages": "Filipino, English",
      "industries": [
        "BPO",
        "real estate",
        "retail"
      ],
      "areas": [
        "Makati",
        "BGC"
      ],
      "note": "Manila's BPO and service sectors are adopting AI to improve customer experience at scale.",
      "wave": 3
    },
    {
      "country": "South Korea",
      "countrySlug": "south-korea",
      "cc": "KR",
      "city": "Seoul",
      "slug": "seoul",
      "region": "Asia",
      "currency": "KRW",
      "utc": 9,
      "languages": "Korean, English",
      "industries": [
        "technology",
        "entertainment",
        "beauty"
      ],
      "areas": [
        "Gangnam",
        "Yeouido"
      ],
      "note": "Seoul is one of the world's most connected cities, with fast-moving consumer and tech brands.",
      "wave": 3
    },
    {
      "country": "China",
      "countrySlug": "china",
      "cc": "CN",
      "city": "Shanghai",
      "slug": "shanghai",
      "region": "Asia",
      "currency": "CNY",
      "utc": 8,
      "languages": "Mandarin, English",
      "industries": [
        "financial services",
        "manufacturing",
        "retail"
      ],
      "areas": [
        "Lujiazui",
        "Jing'an"
      ],
      "note": "Shanghai is mainland China's business capital, with international companies serving both local and global markets.",
      "wave": 3
    },
    {
      "country": "Taiwan",
      "countrySlug": "taiwan",
      "cc": "TW",
      "city": "Taipei",
      "slug": "taipei",
      "region": "Asia",
      "currency": "TWD",
      "utc": 8,
      "languages": "Mandarin, English",
      "industries": [
        "semiconductors",
        "electronics",
        "e-commerce"
      ],
      "areas": [
        "Xinyi",
        "Neihu"
      ],
      "note": "Taipei's technology manufacturers are investing in AI-driven operations and global marketing.",
      "wave": 3
    },
    {
      "country": "Australia",
      "countrySlug": "australia",
      "cc": "AU",
      "city": "Brisbane",
      "slug": "brisbane",
      "region": "Oceania",
      "currency": "AUD",
      "utc": 10,
      "languages": "English",
      "industries": [
        "construction",
        "tourism",
        "mining services"
      ],
      "areas": [
        "Fortitude Valley",
        "South Bank"
      ],
      "note": "Brisbane is growing fast ahead of the 2032 Olympics, with strong demand across construction and services.",
      "wave": 3
    },
    {
      "country": "Australia",
      "countrySlug": "australia",
      "cc": "AU",
      "city": "Perth",
      "slug": "perth",
      "region": "Oceania",
      "currency": "AUD",
      "utc": 8,
      "languages": "English",
      "industries": [
        "mining",
        "energy",
        "agriculture"
      ],
      "areas": [
        "CBD",
        "West Perth"
      ],
      "note": "Perth shares a time zone with Singapore and is the base for Australia's resources sector.",
      "wave": 3
    },
    {
      "country": "New Zealand",
      "countrySlug": "new-zealand",
      "cc": "NZ",
      "city": "Auckland",
      "slug": "auckland",
      "region": "Oceania",
      "currency": "NZD",
      "utc": 12,
      "languages": "English",
      "industries": [
        "agritech",
        "tourism",
        "technology"
      ],
      "areas": [
        "CBD",
        "Ponsonby"
      ],
      "note": "Auckland businesses sell globally from a small home market, making efficient digital growth essential.",
      "wave": 2
    },
    {
      "country": "Morocco",
      "countrySlug": "morocco",
      "cc": "MA",
      "city": "Casablanca",
      "slug": "casablanca",
      "region": "Africa",
      "currency": "MAD",
      "utc": 1,
      "languages": "Arabic, French, English",
      "industries": [
        "financial services",
        "manufacturing",
        "logistics"
      ],
      "areas": [
        "Casablanca Finance City",
        "Maarif"
      ],
      "note": "Casablanca is North Africa's financial hub and a gateway to francophone African markets.",
      "wave": 3
    },
    {
      "country": "Ghana",
      "countrySlug": "ghana",
      "cc": "GH",
      "city": "Accra",
      "slug": "accra",
      "region": "Africa",
      "currency": "GHS",
      "utc": 0,
      "languages": "English",
      "industries": [
        "fintech",
        "cocoa and trade",
        "technology"
      ],
      "areas": [
        "Airport City",
        "Osu"
      ],
      "note": "Accra is a fast-growing West African tech and fintech hub.",
      "wave": 3
    },
    {
      "country": "South Africa",
      "countrySlug": "south-africa",
      "cc": "ZA",
      "city": "Cape Town",
      "slug": "cape-town",
      "region": "Africa",
      "currency": "ZAR",
      "utc": 2,
      "languages": "English, Afrikaans",
      "industries": [
        "technology",
        "tourism",
        "financial services"
      ],
      "areas": [
        "Foreshore",
        "Woodstock"
      ],
      "note": "Cape Town is South Africa's startup capital, with a strong tech and creative community.",
      "wave": 2
    },
    {
      "country": "Rwanda",
      "countrySlug": "rwanda",
      "cc": "RW",
      "city": "Kigali",
      "slug": "kigali",
      "region": "Africa",
      "currency": "RWF",
      "utc": 2,
      "languages": "English, French, Kinyarwanda",
      "industries": [
        "technology",
        "tourism",
        "financial services"
      ],
      "areas": [
        "Kigali Heights",
        "Kimihurura"
      ],
      "note": "Kigali is positioning itself as a regional innovation and conference hub.",
      "wave": 3
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "Philadelphia",
      "slug": "philadelphia",
      "region": "North America",
      "currency": "USD",
      "utc": -5,
      "languages": "English",
      "industries": [
        "healthcare",
        "education",
        "financial services"
      ],
      "areas": [
        "Center City",
        "University City"
      ],
      "note": "Philadelphia combines major health systems and universities with a broad base of mid-sized businesses.",
      "wave": 3
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "Phoenix",
      "slug": "phoenix",
      "region": "North America",
      "currency": "USD",
      "utc": -7,
      "languages": "English",
      "industries": [
        "semiconductors",
        "real estate",
        "healthcare"
      ],
      "areas": [
        "Downtown Phoenix",
        "Scottsdale"
      ],
      "note": "Phoenix is one of the fastest-growing US metros, attracting manufacturing and tech investment.",
      "wave": 3
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "San Diego",
      "slug": "san-diego",
      "region": "North America",
      "currency": "USD",
      "utc": -8,
      "languages": "English",
      "industries": [
        "biotech",
        "defence",
        "tourism"
      ],
      "areas": [
        "Downtown San Diego",
        "La Jolla"
      ],
      "note": "San Diego's biotech and defence sectors need secure, compliant data and AI systems.",
      "wave": 3
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "San Jose",
      "slug": "san-jose",
      "region": "North America",
      "currency": "USD",
      "utc": -8,
      "languages": "English",
      "industries": [
        "technology",
        "semiconductors",
        "SaaS"
      ],
      "areas": [
        "Downtown San Jose",
        "North San Jose"
      ],
      "note": "San Jose sits at the heart of Silicon Valley, where AI-native competitors raise the bar for every business.",
      "wave": 3
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "Orlando",
      "slug": "orlando",
      "region": "North America",
      "currency": "USD",
      "utc": -5,
      "languages": "English",
      "industries": [
        "tourism",
        "simulation technology",
        "real estate"
      ],
      "areas": [
        "Downtown Orlando",
        "Lake Nona"
      ],
      "note": "Orlando's tourism economy competes on guest experience and fast, automated service.",
      "wave": 3
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "Tampa",
      "slug": "tampa",
      "region": "North America",
      "currency": "USD",
      "utc": -5,
      "languages": "English",
      "industries": [
        "financial services",
        "healthcare",
        "real estate"
      ],
      "areas": [
        "Westshore",
        "Downtown Tampa"
      ],
      "note": "Tampa Bay is attracting relocating companies and professionals, fuelling growth in services and real estate.",
      "wave": 3
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "Nashville",
      "slug": "nashville",
      "region": "North America",
      "currency": "USD",
      "utc": -6,
      "languages": "English",
      "industries": [
        "healthcare",
        "music and entertainment",
        "hospitality"
      ],
      "areas": [
        "The Gulch",
        "Midtown"
      ],
      "note": "Nashville is a national healthcare management hub with a booming hospitality scene.",
      "wave": 3
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "Charlotte",
      "slug": "charlotte",
      "region": "North America",
      "currency": "USD",
      "utc": -5,
      "languages": "English",
      "industries": [
        "banking",
        "fintech",
        "energy"
      ],
      "areas": [
        "Uptown",
        "SouthPark"
      ],
      "note": "Charlotte is the second-largest US banking centre, with growing fintech activity.",
      "wave": 3
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "Minneapolis",
      "slug": "minneapolis",
      "region": "North America",
      "currency": "USD",
      "utc": -6,
      "languages": "English",
      "industries": [
        "retail",
        "healthcare",
        "food manufacturing"
      ],
      "areas": [
        "Downtown Minneapolis",
        "North Loop"
      ],
      "note": "Minneapolis hosts many Fortune 500 headquarters in retail, healthcare and food.",
      "wave": 3
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "Detroit",
      "slug": "detroit",
      "region": "North America",
      "currency": "USD",
      "utc": -5,
      "languages": "English",
      "industries": [
        "automotive",
        "manufacturing",
        "mobility tech"
      ],
      "areas": [
        "Downtown Detroit",
        "Midtown"
      ],
      "note": "Detroit's automotive and mobility sectors are investing heavily in automation and AI.",
      "wave": 3
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "Portland",
      "slug": "portland",
      "region": "North America",
      "currency": "USD",
      "utc": -8,
      "languages": "English",
      "industries": [
        "apparel",
        "technology",
        "food and beverage"
      ],
      "areas": [
        "Pearl District",
        "Downtown Portland"
      ],
      "note": "Portland's consumer brands and tech firms value thoughtful, efficient growth.",
      "wave": 3
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "Salt Lake City",
      "slug": "salt-lake-city",
      "region": "North America",
      "currency": "USD",
      "utc": -7,
      "languages": "English",
      "industries": [
        "SaaS",
        "financial services",
        "outdoor brands"
      ],
      "areas": [
        "Downtown SLC",
        "Lehi"
      ],
      "note": "The Silicon Slopes around Salt Lake City are home to a fast-growing SaaS community.",
      "wave": 3
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "Raleigh",
      "slug": "raleigh",
      "region": "North America",
      "currency": "USD",
      "utc": -5,
      "languages": "English",
      "industries": [
        "technology",
        "life sciences",
        "education"
      ],
      "areas": [
        "Research Triangle Park",
        "Downtown Raleigh"
      ],
      "note": "Research Triangle Park makes Raleigh a hub for tech and life sciences.",
      "wave": 3
    },
    {
      "country": "United States",
      "countrySlug": "united-states",
      "cc": "US",
      "city": "Honolulu",
      "slug": "honolulu",
      "region": "North America",
      "currency": "USD",
      "utc": -10,
      "languages": "English",
      "industries": [
        "tourism",
        "hospitality",
        "real estate"
      ],
      "areas": [
        "Waikiki",
        "Downtown Honolulu"
      ],
      "note": "Honolulu hospitality businesses rely on fast, high-quality guest communication.",
      "wave": 3
    },
    {
      "country": "Canada",
      "countrySlug": "canada",
      "cc": "CA",
      "city": "Ottawa",
      "slug": "ottawa",
      "region": "North America",
      "currency": "CAD",
      "utc": -5,
      "languages": "English, French",
      "industries": [
        "government",
        "technology",
        "telecommunications"
      ],
      "areas": [
        "Centretown",
        "Kanata"
      ],
      "note": "Ottawa's government and tech sectors require bilingual, security-conscious solutions.",
      "wave": 3
    },
    {
      "country": "Canada",
      "countrySlug": "canada",
      "cc": "CA",
      "city": "Edmonton",
      "slug": "edmonton",
      "region": "North America",
      "currency": "CAD",
      "utc": -7,
      "languages": "English",
      "industries": [
        "energy",
        "AI research",
        "construction"
      ],
      "areas": [
        "Downtown Edmonton",
        "Whyte Avenue"
      ],
      "note": "Edmonton is a recognised AI research centre alongside its energy industry.",
      "wave": 3
    },
    {
      "country": "Mexico",
      "countrySlug": "mexico",
      "cc": "MX",
      "city": "Monterrey",
      "slug": "monterrey",
      "region": "Latin America",
      "currency": "MXN",
      "utc": -6,
      "languages": "Spanish, English",
      "industries": [
        "manufacturing",
        "steel",
        "logistics"
      ],
      "areas": [
        "San Pedro Garza García",
        "Valle Oriente"
      ],
      "note": "Monterrey is Mexico's industrial capital and a nearshoring hotspot.",
      "wave": 3
    },
    {
      "country": "Mexico",
      "countrySlug": "mexico",
      "cc": "MX",
      "city": "Guadalajara",
      "slug": "guadalajara",
      "region": "Latin America",
      "currency": "MXN",
      "utc": -6,
      "languages": "Spanish, English",
      "industries": [
        "technology",
        "electronics",
        "tequila and food"
      ],
      "areas": [
        "Zapopan",
        "Providencia"
      ],
      "note": "Guadalajara is known as Mexico's Silicon Valley.",
      "wave": 3
    },
    {
      "country": "Peru",
      "countrySlug": "peru",
      "cc": "PE",
      "city": "Lima",
      "slug": "lima",
      "region": "Latin America",
      "currency": "PEN",
      "utc": -5,
      "languages": "Spanish, English",
      "industries": [
        "mining",
        "retail",
        "financial services"
      ],
      "areas": [
        "San Isidro",
        "Miraflores"
      ],
      "note": "Lima's growing middle class is driving fast adoption of e-commerce and digital services.",
      "wave": 3
    },
    {
      "country": "Brazil",
      "countrySlug": "brazil",
      "cc": "BR",
      "city": "Rio de Janeiro",
      "slug": "rio-de-janeiro",
      "region": "Latin America",
      "currency": "BRL",
      "utc": -3,
      "languages": "Portuguese, English",
      "industries": [
        "energy",
        "tourism",
        "media"
      ],
      "areas": [
        "Centro",
        "Barra da Tijuca"
      ],
      "note": "Rio de Janeiro combines energy headquarters with tourism and media.",
      "wave": 3
    },
    {
      "country": "Panama",
      "countrySlug": "panama",
      "cc": "PA",
      "city": "Panama City",
      "slug": "panama-city",
      "region": "Latin America",
      "currency": "PAB",
      "utc": -5,
      "languages": "Spanish, English",
      "industries": [
        "logistics",
        "banking",
        "trade"
      ],
      "areas": [
        "Punta Pacífica",
        "Costa del Este"
      ],
      "note": "Panama City is a regional logistics and banking hub linked to the canal.",
      "wave": 3
    },
    {
      "country": "Costa Rica",
      "countrySlug": "costa-rica",
      "cc": "CR",
      "city": "San José",
      "slug": "san-jose",
      "region": "Latin America",
      "currency": "CRC",
      "utc": -6,
      "languages": "Spanish, English",
      "industries": [
        "shared services",
        "medical devices",
        "tourism"
      ],
      "areas": [
        "Escazú",
        "Santa Ana"
      ],
      "note": "San José hosts many multinational service centres and medical device firms.",
      "wave": 3
    },
    {
      "country": "Uruguay",
      "countrySlug": "uruguay",
      "cc": "UY",
      "city": "Montevideo",
      "slug": "montevideo",
      "region": "Latin America",
      "currency": "UYU",
      "utc": -3,
      "languages": "Spanish, English",
      "industries": [
        "software",
        "agribusiness",
        "financial services"
      ],
      "areas": [
        "Ciudad Vieja",
        "Pocitos"
      ],
      "note": "Montevideo has one of Latin America's strongest software export sectors.",
      "wave": 3
    },
    {
      "country": "Dominican Republic",
      "countrySlug": "dominican-republic",
      "cc": "DO",
      "city": "Santo Domingo",
      "slug": "santo-domingo",
      "region": "Latin America",
      "currency": "DOP",
      "utc": -4,
      "languages": "Spanish, English",
      "industries": [
        "tourism",
        "free zones",
        "retail"
      ],
      "areas": [
        "Piantini",
        "Naco"
      ],
      "note": "Santo Domingo's tourism and free-zone businesses are expanding digital channels.",
      "wave": 3
    },
    {
      "country": "United Kingdom",
      "countrySlug": "united-kingdom",
      "cc": "GB",
      "city": "Leeds",
      "slug": "leeds",
      "region": "Europe",
      "currency": "GBP",
      "utc": 0,
      "languages": "English",
      "industries": [
        "financial services",
        "digital",
        "legal"
      ],
      "areas": [
        "Leeds Dock",
        "City Centre"
      ],
      "note": "Leeds is a leading UK centre for financial and legal services outside London.",
      "wave": 3
    },
    {
      "country": "United Kingdom",
      "countrySlug": "united-kingdom",
      "cc": "GB",
      "city": "Glasgow",
      "slug": "glasgow",
      "region": "Europe",
      "currency": "GBP",
      "utc": 0,
      "languages": "English",
      "industries": [
        "engineering",
        "financial services",
        "creative industries"
      ],
      "areas": [
        "Merchant City",
        "Finnieston"
      ],
      "note": "Glasgow combines engineering heritage with a growing tech and creative scene.",
      "wave": 3
    },
    {
      "country": "United Kingdom",
      "countrySlug": "united-kingdom",
      "cc": "GB",
      "city": "Bristol",
      "slug": "bristol",
      "region": "Europe",
      "currency": "GBP",
      "utc": 0,
      "languages": "English",
      "industries": [
        "aerospace",
        "technology",
        "creative industries"
      ],
      "areas": [
        "Temple Quarter",
        "Harbourside"
      ],
      "note": "Bristol is a UK hub for aerospace and deep tech.",
      "wave": 3
    },
    {
      "country": "United Kingdom",
      "countrySlug": "united-kingdom",
      "cc": "GB",
      "city": "Liverpool",
      "slug": "liverpool",
      "region": "Europe",
      "currency": "GBP",
      "utc": 0,
      "languages": "English",
      "industries": [
        "logistics",
        "digital",
        "tourism"
      ],
      "areas": [
        "Baltic Triangle",
        "Liverpool ONE"
      ],
      "note": "Liverpool's port and digital sectors are growing fast.",
      "wave": 3
    },
    {
      "country": "United Kingdom",
      "countrySlug": "united-kingdom",
      "cc": "GB",
      "city": "Cambridge",
      "slug": "cambridge",
      "region": "Europe",
      "currency": "GBP",
      "utc": 0,
      "languages": "English",
      "industries": [
        "deep tech",
        "life sciences",
        "AI"
      ],
      "areas": [
        "Cambridge Science Park",
        "CB1"
      ],
      "note": "Cambridge is one of Europe's leading AI and life sciences clusters.",
      "wave": 3
    },
    {
      "country": "Ireland",
      "countrySlug": "ireland",
      "cc": "IE",
      "city": "Cork",
      "slug": "cork",
      "region": "Europe",
      "currency": "EUR",
      "utc": 0,
      "languages": "English",
      "industries": [
        "pharma",
        "technology",
        "food"
      ],
      "areas": [
        "Docklands",
        "City Centre"
      ],
      "note": "Cork hosts major pharma and tech employers in southern Ireland.",
      "wave": 3
    },
    {
      "country": "France",
      "countrySlug": "france",
      "cc": "FR",
      "city": "Lyon",
      "slug": "lyon",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "French, English",
      "industries": [
        "life sciences",
        "manufacturing",
        "gastronomy"
      ],
      "areas": [
        "Part-Dieu",
        "Confluence"
      ],
      "note": "Lyon is France's second business centre, strong in life sciences and industry.",
      "wave": 3
    },
    {
      "country": "France",
      "countrySlug": "france",
      "cc": "FR",
      "city": "Marseille",
      "slug": "marseille",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "French, English",
      "industries": [
        "logistics",
        "maritime",
        "tourism"
      ],
      "areas": [
        "Euroméditerranée",
        "Joliette"
      ],
      "note": "Marseille is France's leading port and a gateway to the Mediterranean.",
      "wave": 3
    },
    {
      "country": "France",
      "countrySlug": "france",
      "cc": "FR",
      "city": "Nice",
      "slug": "nice",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "French, English",
      "industries": [
        "tourism",
        "technology",
        "real estate"
      ],
      "areas": [
        "Sophia Antipolis",
        "Promenade"
      ],
      "note": "The Nice–Sophia Antipolis area combines luxury tourism with a major tech park.",
      "wave": 3
    },
    {
      "country": "Germany",
      "countrySlug": "germany",
      "cc": "DE",
      "city": "Cologne",
      "slug": "cologne",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "German, English",
      "industries": [
        "media",
        "insurance",
        "events"
      ],
      "areas": [
        "MediaPark",
        "Deutz"
      ],
      "note": "Cologne is Germany's media capital and a major trade-fair city.",
      "wave": 3
    },
    {
      "country": "Germany",
      "countrySlug": "germany",
      "cc": "DE",
      "city": "Düsseldorf",
      "slug": "dusseldorf",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "German, English",
      "industries": [
        "fashion",
        "telecommunications",
        "consulting"
      ],
      "areas": [
        "Königsallee",
        "MedienHafen"
      ],
      "note": "Düsseldorf hosts many international headquarters, including a large Japanese business community.",
      "wave": 3
    },
    {
      "country": "Germany",
      "countrySlug": "germany",
      "cc": "DE",
      "city": "Stuttgart",
      "slug": "stuttgart",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "German, English",
      "industries": [
        "automotive",
        "engineering",
        "manufacturing"
      ],
      "areas": [
        "Mitte",
        "Vaihingen"
      ],
      "note": "Stuttgart's automotive and engineering firms are leaders in industrial automation.",
      "wave": 3
    },
    {
      "country": "Netherlands",
      "countrySlug": "netherlands",
      "cc": "NL",
      "city": "Rotterdam",
      "slug": "rotterdam",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "Dutch, English",
      "industries": [
        "logistics",
        "maritime",
        "energy"
      ],
      "areas": [
        "Kop van Zuid",
        "Centrum"
      ],
      "note": "Rotterdam operates Europe's largest port, where logistics automation is a competitive necessity.",
      "wave": 3
    },
    {
      "country": "Netherlands",
      "countrySlug": "netherlands",
      "cc": "NL",
      "city": "The Hague",
      "slug": "the-hague",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "Dutch, English",
      "industries": [
        "international organisations",
        "legal",
        "security"
      ],
      "areas": [
        "Beatrixkwartier",
        "Centrum"
      ],
      "note": "The Hague hosts international courts and organisations requiring secure, compliant systems.",
      "wave": 3
    },
    {
      "country": "Netherlands",
      "countrySlug": "netherlands",
      "cc": "NL",
      "city": "Eindhoven",
      "slug": "eindhoven",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "Dutch, English",
      "industries": [
        "semiconductors",
        "design",
        "high tech"
      ],
      "areas": [
        "Strijp-S",
        "High Tech Campus"
      ],
      "note": "Eindhoven's Brainport region is a European centre for high-tech manufacturing.",
      "wave": 3
    },
    {
      "country": "Switzerland",
      "countrySlug": "switzerland",
      "cc": "CH",
      "city": "Geneva",
      "slug": "geneva",
      "region": "Europe",
      "currency": "CHF",
      "utc": 1,
      "languages": "French, English",
      "industries": [
        "international organisations",
        "private banking",
        "trading"
      ],
      "areas": [
        "Rive Droite",
        "Plainpalais"
      ],
      "note": "Geneva's private banks, traders and NGOs require discreet, secure AI solutions.",
      "wave": 2
    },
    {
      "country": "Switzerland",
      "countrySlug": "switzerland",
      "cc": "CH",
      "city": "Basel",
      "slug": "basel",
      "region": "Europe",
      "currency": "CHF",
      "utc": 1,
      "languages": "German, English",
      "industries": [
        "pharma",
        "chemicals",
        "logistics"
      ],
      "areas": [
        "Grossbasel",
        "Kleinbasel"
      ],
      "note": "Basel is a global pharma centre with strict regulatory expectations.",
      "wave": 3
    },
    {
      "country": "Luxembourg",
      "countrySlug": "luxembourg",
      "cc": "LU",
      "city": "Luxembourg City",
      "slug": "luxembourg-city",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "French, German, English",
      "industries": [
        "investment funds",
        "banking",
        "EU institutions"
      ],
      "areas": [
        "Kirchberg",
        "Cloche d'Or"
      ],
      "note": "Luxembourg is Europe's largest investment fund centre.",
      "wave": 3
    },
    {
      "country": "Italy",
      "countrySlug": "italy",
      "cc": "IT",
      "city": "Rome",
      "slug": "rome",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "Italian, English",
      "industries": [
        "tourism",
        "government",
        "fashion"
      ],
      "areas": [
        "EUR",
        "Parioli"
      ],
      "note": "Rome's tourism and service businesses are investing in digital customer experience.",
      "wave": 3
    },
    {
      "country": "Italy",
      "countrySlug": "italy",
      "cc": "IT",
      "city": "Turin",
      "slug": "turin",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "Italian, English",
      "industries": [
        "automotive",
        "aerospace",
        "food"
      ],
      "areas": [
        "Crocetta",
        "Lingotto"
      ],
      "note": "Turin's industrial base is modernising with automation and digital tools.",
      "wave": 3
    },
    {
      "country": "Spain",
      "countrySlug": "spain",
      "cc": "ES",
      "city": "Valencia",
      "slug": "valencia",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "Spanish, English",
      "industries": [
        "logistics",
        "agrifood",
        "tourism"
      ],
      "areas": [
        "Ciutat Vella",
        "Ruzafa"
      ],
      "note": "Valencia has a thriving port and a growing startup community.",
      "wave": 3
    },
    {
      "country": "Spain",
      "countrySlug": "spain",
      "cc": "ES",
      "city": "Málaga",
      "slug": "malaga",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "Spanish, English",
      "industries": [
        "technology",
        "tourism",
        "real estate"
      ],
      "areas": [
        "Málaga TechPark",
        "Centro"
      ],
      "note": "Málaga is attracting tech hubs and remote workers to the Costa del Sol.",
      "wave": 3
    },
    {
      "country": "Portugal",
      "countrySlug": "portugal",
      "cc": "PT",
      "city": "Porto",
      "slug": "porto",
      "region": "Europe",
      "currency": "EUR",
      "utc": 0,
      "languages": "Portuguese, English",
      "industries": [
        "technology",
        "textiles",
        "tourism"
      ],
      "areas": [
        "Boavista",
        "Baixa"
      ],
      "note": "Porto combines a growing tech scene with export-focused manufacturing.",
      "wave": 3
    },
    {
      "country": "Poland",
      "countrySlug": "poland",
      "cc": "PL",
      "city": "Kraków",
      "slug": "krakow",
      "region": "Europe",
      "currency": "PLN",
      "utc": 1,
      "languages": "Polish, English",
      "industries": [
        "IT services",
        "shared services",
        "tourism"
      ],
      "areas": [
        "Kazimierz",
        "Zabłocie"
      ],
      "note": "Kraków is one of Europe's largest IT and shared-services hubs.",
      "wave": 3
    },
    {
      "country": "Hungary",
      "countrySlug": "hungary",
      "cc": "HU",
      "city": "Budapest",
      "slug": "budapest",
      "region": "Europe",
      "currency": "HUF",
      "utc": 1,
      "languages": "Hungarian, English",
      "industries": [
        "automotive",
        "shared services",
        "technology"
      ],
      "areas": [
        "District V",
        "Váci Corridor"
      ],
      "note": "Budapest hosts many regional service centres and a strong startup scene.",
      "wave": 3
    },
    {
      "country": "Romania",
      "countrySlug": "romania",
      "cc": "RO",
      "city": "Bucharest",
      "slug": "bucharest",
      "region": "Europe",
      "currency": "RON",
      "utc": 2,
      "languages": "Romanian, English",
      "industries": [
        "IT services",
        "automotive",
        "retail"
      ],
      "areas": [
        "Pipera",
        "Floreasca"
      ],
      "note": "Bucharest has one of Europe's fastest-growing IT sectors.",
      "wave": 3
    },
    {
      "country": "Bulgaria",
      "countrySlug": "bulgaria",
      "cc": "BG",
      "city": "Sofia",
      "slug": "sofia",
      "region": "Europe",
      "currency": "BGN",
      "utc": 2,
      "languages": "Bulgarian, English",
      "industries": [
        "IT services",
        "outsourcing",
        "fintech"
      ],
      "areas": [
        "Business Park Sofia",
        "Lozenets"
      ],
      "note": "Sofia is a cost-effective tech hub serving clients across Europe.",
      "wave": 3
    },
    {
      "country": "Serbia",
      "countrySlug": "serbia",
      "cc": "RS",
      "city": "Belgrade",
      "slug": "belgrade",
      "region": "Europe",
      "currency": "RSD",
      "utc": 1,
      "languages": "Serbian, English",
      "industries": [
        "IT services",
        "gaming",
        "manufacturing"
      ],
      "areas": [
        "New Belgrade",
        "Vračar"
      ],
      "note": "Belgrade's software and gaming companies serve global clients.",
      "wave": 3
    },
    {
      "country": "Croatia",
      "countrySlug": "croatia",
      "cc": "HR",
      "city": "Zagreb",
      "slug": "zagreb",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "Croatian, English",
      "industries": [
        "tourism",
        "technology",
        "retail"
      ],
      "areas": [
        "Donji Grad",
        "Radnička"
      ],
      "note": "Zagreb's tech sector has produced several international success stories.",
      "wave": 3
    },
    {
      "country": "Estonia",
      "countrySlug": "estonia",
      "cc": "EE",
      "city": "Tallinn",
      "slug": "tallinn",
      "region": "Europe",
      "currency": "EUR",
      "utc": 2,
      "languages": "Estonian, English",
      "industries": [
        "technology",
        "fintech",
        "e-government"
      ],
      "areas": [
        "Ülemiste City",
        "Kalamaja"
      ],
      "note": "Tallinn is one of the world's most digital cities, home to many startups.",
      "wave": 3
    },
    {
      "country": "Latvia",
      "countrySlug": "latvia",
      "cc": "LV",
      "city": "Riga",
      "slug": "riga",
      "region": "Europe",
      "currency": "EUR",
      "utc": 2,
      "languages": "Latvian, English",
      "industries": [
        "logistics",
        "fintech",
        "IT services"
      ],
      "areas": [
        "Centrs",
        "Skanste"
      ],
      "note": "Riga is a Baltic logistics and fintech centre.",
      "wave": 3
    },
    {
      "country": "Lithuania",
      "countrySlug": "lithuania",
      "cc": "LT",
      "city": "Vilnius",
      "slug": "vilnius",
      "region": "Europe",
      "currency": "EUR",
      "utc": 2,
      "languages": "Lithuanian, English",
      "industries": [
        "fintech",
        "IT services",
        "lasers"
      ],
      "areas": [
        "Naujamiestis",
        "Šnipiškės"
      ],
      "note": "Vilnius has one of Europe's fastest-growing fintech sectors.",
      "wave": 3
    },
    {
      "country": "Cyprus",
      "countrySlug": "cyprus",
      "cc": "CY",
      "city": "Limassol",
      "slug": "limassol",
      "region": "Europe",
      "currency": "EUR",
      "utc": 2,
      "languages": "Greek, English",
      "industries": [
        "shipping",
        "fintech",
        "tourism"
      ],
      "areas": [
        "Seafront",
        "Germasogeia"
      ],
      "note": "Limassol hosts shipping, fintech and forex firms serving international markets.",
      "wave": 3
    },
    {
      "country": "Malta",
      "countrySlug": "malta",
      "cc": "MT",
      "city": "Valletta",
      "slug": "valletta",
      "region": "Europe",
      "currency": "EUR",
      "utc": 1,
      "languages": "Maltese, English",
      "industries": [
        "iGaming",
        "financial services",
        "tourism"
      ],
      "areas": [
        "Sliema",
        "St Julian's"
      ],
      "note": "Malta is a global hub for iGaming and fintech companies.",
      "wave": 3
    },
    {
      "country": "Iceland",
      "countrySlug": "iceland",
      "cc": "IS",
      "city": "Reykjavik",
      "slug": "reykjavik",
      "region": "Europe",
      "currency": "ISK",
      "utc": 0,
      "languages": "Icelandic, English",
      "industries": [
        "tourism",
        "fisheries",
        "data centres"
      ],
      "areas": [
        "Miðborg",
        "Borgartún"
      ],
      "note": "Reykjavik's tourism businesses depend on efficient, digital guest service.",
      "wave": 3
    },
    {
      "country": "Türkiye",
      "countrySlug": "turkiye",
      "cc": "TR",
      "city": "Ankara",
      "slug": "ankara",
      "region": "Europe",
      "currency": "TRY",
      "utc": 3,
      "languages": "Turkish, English",
      "industries": [
        "defence",
        "government",
        "education"
      ],
      "areas": [
        "Çankaya",
        "Söğütözü"
      ],
      "note": "Ankara's defence and public sectors are investing in digital capabilities.",
      "wave": 3
    },
    {
      "country": "Georgia",
      "countrySlug": "georgia",
      "cc": "GE",
      "city": "Tbilisi",
      "slug": "tbilisi",
      "region": "Europe",
      "currency": "GEL",
      "utc": 4,
      "languages": "Georgian, English",
      "industries": [
        "tourism",
        "logistics",
        "IT services"
      ],
      "areas": [
        "Vake",
        "Saburtalo"
      ],
      "note": "Tbilisi is attracting tech companies and remote teams, sharing Dubai's time zone.",
      "wave": 3
    },
    {
      "country": "Azerbaijan",
      "countrySlug": "azerbaijan",
      "cc": "AZ",
      "city": "Baku",
      "slug": "baku",
      "region": "Middle East",
      "currency": "AZN",
      "utc": 4,
      "languages": "Azerbaijani, English",
      "industries": [
        "energy",
        "construction",
        "tourism"
      ],
      "areas": [
        "White City",
        "Nizami"
      ],
      "note": "Baku shares Dubai's time zone and is diversifying beyond energy.",
      "wave": 3
    },
    {
      "country": "Kazakhstan",
      "countrySlug": "kazakhstan",
      "cc": "KZ",
      "city": "Almaty",
      "slug": "almaty",
      "region": "Asia",
      "currency": "KZT",
      "utc": 5,
      "languages": "Kazakh, Russian, English",
      "industries": [
        "financial services",
        "trade",
        "technology"
      ],
      "areas": [
        "Medeu",
        "Bostandyk"
      ],
      "note": "Almaty is Central Asia's financial and startup hub.",
      "wave": 3
    },
    {
      "country": "Uzbekistan",
      "countrySlug": "uzbekistan",
      "cc": "UZ",
      "city": "Tashkent",
      "slug": "tashkent",
      "region": "Asia",
      "currency": "UZS",
      "utc": 5,
      "languages": "Uzbek, Russian, English",
      "industries": [
        "textiles",
        "agriculture",
        "IT services"
      ],
      "areas": [
        "Yunusabad",
        "Mirabad"
      ],
      "note": "Tashkent is opening up rapidly, with fast-growing digital and services sectors.",
      "wave": 3
    },
    {
      "country": "Israel",
      "countrySlug": "israel",
      "cc": "IL",
      "city": "Tel Aviv",
      "slug": "tel-aviv",
      "region": "Middle East",
      "currency": "ILS",
      "utc": 2,
      "languages": "Hebrew, English",
      "industries": [
        "technology",
        "cybersecurity",
        "fintech"
      ],
      "areas": [
        "Rothschild",
        "Ramat Gan"
      ],
      "note": "Tel Aviv's startup density sets a high bar for AI and automation.",
      "wave": 3
    },
    {
      "country": "Iraq",
      "countrySlug": "iraq",
      "cc": "IQ",
      "city": "Erbil",
      "slug": "erbil",
      "region": "Middle East",
      "currency": "IQD",
      "utc": 3,
      "languages": "Kurdish, Arabic, English",
      "industries": [
        "energy",
        "construction",
        "trade"
      ],
      "areas": [
        "Gulan",
        "Ankawa"
      ],
      "note": "Erbil is a growing business gateway in northern Iraq.",
      "wave": 3
    },
    {
      "country": "Saudi Arabia",
      "countrySlug": "saudi-arabia",
      "cc": "SA",
      "city": "Mecca",
      "slug": "mecca",
      "region": "Middle East",
      "currency": "SAR",
      "utc": 3,
      "languages": "Arabic, English",
      "industries": [
        "hospitality",
        "religious tourism",
        "retail"
      ],
      "areas": [
        "Al Aziziyah",
        "Ajyad"
      ],
      "note": "Mecca's hospitality sector serves millions of visitors, making automated guest communication essential.",
      "wave": 3
    },
    {
      "country": "Saudi Arabia",
      "countrySlug": "saudi-arabia",
      "cc": "SA",
      "city": "Medina",
      "slug": "medina",
      "region": "Middle East",
      "currency": "SAR",
      "utc": 3,
      "languages": "Arabic, English",
      "industries": [
        "hospitality",
        "religious tourism",
        "retail"
      ],
      "areas": [
        "Central Area",
        "Quba"
      ],
      "note": "Medina's hotels and services handle large seasonal demand where automation helps scale.",
      "wave": 3
    },
    {
      "country": "United Arab Emirates",
      "countrySlug": "united-arab-emirates",
      "cc": "AE",
      "city": "Ajman",
      "slug": "ajman",
      "region": "Middle East",
      "currency": "AED",
      "utc": 4,
      "languages": "English, Arabic",
      "industries": [
        "trade",
        "manufacturing",
        "real estate"
      ],
      "areas": [
        "Al Nuaimiya",
        "Al Jurf"
      ],
      "note": "Ajman's SMEs and free-zone companies are digitising quickly.",
      "wave": 1
    },
    {
      "country": "United Arab Emirates",
      "countrySlug": "united-arab-emirates",
      "cc": "AE",
      "city": "Ras Al Khaimah",
      "slug": "ras-al-khaimah",
      "region": "Middle East",
      "currency": "AED",
      "utc": 4,
      "languages": "English, Arabic",
      "industries": [
        "manufacturing",
        "tourism",
        "free zones"
      ],
      "areas": [
        "Al Hamra",
        "RAKEZ"
      ],
      "note": "Ras Al Khaimah is growing as a tourism and industrial free-zone destination.",
      "wave": 1
    },
    {
      "country": "United Arab Emirates",
      "countrySlug": "united-arab-emirates",
      "cc": "AE",
      "city": "Al Ain",
      "slug": "al-ain",
      "region": "Middle East",
      "currency": "AED",
      "utc": 4,
      "languages": "English, Arabic",
      "industries": [
        "education",
        "agriculture",
        "healthcare"
      ],
      "areas": [
        "Al Jimi",
        "Al Mutawaa"
      ],
      "note": "Al Ain's education and healthcare institutions are adopting digital services.",
      "wave": 3
    },
    {
      "country": "Oman",
      "countrySlug": "oman",
      "cc": "OM",
      "city": "Salalah",
      "slug": "salalah",
      "region": "Middle East",
      "currency": "OMR",
      "utc": 4,
      "languages": "Arabic, English",
      "industries": [
        "logistics",
        "tourism",
        "fisheries"
      ],
      "areas": [
        "Salalah Free Zone",
        "Al Haffa"
      ],
      "note": "Salalah's port and tourism sectors are expanding.",
      "wave": 3
    },
    {
      "country": "Qatar",
      "countrySlug": "qatar",
      "cc": "QA",
      "city": "Al Wakrah",
      "slug": "al-wakrah",
      "region": "Middle East",
      "currency": "QAR",
      "utc": 3,
      "languages": "Arabic, English",
      "industries": [
        "logistics",
        "hospitality",
        "retail"
      ],
      "areas": [
        "Al Wakrah Souq",
        "Hamad Port"
      ],
      "note": "Al Wakrah is growing alongside Hamad Port and new developments.",
      "wave": 3
    },
    {
      "country": "India",
      "countrySlug": "india",
      "cc": "IN",
      "city": "Noida",
      "slug": "noida",
      "region": "Asia",
      "currency": "INR",
      "utc": 5.5,
      "languages": "English, Hindi",
      "industries": [
        "IT services",
        "electronics",
        "media"
      ],
      "areas": [
        "Sector 62",
        "Sector 18"
      ],
      "note": "Noida hosts many IT companies and electronics manufacturers in Delhi NCR.",
      "wave": 2
    },
    {
      "country": "India",
      "countrySlug": "india",
      "cc": "IN",
      "city": "Gurugram",
      "slug": "gurugram",
      "region": "Asia",
      "currency": "INR",
      "utc": 5.5,
      "languages": "English, Hindi",
      "industries": [
        "corporate headquarters",
        "consulting",
        "startups"
      ],
      "areas": [
        "Cyber City",
        "Golf Course Road"
      ],
      "note": "Gurugram hosts hundreds of multinational and startup headquarters.",
      "wave": 1
    },
    {
      "country": "India",
      "countrySlug": "india",
      "cc": "IN",
      "city": "Indore",
      "slug": "indore",
      "region": "Asia",
      "currency": "INR",
      "utc": 5.5,
      "languages": "English, Hindi",
      "industries": [
        "IT services",
        "education",
        "FMCG"
      ],
      "areas": [
        "Vijay Nagar",
        "Super Corridor"
      ],
      "note": "Indore is one of India's fastest-growing tier-2 business cities.",
      "wave": 3
    },
    {
      "country": "India",
      "countrySlug": "india",
      "cc": "IN",
      "city": "Lucknow",
      "slug": "lucknow",
      "region": "Asia",
      "currency": "INR",
      "utc": 5.5,
      "languages": "English, Hindi",
      "industries": [
        "government",
        "education",
        "retail"
      ],
      "areas": [
        "Gomti Nagar",
        "Hazratganj"
      ],
      "note": "Lucknow's large consumer market is moving online quickly.",
      "wave": 3
    },
    {
      "country": "India",
      "countrySlug": "india",
      "cc": "IN",
      "city": "Coimbatore",
      "slug": "coimbatore",
      "region": "Asia",
      "currency": "INR",
      "utc": 5.5,
      "languages": "English, Tamil",
      "industries": [
        "textiles",
        "engineering",
        "IT services"
      ],
      "areas": [
        "RS Puram",
        "Saravanampatti"
      ],
      "note": "Coimbatore's manufacturing businesses benefit directly from ERP and automation.",
      "wave": 3
    },
    {
      "country": "India",
      "countrySlug": "india",
      "cc": "IN",
      "city": "Thiruvananthapuram",
      "slug": "thiruvananthapuram",
      "region": "Asia",
      "currency": "INR",
      "utc": 5.5,
      "languages": "English, Malayalam",
      "industries": [
        "IT services",
        "space research",
        "tourism"
      ],
      "areas": [
        "Technopark",
        "Kowdiar"
      ],
      "note": "Thiruvananthapuram's Technopark is one of India's largest IT parks.",
      "wave": 3
    },
    {
      "country": "India",
      "countrySlug": "india",
      "cc": "IN",
      "city": "Mangalore",
      "slug": "mangalore",
      "region": "Asia",
      "currency": "INR",
      "utc": 5.5,
      "languages": "English, Kannada",
      "industries": [
        "banking",
        "education",
        "port trade"
      ],
      "areas": [
        "Hampankatta",
        "Kadri"
      ],
      "note": "Mangalore has deep banking roots and strong ties with Gulf markets.",
      "wave": 1
    },
    {
      "country": "India",
      "countrySlug": "india",
      "cc": "IN",
      "city": "Visakhapatnam",
      "slug": "visakhapatnam",
      "region": "Asia",
      "currency": "INR",
      "utc": 5.5,
      "languages": "English, Telugu",
      "industries": [
        "port and logistics",
        "steel",
        "pharma"
      ],
      "areas": [
        "Dwaraka Nagar",
        "Rushikonda"
      ],
      "note": "Visakhapatnam's port and industry are expanding fast.",
      "wave": 3
    },
    {
      "country": "India",
      "countrySlug": "india",
      "cc": "IN",
      "city": "Nagpur",
      "slug": "nagpur",
      "region": "Asia",
      "currency": "INR",
      "utc": 5.5,
      "languages": "English, Marathi",
      "industries": [
        "logistics",
        "education",
        "mining"
      ],
      "areas": [
        "Sitabuldi",
        "MIHAN"
      ],
      "note": "Nagpur is India's geographic centre and a growing logistics hub.",
      "wave": 3
    },
    {
      "country": "India",
      "countrySlug": "india",
      "cc": "IN",
      "city": "Surat",
      "slug": "surat",
      "region": "Asia",
      "currency": "INR",
      "utc": 5.5,
      "languages": "English, Gujarati",
      "industries": [
        "diamonds",
        "textiles",
        "trading"
      ],
      "areas": [
        "Adajan",
        "Vesu"
      ],
      "note": "Surat's diamond and textile traders are adopting digital sales and operations.",
      "wave": 3
    },
    {
      "country": "India",
      "countrySlug": "india",
      "cc": "IN",
      "city": "Goa",
      "slug": "goa",
      "region": "Asia",
      "currency": "INR",
      "utc": 5.5,
      "languages": "English, Konkani",
      "industries": [
        "tourism",
        "hospitality",
        "mining"
      ],
      "areas": [
        "Panaji",
        "Margao"
      ],
      "note": "Goa's hospitality businesses compete on online visibility and guest experience.",
      "wave": 3
    },
    {
      "country": "India",
      "countrySlug": "india",
      "cc": "IN",
      "city": "Bhubaneswar",
      "slug": "bhubaneswar",
      "region": "Asia",
      "currency": "INR",
      "utc": 5.5,
      "languages": "English, Odia",
      "industries": [
        "IT services",
        "education",
        "metals"
      ],
      "areas": [
        "Patia",
        "Saheed Nagar"
      ],
      "note": "Bhubaneswar is a growing IT and education centre in eastern India.",
      "wave": 3
    },
    {
      "country": "Nepal",
      "countrySlug": "nepal",
      "cc": "NP",
      "city": "Kathmandu",
      "slug": "kathmandu",
      "region": "Asia",
      "currency": "NPR",
      "utc": 5.75,
      "languages": "Nepali, English",
      "industries": [
        "tourism",
        "remittances",
        "IT services"
      ],
      "areas": [
        "Durbar Marg",
        "Baluwatar"
      ],
      "note": "Kathmandu's tourism and IT services sectors are growing online.",
      "wave": 3
    },
    {
      "country": "Maldives",
      "countrySlug": "maldives",
      "cc": "MV",
      "city": "Malé",
      "slug": "male",
      "region": "Asia",
      "currency": "MVR",
      "utc": 5,
      "languages": "Dhivehi, English",
      "industries": [
        "tourism",
        "hospitality",
        "fisheries"
      ],
      "areas": [
        "Malé City",
        "Hulhumalé"
      ],
      "note": "Maldives resorts depend on digital marketing and seamless guest communication.",
      "wave": 3
    },
    {
      "country": "Pakistan",
      "countrySlug": "pakistan",
      "cc": "PK",
      "city": "Islamabad",
      "slug": "islamabad",
      "region": "Asia",
      "currency": "PKR",
      "utc": 5,
      "languages": "Urdu, English",
      "industries": [
        "government",
        "IT services",
        "telecommunications"
      ],
      "areas": [
        "Blue Area",
        "F-7"
      ],
      "note": "Islamabad has a growing IT export sector and government institutions.",
      "wave": 3
    },
    {
      "country": "Singapore",
      "countrySlug": "singapore",
      "cc": "SG",
      "city": "Jurong",
      "slug": "jurong",
      "region": "Asia",
      "currency": "SGD",
      "utc": 8,
      "languages": "English",
      "industries": [
        "manufacturing",
        "logistics",
        "technology"
      ],
      "areas": [
        "Jurong East",
        "Jurong Innovation District"
      ],
      "note": "Jurong is Singapore's industrial and innovation district.",
      "wave": 3
    },
    {
      "country": "Malaysia",
      "countrySlug": "malaysia",
      "cc": "MY",
      "city": "Penang",
      "slug": "penang",
      "region": "Asia",
      "currency": "MYR",
      "utc": 8,
      "languages": "Malay, English",
      "industries": [
        "semiconductors",
        "electronics",
        "tourism"
      ],
      "areas": [
        "George Town",
        "Bayan Lepas"
      ],
      "note": "Penang is a major electronics and semiconductor manufacturing centre.",
      "wave": 3
    },
    {
      "country": "Thailand",
      "countrySlug": "thailand",
      "cc": "TH",
      "city": "Phuket",
      "slug": "phuket",
      "region": "Asia",
      "currency": "THB",
      "utc": 7,
      "languages": "Thai, English",
      "industries": [
        "tourism",
        "hospitality",
        "real estate"
      ],
      "areas": [
        "Patong",
        "Laguna"
      ],
      "note": "Phuket's resorts and villas compete internationally for travellers.",
      "wave": 3
    },
    {
      "country": "Vietnam",
      "countrySlug": "vietnam",
      "cc": "VN",
      "city": "Hanoi",
      "slug": "hanoi",
      "region": "Asia",
      "currency": "VND",
      "utc": 7,
      "languages": "Vietnamese, English",
      "industries": [
        "government",
        "technology",
        "manufacturing"
      ],
      "areas": [
        "Hoan Kiem",
        "Cau Giay"
      ],
      "note": "Hanoi is Vietnam's capital and a growing technology hub.",
      "wave": 3
    },
    {
      "country": "Indonesia",
      "countrySlug": "indonesia",
      "cc": "ID",
      "city": "Bali",
      "slug": "bali",
      "region": "Asia",
      "currency": "IDR",
      "utc": 8,
      "languages": "Indonesian, English",
      "industries": [
        "tourism",
        "hospitality",
        "digital nomad services"
      ],
      "areas": [
        "Canggu",
        "Seminyak"
      ],
      "note": "Bali's hospitality and creative businesses serve international visitors online.",
      "wave": 3
    },
    {
      "country": "Philippines",
      "countrySlug": "philippines",
      "cc": "PH",
      "city": "Cebu",
      "slug": "cebu",
      "region": "Asia",
      "currency": "PHP",
      "utc": 8,
      "languages": "Filipino, English",
      "industries": [
        "BPO",
        "tourism",
        "furniture"
      ],
      "areas": [
        "Cebu IT Park",
        "Cebu Business Park"
      ],
      "note": "Cebu is a leading BPO and tourism hub outside Manila.",
      "wave": 3
    },
    {
      "country": "China",
      "countrySlug": "china",
      "cc": "CN",
      "city": "Shenzhen",
      "slug": "shenzhen",
      "region": "Asia",
      "currency": "CNY",
      "utc": 8,
      "languages": "Mandarin, English",
      "industries": [
        "electronics",
        "hardware",
        "e-commerce"
      ],
      "areas": [
        "Nanshan",
        "Futian"
      ],
      "note": "Shenzhen is the world's hardware capital with fast-moving e-commerce exporters.",
      "wave": 3
    },
    {
      "country": "China",
      "countrySlug": "china",
      "cc": "CN",
      "city": "Beijing",
      "slug": "beijing",
      "region": "Asia",
      "currency": "CNY",
      "utc": 8,
      "languages": "Mandarin, English",
      "industries": [
        "technology",
        "government",
        "education"
      ],
      "areas": [
        "Chaoyang",
        "Zhongguancun"
      ],
      "note": "Beijing is a leading centre for AI research and large technology firms.",
      "wave": 3
    },
    {
      "country": "China",
      "countrySlug": "china",
      "cc": "CN",
      "city": "Guangzhou",
      "slug": "guangzhou",
      "region": "Asia",
      "currency": "CNY",
      "utc": 8,
      "languages": "Mandarin, Cantonese, English",
      "industries": [
        "trade",
        "manufacturing",
        "e-commerce"
      ],
      "areas": [
        "Tianhe",
        "Zhujiang New Town"
      ],
      "note": "Guangzhou is a global trading city and home to the Canton Fair.",
      "wave": 3
    },
    {
      "country": "Japan",
      "countrySlug": "japan",
      "cc": "JP",
      "city": "Osaka",
      "slug": "osaka",
      "region": "Asia",
      "currency": "JPY",
      "utc": 9,
      "languages": "Japanese, English",
      "industries": [
        "manufacturing",
        "retail",
        "pharma"
      ],
      "areas": [
        "Umeda",
        "Namba"
      ],
      "note": "Osaka is western Japan's commercial centre with strong manufacturing and retail.",
      "wave": 3
    },
    {
      "country": "South Korea",
      "countrySlug": "south-korea",
      "cc": "KR",
      "city": "Busan",
      "slug": "busan",
      "region": "Asia",
      "currency": "KRW",
      "utc": 9,
      "languages": "Korean, English",
      "industries": [
        "shipping",
        "logistics",
        "tourism"
      ],
      "areas": [
        "Haeundae",
        "Centum City"
      ],
      "note": "Busan operates one of the world's busiest container ports.",
      "wave": 3
    },
    {
      "country": "Australia",
      "countrySlug": "australia",
      "cc": "AU",
      "city": "Adelaide",
      "slug": "adelaide",
      "region": "Oceania",
      "currency": "AUD",
      "utc": 9.5,
      "languages": "English",
      "industries": [
        "defence",
        "space",
        "wine"
      ],
      "areas": [
        "CBD",
        "Lot Fourteen"
      ],
      "note": "Adelaide is Australia's defence and space industry hub.",
      "wave": 3
    },
    {
      "country": "Australia",
      "countrySlug": "australia",
      "cc": "AU",
      "city": "Gold Coast",
      "slug": "gold-coast",
      "region": "Oceania",
      "currency": "AUD",
      "utc": 10,
      "languages": "English",
      "industries": [
        "tourism",
        "construction",
        "education"
      ],
      "areas": [
        "Surfers Paradise",
        "Southport"
      ],
      "note": "Gold Coast's tourism and property sectors rely on strong online marketing.",
      "wave": 3
    },
    {
      "country": "Australia",
      "countrySlug": "australia",
      "cc": "AU",
      "city": "Canberra",
      "slug": "canberra",
      "region": "Oceania",
      "currency": "AUD",
      "utc": 10,
      "languages": "English",
      "industries": [
        "government",
        "defence",
        "education"
      ],
      "areas": [
        "Civic",
        "Barton"
      ],
      "note": "Canberra's public sector requires secure, compliant digital solutions.",
      "wave": 3
    },
    {
      "country": "New Zealand",
      "countrySlug": "new-zealand",
      "cc": "NZ",
      "city": "Wellington",
      "slug": "wellington",
      "region": "Oceania",
      "currency": "NZD",
      "utc": 12,
      "languages": "English",
      "industries": [
        "government",
        "film",
        "technology"
      ],
      "areas": [
        "Te Aro",
        "Thorndon"
      ],
      "note": "Wellington is New Zealand's capital and a creative tech centre.",
      "wave": 3
    },
    {
      "country": "New Zealand",
      "countrySlug": "new-zealand",
      "cc": "NZ",
      "city": "Christchurch",
      "slug": "christchurch",
      "region": "Oceania",
      "currency": "NZD",
      "utc": 12,
      "languages": "English",
      "industries": [
        "agritech",
        "aerospace",
        "tourism"
      ],
      "areas": [
        "CBD",
        "Addington"
      ],
      "note": "Christchurch is a growing agritech and aerospace hub.",
      "wave": 3
    },
    {
      "country": "Egypt",
      "countrySlug": "egypt",
      "cc": "EG",
      "city": "Alexandria",
      "slug": "alexandria",
      "region": "Africa",
      "currency": "EGP",
      "utc": 2,
      "languages": "Arabic, English",
      "industries": [
        "logistics",
        "manufacturing",
        "tourism"
      ],
      "areas": [
        "Smouha",
        "Stanley"
      ],
      "note": "Alexandria is Egypt's main port and industrial city.",
      "wave": 3
    },
    {
      "country": "Tunisia",
      "countrySlug": "tunisia",
      "cc": "TN",
      "city": "Tunis",
      "slug": "tunis",
      "region": "Africa",
      "currency": "TND",
      "utc": 1,
      "languages": "Arabic, French, English",
      "industries": [
        "IT services",
        "textiles",
        "tourism"
      ],
      "areas": [
        "Les Berges du Lac",
        "Centre Urbain Nord"
      ],
      "note": "Tunis has a strong IT outsourcing sector serving Europe.",
      "wave": 3
    },
    {
      "country": "Algeria",
      "countrySlug": "algeria",
      "cc": "DZ",
      "city": "Algiers",
      "slug": "algiers",
      "region": "Africa",
      "currency": "DZD",
      "utc": 1,
      "languages": "Arabic, French",
      "industries": [
        "energy",
        "construction",
        "retail"
      ],
      "areas": [
        "Hydra",
        "Bab Ezzouar"
      ],
      "note": "Algiers businesses are expanding digital channels to a large domestic market.",
      "wave": 3
    },
    {
      "country": "Morocco",
      "countrySlug": "morocco",
      "cc": "MA",
      "city": "Marrakech",
      "slug": "marrakech",
      "region": "Africa",
      "currency": "MAD",
      "utc": 1,
      "languages": "Arabic, French, English",
      "industries": [
        "tourism",
        "hospitality",
        "crafts"
      ],
      "areas": [
        "Guéliz",
        "Hivernage"
      ],
      "note": "Marrakech's riads and resorts compete for international travellers online.",
      "wave": 3
    },
    {
      "country": "Morocco",
      "countrySlug": "morocco",
      "cc": "MA",
      "city": "Rabat",
      "slug": "rabat",
      "region": "Africa",
      "currency": "MAD",
      "utc": 1,
      "languages": "Arabic, French, English",
      "industries": [
        "government",
        "technology",
        "education"
      ],
      "areas": [
        "Hay Riad",
        "Agdal"
      ],
      "note": "Rabat is Morocco's capital and an emerging tech hub.",
      "wave": 3
    },
    {
      "country": "Senegal",
      "countrySlug": "senegal",
      "cc": "SN",
      "city": "Dakar",
      "slug": "dakar",
      "region": "Africa",
      "currency": "XOF",
      "utc": 0,
      "languages": "French, English",
      "industries": [
        "telecommunications",
        "fintech",
        "logistics"
      ],
      "areas": [
        "Plateau",
        "Almadies"
      ],
      "note": "Dakar is a francophone West African hub for fintech and telecoms.",
      "wave": 3
    },
    {
      "country": "Côte d'Ivoire",
      "countrySlug": "cote-d-ivoire",
      "cc": "CI",
      "city": "Abidjan",
      "slug": "abidjan",
      "region": "Africa",
      "currency": "XOF",
      "utc": 0,
      "languages": "French, English",
      "industries": [
        "cocoa and trade",
        "banking",
        "telecommunications"
      ],
      "areas": [
        "Plateau",
        "Cocody"
      ],
      "note": "Abidjan is the economic capital of francophone West Africa.",
      "wave": 3
    },
    {
      "country": "Nigeria",
      "countrySlug": "nigeria",
      "cc": "NG",
      "city": "Abuja",
      "slug": "abuja",
      "region": "Africa",
      "currency": "NGN",
      "utc": 1,
      "languages": "English",
      "industries": [
        "government",
        "oil and gas",
        "real estate"
      ],
      "areas": [
        "Central Business District",
        "Maitama"
      ],
      "note": "Abuja is Nigeria's capital with strong government and corporate presence.",
      "wave": 3
    },
    {
      "country": "Ethiopia",
      "countrySlug": "ethiopia",
      "cc": "ET",
      "city": "Addis Ababa",
      "slug": "addis-ababa",
      "region": "Africa",
      "currency": "ETB",
      "utc": 3,
      "languages": "Amharic, English",
      "industries": [
        "aviation",
        "manufacturing",
        "agriculture"
      ],
      "areas": [
        "Bole",
        "Kazanchis"
      ],
      "note": "Addis Ababa is a diplomatic hub and fast-growing economy.",
      "wave": 3
    },
    {
      "country": "Tanzania",
      "countrySlug": "tanzania",
      "cc": "TZ",
      "city": "Dar es Salaam",
      "slug": "dar-es-salaam",
      "region": "Africa",
      "currency": "TZS",
      "utc": 3,
      "languages": "Swahili, English",
      "industries": [
        "logistics",
        "mining",
        "tourism"
      ],
      "areas": [
        "Masaki",
        "Oyster Bay"
      ],
      "note": "Dar es Salaam is East Africa's major port and commercial city.",
      "wave": 3
    },
    {
      "country": "Uganda",
      "countrySlug": "uganda",
      "cc": "UG",
      "city": "Kampala",
      "slug": "kampala",
      "region": "Africa",
      "currency": "UGX",
      "utc": 3,
      "languages": "English, Swahili",
      "industries": [
        "agriculture",
        "telecommunications",
        "fintech"
      ],
      "areas": [
        "Kololo",
        "Nakasero"
      ],
      "note": "Kampala's mobile-first economy is adopting digital services quickly.",
      "wave": 3
    },
    {
      "country": "Mauritius",
      "countrySlug": "mauritius",
      "cc": "MU",
      "city": "Port Louis",
      "slug": "port-louis",
      "region": "Africa",
      "currency": "MUR",
      "utc": 4,
      "languages": "English, French",
      "industries": [
        "financial services",
        "tourism",
        "BPO"
      ],
      "areas": [
        "Ebène",
        "Caudan"
      ],
      "note": "Mauritius shares Dubai's time zone and is a regional financial services centre.",
      "wave": 3
    },
    {
      "country": "South Africa",
      "countrySlug": "south-africa",
      "cc": "ZA",
      "city": "Durban",
      "slug": "durban",
      "region": "Africa",
      "currency": "ZAR",
      "utc": 2,
      "languages": "English, Zulu",
      "industries": [
        "logistics",
        "manufacturing",
        "tourism"
      ],
      "areas": [
        "Umhlanga",
        "Berea"
      ],
      "note": "Durban operates Africa's busiest port.",
      "wave": 3
    },
    {
      "country": "Zambia",
      "countrySlug": "zambia",
      "cc": "ZM",
      "city": "Lusaka",
      "slug": "lusaka",
      "region": "Africa",
      "currency": "ZMW",
      "utc": 2,
      "languages": "English",
      "industries": [
        "mining",
        "agriculture",
        "retail"
      ],
      "areas": [
        "Rhodes Park",
        "Longacres"
      ],
      "note": "Lusaka is modernising with growing retail and services sectors.",
      "wave": 3
    },
    {
      "country": "Botswana",
      "countrySlug": "botswana",
      "cc": "BW",
      "city": "Gaborone",
      "slug": "gaborone",
      "region": "Africa",
      "currency": "BWP",
      "utc": 2,
      "languages": "English, Setswana",
      "industries": [
        "diamonds",
        "financial services",
        "government"
      ],
      "areas": [
        "CBD",
        "Fairgrounds"
      ],
      "note": "Gaborone is a stable, well-governed business centre in southern Africa.",
      "wave": 3
    },
    {
      "country": "Angola",
      "countrySlug": "angola",
      "cc": "AO",
      "city": "Luanda",
      "slug": "luanda",
      "region": "Africa",
      "currency": "AOA",
      "utc": 1,
      "languages": "Portuguese, English",
      "industries": [
        "oil and gas",
        "construction",
        "banking"
      ],
      "areas": [
        "Ilha",
        "Talatona"
      ],
      "note": "Luanda's businesses are diversifying beyond oil.",
      "wave": 3
    }
  ],
  "services": [
    {
      "slug": "ai-consulting",
      "name": "AI Consulting",
      "role": "AI Consultant",
      "kw": [
        "best ai consultant in {c}",
        "ai consultant {c}",
        "ai consulting services {c}",
        "ai consulting company {c}",
        "ai strategy consultant {c}"
      ],
      "h1": "Best AI Consultant in {c}",
      "pitch": "AI strategy, implementation and adoption, from finding the use cases that pay off to running working systems.",
      "dubai": "/dubai/ai-consultant"
    },
    {
      "slug": "ai-automation",
      "name": "AI & Business Automation",
      "role": "AI Automation Consultant",
      "kw": [
        "ai automation agency {c}",
        "business automation {c}",
        "workflow automation {c}",
        "ai automation consultant {c}",
        "business process automation {c}"
      ],
      "h1": "AI Automation Consultant in {c}",
      "pitch": "Automating repetitive work across sales, operations and finance with AI workflows connected to your existing tools.",
      "dubai": "/dubai/ai-automation"
    },
    {
      "slug": "ai-chatbots",
      "name": "AI Agents & Chatbots",
      "role": "AI Chatbot Developer",
      "kw": [
        "ai chatbot development {c}",
        "ai agent development {c}",
        "whatsapp chatbot {c}",
        "ai customer service {c}",
        "voice ai agent {c}"
      ],
      "h1": "AI Agents & Chatbots in {c}",
      "pitch": "AI agents that answer customers, qualify leads and book meetings 24/7 on WhatsApp, web chat and voice.",
      "dubai": "/dubai/ai-agents"
    },
    {
      "slug": "custom-crm-erp",
      "name": "Custom CRM & ERP Development",
      "role": "Custom CRM & ERP Developer",
      "kw": [
        "custom crm development {c}",
        "crm development company {c}",
        "custom erp development {c}",
        "erp software {c}",
        "business software development {c}"
      ],
      "h1": "Custom CRM & ERP Development in {c}",
      "pitch": "One connected system for sales, operations and finance, built around how your business works and enhanced with AI.",
      "dubai": "/dubai/custom-crm-development"
    },
    {
      "slug": "performance-marketing",
      "name": "Performance Marketing",
      "role": "Performance Marketer",
      "kw": [
        "best performance marketer in {c}",
        "performance marketing agency {c}",
        "performance marketing consultant {c}",
        "growth marketing {c}",
        "paid media specialist {c}"
      ],
      "h1": "Best Performance Marketer in {c}",
      "pitch": "Revenue-focused campaigns across Google, Meta, TikTok and LinkedIn, optimised on real sales data from your CRM.",
      "dubai": "/dubai/performance-marketing"
    },
    {
      "slug": "google-ads",
      "name": "Google Ads Management",
      "role": "Google Ads Expert",
      "kw": [
        "google ads expert {c}",
        "google ads agency {c}",
        "ppc management {c}",
        "google ads consultant {c}",
        "ppc specialist {c}"
      ],
      "h1": "Google Ads Expert in {c}",
      "pitch": "Search, Performance Max, Shopping and YouTube campaigns built to bring buyers, not just clicks.",
      "dubai": "/dubai/google-ads"
    },
    {
      "slug": "seo",
      "name": "SEO & AI Search",
      "role": "SEO Consultant",
      "kw": [
        "seo consultant {c}",
        "seo services {c}",
        "seo expert {c}",
        "ai seo {c}",
        "local seo {c}"
      ],
      "h1": "SEO Consultant in {c}",
      "pitch": "Technical SEO, content and AI search optimisation so the right customers find you on Google and in AI answers.",
      "dubai": "/dubai/seo"
    },
    {
      "slug": "digital-marketing",
      "name": "Digital Marketing",
      "role": "Digital Marketing Consultant",
      "kw": [
        "digital marketing consultant {c}",
        "digital marketing agency {c}",
        "digital marketing specialist {c}",
        "social media marketing {c}",
        "online marketing {c}"
      ],
      "h1": "Digital Marketing Consultant in {c}",
      "pitch": "An integrated plan across paid ads, SEO, social media and conversion optimisation, measured on leads and revenue.",
      "dubai": "/dubai/digital-marketing-consultant"
    }
  ],
  "liveWave": 1
};
