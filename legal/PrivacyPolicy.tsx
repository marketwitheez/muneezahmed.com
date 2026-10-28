import { SEO } from "../SEO";

const SECTIONS = [
  {
    "h": "Who we are",
    "t": "This website is operated by Muneez Ahmed, an AI and growth consultant based in Dubai, United Arab Emirates. Contact: hello@muneezahmed.com."
  },
  {
    "h": "Information we collect",
    "t": "Information you provide through contact and meeting forms, WhatsApp or email, such as your name, email address, phone number, company and project details. We also collect limited technical data automatically, including device, browser, pages visited and referring source, through cookies and analytics tools."
  },
  {
    "h": "How we use your information",
    "t": "To respond to enquiries, schedule meetings, prepare proposals, deliver services, send information you have requested, improve this website and measure the performance of our marketing. We do not sell your personal information."
  },
  {
    "h": "Cookies and analytics",
    "t": "We use cookies and similar technologies, including Google Analytics and advertising pixels from Google and Meta, to understand how the site is used and to measure campaigns. You can control cookies through your browser settings."
  },
  {
    "h": "Sharing your information",
    "t": "We share information only with service providers who help us operate the website and deliver services, such as hosting, email, CRM, scheduling and analytics providers, and only as needed. We may disclose information where required by law."
  },
  {
    "h": "Data retention and security",
    "t": "We keep personal information only as long as needed for the purposes above or as required by law, and we use reasonable technical and organisational measures to protect it."
  },
  {
    "h": "Your rights",
    "t": "Subject to applicable law, including the UAE Personal Data Protection Law, you may request access to, correction of or deletion of your personal information, or object to certain processing. Email hello@muneezahmed.com to make a request."
  },
  {
    "h": "International transfers",
    "t": "Some service providers may process data outside the UAE. Where this happens, we take steps to ensure your information remains protected."
  },
  {
    "h": "Changes to this policy",
    "t": "We may update this policy from time to time. The latest version will always be available on this page."
  }
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy | Muneez Ahmed" description="How Muneez Ahmed collects, uses and protects personal information submitted through this website." keywords="privacy policy, muneez ahmed" structuredData={{ "@context": "https://schema.org", "@type": "WebPage", name: "Privacy Policy", url: "https://www.muneezahmed.com/privacy-policy", dateModified: "2026-10-28" }} />
      <main className="min-h-screen bg-background text-foreground px-6 py-16">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: 28 October 2026</p>
          <div className="space-y-8">
            {SECTIONS.map((s, i) => (
              <section key={s.h}>
                <h2 className="text-xl font-semibold mb-2">{i + 1}. {s.h}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.t}</p>
              </section>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}
