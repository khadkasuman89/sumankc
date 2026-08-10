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
import familyBuddhaPark from "@/assets/family-buddha-park.jpg";
import teaGarden from "@/assets/tea-garden.jpg";
import highwayRoadcut from "@/assets/highway-roadcut.jpg";
import mirikLake from "@/assets/mirik-lake.jpg";
import familyShivaTemple from "@/assets/family-shiva-temple.jpg";

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
  { src: familyBuddhaPark, alt: "Er. Suman Khadka with family at Buddha Park, Ravangla", caption: "Family at Buddha Park" },
  { src: familyShivaTemple, alt: "Er. Suman Khadka with family at Char Dham Shiva temple", caption: "Family Pilgrimage" },
  { src: teaGarden, alt: "Er. Suman Khadka at a hillside tea garden", caption: "Hillside Tea Gardens" },
  { src: mirikLake, alt: "Er. Suman Khadka beside a hill station lake", caption: "Lakeside Retreat" },
  { src: highwayRoadcut, alt: "Er. Suman Khadka on a highway beside a rock cut slope", caption: "On the Highway" },
];

const PREVIEW_COUNT = 6;

export function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? photos : photos.slice(0, PREVIEW_COUNT);

  return (
    <section id="gallery" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments & memories"
          description="A glimpse into life beyond engineering."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
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

        {photos.length > PREVIEW_COUNT && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 border border-foreground px-7 py-4 font-nav text-sm font-bold uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              {showAll ? "Show fewer photos" : `View all ${photos.length} photos`}
              <span aria-hidden>{showAll ? "↑" : "↓"}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
