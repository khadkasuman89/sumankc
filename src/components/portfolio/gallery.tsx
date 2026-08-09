import { SectionHeading } from "./section-heading";
import portrait from "@/assets/suman-portrait.png";
import couple from "@/assets/suman-baneeka.jpg";
import weddingCeremony from "@/assets/wedding-ceremony.jpg";
import engagementPortrait from "@/assets/engagement-portrait.jpg";
import coupleSaree from "@/assets/couple-saree.jpg";
import redCarpet from "@/assets/red-carpet.jpg";
import teamOffice from "@/assets/team-office.png";
import paddleboard from "@/assets/paddleboard-pokhara.jpg";
import mustangLake from "@/assets/mustang-lake.jpg";
import marpha from "@/assets/marpha-traditional.jpg";

const photos = [
  { src: portrait, alt: "Er. Suman Khadka — official portrait", caption: "Official Portrait" },
  { src: couple, alt: "Er. Suman Khadka with Mrs. Baneeka Thapa Khadka", caption: "With Mrs. Baneeka Thapa Khadka" },
  { src: weddingCeremony, alt: "Wedding ceremony of Er. Suman Khadka and Mrs. Baneeka Thapa Khadka", caption: "Wedding Ceremony" },
  { src: engagementPortrait, alt: "Er. Suman Khadka and Mrs. Baneeka Thapa Khadka in traditional attire by the water", caption: "Engagement Portrait" },
  { src: coupleSaree, alt: "Er. Suman Khadka with Mrs. Baneeka Thapa Khadka in red saree", caption: "Together in Nepal" },
  { src: redCarpet, alt: "Er. Suman Khadka at a ceremonial event", caption: "Ceremonial Event" },
  { src: teamOffice, alt: "Er. Suman Khadka with project team at the divisional office", caption: "Project Team" },
  { src: paddleboard, alt: "Er. Suman Khadka paddleboarding on Phewa Lake, Pokhara", caption: "Phewa Lake, Pokhara" },
  { src: mustangLake, alt: "Er. Suman Khadka by a turquoise lake in Mustang", caption: "Mustang Highlands" },
  { src: marpha, alt: "Er. Suman Khadka and Mrs. Baneeka Thapa Khadka in Thakali traditional dress", caption: "Traditional Thakali Attire" },
];



export function Gallery() {
  return (
    <section id="gallery" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments & memories"
          description="A glimpse into life beyond engineering."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p) => (
            <figure
              key={p.src}
              className="group relative overflow-hidden border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent p-4 text-sm font-semibold">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
