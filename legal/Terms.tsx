import { SEO } from "../SEO";

const SECTIONS = [
  {
    "h": "Acceptance",
    "t": "By using this website you agree to these terms. If you do not agree, please do not use the site."
  },
  {
    "h": "Services",
    "t": "Information on this website describes consulting, AI, automation, software and marketing services. Any engagement is governed by a separate written proposal or agreement setting out scope, timeline, fees and deliverables."
  },
  {
    "h": "No guarantees",
    "t": "Results described on this website, including case studies and testimonials, reflect past work and are not a guarantee of future outcomes. Results depend on many factors outside our control."
  },
  {
    "h": "Intellectual property",
    "t": "All content on this website, including text, design and graphics, belongs to Muneez Ahmed unless stated otherwise and may not be copied without permission. Ownership of client deliverables is defined in each client agreement."
  },
  {
    "h": "Use of the website",
    "t": "You agree not to misuse the website, attempt to gain unauthorised access, or use it for unlawful purposes."
  },
  {
    "h": "Third-party links",
    "t": "This website may link to third-party sites, including Skilleaze and StrattIQ. We are not responsible for the content or practices of those sites."
  },
  {
    "h": "Limitation of liability",
    "t": "To the extent permitted by law, we are not liable for any indirect or consequential loss arising from use of this website or reliance on its content."
  },
  {
    "h": "Governing law",
    "t": "These terms are governed by the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates, and disputes are subject to the courts of Dubai."
  },
  {
    "h": "Contact",
    "t": "Questions about these terms can be sent to hello@muneezahmed.com."
  }
];

export default function Terms() {
  return (
    <>
      <SEO title="Terms & Conditions | Muneez Ahmed" description="Terms and conditions for using muneezahmed.com and its consulting, AI and marketing services." keywords="terms & conditions, muneez ahmed" structuredData={{ "@context": "https://schema.org", "@type": "WebPage", name: "Terms & Conditions", url: "https://www.muneezahmed.com/terms", dateModified: "2026-10-28" }} />
      <main className="min-h-screen bg-background text-foreground px-6 py-16">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Terms & Conditions</h1>
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
