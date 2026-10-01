import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
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
  { src: portrait, alt: "Er. Suman Khadka — official portrait" },
  { src: couple, alt: "Er. Suman Khadka with Mrs. Baneeka Thapa" },
  { src: weddingCeremony, alt: "Wedding ceremony of Er. Suman Khadka and Mrs. Baneeka Thapa" },
  { src: engagementPortrait, alt: "Er. Suman Khadka and Mrs. Baneeka Thapa in traditional attire by the water" },
  { src: coupleSaree, alt: "Er. Suman Khadka with Mrs. Baneeka Thapa in red saree" },
  { src: redCarpet, alt: "Er. Suman Khadka at a ceremonial event" },
  { src: teamOffice, alt: "Er. Suman Khadka with project team at the divisional office" },
  { src: paddleboard, alt: "Er. Suman Khadka paddleboarding on Phewa Lake, Pokhara" },
  { src: mustangLake, alt: "Er. Suman Khadka by a turquoise lake in Mustang" },
  { src: marpha, alt: "Er. Suman Khadka and Mrs. Baneeka Thapa in Thakali traditional dress" },
  { src: familyBuddhaPark, alt: "Er. Suman Khadka with family at Buddha Park, Ravangla" },
  { src: familyShivaTemple, alt: "Er. Suman Khadka with family at Char Dham Shiva temple" },
  { src: teaGarden, alt: "Er. Suman Khadka at a hillside tea garden" },
  { src: mirikLake, alt: "Er. Suman Khadka beside a hill station lake" },
  { src: highwayRoadcut, alt: "Er. Suman Khadka on a highway beside a rock cut slope" },
];

const PREVIEW_COUNT = 6;

export function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const { t } = useI18n();
  const g = t.gallery;
  const items = photos.map((p, i) => ({ ...p, caption: g.captions[i] ?? "" }));
  const [official, ...personal] = items;
  const visible = showAll ? personal : personal.slice(0, PREVIEW_COUNT);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (d: number) => setActive((i) => (i === null ? i : (i + d + personal.length) % personal.length)),
    [personal.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  const current = active !== null ? personal[active] : null;

  return (
    <section id="personal" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={g.eyebrow} title={g.title} description={g.description} />

        <div className="grid gap-10 lg:grid-cols-4">
          <figure className="lg:col-span-1">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              {g.portraitLabel}
            </div>
            <div className="overflow-hidden border border-border bg-card">
              <img src={official.src} alt={official.alt} loading="lazy" className="h-auto w-full" />
            </div>
          </figure>

          <div className="lg:col-span-3">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              {g.personalLabel}
            </div>
            <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {visible.map((p, i) => (
                <li key={p.src} className="mb-4 break-inside-avoid">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="group block w-full overflow-hidden border border-border bg-card text-left"
                    aria-label={p.caption || p.alt}
                  >
                    <img
                      src={p.src}
                      alt={p.alt}
                      loading="lazy"
                      className="h-auto w-full transition-opacity duration-300 group-hover:opacity-90"
                    />
                    <span className="block border-t border-border px-3 py-2 text-xs font-semibold">
                      {p.caption}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            {personal.length > PREVIEW_COUNT && (
              <div className="mt-8 flex justify-center">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => setShowAll((v) => !v)}
                  className="h-auto px-7 py-4 text-sm font-bold uppercase tracking-[0.14em]"
                >
                  {showAll ? g.showFewer : g.viewAll(personal.length)}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption || current.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4"
          onClick={close}
        >
          <figure className="relative max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.alt} className="max-h-[80vh] w-auto object-contain" />
            <figcaption className="mt-3 text-center text-sm font-semibold">{current.caption}</figcaption>
          </figure>
          <Button autoFocus variant="outline" size="icon" aria-label={g.close} onClick={close} className="absolute right-4 top-4">
            <X className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" aria-label={g.prev} onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute left-4 top-1/2 -translate-y-1/2">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" aria-label={g.next} onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute right-4 top-1/2 -translate-y-1/2">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      )}
    </section>
  );
}
