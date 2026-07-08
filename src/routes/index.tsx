import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Experience } from "@/components/portfolio/experience";
import { Research } from "@/components/portfolio/research";
import { Skills } from "@/components/portfolio/skills";
import { Education } from "@/components/portfolio/education";

import { Gallery } from "@/components/portfolio/gallery";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { FloatingActions } from "@/components/portfolio/floating-actions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Er. Suman Khadka | Civil Engineer Nepal" },
      {
        name: "description",
        content:
          "Civil Engineer from Pulchowk Campus (IOE) specializing in structural design, transportation engineering, project estimation, and construction management in Nepal.",
      },
      { property: "og:title", content: "Er. Suman Khadka | Civil Engineer Nepal" },
      {
        property: "og:description",
        content:
          "Structural design, transportation engineering, and engineering consultancy services in Nepal.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Er. Suman Khadka",
          jobTitle: "Civil Engineer",
          email: "mailto:khadkasuman89@gmail.com",
          telephone: "+977-9818486399",
          url: "https://suman-khadka.com.np",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Itahari, Sunsari",
            addressCountry: "Nepal",
          },
          worksFor: {
            "@type": "GovernmentOrganization",
            name: "Department of Water Supply and Sewerage Management, Government of Nepal",
          },
          spouse: "Mrs. Baneeka Thapa Khadka",
          alumniOf: [
            "Pulchowk Engineering Campus, IOE, Tribhuvan University",
            "Mid-West University, Surkhet",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Research />
        <Skills />
        <Education />
        
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <Toaster richColors position="top-right" />
    </div>
  );
}
