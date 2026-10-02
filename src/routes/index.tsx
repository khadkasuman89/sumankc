import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { CredentialStrip } from "@/components/portfolio/credential-strip";
import { About } from "@/components/portfolio/about";
import { Experience } from "@/components/portfolio/experience";
import { Research } from "@/components/portfolio/research";
import { Education } from "@/components/portfolio/education";
import { Documents } from "@/components/portfolio/documents";
import { Gallery } from "@/components/portfolio/gallery";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { FloatingActions } from "@/components/portfolio/floating-actions";
import { SelectedWorks } from "@/components/portfolio/selected-works";
import { LanguageProvider } from "@/lib/i18n";

const SITE = "https://www.suman-khadka.com.np";
const TITLE = "Er. Suman Khadka | Civil Engineer | Construction Management | Nepal";
const DESC =
  "Civil Engineer and Construction Management professional from Nepal with experience in public infrastructure, water supply, procurement, contract administration, construction supervision and engineering research.";

const person = {
  "@type": "Person",
  name: "Er. Suman Khadka",
  jobTitle: "Gazetted (Class III) Engineer (Civil)",
  email: "mailto:er.sumankhadka@gmail.com",
  url: SITE,
  address: { "@type": "PostalAddress", addressRegion: "Koshi Province", addressCountry: "Nepal" },
  worksFor: {
    "@type": "GovernmentOrganization",
    name: "Department of Water Supply and Sewerage Management, Government of Nepal",
  },
  alumniOf: ["Pulchowk Engineering Campus, IOE, Tribhuvan University", "Mid-West University, Surkhet"],
};

const articles = [
  {
    headline:
      "A Study on Bidding Trend and Performance of Construction Projects: A Case Study of Water Supply Projects in Koshi Province, Nepal",
    datePublished: "2026",
    isPartOf: "International Journal on Engineering Technology and Infrastructure Development",
    url: "https://doi.org/10.3126/injet-indev.v2i2.95726",
  },
  {
    headline: "Evaluation of Factors Causing Cost Variation in Construction of Water Supply Projects in Nepal",
    datePublished: "2025",
    isPartOf: "Mid-West University Journal of Engineering & Innovation",
    url: "https://doi.org/10.3126/mujoei.v1i1.91107",
  },
  {
    headline:
      "Ranking of Public Bus Alternatives Using Hybrid Multi-Criteria Decision Making Approach Under Fuzzy Environment: A Case Study of Kathmandu",
    datePublished: "2018",
    isPartOf: "MAT Journal of Transportation Systems",
  },
].map((a) => ({
  "@type": "ScholarlyArticle",
  ...a,
  isPartOf: { "@type": "Periodical", name: a.isPartOf },
  author: { "@type": "Person", name: "Suman Khadka" },
}));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/` },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({ "@context": "https://schema.org", "@graph": [person, ...articles] }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <CredentialStrip />
          <About />
          <Education />
          <Experience />
          <SelectedWorks />
          <Gallery />
          <Research />
          <Documents />
          <Contact />
        </main>
        <Footer />
        <FloatingActions />
        <Toaster richColors position="top-right" />
      </div>
    </LanguageProvider>
  );
}
