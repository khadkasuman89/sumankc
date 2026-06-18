import { MapPin, Mail, Heart, Building2 } from "lucide-react";
import { SectionHeading } from "./section-heading";

const info = [
  { icon: MapPin, label: "Location", value: "Itahari, Sunsari, Nepal" },
  { icon: Building2, label: "Employer", value: "Government of Nepal — DWSSM" },
  { icon: Mail, label: "Email", value: "khadkasuman89@gmail.com" },
  { icon: Heart, label: "Spouse", value: "Mrs. Baneeka Thapa Khadka" },
];

export function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering rooted in research & rigor"
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">Er. Suman Khadka</span> is a Civil
              Engineer serving the <span className="font-semibold text-foreground">Government of
              Nepal</span> under the Ministry of Infrastructure Development, Department of Water
              Supply and Sewerage Management — currently posted at the Integrated Water Supply
              and Sewerage Management Project, Itahari.
            </p>
            <p>
              He has been working in Nepal&rsquo;s public infrastructure sector since
              <span className="font-semibold text-foreground"> 2019</span>, focusing on water
              supply, sewerage, and construction management. He holds a Bachelor&rsquo;s in Civil
              Engineering from Pulchowk Campus (IOE) and recently completed his
              <span className="font-semibold text-foreground"> Master&rsquo;s in Construction
              Management</span> from Mid-West University, Surkhet (2024–2026).
            </p>
            <p>
              His practice blends modern computational tools — ETABS, SAP2000, HEC-RAS, Civil 3D —
              with on-the-ground site supervision, BOQ preparation, and project coordination.
              Happily married to <span className="font-semibold text-foreground">Mrs. Baneeka
              Thapa Khadka</span>.
            </p>
          </div>

          <div className="lg:col-span-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {info.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-card transition-transform hover:-translate-y-0.5"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {label}
                  </div>
                  <div className="truncate text-sm font-semibold">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
