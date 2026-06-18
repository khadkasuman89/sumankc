import { SectionHeading } from "./section-heading";
import portrait from "@/assets/suman-portrait.jpg.asset.json";
import couple from "@/assets/suman-baneeka.jpg.asset.json";

const photos = [
  { src: portrait.url, alt: "Er. Suman Khadka — official portrait", caption: "Official Portrait" },
  { src: couple.url, alt: "Er. Suman Khadka with Mrs. Baneeka Thapa Khadka", caption: "With Mrs. Baneeka Thapa Khadka" },
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
              className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
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
